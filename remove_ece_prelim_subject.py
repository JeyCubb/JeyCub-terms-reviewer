import re

filepath = 'questions.js'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove ece_prelim_exam block from SUBJECT_DATA
target_str = 'ece_prelim_exam:'
start_idx = content.find(target_str)
if start_idx != -1:
    # find next subject basic_electronics:
    end_idx = content.find('basic_electronics:', start_idx)
    if end_idx != -1:
        content = content[:start_idx] + content[end_idx:]
        print("Successfully removed ece_prelim_exam block from questions.js!")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("questions.js updated!")
