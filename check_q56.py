import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Load SUBJECT_DATA via python exec or regex
# Let's find fluid_mechanics question id 56
start_fm = text.find('fluid_mechanics:')
end_fm = text.find('deformable_bodies:')

fm_text = text[start_fm:end_fm]

# Find question 56
lines = fm_text.split('\n')
q56_lines = []
recording = False
for line in lines:
    if '"id": 56,' in line or '"id": 56\n' in line:
        recording = True
    if recording:
        q56_lines.append(line)
        if line.strip() == '},' or line.strip() == '}':
            break

print("=== FLUID MECHANICS QUESTION #56 ===")
print('\n'.join(q56_lines))
