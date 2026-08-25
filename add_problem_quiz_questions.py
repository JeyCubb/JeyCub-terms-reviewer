import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

problem_quiz_questions = [
    {
        "id": 79,
        "question": "Typical forward voltage drop of a Schottky diode is:",
        "options": [
            "0.7 V",
            "0.3 V",
            "0.25 V",
            "1.0 V"
        ],
        "answer": 1,
        "explanation": "• Why '0.3 V' is Correct: Schottky metal-semiconductor diodes feature a significantly lower barrier potential than standard silicon diodes, with a typical nominal forward voltage drop of approx 0.3 V (ranging between 0.15 V and 0.45 V).\n• Why Other Choices are Incorrect: 0.7 V is the forward drop of a standard Silicon PN diode, while 1.0 V is typical for power rectifiers under heavy load."
    },
    {
        "id": 80,
        "question": "(Problem) A 6 V supply is connected across a 330 Ω resistor in series with a Light-Emitting Diode (LED) of 2 V forward drop. Calculate the current through the LED.",
        "options": [
            "6 mA",
            "12 mA",
            "20 mA",
            "40 mA"
        ],
        "answer": 1,
        "explanation": "• Why '12 mA' is Correct: By Kirchhoff's Voltage Law, resistor voltage V_R = V_S - V_F = 6 V - 2 V = 4 V. Applying Ohm's Law gives I = V_R / R = 4 V / 330 Ω = 0.01212 A = 12.12 mA ≈ 12 mA.\n• Why Other Choices are Incorrect: 6 mA neglects the 2 V LED drop (using 2 V / 330 Ω), while 20 mA and 40 mA are arbitrary values."
    },
    {
        "id": 81,
        "question": "(Problem) A 10 pF varactor diode is used with a 100 µH coil. Find the resonant frequency.",
        "options": [
            "1.6 MHz",
            "500 kHz",
            "5 MHz",
            "160 MHz"
        ],
        "answer": 2,
        "explanation": "• Why '5 MHz' is Correct: Resonant frequency f = 1 / (2π√(L * C)). Substituting L = 100 µH = 100 x 10^-6 H and C = 10 pF = 10 x 10^-12 F gives √(L * C) = √(10^-15) = 3.162 x 10^-8 s. Thus f = 1 / (2 * π * 3.162 x 10^-8) = 5,032,921 Hz ≈ 5.03 MHz ≈ 5 MHz.\n• Why Other Choices differ: Alternative choices result from unit conversion errors (e.g. omitting 10^-12 for pico or 10^-6 for micro)."
    },
    {
        "id": 82,
        "question": "(Problem) A Schottky diode bridge rectifier is used in a 5 V DC supply. If each diode drops 0.25 V, what is the total voltage drop across two conducting diodes?",
        "options": [
            "0.25 V",
            "0.5 V",
            "1.4 V",
            "2.0 V"
        ],
        "answer": 1,
        "explanation": "• Why '0.5 V' is Correct: In a full-wave bridge rectifier circuit, two diodes conduct simultaneously in series during each half-cycle. Total forward voltage drop V_total = 2 x V_diode = 2 x 0.25 V = 0.5 V.\n• Why Other Choices are Incorrect: 0.25 V counts only one diode, while 1.4 V is the drop across two standard silicon diodes (2 x 0.7 V)."
    },
    {
        "id": 83,
        "question": "Which special-purpose diode is known for its fast switching speed and low forward voltage drop?",
        "options": [
            "Zener diode",
            "Light-emitting diode (LED)",
            "Schottky diode",
            "Tunnel diode"
        ],
        "answer": 2,
        "explanation": "• Why 'Schottky diode' is Correct: A Schottky metal-semiconductor diode exhibits extremely fast switching speed (nanosecond reverse recovery time) and low forward voltage drop (0.15 V to 0.45 V).\n• Why Other Choices are Incorrect: Zener diodes are for voltage regulation, LEDs emit light, and Tunnel diodes exhibit negative resistance."
    }
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_q_str = ",\n" + json.dumps(problem_quiz_questions, indent=6)[1:-1]

target = '"id": 78,'
if '"id": 79,' not in content:
    idx = content.find(target)
    if idx != -1:
        bracket_idx = content.find("}", idx)
        new_content = content[:bracket_idx+1] + new_q_str + content[bracket_idx+1:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully appended {len(problem_quiz_questions)} new numerical & conceptual quiz questions (Q79-Q83) to basic_electronics in questions.js!")
    else:
        print("Could not locate target Q78.")
else:
    print("User quiz questions Q79-Q83 already present.")
