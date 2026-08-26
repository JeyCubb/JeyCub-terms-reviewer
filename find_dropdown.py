import os

search_terms = ['Target Grade', '75% Pass', '3.00 (75%', '1.75 (90%']

for root, dirs, files in os.walk('.'):
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
