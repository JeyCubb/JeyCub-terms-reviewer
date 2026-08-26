import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Split by subject
subjects = ['basic_electronics', 'ece_prelim_exam', 'fluid_mechanics', 'deformable_bodies', 'heat_transfer']

for s in subjects:
    start = text.find(s + ':')
    if start != -1:
        sub_text = text[start:start+100000]
        match = re.search(r'\{\s*"id":\s*56,.*?\n\s*\}', sub_text, re.DOTALL)
        if match:
            print(f"=== SUBJECT: {s} (Problem #56) ===")
            print(match.group(0))
