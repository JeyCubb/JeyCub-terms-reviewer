/**
 * JeyCub Terms Reviewer - Application Engine
 * Fast, reliable, local-first & cloud-synced review app for Engineering Board Exams.
 * Hides the bottom toggle button completely when the hints drawer is shown.
 */

// Global State
let state = {
  currentSubject: 'basic_electronics', // 'basic_electronics', 'fluid_mechanics', 'deformable_bodies', 'heat_transfer'
  currentMode: 'practice', // 'practice', 'all'
  practiceFilter: 'all', // 'all', 'weak', 'bookmarked'
  currentIndex: 0,
  randomMode: false,
  randomSequence: [], // Array of question indices in randomized alignment order
  randomSequencePos: 0, // Current position in the randomSequence alignment
  shuffledOptionsMap: {}, // Cache jumbled options per question key
  userAnswers: {}, // Master answers for All Questions mode
  sessionPoolAnswers: {}, // Transient answers for Weak / Bookmarked practice sessions
  bookmarks: new Set(), // Shared class bookmarks (synced globally in Firebase for all users)
  liveNotes: {}, // { "subject_qId": [{ id, name, text, date, firebaseKey }] }
  groupMistakes: {}, // { "subject_qId": mistakeCount } shared class weak memory (synced globally)
  notesOpen: false,
  
  // Firebase Database Handle for notes, shared bookmarks & group mistakes
  firebaseDb: null,
  activeLiveListenerRef: null,

  // Formulas Mode State
  formulaState: {
    currentTab: 'quiz', // 'quiz' or 'sheet'
    currentCategory: 'all',
    currentIndex: 0,
    currentInput: '',
    revealedHint: false,
    checkedResult: null,
    schematicOpen: false,
    searchQuery: '',
    mastered: {}
  }
};

let toastTimeoutId = null;

// Free Public Firebase Config for shared notes, shared bookmarks & group mistakes compilation
const DEFAULT_FIREBASE_CONFIG = {
  databaseURL: "https://fluid-mechanics-reviewer-default-rtdb.firebaseio.com"
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadStoredData();
  updateSubjectUI();
  updateRandomButtonUI();

  const questions = getFilteredPracticeQuestions();
  if (questions && questions.length > 0) {
    if (state.currentIndex >= questions.length) {
      state.currentIndex = 0;
    }
    if (state.randomMode) {
      if (!state.randomSequence || state.randomSequence.length !== questions.length) {
        generateRandomSequence(questions);
      }
      if (state.randomSequence && state.randomSequence.length > 0) {
        const foundPos = state.randomSequence.indexOf(state.currentIndex);
        if (foundPos !== -1) {
          state.randomSequencePos = foundPos;
        } else {
          state.randomSequencePos = 0;
          state.currentIndex = state.randomSequence[0];
        }
      }
    }
  }

  saveCurrentIndex();
  renderCurrentPracticeQuestion();
  updateStats();
  filterAllQuestions();
  initFirebase();
  initKeyboardShortcuts();
  initNotesInputSubmit();
  initPreventDoubleTapZoom();
  initScrollSnapInstant();
});

function scrollToBottomInstant() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
}

function scrollToTopInstant() {
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* Instant Wheel / Scroll Handler: 1 wheel notch up = Page Up, 1 wheel notch down = Page Down */
function initScrollSnapInstant() {
  let isSnapping = false;

  window.addEventListener('wheel', (e) => {
    if (state.currentMode !== 'practice') return;
    const active = document.activeElement;
    if (active && (active.tagName === 'TEXTAREA' || active.tagName === 'INPUT')) return;

    if (Math.abs(e.deltaY) < 2) return;

    if (e.deltaY > 0 && !isSnapping) {
      isSnapping = true;
      scrollToBottomInstant();
      setTimeout(() => { isSnapping = false; }, 180);
    } else if (e.deltaY < 0 && !isSnapping) {
      isSnapping = true;
      scrollToTopInstant();
      setTimeout(() => { isSnapping = false; }, 180);
    }
  }, { passive: true });
}

/* Prevent double-tap zoom on mobile devices */
function initPreventDoubleTapZoom() {
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      const target = e.target;
      if (target && target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
        e.preventDefault();
      }
    }
    lastTouchEnd = now;
  }, { passive: false });
}

/* Initialize Enter key submission for notes */
function initNotesInputSubmit() {
  const textInput = document.getElementById('live-text-input');
  const nameInput = document.getElementById('live-name-input');

  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (textInput) textInput.focus();
      }
    });
  }

  if (textInput) {
    textInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        postLiveSharedNote();
      }
    });
  }
}

/* Helper to get global subject dataset safely */
function getSubjectData() {
  if (typeof SUBJECT_DATA !== 'undefined') return SUBJECT_DATA;
  if (typeof window !== 'undefined' && window.SUBJECT_DATA) return window.SUBJECT_DATA;
  return {};
}

function getActiveQuestions() {
  const data = getSubjectData();
  if (!data[state.currentSubject]) {
    state.currentSubject = 'basic_electronics';
  }
  return (data[state.currentSubject] && Array.isArray(data[state.currentSubject].questions)) 
    ? data[state.currentSubject].questions 
    : [];
}

function getActiveSubjectInfo() {
  const data = getSubjectData();
  if (!data[state.currentSubject]) {
    state.currentSubject = 'basic_electronics';
  }
  return data[state.currentSubject] || { title: 'Basic Electronics (ECE 005)', chapter: '' };
}

/* Returns practice questions filtered by shared class pools (All, Weak, Bookmarked) */
function getFilteredPracticeQuestions() {
  const allQs = getActiveQuestions();
  if (state.practiceFilter === 'bookmarked') {
    return allQs.filter(q => {
      const key = `${state.currentSubject}_q${q.id}`;
      return state.bookmarks.has(key);
    });
  } else if (state.practiceFilter === 'weak') {
    const pool = allQs.filter(q => {
      const key = `${state.currentSubject}_q${q.id}`;
      return (state.groupMistakes[key] || 0) > 0;
    });
    return pool.sort((a, b) => {
      const keyA = `${state.currentSubject}_q${a.id}`;
      const keyB = `${state.currentSubject}_q${b.id}`;
      return (state.groupMistakes[keyB] || 0) - (state.groupMistakes[keyA] || 0);
    });
  } else if (state.practiceFilter === 'prelim_exam') {
    return allQs.filter(q => q.id >= 117 && q.id <= 136);
  } else if (state.practiceFilter === 'test8_vessels') {
    return allQs.filter(q => q.id >= 151 && q.id <= 195);
  }
  return allQs;
}

function changePracticeFilter(filterVal) {
  state.practiceFilter = filterVal;
  state.currentIndex = 0;
  state.randomSequence = [];
  state.randomSequencePos = 0;
  hideNotesSection();

  // Blur select dropdown immediately so arrow keys navigate questions
  const select = document.getElementById('practice-filter-select');
  if (select) select.blur();

  // Reset transient pool session answers so Weak and Bookmarked pools present questions fresh & unanswered
  if (filterVal === 'weak' || filterVal === 'bookmarked') {
    state.sessionPoolAnswers = {};
  }

  if (state.randomMode) {
    const questions = getFilteredPracticeQuestions();
    if (questions && questions.length > 0) {
      generateRandomSequence(questions);
      state.currentIndex = state.randomSequence[0];
    }
  }

  renderCurrentPracticeQuestion();
}

function executeJumpFromInput() {
  const input = document.getElementById('jump-number-input');
  if (!input) return;
  const numVal = parseInt(input.value.trim(), 10);
  if (isNaN(numVal)) return;

  const questions = getFilteredPracticeQuestions();
  if (!questions || questions.length === 0) return;

  // Find index of question matching problem ID or 1-based index in active pool
  let foundIndex = questions.findIndex(q => q.id === numVal);
  if (foundIndex === -1 && numVal >= 1 && numVal <= questions.length) {
    foundIndex = numVal - 1;
  }

  if (foundIndex !== -1) {
    state.currentIndex = foundIndex;
    saveCurrentIndex();
    hideNotesSection();
    renderCurrentPracticeQuestion();
    input.value = '';
  } else {
    alert(`Problem #${numVal} not found in the current pool.`);
  }

  input.blur();
}

function handleJumpInputKey(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    executeJumpFromInput();
  }
}

function resetAllSubjectAnswers() {
  const info = getActiveSubjectInfo();
  if (!confirm(`Are you sure you want to reset all your answered practice questions for ${info.title}? (Your class weak questions memory and bookmarks will remain saved)`)) {
    return;
  }

  const questions = getActiveQuestions();
  questions.forEach(q => {
    const key = `${state.currentSubject}_q${q.id}`;
    delete state.userAnswers[key];
    delete state.sessionPoolAnswers[key];
  });

  saveData('jt_user_answers', state.userAnswers);

  // Return to Question 1 upon resetting
  state.currentIndex = 0;
  state.randomSequencePos = 0;
  if (state.randomMode) {
    const pool = getFilteredPracticeQuestions();
    if (pool && pool.length > 0) {
      generateRandomSequence(pool);
      state.currentIndex = state.randomSequence[0];
    }
  }

  saveCurrentIndex(); // Persist Question 1 index to storage
  hideNotesSection();
  renderCurrentPracticeQuestion();
  updateStats();
  if (state.currentMode === 'all') {
    filterAllQuestions();
  }
  scrollToTopInstant();
}

/* ==========================================================================
   Keyboard Shortcuts for PC Navigation, Answers, Hints & Bookmarks
   ========================================================================== */

function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;

    // In Formulas Mode: if typing in the formula input or math-field, Enter checks the formula!
    if (activeEl && (activeEl.id === 'fq-formula-input' || activeEl.id === 'fq-math-field' || activeEl.tagName === 'MATH-FIELD')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        checkFormulaAnswer();
      }
      return;
    }

    // Ignore generic shortcuts if user is actively typing in text fields or math-field
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'MATH-FIELD')) {
      return;
    }

    // Ignore single-key shortcuts if ANY modifier key (Ctrl, Alt, Meta/Cmd) is pressed!
    if (e.ctrlKey || e.altKey || e.metaKey) {
      return;
    }

    // Auto-blur select dropdowns if they currently hold focus when pressing arrow keys, Space, or Backslash
    if (activeEl && activeEl.tagName === 'SELECT') {
      activeEl.blur();
    }

    // FORMULAS MODE KEYBOARD SHORTCUTS
    if (state.currentMode === 'formulas') {
      const fKey = e.key ? e.key.toLowerCase() : '';
      const fCode = e.code ? e.code.toLowerCase() : '';

      if (e.key === 'ArrowRight' || fCode === 'arrowright') {
        e.preventDefault();
        nextFormula();
      } else if (e.key === 'ArrowLeft' || fCode === 'arrowleft') {
        e.preventDefault();
        prevFormula();
      } else if (e.key === ' ' || fKey === 'space' || fCode === 'space' || fKey === 'h') {
        e.preventDefault();
        toggleFormulaHint();
      } else if (fKey === 'c') {
        e.preventDefault();
        clearFormulaInput();
      } else if (['1', '2', '3', '4', '5', '6', '7'].includes(e.key)) {
        e.preventDefault();
        const map = {
          '1': 'superscript',
          '2': 'frac',
          '3': 'subscript',
          '4': 'parens',
          '5': 'equals',
          '6': 'times',
          '7': 'sqrt'
        };
        insertFormulaTemplate(map[e.key]);
      }
      return;
    }

    if (state.currentMode !== 'practice') return;

    const key = e.key ? e.key.toLowerCase() : '';
    const code = e.code ? e.code.toLowerCase() : '';

    if (e.key === ' ' || e.key === 'Spacebar' || key === 'space' || code === 'space') {
      e.preventDefault();
      toggleNotesSection();
    } else if (e.key === '\\' || key === '\\' || code === 'backslash') {
      e.preventDefault();
      toggleBookmarkCurrent(true); // Pass true to trigger toast notification!
    } else if (e.key === 'ArrowRight' || code === 'arrowright') {
      e.preventDefault();
      nextQuestion();
    } else if (e.key === 'ArrowLeft' || code === 'arrowleft') {
      e.preventDefault();
      prevQuestion();
    } else if (key === 'a' || e.key === '1' || code === 'keya' || code === 'digit1') {
      e.preventDefault();
      triggerOptionSelection(0);
    } else if (key === 'b' || e.key === '2' || code === 'keyb' || code === 'digit2') {
      e.preventDefault();
      triggerOptionSelection(1);
    } else if (key === 'c' || e.key === '3' || code === 'keyc' || code === 'digit3') {
      e.preventDefault();
      triggerOptionSelection(2);
    } else if (key === 'd' || e.key === '4' || code === 'keyd' || code === 'digit4') {
      e.preventDefault();
      triggerOptionSelection(3);
    } else if (e.key === 'PageDown' || code === 'pagedown' || e.key === 'End' || code === 'end') {
      e.preventDefault();
      scrollToBottomInstant();
    } else if (e.key === 'PageUp' || code === 'pageup' || e.key === 'Home' || code === 'home') {
      e.preventDefault();
      scrollToTopInstant();
    }
  });
}

function triggerOptionSelection(displayedIdx) {
  const questions = getFilteredPracticeQuestions();
  const q = questions[state.currentIndex];
  if (!q || !q.options) return;
  const key = `${state.currentSubject}_q${q.id}`;
  const shuffled = getShuffledOptionsForQuestion(key, q);
  if (!shuffled || !shuffled[displayedIdx]) return;

  const originalIdx = shuffled[displayedIdx].originalIndex;
  selectPracticeAnswer(key, originalIdx);
}

/* ==========================================================================
   Subject Switcher Logic
   ========================================================================== */

function updateSubjectUI() {
  const info = getActiveSubjectInfo();
  const select = document.getElementById('subject-selector');
  if (select) select.value = state.currentSubject;

  const badge = document.getElementById('subject-badge-name');
  if (badge) badge.textContent = info.title;

  const resetBtnLabel = document.getElementById('reset-subject-name');
  if (resetBtnLabel) resetBtnLabel.textContent = info.title;

  // Dynamically update subject-specific pool filter options
  const optPrelim = document.getElementById('opt-filter-prelim');
  if (optPrelim) {
    optPrelim.style.display = (state.currentSubject === 'basic_electronics') ? '' : 'none';
  }
  const optTest8 = document.getElementById('opt-filter-test8');
  if (optTest8) {
    optTest8.style.display = (state.currentSubject === 'deformable_bodies') ? '' : 'none';
  }

  // Auto-reset filter to 'all' if active filter is incompatible with newly selected subject
  const filterSelect = document.getElementById('practice-filter-select');
  if (filterSelect) {
    if (state.practiceFilter === 'prelim_exam' && state.currentSubject !== 'basic_electronics') {
      state.practiceFilter = 'all';
    } else if (state.practiceFilter === 'test8_vessels' && state.currentSubject !== 'deformable_bodies') {
      state.practiceFilter = 'all';
    }
    filterSelect.value = state.practiceFilter;
  }

  updateFormulasUI();
}

function switchSubject(subjectKey) {
  const data = getSubjectData();
  if (!data[subjectKey]) return;
  state.currentSubject = subjectKey;
  
  const savedIndex = localStorage.getItem(`jt_index_${subjectKey}`);
  if (savedIndex !== null) {
    const parsedIdx = parseInt(savedIndex, 10);
    state.currentIndex = (!isNaN(parsedIdx) && parsedIdx >= 0) ? parsedIdx : 0;
  } else {
    state.currentIndex = 0;
  }

  state.randomSequence = [];
  state.randomSequencePos = 0;
  state.sessionPoolAnswers = {};
  saveCurrentIndex();
  hideNotesSection();

  if (state.randomMode) {
    const questions = getFilteredPracticeQuestions();
    if (questions && questions.length > 0) {
      generateRandomSequence(questions);
      state.currentIndex = state.randomSequence[0];
      saveCurrentIndex();
    }
  }

  const select = document.getElementById('subject-selector');
  if (select) select.blur();

  updateSubjectUI();
  renderCurrentPracticeQuestion();
  updateStats();
  if (state.currentMode === 'all') {
    filterAllQuestions();
  }
}

/* ==========================================================================
   Firebase Realtime Shared Bookmarks, Notes & Group Mistakes Compilation
   ========================================================================== */

function initFirebase() {
  try {
    if (typeof firebase !== 'undefined') {
      if (!firebase.apps.length) {
        firebase.initializeApp(DEFAULT_FIREBASE_CONFIG);
      }
      state.firebaseDb = firebase.database();
      subscribeLiveNotesCurrent();
      subscribeGroupMistakes();
      subscribeSharedBookmarks();
    }
  } catch (e) {
    console.warn('Firebase sync not available, using local storage fallback:', e);
  }
}

/* Group mistakes synced in Realtime for all users */
function subscribeGroupMistakes() {
  if (!state.firebaseDb) return;
  try {
    const ref = state.firebaseDb.ref('group_mistakes');
    ref.on('value', snapshot => {
      const data = snapshot.val();
      state.groupMistakes = (data && typeof data === 'object') ? data : {};
      saveData('jt_group_mistakes_local', state.groupMistakes);
      if (state.practiceFilter === 'weak') {
        renderCurrentPracticeQuestion();
      }
      if (state.currentMode === 'all') {
        filterAllQuestions();
      }
    });
  } catch (e) {
    console.warn('Group mistakes sync exception:', e);
  }
}

/* Shared class bookmarks synced in Realtime for all users */
function subscribeSharedBookmarks() {
  if (!state.firebaseDb) return;
  try {
    const ref = state.firebaseDb.ref('shared_bookmarks');
    ref.on('value', snapshot => {
      const data = snapshot.val();
      const newSet = new Set();
      if (data && typeof data === 'object') {
        Object.keys(data).forEach(key => {
          if (data[key]) newSet.add(key);
        });
      }
      state.bookmarks = newSet;
      saveData('jt_bookmarks', Array.from(state.bookmarks));
      renderCurrentPracticeQuestion();
      updateStats();
      if (state.currentMode === 'all') {
        filterAllQuestions();
      }
    });
  } catch (e) {
    console.warn('Shared bookmarks sync exception:', e);
  }
}

/* Record a mistake globally to build the shared class weak pool */
function recordGroupMistake(key) {
  if (!state.groupMistakes[key]) state.groupMistakes[key] = 0;
  state.groupMistakes[key]++;
  saveData('jt_group_mistakes_local', state.groupMistakes);

  if (state.firebaseDb) {
    try {
      state.firebaseDb.ref(`group_mistakes/${key}`).transaction(current => (current || 0) + 1);
    } catch (e) {
      console.warn("Error recording group mistake in Firebase:", e);
    }
  }
}

/* Toggle shared class bookmark globally in Realtime */
function toggleBookmarkCurrent(triggeredViaKeyboard = false) {
  const questions = getFilteredPracticeQuestions();
  if (!questions[state.currentIndex]) return;
  const qId = questions[state.currentIndex].id;
  const key = `${state.currentSubject}_q${qId}`;

  const wasBookmarked = state.bookmarks.has(key);
  if (wasBookmarked) {
    state.bookmarks.delete(key);
  } else {
    state.bookmarks.add(key);
  }

  saveData('jt_bookmarks', Array.from(state.bookmarks));

  // Realtime Firebase sync across all users for shared class bookmarks
  if (state.firebaseDb) {
    try {
      state.firebaseDb.ref(`shared_bookmarks/${key}`).set(wasBookmarked ? null : true);
    } catch (e) {
      console.warn("Error setting shared bookmark in Firebase:", e);
    }
  }

  // Show tiny toast notification ONLY when triggered via Backslash (\) keyboard shortcut!
  if (triggeredViaKeyboard) {
    showBookmarkToast(!wasBookmarked);
  }

  renderCurrentPracticeQuestion();
  updateStats();
  if (state.currentMode === 'all') {
    filterAllQuestions();
  }
}

function showBookmarkToast(isBookmarked) {
  let toast = document.getElementById('bookmark-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'bookmark-toast';
    toast.className = 'bookmark-toast';
    document.body.appendChild(toast);
  }

  if (toastTimeoutId) clearTimeout(toastTimeoutId);

  if (isBookmarked) {
    toast.innerHTML = `<i class="fa-solid fa-star gold-text"></i> Added to Class Bookmarks!`;
  } else {
    toast.innerHTML = `<i class="fa-regular fa-star"></i> Removed from Bookmarks`;
  }

  // Force browser animation reflow
  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.classList.add('show');

  toastTimeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

/* ==========================================================================
   LocalStorage & Data Persistence
   ========================================================================== */

function saveCurrentIndex() {
  try {
    localStorage.setItem('jt_subject', state.currentSubject);
    localStorage.setItem(`jt_index_${state.currentSubject}`, state.currentIndex);
  } catch (e) {
    console.error('Error saving current index', e);
  }
}

function loadStoredData() {
  try {
    const data = getSubjectData();
    const savedSubject = localStorage.getItem('jt_subject');
    if (savedSubject && data[savedSubject]) {
      state.currentSubject = savedSubject;
    } else {
      state.currentSubject = 'basic_electronics';
    }

    const savedIndex = localStorage.getItem(`jt_index_${state.currentSubject}`);
    if (savedIndex !== null) {
      const parsedIdx = parseInt(savedIndex, 10);
      if (!isNaN(parsedIdx) && parsedIdx >= 0) {
        state.currentIndex = parsedIdx;
      }
    }

    const savedAnswers = localStorage.getItem('jt_user_answers');
    if (savedAnswers) {
      const parsed = JSON.parse(savedAnswers);
      if (parsed && typeof parsed === 'object') state.userAnswers = parsed;
    }

    const savedBookmarks = localStorage.getItem('jt_bookmarks');
    if (savedBookmarks) {
      const parsed = JSON.parse(savedBookmarks);
      if (Array.isArray(parsed)) state.bookmarks = new Set(parsed);
    }

    const savedLive = localStorage.getItem('jt_live_notes_local');
    if (savedLive) {
      const parsed = JSON.parse(savedLive);
      if (parsed && typeof parsed === 'object') state.liveNotes = parsed;
    }

    const savedMistakes = localStorage.getItem('jt_group_mistakes_local');
    if (savedMistakes) {
      const parsed = JSON.parse(savedMistakes);
      if (parsed && typeof parsed === 'object') state.groupMistakes = parsed;
    }

    const savedRandom = localStorage.getItem('jt_random_mode');
    if (savedRandom !== null) {
      state.randomMode = savedRandom === 'true';
    }

    const savedMastered = localStorage.getItem('jt_formulas_mastered');
    if (savedMastered) {
      const parsed = JSON.parse(savedMastered);
      if (parsed && typeof parsed === 'object') state.formulaState.mastered = parsed;
    }

    const savedTheme = localStorage.getItem('fm_theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeIcon(savedTheme);
    }
  } catch (e) {
    console.error('Error loading stored data', e);
  }
}

function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving data', e);
  }
}

/* ==========================================================================
   Navigation & UI Mode Switcher
   ========================================================================== */

function switchMode(mode) {
  state.currentMode = mode;
  document.body.setAttribute('data-mode', mode);

  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.getElementById(`btn-${mode}-mode`);
  if (btn) btn.classList.add('active');

  document.querySelectorAll('.view-section').forEach(view => view.classList.remove('active'));
  const view = document.getElementById(`${mode}-view`);
  if (view) view.classList.add('active');

  if (mode === 'all') {
    filterAllQuestions();
  }
  if (mode === 'formulas') {
    updateFormulasUI();
  }

  // Smoothly scroll to top on mode switch so active view is immediately visible!
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   FORMULAS MODE ENGINE - INTERACTIVE RECALL & REFERENCE
   ========================================================================== */

function getFormulaDataset() {
  if (typeof FORMULA_DATA !== 'undefined' && FORMULA_DATA[state.currentSubject]) {
    return FORMULA_DATA[state.currentSubject];
  }
  if (typeof window !== 'undefined' && window.FORMULA_DATA && window.FORMULA_DATA[state.currentSubject]) {
    return window.FORMULA_DATA[state.currentSubject];
  }
  return [];
}

function getFilteredFormulas() {
  const allFormulas = getFormulaDataset();
  let list = allFormulas;

  if (state.formulaState.currentCategory && state.formulaState.currentCategory !== 'all') {
    list = list.filter(f => f.category === state.formulaState.currentCategory);
  }

  if (state.formulaState.searchQuery && state.formulaState.searchQuery.trim()) {
    const q = state.formulaState.searchQuery.trim().toLowerCase();
    list = list.filter(f => 
      (f.name && f.name.toLowerCase().includes(q)) ||
      (f.targetVariable && f.targetVariable.toLowerCase().includes(q)) ||
      (f.targetPrompt && f.targetPrompt.toLowerCase().includes(q)) ||
      (f.category && f.category.toLowerCase().includes(q)) ||
      (f.canonicalFormula && f.canonicalFormula.toLowerCase().includes(q))
    );
  }

  return list;
}

function updateFormulasUI() {
  const info = getActiveSubjectInfo();
  const countBadge = document.getElementById('formulas-count-badge');
  const allFormulas = getFormulaDataset();

  if (countBadge) {
    countBadge.textContent = `${info.title} (${allFormulas.length})`;
  }

  // Populate category filter pills
  renderFormulaCategoryPills();

  // If in sheet tab, render sheet, else render current formula problem
  if (state.formulaState.currentTab === 'sheet') {
    renderFormulaReferenceSheet();
  } else {
    renderFormulaProblem();
  }
}

function switchFormulaTab(tab) {
  state.formulaState.currentTab = tab;
  
  const quizTabBtn = document.getElementById('btn-tab-formula-quiz');
  const sheetTabBtn = document.getElementById('btn-tab-formula-sheet');
  const quizContainer = document.getElementById('formula-quiz-container');
  const sheetContainer = document.getElementById('formula-sheet-container');

  if (tab === 'quiz') {
    if (quizTabBtn) quizTabBtn.classList.add('active');
    if (sheetTabBtn) sheetTabBtn.classList.remove('active');
    if (quizContainer) quizContainer.style.display = '';
    if (sheetContainer) sheetContainer.style.display = 'none';
    renderFormulaProblem();
  } else {
    if (sheetTabBtn) sheetTabBtn.classList.add('active');
    if (quizTabBtn) quizTabBtn.classList.remove('active');
    if (quizContainer) quizContainer.style.display = 'none';
    if (sheetContainer) sheetContainer.style.display = '';
    renderFormulaReferenceSheet();
  }
}

function renderFormulaCategoryPills() {
  const pillsContainer = document.getElementById('formula-category-pills');
  if (!pillsContainer) return;

  const allFormulas = getFormulaDataset();
  const categories = ['all'];
  const catCounts = { all: allFormulas.length };

  allFormulas.forEach(f => {
    if (f.category) {
      if (!catCounts[f.category]) {
        categories.push(f.category);
        catCounts[f.category] = 0;
      }
      catCounts[f.category]++;
    }
  });

  pillsContainer.innerHTML = categories.map(cat => {
    const isActive = (state.formulaState.currentCategory === cat);
    const label = cat === 'all' ? `All (${catCounts.all})` : `${cat} (${catCounts[cat]})`;
    return `<button type="button" class="formula-cat-pill ${isActive ? 'active' : ''}" onclick="filterFormulasByCategory('${cat}')">${label}</button>`;
  }).join('');
}

function filterFormulasByCategory(category) {
  state.formulaState.currentCategory = category;
  state.formulaState.currentIndex = 0;
  state.formulaState.currentInput = '';
  state.formulaState.revealedHint = false;
  state.formulaState.checkedResult = null;
  renderFormulaCategoryPills();
  renderFormulaProblem();
}

function setMathFieldValue(latex) {
  const mf = document.getElementById('fq-math-field');
  if (!mf) return;
  if (typeof mf.setValue === 'function') {
    mf.setValue(latex || '');
  } else {
    mf.value = latex || '';
  }
}

function getMathFieldValue() {
  const mf = document.getElementById('fq-math-field');
  if (!mf) return '';
  if (typeof mf.getValue === 'function') {
    return mf.getValue();
  }
  return mf.value || '';
}

function loadSkeletonTemplate() {
  const formulas = getFilteredFormulas();
  const currentF = formulas[state.formulaState.currentIndex];
  if (!currentF) return;

  const btnSkeleton = document.getElementById('btn-mode-skeleton');
  const btnBlank = document.getElementById('btn-mode-blank');
  if (btnSkeleton) btnSkeleton.classList.add('active');
  if (btnBlank) btnBlank.classList.remove('active');

  const skeleton = currentF.templateLatex || '';
  state.formulaState.currentInput = skeleton;
  setMathFieldValue(skeleton);

  const mf = document.getElementById('fq-math-field');
  if (mf) mf.focus();
}

function loadBlankCanvas() {
  const btnSkeleton = document.getElementById('btn-mode-skeleton');
  const btnBlank = document.getElementById('btn-mode-blank');
  if (btnBlank) btnBlank.classList.add('active');
  if (btnSkeleton) btnSkeleton.classList.remove('active');

  state.formulaState.currentInput = '';
  setMathFieldValue('');

  const mf = document.getElementById('fq-math-field');
  if (mf) mf.focus();
}

function renderFormulaProblem() {
  const formulas = getFilteredFormulas();
  const quizContainer = document.getElementById('formula-quiz-container');
  if (!quizContainer) return;

  if (!formulas || formulas.length === 0) {
    quizContainer.innerHTML = `
      <div class="quiz-card" style="text-align: center; padding: 2.5rem 1rem;">
        <i class="fa-solid fa-square-root-variable" style="font-size: 2rem; color: var(--accent-primary); margin-bottom: 0.75rem;"></i>
        <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">No formulas found</h3>
        <p style="color: var(--text-secondary); font-size: 0.88rem;">Try selecting 'All' categories or switching subjects.</p>
        <button type="button" class="fq-btn fq-btn-check" style="margin-top: 1rem;" onclick="filterFormulasByCategory('all')">Show All Formulas</button>
      </div>
    `;
    return;
  }

  // Ensure index is within range
  if (state.formulaState.currentIndex >= formulas.length) {
    state.formulaState.currentIndex = 0;
  } else if (state.formulaState.currentIndex < 0) {
    state.formulaState.currentIndex = formulas.length - 1;
  }

  const f = formulas[state.formulaState.currentIndex];
  if (!f) return;

  // Configuration Badge
  const configBadge = document.getElementById('fq-config-badge');
  if (configBadge) configBadge.textContent = f.configName || f.category || 'Formula';

  // Status Badge
  const statusBadge = document.getElementById('fq-status-badge');
  const isMastered = !!(state.formulaState.mastered && state.formulaState.mastered[f.id]);
  if (statusBadge) {
    statusBadge.textContent = isMastered ? '✓ Mastered' : 'Unattempted';
    statusBadge.className = `formula-status-badge ${isMastered ? 'mastered' : ''}`;
  }

  // Target Prompt & Looked-For Variable
  const targetName = document.getElementById('fq-target-name');
  if (targetName) targetName.textContent = f.name;

  const targetSymbol = document.getElementById('fq-target-symbol');
  if (targetSymbol) {
    renderMathText(f.targetVariable, targetSymbol);
  }

  // Explicit Expected Parameters Pill
  const expectedParamsRow = document.getElementById('fq-expected-params-row');
  const expectedParamsText = document.getElementById('fq-expected-params-text');
  if (expectedParamsText && expectedParamsRow) {
    if (f.expectedParamsText) {
      expectedParamsText.textContent = f.expectedParamsText;
      expectedParamsRow.style.display = 'flex';
    } else {
      expectedParamsRow.style.display = 'none';
    }
  }

  const targetDesc = document.getElementById('fq-target-desc');
  if (targetDesc) targetDesc.textContent = f.targetPrompt || f.name;

  // Prefix
  const inputPrefix = document.getElementById('fq-input-prefix');
  if (inputPrefix) {
    renderMathText(`${f.targetVariable} = `, inputPrefix);
  }

  // MathLive WYSIWYG Math Field
  const mf = document.getElementById('fq-math-field');
  const btnSkeleton = document.getElementById('btn-mode-skeleton');
  const btnBlank = document.getElementById('btn-mode-blank');

  if (state.formulaState.currentInput !== undefined && state.formulaState.currentInput !== '') {
    setMathFieldValue(state.formulaState.currentInput);
  } else {
    // Default to Dotted Skeleton
    const skeleton = f.templateLatex || '';
    state.formulaState.currentInput = skeleton;
    setMathFieldValue(skeleton);
    if (btnSkeleton) btnSkeleton.classList.add('active');
    if (btnBlank) btnBlank.classList.remove('active');
  }

  if (mf && !mf.dataset.listenerAttached) {
    mf.dataset.listenerAttached = 'true';
    mf.addEventListener('input', () => {
      state.formulaState.currentInput = getMathFieldValue();
    });
    mf.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        checkFormulaAnswer();
      }
    });
  }

  // Render Palette Chips
  renderVariablePalette(f);

  // Counter
  const counterText = document.getElementById('fq-counter-text');
  if (counterText) {
    counterText.textContent = `Formula ${state.formulaState.currentIndex + 1} of ${formulas.length}`;
  }

  // Dropdown Jump
  const jumpSelect = document.getElementById('fq-jump-select');
  if (jumpSelect) {
    jumpSelect.innerHTML = formulas.map((item, idx) => {
      const selected = (idx === state.formulaState.currentIndex) ? 'selected' : '';
      const masteredMark = (state.formulaState.mastered && state.formulaState.mastered[item.id]) ? '✓ ' : '';
      return `<option value="${idx}" ${selected}>${masteredMark}${idx + 1}. ${item.name} (${item.targetVariable})</option>`;
    }).join('');
  }

  // Hint Box
  const hintBox = document.getElementById('fq-hint-box');
  const hintText = document.getElementById('fq-hint-text');
  if (hintBox && hintText) {
    if (state.formulaState.revealedHint && f.hint) {
      hintText.textContent = f.hint;
      hintBox.style.display = 'block';
    } else {
      hintBox.style.display = 'none';
    }
  }

  // Feedback Card
  renderFeedbackCard(f);

  // Schematic Drawer
  const schematicDrawer = document.getElementById('fq-schematic-drawer');
  if (schematicDrawer) {
    schematicDrawer.style.display = state.formulaState.schematicOpen ? 'block' : 'none';
  }
}

function renderVariablePalette(currentFormula) {
  const container = document.getElementById('fq-palette-chips');
  if (!container) return;

  let chips = [];
  if (state.currentSubject === 'basic_electronics') {
    chips = [
      // Full variables
      'V_CC', 'V_BE', 'V_CE', 'V_BC', 'V_TH', 'V_B', 'V_C', 'V_E',
      'I_B', 'I_C', 'I_E', 'I_1', 'I_2',
      'R_B', 'R_C', 'R_E', 'R_F', 'R_1', 'R_2', 'R_TH',
      'β', 'β + 1', 'α',
      // Base letters & subscripts
      'V', 'I', 'R', 'CC', 'BE', 'CE', 'B', 'C', 'E', '1', '2', '0',
      // Operators
      '+', '−', '×', '/', '(', ')', '=', '∥'
    ];
  } else if (state.currentSubject === 'deformable_bodies') {
    chips = [
      'σ_h', 'σ_L', 'σ', 'τ', 'p', 'P', 'T', 'M',
      'd', 'D', 't', 'r', 'L', 'A', 'y', 'I', 'J',
      'E', 'G', 'δ', 'θ', 'π', '2', '4', '16', '32',
      'h', 'max', 'min',
      '+', '−', '×', '/', '(', ')', '=', '^'
    ];
  } else if (state.currentSubject === 'fluid_mechanics') {
    chips = [
      'p', 'ρ', 'γ', 'μ', 'ν', 'g', 'h', 'v', 'Q',
      'd', 'D', 'A', 'L', 'Re', 'f', 'h_f',
      '2', '64', 'π',
      '+', '−', '×', '/', '(', ')', '=', '√'
    ];
  } else {
    chips = ['q', 'Q', 'k', 'A', 'h', 'T_1', 'T_2', 'ΔT', 'L', '+', '−', '×', '/', '(', ')', '='];
  }

  container.innerHTML = chips.map(chip => {
    const isOp = ['+', '−', '×', '/', '(', ')', '=', '∥', '^', '√'].includes(chip);
    const escaped = chip.replace(/'/g, "\\'");
    return `<button type="button" class="fq-chip ${isOp ? 'chip-op' : ''}" onclick="insertPaletteSymbol('${escaped}')">${chip}</button>`;
  }).join('');
}

function symbolToLatex(sym) {
  if (!sym) return '';
  let s = sym;
  if (s === 'β') return '\\beta';
  if (s === 'β + 1') return '(\\beta + 1)';
  if (s === 'α') return '\\alpha';
  if (s === 'π') return '\\pi';
  if (s === 'σ') return '\\sigma';
  if (s === 'σ_h') return '\\sigma_h';
  if (s === 'σ_L') return '\\sigma_L';
  if (s === 'τ') return '\\tau';
  if (s === 'ρ') return '\\rho';
  if (s === 'γ') return '\\gamma';
  if (s === 'μ') return '\\mu';
  if (s === 'ν') return '\\nu';
  if (s === 'δ') return '\\delta';
  if (s === 'θ') return '\\theta';
  if (s === 'ΔT') return '\\Delta T';
  if (s === '∥') return ' \\parallel ';
  if (s === '×') return ' \\cdot ';
  if (s === '−') return '-';
  if (s === '√') return '\\sqrt{}';
  if (s.includes('_')) {
    const parts = s.split('_');
    return `${parts[0]}_{${parts.slice(1).join('_')}}`;
  }
  return s;
}

function insertPaletteSymbol(sym) {
  const mf = document.getElementById('fq-math-field');
  if (!mf) return;

  const latexSym = symbolToLatex(sym);

  // If currently in a skeleton template with dotted boxes, clicking a compound symbol (e.g. V_CC, R_B)
  // replaces the first empty compound placeholder cleanly!
  let curVal = getMathFieldValue();
  if (sym.includes('_') && curVal.includes('\\placeholder{}_{\\placeholder{}}')) {
    const replaced = curVal.replace('\\placeholder{}_{\\placeholder{}}', latexSym);
    setMathFieldValue(replaced);
    state.formulaState.currentInput = replaced;
    mf.focus();
    return;
  } else if (curVal.includes('\\placeholder{}')) {
    const replaced = curVal.replace('\\placeholder{}', latexSym);
    setMathFieldValue(replaced);
    state.formulaState.currentInput = replaced;
    mf.focus();
    return;
  }

  // Standard MathLive insert
  if (typeof mf.insert === 'function') {
    mf.insert(latexSym, { focus: true, mode: 'math' });
  } else if (typeof mf.executeCommand === 'function') {
    mf.executeCommand(['insert', latexSym]);
  }
  mf.focus();
  state.formulaState.currentInput = getMathFieldValue();
}

function insertFormulaTemplate(type) {
  const mf = document.getElementById('fq-math-field');
  if (!mf) return;

  switch (type) {
    case 'superscript': // [1]
      if (typeof mf.executeCommand === 'function') {
        mf.executeCommand(['insert', '#@^{#?}']);
      } else {
        mf.insert('^{#?}');
      }
      break;
    case 'frac': // [2]
      if (typeof mf.executeCommand === 'function') {
        mf.executeCommand(['insert', '\\frac{#@}{#?}']);
      } else {
        mf.insert('\\frac{#?}{#?}');
      }
      break;
    case 'subscript': // [3]
      if (typeof mf.executeCommand === 'function') {
        mf.executeCommand(['insert', '#@_{#?}']);
      } else {
        mf.insert('_{#?}');
      }
      break;
    case 'parens': // [4]
      if (typeof mf.executeCommand === 'function') {
        mf.executeCommand(['insert', '\\left(#@\\right)']);
      } else {
        mf.insert('\\left(#?\\right)');
      }
      break;
    case 'equals': // [5]
      mf.insert(' = ');
      break;
    case 'times': // [6]
      mf.insert(' \\cdot ');
      break;
    case 'sqrt': // [7]
      if (typeof mf.executeCommand === 'function') {
        mf.executeCommand(['insert', '\\sqrt{#@}']);
      } else {
        mf.insert('\\sqrt{#?}');
      }
      break;
    default:
      return;
  }
  mf.focus();
  state.formulaState.currentInput = getMathFieldValue();
}

function handleFormulaInput(val) {
  state.formulaState.currentInput = val;
}

function clearFormulaInput() {
  state.formulaState.currentInput = '';
  state.formulaState.checkedResult = null;
  setMathFieldValue('');
  const mf = document.getElementById('fq-math-field');
  if (mf) mf.focus();
  const feedbackCard = document.getElementById('fq-feedback-card');
  if (feedbackCard) feedbackCard.style.display = 'none';
}

function latexToAlgebraic(latex) {
  if (!latex) return '';
  let str = latex.trim();

  // Strip LaTeX wrappers
  str = str.replace(/\\left\(/g, '(').replace(/\\right\)/g, ')');
  str = str.replace(/\\left\[/g, '[').replace(/\\right\]/g, ']');
  str = str.replace(/\\left\{/g, '{').replace(/\\right\}/g, '}');
  str = str.replace(/\\left\./g, '').replace(/\\right\./g, '');
  str = str.replace(/\\mathrm\{([^}]+)\}/g, '$1');
  str = str.replace(/\\text\{([^}]+)\}/g, '$1');

  // Fractions: recursively convert \frac{num}{den} to ((num)/(den))
  while (str.includes('\\frac')) {
    const fracIdx = str.indexOf('\\frac');
    const numOpen = str.indexOf('{', fracIdx);
    if (numOpen === -1) break;
    let depth = 1;
    let numClose = -1;
    for (let i = numOpen + 1; i < str.length; i++) {
      if (str[i] === '{') depth++;
      else if (str[i] === '}') {
        depth--;
        if (depth === 0) { numClose = i; break; }
      }
    }
    if (numClose === -1) break;
    const num = str.substring(numOpen + 1, numClose);

    const denOpen = str.indexOf('{', numClose);
    if (denOpen === -1) break;
    depth = 1;
    let denClose = -1;
    for (let i = denOpen + 1; i < str.length; i++) {
      if (str[i] === '{') depth++;
      else if (str[i] === '}') {
        depth--;
        if (depth === 0) { denClose = i; break; }
      }
    }
    if (denClose === -1) break;
    const den = str.substring(denOpen + 1, denClose);

    str = str.substring(0, fracIdx) + `((${num})/(${den}))` + str.substring(denClose + 1);
  }

  // Radicals: \sqrt{arg}
  while (str.includes('\\sqrt')) {
    const sqrtIdx = str.indexOf('\\sqrt');
    const openBrace = str.indexOf('{', sqrtIdx);
    if (openBrace === -1) break;
    let depth = 1;
    let closeBrace = -1;
    for (let i = openBrace + 1; i < str.length; i++) {
      if (str[i] === '{') depth++;
      else if (str[i] === '}') {
        depth--;
        if (depth === 0) { closeBrace = i; break; }
      }
    }
    if (closeBrace === -1) break;
    const arg = str.substring(openBrace + 1, closeBrace);
    str = str.substring(0, sqrtIdx) + `sqrt(${arg})` + str.substring(closeBrace + 1);
  }

  // Operators
  str = str.replace(/\\cdot/g, '*').replace(/\\times/g, '*').replace(/×/g, '*').replace(/·/g, '*');
  str = str.replace(/\\pm/g, '±').replace(/−/g, '-');
  str = str.replace(/\\parallel/g, '||').replace(/∥/g, '||');

  // Greek letters
  str = str.replace(/\\beta/g, 'beta').replace(/β/g, 'beta');
  str = str.replace(/\\alpha/g, 'alpha').replace(/α/g, 'alpha');
  str = str.replace(/\\sigma/g, 'sigma').replace(/σ/g, 'sigma');
  str = str.replace(/\\tau/g, 'tau').replace(/τ/g, 'tau');
  str = str.replace(/\\rho/g, 'rho').replace(/ρ/g, 'rho');
  str = str.replace(/\\mu/g, 'mu').replace(/μ/g, 'mu');
  str = str.replace(/\\nu/g, 'nu').replace(/ν/g, 'nu');
  str = str.replace(/\\gamma/g, 'gamma').replace(/γ/g, 'gamma');
  str = str.replace(/\\pi/g, 'pi').replace(/π/g, 'pi');
  str = str.replace(/\\Delta/g, 'Delta').replace(/Δ/g, 'Delta');

  // Subscripts & exponents
  str = str.replace(/_\{([^}]+)\}/g, '_$1');
  str = str.replace(/\^\{([^}]+)\}/g, '^($1)');

  // Implicit multiplication: e.g. "I_B R_B" -> "I_B * R_B"
  str = str.replace(/([A-Za-z0-9_\)]+)\s+([A-Za-z0-9_\(]+)/g, '$1 * $2');

  return str;
}

function renderMathText(latexStr, element) {
  if (!element) return;
  if (typeof katex !== 'undefined' && katex.render) {
    try {
      katex.render(latexStr, element, { throwOnError: false, displayMode: false });
      return;
    } catch (e) {
      console.warn('KaTeX render error:', e);
    }
  }
  element.textContent = latexStr;
}

function normalizeFormulaStr(s) {
  if (!s) return '';
  let str = s.trim();

  // Normalize Greek & operators
  str = str.replace(/β/g, 'beta').replace(/\\beta/g, 'beta');
  str = str.replace(/α/g, 'alpha').replace(/\\alpha/g, 'alpha');
  str = str.replace(/π/g, 'pi').replace(/\\pi/g, 'pi');
  str = str.replace(/σ/g, 'sigma').replace(/\\sigma/g, 'sigma');
  str = str.replace(/τ/g, 'tau').replace(/\\tau/g, 'tau');
  str = str.replace(/ρ/g, 'rho').replace(/\\rho/g, 'rho');
  str = str.replace(/γ/g, 'gamma').replace(/\\gamma/g, 'gamma');
  str = str.replace(/μ/g, 'mu').replace(/\\mu/g, 'mu');
  str = str.replace(/ν/g, 'nu').replace(/\\nu/g, 'nu');
  str = str.replace(/Δ/g, 'delta').replace(/\\delta/g, 'delta');
  str = str.replace(/∥/g, '||').replace(/\\parallel/g, '||');

  // Operators
  str = str.replace(/×/g, '*').replace(/·/g, '*').replace(/−/g, '-');
  str = str.replace(/_\{([^}]+)\}/g, '_$1');
  str = str.replace(/\^\{([^}]+)\}/g, '^$1');

  // Remove whitespace
  str = str.replace(/\s+/g, '');

  // Strip redundant nested parens: ((...)) -> (...)
  while (str.includes('((') && str.includes('))')) {
    const prev = str;
    str = str.replace(/\(\(([^()]+)\)\)/g, '($1)');
    if (str === prev) break;
  }
  // Strip parens around single denominator terms: /(r_b) -> /r_b
  str = str.replace(/\/([a-z0-9_]+)\)/g, '/$1');
  str = str.replace(/\/\(([a-z0-9_]+)\)/g, '/$1');

  // Strip outer parens: (A) -> A
  if (str.startsWith('(') && str.endsWith(')')) {
    let depth = 0;
    let canStrip = true;
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === '(') depth++;
      else if (str[i] === ')') {
        depth--;
        if (depth === 0) { canStrip = false; break; }
      }
    }
    if (canStrip) {
      str = str.substring(1, str.length - 1);
    }
  }

  return str.toLowerCase();
}

function checkDiagnosticAlternative(latex, currentF) {
  if (!currentF || !currentF.diagnostics) return null;

  const norm = normalizeFormulaStr(latexToAlgebraic(latex));

  if (currentF.diagnostics.ic_beta) {
    if (norm === 'i_c/beta' || norm === '(i_c)/beta' || norm === 'i_c/(beta)' || norm.includes('i_c/beta')) {
      return currentF.diagnostics.ic_beta;
    }
  }

  if (currentF.diagnostics.beta_ic) {
    if (norm === 'beta/i_c' || norm === '(beta)/i_c' || norm === 'beta/(i_c)' || norm.includes('beta/i_c')) {
      return currentF.diagnostics.beta_ic;
    }
  }

  if (currentF.diagnostics.ie_ic) {
    if (norm === 'i_e-i_c' || norm.includes('i_e-i_c')) {
      return currentF.diagnostics.ie_ic;
    }
  }

  if (currentF.diagnostics.vth_formula) {
    if (norm.includes('v_th') || norm.includes('r_th')) {
      return currentF.diagnostics.vth_formula;
    }
  }

  return null;
}

function isFormulaEquivalent(userLatex, currentF) {
  if (!userLatex || !currentF) return false;

  // 1. Direct LaTeX normalization check against canonicalLatex
  if (currentF.canonicalLatex) {
    const cleanUserLatex = userLatex.replace(/\\left/g, '').replace(/\\right/g, '').replace(/\s+/g, '').toLowerCase();
    const cleanCanonLatex = currentF.canonicalLatex.replace(/\\left/g, '').replace(/\\right/g, '').replace(/\s+/g, '').toLowerCase();
    if (cleanUserLatex === cleanCanonLatex) return true;
  }

  // 2. Convert user LaTeX to algebraic string
  const userAlg = latexToAlgebraic(userLatex);
  const normUser = normalizeFormulaStr(userAlg);
  const normCanon = normalizeFormulaStr(currentF.canonicalFormula);

  if (normUser === normCanon) return true;

  // Check acceptableVariants
  const variants = currentF.acceptableVariants || [];
  for (const v of variants) {
    if (normUser === normalizeFormulaStr(v)) return true;
  }

  // Also test with stripped outer parens
  let strippedNormUser = normUser;
  if (strippedNormUser.startsWith('(') && strippedNormUser.endsWith(')')) {
    strippedNormUser = strippedNormUser.substring(1, strippedNormUser.length - 1);
    if (strippedNormUser === normCanon) return true;
    for (const v of variants) {
      if (strippedNormUser === normalizeFormulaStr(v)) return true;
    }
  }

  // Check commutative subtraction loop equations:
  // e.g. V_CC - I_B*R_B - V_BE = 0 vs V_CC - V_BE - I_B*R_B = 0
  if (normCanon.endsWith('=0')) {
    const leftUser = normUser.replace('=0', '');
    const leftCanon = normCanon.replace('=0', '');
    const userTerms = leftUser.replace(/-/g, '+-').split('+').filter(Boolean).sort().join('+');
    const canonTerms = leftCanon.replace(/-/g, '+-').split('+').filter(Boolean).sort().join('+');
    if (userTerms === canonTerms) return true;
  }

  return false;
}

function checkFormulaAnswer() {
  const formulas = getFilteredFormulas();
  const currentF = formulas[state.formulaState.currentIndex];
  if (!currentF) return;

  const rawLatex = getMathFieldValue().trim();

  // 1. Check if empty
  if (!rawLatex) {
    showToast('⚠️ Please enter a formula in the math field first!');
    return;
  }

  // 2. Check if unfilled placeholders remain
  if (rawLatex.includes('\\placeholder') || rawLatex.includes('\\square')) {
    showToast('⚠️ Please fill in all dotted placeholder boxes (□) before checking!');
    return;
  }

  // 3. Check for Alternative / Diagnostic matches
  const diagMessage = checkDiagnosticAlternative(rawLatex, currentF);

  // 4. Verify Equivalence
  const isCorrect = isFormulaEquivalent(rawLatex, currentF);

  state.formulaState.checkedResult = {
    isCorrect,
    userFormula: rawLatex,
    formula: currentF,
    diagnosticMessage: (!isCorrect && diagMessage) ? diagMessage : null
  };

  if (isCorrect) {
    if (!state.formulaState.mastered) state.formulaState.mastered = {};
    state.formulaState.mastered[currentF.id] = true;
    try {
      localStorage.setItem('jt_formulas_mastered', JSON.stringify(state.formulaState.mastered));
    } catch(e) {}
  }

  renderFeedbackCard(currentF);

  // Update status badge
  const statusBadge = document.getElementById('fq-status-badge');
  if (statusBadge && isCorrect) {
    statusBadge.textContent = '✓ Mastered';
    statusBadge.className = 'formula-status-badge mastered';
  }
}

function renderFeedbackCard(currentF) {
  const card = document.getElementById('fq-feedback-card');
  const header = document.getElementById('fq-feedback-header');
  const body = document.getElementById('fq-feedback-body');
  if (!card || !header || !body) return;

  const res = state.formulaState.checkedResult;
  if (!res) {
    card.style.display = 'none';
    return;
  }

  card.style.display = 'block';

  if (res.isCorrect) {
    card.className = 'fq-feedback-card correct';
    header.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>✓ Outstanding! Mastered Formula</span>';
    body.innerHTML = `
      <p style="margin-bottom: 0.5rem;">Your formula is algebraically equivalent and correctly recalls the governing relationship.</p>
      <div class="fq-solution-latex-box" id="fq-sol-math"></div>
      <p style="margin-top: 0.5rem; line-height: 1.5; color: var(--text-secondary);">${currentF.explanation || ''}</p>
    `;
    const mathBox = document.getElementById('fq-sol-math');
    if (mathBox) {
      renderMathText(currentF.displayFormula || `${currentF.targetVariable} = ${currentF.canonicalFormula}`, mathBox);
    }
  } else {
    card.className = 'fq-feedback-card incorrect';
    header.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> <span>Formula Needs Adjustment</span>';

    let diagHtml = '';
    if (res.diagnosticMessage) {
      diagHtml = `
        <div class="fq-feedback-diagnostic">
          <div class="fq-diag-header"><i class="fa-solid fa-compass"></i> Valid Physics Relationship, but Different Formulation Expected:</div>
          <div class="fq-diag-body">${escapeHTML(res.diagnosticMessage)}</div>
        </div>
      `;
    }

    body.innerHTML = `
      <p style="margin-bottom: 0.5rem;">The terms or operations entered do not match the expected governing formula.</p>
      ${diagHtml}
      ${currentF.hint ? `<p style="font-size: 0.84rem; color: var(--text-secondary); margin: 0.75rem 0;"><strong>💡 Clue:</strong> ${currentF.hint}</p>` : ''}
      <button type="button" class="fq-btn fq-btn-hint" style="padding: 0.4rem 0.8rem; font-size: 0.82rem;" onclick="revealFormulaSolution('${currentF.id}')">
        <i class="fa-solid fa-eye"></i> Reveal Canonical Formula
      </button>
      <div id="fq-revealed-sol-${currentF.id}" style="display: none; margin-top: 0.75rem;">
        <div class="fq-solution-latex-box" id="fq-sol-math-rev"></div>
        <p style="margin-top: 0.5rem; line-height: 1.5; font-size: 0.84rem; color: var(--text-secondary);">${currentF.explanation || ''}</p>
      </div>
    `;
  }
}

function revealFormulaSolution(id) {
  const container = document.getElementById(`fq-revealed-sol-${id}`);
  if (!container) return;
  container.style.display = 'block';

  const formulas = getFilteredFormulas();
  const currentF = formulas.find(f => f.id === id);
  if (!currentF) return;

  const mathBox = document.getElementById('fq-sol-math-rev');
  if (mathBox) {
    renderMathText(currentF.displayFormula || `${currentF.targetVariable} = ${currentF.canonicalFormula}`, mathBox);
  }
}

function toggleFormulaHint(force) {
  state.formulaState.revealedHint = (force !== undefined) ? force : !state.formulaState.revealedHint;
  const formulas = getFilteredFormulas();
  const currentF = formulas[state.formulaState.currentIndex];
  const hintBox = document.getElementById('fq-hint-box');
  const hintText = document.getElementById('fq-hint-text');

  if (hintBox && hintText && currentF) {
    if (state.formulaState.revealedHint && currentF.hint) {
      hintText.textContent = currentF.hint;
      hintBox.style.display = 'block';
    } else {
      hintBox.style.display = 'none';
    }
  }
}

function toggleCircuitSchematic(force) {
  state.formulaState.schematicOpen = (force !== undefined) ? force : !state.formulaState.schematicOpen;
  const drawer = document.getElementById('fq-schematic-drawer');
  if (drawer) {
    drawer.style.display = state.formulaState.schematicOpen ? 'block' : 'none';
  }
}

function prevFormula() {
  const formulas = getFilteredFormulas();
  if (!formulas || formulas.length === 0) return;
  state.formulaState.currentIndex = (state.formulaState.currentIndex - 1 + formulas.length) % formulas.length;
  state.formulaState.currentInput = '';
  state.formulaState.revealedHint = false;
  state.formulaState.checkedResult = null;
  renderFormulaProblem();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextFormula() {
  const formulas = getFilteredFormulas();
  if (!formulas || formulas.length === 0) return;
  state.formulaState.currentIndex = (state.formulaState.currentIndex + 1) % formulas.length;
  state.formulaState.currentInput = '';
  state.formulaState.revealedHint = false;
  state.formulaState.checkedResult = null;
  renderFormulaProblem();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function jumpToFormula(idx) {
  if (isNaN(idx)) return;
  state.formulaState.currentIndex = idx;
  state.formulaState.currentInput = '';
  state.formulaState.revealedHint = false;
  state.formulaState.checkedResult = null;
  renderFormulaProblem();
}

function renderFormulaReferenceSheet() {
  const listContainer = document.getElementById('formula-sheet-cards-list');
  if (!listContainer) return;

  const formulas = getFormulaDataset();
  if (!formulas || formulas.length === 0) {
    listContainer.innerHTML = '<div class="quiz-card" style="text-align: center; padding: 2rem;">No formulas found for this subject.</div>';
    return;
  }

  let html = '';

  // For Basic Electronics, show the full BJT schematics image banner at the top of the cheat sheet!
  if (state.currentSubject === 'basic_electronics') {
    html += `
      <div class="ref-formula-card" style="padding: 1.5rem; text-align: center;">
        <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.5rem;">
          <i class="fa-solid fa-microchip"></i> BJT DC Biasing Configurations & Formula Reference
        </h3>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 1rem;">
          Full reference sheet covering Fixed-Bias, Emitter-Stabilized, Voltage-Divider, and Collector-Feedback configurations.
        </p>
        <div style="background: #ffffff; border-radius: 8px; padding: 0.5rem; overflow: auto; max-height: 480px;">
          <img src="images/bjt_bias_formulas.jpg" alt="BJT DC Biasing Reference Sheet" style="width: 100%; height: auto; display: block; border-radius: 4px;">
        </div>
      </div>
    `;
  }

  // Render individual formula cards
  html += formulas.map(f => {
    const isMastered = !!(state.formulaState.mastered && state.formulaState.mastered[f.id]);
    const varItems = (f.variables || []).map(v => `<li><strong>${v.sym}</strong>: ${v.label}</li>`).join('');

    return `
      <div class="ref-formula-card" id="ref-card-${f.id}">
        <div class="ref-card-header">
          <span class="formula-badge">${f.category || 'Formula'}</span>
          <span class="formula-status-badge ${isMastered ? 'mastered' : ''}">${isMastered ? '✓ Mastered' : 'Unattempted'}</span>
        </div>
        <h4 class="ref-card-title">${f.name}</h4>
        <div class="ref-card-math-box" id="ref-math-${f.id}"></div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0.5rem 0; line-height: 1.5;">${f.explanation || ''}</p>
        ${varItems ? `<ul class="ref-card-vars-list">${varItems}</ul>` : ''}
      </div>
    `;
  }).join('');

  listContainer.innerHTML = html;

  // Render KaTeX for each reference formula
  formulas.forEach(f => {
    const el = document.getElementById(`ref-math-${f.id}`);
    if (el) {
      renderMathText(f.displayFormula || `${f.targetVariable} = ${f.canonicalFormula}`, el);
    }
  });
}

function filterReferenceSheet(query) {
  const q = (query || '').trim().toLowerCase();
  const formulas = getFormulaDataset();

  formulas.forEach(f => {
    const card = document.getElementById(`ref-card-${f.id}`);
    if (!card) return;

    if (!q) {
      card.style.display = '';
      return;
    }

    const match = (f.name && f.name.toLowerCase().includes(q)) ||
                  (f.targetVariable && f.targetVariable.toLowerCase().includes(q)) ||
                  (f.category && f.category.toLowerCase().includes(q)) ||
                  (f.canonicalFormula && f.canonicalFormula.toLowerCase().includes(q));

    card.style.display = match ? '' : 'none';
  });
}

function filterFormulasList() {
  const searchInput = document.getElementById('search-formulas-input');
  if (searchInput) {
    state.formulaState.searchQuery = searchInput.value;
    state.formulaState.currentIndex = 0;
    renderFormulaProblem();
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('fm_theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'light') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

/* ==========================================================================
   Practice Mode Logic & Option Jumbling
   ========================================================================== */

/* Helper to get cached jumbled options for a question */
function getShuffledOptionsForQuestion(key, q) {
  if (!state.shuffledOptionsMap[key]) {
    if (!q || !q.options || !Array.isArray(q.options)) return [];
    const opts = q.options.map((optText, origIdx) => ({
      text: optText,
      originalIndex: origIdx
    }));
    // Fisher-Yates shuffle algorithm to jumble option positions
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    state.shuffledOptionsMap[key] = opts;
  }
  return state.shuffledOptionsMap[key];
}

/* Helper to reset pool answers & reshuffle option positions */
function resetPoolAnswersAndReshuffle(questions) {
  if (!questions) return;
  questions.forEach(q => {
    const key = `${state.currentSubject}_q${q.id}`;
    delete state.userAnswers[key];
    delete state.sessionPoolAnswers[key];
    delete state.shuffledOptionsMap[key];
  });
  saveData('jt_user_answers', state.userAnswers);
}

function showPoolResetToast() {
  let toast = document.getElementById('bookmark-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'bookmark-toast';
    toast.className = 'bookmark-toast';
    document.body.appendChild(toast);
  }

  if (toastTimeoutId) clearTimeout(toastTimeoutId);

  toast.innerHTML = `<i class="fa-solid fa-rotate-right" style="color: var(--accent-primary);"></i> All questions completed! Resetting pool for fresh random cycle.`;

  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.classList.add('show');

  toastTimeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/* Helper to generate a complete randomized alignment sequence of question indices */
function generateRandomSequence(questions) {
  if (!questions || questions.length === 0) {
    state.randomSequence = [];
    state.randomSequencePos = 0;
    return;
  }
  const indices = questions.map((_, i) => i);
  // Fisher-Yates shuffle algorithm to generate a randomized alignment
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  state.randomSequence = indices;
  state.randomSequencePos = 0;
}

function toggleRandomMode() {
  state.randomMode = !state.randomMode;
  localStorage.setItem('jt_random_mode', state.randomMode);
  updateRandomButtonUI();

  if (state.randomMode) {
    const questions = getFilteredPracticeQuestions();
    if (questions && questions.length > 0) {
      generateRandomSequence(questions);
      state.currentIndex = state.randomSequence[0];
      hideNotesSection();
      renderCurrentPracticeQuestion();
    }
  }
}

function updateRandomButtonUI() {
  const btn = document.getElementById('btn-toggle-random');
  if (btn) {
    if (state.randomMode) {
      btn.classList.add('active');
      btn.innerHTML = `<i class="fa-solid fa-shuffle"></i> Random: ON`;
    } else {
      btn.classList.remove('active');
      btn.innerHTML = `<i class="fa-solid fa-shuffle"></i> Random: OFF`;
    }
  }
}

function renderCurrentPracticeQuestion() {
  const questions = getFilteredPracticeQuestions();
  const qText = document.getElementById('q-text');
  const optionsContainer = document.getElementById('q-options-container');

  if (!questions || questions.length === 0) {
    const curNum = document.getElementById('q-current-num');
    if (curNum) curNum.textContent = 0;
    const totNum = document.getElementById('q-total-num');
    if (totNum) totNum.textContent = 0;

    if (qText) {
      if (state.practiceFilter === 'bookmarked') {
        qText.textContent = "No bookmarked questions in this subject yet! Click 'Bookmark' on any question to star it for all classmates.";
      } else if (state.practiceFilter === 'weak') {
        qText.textContent = "No class weak questions recorded yet! As you and your classmates practice, missed questions will automatically be compiled here.";
      } else {
        qText.textContent = "No questions found.";
      }
    }
    if (optionsContainer) optionsContainer.innerHTML = '';
    return;
  }

  if (state.currentIndex >= questions.length) state.currentIndex = 0;
  const q = questions[state.currentIndex];
  if (!q) return;

  const key = `${state.currentSubject}_q${q.id}`;

  const curNum = document.getElementById('q-current-num');
  if (curNum) curNum.textContent = state.currentIndex + 1;

  const totNum = document.getElementById('q-total-num');
  if (totNum) totNum.textContent = questions.length;

  // Bookmark Status
  const bookmarkBtn = document.getElementById('q-bookmark-btn');
  if (bookmarkBtn) {
    if (state.bookmarks.has(key)) {
      bookmarkBtn.classList.add('active');
      bookmarkBtn.innerHTML = `<i class="fa-solid fa-star" id="bookmark-icon"></i> Bookmarked`;
    } else {
      bookmarkBtn.classList.remove('active');
      bookmarkBtn.innerHTML = `<i class="fa-regular fa-star" id="bookmark-icon"></i> Bookmark`;
    }
  }

  // Question Text
  if (qText) qText.textContent = `Problem #${q.id}: ${q.question || ''}`;

  // Question Image (Diagram)
  const imgContainer = document.getElementById('q-image-container');
  if (imgContainer) {
    if (q.image) {
      imgContainer.innerHTML = `<img src="${escapeHTML(q.image)}" alt="Quiz Diagram" class="quiz-question-img">`;
      imgContainer.style.display = 'flex';
    } else {
      imgContainer.innerHTML = '';
      imgContainer.style.display = 'none';
    }
  }

  // Options Grid with Jumbled Lettering
  if (optionsContainer) {
    optionsContainer.innerHTML = '';

    // Determine chosen index based on active pool filter
    let chosenIndex;
    if (state.practiceFilter === 'weak' || state.practiceFilter === 'bookmarked') {
      chosenIndex = state.sessionPoolAnswers[key];
    } else {
      chosenIndex = state.userAnswers[key];
    }

    const isAnswered = chosenIndex !== undefined;
    const shuffledOpts = getShuffledOptionsForQuestion(key, q);

    if (shuffledOpts && Array.isArray(shuffledOpts)) {
      shuffledOpts.forEach((optObj, displayedIdx) => {
        const letter = String.fromCharCode(65 + displayedIdx);
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.setAttribute('data-key-hint', `Press [${letter}]`);
        
        const origIdx = optObj.originalIndex;
        const optText = optObj.text;

        if (isAnswered) {
          btn.classList.add('disabled');
          if (origIdx === q.answer) {
            btn.classList.add('selected-correct');
            btn.innerHTML = `
              <span class="option-letter"><i class="fa-solid fa-check"></i></span>
              <span class="option-text">${escapeHTML(optText)}</span>
              <span class="opt-badge-tag correct-tag"><i class="fa-solid fa-circle-check"></i> Correct</span>
            `;
          } else if (origIdx === chosenIndex) {
            btn.classList.add('selected-incorrect');
            btn.innerHTML = `
              <span class="option-letter"><i class="fa-solid fa-xmark"></i></span>
              <span class="option-text">${escapeHTML(optText)}</span>
              <span class="opt-badge-tag incorrect-tag"><i class="fa-solid fa-circle-xmark"></i> Your Choice</span>
            `;
          } else {
            btn.classList.add('other-incorrect');
            btn.innerHTML = `
              <span class="option-letter">${letter}</span>
              <span class="option-text">${escapeHTML(optText)}</span>
              <span class="opt-badge-tag dimmed-tag">Incorrect</span>
            `;
          }
        } else {
          btn.innerHTML = `
            <span class="option-letter">${letter}</span>
            <span class="option-text">${escapeHTML(optText)}</span>
          `;
        }

        btn.onclick = () => selectPracticeAnswer(key, origIdx);
        optionsContainer.appendChild(btn);
      });
    }

    // Solution & Explanation text inside Notes drawer
    const expHeader = document.getElementById('q-explanation-header');
    const expText = document.getElementById('q-explanation-text');
    const isRevealed = Boolean(state.revealedSolutions && state.revealedSolutions[key]);
    const showFullSolution = (chosenIndex !== undefined) || isRevealed;

    if (expHeader) {
      if (showFullSolution) {
        expHeader.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--color-success);"></i> Solution & Full Explanation:`;
      } else {
        expHeader.innerHTML = `<i class="fa-solid fa-lightbulb"></i> Guiding Clue & Conceptual Hint:`;
      }
    }

    if (expText) {
      expText.innerHTML = getAmbiguousHint(q, showFullSolution);
    }
  }

  // Notes question number badge
  const notesQNum = document.getElementById('notes-q-num');
  if (notesQNum) notesQNum.textContent = q.id;
  
  subscribeLiveNotesCurrent();
}

/* ==========================================================================
   Ambiguous & Non-Spoiling Practice Hint Generator
   ========================================================================== */

function getAmbiguousHint(q, isAnswered) {
  if (!q) return "Standard engineering principle.";

  if (isAnswered) {
    // When answered or revealed, display the complete solution breakdown
    const raw = q.explanation || "Standard engineering principle.";
    return escapeHTML(raw)
      .replace(/\n/g, '<br>')
      .replace(/•/g, '<span style="color: var(--accent-primary); font-weight: 700;">•</span>');
  }

  // When UNANSWERED: provide an ambiguous conceptual clue without directly giving the answer
  const raw = q.explanation || '';
  const options = q.options || [];
  const ansIdx = (q.answer !== undefined && q.answer >= 0 && q.answer < options.length) ? q.answer : 0;
  const correctOpt = options[ansIdx] || '';

  // 1. Remove "Why Other Choices" section completely to prevent elimination spoilers
  let text = raw.split(/•?\s*Why Other Choices/i)[0].trim();

  // 2. Strip direct answer labels and official key headers
  text = text.replace(/•?\s*Why\s+(?:Choice|Option|Statement)?\s*['"`]?[^'"`:\n]+['"`]?\s*is\s*Correct\s*:\s*/gi, '');
  text = text.replace(/•?\s*Official\s+Exam\s+(?:Valid\s+)?(?:Answer|Key)\s*:[^\n]+(?:\n|$)/gi, '');
  text = text.replace(/\bOption\s+[A-D]\b/gi, 'this choice');
  text = text.replace(/\b[A-D]\.\s*/g, '');

  // 3. Detect if the remaining text is too short or just a tautological repeat of the correct option
  const cleanedLower = text.replace(/[.,\s]/g, '').toLowerCase();
  const optLower = correctOpt.replace(/[.,\s]/g, '').toLowerCase();
  const isTautology = !text || text.length < 15 || cleanedLower === optLower;

  if (isTautology) {
    const qText = (q.question || '').toLowerCase();
    if (/viscos|fluid|flow|liquid|water|stream|pipe|channel|nozzle|pressure/.test(qText)) {
      text = "Reflect on fluid transport properties, internal shear behavior, and how velocity and pressure gradients govern this condition.";
    } else if (/stress|strain|cylinder|vessel|beam|load|tensil|yield|rupture/.test(qText)) {
      text = "Consider force equilibrium, internal stress distributions across the geometry, or material failure thresholds under load.";
    } else if (/wire|rope|sheave|drum|hoist|cable|strand/.test(qText)) {
      text = "Think about the balance between strand flexibility, bearing wear limits around sheaves, and overall tensile breaking capacity.";
    } else if (/heat|temperat|conduction|convection|radiation|thermal|insulat/.test(qText)) {
      text = "Analyze the thermal gradient, governing transport mechanism (conduction, convection, or radiation), and thermodynamic energy balance.";
    } else if (/transistor|diode|semiconduct|voltage|current|circuit|gate|electron|atom/.test(qText)) {
      text = "Review charge carrier dynamics, p-n junction conduction behavior, or fundamental circuit analysis laws.";
    } else {
      text = "Analyze the problem statement's key physical conditions to determine which fundamental scientific definition or governing theorem directly applies.";
    }
  } else {
    // 4. Mask direct verbatim occurrences of the correct choice text so it doesn't give away the answer
    if (correctOpt && correctOpt.length > 3 && !/all of the above|none of the above|both a and b/i.test(correctOpt)) {
      try {
        const escaped = correctOpt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp('\\b' + escaped + '\\b', 'gi');
        text = text.replace(re, '[the governing concept / parameter]');
      } catch (e) {}
    }
  }

  return `<div class="ambiguous-hint-content">` +
    `<div style="line-height: 1.6; color: var(--text-secondary); margin-bottom: 0.75rem;">` +
    `💡 <strong>Conceptual Guidance:</strong><br>${escapeHTML(text).replace(/\n/g, '<br>')}` +
    `</div>` +
    `<div class="hint-spoiler-footer" style="padding-top: 0.5rem; border-top: 1px dashed var(--border-color); font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">` +
    `<span><i class="fa-solid fa-lock"></i> Direct answer is hidden so you can deduce it.</span>` +
    `<button type="button" class="btn-reveal-solution" onclick="revealCurrentSolution()"><i class="fa-solid fa-eye"></i> Reveal Full Answer</button>` +
    `</div>` +
    `</div>`;
}

function revealCurrentSolution() {
  state.revealedSolutions = state.revealedSolutions || {};
  const questions = getFilteredPracticeQuestions();
  const q = questions[state.currentIndex];
  if (!q) return;
  const key = `${state.currentSubject}_q${q.id}`;
  state.revealedSolutions[key] = true;

  const expHeader = document.getElementById('q-explanation-header');
  if (expHeader) {
    expHeader.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--color-success);"></i> Solution & Full Explanation:`;
  }
  const expText = document.getElementById('q-explanation-text');
  if (expText) {
    expText.innerHTML = getAmbiguousHint(q, true);
  }
}

function selectPracticeAnswer(key, optionIdx) {
  if (state.practiceFilter === 'weak' || state.practiceFilter === 'bookmarked') {
    if (state.sessionPoolAnswers[key] !== undefined) return;
    state.sessionPoolAnswers[key] = optionIdx;
  } else {
    if (state.userAnswers[key] !== undefined) return;
  }

  const questions = getFilteredPracticeQuestions();
  const q = questions[state.currentIndex];

  state.userAnswers[key] = optionIdx;
  saveData('jt_user_answers', state.userAnswers);

  if (q && optionIdx !== q.answer) {
    recordGroupMistake(key);
  }

  renderCurrentPracticeQuestion();
  updateStats();
}

function resetCurrentQuestionState() {
  const questions = getFilteredPracticeQuestions();
  const q = questions[state.currentIndex];
  if (!q) return;
  const key = `${state.currentSubject}_q${q.id}`;

  delete state.userAnswers[key];
  delete state.sessionPoolAnswers[key];
  delete state.shuffledOptionsMap[key]; // Clear cached jumbled options to reshuffle on reset
  saveData('jt_user_answers', state.userAnswers);
  renderCurrentPracticeQuestion();
  updateStats();
}

function nextQuestion() {
  const questions = getFilteredPracticeQuestions();
  if (!questions || questions.length === 0) return;
  hideNotesSection();

  if (state.randomMode) {
    if (!state.randomSequence || state.randomSequence.length !== questions.length) {
      generateRandomSequence(questions);
    }

    if (state.randomSequencePos < state.randomSequence.length - 1) {
      state.randomSequencePos++;
      state.currentIndex = state.randomSequence[state.randomSequencePos];
    } else {
      // Reached the end of the randomized alignment sequence!
      resetPoolAnswersAndReshuffle(questions);
      generateRandomSequence(questions);
      showPoolResetToast();
      state.currentIndex = state.randomSequence[0];
    }
  } else if (state.currentIndex < questions.length - 1) {
    state.currentIndex++;
  }
  saveCurrentIndex();
  renderCurrentPracticeQuestion();
}

function prevQuestion() {
  const questions = getFilteredPracticeQuestions();
  if (!questions || questions.length === 0) return;
  hideNotesSection();

  if (state.randomMode) {
    if (!state.randomSequence || state.randomSequence.length !== questions.length) {
      generateRandomSequence(questions);
    }

    if (state.randomSequencePos > 0) {
      state.randomSequencePos--;
      state.currentIndex = state.randomSequence[state.randomSequencePos];
    } else {
      // Already at the start of the randomized alignment sequence
      state.currentIndex = state.randomSequence[0];
    }
  } else if (state.currentIndex > 0) {
    state.currentIndex--;
  }
  saveCurrentIndex();
  renderCurrentPracticeQuestion();
}

/* ==========================================================================
   Togglable Per-Question Hints & Solution Section (Manual Scroll)
   ========================================================================== */

function hideNotesSection() {
  state.notesOpen = false;
  const container = document.getElementById('notes-section-container');
  const btn = document.getElementById('toggle-notes-btn');
  const wrapper = btn ? btn.closest('.notes-toggle-wrapper') : null;

  if (container) container.classList.add('hidden');
  if (wrapper) wrapper.classList.remove('hidden-toggle');
  if (btn) {
    btn.classList.remove('active');
    btn.innerHTML = `<i class="fa-solid fa-lightbulb"></i> Show Hints (<span id="notes-count-badge">${getLiveNotesCount()}</span>) <i class="fa-solid fa-chevron-down" id="toggle-notes-chevron"></i>`;
  }
}

function toggleNotesSection() {
  state.notesOpen = !state.notesOpen;
  const container = document.getElementById('notes-section-container');
  const btn = document.getElementById('toggle-notes-btn');
  const wrapper = btn ? btn.closest('.notes-toggle-wrapper') : null;

  if (!container || !btn) return;

  if (state.notesOpen) {
    container.classList.remove('hidden');
    if (wrapper) wrapper.classList.add('hidden-toggle');
    subscribeLiveNotesCurrent();
  } else {
    hideNotesSection();
  }
}

function getLiveNotesCount() {
  const questions = getFilteredPracticeQuestions();
  if (!questions || !questions[state.currentIndex]) return 0;
  const qId = questions[state.currentIndex].id;
  const key = `${state.currentSubject}_q${qId}`;
  return (state.liveNotes[key] || []).length;
}

function subscribeLiveNotesCurrent() {
  const questions = getFilteredPracticeQuestions();
  if (!questions || !questions[state.currentIndex]) return;
  const qId = questions[state.currentIndex].id;
  const key = `${state.currentSubject}_q${qId}`;

  const localList = state.liveNotes[key] || [];
  renderLiveNotesUI(localList);

  if (state.firebaseDb) {
    try {
      if (state.activeLiveListenerRef) {
        state.activeLiveListenerRef.off();
      }

      const ref = state.firebaseDb.ref(`live_notes/${key}`);
      state.activeLiveListenerRef = ref;

      ref.on('value', snapshot => {
        const data = snapshot.val();
        let notesList = [];
        if (data && typeof data === 'object') {
          Object.keys(data).forEach(fbKey => {
            notesList.push({
              ...data[fbKey],
              firebaseKey: fbKey
            });
          });
          notesList.reverse();
        }
        state.liveNotes[key] = notesList;
        saveData('jt_live_notes_local', state.liveNotes);
        renderLiveNotesUI(notesList);
      }, err => {
        console.warn('Firebase notes sync error:', err);
      });
    } catch (e) {
      console.warn('Notes sync exception:', e);
    }
  }
}

function renderLiveNotesUI(notesList) {
  const badge = document.getElementById('notes-count-badge');
  if (badge) badge.textContent = notesList ? notesList.length : 0;

  const container = document.getElementById('live-notes-container');
  if (!container) return;
  container.innerHTML = '';

  const questions = getFilteredPracticeQuestions();
  if (!questions || !questions[state.currentIndex]) return;
  const qId = questions[state.currentIndex].id;

  if (!notesList || notesList.length === 0) {
    container.innerHTML = '';
    return;
  }

  notesList.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'comment-item';
    div.innerHTML = `
      <div class="comment-meta">
        <span class="comment-author"><i class="fa-solid fa-user-graduate"></i> ${escapeHTML(item.name || 'Anonymous')}</span>
        <div class="comment-right-meta">
          <span class="comment-date">${escapeHTML(item.date || '')}</span>
          <button class="delete-note-btn" onclick="deleteNote(${index}, '${item.firebaseKey || ''}')" title="Delete note">
            <i class="fa-solid fa-trash-can"></i> Delete
          </button>
        </div>
      </div>
      <div class="comment-body">${escapeHTML(item.text || '')}</div>
    `;
    container.appendChild(div);
  });
}

function postLiveSharedNote() {
  const questions = getFilteredPracticeQuestions();
  if (!questions[state.currentIndex]) return;
  const qId = questions[state.currentIndex].id;
  const key = `${state.currentSubject}_q${qId}`;

  const nameInput = document.getElementById('live-name-input');
  const textInput = document.getElementById('live-text-input');

  const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Anonymous';
  const text = textInput ? textInput.value.trim() : '';

  if (!text) {
    alert('Please enter a note before posting.');
    return;
  }

  const newNote = {
    id: Date.now(),
    name: name,
    text: text,
    date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  if (!state.liveNotes[key]) state.liveNotes[key] = [];
  state.liveNotes[key].unshift(newNote);
  saveData('jt_live_notes_local', state.liveNotes);

  if (state.firebaseDb) {
    try {
      const pushRef = state.firebaseDb.ref(`live_notes/${key}`).push();
      pushRef.set({
        ...newNote,
        firebaseKey: pushRef.key
      });
    } catch (e) {
      console.error('Firebase push error:', e);
    }
  }

  if (textInput) textInput.value = '';
  renderLiveNotesUI(state.liveNotes[key]);
}

function deleteNote(noteIndex, firebaseKey) {
  const questions = getFilteredPracticeQuestions();
  if (!questions[state.currentIndex]) return;
  const qId = questions[state.currentIndex].id;
  const key = `${state.currentSubject}_q${qId}`;

  if (!confirm("Are you sure you want to delete this note?")) return;

  if (state.liveNotes[key] && state.liveNotes[key][noteIndex]) {
    const deletedItem = state.liveNotes[key].splice(noteIndex, 1)[0];

    const fbKey = firebaseKey || (deletedItem ? deletedItem.firebaseKey : null);
    if (fbKey && state.firebaseDb) {
      try {
        state.firebaseDb.ref(`live_notes/${key}/${fbKey}`).remove();
      } catch (e) {
        console.error("Firebase note deletion error:", e);
      }
    }

    saveData('jt_live_notes_local', state.liveNotes);
    renderLiveNotesUI(state.liveNotes[key]);
  }
}

/* ==========================================================================
   All Questions / Flashcard View
   ========================================================================== */

function filterAllQuestions() {
  const searchInput = document.getElementById('search-all-input');
  const searchVal = searchInput ? searchInput.value.toLowerCase() : '';

  const filterSelect = document.getElementById('filter-status-select');
  const filterStatus = filterSelect ? filterSelect.value : 'all';

  const container = document.getElementById('all-questions-list');
  if (!container) return;
  container.innerHTML = '';

  let questions = [...getActiveQuestions()];

  if (filterStatus === 'weak') {
    questions.sort((a, b) => {
      const keyA = `${state.currentSubject}_q${a.id}`;
      const keyB = `${state.currentSubject}_q${b.id}`;
      return (state.groupMistakes[keyB] || 0) - (state.groupMistakes[keyA] || 0);
    });
  } else {
    // Explicitly sort from Problem #1 going up!
    questions.sort((a, b) => a.id - b.id);
  }

  let count = 0;

  questions.forEach(q => {
    const key = `${state.currentSubject}_q${q.id}`;
    const isBookmarked = state.bookmarks.has(key);
    const userAnswer = state.userAnswers[key];
    const isAnswered = userAnswer !== undefined;
    const isCorrect = isAnswered && userAnswer === q.answer;
    const isIncorrect = isAnswered && userAnswer !== q.answer;
    const mistakeCount = state.groupMistakes[key] || 0;

    if (filterStatus === 'bookmarked' && !isBookmarked) return;
    if (filterStatus === 'correct' && !isCorrect) return;
    if (filterStatus === 'incorrect' && !isIncorrect) return;
    if (filterStatus === 'weak' && mistakeCount === 0) return;

    const qTextStr = (q.question || '').toLowerCase();
    const qMatches = qTextStr.includes(searchVal);
    const optMatches = (q.options || []).some(o => (o || '').toLowerCase().includes(searchVal));
    if (searchVal && !qMatches && !optMatches) return;

    count++;

    const item = document.createElement('div');
    item.className = 'question-list-item';
    
    let optionsHtml = '';
    if (q.options && Array.isArray(q.options)) {
      q.options.forEach((opt, idx) => {
        const isCorrectOpt = idx === q.answer;
        optionsHtml += `<div class="item-opt ${isCorrectOpt ? 'correct-opt' : ''}">${String.fromCharCode(65 + idx)}. ${escapeHTML(opt)}</div>`;
      });
    }

    item.innerHTML = `
      <div class="item-top">
        <span class="item-num">Problem #${q.id}</span>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          ${mistakeCount > 0 ? `<span style="color: var(--color-error); font-size: 0.8rem; font-weight: 700; background: var(--color-error-bg); padding: 2px 8px; border-radius: var(--radius-sm);"><i class="fa-solid fa-triangle-exclamation"></i> ${mistakeCount} class ${mistakeCount === 1 ? 'mistake' : 'mistakes'}</span>` : ''}
          ${isBookmarked ? '<span style="color: var(--color-warning); font-size: 0.8rem; font-weight: 700; background: var(--color-warning-bg); padding: 2px 8px; border-radius: var(--radius-sm);"><i class="fa-solid fa-star"></i> Class Bookmarked</span>' : ''}
        </div>
      </div>
      <div class="item-q-text">${escapeHTML(q.question || '')}</div>
      ${q.image ? `<div class="question-image-container"><img src="${escapeHTML(q.image)}" alt="Quiz Diagram" class="quiz-question-img"></div>` : ''}
      <div class="item-options">${optionsHtml}</div>
      <div class="explanation-box" style="margin: 0; padding: 0.85rem;">
        <div class="explanation-header"><i class="fa-solid fa-lightbulb"></i> Hint & Concept:</div>
        <div class="explanation-text">${escapeHTML(q.explanation || 'Standard engineering principle.').replace(/\n/g, '<br>')}</div>
      </div>
    `;

    container.appendChild(item);
  });

  const badge = document.getElementById('search-count-badge');
  if (badge) badge.textContent = `Showing ${count} of ${questions.length} problems`;
}

/* ==========================================================================
   Analytics & Global Stats
   ========================================================================== */

function updateStats() {
  const questions = getActiveQuestions();
  const total = questions.length;
  let correct = 0;
  let incorrect = 0;
  let bookmarksCount = 0;

  questions.forEach(q => {
    const key = `${state.currentSubject}_q${q.id}`;
    if (state.bookmarks.has(key)) bookmarksCount++;

    const ans = state.userAnswers[key];
    if (ans !== undefined) {
      if (ans === q.answer) correct++;
      else incorrect++;
    }
  });

  const answeredTotal = correct + incorrect;
  const accuracy = answeredTotal > 0 ? Math.round((correct / answeredTotal) * 100) : 0;

  const statTotal = document.getElementById('stat-total');
  if (statTotal) statTotal.textContent = total;

  const statCorrect = document.getElementById('stat-correct');
  if (statCorrect) statCorrect.textContent = correct;

  const statIncorrect = document.getElementById('stat-incorrect');
  if (statIncorrect) statIncorrect.textContent = incorrect;

  const statAccuracy = document.getElementById('stat-accuracy');
  if (statAccuracy) statAccuracy.textContent = `${accuracy}%`;

  const statBookmarks = document.getElementById('stat-bookmarks');
  if (statBookmarks) statBookmarks.textContent = bookmarksCount;
}

function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
