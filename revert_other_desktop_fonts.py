import re

filepath = 'styles.css'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

mobile_marker = '/* MOBILE RESPONSIVE STYLES (Optimized to Prevent Navigation Button Shifts) */'
parts = content.split(mobile_marker)

base_css = parts[0]
mobile_css = mobile_marker + parts[1]

# Revert all other parts to original font sizes, set .question-text to 1.45rem
reverts = [
    (r'(\.question-text\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>1.45rem'),
    (r'(\.option-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>1rem'),
    (r'(\.option-letter\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.85rem'),
    (r'(\.quiz-nav-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.95rem'),
    (r'(\.notes-toggle-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.95rem'),
    (r'(\.notes-drawer-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.9rem'),
    (r'(\.question-number-badge\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.875rem'),
    (r'(\.subject-dropdown-wrapper select\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.9rem'),
    (r'(\.subject-dropdown-wrapper label\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.85rem'),
    (r'(\.brand-text h1\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>1.15rem'),
    (r'(\.brand-icon\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>1.2rem'),
    (r'(\.nav-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.85rem'),
    (r'(\.action-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.85rem'),
    (r'(\.stat-value\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>1.35rem'),
    (r'(\.stat-label\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.7rem'),
    (r'(\.stat-group-header\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.75rem'),
    (r'(\.explanation-text\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.92rem'),
    (r'(\.explanation-header\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.92rem'),
    (r'(\.item-q-text\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>1.05rem'),
    (r'(\.item-opt\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.875rem'),
    (r'(#search-all-input\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.95rem'),
    (r'(\.opt-badge-tag\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.75rem'),
    (r'(\.stat-group-icon\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.95rem'),
    (r'(\.reset-all-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.85rem'),
    (r'(\.jump-input-wrapper label\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.8rem'),
    (r'(\.jump-input-wrapper input\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.85rem'),
    (r'(\.jump-go-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.7rem'),
    (r'(\.practice-filter-wrapper label\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.8rem'),
    (r'(\.practice-filter-wrapper select\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.85rem'),
    (r'(\.control-toggle-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.85rem'),
    (r'(\.bookmark-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.85rem'),
    (r'(\.hide-hints-top-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.8rem'),
    (r'(\.notes-section-header h3\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>1.1rem'),
    (r'(\.notes-sub-info\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.85rem'),
    (r'(#live-name-input\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.875rem'),
    (r'(#live-text-input\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.875rem'),
    (r'(\.comment-submit-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.85rem'),
    (r'(\.comment-meta\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.8rem'),
    (r'(\.delete-note-btn\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.78rem'),
    (r'(\.comment-body\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.9rem'),
    (r'(#filter-status-select\s*\{[^}]*?font-size:\s*)[0-9\.]+rem', r'\g<1>0.875rem')
]

for pat, repl in reverts:
    base_css = re.sub(pat, repl, base_css)

new_content = base_css + mobile_css

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Reverted all other parts to original font sizes, set question text to 1.45rem!")
