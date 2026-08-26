import re

filepath = r'C:\Users\Jacob\.gemini\antigravity\scratch\TIP-Grade-Calculator\index.html'
with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

matches = re.findall(r'<select.*?>.*?</select>', text, re.DOTALL)
print(f"Total <select> elements in index.html: {len(matches)}")
for i, m in enumerate(matches):
    print(f"\n--- SELECT #{i+1} ---")
    print(m)
