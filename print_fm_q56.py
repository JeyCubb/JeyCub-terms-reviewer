import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('fluid_mechanics:')
end = text.find('deformable_bodies:')
fm_text = text[start:end]

pos = fm_text.find('id: 56,')
if pos == -1:
    pos = fm_text.find('"id": 56,')

print(fm_text[pos:pos+350])
