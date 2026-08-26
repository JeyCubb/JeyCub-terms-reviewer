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
  activeLiveListenerRef: null
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
});

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
  saveCurrentIndex(); // Persist and stay on whatever page you last resetted!
  hideNotesSection();
  renderCurrentPracticeQuestion();
  updateStats();
  if (state.currentMode === 'all') {
    filterAllQuestions();
  }
}

/* ==========================================================================
   Keyboard Shortcuts for PC Navigation, Answers, Hints & Bookmarks
   ========================================================================== */

function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;

    // Ignore keyboard shortcuts if user is actively typing in text fields
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
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

  // Smoothly scroll to top on mode switch so active view is immediately visible!
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    const expText = document.getElementById('q-explanation-text');
    if (expText) {
      const raw = q.explanation || "Standard engineering principle.";
      const formatted = escapeHTML(raw)
        .replace(/\n/g, '<br>')
        .replace(/•/g, '<span style="color: var(--accent-primary); font-weight: 700;">•</span>');
      expText.innerHTML = formatted;
    }
  }

  // Notes question number badge
  const notesQNum = document.getElementById('notes-q-num');
  if (notesQNum) notesQNum.textContent = q.id;
  
  subscribeLiveNotesCurrent();
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
