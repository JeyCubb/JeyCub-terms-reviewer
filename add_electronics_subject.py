import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

electronics_questions = [
    {
        "id": 1,
        "question": "What is the name of Niels Bohr's 1913 atomic model?",
        "options": ["Solid Sphere Model", "Plum Pudding Model", "Nuclear Model", "Planetary Model"],
        "answer": 3,
        "explanation": "• Why 'Planetary Model' is Correct: Niels Bohr proposed the Planetary Model in 1913, in which electrons orbit a dense positive nucleus in discrete energy levels, similar to planets orbiting the sun.\n• Why Other Choices are Incorrect: Dalton proposed the Solid Sphere Model (1803), Thomson proposed the Plum Pudding Model (1897), and Rutherford proposed the Nuclear Model (1911)."
    },
    {
        "id": 2,
        "question": "Which of the following best defines a semiconductor?",
        "options": [
            "A material with zero electrical resistance at room temperature",
            "A material having electrical conductivity between a good conductor and an insulator",
            "A material that completely blocks current under all conditions",
            "A material composed solely of trivalent metal ions"
        ],
        "answer": 1,
        "explanation": "• Why 'A material having electrical conductivity between a good conductor and an insulator' is Correct: Semiconductors are a special class of elements whose conductivity lies between conductors (like copper) and insulators (like rubber).\n• Why Other Choices are Incorrect: Superconductors have zero resistance, while insulators completely block current."
    },
    {
        "id": 3,
        "question": "How many valence electrons does a pure semiconductor atom (such as Silicon or Germanium) have?",
        "options": ["2", "3", "4", "5"],
        "answer": 2,
        "explanation": "• Why '4' is Correct: Pure semiconductor atoms like Silicon (Si) and Germanium (Ge) belong to Group IV of the periodic table and have 4 valence electrons (tetravalent).\n• Why Other Choices are Incorrect: Trivalent elements have 3 valence electrons (acceptors like Boron), while pentavalent elements have 5 valence electrons (donors like Phosphorus)."
    },
    {
        "id": 4,
        "question": "What is the term for a pure semiconductor that has not been subjected to doping?",
        "options": ["Extrinsic semiconductor", "Intrinsic semiconductor", "N-type semiconductor", "P-type semiconductor"],
        "answer": 1,
        "explanation": "• Why 'Intrinsic semiconductor' is Correct: An intrinsic semiconductor is an pure, un-doped semiconductor crystal where thermal excitation alone creates equal numbers of free electrons and holes.\n• Why Other Choices are Incorrect: Extrinsic semiconductors are semiconductors that have been intentionally doped with impurities to form N-type or P-type materials."
    },
    {
        "id": 5,
        "question": "Calculate the loop current (I) in a forward-biased diode circuit using the Third Approximation (Piecewise Approximation). Given: Supply Voltage = 10 V, Silicon Diode (V_B = 0.7 V, internal resistance R_B = 0.2 Ω), and Load Resistor R_L = 1 kΩ (1000 Ω).",
        "options": ["9.300 mA", "9.298 mA", "10.00 mA", "9.600 mA"],
        "answer": 1,
        "explanation": "• Why '9.298 mA' is Correct: In the Third Approximation, I = (V_S - V_B) / (R_L + R_B) = (10 V - 0.7 V) / (1000 Ω + 0.2 Ω) = 9.3 V / 1000.2 Ω = 0.00929814 A = 9.298 mA.\n• Why Other Choices are Incorrect: 9.300 mA is obtained using the Second Approximation (ignoring internal resistance R_B = 0.2 Ω), and 10.00 mA is obtained using the First (Ideal) Approximation."
    },
    {
        "id": 6,
        "question": "Who discovered static electricity in ancient times by rubbing amber against fur?",
        "options": ["Ancient Egyptians", "Ancient Greeks", "Romans", "Babylonians"],
        "answer": 1,
        "explanation": "• Why 'Ancient Greeks' is Correct: The ancient Greeks discovered static electricity when rubbing amber (Greek: elektron) against fur attracted light objects.\n• Why Other Choices are Incorrect: Ancient Egyptians utilized electric fish to alleviate pain, but did not discover amber static electricity."
    },
    {
        "id": 7,
        "question": "The Leyden jar, invented in 1745, was a landmark historical device because it was capable of:",
        "options": ["Generating alternating current", "Storing an electric charge", "Measuring magnetic flux", "Amplifying radio signals"],
        "answer": 1,
        "explanation": "• Why 'Storing an electric charge' is Correct: The Leyden jar (1745) was the earliest form of a capacitor, designed to store static electrical charge.\n• Why Other Choices are Incorrect: Generators produce AC, magnetometers measure flux, and vacuum tubes/transistors amplify signals."
    },
    {
        "id": 8,
        "question": "In 1820, Hans Christian Oersted discovered which foundational physical phenomenon?",
        "options": ["Photoelectric effect", "Electromagnetism (connection between electricity and magnetism)", "Thermionic emission", "Quantum entanglement"],
        "answer": 1,
        "explanation": "• Why 'Electromagnetism (connection between electricity and magnetism)' is Correct: Oersted noticed a compass needle deflected near a current-carrying wire in 1820, establishing the field of electromagnetism.\n• Why Other Choices are Incorrect: Faraday discovered induction (1831), Edison discovered thermionic emission (1883), and Einstein explained photoelectric effect (1905)."
    },
    {
        "id": 9,
        "question": "Michael Faraday's discovery of electromagnetic induction in 1831 led directly to the development of:",
        "options": ["Electric motors and generators", "Vacuum tubes", "Microprocessors", "Leyden jars"],
        "answer": 0,
        "explanation": "• Why 'Electric motors and generators' is Correct: Faraday showed that a changing magnetic field induces an electric current, enabling mechanical-to-electrical energy conversion in electric generators.\n• Why Other Choices are Incorrect: Vacuum tubes were invented by Fleming (1904), microprocessors by Intel (1971), and Leyden jars in 1745."
    },
    {
        "id": 10,
        "question": "Who invented the first vacuum tube (diode / Fleming valve) in 1904?",
        "options": ["Thomas Edison", "John Ambrose Fleming", "Lee de Forest", "Nikola Tesla"],
        "answer": 1,
        "explanation": "• Why 'John Ambrose Fleming' is Correct: John Ambrose Fleming invented the two-electrode thermionic vacuum tube (diode valve) in 1904 based on the Edison effect.\n• Why Other Choices are Incorrect: Thomas Edison discovered the Edison effect (1883), Lee de Forest added a grid to create the triode (1906), and Tesla pioneered AC power."
    },
    {
        "id": 11,
        "question": "The transistor was invented in 1947 at Bell Laboratories by which team of scientists?",
        "options": [
            "Jack Kilby, Robert Noyce, and Ted Hoff",
            "John Bardeen, Walter Brattain, and William Shockley",
            "Thomas Edison, Nikola Tesla, and Alexander Graham Bell",
            "J.J. Thomson, Ernest Rutherford, and Niels Bohr"
        ],
        "answer": 1,
        "explanation": "• Why 'John Bardeen, Walter Brattain, and William Shockley' is Correct: Bardeen, Brattain, and Shockley co-invented the point-contact and junction transistor at Bell Labs in December 1947.\n• Why Other Choices are Incorrect: Kilby, Noyce, and Hoff developed integrated circuits and microprocessors."
    },
    {
        "id": 12,
        "question": "Integrated Circuits (ICs) were independently invented in the late 1950s by:",
        "options": [
            "Jack Kilby and Robert Noyce",
            "John Bardeen and Walter Brattain",
            "Ted Hoff and Federico Faggin",
            "John Ambrose Fleming and Lee de Forest"
        ],
        "answer": 0,
        "explanation": "• Why 'Jack Kilby and Robert Noyce' is Correct: Jack Kilby (Texas Instruments) and Robert Noyce (Fairchild Semiconductor) independently invented planar integrated circuits in 1958-1959.\n• Why Other Choices are Incorrect: Bardeen & Brattain invented the transistor; Hoff & Faggin created the Intel 4004 microprocessor."
    },
    {
        "id": 13,
        "question": "Which atomic model introduced the concept of electrons embedded in a positively charged sphere, known as the 'Plum Pudding Model'?",
        "options": ["John Dalton (1803)", "J.J. Thomson (1897)", "Ernest Rutherford (1911)", "Erwin Schrödinger (1926)"],
        "answer": 1,
        "explanation": "• Why 'J.J. Thomson (1897)' is Correct: J.J. Thomson discovered the electron in 1897 and proposed the Plum Pudding Model, where negative electrons were embedded in a positive sphere.\n• Why Other Choices are Incorrect: Dalton proposed solid sphere, Rutherford proposed nuclear model, and Schrödinger developed the quantum wave model."
    },
    {
        "id": 14,
        "question": "Erwin Schrödinger's 1926 contribution to atomic theory is known as the:",
        "options": ["Solid Sphere Model", "Nuclear Model", "Planetary Model", "Quantum Model (Electron Cloud Model)"],
        "answer": 3,
        "explanation": "• Why 'Quantum Model (Electron Cloud Model)' is Correct: Schrödinger formulated wave mechanics in 1926, defining electron positions probabilistically in 3D electron clouds (orbitals).\n• Why Other Choices are Incorrect: Dalton (solid sphere), Rutherford (nuclear), and Bohr (planetary) were earlier classical models."
    },
    {
        "id": 15,
        "question": "Which of the following is a key advantage of Silicon over Germanium in semiconductor device manufacturing?",
        "options": [
            "Silicon has higher leakage current and is more expensive",
            "Silicon is thermally stable, more abundant, cost-effective, and has low leakage current",
            "Silicon requires a lower forward barrier voltage of 0.1 V",
            "Silicon is more temperature sensitive than Germanium"
        ],
        "answer": 1,
        "explanation": "• Why 'Silicon is thermally stable, more abundant, cost-effective, and has low leakage current' is Correct: Silicon (Si) outperforms Germanium (Ge) because Si handles higher operating temperatures, has lower reverse leakage current, and is abundant in sand (SiO2).\n• Why Other Choices are Incorrect: Germanium is temperature sensitive, expensive, less abundant, and has high leakage current."
    },
    {
        "id": 16,
        "question": "What are the typical forward barrier (knee) voltages for Germanium (Ge) and Silicon (Si) diodes at room temperature?",
        "options": [
            "Germanium = 0.7 V, Silicon = 0.3 V",
            "Germanium = 0.3 V, Silicon = 0.7 V",
            "Germanium = 1.1 V, Silicon = 1.5 V",
            "Germanium = 0.0 V, Silicon = 0.0 V"
        ],
        "answer": 1,
        "explanation": "• Why 'Germanium = 0.3 V, Silicon = 0.7 V' is Correct: At 25 °C, a Germanium PN junction requires approx 0.3 V to turn on in forward bias, while Silicon requires approx 0.7 V.\n• Why Other Choices are Incorrect: Reversing the values is a common mistake; Ge has smaller bandgap energy than Si."
    },
    {
        "id": 17,
        "question": "Which of the following is an example of a Compound Semiconductor?",
        "options": ["Silicon (Si)", "Germanium (Ge)", "Gallium Arsenide (GaAs)", "Carbon (C)"],
        "answer": 2,
        "explanation": "• Why 'Gallium Arsenide (GaAs)' is Correct: Gallium Arsenide (GaAs) and Cadmium Sulfide (CdS) are compound semiconductors formed by combining elements from different periodic table groups.\n• Why Other Choices are Incorrect: Silicon and Germanium are single-crystal elemental semiconductors."
    },
    {
        "id": 18,
        "question": "What type of chemical bonding is formed between semiconductor atoms in a crystal lattice by sharing valence electrons?",
        "options": ["Ionic bonding", "Covalent bonding", "Metallic bonding", "Hydrogen bonding"],
        "answer": 1,
        "explanation": "• Why 'Covalent bonding' is Correct: Semiconductor atoms achieve an 8-electron stable valence octet by sharing valence electrons with four neighboring atoms in covalent bonds.\n• Why Other Choices are Incorrect: Ionic bonds involve complete electron transfer, while metallic bonds feature a sea of delocalized electrons."
    },
    {
        "id": 19,
        "question": "Adding donor impurities (such as Phosphorus or Arsenic) to an intrinsic semiconductor produces which type of material?",
        "options": ["P-type semiconductor with excess holes", "N-type semiconductor with excess free electrons", "Insulator with high resistance", "Superconductor"],
        "answer": 1,
        "explanation": "• Why 'N-type semiconductor with excess free electrons' is Correct: Pentavalent donor atoms (5 valence electrons) donate extra free electrons, creating an N-type (negative carrier) semiconductor.\n• Why Other Choices are Incorrect: Acceptor impurities (trivalent like Boron) produce P-type semiconductors with excess holes."
    },
    {
        "id": 20,
        "question": "In a P-type semiconductor, which charge carriers are the majority carriers and minority carriers?",
        "options": [
            "Majority: Electrons, Minority: Holes",
            "Majority: Holes, Minority: Electrons",
            "Majority: Positive Ions, Minority: Negative Ions",
            "Majority: Photons, Minority: Neutrons"
        ],
        "answer": 1,
        "explanation": "• Why 'Majority: Holes, Minority: Electrons' is Correct: P-type semiconductors are doped with trivalent acceptors (Boron), creating a abundance of positive holes (majority carriers) and few thermally generated electrons (minority carriers).\n• Why Other Choices are Incorrect: N-type materials have electrons as majority carriers and holes as minority carriers."
    },
    {
        "id": 21,
        "question": "In the First (Ideal) Approximation of a diode, how does the diode behave under forward bias and reverse bias conditions?",
        "options": [
            "Forward bias: Open switch; Reverse bias: Closed switch",
            "Forward bias: Closed switch (0 V drop); Reverse bias: Open switch (0 current)",
            "Forward bias: 0.7 V battery; Reverse bias: Resistor",
            "Forward bias: Variable capacitor; Reverse bias: Inductor"
        ],
        "answer": 1,
        "explanation": "• Why 'Forward bias: Closed switch (0 V drop); Reverse bias: Open switch (0 current)' is Correct: The Ideal (First) Approximation treats the diode as a perfect binary switch with zero forward voltage drop when ON and zero leakage current when OFF.\n• Why Other Choices are Incorrect: 0.7 V battery model corresponds to the Practical (Second) Approximation."
    },
    {
        "id": 22,
        "question": "In the Second (Practical) Approximation, a forward-biased diode is modeled as a switch in series with a:",
        "options": ["Variable resistor", "Constant voltage battery (V_B = 0.7 V for Si)", "Capacitor", "Current source"],
        "answer": 1,
        "explanation": "• Why 'Constant voltage battery (V_B = 0.7 V for Si)' is Correct: The Second Approximation accounts for barrier potential by modeling the diode as a switch in series with an opposing DC battery equal to the barrier voltage (0.7 V for Si, 0.3 V for Ge).\n• Why Other Choices are Incorrect: Adding a bulk resistor corresponds to the Third (Piecewise) Approximation."
    },
    {
        "id": 23,
        "question": "What is the region near the PN junction called where free electrons and holes recombine, leaving unneutralized donor and acceptor ions?",
        "options": ["Conduction region", "Depletion region (barrier region)", "Saturation region", "Substrate region"],
        "answer": 1,
        "explanation": "• Why 'Depletion region (barrier region)' is Correct: When a PN junction is formed, mobile charge carriers diffuse across and recombine, depleting the junction of free carriers and forming a depletion region of fixed ions.\n• Why Other Choices are Incorrect: Conduction region refers to energy bands, while saturation region refers to transistor operation."
    },
    {
        "id": 24,
        "question": "Under Reverse-Bias conditions, what happens to the depletion region width of a PN junction diode?",
        "options": ["It shrinks to zero", "It widens, increasing the internal barrier potential", "It remains completely unchanged", "It turns into a conductor"],
        "answer": 1,
        "explanation": "• Why 'It widens, increasing the internal barrier potential' is Correct: Reverse bias pulls majority carriers away from the PN junction, widening the depletion layer and preventing forward current flow.\n• Why Other Choices are Incorrect: Forward bias shrinks the depletion region width."
    },
    {
        "id": 25,
        "question": "Which diode approximation incorporates the diode's internal bulk resistance (R_B) in series with the barrier voltage battery and switch?",
        "options": ["First (Ideal) Approximation", "Second (Practical) Approximation", "Third (Piecewise Linear) Approximation", "Fourth (Small-Signal) Approximation"],
        "answer": 2,
        "explanation": "• Why 'Third (Piecewise Linear) Approximation' is Correct: The Third Approximation includes the internal bulk resistance of the semiconductor material (R_B) in series with the barrier battery (V_B) and switch.\n• Why Other Choices are Incorrect: First approximation has no voltage drop or resistance; Second approximation includes barrier voltage V_B but assumes R_B = 0."
    }
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

electronics_obj_str = "  basic_electronics: {\n"
electronics_obj_str += "    title: \"Basic Electronics (ECE 005)\",\n"
electronics_obj_str += "    chapter: \"ECE 005\",\n"
electronics_obj_str += "    questions: " + json.dumps(electronics_questions, indent=6) + "\n"
electronics_obj_str += "  },\n"

if 'basic_electronics:' not in content:
    target = "var SUBJECT_DATA = {"
    new_content = content.replace(target, target + "\n" + electronics_obj_str)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully inserted basic_electronics as the FIRST subject in questions.js!")
else:
    print("basic_electronics already present in questions.js.")
