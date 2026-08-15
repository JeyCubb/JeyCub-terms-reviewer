import re

filepath = r"C:\Users\Jacob\.gemini\antigravity\scratch\fluid-mechanics-quiz-reviewer\questions.js"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's fix missing closing braces or quotes in questions.js using regex repair:
# Each item is { id: N, question: "...", options: [...], answer: N, explanation: "..." }

# Replace pattern where a new `{ id:` starts without preceding `},`
text = re.sub(r'("\s*)({\s*id\s*:)', r'\1},\n      \2', text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(text)

print("Rebuilt questions.js syntax!")
