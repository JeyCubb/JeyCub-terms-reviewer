import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

more_diode_questions = [
    {
        "id": 89,
        "question": "What is the primary function of a Photodiode?",
        "options": [
            "Emit light",
            "Rectify signals",
            "Detect light and convert it into a current",
            "Provide variable capacitance"
        ],
        "answer": 2,
        "explanation": "• Why 'Detect light and convert it into a current' is Correct: A photodiode operates under reverse bias where incoming optical photons generate electron-hole pairs, producing a photocurrent proportional to light intensity.\n• Why Other Choices are Incorrect: LEDs emit light, standard PN diodes rectify AC signals, and Varactor diodes provide variable capacitance."
    },
    {
        "id": 90,
        "question": "In which application would a Tunnel diode be most suitable?",
        "options": [
            "High-frequency oscillators",
            "Voltage regulation",
            "Light detection",
            "Rectification of low-frequency signals"
        ],
        "answer": 0,
        "explanation": "• Why 'High-frequency oscillators' is Correct: Tunnel diodes possess a negative dynamic resistance region and ultra-fast quantum tunneling speed, making them ideal for high-frequency microwave oscillators.\n• Why Other Choices are Incorrect: Zener diodes perform voltage regulation, photodiodes perform light detection, and standard diodes rectify low-frequency signals."
    },
    {
        "id": 91,
        "question": "Which special-purpose diode is designed to exhibit a varying capacitance with reverse bias voltage and is often used in tuning circuits?",
        "options": [
            "Varactor diode",
            "Tunnel diode",
            "Photodiode",
            "Schottky diode"
        ],
        "answer": 0,
        "explanation": "• Why 'Varactor diode' is Correct: A Varactor diode (varicap) operates in reverse bias, using its variable depletion layer width to act as a voltage-controlled capacitor in electronic tuning circuits.\n• Why Other Choices are Incorrect: Tunnel diodes exhibit negative resistance, photodiodes sense light, and Schottky diodes are fast rectifiers."
    },
    {
        "id": 92,
        "question": "What is the unique characteristic of a Varactor diode?",
        "options": [
            "Emission of light",
            "Variable capacitance with voltage",
            "High-speed switching",
            "Rectification of signals"
        ],
        "answer": 1,
        "explanation": "• Why 'Variable capacitance with voltage' is Correct: The fundamental feature of a Varactor diode is that its junction capacitance varies inversely with applied reverse bias voltage.\n• Why Other Choices are Incorrect: LEDs emit light, Schottky diodes perform high-speed switching, and standard diodes rectify signals."
    },
    {
        "id": 93,
        "question": "What is the primary application of a Gunn diode?",
        "options": [
            "Voltage regulation",
            "Microwave oscillators",
            "Light detection",
            "Rectification of AC signals"
        ],
        "answer": 1,
        "explanation": "• Why 'Microwave oscillators' is Correct: Gunn diodes utilize the Gunn effect (transferred electron effect in bulk N-type Gallium Arsenide) to generate high-frequency microwave oscillations in RF transmitters and radar systems.\n• Why Other Choices are Incorrect: Zener diodes perform voltage regulation, photodiodes perform light detection, and PN junction diodes rectify AC signals."
    }
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_q_str = ",\n" + json.dumps(more_diode_questions, indent=6)[1:-1]

target = '"id": 88,'
if '"id": 89,' not in content:
    idx = content.find(target)
    if idx != -1:
        bracket_idx = content.find("}", idx)
        new_content = content[:bracket_idx+1] + new_q_str + content[bracket_idx+1:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully appended {len(more_diode_questions)} new special-purpose diode quiz questions (Q89-Q93) to basic_electronics in questions.js!")
    else:
        print("Could not locate target Q88.")
else:
    print("User quiz questions Q89-Q93 already present.")
