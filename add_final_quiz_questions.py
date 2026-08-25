import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

final_quiz_questions = [
    {
        "id": 84,
        "question": "In what type of electronic circuit would you commonly find a Schottky diode?",
        "options": [
            "Audio amplifiers",
            "Power supplies",
            "High-frequency rectifiers",
            "Voltage regulators"
        ],
        "answer": 2,
        "explanation": "• Why 'High-frequency rectifiers' is Correct: Because Schottky diodes feature metal-semiconductor junctions with virtually zero reverse recovery time, they excel at rectifying high-frequency Alternating Current (AC) signals without switching losses.\n• Why Other Choices are Incorrect: Audio amplifiers use transistors, low-frequency power supplies use Silicon PN rectifiers, and Zener diodes handle voltage regulation."
    },
    {
        "id": 85,
        "question": "What is the primary application of a Schottky diode?",
        "options": [
            "Voltage regulation",
            "Rectification of AC signals",
            "High-frequency applications",
            "Light detection"
        ],
        "answer": 2,
        "explanation": "• Why 'High-frequency applications' is Correct: Due to majority-carrier conduction, Schottky diodes switch in nanoseconds, making high-frequency Radio Frequency (RF) and switched-mode power supplies their primary application.\n• Why Other Choices are Incorrect: Zener diodes perform voltage regulation, standard diodes perform 60Hz AC rectification, and photodiodes perform light detection."
    },
    {
        "id": 86,
        "question": "Which type of diode is designed to emit light when forward-biased?",
        "options": [
            "Zener diode",
            "Photodiode",
            "Light-emitting diode (LED)",
            "Schottky diode"
        ],
        "answer": 2,
        "explanation": "• Why 'Light-emitting diode (LED)' is Correct: When forward-biased, a Light-Emitting Diode (LED) recombines electrons and holes in its active junction layer, directly releasing excess energy as visible or infrared photons.\n• Why Other Choices are Incorrect: Zener diodes regulate voltage, photodiodes absorb light to create current, and Schottky diodes are fast rectifiers."
    },
    {
        "id": 87,
        "question": "Which special-purpose diode is used for frequency multiplication and frequency synthesis in communication systems?",
        "options": [
            "Gunn diode",
            "Zener diode",
            "Varactor diode",
            "Tunnel diode"
        ],
        "answer": 2,
        "explanation": "• Why 'Varactor diode' is Correct: Varying reverse voltage on a Varactor diode alters its junction capacitance, making it the primary tuning element in Voltage-Controlled Oscillators (VCOs) for frequency synthesis and multiplication.\n• Why Other Choices are Incorrect: Gunn diodes generate microwave signals, Zener diodes regulate DC voltage, and Tunnel diodes act as high-speed switches."
    },
    {
        "id": 88,
        "question": "Which special-purpose diode is commonly used for voltage regulation in electronic circuits?",
        "options": [
            "Varactor diode",
            "Schottky diode",
            "Zener diode",
            "Tunnel diode"
        ],
        "answer": 2,
        "explanation": "• Why 'Zener diode' is Correct: Zener diodes maintain a constant reverse breakdown voltage (V_Z) across their terminals over a wide current range, making them ideal for DC voltage regulation.\n• Why Other Choices are Incorrect: Varactor diodes are variable capacitors, Schottky diodes are fast rectifiers, and Tunnel diodes are high-speed switches."
    }
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_q_str = ",\n" + json.dumps(final_quiz_questions, indent=6)[1:-1]

target = '"id": 83,'
if '"id": 84,' not in content:
    idx = content.find(target)
    if idx != -1:
        bracket_idx = content.find("}", idx)
        new_content = content[:bracket_idx+1] + new_q_str + content[bracket_idx+1:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully appended {len(final_quiz_questions)} new special-purpose diode quiz questions (Q84-Q88) to basic_electronics in questions.js!")
    else:
        print("Could not locate target Q83.")
else:
    print("User quiz questions Q84-Q88 already present.")
