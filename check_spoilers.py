import re

with open('questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

matches = re.findall(r'explanation:\s*"([^"]*?(?:option|choice|answer is)[^"]*?)"', text, re.IGNORECASE)
print(f"Found {len(matches)} explanations with explicit answer references:")
for m in matches[:20]:
    print(" -", m)
