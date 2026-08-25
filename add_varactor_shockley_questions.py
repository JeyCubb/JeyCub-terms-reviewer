import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

varactor_shockley_questions = [
    {
        "id": 74,
        "question": "A varactor diode behaves as a:",
        "options": [
            "Voltage-controlled current source",
            "Voltage-controlled capacitor",
            "Voltage amplifier",
            "Light source"
        ],
        "answer": 1,
        "explanation": "• Why 'Voltage-controlled capacitor' is Correct: A varactor diode operates under reverse bias where its depletion layer acts as a variable dielectric insulator between conductive P and N regions, creating a capacitance that varies with applied voltage.\n• Why Other Choices are Incorrect: Transistors act as current sources/amplifiers, while LEDs act as light sources."
    },
    {
        "id": 75,
        "question": "As reverse bias on a varactor increases, its capacitance:",
        "options": [
            "Increases",
            "Decreases",
            "Remains constant",
            "Becomes infinite"
        ],
        "answer": 1,
        "explanation": "• Why 'Decreases' is Correct: Increasing reverse bias voltage widens the depletion layer (increasing plate separation d in C = εA/d), which causes junction capacitance to decrease.\n• Why Other Choices are Incorrect: Decreasing reverse bias shrinks the depletion layer, which increases capacitance."
    },
    {
        "id": 76,
        "question": "The resonance frequency of an Inductor-Capacitor (LC) circuit with a varactor diode is given by:",
        "options": [
            "f = 1 / (2 * pi * sqrt(L * C))",
            "f = 2 * pi * sqrt(L * C)",
            "f = (L * C) / (2 * pi)",
            "f = 1 / (L * C)"
        ],
        "answer": 0,
        "explanation": "• Why 'f = 1 / (2 * pi * sqrt(L * C))' is Correct: The fundamental resonance frequency formula for an LC tuned circuit is f = 1 / (2π√(LC)). Adjusting the varactor reverse voltage alters capacitance C, directly tuning the resonant frequency f.\n• Why Other Choices differ: Alternative formulas do not satisfy the required mathematical derivation for LC resonance."
    },
    {
        "id": 77,
        "question": "The Shockley diode is a:",
        "options": [
            "Two-layer device",
            "Three-layer device",
            "Four-layer PNPN device",
            "Metal-semiconductor junction"
        ],
        "answer": 2,
        "explanation": "• Why 'Four-layer PNPN device' is Correct: A Shockley diode is a four-layer (P-N-P-N) semiconductor thyristor featuring two terminals (Anode and Cathode) and three PN junctions.\n• Why Other Choices are Incorrect: Standard diodes have 2 layers (PN), BJTs have 3 layers (NPN/PNP), and Schottky diodes are metal-semiconductor junctions."
    },
    {
        "id": 78,
        "question": "Which condition turns ON a Shockley diode?",
        "options": [
            "Reverse bias",
            "Applied voltage exceeds breakover voltage",
            "Applied current less than holding current",
            "Thermal excitation"
        ],
        "answer": 1,
        "explanation": "• Why 'Applied voltage exceeds breakover voltage' is Correct: A Shockley diode remains OFF in forward blocking mode until the applied forward voltage exceeds its characteristic breakover voltage (V_BO), causing it to switch into heavy conduction (ON state).\n• Why Other Choices are Incorrect: Dropping below holding current turns the diode OFF, while reverse bias blocks current."
    }
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_q_str = ",\n" + json.dumps(varactor_shockley_questions, indent=6)[1:-1]

target = '"id": 73,'
if '"id": 74,' not in content:
    idx = content.find(target)
    if idx != -1:
        bracket_idx = content.find("}", idx)
        new_content = content[:bracket_idx+1] + new_q_str + content[bracket_idx+1:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully appended {len(varactor_shockley_questions)} new Varactor & Shockley diode questions (Q74-Q78) to basic_electronics in questions.js!")
    else:
        print("Could not locate target Q73.")
else:
    print("User quiz questions Q74-Q78 already present.")
