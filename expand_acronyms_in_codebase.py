import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

acronym_map = [
    (r'\bHGL\b', 'Hydraulic Grade Line (HGL)'),
    (r'\bEGL\b', 'Energy Grade Line (EGL)'),
    (r'\bLMTD\b', 'Logarithmic Mean Temperature Difference (LMTD)'),
    (r'\bNTU\b', 'Number of Transfer Units (NTU)'),
    (r'\bNPSH\b', 'Net Positive Suction Head (NPSH)'),
    (r'\bBHP\b', 'Brake Horse Power (BHP)'),
    (r'\bRPM\b', 'Revolutions Per Minute (RPM)'),
    (r'\brpm\b', 'revolutions per minute (RPM)'),
    (r'\bSI\b', 'International System of Units (SI)'),
    (r'\b1D\b', 'One-Dimensional (1D)'),
    (r'\b2D\b', 'Two-Dimensional (2D)'),
    (r'\b3D\b', 'Three-Dimensional (3D)'),
    (r'\bCOP\b', 'Coefficient of Performance (COP)'),
    (r'\bCHF\b', 'Critical Heat Flux (CHF)'),
    (r'\bDNB\b', 'Departure from Nucleate Boiling (DNB)'),
    (r'\bHVAC\b', 'Heating, Ventilation, and Air Conditioning (HVAC)'),
    (r'\bRe\b', 'Reynolds Number (Re)'),
    (r'\bPr\b', 'Prandtl Number (Pr)'),
    (r'\bNu\b', 'Nusselt Number (Nu)'),
    (r'\bGr\b', 'Grashof Number (Gr)'),
    (r'\bRa\b', 'Rayleigh Number (Ra)'),
    (r'\bBi\b', 'Biot Number (Bi)'),
    (r'\bFo\b', 'Fourier Number (Fo)'),
    (r'\bkPa\b', 'Kilopascals (kPa)'),
    (r'\bMPa\b', 'Megapascals (MPa)'),
    (r'\bpsi\b', 'Pounds per Square Inch (psi)'),
    (r'\bpsia\b', 'Pounds per Square Inch Absolute (psia)'),
    (r'\bpsig\b', 'Pounds per Square Inch Gauge (psig)'),
    (r'\batm\b', 'Atmospheres (atm)')
]

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = content
    changes_count = 0
    for pattern, replacement in acronym_map:
        matches = list(re.finditer(pattern, modified))
        for m in reversed(matches):
            start, end = m.span()
            prefix = modified[max(0, start-40):start]
            
            # Avoid expanding if already written out in full directly before
            if "(" in replacement:
                full_term = replacement.split("(")[0].strip()
                if full_term in prefix:
                    continue
            
            modified = modified[:start] + replacement + modified[end:]
            changes_count += 1

    if modified != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(modified)
        print(f"Processed {filepath}: Made {changes_count} acronym expansions.")
    else:
        print(f"Processed {filepath}: No unexpanded acronyms found.")

process_file('questions.js')
process_file('app.js')
process_file('index.html')
