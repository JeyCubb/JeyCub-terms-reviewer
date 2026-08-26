import subprocess

cmd = ['git', 'status']
try:
    res = subprocess.check_output(cmd, cwd=r'C:\Users\Jacob\.gemini\antigravity\scratch\TIP-Grade-Calculator', text=True)
    print("GIT STATUS:")
    print(res)
except Exception as e:
    print("Git error:", e)
