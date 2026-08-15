import re
import js2py # or json parse via regex

filepath = r"C:\Users\Jacob\.gemini\antigravity\scratch\fluid-mechanics-quiz-reviewer\questions.js"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect and enhance all explanations in questions.js to make sure every explanation starts with a layman's summary!

def simplify_explanation(match):
    full_str = match.group(0)
    exp = match.group(1)
    
    # If it's already got layman framing, leave or enhance
    if "Think of" in exp or "analogy" in exp.lower() or "means" in exp:
        return full_str
        
    return full_str

# Let's write a Python regex function to prepend a layman explanation to technical explanations that might sound dense!
print("Reading questions.js content length:", len(text))
