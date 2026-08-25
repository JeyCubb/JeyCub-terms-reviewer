import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

image_questions = [
    {
        "id": 111,
        "question": "(Diagram Problem) Refer to the diode symbols chart below. Which schematic symbol represents a Zener Diode?",
        "image": "images/diode_symbols.png",
        "options": [
            "Diode with a bent 'Z' cathode bar",
            "Diode with two outward-pointing arrows",
            "Diode with S-shaped bent cathode bar",
            "Diode with parallel capacitor lines"
        ],
        "answer": 0,
        "explanation": "• Why 'Diode with a bent Z cathode bar' is Correct: The Zener diode symbol features diagonal bent ends on its cathode bar, forming a distinct 'Z' shape to indicate operation in reverse breakdown voltage regulation.\n• Why Other Choices differ: Two outward arrows represent an LED, S-shaped cathode represents a Schottky diode, and parallel capacitor lines represent a Varicap/Varactor diode."
    },
    {
        "id": 112,
        "question": "(Diagram Problem) Refer to the diode symbols chart below. Which schematic symbol represents a Light-Emitting Diode (LED)?",
        "image": "images/diode_symbols.png",
        "options": [
            "Diode with two outward-pointing arrows",
            "Diode with two inward-pointing arrows",
            "Diode with bracket-shaped cathode bar",
            "Diode with bent 'Z' cathode bar"
        ],
        "answer": 0,
        "explanation": "• Why 'Diode with two outward-pointing arrows' is Correct: The Light-Emitting Diode (LED) symbol uses two outward-pointing arrows to signify photon emission during electron-hole recombination under forward bias.\n• Why Other Choices differ: Inward-pointing arrows signify light absorption in a Photo Diode."
    },
    {
        "id": 113,
        "question": "(Diagram Problem) Refer to the diode symbols chart below. Which schematic symbol represents a Photo Diode?",
        "image": "images/diode_symbols.png",
        "options": [
            "Diode with two inward-pointing arrows",
            "Diode with two outward-pointing arrows",
            "Diode with S-shaped bent cathode bar",
            "Diode with parallel capacitor lines"
        ],
        "answer": 0,
        "explanation": "• Why 'Diode with two inward-pointing arrows' is Correct: The Photo Diode symbol features two inward-pointing arrows to represent incoming optical photons that generate photocurrent under reverse bias.\n• Why Other Choices differ: Outward arrows represent LED light emission."
    },
    {
        "id": 114,
        "question": "(Diagram Problem) Refer to the diode symbols chart below. Which schematic symbol represents a Schottky Diode?",
        "image": "images/diode_symbols.png",
        "options": [
            "Diode with S-shaped bent cathode bar",
            "Diode with bent 'Z' cathode bar",
            "Diode with bracket-shaped cathode bar",
            "Diode with parallel capacitor lines"
        ],
        "answer": 0,
        "explanation": "• Why 'Diode with S-shaped bent cathode bar' is Correct: The Schottky diode symbol features an S-like curved cathode bar representing its metal-semiconductor junction with zero reverse recovery time.\n• Why Other Choices differ: Z-shaped bar represents Zener, bracket represents Tunnel diode."
    },
    {
        "id": 115,
        "question": "(Diagram Problem) Refer to the diode symbols chart below. Which schematic symbol represents a Tunnel Diode?",
        "image": "images/diode_symbols.png",
        "options": [
            "Diode with bracket-shaped cathode bar",
            "Diode with S-shaped bent cathode bar",
            "Diode with two inward-pointing arrows",
            "Diode with bent 'Z' cathode bar"
        ],
        "answer": 0,
        "explanation": "• Why 'Diode with bracket-shaped cathode bar' is Correct: The Tunnel diode symbol features right-angled square brackets on its cathode bar, symbolizing quantum tunneling and negative dynamic resistance.\n• Why Other Choices differ: S-shaped bar represents Schottky, Z-shaped bar represents Zener."
    },
    {
        "id": 116,
        "question": "(Diagram Problem) Refer to the diode symbols chart below. Which schematic symbol represents a Varicap (Varactor) Diode?",
        "image": "images/diode_symbols.png",
        "options": [
            "Diode with parallel capacitor lines at cathode",
            "Diode with two outward-pointing arrows",
            "Diode with bent 'Z' cathode bar",
            "Diode with bracket-shaped cathode bar"
        ],
        "answer": 0,
        "explanation": "• Why 'Diode with parallel capacitor lines at cathode' is Correct: The Varicap/Varactor diode symbol combines a standard diode triangle with a parallel capacitor plate at its cathode, denoting voltage-controlled variable capacitance.\n• Why Other Choices differ: Outward arrows represent LED, Z-bar represents Zener, bracket represents Tunnel diode."
    }
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_q_str = ",\n" + json.dumps(image_questions, indent=6)[1:-1]

target = '"id": 110,'
if '"id": 111,' not in content:
    idx = content.find(target)
    if idx != -1:
        bracket_idx = content.find("}", idx)
        new_content = content[:bracket_idx+1] + new_q_str + content[bracket_idx+1:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully appended {len(image_questions)} new image-referenced diode symbol questions (Q111-Q116) to basic_electronics in questions.js!")
    else:
        print("Could not locate target Q110.")
else:
    print("User quiz questions Q111-Q116 already present.")
