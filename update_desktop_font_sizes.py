import sys
import re

filepath = 'styles.css'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Separate desktop base styles (before @media (max-width: 640px)) and mobile styles
mobile_marker = '/* MOBILE RESPONSIVE STYLES (Optimized to Prevent Navigation Button Shifts) */'
parts = content.split(mobile_marker)

base_css = parts[0]
mobile_css = mobile_marker + parts[1]

# List of desktop font size replacements (+0.1875rem ~ +0.2rem / +3px)
replacements = [
    (r'(\.brand-text h1\s*\{[^}]*?font-size:\s*)1\.15rem', r'\g<1>1.35rem'),
    (r'(\.brand-icon\s*\{[^}]*?font-size:\s*)1\.2rem', r'\g<1>1.4rem'),
    (r'(\.subject-dropdown-wrapper label\s*\{[^}]*?font-size:\s*)0\.85rem', r'\g<1>1.05rem'),
    (r'(\.subject-dropdown-wrapper select\s*\{[^}]*?font-size:\s*)0\.9rem', r'\g<1>1.1rem'),
    (r'(\.nav-btn\s*\{[^}]*?font-size:\s*)0\.85rem', r'\g<1>1.05rem'),
    (r'(\.action-btn\s*\{[^}]*?font-size:\s*)0\.85rem', r'\g<1>1.05rem'),
    (r'(\.stat-group-header\s*\{[^}]*?font-size:\s*)0\.75rem', r'\g<1>0.95rem'),
    (r'(\.stat-group-icon\s*\{[^}]*?font-size:\s*)0\.95rem', r'\g<1>1.15rem'),
    (r'(\.stat-value\s*\{[^}]*?font-size:\s*)1\.35rem', r'\g<1>1.55rem'),
    (r'(\.stat-label\s*\{[^}]*?font-size:\s*)0\.7rem', r'\g<1>0.9rem'),
    (r'(\.reset-all-btn\s*\{[^}]*?font-size:\s*)0\.85rem', r'\g<1>1.05rem'),
    (r'(\.question-text\s*\{[^}]*?font-size:\s*)1\.25rem', r'\g<1>1.45rem'),
    (r'(\.option-btn\s*\{[^}]*?font-size:\s*)1rem', r'\g<1>1.2rem'),
    (r'(\.option-letter\s*\{[^}]*?font-size:\s*)0\.85rem', r'\g<1>1.05rem'),
    (r'(\.opt-badge-tag\s*\{[^}]*?font-size:\s*)0\.75rem', r'\g<1>0.95rem'),
    (r'(\.quiz-nav-btn\s*\{[^}]*?font-size:\s*)0\.95rem', r'\g<1>1.15rem'),
    (r'(\.question-number-badge\s*\{[^}]*?font-size:\s*)0\.875rem', r'\g<1>1.075rem'),
    (r'(\.jump-input-wrapper label\s*\{[^}]*?font-size:\s*)0\.8rem', r'\g<1>1.0rem'),
    (r'(\.jump-input-wrapper input\s*\{[^}]*?font-size:\s*)0\.85rem', r'\g<1>1.05rem'),
    (r'(\.jump-go-btn\s*\{[^}]*?font-size:\s*)0\.7rem', r'\g<1>0.9rem'),
    (r'(\.practice-filter-wrapper label\s*\{[^}]*?font-size:\s*)0\.8rem', r'\g<1>1.0rem'),
    (r'(\.practice-filter-wrapper select\s*\{[^}]*?font-size:\s*)0\.85rem', r'\g<1>1.05rem'),
    (r'(\.control-toggle-btn\s*\{[^}]*?font-size:\s*)0\.85rem', r'\g<1>1.05rem'),
    (r'(\.bookmark-btn\s*\{[^}]*?font-size:\s*)0\.85rem', r'\g<1>1.05rem'),
    (r'(\.explanation-header\s*\{[^}]*?font-size:\s*)0\.92rem', r'\g<1>1.12rem'),
    (r'(\.hide-hints-top-btn\s*\{[^}]*?font-size:\s*)0\.8rem', r'\g<1>1.0rem'),
    (r'(\.explanation-text\s*\{[^}]*?font-size:\s*)0\.92rem', r'\g<1>1.12rem'),
    (r'(\.notes-toggle-btn\s*\{[^}]*?font-size:\s*)0\.95rem', r'\g<1>1.15rem'),
    (r'(\.notes-drawer-btn\s*\{[^}]*?font-size:\s*)0\.9rem', r'\g<1>1.1rem'),
    (r'(\.notes-section-header h3\s*\{[^}]*?font-size:\s*)1\.1rem', r'\g<1>1.3rem'),
    (r'(\.notes-sub-info\s*\{[^}]*?font-size:\s*)0\.85rem', r'\g<1>1.05rem'),
    (r'(#live-name-input\s*\{[^}]*?font-size:\s*)0\.875rem', r'\g<1>1.075rem'),
    (r'(#live-text-input\s*\{[^}]*?font-size:\s*)0\.875rem', r'\g<1>1.075rem'),
    (r'(\.comment-submit-btn\s*\{[^}]*?font-size:\s*)0\.85rem', r'\g<1>1.05rem'),
    (r'(\.comment-meta\s*\{[^}]*?font-size:\s*)0\.8rem', r'\g<1>1.0rem'),
    (r'(\.delete-note-btn\s*\{[^}]*?font-size:\s*)0\.78rem', r'\g<1>0.98rem'),
    (r'(\.comment-body\s*\{[^}]*?font-size:\s*)0\.9rem', r'\g<1>1.1rem'),
    (r'(#search-all-input\s*\{[^}]*?font-size:\s*)0\.95rem', r'\g<1>1.15rem'),
    (r'(#filter-status-select\s*\{[^}]*?font-size:\s*)0\.875rem', r'\g<1>1.075rem'),
    (r'(\.item-q-text\s*\{[^}]*?font-size:\s*)1\.05rem', r'\g<1>1.25rem'),
    (r'(\.item-opt\s*\{[^}]*?font-size:\s*)0\.875rem', r'\g<1>1.075rem')
]

for pat, repl in replacements:
    base_css = re.sub(pat, repl, base_css)

new_content = base_css + mobile_css

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Desktop font sizes updated successfully!")
