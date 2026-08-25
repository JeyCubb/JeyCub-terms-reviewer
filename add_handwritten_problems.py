import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

handwritten_problems = [
    {
        "id": 94,
        "question": "(Problem) An AC voltage with peak value V_p = 20 V is connected in series with a silicon diode (forward voltage drop V_D = 0.7 V, forward bulk resistance R_f = 10 Ω) and a load resistor R_L = 500 Ω. Find the peak current through the diode.",
        "options": [
            "37.84 mA",
            "40.00 mA",
            "38.60 mA",
            "35.20 mA"
        ],
        "answer": 0,
        "explanation": "• Why '37.84 mA' is Correct: By Kirchhoff's Voltage Law, V_p - V_D = I * (R_f + R_L). Substituting values: 20 V - 0.7 V = I * (10 Ω + 500 Ω) => 19.3 V = 510 Ω * I. Therefore, peak current I_peak = 19.3 V / 510 Ω = 0.037843 A = 37.84 mA.\n• Why Other Choices are Incorrect: 40.00 mA assumes an ideal diode (20 V / 500 Ω), while 38.60 mA ignores the 10 Ω internal diode resistance."
    },
    {
        "id": 95,
        "question": "(Problem) For the silicon diode circuit in Problem 94 (V_p = 20 V, V_D = 0.7 V, R_f = 10 Ω, R_L = 500 Ω), calculate the peak output voltage V_out measured across the 500 Ω load resistor.",
        "options": [
            "18.92 V",
            "20.00 V",
            "19.30 V",
            "17.50 V"
        ],
        "answer": 0,
        "explanation": "• Why '18.92 V' is Correct: The peak output voltage across the load resistor is V_out = I_peak * R_L = (0.037843 A) * 500 Ω = 18.9215 V ≈ 18.92 V.\n• Why Other Choices are Incorrect: 20.00 V assumes an ideal diode with zero voltage drop, while 19.30 V neglects the 10 Ω internal diode resistance."
    },
    {
        "id": 96,
        "question": "(Problem) If the silicon diode in Problem 94 (V_p = 20 V, R_L = 500 Ω) is assumed to be ideal (V_D = 0 V, R_f = 0 Ω), what are the values of peak current and peak output voltage?",
        "options": [
            "Peak Current = 40.00 mA, Peak Output Voltage = 20.00 V",
            "Peak Current = 37.84 mA, Peak Output Voltage = 18.92 V",
            "Peak Current = 38.60 mA, Peak Output Voltage = 19.30 V",
            "Peak Current = 50.00 mA, Peak Output Voltage = 25.00 V"
        ],
        "answer": 0,
        "explanation": "• Why 'Peak Current = 40.00 mA, Peak Output Voltage = 20.00 V' is Correct: For an ideal diode, forward voltage drop V_D = 0 V and internal resistance R_f = 0 Ω. Thus I_peak = 20 V / 500 Ω = 40 mA, and V_out = 20 V.\n• Why Other Choices differ: 37.84 mA / 18.92 V corresponds to the practical diode model with 0.7 V drop and 10 Ω forward resistance."
    },
    {
        "id": 97,
        "question": "(Problem) A 20 V DC source is connected to a parallel combination of a Silicon diode (V_D = 0.7 V) and a Germanium diode (V_D = 0.3 V), connected in series with a 3 kΩ load resistor. Using practical diode models, what is the node voltage V_A across the 3 kΩ resistor?",
        "options": [
            "19.70 V",
            "19.30 V",
            "20.00 V",
            "0.40 V"
        ],
        "answer": 0,
        "explanation": "• Why '19.70 V' is Correct: Germanium (Ge) turns ON at 0.3 V, which is lower than Silicon's 0.7 V turn-on threshold. The Germanium diode conducts first and clamps the diode voltage drop to 0.3 V, keeping the Silicon diode OFF. Thus V_A = 20 V - 0.3 V = 19.70 V.\n• Why Other Choices are Incorrect: 19.30 V assumes the Silicon diode conducts (20 V - 0.7 V), but Silicon remains cut off because Germanium clamps the node first."
    },
    {
        "id": 98,
        "question": "(Problem) Calculate the current I through the 3 kΩ resistor for the parallel Silicon/Germanium diode circuit in Problem 97 (V_S = 20 V, Germanium drop = 0.3 V, R = 3 kΩ).",
        "options": [
            "6.57 mA",
            "5.90 mA",
            "6.43 mA",
            "6.67 mA"
        ],
        "answer": 0,
        "explanation": "• Why '6.57 mA' is Correct: The voltage across the 3 kΩ load resistor is V_A = 20 V - 0.3 V = 19.7 V. Applying Ohm's Law gives I = V_A / R = 19.7 V / 3000 Ω = 0.0065667 A ≈ 6.57 mA.\n• Why Other Choices differ: 5.90 mA occurs if an additional 2 V drop is subtracted, while 6.43 mA occurs if Silicon's 0.7 V drop is used."
    },
    {
        "id": 99,
        "question": "Which special-purpose diode symbol is identified by a bent cathode bar resembling the letter 'Z'?",
        "options": [
            "Zener diode",
            "Schottky diode",
            "Tunnel diode",
            "Varactor diode"
        ],
        "answer": 0,
        "explanation": "• Why 'Zener diode' is Correct: The Zener diode schematic symbol features diagonal bent ends on its cathode bar, forming a characteristic 'Z' shape.\n• Why Other Choices differ: Schottky diodes have S-like bent ends, Tunnel diodes have bracketed ends, and Varactor diodes feature parallel capacitor lines."
    },
    {
        "id": 100,
        "question": "Which special-purpose diode symbol features two outward-pointing arrows radiating from the diode triangle?",
        "options": [
            "Light-Emitting Diode (LED)",
            "Photodiode",
            "Tunnel diode",
            "Zener diode"
        ],
        "answer": 0,
        "explanation": "• Why 'Light-Emitting Diode (LED)' is Correct: Two outward-pointing arrows symbolize light emission from the active junction of a Light-Emitting Diode (LED).\n• Why Other Choices differ: Inward-pointing arrows symbolize light absorption in a Photodiode."
    }
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_q_str = ",\n" + json.dumps(handwritten_problems, indent=6)[1:-1]

target = '"id": 93,'
if '"id": 94,' not in content:
    idx = content.find(target)
    if idx != -1:
        bracket_idx = content.find("}", idx)
        new_content = content[:bracket_idx+1] + new_q_str + content[bracket_idx+1:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully appended {len(handwritten_problems)} handwritten sheet problems (Q94-Q100) to basic_electronics in questions.js!")
    else:
        print("Could not locate target Q93.")
else:
    print("User quiz questions Q94-Q100 already present.")
