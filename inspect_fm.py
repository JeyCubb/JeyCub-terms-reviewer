import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('fluid_mechanics:')
print("start index for fluid_mechanics:", start)
if start != -1:
    fm_chunk = text[start:start+300000]
    match = re.search(r'\{\s*"id":\s*56,.*?\n\s*\}', fm_chunk, re.DOTALL)
    if match:
        print("=== FLUID MECHANICS QUESTION #56 ===")
        print(match.group(0))
    else:
        print("No match found in first 300,000 chars of fluid_mechanics.")
