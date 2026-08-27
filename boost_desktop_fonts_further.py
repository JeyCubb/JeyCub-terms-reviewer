import re

filepath = 'styles.css'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

mobile_marker = '/* MOBILE RESPONSIVE STYLES (Optimized to Prevent Navigation Button Shifts) */'
parts = content.split(mobile_marker)

base_css = parts[0]
mobile_css = mobile_marker + parts[1]

# Extra desktop font size boosts for clear, prominent desktop legibility
boosts = [
    (r'(\.question-text\s*\{[^}]*?font-size:\s*)1\.45rem', r'\g<1>1.65rem'),
    (r'(\.option-btn\s*\{[^}]*?font-size:\s*)1\.2rem', r'\g<1>1.35rem'),
    (r'(\.option-letter\s*\{[^}]*?font-size:\s*)1\.05rem', r'\g<1>1.18rem'),
    (r'(\.quiz-nav-btn\s*\{[^}]*?font-size:\s*)1\.15rem', r'\g<1>1.3rem'),
    (r'(\.notes-toggle-btn\s*\{[^}]*?font-size:\s*)1\.15rem', r'\g<1>1.28rem'),
    (r'(\.notes-drawer-btn\s*\{[^}]*?font-size:\s*)1\.1rem', r'\g<1>1.25rem'),
    (r'(\.question-number-badge\s*\{[^}]*?font-size:\s*)1\.075rem', r'\g<1>1.2rem'),
    (r'(\.subject-dropdown-wrapper select\s*\{[^}]*?font-size:\s*)1\.1rem', r'\g<1>1.25rem'),
    (r'(\.subject-dropdown-wrapper label\s*\{[^}]*?font-size:\s*)1\.05rem', r'\g<1>1.18rem'),
    (r'(\.brand-text h1\s*\{[^}]*?font-size:\s*)1\.35rem', r'\g<1>1.55rem'),
    (r'(\.brand-icon\s*\{[^}]*?font-size:\s*)1\.4rem', r'\g<1>1.6rem'),
    (r'(\.nav-btn\s*\{[^}]*?font-size:\s*)1\.05rem', r'\g<1>1.2rem'),
    (r'(\.action-btn\s*\{[^}]*?font-size:\s*)1\.05rem', r'\g<1>1.2rem'),
    (r'(\.stat-value\s*\{[^}]*?font-size:\s*)1\.55rem', r'\g<1>1.8rem'),
    (r'(\.stat-label\s*\{[^}]*?font-size:\s*)0\.9rem', r'\g<1>1.05rem'),
    (r'(\.stat-group-header\s*\{[^}]*?font-size:\s*)0\.95rem', r'\g<1>1.1rem'),
    (r'(\.explanation-text\s*\{[^}]*?font-size:\s*)1\.12rem', r'\g<1>1.25rem'),
    (r'(\.explanation-header\s*\{[^}]*?font-size:\s*)1\.12rem', r'\g<1>1.25rem'),
    (r'(\.item-q-text\s*\{[^}]*?font-size:\s*)1\.25rem', r'\g<1>1.4rem'),
    (r'(\.item-opt\s*\{[^}]*?font-size:\s*)1\.075rem', r'\g<1>1.2rem'),
    (r'(#search-all-input\s*\{[^}]*?font-size:\s*)1\.15rem', r'\g<1>1.25rem')
]

for pat, repl in boosts:
    base_css = re.sub(pat, repl, base_css)

new_content = base_css + mobile_css

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Desktop fonts further enlarged cleanly!")
