import re

with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's inspect explanations that are very short (under 50 chars) or missing context
short_explanations = []
matches = re.finditer(r'\{ id: (\d+), question: "([^"]+)", options: \[(.*?)\], answer: (\d+), explanation: "([^"]+)" \}', content)

for m in matches:
    q_id = m.group(1)
    q_text = m.group(2)
    exp = m.group(5)
    if len(exp) < 60:
        short_explanations.append((q_id, q_text, exp))

print(f"Total short explanations (< 60 chars): {len(short_explanations)}")
for item in short_explanations[:15]:
    print(f"Q#{item[0]}: {item[1][:50]}... => {item[2]}")
