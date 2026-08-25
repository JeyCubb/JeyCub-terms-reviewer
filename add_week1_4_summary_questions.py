import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

summary_questions = [
    {
        "id": 101,
        "question": "Which type of electron emission occurs when a metal is heated to a high temperature (around 2500 °C) so that free electrons gain sufficient kinetic energy to escape from the surface?",
        "options": [
            "Thermionic emission",
            "Field emission",
            "Photoelectric emission",
            "Secondary emission"
        ],
        "answer": 0,
        "explanation": "• Why 'Thermionic emission' is Correct: Thermionic emission relies on thermal energy (heating a metal cathode to high temperatures) to impart kinetic energy to electrons so they overcome the surface barrier and emit into space, as used in vacuum tubes.\n• Why Other Choices are Incorrect: Field emission uses high electric fields, photoelectric emission uses light photons, and secondary emission uses electron bombardment."
    },
    {
        "id": 102,
        "question": "What is the term for the minimum amount of energy required for an electron to escape from a metal's surface into surrounding space?",
        "options": [
            "Work function",
            "Ionization potential",
            "Bandgap energy",
            "Breakover voltage"
        ],
        "answer": 0,
        "explanation": "• Why 'Work function' is Correct: The Work Function (Φ) defines the minimum energy required to liberate an electron from the attractive nuclear forces at a metal surface.\n• Why Other Choices are Incorrect: Bandgap energy is the forbidden energy gap between valence and conduction bands in crystals."
    },
    {
        "id": 103,
        "question": "In electronics, 1 Electron-Volt (1 eV) is equivalent to how many Joules (J) of energy?",
        "options": [
            "1.602 x 10^-19 J",
            "9.109 x 10^-31 J",
            "6.022 x 10^23 J",
            "1.000 x 10^-6 J"
        ],
        "answer": 0,
        "explanation": "• Why '1.602 x 10^-19 J' is Correct: By definition, 1 electron-volt (1 eV) is the kinetic energy gained by a single electron moving through a potential difference of 1 volt, equal to 1.602 x 10^-19 Joules.\n• Why Other Choices differ: 9.109 x 10^-31 kg is electron mass, and 6.022 x 10^23 is Avogadro's number."
    },
    {
        "id": 104,
        "question": "Which electron emission process occurs when high-speed primary electrons strike a metal surface and transfer kinetic energy to eject secondary electrons?",
        "options": [
            "Secondary emission",
            "Thermionic emission",
            "Field emission",
            "Photoelectric emission"
        ],
        "answer": 0,
        "explanation": "• Why 'Secondary emission' is Correct: Secondary emission occurs when high-velocity primary electrons bombard a metal surface, transferring momentum to knock bound electrons out of the metal.\n• Why Other Choices are Incorrect: Thermionic uses heat, field uses high voltage, and photoelectric uses light photons."
    },
    {
        "id": 105,
        "question": "Which fundamental quantum physics rule states that no two electrons in an atom can occupy the exact same quantum state simultaneously?",
        "options": [
            "Pauli Exclusion Principle",
            "Heisenberg Uncertainty Principle",
            "Bohr Magneton Law",
            "Coulomb Law"
        ],
        "answer": 0,
        "explanation": "• Why 'Pauli Exclusion Principle' is Correct: Wolfgang Pauli's Exclusion Principle dictates that no two identical fermions (electrons) can occupy the same quantum state, establishing atomic electron shell structures.\n• Why Other Choices differ: Heisenberg's uncertainty principle limits simultaneous measurement of position and momentum."
    },
    {
        "id": 106,
        "question": "What is the energy bandgap (E_g) equation defining the forbidden zone between the conduction band (E_C) and valence band (E_V)?",
        "options": [
            "E_g = E_C - E_V",
            "E_g = E_C + E_V",
            "E_g = E_C * E_V",
            "E_g = E_V / E_C"
        ],
        "answer": 0,
        "explanation": "• Why 'E_g = E_C - E_V' is Correct: The bandgap energy (E_g) represents the energy difference between the bottom of the conduction band (E_C) and the top of the valence band (E_V).\n• Why Other Choices differ: Adding, multiplying, or dividing band energies violates solid-state energy band definitions."
    },
    {
        "id": 107,
        "question": "Which type of electron emission occurs when an extremely strong external electric field pulls free electrons out of a cold metal surface via electrostatic attraction?",
        "options": [
            "Field emission (Cold emission)",
            "Thermionic emission",
            "Photoelectric emission",
            "Secondary emission"
        ],
        "answer": 0,
        "explanation": "• Why 'Field emission (Cold emission)' is Correct: Field emission applies an intense positive electric field at a metal surface to lower the potential barrier, allowing electrons to tunnel out without thermal heating.\n• Why Other Choices are Incorrect: Thermionic emission requires heating the cathode to high temperatures."
    },
    {
        "id": 108,
        "question": "Why do good conductors (such as copper and silver) conduct electricity easily with almost zero electrical resistance?",
        "options": [
            "Because their valence and conduction energy bands overlap with no significant forbidden bandgap",
            "Because their valence band is completely empty at absolute zero",
            "Because they have an extremely wide forbidden energy bandgap exceeding 5 eV",
            "Because they rely exclusively on positive hole conduction"
        ],
        "answer": 0,
        "explanation": "• Why 'Because their valence and conduction energy bands overlap with no significant forbidden bandgap' is Correct: In metallic conductors, the highest filled valence band overlaps directly with the conduction band (E_g ≈ 0), allowing free electrons to move freely upon applying a voltage.\n• Why Other Choices are Incorrect: Wide bandgaps (>5 eV) characterize insulators, not conductors."
    },
    {
        "id": 109,
        "question": "Which chemical stability rule states that atoms are most chemically stable when their outermost valence shell contains eight electrons?",
        "options": [
            "Octet Rule",
            "Ohm Law",
            "Faraday Law",
            "Kepler Law"
        ],
        "answer": 0,
        "explanation": "• Why 'Octet Rule' is Correct: The Octet Rule dictates that atoms achieve maximum chemical stability by gaining, losing, or sharing electrons (covalent bonding) to fill their valence shell with 8 electrons.\n• Why Other Choices are Incorrect: Ohm's Law relates V, I, and R; Faraday's Law governs induction."
    },
    {
        "id": 110,
        "question": "Reviewing the special diodes summary table, match each diode to its primary operational characteristic:",
        "options": [
            "Zener = Voltage regulation, Schottky = Fast switching, Tunnel = Negative resistance, Varactor = Variable capacitance",
            "Zener = Light emission, Schottky = Voltage regulation, Tunnel = Variable capacitance, Varactor = Fast switching",
            "Zener = Fast switching, Schottky = Light emission, Tunnel = Voltage regulation, Varactor = Negative resistance",
            "Zener = Negative resistance, Schottky = Variable capacitance, Tunnel = Fast switching, Varactor = Light emission"
        ],
        "answer": 0,
        "explanation": "• Why 'Zener = Voltage regulation, Schottky = Fast switching, Tunnel = Negative resistance, Varactor = Variable capacitance' is Correct: This summarizes core diode functions: Zener operates in reverse breakdown for voltage regulation; Schottky has zero reverse recovery for fast switching; Tunnel exhibits negative resistance via quantum tunneling; Varactor acts as a voltage-controlled variable capacitor.\n• Why Other Choices are Incorrect: Swapping functions confuses diode device physics."
    }
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_q_str = ",\n" + json.dumps(summary_questions, indent=6)[1:-1]

target = '"id": 100,'
if '"id": 101,' not in content:
    idx = content.find(target)
    if idx != -1:
        bracket_idx = content.find("}", idx)
        new_content = content[:bracket_idx+1] + new_q_str + content[bracket_idx+1:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully appended {len(summary_questions)} new summary questions (Q101-Q110) to basic_electronics in questions.js!")
    else:
        print("Could not locate target Q100.")
else:
    print("User quiz questions Q101-Q110 already present.")
