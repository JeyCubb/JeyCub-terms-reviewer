import os

path = r'C:\Users\Jacob\.gemini\antigravity\scratch\TIP-Grade-Calculator'
for root, dirs, files in os.walk(path):
    if '.git' in root: continue
    for file in files:
        print(os.path.join(root, file))
