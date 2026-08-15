/**
 * Jeycub Terms Reviewer - Application Engine
 * Supports Multi-Subject Selection (Fluid Mechanics, Deformable Bodies, Heat Transfer),
 * Practice/Exam Modes, Togglable Bottom Per-Question Notes, and Realtime Cloud Database Sync.
 */

// Global State
let state = {
  currentSubject: 'fluid_mechanics', // 'fluid_mechanics', 'deformable_bodies', 'heat_transfer'
  currentMode: 'practice', // 'practice', 'exam', 'all'
  currentIndex: 0,
  userAnswers: {}, // { "subject_qId": optionIndex }
  bookmarks: new Set(), // Set of "subject_qId"
  liveNotes: {}, // { "subject_qId": [{ id, name, text, date }] }
  notesOpen: false,
  
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

// Default Free Public Firebase Config
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

/* Helper to get active dataset */
function getActiveQuestions() {
  return SUBJECT_DATA[state.currentSubject].questions;
}

function getActiveSubjectInfo() {
  return SUBJECT_DATA[state.currentSubject];
}

/* ==========================================================================
   Subject Switcher Logic
   ========================================================================== */

function switchSubject(subjectKey) {
  if (!SUBJECT_DATA[subjectKey]) return;
  state.currentSubject = subjectKey;
  state.currentIndex = 0;
  localStorage.setItem('jt_subject', subjectKey);

  const info = getActiveSubjectInfo();
  document.getElementById('subject-subtitle').textContent = `${info.title} • ${info.chapter} Quiz Bank`;
  document.getElementById('subject-badge-name').textContent = info.title;
  document.getElementById('exam-subject-title').textContent = `${info.title} Mock Examination`;

  initJumpDropdown();
  renderCurrentPracticeQuestion();
  updateStats();
  if (state.currentMode === 'all') {
    filterAllQuestions();
  }
}

/* ==========================================================================
   Firebase Realtime Database Setup
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
    }
  } catch (e) {
    console.warn('Firebase initialization error, using local fallback:', e);
  }
}

/* ==========================================================================
   LocalStorage & Data Persistence
   ========================================================================== */

function loadStoredData() {
  try {
    const savedSubject = localStorage.getItem('jt_subject');
    if (savedSubject && SUBJECT_DATA[savedSubject]) {
      state.currentSubject = savedSubject;
      document.getElementById('subject-selector').value = savedSubject;
    }

    const savedAnswers = localStorage.getItem('jt_user_answers');
    if (savedAnswers) state.userAnswers = JSON.parse(savedAnswers);

    const savedBookmarks = localStorage.getItem('jt_bookmarks');
    if (savedBookmarks) state.bookmarks = new Set(JSON.parse(savedBookmarks));

    const savedLive = localStorage.getItem('jt_live_notes_local');
    if (savedLive) state.liveNotes = JSON.parse(savedLive);

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

  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`btn-${mode}-mode`).classList.add('active');

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
  const questions = getActiveQuestions();
  const select = document.getElementById('jump-select');
  select.innerHTML = '';
  questions.forEach((q, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = `Q${q.id}`;
    select.appendChild(opt);
  });
}

function renderCurrentPracticeQuestion() {
  const questions = getActiveQuestions();
  const q = questions[state.currentIndex];
  if (!q) return;

  const key = `${state.currentSubject}_q${q.id}`;

  document.getElementById('q-current-num').textContent = q.id;
  document.getElementById('q-total-num').textContent = questions.length;
  document.getElementById('jump-select').value = state.currentIndex;

  // Bookmark Status
  const bookmarkBtn = document.getElementById('q-bookmark-btn');
  const bookmarkIcon = document.getElementById('bookmark-icon');
  if (state.bookmarks.has(key)) {
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

  const chosenIndex = state.userAnswers[key];
  const isAnswered = chosenIndex !== undefined;

  q.options.forEach((optText, idx) => {
    const letter = String.fromCharCode(65 + idx);
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

    btn.onclick = () => selectPracticeAnswer(key, idx);

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
    expText.textContent = q.explanation || "Standard engineering principle.";
    expBox.classList.remove('hidden');
  } else {
    expBox.classList.add('hidden');
  }

  // Subscribe to Realtime Notes per question
  document.getElementById('notes-q-num').textContent = q.id;
  subscribeLiveNotesCurrent();
}

function selectPracticeAnswer(key, optionIdx) {
  if (state.userAnswers[key] !== undefined) return;

  state.userAnswers[key] = optionIdx;
  saveData('jt_user_answers', state.userAnswers);

  renderCurrentPracticeQuestion();
  updateStats();
}

function resetCurrentQuestionState() {
  const questions = getActiveQuestions();
  const q = questions[state.currentIndex];
  const key = `${state.currentSubject}_q${q.id}`;

  delete state.userAnswers[key];
  saveData('jt_user_answers', state.userAnswers);
  renderCurrentPracticeQuestion();
  updateStats();
}

function nextQuestion() {
  const questions = getActiveQuestions();
  if (state.currentIndex < questions.length - 1) {
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
  const questions = getActiveQuestions();
  state.currentIndex = Math.floor(Math.random() * questions.length);
  renderCurrentPracticeQuestion();
}

function toggleBookmarkCurrent() {
  const questions = getActiveQuestions();
  const qId = questions[state.currentIndex].id;
  const key = `${state.currentSubject}_q${qId}`;

  if (state.bookmarks.has(key)) {
    state.bookmarks.delete(key);
  } else {
    state.bookmarks.add(key);
  }
  saveData('jt_bookmarks', Array.from(state.bookmarks));
  renderCurrentPracticeQuestion();
  updateStats();
}

/* ==========================================================================
   Togglable Per-Question Notes Section (At Bottom, Hidden by Default)
   ========================================================================== */

function toggleNotesSection() {
  state.notesOpen = !state.notesOpen;
  const container = document.getElementById('notes-section-container');
  const btn = document.getElementById('toggle-notes-btn');

  if (state.notesOpen) {
    container.classList.remove('hidden');
    btn.classList.add('active');
    btn.innerHTML = `<i class="fa-solid fa-comments"></i> Hide Notes & Discussion (<span id="notes-count-badge">${getLiveNotesCount()}</span>) <i class="fa-solid fa-chevron-down" id="toggle-notes-chevron"></i>`;
    container.scrollIntoView({ behavior: 'smooth' });
  } else {
    container.classList.add('hidden');
    btn.classList.remove('active');
    btn.innerHTML = `<i class="fa-solid fa-comments"></i> Show Notes & Discussion (<span id="notes-count-badge">${getLiveNotesCount()}</span>) <i class="fa-solid fa-chevron-down" id="toggle-notes-chevron"></i>`;
  }
}

function getLiveNotesCount() {
  const questions = getActiveQuestions();
  const qId = questions[state.currentIndex].id;
  const key = `${state.currentSubject}_q${qId}`;
  return (state.liveNotes[key] || []).length;
}

/* Firebase Realtime Notes Listener */
function subscribeLiveNotesCurrent() {
  const questions = getActiveQuestions();
  const qId = questions[state.currentIndex].id;
  const key = `${state.currentSubject}_q${qId}`;

  renderLiveNotesUI(state.liveNotes[key] || []);

  if (state.firebaseDb) {
    if (state.activeLiveListenerRef) {
      state.activeLiveListenerRef.off();
    }

    const ref = state.firebaseDb.ref(`live_notes/${key}`);
    state.activeLiveListenerRef = ref;

    ref.on('value', snapshot => {
      const data = snapshot.val();
      let notesList = [];
      if (data) {
        notesList = Object.values(data).reverse();
      }
      state.liveNotes[key] = notesList;
      saveData('jt_live_notes_local', state.liveNotes);
      renderLiveNotesUI(notesList);
    }, err => {
      console.warn('Firebase sync error:', err);
    });
  }
}

function renderLiveNotesUI(notesList) {
  document.getElementById('notes-count-badge').textContent = notesList.length;

  const container = document.getElementById('live-notes-container');
  container.innerHTML = '';

  const questions = getActiveQuestions();
  const qId = questions[state.currentIndex].id;

  if (notesList.length === 0) {
    container.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-muted);">No notes posted yet for Problem #${qId}. Be the first to share a note or formula!</p>`;
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
  const questions = getActiveQuestions();
  const qId = questions[state.currentIndex].id;
  const key = `${state.currentSubject}_q${qId}`;

  const nameInput = document.getElementById('live-name-input');
  const textInput = document.getElementById('live-text-input');

  const name = nameInput.value.trim() || 'Anonymous';
  const text = textInput.value.trim();

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

  if (state.firebaseDb) {
    try {
      state.firebaseDb.ref(`live_notes/${key}`).push(newNote);
    } catch (e) {
      console.error('Firebase push error:', e);
    }
  }

  if (!state.liveNotes[key]) state.liveNotes[key] = [];
  state.liveNotes[key].unshift(newNote);
  saveData('jt_live_notes_local', state.liveNotes);

  textInput.value = '';
  renderLiveNotesUI(state.liveNotes[key]);
}

/* ==========================================================================
   Exam Mode Logic
   ========================================================================== */

function startExam() {
  const questions = getActiveQuestions();
  const countVal = document.getElementById('exam-q-count').value;
  const minutes = parseInt(document.getElementById('exam-timer-select').value);

  const qCount = countVal === 'all' ? questions.length : parseInt(countVal);

  const shuffled = [...questions].sort(() => 0.5 - Math.random());
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
    if (!confirm(`You have only answered ${answeredCount} of ${total} questions. Submit now?`)) {
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
    const key = `${state.currentSubject}_q${q.id}`;
    if (state.exam.userAnswers[q.id] === q.answer) {
      correctCount++;
      state.userAnswers[key] = state.exam.userAnswers[q.id];
    } else if (state.exam.userAnswers[q.id] !== undefined) {
      state.userAnswers[key] = state.exam.userAnswers[q.id];
    }
  });

  saveData('jt_user_answers', state.userAnswers);
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
    feedbackText.textContent = "Outstanding Performance! You are ready for the Board Examination!";
  } else if (percent >= 60) {
    icon.innerHTML = `<i class="fa-solid fa-medal"></i>`;
    feedbackText.textContent = "Good Effort! Review your missed questions to boost your mastery score.";
  } else {
    icon.innerHTML = `<i class="fa-solid fa-brain"></i>`;
    feedbackText.textContent = "Keep practicing! Review subject concepts and retake the quiz.";
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

  const questions = getActiveQuestions();
  let count = 0;

  questions.forEach(q => {
    const key = `${state.currentSubject}_q${q.id}`;
    const isBookmarked = state.bookmarks.has(key);
    const userAnswer = state.userAnswers[key];
    const isAnswered = userAnswer !== undefined;
    const isCorrect = isAnswered && userAnswer === q.answer;
    const isIncorrect = isAnswered && userAnswer !== q.answer;

    if (filterStatus === 'bookmarked' && !isBookmarked) return;
    if (filterStatus === 'correct' && !isCorrect) return;
    if (filterStatus === 'incorrect' && !isIncorrect) return;

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

  document.getElementById('search-count-badge').textContent = `Showing ${count} of ${questions.length} problems`;
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

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-correct').textContent = correct;
  document.getElementById('stat-incorrect').textContent = incorrect;
  document.getElementById('stat-accuracy').textContent = `${accuracy}%`;
  document.getElementById('stat-bookmarks').textContent = bookmarksCount;
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
