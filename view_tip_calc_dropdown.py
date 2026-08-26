import sys
import os

filepath = r'C:\Users\Jacob\.gemini\antigravity\scratch\TIP-Grade-Calculator\index.html'

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('Target Grade')
if pos != -1:
    print("=== TARGET GRADE DROPDOWN IN INDEX.HTML ===")
    print(text[pos-100:pos+1000])
else:
    print("Not found.")
