/**
 * Fluid Mechanics Board Reviewer - Application Logic Engine
 * Manages Quiz State, Practice & Exam Modes, Private Notes, and Firebase Realtime Live Shared Notes.
 */

// Global State
let state = {
  currentMode: 'practice', // 'practice', 'exam', 'all'
  currentIndex: 0, // 0 to QUIZ_DATA.length - 1
  userAnswers: {}, // { qId: optionIndex }
  bookmarks: new Set(),
  notes: {}, // { qId: "text" }
  liveNotes: {}, // { qId: [{ id, name, text, date }] }
  drawerTab: 'live',
  
  // Firebase Database Handle
  firebaseDb: null,
  activeLiveListenerRef: null,

  // Exam state
  exam: {
    active: false,
    questions: [],
    currentIndex: 0,
    userAnswers: {},
    timerInterval: null,
    secondsRemaining: 0,
    totalSeconds: 0
  }
};

// Default Free Public Firebase Config (fallback)
const DEFAULT_FIREBASE_CONFIG = {
  databaseURL: "https://fluid-mechanics-reviewer-default-rtdb.firebaseio.com"
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadStoredData();
  initFirebase();
  initJumpDropdown();
  renderCurrentPracticeQuestion();
  updateStats();
  filterAllQuestions();
});

/* ==========================================================================
   Firebase Realtime Database Setup (Live Shared Notes)
   ========================================================================== */

function initFirebase() {
  try {
    let config = DEFAULT_FIREBASE_CONFIG;
    const savedConfig = localStorage.getItem('fm_firebase_config');
    if (savedConfig) {
      config = JSON.parse(savedConfig);
    }

    if (typeof firebase !== 'undefined') {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      state.firebaseDb = firebase.database();
      console.log('Firebase Realtime Database initialized successfully!');
    }
  } catch (e) {
    console.warn('Firebase initialization error, using local fallback:', e);
  }
}

function saveCustomFirebaseConfig() {
  const input = document.getElementById('firebase-config-input').value.trim();
  if (!input) return;

  try {
    const parsed = JSON.parse(input);
    localStorage.setItem('fm_firebase_config', JSON.stringify(parsed));
    alert('Firebase configuration saved! Re-initializing database connection...');
    initFirebase();
    subscribeLiveNotesCurrent();
  } catch (e) {
    alert('Invalid JSON config. Please make sure you paste a valid JSON object.');
  }
}

/* ==========================================================================
   LocalStorage & Data Persistence
   ========================================================================== */

function loadStoredData() {
  try {
    const savedAnswers = localStorage.getItem('fm_user_answers');
    if (savedAnswers) state.userAnswers = JSON.parse(savedAnswers);

    const savedBookmarks = localStorage.getItem('fm_bookmarks');
    if (savedBookmarks) state.bookmarks = new Set(JSON.parse(savedBookmarks));

    const savedNotes = localStorage.getItem('fm_notes');
    if (savedNotes) state.notes = JSON.parse(savedNotes);

    const savedLive = localStorage.getItem('fm_live_notes_local');
    if (savedLive) state.liveNotes = JSON.parse(savedLive);

    const savedTheme = localStorage.getItem('fm_theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeIcon(savedTheme);
    }
  } catch (e) {
    console.error('Error loading data from localStorage', e);
  }
}

function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving data to localStorage', e);
  }
}

/* ==========================================================================
   Navigation & UI Mode Switcher
   ========================================================================== */

function switchMode(mode) {
  state.currentMode = mode;

  // Toggle Nav Buttons
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`btn-${mode}-mode`).classList.add('active');

  // Toggle Views
  document.querySelectorAll('.view-section').forEach(view => view.classList.remove('active'));
  document.getElementById(`${mode}-view`).classList.add('active');

  if (mode === 'all') {
    filterAllQuestions();
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
  if (theme === 'light') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

/* ==========================================================================
   Practice Mode Logic
   ========================================================================== */

function initJumpDropdown() {
  const select = document.getElementById('jump-select');
  select.innerHTML = '';
  QUIZ_DATA.forEach((q, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = `Q${q.id}`;
    select.appendChild(opt);
  });
}

function renderCurrentPracticeQuestion() {
  const q = QUIZ_DATA[state.currentIndex];
  if (!q) return;

  // Update Question Header & Number
  document.getElementById('q-current-num').textContent = q.id;
  document.getElementById('jump-select').value = state.currentIndex;

  // Bookmark Status
  const bookmarkBtn = document.getElementById('q-bookmark-btn');
  const bookmarkIcon = document.getElementById('bookmark-icon');
  if (state.bookmarks.has(q.id)) {
    bookmarkBtn.classList.add('active');
    bookmarkIcon.className = 'fa-solid fa-star';
  } else {
    bookmarkBtn.classList.remove('active');
    bookmarkIcon.className = 'fa-regular fa-star';
  }

  // Question Text
  document.getElementById('q-text').textContent = `${q.id}. ${q.question}`;

  // Options Grid
  const optionsContainer = document.getElementById('q-options-container');
  optionsContainer.innerHTML = '';

  const chosenIndex = state.userAnswers[q.id];
  const isAnswered = chosenIndex !== undefined;

  q.options.forEach((optText, idx) => {
    const letter = String.fromCharCode(65 + idx); // A, B, C, D
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    
    if (isAnswered) {
      btn.classList.add('disabled');
      if (idx === q.answer) {
        btn.classList.add('selected-correct');
      } else if (idx === chosenIndex) {
        btn.classList.add('selected-incorrect');
      }
    }

    btn.onclick = () => selectPracticeAnswer(q.id, idx);

    btn.innerHTML = `
      <span class="option-letter">${letter}</span>
      <span class="option-text">${optText}</span>
    `;

    optionsContainer.appendChild(btn);
  });

  // Solution Box
  const expBox = document.getElementById('q-explanation-box');
  const expText = document.getElementById('q-explanation-text');
  if (isAnswered) {
    expText.textContent = q.explanation || "Standard fluid mechanics principle.";
    expBox.classList.remove('hidden');
  } else {
    expBox.classList.add('hidden');
  }

  // Render Private Notes & Subscribe to Realtime Live Shared Notes
  renderCurrentPrivateNote();
  subscribeLiveNotesCurrent();
}

function selectPracticeAnswer(qId, optionIdx) {
  if (state.userAnswers[qId] !== undefined) return;

  state.userAnswers[qId] = optionIdx;
  saveData('fm_user_answers', state.userAnswers);

  renderCurrentPracticeQuestion();
  updateStats();
}

function resetCurrentQuestionState() {
  const q = QUIZ_DATA[state.currentIndex];
  delete state.userAnswers[q.id];
  saveData('fm_user_answers', state.userAnswers);
  renderCurrentPracticeQuestion();
  updateStats();
}

function nextQuestion() {
  if (state.currentIndex < QUIZ_DATA.length - 1) {
    state.currentIndex++;
    renderCurrentPracticeQuestion();
  }
}

function prevQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderCurrentPracticeQuestion();
  }
}

function jumpToQuestion(idx) {
  state.currentIndex = idx;
  renderCurrentPracticeQuestion();
}

function shuffleCurrentView() {
  state.currentIndex = Math.floor(Math.random() * QUIZ_DATA.length);
  renderCurrentPracticeQuestion();
}

function toggleBookmarkCurrent() {
  const qId = QUIZ_DATA[state.currentIndex].id;
  if (state.bookmarks.has(qId)) {
    state.bookmarks.delete(qId);
  } else {
    state.bookmarks.add(qId);
  }
  saveData('fm_bookmarks', Array.from(state.bookmarks));
  renderCurrentPracticeQuestion();
  updateStats();
}

/* ==========================================================================
   Live Public Notes & Private Notes System
   ========================================================================== */

function switchDrawerTab(tab) {
  state.drawerTab = tab;
  document.querySelectorAll('.drawer-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.drawer-content').forEach(c => c.classList.remove('active'));

  document.getElementById(`tab-${tab}`).classList.add('active');
  document.getElementById(`content-${tab}`).classList.add('active');
}

function renderCurrentPrivateNote() {
  const qId = QUIZ_DATA[state.currentIndex].id;
  const noteInput = document.getElementById('question-note-input');
  noteInput.value = state.notes[qId] || '';

  noteInput.oninput = () => {
    state.notes[qId] = noteInput.value;
    saveData('fm_notes', state.notes);
    document.getElementById('note-save-status').style.opacity = '1';
    setTimeout(() => {
      document.getElementById('note-save-status').style.opacity = '0.7';
    }, 1000);
  };
}

function manualSaveNote() {
  const qId = QUIZ_DATA[state.currentIndex].id;
  const noteInput = document.getElementById('question-note-input');
  state.notes[qId] = noteInput.value;
  saveData('fm_notes', state.notes);
  alert('Private note saved locally!');
}

/* Firebase Realtime Live Shared Notes Listener */
function subscribeLiveNotesCurrent() {
  const qId = QUIZ_DATA[state.currentIndex].id;

  // Render stored local cache first
  renderLiveNotesUI(state.liveNotes[qId] || []);

  if (state.firebaseDb) {
    if (state.activeLiveListenerRef) {
      state.activeLiveListenerRef.off(); // Detach previous listener
    }

    const ref = state.firebaseDb.ref(`live_notes/q_${qId}`);
    state.activeLiveListenerRef = ref;

    ref.on('value', snapshot => {
      const data = snapshot.val();
      let notesList = [];
      if (data) {
        notesList = Object.values(data).reverse(); // Newest first
      }
      state.liveNotes[qId] = notesList;
      saveData('fm_live_notes_local', state.liveNotes);
      renderLiveNotesUI(notesList);
    }, err => {
      console.warn('Firebase sync error, displaying local cache:', err);
    });
  }
}

function renderLiveNotesUI(notesList) {
  document.getElementById('live-count-badge').textContent = notesList.length;

  const container = document.getElementById('live-notes-container');
  container.innerHTML = '';

  if (notesList.length === 0) {
    container.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-muted);">No shared notes yet for Problem #${QUIZ_DATA[state.currentIndex].id}. Be the first to post a study tip or formula!</p>`;
    return;
  }

  notesList.forEach(item => {
    const div = document.createElement('div');
    div.className = 'comment-item';
    div.innerHTML = `
      <div class="comment-meta">
        <span class="comment-author"><i class="fa-solid fa-user-graduate"></i> ${escapeHTML(item.name)}</span>
        <span class="comment-date">${item.date}</span>
      </div>
      <div class="comment-body">${escapeHTML(item.text)}</div>
    `;
    container.appendChild(div);
  });
}

function postLiveSharedNote() {
  const qId = QUIZ_DATA[state.currentIndex].id;
  const nameInput = document.getElementById('live-name-input');
  const textInput = document.getElementById('live-text-input');

  const name = nameInput.value.trim() || 'Engineering Student';
  const text = textInput.value.trim();

  if (!text) {
    alert('Please enter your shared note text before posting.');
    return;
  }

  const newNote = {
    id: Date.now(),
    name: name,
    text: text,
    date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  // Push to Firebase Realtime Database
  if (state.firebaseDb) {
    try {
      state.firebaseDb.ref(`live_notes/q_${qId}`).push(newNote);
    } catch (e) {
      console.error('Firebase push failed:', e);
    }
  }

  // Also save to local state
  if (!state.liveNotes[qId]) state.liveNotes[qId] = [];
  state.liveNotes[qId].unshift(newNote);
  saveData('fm_live_notes_local', state.liveNotes);

  textInput.value = '';
  renderLiveNotesUI(state.liveNotes[qId]);
}

/* ==========================================================================
   Exam Mode Logic
   ========================================================================== */

function startExam() {
  const qCount = parseInt(document.getElementById('exam-q-count').value);
  const minutes = parseInt(document.getElementById('exam-timer-select').value);

  const shuffled = [...QUIZ_DATA].sort(() => 0.5 - Math.random());
  state.exam.questions = shuffled.slice(0, qCount);
  state.exam.currentIndex = 0;
  state.exam.userAnswers = {};
  state.exam.active = true;

  if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);
  if (minutes > 0) {
    state.exam.secondsRemaining = minutes * 60;
    state.exam.totalSeconds = minutes * 60;
    startExamTimer();
  } else {
    document.getElementById('exam-timer-display').textContent = 'Untimed';
  }

  document.getElementById('exam-setup-panel').classList.add('hidden');
  document.getElementById('exam-results-panel').classList.add('hidden');
  document.getElementById('exam-active-panel').classList.remove('hidden');

  renderExamQuestion();
  renderExamMatrix();
}

function startExamTimer() {
  updateTimerDisplay();
  state.exam.timerInterval = setInterval(() => {
    state.exam.secondsRemaining--;
    updateTimerDisplay();
    if (state.exam.secondsRemaining <= 0) {
      clearInterval(state.exam.timerInterval);
      alert('Time is up! Submitting your exam.');
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const display = document.getElementById('exam-timer-display');
  if (!state.exam.active || state.exam.secondsRemaining <= 0) return;

  const m = Math.floor(state.exam.secondsRemaining / 60);
  const s = state.exam.secondsRemaining % 60;
  display.innerHTML = `<i class="fa-solid fa-stopwatch"></i> ${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function renderExamQuestion() {
  const q = state.exam.questions[state.exam.currentIndex];
  if (!q) return;

  document.getElementById('exam-cur-index').textContent = state.exam.currentIndex + 1;
  document.getElementById('exam-total-index').textContent = state.exam.questions.length;
  document.getElementById('exam-q-text').textContent = `Problem #${q.id}: ${q.question}`;

  const container = document.getElementById('exam-options-container');
  container.innerHTML = '';

  const chosenIndex = state.exam.userAnswers[q.id];

  q.options.forEach((optText, idx) => {
    const letter = String.fromCharCode(65 + idx);
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (chosenIndex === idx) {
      btn.classList.add('selected-correct');
    }

    btn.onclick = () => {
      state.exam.userAnswers[q.id] = idx;
      renderExamQuestion();
      renderExamMatrix();
    };

    btn.innerHTML = `
      <span class="option-letter">${letter}</span>
      <span class="option-text">${optText}</span>
    `;
    container.appendChild(btn);
  });
}

function renderExamMatrix() {
  const container = document.getElementById('exam-matrix-container');
  container.innerHTML = '';

  state.exam.questions.forEach((q, idx) => {
    const bubble = document.createElement('div');
    bubble.className = 'matrix-bubble';
    if (state.exam.userAnswers[q.id] !== undefined) bubble.classList.add('answered');
    if (idx === state.exam.currentIndex) bubble.classList.add('current');

    bubble.textContent = idx + 1;
    bubble.onclick = () => {
      state.exam.currentIndex = idx;
      renderExamQuestion();
      renderExamMatrix();
    };

    container.appendChild(bubble);
  });
}

function nextExamQuestion() {
  if (state.exam.currentIndex < state.exam.questions.length - 1) {
    state.exam.currentIndex++;
    renderExamQuestion();
    renderExamMatrix();
  }
}

function prevExamQuestion() {
  if (state.exam.currentIndex > 0) {
    state.exam.currentIndex--;
    renderExamQuestion();
    renderExamMatrix();
  }
}

function confirmFinishExam() {
  const answeredCount = Object.keys(state.exam.userAnswers).length;
  const total = state.exam.questions.length;

  if (answeredCount < total) {
    if (!confirm(`You have only answered ${answeredCount} of ${total} questions. Are you sure you want to submit?`)) {
      return;
    }
  }
  finishExam();
}

function finishExam() {
  if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);
  state.exam.active = false;

  let correctCount = 0;
  state.exam.questions.forEach(q => {
    if (state.exam.userAnswers[q.id] === q.answer) {
      correctCount++;
      state.userAnswers[q.id] = state.exam.userAnswers[q.id];
    } else if (state.exam.userAnswers[q.id] !== undefined) {
      state.userAnswers[q.id] = state.exam.userAnswers[q.id];
    }
  });

  saveData('fm_user_answers', state.userAnswers);
  updateStats();

  const total = state.exam.questions.length;
  const percent = Math.round((correctCount / total) * 100);

  document.getElementById('exam-active-panel').classList.add('hidden');
  document.getElementById('exam-results-panel').classList.remove('hidden');

  document.getElementById('result-score').textContent = `${correctCount} / ${total}`;
  document.getElementById('result-percent').textContent = `${percent}%`;

  const feedbackText = document.getElementById('result-feedback-text');
  const icon = document.getElementById('result-status-icon');

  if (percent >= 80) {
    icon.innerHTML = `<i class="fa-solid fa-trophy"></i>`;
    feedbackText.textContent = "Outstanding Performance! You are ready for the Fluid Mechanics Board Examination!";
  } else if (percent >= 60) {
    icon.innerHTML = `<i class="fa-solid fa-medal"></i>`;
    feedbackText.textContent = "Good Effort! Review your missed questions to boost your mastery score.";
  } else {
    icon.innerHTML = `<i class="fa-solid fa-brain"></i>`;
    feedbackText.textContent = "Keep practicing! Re-read Chapter 11 concepts and attempt the quiz again.";
  }
}

function resetExamPanel() {
  document.getElementById('exam-results-panel').classList.add('hidden');
  document.getElementById('exam-setup-panel').classList.remove('hidden');
}

function reviewExamMissed() {
  switchMode('all');
  document.getElementById('filter-status-select').value = 'incorrect';
  filterAllQuestions();
}

/* ==========================================================================
   All Questions / Flashcard View
   ========================================================================== */

function filterAllQuestions() {
  const searchVal = document.getElementById('search-all-input').value.toLowerCase();
  const filterStatus = document.getElementById('filter-status-select').value;

  const container = document.getElementById('all-questions-list');
  container.innerHTML = '';

  let count = 0;

  QUIZ_DATA.forEach(q => {
    const isBookmarked = state.bookmarks.has(q.id);
    const userAnswer = state.userAnswers[q.id];
    const isAnswered = userAnswer !== undefined;
    const isCorrect = isAnswered && userAnswer === q.answer;
    const isIncorrect = isAnswered && userAnswer !== q.answer;
    const hasNotes = !!(state.notes[q.id] && state.notes[q.id].trim());

    if (filterStatus === 'bookmarked' && !isBookmarked) return;
    if (filterStatus === 'correct' && !isCorrect) return;
    if (filterStatus === 'incorrect' && !isIncorrect) return;
    if (filterStatus === 'has_notes' && !hasNotes) return;

    const qMatches = q.question.toLowerCase().includes(searchVal);
    const optMatches = q.options.some(o => o.toLowerCase().includes(searchVal));
    if (searchVal && !qMatches && !optMatches) return;

    count++;

    const item = document.createElement('div');
    item.className = 'question-list-item';
    
    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
      const isCorrectOpt = idx === q.answer;
      optionsHtml += `<div class="item-opt ${isCorrectOpt ? 'correct-opt' : ''}">${String.fromCharCode(65 + idx)}. ${opt}</div>`;
    });

    item.innerHTML = `
      <div class="item-top">
        <span class="item-num">Problem #${q.id}</span>
        ${isBookmarked ? '<span style="color: var(--color-warning); font-size: 0.85rem;"><i class="fa-solid fa-star"></i> Bookmarked</span>' : ''}
      </div>
      <div class="item-q-text">${q.question}</div>
      <div class="item-options">${optionsHtml}</div>
      <div class="explanation-box" style="margin: 0; padding: 0.85rem;">
        <div class="explanation-header"><i class="fa-solid fa-lightbulb"></i> Key Concept:</div>
        <div class="explanation-text">${q.explanation}</div>
      </div>
    `;

    container.appendChild(item);
  });

  document.getElementById('search-count-badge').textContent = `Showing ${count} of ${QUIZ_DATA.length} problems`;
}

/* ==========================================================================
   Analytics & Global Stats
   ========================================================================== */

function updateStats() {
  const total = QUIZ_DATA.length;
  let correct = 0;
  let incorrect = 0;

  QUIZ_DATA.forEach(q => {
    const ans = state.userAnswers[q.id];
    if (ans !== undefined) {
      if (ans === q.answer) correct++;
      else incorrect++;
    }
  });

  const answeredTotal = correct + incorrect;
  const accuracy = answeredTotal > 0 ? Math.round((correct / answeredTotal) * 100) : 0;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-correct').textContent = correct;
  document.getElementById('stat-incorrect').textContent = incorrect;
  document.getElementById('stat-accuracy').textContent = `${accuracy}%`;
  document.getElementById('stat-bookmarks').textContent = state.bookmarks.size;
}

/* ==========================================================================
   Modal Functions & Utilities
   ========================================================================== */

function openGithubModal() {
  document.getElementById('github-modal').classList.add('active');
}

function closeGithubModal() {
  document.getElementById('github-modal').classList.remove('active');
}

function openNotesModal() {
  const exportData = {
    userAnswers: state.userAnswers,
    bookmarks: Array.from(state.bookmarks),
    notes: state.notes,
    liveNotesLocal: state.liveNotes,
    exportDate: new Date().toISOString()
  };

  document.getElementById('export-json-area').value = JSON.stringify(exportData, null, 2);
  document.getElementById('notes-modal').classList.add('active');
}

function closeNotesModal() {
  document.getElementById('notes-modal').classList.remove('active');
}

function copyExportJSON() {
  const area = document.getElementById('export-json-area');
  area.select();
  navigator.clipboard.writeText(area.value);
  alert('Export JSON copied to clipboard!');
}

function importDataJSON() {
  const input = document.getElementById('import-json-area').value.trim();
  if (!input) return;

  try {
    const data = JSON.parse(input);
    if (data.userAnswers) state.userAnswers = { ...state.userAnswers, ...data.userAnswers };
    if (data.bookmarks) state.bookmarks = new Set([...state.bookmarks, ...data.bookmarks]);
    if (data.notes) state.notes = { ...state.notes, ...data.notes };
    if (data.liveNotesLocal) state.liveNotes = { ...state.liveNotes, ...data.liveNotesLocal };

    saveData('fm_user_answers', state.userAnswers);
    saveData('fm_bookmarks', Array.from(state.bookmarks));
    saveData('fm_notes', state.notes);
    saveData('fm_live_notes_local', state.liveNotes);

    updateStats();
    renderCurrentPracticeQuestion();
    alert('Data imported and merged successfully!');
    closeNotesModal();
  } catch (e) {
    alert('Invalid JSON format. Please check your pasted data.');
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
