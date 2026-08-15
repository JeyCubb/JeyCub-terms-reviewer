# Fluid Mechanics Quiz Reviewer & Board Exam Practice (128 Problems)

An interactive, responsive, web-based quiz reviewer designed for **Chapter 11: Fluid Mechanics** (127 Multiple Choice Board Problems + Chapter Title). Features practice modes, timed mock exams, personal study notes per question, interactive discussions/comments, progress analytics, and one-click GitHub Pages deployment.

![Fluid Mechanics Reviewer Preview](https://img.shields.io/badge/Status-Ready_to_Deploy-success) ![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🌟 Key Features

1. **Complete 127-Question Dataset**:
   - Every multiple-choice question from Chapter 11 with choices (A–D), official answer keys, and engineering explanations.
2. **Multiple Study & Testing Modes**:
   - 🎓 **Practice Mode**: Interactive step-by-step quiz with instant answer validation, jump dropdowns, bookmarking, and solution explanations.
   - ⏱️ **Exam Mode**: Configurable timed mock exams (15, 30, 60 questions or full 127) with countdown timer, question matrix bubble navigation, and detailed score report.
   - 📋 **All Questions View**: Searchable & filterable flashcard view (filter by bookmarked, incorrect, or questions with custom notes).
3. **Personal Study Notes**:
   - Write custom formulas, mnemonics, or notes for each problem. Auto-saved to `localStorage`.
4. **Discussion & Comments System**:
   - Local discussion thread per problem with import/export capabilities, plus support for GitHub Giscus/Utterances integration.
5. **Data Export & Import**:
   - Backup or share study notes, comments, and quiz progress with classmates using JSON export/import.
6. **Dark & Light Mode**:
   - Sleek engineering design system with glassmorphism UI and responsive layouts.

---

## 🚀 How to Run Locally

Since this app is built with vanilla HTML5, CSS3, and ES6+ JavaScript, **no build tools or Node server are required**!

1. Clone or download this repository.
2. Open `index.html` directly in any modern browser (Chrome, Firefox, Edge, Safari).
3. Alternatively, launch a local web server (e.g. `npx serve .` or VS Code Live Server).

---

## 🌐 How to Host on GitHub Pages (Free)

Follow these simple steps to upload your reviewer to GitHub and share the link with friends:

### Step 1: Create a new Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Name your repository: `fluid-mechanics-reviewer` (or any name you prefer).
3. Set visibility to **Public**, and click **Create repository**.

### Step 2: Push your files to GitHub
Open your terminal inside this project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - Fluid Mechanics Reviewer Web App"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/fluid-mechanics-reviewer.git
git push -u origin main
```

*(Replace `YOUR-USERNAME` with your actual GitHub username)*

### Step 3: Enable GitHub Pages
1. Open your repository page on GitHub.
2. Click **Settings** (top navigation) &rarr; **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` and folder `/ (root)`
4. Click **Save**.

Within 1 minute, your website will be live at:
`https://YOUR-USERNAME.github.io/fluid-mechanics-reviewer/`

---

## 📁 File Structure

```
fluid-mechanics-quiz-reviewer/
├── index.html        # SPA Layout, header, practice/exam/all views, modals
├── styles.css        # Modern design system, themes, CSS variables, glassmorphism
├── app.js            # Quiz engine, exam timer, LocalStorage state, search/filters
├── questions.js      # Complete dataset of 127 questions & explanations
└── README.md         # Project documentation & GitHub Pages deployment guide
```

---

## 📜 License
MIT License - Feel free to modify, customize, and share!
