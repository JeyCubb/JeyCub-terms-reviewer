import subprocess
import re

cmd = ["git", "log", "-p", "--full-diff", "--", "questions.js"]
output = subprocess.check_output(cmd, cwd=r"C:\Users\Jacob\.gemini\antigravity\scratch\fluid-mechanics-quiz-reviewer", text=True, encoding="utf-8", errors="ignore")

# Find lines where "answer": changed
diff_lines = output.split('\n')
changed_answers = []
current_commit = ""
current_file = ""

for i, line in enumerate(diff_lines):
    if line.startswith("commit "):
        current_commit = line[:15]
    if line.startswith("-") and not line.startswith("---") and '"answer":' in line:
        # Check next line for +
        if i + 1 < len(diff_lines) and diff_lines[i+1].startswith("+") and '"answer":' in diff_lines[i+1]:
            # Print context surrounding this change
            context = diff_lines[max(0, i-10):min(len(diff_lines), i+10)]
            changed_answers.append((current_commit, line, diff_lines[i+1], "\n".join(context)))

print(f"Total answer changes found in git history: {len(changed_answers)}")
for idx, (commit, old_val, new_val, ctx) in enumerate(changed_answers):
    print(f"\n--- CHANGE #{idx+1} ({commit}) ---")
    print(f"OLD: {old_val}")
    print(f"NEW: {new_val}")
    print("CONTEXT:")
    print(ctx)
