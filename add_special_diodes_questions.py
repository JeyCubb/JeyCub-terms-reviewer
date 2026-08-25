import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

special_diodes_questions = [
    # Schottky Diode Questions
    {
        "id": 34,
        "question": "What is the unique structural construction of a Schottky diode compared to a traditional Positive-Negative (PN) junction diode?",
        "options": [
            "It joins a metal layer (Anode) to an N-type semiconductor (Cathode), containing no P-type material",
            "It joins a P-type semiconductor to a metal Cathode",
            "It consists of two intrinsic semiconductor layers without any metal contact",
            "It combines three alternating layers of P-type and N-type materials"
        ],
        "answer": 0,
        "explanation": "• Why 'It joins a metal layer (Anode) to an N-type semiconductor (Cathode), containing no P-type material' is Correct: A Schottky diode is a metal-semiconductor junction formed by bonding a metal (like gold, silver, or platinum) as the Anode to an N-type silicon Cathode, completely omitting P-type semiconductor material.\n• Why Other Choices are Incorrect: Traditional diodes use P-N semiconductor junctions; Schottky diodes rely on metal-N semiconductor junctions."
    },
    {
        "id": 35,
        "question": "What is the typical forward voltage drop across a Schottky diode when conducting current?",
        "options": ["0.15 V to 0.45 V", "0.60 V to 0.70 V", "1.20 V to 1.50 V", "2.00 V to 3.00 V"],
        "answer": 0,
        "explanation": "• Why '0.15 V to 0.45 V' is Correct: The metal-semiconductor Schottky barrier potential is significantly lower than a standard PN junction, resulting in a low forward voltage drop of 0.15 V to 0.45 V.\n• Why Other Choices are Incorrect: Standard silicon PN diodes have a 0.6 V – 0.7 V drop, while Light-Emitting Diodes (LEDs) require 1.5 V – 3.0 V."
    },
    {
        "id": 36,
        "question": "Why do Schottky diodes exhibit extremely fast switching speeds with virtually zero reverse recovery time?",
        "options": [
            "Because conduction involves only majority carriers (electrons) without minority carrier storage",
            "Because they operate using high thermal dissipation",
            "Because they possess a thick depletion region that stores positive holes",
            "Because they rely on mechanical switch contacts"
        ],
        "answer": 0,
        "explanation": "• Why 'Because conduction involves only majority carriers (electrons) without minority carrier storage' is Correct: In Schottky diodes, current is carried almost exclusively by majority carriers (electrons). Since there are no stored minority carriers to clear out during turn-off, reverse recovery time is negligible (a few nanoseconds).\n• Why Other Choices are Incorrect: Standard PN diodes suffer from slow switching due to minority carrier storage in the depletion region."
    },
    {
        "id": 37,
        "question": "Which of the following is a main limitation or disadvantage of a Schottky diode compared to a standard Silicon PN junction diode?",
        "options": [
            "Higher reverse leakage current and lower reverse breakdown voltage",
            "Extremely slow switching speed",
            "Excessive forward voltage drop above 1.5 V",
            "Inability to conduct current in forward bias"
        ],
        "answer": 0,
        "explanation": "• Why 'Higher reverse leakage current and lower reverse breakdown voltage' is Correct: Because of the thin metal barrier, Schottky diodes experience higher reverse leakage current and lower reverse breakdown voltages, making them unsuitable for high-voltage circuits.\n• Why Other Choices are Incorrect: Schottky diodes excel in fast switching speed and low forward voltage drop."
    },
    {
        "id": 38,
        "question": "In a forward-biased Schottky diode, what is the direction of conventional current flow?",
        "options": [
            "From the Metal (Anode) to the N-type Semiconductor (Cathode)",
            "From the N-type Semiconductor to the Metal",
            "From Cathode to Anode",
            "No current can flow in forward bias"
        ],
        "answer": 0,
        "explanation": "• Why 'From the Metal (Anode) to the N-type Semiconductor (Cathode)' is Correct: Forward bias connects the positive terminal to the Metal (Anode) and negative to N-type (Cathode), directing conventional current from Metal to N-type semiconductor.\n• Why Other Choices are Incorrect: Electron flow is in the opposite direction (N-type to Metal)."
    },
    {
        "id": 39,
        "question": "Which electronic system widely uses Schottky diodes due to their high efficiency and fast switching capabilities?",
        "options": [
            "Smartphone chargers, laptop power bricks, and computer motherboards",
            "High-voltage AC transmission lines",
            "Incandescent light filaments",
            "Cathode ray tube displays"
        ],
        "answer": 0,
        "explanation": "• Why 'Smartphone chargers, laptop power bricks, and computer motherboards' is Correct: Low forward voltage drop and fast switching speed minimize power loss and heat, making Schottky diodes ideal for high-frequency switch-mode power supplies and digital chargers.\n• Why Other Choices are Incorrect: High-voltage AC lines require high-breakdown silicon rectifiers, not Schottky diodes."
    },

    # Zener Diode Questions
    {
        "id": 40,
        "question": "Unlike a standard PN junction diode, a Zener diode is specifically designed and heavily doped to operate safely in which region?",
        "options": ["Reverse-Bias breakdown region", "Forward-bias saturation region", "Cut-off region only", "Thermal breakdown destruction region"],
        "answer": 0,
        "explanation": "• Why 'Reverse-Bias breakdown region' is Correct: Zener diodes are manufactured with heavy doping to operate continuously and safely in reverse breakdown without causing permanent device damage.\n• Why Other Choices are Incorrect: Standard diodes overheat and fail if driven into reverse breakdown; Zener diodes are designed for it."
    },
    {
        "id": 41,
        "question": "What key electrical characteristic makes Zener diodes ideal for voltage regulation circuits?",
        "options": [
            "Maintaining a nearly constant voltage (Zener voltage V_Z) across its terminals during reverse breakdown",
            "Constantly varying its voltage with temperature changes",
            "Blocking current completely in both directions",
            "Generating high-frequency radio signals"
        ],
        "answer": 0,
        "explanation": "• Why 'Maintaining a nearly constant voltage (Zener voltage V_Z) across its terminals during reverse breakdown' is Correct: Once the reverse breakdown voltage (Zener Voltage V_Z) is reached, the voltage across the Zener diode remains virtually constant even as reverse current varies widely.\n• Why Other Choices are Incorrect: Resistors and standard components change voltage with current, unlike Zener regulators."
    },
    {
        "id": 42,
        "question": "Why does a Zener diode have an extremely thin depletion layer?",
        "options": [
            "Because both P-type and N-type regions are heavily doped with impurity atoms",
            "Because it is made entirely of metal",
            "Because it is operated at absolute zero temperature",
            "Because it lacks a junction boundary"
        ],
        "answer": 0,
        "explanation": "• Why 'Because both P-type and N-type regions are heavily doped with impurity atoms' is Correct: Heavy doping increases impurity ion density at the junction, creating an intense electric field across an extremely narrow depletion layer.\n• Why Other Choices are Incorrect: Light doping creates a wide depletion layer with high breakdown voltage."
    },
    {
        "id": 43,
        "question": "What are the primary practical applications of a Zener diode in electronic circuits?",
        "options": [
            "Voltage regulation, surge protection, and stable voltage reference points",
            "Light emission and optical display",
            "Audio frequency amplification",
            "Mechanical energy storage"
        ],
        "answer": 0,
        "explanation": "• Why 'Voltage regulation, surge protection, and stable voltage reference points' is Correct: The constant reverse breakdown voltage property enables Zener diodes to clamp overvoltages and regulate DC power supply rails.\n• Why Other Choices are Incorrect: LEDs emit light, BJTs amplify audio signals, and capacitors/batteries store energy."
    },

    # Tunnel Diode Questions
    {
        "id": 44,
        "question": "A Tunnel diode (Esaki diode) operates at ultra-high switching speeds due to which quantum mechanical phenomenon?",
        "options": ["Quantum Tunneling", "Thermionic emission", "Photoelectric absorption", "Secondary emission"],
        "answer": 0,
        "explanation": "• Why 'Quantum Tunneling' is Correct: Quantum tunneling allows valence electrons to pass directly through an ultra-thin potential barrier at nearly the speed of light rather than climbing over the barrier.\n• Why Other Choices are Incorrect: Thermionic emission involves heating filaments, and photoelectric absorption involves photon energy."
    },
    {
        "id": 45,
        "question": "How does the doping concentration of a Tunnel diode compare to a standard Positive-Negative (PN) junction diode?",
        "options": [
            "It is heavily doped up to 1,000 times higher than a standard junction diode",
            "It is completely un-doped (pure intrinsic)",
            "It is lightly doped to increase internal resistance",
            "It has zero impurity atoms"
        ],
        "answer": 0,
        "explanation": "• Why 'It is heavily doped up to 1,000 times higher than a standard junction diode' is Correct: Ultra-heavy doping (~1000x standard levels) shrinks the depletion layer down to less than 10 nanometers, enabling quantum tunneling.\n• Why Other Choices are Incorrect: Light doping prevents tunneling by creating a wide barrier."
    },
    {
        "id": 46,
        "question": "What unique operational characteristic occurs on the forward V-I curve of a Tunnel diode between the peak current point and valley point?",
        "options": [
            "Negative Resistance Region (current decreases as forward voltage increases)",
            "Infinite positive resistance",
            "Zero voltage drop at all currents",
            "Constant current saturation regardless of voltage"
        ],
        "answer": 0,
        "explanation": "• Why 'Negative Resistance Region (current decreases as forward voltage increases)' is Correct: As forward voltage increases past the peak point, energy bands misalign and reduce electron tunneling, causing current to fall as voltage increases (negative resistance).\n• Why Other Choices are Incorrect: Ordinary resistors obey Ohm's Law where current increases with voltage."
    },
    {
        "id": 47,
        "question": "Because of its ultra-thin depletion layer (< 10 nanometers), what happens when a small reverse bias voltage is applied to a Tunnel diode?",
        "options": [
            "Valence electrons easily tunnel from P-side to N-side, conducting large reverse current immediately (acting as a backward diode)",
            "The diode burns out instantaneously",
            "The depletion layer expands to several millimeters",
            "Zero current flows under all reverse voltages"
        ],
        "answer": 0,
        "explanation": "• Why 'Valence electrons easily tunnel from P-side to N-side, conducting large reverse current immediately (acting as a backward diode)' is Correct: Due to heavy doping and energy band overlap, small reverse bias immediately initiates heavy electron tunneling, making it conduct heavily in reverse.\n• Why Other Choices are Incorrect: Standard diodes block reverse current until breakdown voltage is reached."
    },
    {
        "id": 48,
        "question": "Which semiconductor materials are most commonly used in the fabrication of Tunnel diodes?",
        "options": [
            "Germanium (Ge) and Gallium Arsenide (GaAs)",
            "Copper and Aluminum",
            "Pure Carbon and Diamond",
            "Silicon Dioxide and Glass"
        ],
        "answer": 0,
        "explanation": "• Why 'Germanium (Ge) and Gallium Arsenide (GaAs)' is Correct: Germanium and Gallium Arsenide have high electron mobility and suitable bandgap energies for high-efficiency quantum tunneling.\n• Why Other Choices are Incorrect: Copper and Aluminum are metals; Silicon Dioxide is an insulator."
    },
    {
        "id": 49,
        "question": "Which electronic applications take advantage of the negative resistance and ultra-fast response of a Tunnel diode?",
        "options": [
            "Relaxation oscillators, ultra-high-speed switches, and Frequency Modulation (FM) receivers",
            "Low-frequency power transformers",
            "Incandescent lamps",
            "Electro-mechanical relays"
        ],
        "answer": 0,
        "explanation": "• Why 'Relaxation oscillators, ultra-high-speed switches, and Frequency Modulation (FM) receivers' is Correct: Negative dynamic resistance cancels circuit losses in high-frequency oscillators and enables sub-nanosecond pulse switching.\n• Why Other Choices are Incorrect: Transformers and relays are heavy magnetic/mechanical components."
    }
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Convert new questions to format string and insert before closing bracket of basic_electronics questions array
new_q_str = ",\n" + json.dumps(special_diodes_questions, indent=6)[1:-1]

target = '"id": 33,'
if '"id": 34,' not in content:
    idx = content.find(target)
    if idx != -1:
        bracket_idx = content.find("}", idx)
        new_content = content[:bracket_idx+1] + new_q_str + content[bracket_idx+1:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully appended {len(special_diodes_questions)} special diodes questions (Schottky, Zener, Tunnel) to basic_electronics in questions.js!")
    else:
        print("Could not locate target Q33.")
else:
    print("Special diodes questions already present.")
