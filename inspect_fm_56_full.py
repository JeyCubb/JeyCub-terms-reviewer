import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('fluid_mechanics:')
end = text.find('deformable_bodies:')
fm_text = text[start:end]

match = re.search(r'\{\s*id:\s*56,.*?\n\s*\}', fm_text, re.DOTALL)
if match:
    print("=== FLUID MECHANICS QUESTION #56 ===")
    print(match.group(0))
else:
    print("Not found by regex.")
