import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

opto_diodes_questions = [
    # Photodiode Questions
    {
        "id": 50,
        "question": "What is the primary operating bias condition for a Photodiode during light-sensing operation?",
        "options": [
            "Reverse-Bias condition",
            "Forward-Bias condition above 1.5 V",
            "Thermal breakdown bias",
            "Direct AC bias"
        ],
        "answer": 0,
        "explanation": "• Why 'Reverse-Bias condition' is Correct: Photodiodes operate in Reverse-Bias (or zero bias) to widen the depletion region and establish a strong internal electric field that efficiently separates light-generated electron-hole pairs.\n• Why Other Choices are Incorrect: Forward biasing a photodiode conducts large forward current, masking photo-generated current and potentially damaging the sensor."
    },
    {
        "id": 51,
        "question": "What fundamental physical energy conversion takes place inside a Photodiode when exposed to light?",
        "options": [
            "Converts light energy (photons) into electrical current (photocurrent)",
            "Converts electrical energy into mechanical movement",
            "Converts acoustic sound waves into voltage",
            "Converts magnetic flux into thermal heat"
        ],
        "answer": 0,
        "explanation": "• Why 'Converts light energy (photons) into electrical current (photocurrent)' is Correct: When incoming photons with energy greater than the semiconductor bandgap strike the depletion region, they excite bound electrons to create free electron-hole pairs, producing measurable photocurrent.\n• Why Other Choices are Incorrect: Solar cells also use this photoelectric principle for power generation, whereas LEDs do the reverse (electrical energy to light)."
    },
    {
        "id": 52,
        "question": "How does the generated output photocurrent (I_p) of a Photodiode respond to changes in incoming light intensity (Lux)?",
        "options": [
            "Photocurrent is directly proportional to light intensity",
            "Photocurrent decreases exponentially as light intensity increases",
            "Photocurrent remains completely constant regardless of light level",
            "Photocurrent is inversely proportional to light intensity squared"
        ],
        "answer": 0,
        "explanation": "• Why 'Photocurrent is directly proportional to light intensity' is Correct: The Current-Light (I-L) relationship of a photodiode is highly linear: higher light intensity delivers more photons per second, creating more electron-hole pairs and higher photocurrent.\n• Why Other Choices are Incorrect: Inverse or exponential responses would distort linear light measurement."
    },
    {
        "id": 53,
        "question": "What is 'Dark Current' in a Photodiode?",
        "options": [
            "A small reverse leakage current that flows even when no light is present",
            "The maximum forward current that destroys the photodiode",
            "The light emitted by the photodiode when operating in total darkness",
            "The AC ripple current from power supplies"
        ],
        "answer": 0,
        "explanation": "• Why 'A small reverse leakage current that flows even when no light is present' is Correct: Dark current is the minor reverse saturation current caused by thermal generation of electron-hole pairs when the photodiode is completely shielded from light.\n• Why Other Choices are Incorrect: Photodiodes do not emit light, and dark current is a tiny DC leakage current."
    },
    {
        "id": 54,
        "question": "Which layer of a photodiode active region is coated with an Anti-Reflective (AR) layer or glass lens?",
        "options": [
            "The P+ active surface region to maximize light absorption",
            "The bottom metal Cathode contact",
            "The outer black protective casing",
            "The internal battery terminals"
        ],
        "answer": 0,
        "explanation": "• Why 'The P+ active surface region to maximize light absorption' is Correct: An Anti-Reflective (AR) coating or optical glass lens is placed over the active junction surface to reduce optical reflection losses and maximize photon entry into the depletion region.\n• Why Other Choices are Incorrect: The remaining body is coated in opaque black layer to block unwanted stray light."
    },
    {
        "id": 55,
        "question": "Which of the following semiconductor materials is commonly used in fabricating Photodiodes for optical communications?",
        "options": [
            "Silicon, Germanium, and Indium Gallium Arsenide (InGaAs)",
            "Pure Copper and Aluminum",
            "Sodium Chloride and Calcium",
            "Polyethylene plastic"
        ],
        "answer": 0,
        "explanation": "• Why 'Silicon, Germanium, and Indium Gallium Arsenide (InGaAs)' is Correct: Silicon (visible light), Germanium, and Indium Gallium Arsenide (InGaAs for long-wavelength infrared fiber optics) have suitable bandgaps for absorbing target light wavelengths.\n• Why Other Choices are Incorrect: Metals and plastics lack semiconductor bandgaps necessary for photon absorption."
    },

    # Light-Emitting Diode (LED) Questions
    {
        "id": 56,
        "question": "A Light-Emitting Diode (LED) emits visible or infrared light when operated under which bias condition?",
        "options": [
            "Forward-Bias condition",
            "Reverse-Bias condition",
            "Zero bias condition",
            "High-voltage reverse breakdown"
        ],
        "answer": 0,
        "explanation": "• Why 'Forward-Bias condition' is Correct: In Forward Bias, external voltage pushes electrons from the N-region and holes from the P-region into the active junction layer, where they recombine and release energy as photons.\n• Why Other Choices are Incorrect: In Reverse Bias, the depletion region widens, blocking current and keeping the LED completely OFF."
    },
    {
        "id": 57,
        "question": "Inside the structure of a Light-Emitting Diode (LED), which layer is responsible for producing light through electron-hole recombination?",
        "options": [
            "The Active layer (middle region)",
            "The outer plastic epoxy lens",
            "The bottom metal Cathode wire lead",
            "The external series resistor"
        ],
        "answer": 0,
        "explanation": "• Why 'The Active layer (middle region)' is Correct: The Active layer sandwiched between the P-type and N-type semiconductor layers provides the optimum energy bandgap region where injected electrons and holes recombine to emit photons.\n• Why Other Choices are Incorrect: The epoxy lens focuses the emitted light, while leads supply current."
    },
    {
        "id": 58,
        "question": "On an electronic schematic symbol for a Light-Emitting Diode (LED), what do the two small outward-pointing arrows indicate?",
        "options": [
            "Light emission when current flows through the diode",
            "Direction of conventional current flow",
            "Direction of electron movement",
            "Maximum reverse breakdown voltage limit"
        ],
        "answer": 0,
        "explanation": "• Why 'Light emission when current flows through the diode' is Correct: The two outward-pointing arrows distinguish an LED from a standard diode, symbolizing light energy radiating outward upon forward conduction.\n• Why Other Choices are Incorrect: Inward-pointing arrows represent a Photodiode (absorbing incoming light)."
    },
    {
        "id": 59,
        "question": "What is the typical forward voltage (V_F) required to turn ON a standard Red Light-Emitting Diode (LED)?",
        "options": ["1.8 V to 2.2 V", "0.3 V to 0.4 V", "5.0 V to 12.0 V", "0.0 V"],
        "answer": 0,
        "explanation": "• Why '1.8 V to 2.2 V' is Correct: Red LEDs typically require a minimum forward voltage (V_F) of 1.8 V to 2.2 V to initiate electroluminescence.\n• Why Other Choices are Incorrect: 0.3 V is for Germanium diodes, 0.7 V is for Silicon diodes, while Green LEDs require 2.0 V – 3.2 V and Blue LEDs require 3.0 V – 3.5 V."
    },
    {
        "id": 60,
        "question": "What is the typical recommended continuous forward current (I_F) range for operating standard indicator Light-Emitting Diodes (LEDs)?",
        "options": ["10 mA to 20 mA", "1 A to 5 A", "100 A to 500 A", "1 µA to 5 µA"],
        "answer": 0,
        "explanation": "• Why '10 mA to 20 mA' is Correct: Standard commercial indicator LEDs achieve bright, reliable illumination at continuous forward currents of 10 mA to 20 mA.\n• Why Other Choices are Incorrect: Operating above 30–50 mA without heat sinking causes thermal destruction, while microamps are too low to illuminate standard LEDs."
    },
    {
        "id": 61,
        "question": "What formula is used to calculate the required resistance value of a Current-Limiting Resistor (R) connected in series with a Light-Emitting Diode (LED)?",
        "options": [
            "R = (V_S - V_F) / I_F",
            "R = V_S * V_F * I_F",
            "R = (V_S + V_F) / I_F^2",
            "R = I_F / (V_S - V_F)"
        ],
        "answer": 0,
        "explanation": "• Why 'R = (V_S - V_F) / I_F' is Correct: By Kirchhoff's Voltage Law, the resistor voltage is V_R = V_S - V_F. Applying Ohm's Law yields R = (V_S - V_F) / I_F to prevent overcurrent damage to the LED.\n• Why Other Choices are Incorrect: Multiplying or adding forward voltage violates Ohm's Law."
    },
    {
        "id": 62,
        "question": "What is the typical maximum safe Reverse Voltage rating (V_R) for most standard Light-Emitting Diodes (LEDs)?",
        "options": ["3 V to 5 V", "100 V to 1000 V", "500 V to 2000 V", "50 V to 100 V"],
        "answer": 0,
        "explanation": "• Why '3 V to 5 V' is Correct: LEDs have relatively low reverse breakdown voltage ratings (typically 3 V to 5 V). Applying higher reverse voltage can damage the delicate PN junction.\n• Why Other Choices are Incorrect: Standard power rectifiers handle 100 V – 1000 V reverse ratings, but LEDs cannot."
    },
    {
        "id": 63,
        "question": "Which key advantage distinguishes a Light-Emitting Diode (LED) over a standard semiconductor PN junction diode?",
        "options": [
            "Emits visible or infrared light efficiently with a long operational lifespan",
            "Used solely for AC high-voltage power rectification",
            "Slower switching speed and higher power loss",
            "Requires no forward voltage to turn ON"
        ],
        "answer": 0,
        "explanation": "• Why 'Emits visible or infrared light efficiently with a long operational lifespan' is Correct: LEDs convert electrical energy directly into light via electroluminescence, offering high energy efficiency, low heat generation, and tens of thousands of operating hours.\n• Why Other Choices are Incorrect: Standard diodes dissipate energy as heat rather than light."
    },
    {
        "id": 64,
        "question": "Which of the following is a common application of Infrared (IR) Photodiodes and Light-Emitting Diodes working together as an optical pair?",
        "options": [
            "TV and Air Conditioner remote controls and optical encoders",
            "High-power AC transformers",
            "Incandescent light bulbs",
            "Hydraulic fluid pumps"
        ],
        "answer": 0,
        "explanation": "• Why 'TV and Air Conditioner remote controls and optical encoders' is Correct: An Infrared LED transmitter sends pulsed light signals to an Infrared Photodiode receiver, forming an optical communication link.\n• Why Other Choices are Incorrect: Transformers and pumps use magnetic or mechanical energy, not optoelectronic light pairs."
    }
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_q_str = ",\n" + json.dumps(opto_diodes_questions, indent=6)[1:-1]

target = '"id": 49,'
if '"id": 50,' not in content:
    idx = content.find(target)
    if idx != -1:
        bracket_idx = content.find("}", idx)
        new_content = content[:bracket_idx+1] + new_q_str + content[bracket_idx+1:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully appended {len(opto_diodes_questions)} Optoelectronic Diodes questions (Photodiodes & LEDs) to basic_electronics in questions.js!")
    else:
        print("Could not locate target Q49.")
else:
    print("Optoelectronic Diodes questions already present.")
