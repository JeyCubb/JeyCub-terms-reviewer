import re

filepath = r"C:\Users\Jacob\.gemini\antigravity\scratch\fluid-mechanics-quiz-reviewer\questions.js"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Fix pattern: explanation: "text { id: N
# Should be: explanation: "text" },\n { id: N
text = re.sub(r'explanation:\s*"([^"]*?)\s*{\s*id\s*:', r'explanation: "\1" },\n      { id:', text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed missing quotes and braces in questions.js!")
