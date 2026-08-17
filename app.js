/**
 * JeyCub Terms Reviewer - Application Engine
 * Fast, reliable, local-first & cloud-synced review app for Engineering Board Exams.
 * Supports Spacebar (Toggle Hints) and Ctrl (Toggle Bookmark) key shortcuts.
 */

// Global State
let state = {
  currentSubject: 'fluid_mechanics', // 'fluid_mechanics', 'deformable_bodies', 'heat_transfer'
  currentMode: 'practice', // 'practice', 'all'
  practiceFilter: 'all', // 'all', 'weak', 'bookmarked'
  currentIndex: 0,
  randomMode: false,
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

// Free Public Firebase Config for shared notes, shared bookmarks & group mistakes compilation
const DEFAULT_FIREBASE_CONFIG = {
  databaseURL: "https://fluid-mechanics-reviewer-default-rtdb.firebaseio.com"
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadStoredData();
  updateSubjectUI();
  updateRandomButtonUI();
  renderCurrentPracticeQuestion();
  updateStats();
  filterAllQuestions();
  initFirebase();
  initKeyboardShortcuts();
});

/* Helper to get global subject dataset safely */
function getSubjectData() {
  if (typeof SUBJECT_DATA !== 'undefined') return SUBJECT_DATA;
  if (typeof window !== 'undefined' && window.SUBJECT_DATA) return window.SUBJECT_DATA;
  return {};
}

function getActiveQuestions() {
  const data = getSubjectData();
  if (!data[state.currentSubject]) {
    state.currentSubject = 'fluid_mechanics';
  }
  return (data[state.currentSubject] && Array.isArray(data[state.currentSubject].questions)) 
    ? data[state.currentSubject].questions 
    : [];
}

function getActiveSubjectInfo() {
  const data = getSubjectData();
  if (!data[state.currentSubject]) {
    state.currentSubject = 'fluid_mechanics';
  }
  return data[state.currentSubject] || { title: 'Fluid Mechanics', chapter: '' };
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
  }
  return allQs;
}

function changePracticeFilter(filterVal) {
  state.practiceFilter = filterVal;
  state.currentIndex = 0;
  hideNotesSection();

  // Blur select dropdown immediately so arrow keys navigate questions
  const select = document.getElementById('practice-filter-select');
  if (select) select.blur();

  // Reset transient pool session answers so Weak and Bookmarked pools present questions fresh & unanswered
  if (filterVal === 'weak' || filterVal === 'bookmarked') {
    state.sessionPoolAnswers = {};
  }

  renderCurrentPracticeQuestion();
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
  state.currentIndex = 0;
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

    // Auto-blur select dropdowns if they currently hold focus when pressing arrow keys, Space, or Ctrl
    if (activeEl && activeEl.tagName === 'SELECT') {
      activeEl.blur();
    }

    if (state.currentMode !== 'practice') return;

    const key = e.key.toLowerCase();

    if (e.key === ' ' || e.key === 'Spacebar' || key === 'space') {
      e.preventDefault();
      toggleNotesSection();
    } else if (e.key === 'Control' || key === 'control') {
      e.preventDefault();
      toggleBookmarkCurrent();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextQuestion();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevQuestion();
    } else if (key === 'a' || e.key === '1') {
      e.preventDefault();
      triggerOptionSelection(0);
    } else if (key === 'b' || e.key === '2') {
      e.preventDefault();
      triggerOptionSelection(1);
    } else if (key === 'c' || e.key === '3') {
      e.preventDefault();
      triggerOptionSelection(2);
    } else if (key === 'd' || e.key === '4') {
      e.preventDefault();
      triggerOptionSelection(3);
    }
  });
}

function triggerOptionSelection(idx) {
  const questions = getFilteredPracticeQuestions();
  const q = questions[state.currentIndex];
  if (!q || !q.options || !q.options[idx]) return;
  const key = `${state.currentSubject}_q${q.id}`;
  selectPracticeAnswer(key, idx);
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
  state.currentIndex = 0;
  state.sessionPoolAnswers = {};
  localStorage.setItem('jt_subject', subjectKey);
  hideNotesSection();

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
function toggleBookmarkCurrent() {
  const questions = getFilteredPracticeQuestions();
  if (!questions[state.currentIndex]) return;
  const qId = questions[state.currentIndex].id;
  const key = `${state.currentSubject}_q${qId}`;

  const isBookmarked = state.bookmarks.has(key);
  if (isBookmarked) {
    state.bookmarks.delete(key);
  } else {
    state.bookmarks.add(key);
  }

  saveData('jt_bookmarks', Array.from(state.bookmarks));

  // Realtime Firebase sync across all users for shared class bookmarks
  if (state.firebaseDb) {
    try {
      state.firebaseDb.ref(`shared_bookmarks/${key}`).set(isBookmarked ? null : true);
    } catch (e) {
      console.warn("Error setting shared bookmark in Firebase:", e);
    }
  }

  renderCurrentPracticeQuestion();
  updateStats();
  if (state.currentMode === 'all') {
    filterAllQuestions();
  }
}

/* ==========================================================================
   LocalStorage & Data Persistence
   ========================================================================== */

function loadStoredData() {
  try {
    const data = getSubjectData();
    const savedSubject = localStorage.getItem('jt_subject');
    if (savedSubject && data[savedSubject]) {
      state.currentSubject = savedSubject;
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
   Practice Mode Logic
   ========================================================================== */

function toggleRandomMode() {
  state.randomMode = !state.randomMode;
  localStorage.setItem('jt_random_mode', state.randomMode);
  updateRandomButtonUI();
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

  // Options Grid
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

    if (q.options && Array.isArray(q.options)) {
      q.options.forEach((optText, idx) => {
        const letter = String.fromCharCode(65 + idx);
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.setAttribute('data-key-hint', `Press [${letter}]`);
        
        if (isAnswered) {
          btn.classList.add('disabled');
          if (idx === q.answer) {
            btn.classList.add('selected-correct');
          } else if (idx === chosenIndex) {
            btn.classList.add('selected-incorrect');
          }
        }

        btn.onclick = () => selectPracticeAnswer(key, idx);

        btn.innerHTML = `
          <span class="option-letter">${letter}</span>
          <span class="option-text">${escapeHTML(optText)}</span>
        `;

        optionsContainer.appendChild(btn);
      });
    }

    // Solution & Explanation text inside Notes drawer
    const expText = document.getElementById('q-explanation-text');
    if (expText) {
      expText.textContent = q.explanation || "Standard engineering principle.";
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
  saveData('jt_user_answers', state.userAnswers);
  renderCurrentPracticeQuestion();
  updateStats();
}

function nextQuestion() {
  const questions = getFilteredPracticeQuestions();
  if (!questions || questions.length === 0) return;
  hideNotesSection();
  if (state.randomMode) {
    state.currentIndex = Math.floor(Math.random() * questions.length);
  } else if (state.currentIndex < questions.length - 1) {
    state.currentIndex++;
  }
  renderCurrentPracticeQuestion();
}

function prevQuestion() {
  const questions = getFilteredPracticeQuestions();
  if (!questions || questions.length === 0) return;
  hideNotesSection();
  if (state.randomMode) {
    state.currentIndex = Math.floor(Math.random() * questions.length);
  } else if (state.currentIndex > 0) {
    state.currentIndex--;
  }
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
  if (btn) {
    btn.classList.remove('active');
    btn.innerHTML = `<i class="fa-solid fa-lightbulb"></i> Show Hints (<span id="notes-count-badge">${getLiveNotesCount()}</span>) <i class="fa-solid fa-chevron-down" id="toggle-notes-chevron"></i>`;
  }
  if (wrapper) wrapper.classList.remove('active-wrapper');
}

function toggleNotesSection() {
  state.notesOpen = !state.notesOpen;
  const container = document.getElementById('notes-section-container');
  const btn = document.getElementById('toggle-notes-btn');
  const wrapper = btn ? btn.closest('.notes-toggle-wrapper') : null;

  if (!container || !btn) return;

  if (state.notesOpen) {
    container.classList.remove('hidden');
    btn.classList.add('active');
    if (wrapper) wrapper.classList.add('active-wrapper');
    subscribeLiveNotesCurrent();
    btn.innerHTML = `<i class="fa-solid fa-lightbulb"></i> Hide Hints (<span id="notes-count-badge">${getLiveNotesCount()}</span>) <i class="fa-solid fa-chevron-down" id="toggle-notes-chevron"></i>`;
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
    container.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-muted);">No notes posted yet for Problem #${qId}. Be the first to share a note or formula!</p>`;
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
      <div class="item-options">${optionsHtml}</div>
      <div class="explanation-box" style="margin: 0; padding: 0.85rem;">
        <div class="explanation-header"><i class="fa-solid fa-lightbulb"></i> Key Concept:</div>
        <div class="explanation-text">${escapeHTML(q.explanation || 'Standard engineering principle.')}</div>
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
