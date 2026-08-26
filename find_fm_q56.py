import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

with open('questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's parse or search for id 56 in fluid_mechanics
start = text.find('fluid_mechanics:')
end = text.find('deformable_bodies:')
fm_text = text[start:end]

pos = fm_text.find('"id": 56')
if pos == -1:
    pos = fm_text.find('id: 56')

if pos != -1:
    print(fm_text[pos-50:pos+800])
else:
    print("Not found by string match.")
