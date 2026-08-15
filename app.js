/**
 * Jeycub Terms Reviewer - Application Engine
 * Fast, reliable, local-first review app for Engineering Board Exams.
 * Supports Group Weak Topic Analysis (Class Most Missed Questions Compilation).
 */

// Global State
let state = {
  currentSubject: 'fluid_mechanics', // 'fluid_mechanics', 'deformable_bodies', 'heat_transfer'
  currentMode: 'practice', // 'practice', 'exam', 'all'
  currentIndex: 0,
  randomMode: false,
  userAnswers: {}, // { "subject_qId": optionIndex }
  bookmarks: new Set(), // Set of "subject_qId" stored locally in browser
  liveNotes: {}, // { "subject_qId": [{ id, name, text, date, firebaseKey }] }
  groupMistakes: {}, // { "subject_qId": mistakeCount }
  notesOpen: false,
  
  // Firebase Database Handle for notes & group mistakes
  firebaseDb: null,
  activeLiveListenerRef: null,

  // Exam state
  exam: {
    active: false,
    questions: [],
    currentIndex: 0,
    userAnswers: {}
  }
};

// Free Public Firebase Config for shared notes & group mistakes compilation
const DEFAULT_FIREBASE_CONFIG = {
  databaseURL: "https://fluid-mechanics-reviewer-default-rtdb.firebaseio.com"
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadStoredData();
  updateSubjectUI();
  renderCurrentPracticeQuestion();
  updateStats();
  filterAllQuestions();
  initFirebase();
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
  return data[state.currentSubject] ? data[state.currentSubject].questions : [];
}

function getActiveSubjectInfo() {
  const data = getSubjectData();
  if (!data[state.currentSubject]) {
    state.currentSubject = 'fluid_mechanics';
  }
  return data[state.currentSubject] || { title: 'Fluid Mechanics', chapter: '' };
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

  const examTitle = document.getElementById('exam-subject-title');
  if (examTitle) examTitle.textContent = `${info.title} Mock Examination`;
}

function switchSubject(subjectKey) {
  const data = getSubjectData();
  if (!data[subjectKey]) return;
  state.currentSubject = subjectKey;
  state.currentIndex = 0;
  localStorage.setItem('jt_subject', subjectKey);

  updateSubjectUI();
  renderCurrentPracticeQuestion();
  updateStats();
  if (state.currentMode === 'all') {
    filterAllQuestions();
  }
}

/* ==========================================================================
   Firebase Realtime Notes & Group Mistakes Compilation
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
    }
  } catch (e) {
    console.warn('Firebase sync not available, using local storage fallback:', e);
  }
}

function subscribeGroupMistakes() {
  if (!state.firebaseDb) return;
  try {
    const ref = state.firebaseDb.ref('group_mistakes');
    ref.on('value', snapshot => {
      const data = snapshot.val();
      if (data) {
        state.groupMistakes = data;
        saveData('jt_group_mistakes_local', state.groupMistakes);
      }
    });
  } catch (e) {
    console.warn('Group mistakes sync exception:', e);
  }
}

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

function toggleBookmarkCurrent() {
  const questions = getActiveQuestions();
  if (!questions[state.currentIndex]) return;
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
    if (savedAnswers) state.userAnswers = JSON.parse(savedAnswers);

    const savedBookmarks = localStorage.getItem('jt_bookmarks');
    if (savedBookmarks) state.bookmarks = new Set(JSON.parse(savedBookmarks));

    const savedLive = localStorage.getItem('jt_live_notes_local');
    if (savedLive) state.liveNotes = JSON.parse(savedLive);

    const savedMistakes = localStorage.getItem('jt_group_mistakes_local');
    if (savedMistakes) state.groupMistakes = JSON.parse(savedMistakes);

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
  const questions = getActiveQuestions();
  if (!questions || questions.length === 0) return;

  if (state.currentIndex >= questions.length) state.currentIndex = 0;
  const q = questions[state.currentIndex];
  if (!q) return;

  const key = `${state.currentSubject}_q${q.id}`;

  const curNum = document.getElementById('q-current-num');
  if (curNum) curNum.textContent = q.id;

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
  const qText = document.getElementById('q-text');
  if (qText) qText.textContent = `${q.id}. ${q.question}`;

  // Options Grid
  const optionsContainer = document.getElementById('q-options-container');
  if (optionsContainer) {
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
    if (expBox && expText) {
      if (isAnswered) {
        expText.textContent = q.explanation || "Standard engineering principle.";
        expBox.classList.remove('hidden');
      } else {
        expBox.classList.add('hidden');
      }
    }
  }

  // Notes question number badge
  const notesQNum = document.getElementById('notes-q-num');
  if (notesQNum) notesQNum.textContent = q.id;
  
  subscribeLiveNotesCurrent();
}

function selectPracticeAnswer(key, optionIdx) {
  if (state.userAnswers[key] !== undefined) return;

  const questions = getActiveQuestions();
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
  const questions = getActiveQuestions();
  const q = questions[state.currentIndex];
  if (!q) return;
  const key = `${state.currentSubject}_q${q.id}`;

  delete state.userAnswers[key];
  saveData('jt_user_answers', state.userAnswers);
  renderCurrentPracticeQuestion();
  updateStats();
}

function nextQuestion() {
  const questions = getActiveQuestions();
  if (state.randomMode) {
    state.currentIndex = Math.floor(Math.random() * questions.length);
  } else if (state.currentIndex < questions.length - 1) {
    state.currentIndex++;
  }
  renderCurrentPracticeQuestion();
}

function prevQuestion() {
  const questions = getActiveQuestions();
  if (state.randomMode) {
    state.currentIndex = Math.floor(Math.random() * questions.length);
  } else if (state.currentIndex > 0) {
    state.currentIndex--;
  }
  renderCurrentPracticeQuestion();
}

/* ==========================================================================
   Togglable Per-Question Notes Section
   ========================================================================== */

function toggleNotesSection() {
  state.notesOpen = !state.notesOpen;
  const container = document.getElementById('notes-section-container');
  const btn = document.getElementById('toggle-notes-btn');

  if (!container || !btn) return;

  if (state.notesOpen) {
    container.classList.remove('hidden');
    btn.classList.add('active');
    subscribeLiveNotesCurrent();
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
  if (!questions || !questions[state.currentIndex]) return 0;
  const qId = questions[state.currentIndex].id;
  const key = `${state.currentSubject}_q${qId}`;
  return (state.liveNotes[key] || []).length;
}

function subscribeLiveNotesCurrent() {
  const questions = getActiveQuestions();
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
        if (data) {
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

  const questions = getActiveQuestions();
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
        <span class="comment-author"><i class="fa-solid fa-user-graduate"></i> ${escapeHTML(item.name)}</span>
        <div class="comment-right-meta">
          <span class="comment-date">${item.date}</span>
          <button class="delete-note-btn" onclick="deleteNote(${index}, '${item.firebaseKey || ''}')" title="Delete note">
            <i class="fa-solid fa-trash-can"></i> Delete
          </button>
        </div>
      </div>
      <div class="comment-body">${escapeHTML(item.text)}</div>
    `;
    container.appendChild(div);
  });
}

function postLiveSharedNote() {
  const questions = getActiveQuestions();
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
  const questions = getActiveQuestions();
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
   Untimed Exam Mode Logic
   ========================================================================== */

function startExam() {
  const questions = getActiveQuestions();
  const countVal = document.getElementById('exam-q-count').value;

  let pool = questions;

  if (countVal === 'bookmarked') {
    pool = questions.filter(q => {
      const key = `${state.currentSubject}_q${q.id}`;
      return state.bookmarks.has(key);
    });

    if (pool.length === 0) {
      alert("No bookmarked questions in this subject yet! Click 'Bookmark' on questions in Practice mode to star them.");
      return;
    }
  } else if (countVal === 'group_missed') {
    pool = questions.filter(q => {
      const key = `${state.currentSubject}_q${q.id}`;
      return (state.groupMistakes[key] || 0) > 0;
    });

    if (pool.length === 0) {
      alert("No class mistake records found yet for this subject! As you and your classmates practice and submit answers, the hardest questions will automatically be compiled here.");
      return;
    }

    pool.sort((a, b) => {
      const keyA = `${state.currentSubject}_q${a.id}`;
      const keyB = `${state.currentSubject}_q${b.id}`;
      return (state.groupMistakes[keyB] || 0) - (state.groupMistakes[keyA] || 0);
    });
  }

  const qCount = (countVal === 'all' || countVal === 'bookmarked' || countVal === 'group_missed') ? pool.length : Math.min(parseInt(countVal), pool.length);

  const shuffled = (countVal === 'group_missed') ? [...pool] : [...pool].sort(() => 0.5 - Math.random());
  state.exam.questions = shuffled.slice(0, qCount);
  state.exam.currentIndex = 0;
  state.exam.userAnswers = {};
  state.exam.active = true;

  document.getElementById('exam-setup-panel').classList.add('hidden');
  document.getElementById('exam-results-panel').classList.add('hidden');
  document.getElementById('exam-active-panel').classList.remove('hidden');

  renderExamQuestion();
  renderExamMatrix();
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
  state.exam.active = false;

  let correctCount = 0;
  state.exam.questions.forEach(q => {
    const key = `${state.currentSubject}_q${q.id}`;
    if (state.exam.userAnswers[q.id] === q.answer) {
      correctCount++;
      state.userAnswers[key] = state.exam.userAnswers[q.id];
    } else if (state.exam.userAnswers[q.id] !== undefined) {
      state.userAnswers[key] = state.exam.userAnswers[q.id];
      recordGroupMistake(key);
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
  const searchInput = document.getElementById('search-all-input');
  const searchVal = searchInput ? searchInput.value.toLowerCase() : '';

  const filterSelect = document.getElementById('filter-status-select');
  const filterStatus = filterSelect ? filterSelect.value : 'all';

  const container = document.getElementById('all-questions-list');
  if (!container) return;
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
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
