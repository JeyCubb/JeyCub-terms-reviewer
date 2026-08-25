import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

user_quiz_questions = [
    {
        "id": 65,
        "question": "Tunnel diodes are mainly used in:",
        "options": [
            "Rectifiers",
            "Oscillators and high-speed switches",
            "Voltage regulators",
            "Signal clippers"
        ],
        "answer": 1,
        "explanation": "• Why 'Oscillators and high-speed switches' is Correct: Tunnel diodes possess negative dynamic resistance and an ultra-thin depletion layer, allowing them to switch in picoseconds and sustain high-frequency oscillations.\n• Why Other Choices are Incorrect: Standard diodes act as rectifiers and signal clippers, while Zener diodes serve as voltage regulators."
    },
    {
        "id": 66,
        "question": "Light-Emitting Diodes (LEDs) emit light because of:",
        "options": [
            "Avalanche breakdown",
            "Electron-hole recombination releasing photons",
            "Thermal energy conversion",
            "Tunneling effect"
        ],
        "answer": 1,
        "explanation": "• Why 'Electron-hole recombination releasing photons' is Correct: When forward-biased, injected electrons from the N-region and holes from the P-region recombine in the active junction layer, releasing excess bandgap energy as photons (Electroluminescence).\n• Why Other Choices are Incorrect: Avalanche breakdown occurs in reverse breakdown, thermal energy causes heating, and tunneling effect powers Tunnel diodes."
    },
    {
        "id": 67,
        "question": "The forward voltage drop of a Light-Emitting Diode (LED) is typically in the range of:",
        "options": [
            "0.3 – 0.7 V",
            "1 – 3 V",
            "5 – 10 V",
            "0.1 – 0.2 V"
        ],
        "answer": 1,
        "explanation": "• Why '1 – 3 V' is Correct: Because LEDs are fabricated from wide-bandgap compound semiconductors (like Gallium Arsenide and Gallium Phosphide), their forward barrier voltage drop ranges from 1.8 V to 3.5 V (commonly specified as 1 – 3 V).\n• Why Other Choices are Incorrect: 0.3 – 0.7 V applies to standard Germanium and Silicon PN diodes, while 0.1 – 0.2 V applies to Schottky diodes."
    },
    {
        "id": 68,
        "question": "Which material is commonly used to make Light-Emitting Diodes (LEDs)?",
        "options": [
            "Silicon",
            "Germanium",
            "Gallium compounds (GaAs, GaP)",
            "Carbon"
        ],
        "answer": 2,
        "explanation": "• Why 'Gallium compounds (GaAs, GaP)' is Correct: Direct bandgap compound semiconductors such as Gallium Arsenide (GaAs) and Gallium Phosphide (GaP) allow efficient photon emission during carrier recombination.\n• Why Other Choices are Incorrect: Elemental Silicon and Germanium are indirect bandgap semiconductors that dissipate recombination energy as heat rather than light."
    },
    {
        "id": 69,
        "question": "An Light-Emitting Diode (LED) usually operates with a forward current in the range of:",
        "options": [
            "0.1 – 1 mA",
            "10 – 100 mA",
            "1 – 10 A",
            "1 – 10 µA"
        ],
        "answer": 1,
        "explanation": "• Why '10 – 100 mA' is Correct: Standard illumination and indicator LEDs operate with forward currents in the 10 mA to 100 mA range (typically 10 – 20 mA for standard indicators).\n• Why Other Choices are Incorrect: Microamps are too small to excite visible emission, while 1 – 10 Amperes causes rapid thermal burnout."
    }
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_q_str = ",\n" + json.dumps(user_quiz_questions, indent=6)[1:-1]

target = '"id": 64,'
if '"id": 65,' not in content:
    idx = content.find(target)
    if idx != -1:
        bracket_idx = content.find("}", idx)
        new_content = content[:bracket_idx+1] + new_q_str + content[bracket_idx+1:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully appended {len(user_quiz_questions)} new quiz questions (Q65-Q69) to basic_electronics in questions.js!")
    else:
        print("Could not locate target Q64.")
else:
    print("User quiz questions Q65-Q69 already present.")
