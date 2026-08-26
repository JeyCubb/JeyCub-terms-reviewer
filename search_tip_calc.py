import os

target_dir = r'C:\Users\Jacob\.gemini\antigravity\scratch\TIP-Grade-Calculator'
search_terms = ['75%', '3.00', 'Target Grade', 'Pass']

print("Searching in:", target_dir)
for root, dirs, files in os.walk(target_dir):
    if '.git' in root or 'node_modules' in root:
        continue
    for file in files:
        filepath = os.path.join(root, file)
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                for term in search_terms:
                    if term in content:
                        print(f"FOUND '{term}' in {filepath}")
        except Exception as e:
            pass
