import re

with open('styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

# Separate base styles vs media query styles
mobile_idx = text.find('@media (max-width: 640px)')
base_text = text[:mobile_idx]
mobile_text = text[mobile_idx:]

print("=== BASE (DESKTOP) FONT SIZES ===")
base_font_matches = re.findall(r'([^{}\n]+)\s*\{[^}]*?font-size:\s*([^;}]+)', base_text, re.DOTALL)
for sel, fs in base_font_matches:
    clean_sel = sel.strip().replace('\n', ' ')
    # Only print significant selectors
    print(f"{clean_sel[:50]:50s} -> {fs.strip()}")

print("\n=== MOBILE FONT SIZES (PRESERVED) ===")
mobile_font_matches = re.findall(r'([^{}\n]+)\s*\{[^}]*?font-size:\s*([^;}]+)', mobile_text, re.DOTALL)
for sel, fs in mobile_font_matches:
    clean_sel = sel.strip().replace('\n', ' ')
    print(f"{clean_sel[:50]:50s} -> {fs.strip()}")
