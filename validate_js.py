import js2py

filepath = r"C:\Users\Jacob\.gemini\antigravity\scratch\fluid-mechanics-quiz-reviewer\questions.js"

with open(filepath, 'r', encoding='utf-8') as f:
    code = f.read()

try:
    js2py.eval_js(code)
    print("JS syntax is valid!")
except Exception as e:
    print("JS SYNTAX ERROR:", e)
