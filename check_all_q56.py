import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.finditer(r'\{\s*"id":\s*56,.*?\n\s*\}', text, re.DOTALL)
for i, m in enumerate(matches):
    print(f"=== MATCH {i+1} ===")
    print(m.group(0)[:500])
