import re

filepath = r"C:\Users\Jacob\.gemini\antigravity\scratch\fluid-mechanics-quiz-reviewer\questions.js"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

fixed_lines = []
in_string = False

for line in lines:
    # Replace any literal newlines inside JS string values
    # Also clean up any broken quotes
    line_clean = line.replace('\r', '')
    fixed_lines.append(line_clean)

content = "".join(fixed_lines)

# Fix multi-line strings in JS objects by replacing double quotes with cleaned escaped strings
# Specifically, ensure all explanation: "..." are single-line strings without linebreaks inside the string.

def fix_explanation(m):
    key = m.group(1)
    val = m.group(2)
    # remove interior newlines
    val_clean = val.replace('\n', ' ').replace('\r', ' ')
    val_clean = re.sub(r'\s+', ' ', val_clean).strip()
    return f'{key}: "{val_clean}"'

content = re.sub(r'(explanation|question)\s*:\s*"([^"]*)"', fix_explanation, content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("questions.js syntax cleaned!")
