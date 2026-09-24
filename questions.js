/**
 * Jeycub Terms Reviewer - Multi-Subject Dataset
 * Contains:
 * 1. Fluid Mechanics (127 Problems)
 * 2. Mechanics of Deformable Bodies (150 Problems - Tests 2, 3, 4)
 * 3. Heat Transfer (142 Problems)
 */

var SUBJECT_DATA = {
  ece_midterm: {
    title: "ECE 005 Midterm Exam Reviewer",
    chapter: "ECE 005 Midterm - BJT Configurations, Switching & Darlington Applications",
    questions: [
        {
            "id": 1,
            "question": "A Bipolar Junction Transistor (BJT) is structurally formed by joining two PN junctions in series. How many semiconductor layers, junctions, and terminals does a BJT possess?",
            "options": [
                "Two layers, one junction, and two terminals",
                "Three layers, two junctions, and three terminals",
                "Three layers, three junctions, and three terminals",
                "Four layers, three junctions, and two terminals"
            ],
            "answer": 1,
            "explanation": "• Why 'Three layers, two junctions, and three terminals' is Correct: A BJT is constructed from three alternating layers of semiconductor material (N-P-N or P-N-P), creating two internal PN junctions (Base-Emitter and Base-Collector) and three accessible external terminals (Emitter, Base, and Collector).\n• Why Other Choices are Incorrect: A simple diode has two layers and one junction. An SCR (thyristor) has four layers and three junctions."
        },
        {
            "id": 2,
            "question": "Why is the Bipolar Junction Transistor designated as a 'bipolar' device?",
            "options": [
                "Because it has exactly two external power supply polarity connections",
                "Because its operation depends on the movement of both majority and minority charge carriers (electrons and holes)",
                "Because it possesses two identical PN junctions that share equal physical dimensions",
                "Because it operates exclusively with dual positive and negative voltage rails"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In a BJT, conduction involves both electrons and holes acting as charge carriers across the junctions, making it 'bipolar'. In contrast, Field-Effect Transistors (FETs) are 'unipolar' because conduction relies on only one type of charge carrier (either electrons or holes).\n• Why Other Choices are Incorrect: The term 'bipolar' does not refer to power supply rails or symmetrical junction sizing."
        },
        {
            "id": 3,
            "question": "If two discrete signal diodes are connected back-to-back such that their anodes are tied together to a common terminal, which type of BJT structure does this model?",
            "options": [
                "PNP Transistor",
                "NPN Transistor",
                "Junction Field-Effect Transistor (JFET)",
                "Metal-Oxide-Semiconductor FET (MOSFET)"
            ],
            "answer": 1,
            "explanation": "• Why 'NPN Transistor' is Correct: In the back-to-back diode analogy of an NPN transistor, the two P-type anodes are fused together to form the common Base (P-type), while the two N-type cathodes form the Emitter and Collector (N-type).\n• Why Other Choices are Incorrect: For a PNP transistor, the two cathodes (N-type) are connected together to form the shared Base, with the anodes acting as Emitter and Collector."
        },
        {
            "id": 4,
            "question": "If two signal diodes are connected back-to-back sharing a common N-type cathode terminal, which transistor type is represented?",
            "options": [
                "NPN Transistor",
                "PNP Transistor",
                "Unijunction Transistor (UJT)",
                "Silicon Controlled Rectifier (SCR)"
            ],
            "answer": 1,
            "explanation": "• Why 'PNP Transistor' is Correct: A PNP transistor consists of two P-type regions separated by an N-type base. In the diode analogy, the two diodes have their cathodes connected back-to-back to form the shared central N-type base terminal.\n• Why Other Choices are Incorrect: Connecting anodes forms an NPN transistor."
        },
        {
            "id": 5,
            "question": "Transistors are classified as active circuit components rather than passive components. What fundamentally characterizes an 'active' device?",
            "options": [
                "It only dissipates electrical energy as thermal heat like a resistor",
                "It can control electron flow and produce power or voltage amplification via an external control signal",
                "It requires zero external DC biasing power supplies to operate",
                "It obeys Ohm's law linearly across all frequencies and signal levels"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Active devices are electronic components that can control the flow of electricity, inject energy into a circuit, and produce amplification using external DC power. Resistors, capacitors, and inductors are passive devices because they cannot amplify.\n• Why Other Choices are Incorrect: Passive devices dissipate or store energy, whereas active devices can amplify signals."
        },
        {
            "id": 6,
            "question": "The ability of a transistor to change between an insulating state and a conducting state enables it to perform which two fundamental engineering functions?",
            "options": [
                "Rectification and Filtering",
                "Switching and Amplification",
                "Modulation and Demodulation exclusively",
                "Inductance and Capacitance"
            ],
            "answer": 1,
            "explanation": "• Why 'Switching and Amplification' is Correct: Transistors have two foundational functions: (1) Switching in digital electronics (fully OFF in cutoff or fully ON in saturation), and (2) Amplification in analogue electronics (operating in the linear active region to enlarge input signals).\n• Why Other Choices are Incorrect: Rectification is primarily the function of diodes."
        },
        {
            "id": 7,
            "question": "When a BJT is utilized as a digital switch (logic inverter or driver), between which two operational regions does it transition?",
            "options": [
                "Active region and Breakdown region",
                "Cutoff region and Saturation region",
                "Active region and Cutoff region only",
                "Saturation region and Active region only"
            ],
            "answer": 1,
            "explanation": "• Why 'Cutoff region and Saturation region' is Correct: In digital switching, the transistor operates as an open switch in the Cutoff region (zero current, maximum voltage across terminals) and as a closed switch in the Saturation region (maximum current, near-zero voltage drop across terminals).\n• Why Other Choices are Incorrect: The active region is avoided during steady-state switching to minimize power dissipation."
        },
        {
            "id": 8,
            "question": "For linear, undistorted analogue signal amplification, in which region must a BJT be biased?",
            "options": [
                "Saturation region",
                "Cutoff region",
                "Active (or Linear) region",
                "Avalanche breakdown region"
            ],
            "answer": 2,
            "explanation": "• Why 'Active (or Linear) region' is Correct: In the Active region, collector current is proportional to base current (IC = beta * IB), providing linear input-to-output amplification without clipping waveform peaks.\n• Why Other Choices are Incorrect: Saturation and cutoff clip the waveform peaks, resulting in severe non-linear distortion."
        },
        {
            "id": 9,
            "question": "What are the exact PN junction biasing conditions required for a BJT to operate in the Active (linear amplification) region?",
            "options": [
                "Base-Emitter forward-biased and Base-Collector forward-biased",
                "Base-Emitter reverse-biased and Base-Collector forward-biased",
                "Base-Emitter forward-biased and Base-Collector reverse-biased",
                "Base-Emitter reverse-biased and Base-Collector reverse-biased"
            ],
            "answer": 2,
            "explanation": "• Why this is Correct: In the active region, the Base-Emitter (input) junction is forward-biased to permit carrier injection into the base, and the Base-Collector (output) junction is reverse-biased to sweep carriers into the collector.\n• Why Other Choices are Incorrect: Forward-forward corresponds to Saturation, reverse-reverse corresponds to Cutoff, and reverse-forward corresponds to Inverted Active."
        },
        {
            "id": 10,
            "question": "What junction biasing states place a BJT into the Cutoff region (OFF state)?",
            "options": [
                "Base-Emitter forward-biased and Base-Collector reverse-biased",
                "Both Base-Emitter and Base-Collector junctions reverse-biased",
                "Both Base-Emitter and Base-Collector junctions forward-biased",
                "Base-Emitter reverse-biased and Base-Collector forward-biased"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In the cutoff region, both junctions are reverse-biased. No majority carriers are injected into the base, resulting in near-zero terminal currents (only negligible reverse saturation leakage I_CEO flows).\n• Why Other Choices are Incorrect: Forward-biasing either junction allows substantial current to flow."
        },
        {
            "id": 11,
            "question": "What junction biasing states define the Saturation region (fully ON state)?",
            "options": [
                "Both Base-Emitter and Base-Collector junctions forward-biased",
                "Both Base-Emitter and Base-Collector junctions reverse-biased",
                "Base-Emitter forward-biased and Base-Collector reverse-biased",
                "Base-Emitter reverse-biased and Base-Collector forward-biased"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: When both junctions are forward-biased, the transistor enters saturation. Collector current reaches its maximum external circuit limit (I_C(sat) ≈ V_CC / R_C) and V_CE drops to its minimum saturation voltage (V_CE(sat) ≈ 0.2 V).\n• Why Other Choices are Incorrect: Reverse-biasing the collector-base junction establishes the active region."
        },
        {
            "id": 12,
            "question": "How is the Emitter region of a BJT physically engineered with respect to impurity doping concentration?",
            "options": [
                "Lightly doped to minimize leakage current",
                "Moderately doped to match the collector doping",
                "Heavily doped to inject the maximum number of majority charge carriers into the base",
                "Completely undoped (intrinsic silicon)"
            ],
            "answer": 2,
            "explanation": "• Why this is Correct: The Emitter region is the most heavily doped layer. Its primary role is to emit (inject) a massive concentration of majority carriers (electrons in NPN, holes in PNP) across the forward-biased emitter junction into the thin base layer.\n• Why Other Choices are Incorrect: Lightly doped regions cannot supply sufficient carriers for high current gain."
        },
        {
            "id": 13,
            "question": "What are the two primary structural characteristics of the BJT Base layer that are essential for effective transistor operation?",
            "options": [
                "Extremely thick and heavily doped",
                "Extremely thin and lightly doped",
                "Thick and moderately doped",
                "Equal in thickness and doping to the collector"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Making the base very thin and lightly doped ensures that over 95% to 99% of carriers injected from the emitter diffuse directly across into the collector without recombining in the base. This keeps base current I_B tiny and maximizes current gain beta.\n• Why Other Choices are Incorrect: A thick or heavily doped base would cause excessive carrier recombination, destroying transistor action."
        },
        {
            "id": 14,
            "question": "Why is the Collector region physically manufactured with the largest surface area among the three semiconductor layers?",
            "options": [
                "To maximize the electrostatic capacitance of the transistor",
                "To dissipate the larger amount of heat generated at the reverse-biased collector-base junction",
                "To ensure that it has the highest electrical resistance in the circuit",
                "To allow easier attachment of wire leads during assembly"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: The Collector region operates under reverse bias with a relatively large voltage drop (V_CE) and conducts almost the full emitter current (I_C ≈ I_E). The resulting power dissipation (P = V_CE * I_C) is highest at the collector junction, requiring a larger physical volume and surface area to safely dissipate heat.\n• Why Other Choices are Incorrect: Minimizing capacitance is desirable, and large physical size does not increase resistance."
        },
        {
            "id": 15,
            "question": "According to Kirchhoff's Current Law (KCL), what is the universal relationship between the three terminal currents of any BJT?",
            "options": [
                "I_C = I_B + I_E",
                "I_E = I_B + I_C",
                "I_B = I_E + I_C",
                "I_E = I_C - I_B"
            ],
            "answer": 1,
            "explanation": "• Why 'I_E = I_B + I_C' is Correct: By applying KCL to the transistor package as a single node, total current leaving or entering the emitter must equal the sum of collector current and base current: I_E = I_B + I_C. Since I_B is very small, I_E ≈ I_C.\n• Why Other Choices are Incorrect: Emitter current is always the largest terminal current."
        },
        {
            "id": 16,
            "question": "In an NPN transistor operating in the active region, which charge carriers constitute the majority carriers injected from emitter to collector?",
            "options": [
                "Holes",
                "Electrons",
                "Positrons",
                "Photons"
            ],
            "answer": 1,
            "explanation": "• Why 'Electrons' is Correct: In an NPN transistor, the Emitter is N-type, meaning its majority carriers are electrons. When forward-biased, these electrons are injected into the P-type base and swept into the N-type collector.\n• Why Other Choices are Incorrect: In a PNP transistor, holes are the injected majority carriers."
        },
        {
            "id": 17,
            "question": "What is the definition of the DC current gain beta (h_FE) in the common-emitter configuration?",
            "options": [
                "beta = I_B / I_C",
                "beta = I_C / I_B",
                "beta = I_C / I_E",
                "beta = I_E / I_B"
            ],
            "answer": 1,
            "explanation": "• Why 'beta = I_C / I_B' is Correct: The common-emitter DC current gain, designated as beta (or h_FE on datasheets), is defined as the ratio of output DC collector current to input DC base current: beta = I_C / I_B. Typical values range from 50 to 400.\n• Why Other Choices are Incorrect: I_C / I_E is alpha; I_B / I_C is the reciprocal of beta."
        },
        {
            "id": 18,
            "question": "What is the common-base DC current amplification factor alpha (α) defined as?",
            "options": [
                "alpha = I_C / I_E",
                "alpha = I_E / I_C",
                "alpha = I_B / I_E",
                "alpha = I_C / I_B"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: alpha (α) is defined as the ratio of collector current to emitter current in the common-base configuration: alpha = I_C / I_E.\n• Why Other Choices are Incorrect: I_C / I_B is beta; I_E / I_C is the reciprocal of alpha."
        },
        {
            "id": 19,
            "question": "Which mathematical formula correctly converts common-emitter gain beta to common-base gain alpha?",
            "options": [
                "alpha = beta / (beta + 1)",
                "alpha = (beta + 1) / beta",
                "alpha = beta / (beta - 1)",
                "alpha = beta * (beta + 1)"
            ],
            "answer": 0,
            "explanation": "• Why 'alpha = beta / (beta + 1)' is Correct: Since I_E = I_B + I_C = (I_C / beta) + I_C = I_C * ((1 + beta) / beta), solving for alpha = I_C / I_E yields alpha = beta / (beta + 1).\n• Why Other Choices are Incorrect: (beta + 1) / beta would yield a value greater than 1."
        },
        {
            "id": 20,
            "question": "If a transistor has a common-emitter current gain beta = 199, what is its corresponding common-base current gain alpha?",
            "options": [
                "0.950",
                "0.990",
                "0.995",
                "1.005"
            ],
            "answer": 2,
            "explanation": "• Why '0.995' is Correct: Using alpha = beta / (beta + 1) = 199 / (199 + 1) = 199 / 200 = 0.995.\n• Why Other Choices are Incorrect: Direct calculation yields exactly 0.995."
        },
        {
            "id": 21,
            "question": "On a standard transistor schematic symbol, what does the arrow located on the Emitter terminal indicate?",
            "options": [
                "The direction of electron drift under reverse bias",
                "The direction of conventional current flow through the emitter when forward-biased",
                "The polarity of the external DC collector supply voltage",
                "The location of maximum capacitive coupling"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: The arrow on the emitter symbol always points in the direction of conventional current (positive charge flow) through the forward-biased Base-Emitter junction: pointing OUT of the base for NPN ('Not Pointing iN') and pointing INTO the base for PNP ('Pointing iN Proudly').\n• Why Other Choices are Incorrect: It does not indicate electron drift direction (which is opposite to conventional current)."
        },
        {
            "id": 22,
            "question": "In an NPN transistor schematic symbol, how is the arrow oriented on the emitter lead?",
            "options": [
                "Pointing inward toward the base",
                "Pointing outward away from the base",
                "Pointing horizontally toward the collector",
                "There is no arrow on an NPN transistor"
            ],
            "answer": 1,
            "explanation": "• Why 'Pointing outward away from the base' is Correct: In an NPN transistor, conventional current flows from Base to Emitter, so the arrow points outward away from the base line.\n• Why Other Choices are Incorrect: An arrow pointing inward toward the base represents a PNP transistor."
        },
        {
            "id": 23,
            "question": "What is the typical forward-bias voltage drop across the Base-Emitter junction (V_BE) for a conducting Silicon BJT at room temperature?",
            "options": [
                "0.1 V to 0.2 V",
                "0.3 V",
                "0.7 V",
                "1.4 V"
            ],
            "answer": 2,
            "explanation": "• Why '0.7 V' is Correct: Like standard silicon PN junction diodes, the Base-Emitter junction of a silicon BJT has a built-in barrier potential of approximately 0.7 V (0.6 V to 0.7 V) when conducting.\n• Why Other Choices are Incorrect: 0.3 V is typical for Germanium; 0.1 V is typical for Schottky."
        },
        {
            "id": 24,
            "question": "What is the primary difference between a BJT and a Field-Effect Transistor (FET) in terms of control mechanism?",
            "options": [
                "A BJT is a current-controlled device, whereas a FET is a voltage-controlled device",
                "A BJT is a voltage-controlled device, whereas a FET is a current-controlled device",
                "A BJT can only conduct AC signals, whereas a FET only conducts DC",
                "A BJT does not require any semiconductor doping"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: In a BJT, output current (I_C) is controlled by the input current (I_B), making it a current-controlled current source. In a FET, the gate draws negligible current and electric field voltage (V_GS) controls drain current, making it voltage-controlled.\n• Why Other Choices are Incorrect: Both handle AC and DC, and both are doped semiconductors."
        },
        {
            "id": 25,
            "question": "In the back-to-back diode analogy of a BJT, why can't two discrete physical signal diodes wired back-to-back function as a real transistor?",
            "options": [
                "Because signal diodes cannot conduct conventional current",
                "Because discrete diodes lack the shared, ultra-thin, lightly-doped middle base layer necessary for carrier diffusion and interaction between the junctions",
                "Because signal diodes only operate at cryogenic temperatures",
                "Because connecting two diodes in series causes immediate destructive avalanche breakdown"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: While the two-diode model helps explain polarity and junction biasing, real transistor action requires a continuous single crystal lattice where the base is physically thinner than the diffusion length of minority carriers, allowing carriers injected from the emitter to reach the collector before recombining.\n• Why Other Choices are Incorrect: Discrete diodes operate normally at room temperature and do not break down when connected back-to-back."
        },
        {
            "id": 26,
            "question": "Who demonstrated the amplifying action of the first point-contact transistor at Bell Telephone Laboratories on December 23, 1947?",
            "options": [
                "Thomas Edison, Nikola Tesla, and George Westinghouse",
                "Dr. William Shockley, Walter H. Brattain, and John Bardeen",
                "Jack Kilby, Robert Noyce, and Gordon Moore",
                "Heinrich Hertz, Guglielmo Marconi, and Lee de Forest"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: The amplifying action of the first transistor was demonstrated by Dr. William Shockley, Walter H. Brattain, and John Bardeen at Bell Telephone Laboratories on December 23, 1947. They were jointly awarded the 1956 Nobel Prize in Physics for their discovery.\n• Why Other Choices are Incorrect: Kilby and Noyce invented the integrated circuit; Lee de Forest invented the Audion vacuum tube triode."
        },
        {
            "id": 27,
            "question": "A transistor operating in the active region has a measured base current IB = 50 μA and collector current IC = 3.65 mA. What is the total emitter current IE?",
            "options": [
                "3.60 mA",
                "3.70 mA",
                "7.30 mA",
                "53.65 mA"
            ],
            "answer": 1,
            "explanation": "• Why '3.70 mA' is Correct: First convert I_B to milliamperes: 50 μA = 0.050 mA. Using KCL: I_E = I_C + I_B = 3.65 mA + 0.050 mA = 3.70 mA.\n• Why Other Choices are Incorrect: Forgetting to convert μA to mA or subtracting instead of adding produces incorrect values."
        },
        {
            "id": 28,
            "question": "Which mathematical equation correctly expresses the common-emitter current gain beta in terms of the common-base current gain alpha?",
            "options": [
                "beta = alpha / (1 - alpha)",
                "beta = (1 - alpha) / alpha",
                "beta = alpha / (alpha + 1)",
                "beta = 1 / (1 - alpha)"
            ],
            "answer": 0,
            "explanation": "• Why 'beta = alpha / (1 - alpha)' is Correct: Starting from alpha = beta / (beta + 1), cross-multiplying gives alpha * beta + alpha = beta. Rearranging yields beta * (1 - alpha) = alpha, so beta = alpha / (1 - alpha).\n• Why Other Choices are Incorrect: alpha / (alpha + 1) converts beta to alpha; 1 / (1 - alpha) is equal to beta + 1."
        },
        {
            "id": 29,
            "question": "If a transistor has a common-base current gain alpha = 0.98, what is its common-emitter current gain beta?",
            "options": [
                "49",
                "50",
                "98",
                "100"
            ],
            "answer": 0,
            "explanation": "• Why '49' is Correct: Using beta = alpha / (1 - alpha) = 0.98 / (1 - 0.98) = 0.98 / 0.02 = 49.\n• Why Other Choices are Incorrect: beta + 1 = 50, but beta alone equals 49."
        },
        {
            "id": 30,
            "question": "In a Common-Emitter (CE) voltage amplifier, what is the phase relationship between the input AC voltage applied at the base and the output AC voltage taken at the collector?",
            "options": [
                "0 degrees (in-phase)",
                "90 degrees out-of-phase",
                "180 degrees out-of-phase (inverted)",
                "270 degrees out-of-phase"
            ],
            "answer": 2,
            "explanation": "• Why '180 degrees out-of-phase' is Correct: A Common-Emitter amplifier produces a 180° phase inversion between input and output. When the input voltage increases, I_B and I_C increase, causing a larger voltage drop across R_C, which pulls the collector voltage V_C downward.\n• Why Other Choices are Incorrect: Common-Base and Common-Collector amplifiers have a 0° phase shift (in-phase)."
        },
        {
            "id": 31,
            "question": "Which BJT amplifier configuration is characterized by a voltage gain approximately equal to 1, high current gain, very high input impedance, and low output impedance?",
            "options": [
                "Common-Emitter (CE)",
                "Common-Base (CB)",
                "Common-Collector (CC / Emitter-Follower)",
                "Cascode Configuration"
            ],
            "answer": 2,
            "explanation": "• Why 'Common-Collector' is Correct: The Common-Collector (also called Emitter-Follower) configuration features unity voltage gain (A_v ≈ 1), high current gain (A_i ≈ beta + 1), very high input impedance (Z_in ≈ beta * R_E), and very low output impedance (Z_out ≈ r_e), making the emitter voltage closely follow the base voltage.\n• Why Other Choices are Incorrect: Common-Emitter has high voltage and current gain; Common-Base has low input impedance and unity current gain."
        },
        {
            "id": 32,
            "question": "What is the primary practical engineering application of a Common-Collector (Emitter-Follower) amplifier?",
            "options": [
                "High-frequency radio RF voltage amplification",
                "Impedance matching and buffering between a high-impedance source and a low-impedance load",
                "High-voltage pulse generation",
                "Precision full-wave rectification"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Because the Emitter-Follower presents a high input impedance and a low output impedance with unity voltage gain, it is widely used as a buffer amplifier to prevent signal loading when connecting high-impedance signal sources to low-impedance loads (such as speakers or cables).\n• Why Other Choices are Incorrect: Common-Collector provides no voltage amplification, so it cannot amplify weak RF signals."
        },
        {
            "id": 33,
            "question": "Which BJT configuration exhibits low input impedance, high output impedance, unity current gain (alpha < 1), high voltage gain, and zero phase inversion?",
            "options": [
                "Common-Base (CB)",
                "Common-Emitter (CE)",
                "Common-Collector (CC)",
                "Darlington Pair"
            ],
            "answer": 0,
            "explanation": "• Why 'Common-Base' is Correct: The Common-Base configuration has input at the emitter and output at the collector. It provides unity current gain (I_C / I_E = alpha < 1), very low input impedance (Z_in ≈ r_e), high output impedance, excellent high-frequency response (minimizing the Miller effect), and no phase inversion.\n• Why Other Choices are Incorrect: Common-Emitter provides high current gain and inverts phase."
        },
        {
            "id": 34,
            "question": "What does the reverse saturation leakage current parameter ICBO represent on a BJT specification datasheet?",
            "options": [
                "Collector-to-Base leakage current with the Emitter Open",
                "Collector-to-Emitter leakage current with the Base Open",
                "Base-to-Emitter leakage current with the Collector Open",
                "Breakdown current at the Output terminal"
            ],
            "answer": 0,
            "explanation": "• Why 'Collector-to-Base leakage current with the Emitter Open' is Correct: By JEDEC standard notation, I_CBO represents the Collector-to-Base current when the Emitter terminal is Open (unconnected) under reverse bias. It is composed of thermally generated minority charge carriers.\n• Why Other Choices are Incorrect: Collector-to-Emitter leakage with Base Open is designated as I_CEO."
        },
        {
            "id": 35,
            "question": "How is the Collector-to-Emitter leakage current with Base open (ICEO) mathematically related to the Collector-to-Base leakage current with Emitter open (ICBO)?",
            "options": [
                "I_CEO = I_CBO / beta",
                "I_CEO = (beta + 1) * I_CBO",
                "I_CEO = I_CBO - beta",
                "I_CEO = I_CBO / (beta + 1)"
            ],
            "answer": 1,
            "explanation": "• Why 'I_CEO = (beta + 1) * I_CBO' is Correct: With the base open (I_B = 0), the reverse leakage I_CBO entering the base is internally amplified by the transistor action, resulting in I_CEO = (beta + 1) * I_CBO ≈ beta * I_CBO. Consequently, I_CEO is orders of magnitude larger than I_CBO.\n• Why Other Choices are Incorrect: Leakage is amplified by beta + 1, not divided."
        },
        {
            "id": 36,
            "question": "As ambient operating temperature increases, approximately by what factor do the reverse saturation leakage currents (ICBO and ICEO) increase for silicon BJTs?",
            "options": [
                "They decrease by 50% for every 10°C rise",
                "They double for approximately every 10°C rise",
                "They remain constant regardless of temperature",
                "They increase by 10x for every 1°C rise"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Thermal generation of electron-hole pairs across the depletion region increases exponentially with temperature. As a standard semiconductor rule of thumb, reverse saturation leakage currents approximately double for every 10°C increase in junction temperature.\n• Why Other Choices are Incorrect: Leakage current increases, rather than decreases or stays constant."
        },
        {
            "id": 37,
            "question": "What is the phenomenon known as the 'Early Effect' (or Base-Width Modulation) in a BJT?",
            "options": [
                "The switching on of a transistor before input signal arrival",
                "The narrowing of the effective electrical base width as reverse collector-base voltage V_CB increases",
                "The complete physical melting of the emitter wire lead under excess current",
                "The reduction in beta at ultra-low cryogenic temperatures"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Discovered by James M. Early, the Early Effect occurs because increasing reverse bias on the collector-base junction widens the depletion region into the lightly doped base. This narrows the effective neutral base width (W_B), reducing recombination and causing collector current to slightly increase with V_CE.\n• Why Other Choices are Incorrect: It has nothing to do with timing or destruction."
        },
        {
            "id": 38,
            "question": "On the Common-Emitter output characteristics curves (IC vs VCE), if the active-region curve slopes are extrapolated backward into negative VCE, where do they intersect?",
            "options": [
                "At the origin (0 V, 0 mA)",
                "At the negative Early Voltage (-V_A) on the voltage axis",
                "At the collector supply voltage V_CC",
                "They never intersect because they are perfectly horizontal"
            ],
            "answer": 1,
            "explanation": "• Why 'At the negative Early Voltage (-V_A)' is Correct: Extrapolating the active-region output characteristic lines backward intersects the horizontal voltage axis at a common point known as the Early Voltage (-V_A), typically between 50 V and 150 V.\n• Why Other Choices are Incorrect: Due to base-width modulation, the curves have a positive slope and do not remain horizontal."
        },
        {
            "id": 39,
            "question": "How does the Early Effect affect the dynamic output resistance ro of a BJT in the common-emitter configuration?",
            "options": [
                "It makes the output resistance infinite (ideal current source)",
                "It introduces a finite output resistance approximately given by ro ≈ V_A / I_C",
                "It reduces the output resistance to zero ohms",
                "It causes negative incremental resistance"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Because the I_C vs V_CE curves have a non-zero slope (dI_C / dV_CE), the BJT acts as a practical current source with finite dynamic output resistance: r_o = (V_A + V_CE) / I_C ≈ V_A / I_C.\n• Why Other Choices are Incorrect: An ideal current source has infinite r_o; the Early Effect makes it finite."
        },
        {
            "id": 40,
            "question": "How is the maximum collector power dissipation rating (PCmax) of a transistor defined and plotted on the output characteristics?",
            "options": [
                "P_Cmax = V_CE + I_C, plotted as a straight line",
                "P_Cmax = V_CE * I_C, plotted as a hyperbola curve",
                "P_Cmax = V_BE * I_B, plotted as an exponential curve",
                "P_Cmax = I_C^2 * R_B, plotted as a parabola"
            ],
            "answer": 1,
            "explanation": "• Why 'P_Cmax = V_CE * I_C, plotted as a hyperbola curve' is Correct: Transistor collector dissipation is the product of collector-emitter voltage and collector current: P_C = V_CE * I_C. Plotting this constant maximum power limit on the I_C vs V_CE plane forms a hyperbolic curve.\n• Why Other Choices are Incorrect: Power is the product of voltage and current, forming a hyperbola."
        },
        {
            "id": 41,
            "question": "What is the 'Safe Operating Area' (SOA) of a power BJT?",
            "options": [
                "The temperature range inside a refrigerated electronics chassis",
                "The region on the I_C-V_CE plane bounded by I_Cmax, V_CEmax, P_Cmax, and second breakdown limits",
                "The physical clearance required between two neighboring circuit board components",
                "The frequency band where input capacitance is cancelled by inductance"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: The Safe Operating Area (SOA) defines the voltage and current boundary conditions over which the transistor can operate without self-destruction or degradation. It is bounded by maximum collector current, maximum breakdown voltage, maximum power dissipation, and the second breakdown limit.\n• Why Other Choices are Incorrect: SOA is an electrical operating envelope on the characteristic curves."
        },
        {
            "id": 42,
            "question": "Which classic transistor package consists of a heavy metal diamond-shaped case with two protruding leads, where the metal case itself serves as the Collector terminal for direct heat sinking?",
            "options": [
                "TO-92",
                "TO-3",
                "TO-18",
                "SOT-23"
            ],
            "answer": 1,
            "explanation": "• Why 'TO-3' is Correct: The TO-3 is a high-power metal package shaped like a diamond with two mounting screw holes. It has two base/emitter pins on the bottom, while the heavy metal case serves as the Collector connection to facilitate heat transfer to an external heat sink.\n• Why Other Choices are Incorrect: TO-92 is a small plastic case; TO-18 is a miniature metal can; SOT-23 is surface-mount."
        },
        {
            "id": 43,
            "question": "When testing a functioning Silicon NPN transistor using the 'Diode Check' function of a Digital Multimeter (DMM), what reading is expected when connecting the RED (+) lead to the Base and the BLACK (-) lead to the Emitter?",
            "options": [
                "OL (Over-limit / Open Circuit)",
                "Approximately 0.6 V to 0.7 V forward voltage drop",
                "Zero ohms (dead short)",
                "A negative voltage reading (-0.7 V)"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: The Base-Emitter junction of an NPN transistor is a PN diode with P on the Base and N on the Emitter. Connecting the positive (red) meter lead to Base and negative (black) lead to Emitter forward-biases the junction, displaying its built-in forward potential of ~0.6 V to 0.7 V.\n• Why Other Choices are Incorrect: Reversing the leads produces OL (reverse bias); 0 V indicates a shorted junction."
        },
        {
            "id": 44,
            "question": "Why is the Fixed-Bias BJT configuration rarely used in commercial linear amplifier designs?",
            "options": [
                "It requires three separate DC power supply batteries",
                "Its operating Q-point is extremely unstable and sensitive to temperature changes and transistor beta variations",
                "It cannot conduct direct current (DC)",
                "Its input impedance is completely zero"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In Fixed-Bias, base current is fixed (I_B ≈ V_CC / R_B), making collector current directly dependent on beta: I_C = beta * I_B. Because beta varies widely with temperature (doubling over 50°C) and unit-to-unit manufacturing, the Q-point drifts severely toward saturation or cutoff.\n• Why Other Choices are Incorrect: Fixed-bias uses a single power supply and conducts DC normally."
        },
        {
            "id": 45,
            "question": "In an Emitter-Stabilized Bias circuit, how does the addition of the emitter resistor RE provide negative feedback to stabilize the Q-point?",
            "options": [
                "If IC increases, VE = IE*RE increases, reducing VBE and thus driving IB and IC back down",
                "If IC increases, RE bypasses collector current directly to ground",
                "RE forces the base voltage to increase proportionately with collector voltage",
                "RE cancels out the collector supply voltage V_CC"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: If temperature causes I_C to increase, emitter current I_E increases, raising the emitter voltage V_E = I_E * R_E. Since V_BE = V_B - V_E, an increase in V_E decreases V_BE, which reduces base current I_B, thereby opposing the increase in I_C and stabilizing the Q-point.\n• Why Other Choices are Incorrect: R_E does not bypass current to ground; it introduces negative degenerative feedback."
        },
        {
            "id": 46,
            "question": "What is the rule-of-thumb criterion for a Voltage-Divider Bias circuit to be considered 'stiff' (essentially beta-independent)?",
            "options": [
                "beta * R_E >= 10 * R_2",
                "R_2 >= 10 * beta * R_E",
                "beta * R_C <= R_1",
                "R_1 = R_2 = R_E"
            ],
            "answer": 0,
            "explanation": "• Why 'beta * R_E >= 10 * R_2' is Correct: If the input resistance looking into the base (R_in ≈ beta * R_E) is at least 10 times larger than the lower divider resistor R_2, the base current loading effect is negligible (< 10%), allowing the base voltage to be calculated simply as V_B ≈ V_CC * R_2 / (R_1 + R_2).\n• Why Other Choices are Incorrect: R_2 must be much smaller than beta * R_E to draw sufficient bleed current."
        },
        {
            "id": 47,
            "question": "When applying Thevenin's Theorem to the base circuit of a Voltage-Divider biased BJT, what are the equivalent Thevenin resistance (RTH) and voltage (VTH)?",
            "options": [
                "R_TH = R_1 + R_2, and V_TH = V_CC",
                "R_TH = R_1 || R_2 = (R_1 * R_2) / (R_1 + R_2), and V_TH = V_CC * R_2 / (R_1 + R_2)",
                "R_TH = R_1 - R_2, and V_TH = V_CC * R_1 / (R_1 + R_2)",
                "R_TH = R_C || R_E, and V_TH = V_BE"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Removing the transistor at the base terminal and shorting the DC supply V_CC to ground puts R_1 and R_2 in parallel: R_TH = R_1 || R_2 = (R_1 * R_2) / (R_1 + R_2). The open-circuit voltage across R_2 is the standard voltage divider: V_TH = V_CC * R_2 / (R_1 + R_2).\n• Why Other Choices are Incorrect: The resistors are in parallel to ground, not series."
        },
        {
            "id": 48,
            "question": "In a Collector-Feedback Bias circuit, how does the feedback resistor RF connected between collector and base provide bias stabilization?",
            "options": [
                "An increase in IC causes a greater drop across RC, lowering VC, which decreases IB and drives IC back down",
                "RF provides positive feedback to drive the transistor rapidly into saturation",
                "RF disconnects the collector from the DC supply when current flows",
                "RF causes base current to remain equal to collector current"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: Collector-Feedback utilizes negative voltage feedback. If I_C increases, the voltage drop across R_C increases, causing collector voltage V_C = V_CC - I_C' * R_C to drop. Because the base resistor R_F is tied directly to V_C, a lower V_C reduces base current I_B = (V_C - V_BE) / R_F, opposing the original rise in I_C.\n• Why Other Choices are Incorrect: The feedback is negative (degenerative), not positive."
        },
        {
            "id": 49,
            "question": "For a standard Common-Emitter Fixed-Bias configuration, what is the expression for the maximum collector saturation current (ICsat)?",
            "options": [
                "I_Csat = V_CC / R_B",
                "I_Csat ≈ V_CC / R_C",
                "I_Csat = V_BE / R_C",
                "I_Csat = beta * V_CC"
            ],
            "answer": 1,
            "explanation": "• Why 'I_Csat ≈ V_CC / R_C' is Correct: At saturation, the transistor acts as a closed switch between collector and emitter, making V_CE ≈ 0 V (or V_CE(sat) ≈ 0.2 V). Applying Ohm's law to the collector resistor yields I_Csat = (V_CC - V_CE(sat)) / R_C ≈ V_CC / R_C.\n• Why Other Choices are Incorrect: R_B limits base current, not collector saturation current."
        },
        {
            "id": 50,
            "question": "When a Common-Emitter BJT circuit is driven into the Cutoff state, what are the theoretical values of collector current (IC) and collector-to-emitter voltage (VCE)?",
            "options": [
                "I_C = I_Csat, and V_CE = 0 V",
                "I_C ≈ 0 mA, and V_CE = V_CC",
                "I_C = V_CC / R_C, and V_CE = 0.7 V",
                "I_C = beta * I_B, and V_CE = V_CC / 2"
            ],
            "answer": 1,
            "explanation": "• Why 'I_C ≈ 0 mA, and V_CE = V_CC' is Correct: In cutoff, the base-emitter junction is reverse-biased so I_B = 0 and I_C ≈ 0 mA (only negligible leakage I_CEO flows). With no current through collector resistor R_C, the voltage drop I_C * R_C is zero, causing V_CE to rise to the full supply voltage: V_CE = V_CC - (0)*R_C = V_CC.\n• Why Other Choices are Incorrect: I_C = I_Csat and V_CE ≈ 0 V describes Saturation."
        },
        {
            "id": 51,
            "question": "The word 'Transistor' is an engineering portmanteau (combination) of which two words describing its mode of operation during early development?",
            "options": [
                "Transmission and Varistor",
                "Transfer and Resistor (or Varistor)",
                "Transformer and Transistor",
                "Transit and Capacitor"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: The word 'Transistor' was coined by John R. Pierce at Bell Labs as a combination of 'Transfer' and 'Resistor' (or Transfer Varistor). It describes the fundamental device property of transferring an input signal current from a low-resistance forward-biased circuit to a high-resistance reverse-biased output circuit.\n• Why Other Choices are Incorrect: It does not originate from transmission, transformer, or transit."
        },
        {
            "id": 52,
            "question": "On the circuit schematic symbol for both NPN and PNP transistors, what universal rule governs the direction of the arrow on the emitter terminal relative to semiconductor material types?",
            "options": [
                "It always points from the negative N-type region to the positive P-type region",
                "It always points from the positive P-type region to the negative N-type region",
                "It always points towards the external circuit ground",
                "It always points toward the terminal with the largest physical surface area"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: The arrow in the transistor circuit symbol always indicates the direction of conventional current flow through the base-emitter junction and ALWAYS points from the positive P-type region to the negative N-type region—exactly the same as the arrow in a standard PN junction diode symbol.\n• Why Other Choices are Incorrect: Electron flow is from N to P, but schematic arrows indicate conventional current (P to N)."
        },
        {
            "id": 53,
            "question": "When operating a BJT in the linear active region, the base-emitter junction is forward-biased while the base-collector junction is reverse-biased. What is this specific standard biasing condition formally called?",
            "options": [
                "Reverse-forward bias",
                "Dual forward bias",
                "Forward-reverse bias",
                "Complementary bias"
            ],
            "answer": 2,
            "explanation": "• Why 'Forward-reverse bias' is Correct: Because the base-emitter junction must be forward-biased to inject carriers and the base-collector junction must be reverse-biased to collect them, this operational state is formally designated in textbook literature as 'forward-reverse bias'.\n• Why Other Choices are Incorrect: 'Reverse-forward bias' operates the transistor in inverted mode; 'dual forward bias' establishes saturation."
        },
        {
            "id": 54,
            "question": "What is the primary operational relationship between an NPN transistor and a PNP transistor?",
            "options": [
                "NPN transistors amplify only AC signals, while PNP transistors amplify only DC",
                "Their principles of operation are exactly the same; the only differences are their DC biasing voltages and power supply polarities",
                "NPN transistors are unipolar devices, whereas PNP transistors are bipolar devices",
                "PNP transistors do not require a forward-biased base-emitter junction"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: The principle of operation for PNP and NPN transistors is fundamentally identical. The only difference lies in their external biasing voltages and the polarity of their power supplies, which reverse current directions because electrons are majority carriers in NPN while holes are majority carriers in PNP.\n• Why Other Choices are Incorrect: Both are bipolar devices that amplify both AC and DC signals."
        },
        {
            "id": 55,
            "question": "In terms of semiconductor layer architecture, how are the three doped regions arranged in an NPN transistor versus a PNP transistor?",
            "options": [
                "NPN consists of two p regions separated by an n region; PNP consists of two n regions separated by a p region",
                "NPN consists of two n regions separated by a p region; PNP consists of two p regions separated by an n region",
                "NPN consists of three n regions in series; PNP consists of three p regions in series",
                "NPN and PNP both contain identical layers of intrinsic semiconductor material"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: An NPN transistor is constructed from two N-type semiconductor regions (Emitter and Collector) separated by a thin central P-type Base layer. Conversely, a PNP transistor is constructed from two P-type regions separated by a thin central N-type Base layer.\n• Why Other Choices are Incorrect: An NPN has P in the middle; a PNP has N in the middle."
        },
        {
            "id": 56,
            "question": "What are the specific technical designations of the two internal PN junctions within any Bipolar Junction Transistor structure?",
            "options": [
                "The gate-source junction and the drain-source junction",
                "The base-emitter junction and the base-collector junction",
                "The anode-cathode junction and the gate junction",
                "The primary forward junction and the secondary barrier junction"
            ],
            "answer": 1,
            "explanation": "• Why 'The base-emitter junction and the base-collector junction' is Correct: The PN junction joining the base region and the emitter region is called the base-emitter junction. The PN junction connecting the base region and the collector region is called the base-collector junction.\n• Why Other Choices are Incorrect: Gate, source, and drain apply to Field-Effect Transistors; anode and cathode apply to diodes and SCRs."
        },
        {
            "id": 57,
            "question": "Why are Bipolar Junction Transistors fundamentally described as 'current regulating devices' acting like current-controlled switches?",
            "options": [
                "Because they regulate voltage through internal mechanical contacts",
                "Because a small current flowing into or out of the base terminal controls and regulates a much larger collector current flowing from emitter to collector",
                "Because they store electrostatic charge in proportion to input frequency",
                "Because they convert alternating current into radio waves"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Bipolar transistors are current-regulating devices. The amount of current flowing through them from Emitter to Collector is directly proportional to the small biasing current injected into the base terminal (I_C = beta * I_B), allowing a small base signal to control a large load current like a sensitive electronic switch.\n• Why Other Choices are Incorrect: BJTs are solid-state semiconductor amplifiers without mechanical contacts or optical conversion."
        },
        {
            "id": 58,
            "question": "What common educational mnemonic is used to remember that the emitter schematic arrow of an NPN transistor points outwards away from the base?",
            "options": [
                "'Pointing iN Proudly' (PNP)",
                "'Not Pointing iN' (NPN)",
                "'Negative Positive Negative' (NPN)",
                "'Never Pull Negative' (NPN)"
            ],
            "answer": 1,
            "explanation": "• Why ''Not Pointing iN' (NPN)' is Correct: A widely used mnemonic for the NPN transistor symbol is 'Not Pointing iN', reminding learners that the arrow points outward on the emitter lead away from the base line. For the PNP transistor, the mnemonic is 'Pointing iN Proudly', where the arrow points inward toward the base.\n• Why Other Choices are Incorrect: 'Pointing iN Proudly' is the mnemonic for PNP."
        },
        {
            "id": 59,
            "question": "For a PNP transistor operating under active forward-reverse bias, what are the required terminal voltage relationships?",
            "options": [
                "The Collector must be more positive than the Base, and the Emitter must be more negative than the Base",
                "The Emitter must be more positive than the Base (V_EB > 0), and the Collector must be more negative than the Base (V_CB < 0)",
                "All three terminals must be maintained at the exact same ground voltage",
                "The Base must be at the highest positive potential of all three terminals"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In a PNP transistor, the Emitter is P-type and Base is N-type, so forward-biasing the Base-Emitter junction requires the Emitter to be at a higher potential than the Base (V_EB ≈ 0.7 V). The Collector is P-type, so reverse-biasing the Base-Collector junction requires the Collector to be more negative than the Base (V_CB < 0 V).\n• Why Other Choices are Incorrect: Setting Base higher than Emitter reverse-biases the PNP emitter junction into cutoff."
        },
        {
            "id": 60,
            "question": "What component physically establishes the external electrical connection between each of the three internal semiconductor regions of a BJT and the external circuit?",
            "options": [
                "Optical waveguides",
                "Ohmic wire leads connected to each of the three regions",
                "Capacitive dielectric plates",
                "Inductive copper coils"
            ],
            "answer": 1,
            "explanation": "• Why 'Ohmic wire leads connected to each of the three regions' is Correct: A wire lead connects directly to each of the three doped regions (Emitter, Base, Collector) to form the external terminal pins of the transistor package.\n• Why Other Choices are Incorrect: BJTs are three-terminal electronic devices connected by metallic wire leads, not optical or capacitive elements."
        },
        {
            "id": 61,
            "question": "Which of the following statements correctly summarizes the fundamental gain characteristics of the Common Base (CB) transistor configuration?",
            "options": [
                "It has both Current and Voltage Gain",
                "It has Current Gain but no Voltage Gain",
                "It has Voltage Gain but no Current Gain",
                "It has neither Voltage Gain nor Current Gain"
            ],
            "answer": 2,
            "explanation": "• Why 'It has Voltage Gain but no Current Gain' is Correct: In the Common Base configuration, output current is collector current and input is emitter current. Since alpha = IC / IE < 1, there is no current amplification (Current Gain is Low / < 1), but it provides High Voltage Gain.\n• Why Other Choices are Incorrect: Common Emitter has both current and voltage gain; Common Collector has current gain but no voltage gain."
        },
        {
            "id": 62,
            "question": "Which BJT amplifier configuration is uniquely capable of providing BOTH current gain and voltage gain simultaneously?",
            "options": [
                "Common Base (CB)",
                "Common Emitter (CE)",
                "Common Collector (CC)",
                "Cascode amplifier only"
            ],
            "answer": 1,
            "explanation": "• Why 'Common Emitter (CE)' is Correct: The Common Emitter configuration provides medium-to-high voltage gain (Av = -RC / re) AND medium-to-high current gain (Ai ≈ beta). Because it amplifies both current and voltage, it produces the highest overall Power Gain of all three configurations.\n• Why Other Choices are Incorrect: Common Base lacks current gain; Common Collector lacks voltage gain."
        },
        {
            "id": 63,
            "question": "Which BJT configuration is characterized as having 'Current Gain but no Voltage Gain'?",
            "options": [
                "Common Base (CB)",
                "Common Emitter (CE)",
                "Common Collector (CC / Emitter-Follower)",
                "Common Gate"
            ],
            "answer": 2,
            "explanation": "• Why 'Common Collector (CC / Emitter-Follower)' is Correct: The Common Collector configuration has a voltage gain of approximately unity (Av ≤ 1, hence 'no voltage gain'), but offers high current gain (Ai ≈ beta + 1), making it ideal as a current amplifier and buffer.\n• Why Other Choices are Incorrect: Common Base has voltage gain but no current gain."
        },
        {
            "id": 64,
            "question": "According to the comparative characteristics of transistor configurations, which configuration delivers the highest overall Power Gain?",
            "options": [
                "Common Base (Low power gain)",
                "Common Collector (Medium power gain)",
                "Common Emitter (Very High power gain)",
                "All three configurations deliver identical power gain"
            ],
            "answer": 2,
            "explanation": "• Why 'Common Emitter (Very High power gain)' is Correct: Power gain is the product of voltage gain and current gain (Ap = Av * Ai). Because the Common Emitter configuration provides substantial gain for both voltage and current, its overall power gain is rated as 'Very High' (typically 10,000 to 50,000+), exceeding CB (Low) and CC (Medium).\n• Why Other Choices are Incorrect: CB lacks current gain and CC lacks voltage gain, so their power gains are substantially lower."
        },
        {
            "id": 65,
            "question": "Which transistor configuration exhibits the lowest input impedance and the highest output impedance?",
            "options": [
                "Common Base (Low input Z, Very High output Z)",
                "Common Emitter (Medium input Z, High output Z)",
                "Common Collector (High input Z, Low output Z)",
                "Emitter-Follower (High input Z, Low output Z)"
            ],
            "answer": 0,
            "explanation": "• Why 'Common Base' is Correct: In Common Base, the input is the forward-biased base-emitter junction (yielding Low input impedance, Zin ≈ re ≈ 10 to 50 ohms) and the output is the reverse-biased collector-base junction (yielding Very High output impedance, Zout ≈ 1 MΩ to 2 MΩ).\n• Why Other Choices are Incorrect: Common Collector has high input Z and low output Z."
        },
        {
            "id": 66,
            "question": "Which BJT configuration exhibits a High input impedance and a Low output impedance, making it optimal for impedance matching between circuit stages?",
            "options": [
                "Common Base",
                "Common Emitter",
                "Common Collector (Emitter-Follower)",
                "Inverted Active Base"
            ],
            "answer": 2,
            "explanation": "• Why 'Common Collector' is Correct: The Common Collector configuration presents a High input impedance (Zin ≈ beta * RE) and a Low output impedance (Zout ≈ re + RS / beta), allowing it to match high-impedance signal sources to low-impedance loads without signal attenuation.\n• Why Other Choices are Incorrect: Common Base has low input and high output impedance."
        },
        {
            "id": 67,
            "question": "What is the signal phase shift between input and output AC waveforms for each of the three BJT configurations (Common Base, Common Emitter, Common Collector)?",
            "options": [
                "CB: 180°, CE: 0°, CC: 180°",
                "CB: 0°, CE: 180°, CC: 0°",
                "CB: 90°, CE: 180°, CC: 90°",
                "CB: 0°, CE: 0°, CC: 0°"
            ],
            "answer": 1,
            "explanation": "• Why 'CB: 0°, CE: 180°, CC: 0°' is Correct: The Common Emitter is the only inverting configuration, producing a 180° phase inversion between base input and collector output. Both Common Base and Common Collector are non-inverting, producing a 0° phase shift between input and output.\n• Why Other Choices are Incorrect: CE is always 180°, never 0°."
        },
        {
            "id": 68,
            "question": "How do the voltage gains of the three transistor configurations rank relative to one another in the comparative characteristics table?",
            "options": [
                "Common Base: High, Common Emitter: Medium, Common Collector: Low",
                "Common Base: Low, Common Emitter: High, Common Collector: Medium",
                "Common Base: Medium, Common Emitter: Low, Common Collector: High",
                "All three configurations have identical voltage gain"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: In the standard textbook characteristics table: Common Base has High voltage gain; Common Emitter has Medium voltage gain; and Common Collector has Low voltage gain (Av ≤ 1).\n• Why Other Choices are Incorrect: Common Collector never provides high voltage gain."
        },
        {
            "id": 69,
            "question": "How do the current gains of the three transistor configurations rank relative to one another in the comparative characteristics table?",
            "options": [
                "Common Base: High, Common Emitter: Medium, Common Collector: Low",
                "Common Base: Low, Common Emitter: Medium, Common Collector: High",
                "Common Base: Medium, Common Emitter: High, Common Collector: Low",
                "Common Base: Low, Common Emitter: Low, Common Collector: Medium"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Common Base current gain is Low (alpha < 1); Common Emitter current gain is Medium (beta, typically 50 to 300); and Common Collector current gain is High (beta + 1, the largest current gain of all three).\n• Why Other Choices are Incorrect: Common Base has the lowest current gain, not the highest."
        },
        {
            "id": 70,
            "question": "How does the output impedance rank across the three bipolar transistor configurations?",
            "options": [
                "Common Collector (Low), Common Emitter (High), Common Base (Very High)",
                "Common Collector (High), Common Emitter (Low), Common Base (Very High)",
                "Common Collector (Very High), Common Emitter (High), Common Base (Low)",
                "Common Collector (Medium), Common Emitter (Medium), Common Base (Medium)"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: Output impedance ranks as: Common Collector = Low (tens of ohms), Common Emitter = High (tens of kilohms), and Common Base = Very High (hundreds of kilohms to megohms).\n• Why Other Choices are Incorrect: Common Collector has the lowest output impedance, which is why it drives low-impedance loads effectively."
        },
        {
            "id": 71,
            "question": "How does input impedance rank across the three bipolar transistor configurations?",
            "options": [
                "Common Base (Low), Common Emitter (Medium), Common Collector (High)",
                "Common Base (High), Common Emitter (Medium), Common Collector (Low)",
                "Common Base (Medium), Common Emitter (Low), Common Collector (High)",
                "Common Base (Very High), Common Emitter (High), Common Collector (Low)"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: Input impedance ranks as: Common Base = Low (10-50 Ω), Common Emitter = Medium (1-2 kΩ), and Common Collector = High (100-300+ kΩ).\n• Why Other Choices are Incorrect: Common Base input is a forward-biased junction to ground, giving it the lowest input impedance."
        },
        {
            "id": 72,
            "question": "Why is the Common Collector configuration commonly referred to as the 'Emitter-Follower'?",
            "options": [
                "Because the collector physically follows the base across the breadboard",
                "Because the output voltage at the emitter follows the input AC voltage at the base almost exactly in amplitude (Av ≈ 1) and phase (0°)",
                "Because the emitter current follows only negative DC supply rails",
                "Because the emitter is connected in series with the collector"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In Common Collector, the load is connected to the emitter. Since V_E = V_B - V_BE, the emitter AC voltage closely tracks (follows) the input base AC voltage with zero phase shift and nearly unity gain (Av ≈ 1), giving rise to the name 'Emitter-Follower'.\n• Why Other Choices are Incorrect: It has nothing to do with physical breadboard layout or negative rails."
        },
        {
            "id": 73,
            "question": "If an NPN transistor is replaced with a PNP transistor in a Common Emitter amplifier circuit, what happens to the gain calculations and AC phase inversion?",
            "options": [
                "The AC phase shift becomes 0° and all gains drop to zero",
                "The circuit no longer amplifies AC signals",
                "The calculations and 180° phase inversion remain exactly the same; only DC voltage polarities and current directions are reversed",
                "The voltage gain doubles while current gain is halved"
            ],
            "answer": 2,
            "explanation": "• Why this is Correct: Both NPN and PNP BJTs obey identical small-signal AC equations. A PNP Common Emitter amplifier still produces a 180° phase inversion between base and collector and provides the same voltage, current, and power gains. The only practical difference is that DC power supplies and biasing voltages must be reversed in polarity.\n• Why Other Choices are Incorrect: AC signal behavior and amplification magnitude are identical."
        },
        {
            "id": 74,
            "question": "Which of the three BJT configurations is most suitable for driving an 8-ohm audio loudspeaker from a preceding high-impedance voltage amplifier stage?",
            "options": [
                "Common Base, due to its very high output impedance",
                "Common Collector (Emitter-Follower), due to its low output impedance and high current driving capability",
                "Common Emitter without an emitter resistor",
                "Direct connection to the power supply without any transistor"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: An 8-ohm loudspeaker is a very low-impedance load. Connecting it directly to a high-impedance voltage stage would cause massive signal loading and attenuation. A Common Collector stage acts as an impedance-matching buffer with low output impedance and high current gain to drive the speaker efficiently.\n• Why Other Choices are Incorrect: Common Base has very high output impedance, which would cause severe mismatch."
        },
        {
            "id": 75,
            "question": "Why does a BJT circuit require one terminal to be 'common' between the input and output circuit ports?",
            "options": [
                "Because transistors have only three terminals, so one terminal must serve as the shared reference for both the two-terminal input port and two-terminal output port",
                "Because four-terminal transistors are illegal under international standards",
                "Because the collector and emitter must always be connected together",
                "Because the base terminal can never conduct AC signals"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: Any standard electronic two-port network requires four connection points (two for input, two for output). Because a BJT is a three-terminal device, one terminal must be designated as 'common' (shared) between the input and output loops to complete both circuits.\n• Why Other Choices are Incorrect: A two-port network simply requires sharing one terminal to form input and output pairs."
        },
        {
            "id": 76,
            "question": "In the Common Emitter (CE) configuration, where are the input signal applied and the output signal taken from?",
            "options": [
                "Input is applied between Base and Collector; Output is taken between Emitter and Collector",
                "Input is applied between Base and Emitter; Output is taken between Collector and Emitter",
                "Input is applied between Collector and Emitter; Output is taken between Base and Emitter",
                "Input is applied between Base and Ground; Output is taken from the power supply rail"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In the Common Emitter (grounded emitter) configuration, the input signal is injected between the Base and Emitter, while the amplified output signal is extracted across the Collector and Emitter.\n• Why Other Choices are Incorrect: Connecting input to Collector and Base represents Common Collector or inverted configurations."
        },
        {
            "id": 77,
            "question": "Why is the Common Emitter configuration regarded as the 'normal' and most widely used circuit arrangement for bipolar transistor amplifiers?",
            "options": [
                "Because it is the only configuration that does not require semiconductor doping",
                "Because it provides both significant voltage and current gain, producing the highest overall power gain",
                "Because it eliminates the need for a DC collector power supply",
                "Because its output waveform has zero phase shift with no distortion"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: The Common Emitter configuration is the industry standard 'workhorse' amplifier because it is the only configuration capable of delivering both current and voltage amplification simultaneously, yielding the highest overall power gain of all three topologies.\n• Why Other Choices are Incorrect: It requires DC power and produces a 180° phase inversion."
        },
        {
            "id": 78,
            "question": "What is the physical carrier interpretation if a bipolar transistor has a DC current gain Beta (β) equal to 100?",
            "options": [
                "100 electrons flow from the base terminal for every 1 electron flowing between emitter and collector",
                "One electron will flow from the base terminal for every 100 electrons flowing between the emitter-collector terminal",
                "The collector voltage is exactly 100 times larger than the base voltage",
                "The base resistance is 100 times smaller than the emitter resistance"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Since Beta = I_C / I_B = 100, for every 1 unit of base current (e.g., 1 electron flowing into the base to recombine), 100 units of current (100 electrons) successfully cross from emitter to collector.\n• Why Other Choices are Incorrect: Base current is 100 times smaller than collector current, not 100 times larger."
        },
        {
            "id": 79,
            "question": "What is the typical range of current gain Beta (β) for most general-purpose small-signal bipolar junction transistors?",
            "options": [
                "0.1 to 0.99",
                "1 to 5",
                "20 to 200 (or up to 300-400)",
                "1,000 to 10,000"
            ],
            "answer": 2,
            "explanation": "• Why '20 to 200 (or up to 300-400)' is Correct: For standard general-purpose silicon BJTs (such as the 2N3904 or BC547), DC Beta (h_FE) typically ranges between 20 and 200, frequently reaching 300 to 400 under optimum collector current levels.\n• Why Other Choices are Incorrect: Values below 1 describe alpha; values above 1,000 are typical of Darlington pairs."
        },
        {
            "id": 80,
            "question": "(Canvas LMS Example 1) A bipolar NPN transistor has a DC current gain Beta of 200. What base current Ib is required to switch a resistive collector load current of 4 mA?",
            "options": [
                "2 μA",
                "20 μA",
                "50 μA",
                "800 μA"
            ],
            "answer": 1,
            "explanation": "• Why '20 μA' is Correct: Using the relationship I_C = beta * I_B, solve for base current: I_B = I_C / beta = 4 mA / 200 = 0.020 mA = 20 μA.\n• Why Other Choices are Incorrect: 4 mA * 200 = 800 mA (multiplying instead of dividing); 4 mA / 20 = 200 μA."
        },
        {
            "id": 81,
            "question": "For a standard Silicon NPN transistor in a Common Emitter circuit to conduct collector current, what condition must be satisfied regarding Collector voltage (Vc) relative to Emitter voltage (Ve)?",
            "options": [
                "Vc must be equal to Ve",
                "Vc must be more negative than Ve",
                "Vc must be greater and positive with respect to Ve (V_CE > 0)",
                "Vc must be at ground potential while Ve is connected to +V_CC"
            ],
            "answer": 2,
            "explanation": "• Why this is Correct: To maintain forward-reverse bias in an NPN transistor, the Collector (N-type) must be at a higher positive potential than the Emitter (N-type) and Base (P-type), ensuring V_CE > 0 to sweep electrons across the reverse-biased collector junction.\n• Why Other Choices are Incorrect: If Vc is negative with respect to Ve, the collector junction is forward-biased and the transistor will not operate in active mode."
        },
        {
            "id": 82,
            "question": "What is the minimum threshold voltage that must be applied to the Base terminal of a Silicon NPN transistor for it to begin conducting base current?",
            "options": [
                "Approximately 0.1 V",
                "Approximately 0.3 V",
                "Approximately 0.7 V (one forward diode drop)",
                "Approximately 2.0 V"
            ],
            "answer": 2,
            "explanation": "• Why 'Approximately 0.7 V' is Correct: Because the input characteristics of an NPN transistor correspond to a forward-biased silicon PN diode, the base-to-emitter voltage (V_BE) must exceed the built-in barrier potential of approximately 0.7 V for significant base current to flow.\n• Why Other Choices are Incorrect: 0.3 V is the threshold for Germanium devices; 0.1 V is for Schottky diodes."
        },
        {
            "id": 83,
            "question": "In a base-biased Common Emitter circuit with base supply voltage Vb, input base resistor Rb, and silicon base-emitter drop Vbe (≈ 0.7 V), which formula calculates base current Ib?",
            "options": [
                "I_B = (V_b + V_be) / R_b",
                "I_B = (V_b - V_be) / R_b",
                "I_B = V_b / (R_b * V_be)",
                "I_B = R_b / (V_b - V_be)"
            ],
            "answer": 1,
            "explanation": "• Why 'I_B = (V_b - V_be) / R_b' is Correct: Applying Kirchhoff's Voltage Law to the base-emitter input loop: V_b - I_B * R_b - V_be = 0. Solving for base current gives I_B = (V_b - V_be) / R_b.\n• Why Other Choices are Incorrect: Adding V_be or multiplying violates Ohm's law and KVL."
        },
        {
            "id": 84,
            "question": "(Canvas LMS Example 2) An NPN transistor circuit has a DC base bias voltage Vb = 10 V and an input base resistor Rb = 100 kΩ. Assuming a standard silicon Vbe = 0.7 V, what is the base current Ib entering the transistor?",
            "options": [
                "100 μA",
                "93 μA",
                "10.7 μA",
                "0.93 mA"
            ],
            "answer": 1,
            "explanation": "• Why '93 μA' is Correct: Using I_B = (V_b - V_be) / R_b: I_B = (10 V - 0.7 V) / 100 kΩ = 9.3 V / 100,000 Ω = 0.000093 A = 0.093 mA = 93 μA.\n• Why Other Choices are Incorrect: 10 V / 100 kΩ = 100 μA ignores the 0.7 V diode drop; (10 + 0.7) / 100 kΩ = 107 μA adds rather than subtracts."
        },
        {
            "id": 85,
            "question": "If the transistor in Example 2 (with Ib = 93 μA) has a current gain Beta = 100, what will be the resulting collector current Ic in the linear active region?",
            "options": [
                "0.93 mA",
                "9.3 mA",
                "93 mA",
                "930 mA"
            ],
            "answer": 1,
            "explanation": "• Why '9.3 mA' is Correct: Using I_C = beta * I_B: I_C = 100 * 93 μA = 9,300 μA = 9.3 mA.\n• Why Other Choices are Incorrect: 93 μA / 100 = 0.93 μA; 93 mA corresponds to beta = 1000."
        },
        {
            "id": 86,
            "question": "How do base-emitter voltage (Vbe) and collector current (Ic) behave as base current (Ib) is gradually increased in a conducting BJT?",
            "options": [
                "V_be increases linearly while I_C stays constant",
                "V_be increases very slowly toward ~0.7 V, while I_C rises exponentially",
                "V_be drops to zero while I_C decreases",
                "Both V_be and I_C remain completely fixed"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Because the base-emitter junction has exponential PN-junction diode characteristics, as I_B increases, V_be increases only slightly (clamped around 0.7 V), while collector current I_C = I_S * exp(V_be / V_T) rises exponentially with small changes in V_be.\n• Why Other Choices are Incorrect: Diode voltage does not increase linearly; it clamps logarithmically near 0.7 V."
        },
        {
            "id": 87,
            "question": "In a Common Emitter amplifier circuit, where is the external load resistance (RL or RC) connected?",
            "options": [
                "In series with the Base terminal",
                "In series with the Collector terminal",
                "Directly between Base and Emitter",
                "In parallel with the input AC signal source only"
            ],
            "answer": 1,
            "explanation": "• Why 'In series with the Collector terminal' is Correct: In a Common Emitter amplifier, the collector load resistor (R_C or R_L) is connected in series between the DC positive supply (V_CC) and the collector terminal, converting the amplified collector current variations into an output voltage swing.\n• Why Other Choices are Incorrect: Resistors in the base branch are current-limiting bias resistors, not collector load resistors."
        },
        {
            "id": 88,
            "question": "Comparing the Common Emitter (CE) configuration with the Common Base (CB) configuration, which statement accurately reflects their relative performance?",
            "options": [
                "CE has lower input impedance and higher voltage gain than CB",
                "CE has greater input impedance, current gain, and power gain than CB, but lower voltage gain",
                "CE has lower power gain and higher output impedance than CB",
                "CE and CB have identical input impedance and identical phase shift"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Common Emitter has a higher input impedance (Medium vs Low), significantly higher current gain (beta vs alpha < 1), and much higher power gain (Very High vs Low) than Common Base, though its voltage gain is somewhat lower than the extremely high voltage gain of CB.\n• Why Other Choices are Incorrect: CB has lower input impedance and higher voltage gain than CE."
        },
        {
            "id": 89,
            "question": "An NPN transistor with beta = 150 has a measured emitter current IE = 3.02 mA. What is the approximate base current IB?",
            "options": [
                "20 μA",
                "30 μA",
                "200 μA",
                "450 μA"
            ],
            "answer": 0,
            "explanation": "• Why '20 μA' is Correct: Since I_E = (beta + 1) * I_B: I_B = I_E / (beta + 1) = 3.02 mA / 151 = 0.020 mA = 20 μA.\n• Why Other Choices are Incorrect: 3.02 mA / 100 = 30 μA; direct division gives exactly 20 μA."
        },
        {
            "id": 90,
            "question": "Why does a 180° phase inversion occur in a Common Emitter amplifier when the input AC voltage increases positively?",
            "options": [
                "A positive input swing increases IB and IC, which increases the voltage drop across RC, pulling the collector voltage (VC = VCC - IC*RC) downward",
                "The AC input signal bypasses the transistor directly through the emitter",
                "The collector supply voltage reverses polarity during positive half-cycles",
                "The transistor turns completely off during every positive half-cycle"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: When input base voltage increases, base current I_B rises, causing collector current I_C to increase. The larger I_C creates a greater voltage drop across the collector resistor (V_RC = I_C * R_C). Since V_C = V_CC - I_C * R_C, this pulls collector output voltage downward toward ground, creating an inverted (180° out-of-phase) output waveform.\n• Why Other Choices are Incorrect: V_CC does not reverse polarity, and the transistor does not turn off."
        },
        {
            "id": 91,
            "question": "In the Common Base (CB) configuration, where is the input AC signal injected and from where is the output signal extracted?",
            "options": [
                "Input is applied between Base and Collector; Output is taken between Emitter and Collector",
                "Input is applied between Base and Emitter; Output is taken between Base and Collector",
                "Input is applied between Emitter and Collector; Output is taken between Base and Emitter",
                "Input is applied to the Collector; Output is taken from the Base"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In the Common Base (grounded base) configuration, the input signal is applied between the Base and Emitter terminals, while the amplified output signal is taken between the Base and Collector terminals, with the Base serving as the common reference point.\n• Why Other Choices are Incorrect: Taking output from the emitter corresponds to Common Collector."
        },
        {
            "id": 92,
            "question": "Why does the Common Base transistor configuration have a current gain of unity (1) or less (α ≤ 1)?",
            "options": [
                "Because collector current is the sum of emitter and base currents",
                "Because the input emitter current is the sum of collector and base currents (Ie = Ic + Ib), making output collector current strictly less than input emitter current",
                "Because the base terminal absorbs 90% of the injected charge carriers",
                "Because the collector terminal is kept at zero volts DC"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In Common Base, input current is emitter current and output current is collector current. Since I_E = I_C + I_B, collector current is slightly less than emitter current by the small amount of base recombination current (I_B), yielding alpha = I_C / I_E < 1 (typically 0.95 to 0.998). Thus, the circuit attenuates current.\n• Why Other Choices are Incorrect: Base current absorbs only 1-5% of carriers, not 90%."
        },
        {
            "id": 93,
            "question": "What is the phase relationship between input voltage (Vin) and output voltage (Vout) in a Common Base amplifier?",
            "options": [
                "Vin and Vout are 180° out-of-phase (inverted)",
                "Vin and Vout are in-phase (0° phase shift)",
                "Vin and Vout are 90° out-of-phase",
                "Vin and Vout are 270° out-of-phase"
            ],
            "answer": 1,
            "explanation": "• Why 'Vin and Vout are in-phase (0° phase shift)' is Correct: The Common Base configuration is a non-inverting voltage amplifier. When the input voltage at the emitter rises positively, V_EB decreases, reducing I_E and I_C. The decreased I_C reduces the drop across load resistor R_L, causing collector voltage V_C to swing positively, exactly in-phase (0° shift) with the input.\n• Why Other Choices are Incorrect: Only Common Emitter inverts by 180°."
        },
        {
            "id": 94,
            "question": "According to the Canvas LMS lecture module, what semiconductor device analogy best describes the output characteristics of a Common Base transistor?",
            "options": [
                "A forward-biased Zener diode",
                "An illuminated photo-diode",
                "A backward diode",
                "A light-emitting diode (LED)"
            ],
            "answer": 1,
            "explanation": "• Why 'An illuminated photo-diode' is Correct: In the Common Base configuration, the input characteristics resemble a forward-biased PN diode, while the output characteristics (IC vs VCB curves for fixed IE values) closely resemble an illuminated photo-diode, functioning as a constant current source where collector current is determined by injected emitter current rather than collector voltage.\n• Why Other Choices are Incorrect: Zener diodes maintain constant breakdown voltage; LEDs emit light under forward bias."
        },
        {
            "id": 95,
            "question": "What is the term given to the ratio of load resistance (RL) to input resistance (Rin) in a Common Base amplifier circuit?",
            "options": [
                "Current Gain",
                "Resistance Gain",
                "Transconductance Gain",
                "Impedance Reflection Factor"
            ],
            "answer": 1,
            "explanation": "• Why 'Resistance Gain' is Correct: In Common Base analysis, the ratio of the output load resistance to the input resistance (R_L / R_in) is formally termed the 'Resistance Gain'. Because R_in is very small (~20 Ω) and R_L is large (~kΩ), this ratio is very large.\n• Why Other Choices are Incorrect: Current gain is alpha; transconductance is gm."
        },
        {
            "id": 96,
            "question": "How is the overall voltage gain (Av) of a Common Base amplifier mathematically expressed in terms of current gain and resistance gain?",
            "options": [
                "Av = alpha + (RL / Rin)",
                "Av = alpha * (RL / Rin) = (Ic / Ie) * (RL / Rin)",
                "Av = (Rin / RL) / alpha",
                "Av = beta * (Rin / RL)"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Voltage gain is defined as V_out / V_in = (I_c * R_L) / (I_e * R_in) = (I_c / I_e) * (R_L / R_in) = alpha * (Resistance Gain). Even though alpha < 1, the massive Resistance Gain produces a very high voltage gain.\n• Why Other Choices are Incorrect: Voltage gain is the product of current gain and resistance ratio, not sum or quotient."
        },
        {
            "id": 97,
            "question": "A Common Base amplifier has an input resistance Rin = 20 Ω, a collector load resistor RL = 5 kΩ, and a common-base current gain α = 0.98. What is the voltage gain Av?",
            "options": [
                "2.45",
                "25",
                "245",
                "250"
            ],
            "answer": 2,
            "explanation": "• Why '245' is Correct: First calculate the resistance gain: R_L / R_in = 5,000 Ω / 20 Ω = 250. Then calculate voltage gain: A_v = alpha * (R_L / R_in) = 0.98 * 250 = 245.\n• Why Other Choices are Incorrect: 250 ignores alpha; 2.45 has an incorrect decimal placement."
        },
        {
            "id": 98,
            "question": "Why is the Common Base configuration widely utilized in radio frequency (RF) and VHF/UHF amplifier circuits?",
            "options": [
                "Because it provides the highest audio current amplification",
                "Because the grounded base acts as an electrostatic shield between input (emitter) and output (collector), eliminating Miller feedback capacitance and providing excellent high-frequency response",
                "Because it operates without any DC power supply",
                "Because it converts RF signals directly into mechanical vibrations"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In Common Base, the grounded base separates the input and output circuits, acting as an electrostatic shield. This virtually eliminates collector-to-emitter capacitive feedback (the Miller effect), preventing self-oscillation and giving the CB amplifier superior high-frequency bandwidth.\n• Why Other Choices are Incorrect: CB has no current gain, so it is not used for current amplification."
        },
        {
            "id": 99,
            "question": "Which of the following is another classic practical application of the Common Base amplifier circuit mentioned in the Canvas LMS module?",
            "options": [
                "Microphone pre-amplifier (matching very low-impedance dynamic microphones)",
                "High-power audio speaker output stage",
                "Computer digital clock memory storage",
                "DC battery charger regulator"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: Dynamic moving-coil microphones typically have very low output impedance (around 20-50 Ω). Because the Common Base configuration has an inherently low input impedance (Z_in ≈ r_e ≈ 10-50 Ω), it matches the low impedance of the microphone without requiring a transformer.\n• Why Other Choices are Incorrect: Driving speakers requires low output impedance (Common Collector)."
        },
        {
            "id": 100,
            "question": "If a Common Base amplifier has Rin = 25 Ω and RL = 10 kΩ, what is the value of its 'Resistance Gain'?",
            "options": [
                "25",
                "40",
                "400",
                "2,500"
            ],
            "answer": 2,
            "explanation": "• Why '400' is Correct: Resistance Gain is defined as R_L / R_in = 10,000 Ω / 25 Ω = 400.\n• Why Other Choices are Incorrect: 10,000 / 250 = 40; 25 * 100 = 2,500."
        },
        {
            "id": 101,
            "question": "Why is the Common Base configuration rarely used as a general-purpose voltage amplifier in multi-stage audio systems?",
            "options": [
                "Because its low input impedance severely loads preceding stages, and its lack of current gain makes cascading difficult without matching transformers",
                "Because it can only amplify negative half-cycles of AC signals",
                "Because it produces excessive 180° phase inversion distortion",
                "Because its maximum operating temperature is 0°C"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: General audio amplifiers require moderate-to-high input impedance to avoid loading prior voltage stages. The very low input impedance of CB (10-50 Ω) and lack of current gain (α < 1) mean cascading multiple CB stages directly yields poor overall gain.\n• Why Other Choices are Incorrect: CB has zero phase shift (non-inverting) and handles full AC cycles normally."
        },
        {
            "id": 102,
            "question": "In a Common Base circuit, if the emitter current IE is measured at 5.0 mA and alpha is 0.99, what are the collector current IC and base current IB?",
            "options": [
                "IC = 4.95 mA, and IB = 0.05 mA (50 μA)",
                "IC = 5.05 mA, and IB = 0.5 mA",
                "IC = 0.05 mA, and IB = 4.95 mA",
                "IC = 4.95 mA, and IB = 0 mA"
            ],
            "answer": 0,
            "explanation": "• Why 'IC = 4.95 mA, and IB = 0.05 mA (50 μA)' is Correct: I_C = alpha * I_E = 0.99 * 5.0 mA = 4.95 mA. Then from KCL: I_B = I_E - I_C = 5.0 mA - 4.95 mA = 0.05 mA = 50 μA.\n• Why Other Choices are Incorrect: I_C cannot exceed I_E; I_B cannot be zero in an active BJT."
        },
        {
            "id": 103,
            "question": "What is the physical connection of the Base terminal in a practical Common Base circuit?",
            "options": [
                "It must always float without any electrical connection",
                "It is connected directly to ground or AC-grounded through a capacitor to a fixed DC reference voltage",
                "It must be wired directly to the AC output load resistor",
                "It is connected in series with the input AC signal generator"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In Common Base circuits, the base terminal is connected directly to circuit ground (in dual-supply circuits) or held at a fixed DC reference voltage with a bypass capacitor connecting it to ground for AC signals.\n• Why Other Choices are Incorrect: A floating base places the transistor in cutoff; connecting base to the signal generator forms Common Emitter or Common Collector."
        },
        {
            "id": 104,
            "question": "How does the Common Base circuit behave with respect to signal currents versus signal voltages?",
            "options": [
                "It acts as a current amplifier and voltage attenuator",
                "It acts as a current attenuator (or unity buffer) and a high voltage amplifier",
                "It attenuates both current and voltage signals",
                "It amplifies both current and voltage equally"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Because alpha < 1, output current is slightly smaller than input current (current attenuation). However, because output resistance is vastly higher than input resistance, it acts as a very high voltage amplifier.\n• Why Other Choices are Incorrect: CE amplifies both; CC amplifies current while attenuating voltage."
        },
        {
            "id": 105,
            "question": "Comparing all three BJT configurations, which one provides the best high-frequency performance and why?",
            "options": [
                "Common Collector, because it has no voltage gain",
                "Common Base, because the grounded base eliminates capacitive Miller feedback between input and output",
                "Common Emitter, because it has 180° phase inversion",
                "All three configurations have identical high-frequency cutoff frequencies"
            ],
            "answer": 1,
            "explanation": "• Why 'Common Base' is Correct: In Common Emitter, the collector-base capacitance is amplified by the voltage gain (Miller Effect), severely limiting high-frequency bandwidth. In Common Base, the base is grounded, shielding the input emitter from output collector capacitance, giving CB the highest cutoff frequency and best RF performance.\n• Why Other Choices are Incorrect: Common Emitter suffers from the Miller effect at high frequencies."
        },
        {
            "id": 106,
            "question": "In the Common Collector (CC) circuit configuration, how are the input and output AC signals connected to the transistor?",
            "options": [
                "Input is connected to the Emitter; Output is taken from the Collector",
                "Input is connected directly to the Base terminal; Output is taken from across the Emitter load resistance",
                "Input is connected to the Collector; Output is taken from the Base",
                "Both input and output are connected directly to the Base terminal"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In the Common Collector configuration, the input AC signal is fed directly into the Base terminal, and the output signal is taken across the Emitter load resistance (RE or RL), with the Collector being common to both via the DC power supply.\n• Why Other Choices are Incorrect: Taking output from the collector is Common Emitter or Common Base."
        },
        {
            "id": 107,
            "question": "Why is the Collector terminal considered 'common' to both the input and output in a Common Collector circuit even if it is connected to a positive supply rail (VCC)?",
            "options": [
                "Because DC power supply rails act as an effective AC ground (zero AC potential), making the collector common to both circuits for AC signals",
                "Because the collector is physically melted to the chassis ground during manufacture",
                "Because no DC voltage is allowed on the collector lead",
                "Because the collector terminal is left floating without any wire connection"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: In small-signal AC analysis, ideal DC power supplies (V_CC) present zero internal impedance, acting as an AC ground. Since the collector is connected directly to V_CC, it is at AC ground potential and serves as the common return terminal for both input and output loops.\n• Why Other Choices are Incorrect: The collector is not physically connected to earth ground, but AC grounded through V_CC."
        },
        {
            "id": 108,
            "question": "By what two popular alternative names is the Common Collector (CC) transistor amplifier widely known?",
            "options": [
                "Current Mirror or Cascode Circuit",
                "Voltage Follower or Emitter Follower",
                "Darlington Pair or Schmitt Trigger",
                "Phase Inverter or Push-Pull Driver"
            ],
            "answer": 1,
            "explanation": "• Why 'Voltage Follower or Emitter Follower' is Correct: Because the voltage at the emitter terminal tracks (follows) the input base voltage in both amplitude (Av ≈ 1) and phase (0°), this circuit is universally called an Emitter Follower or Voltage Follower.\n• Why Other Choices are Incorrect: A phase inverter produces 180° shift; a Cascode is a CE-CB combination."
        },
        {
            "id": 109,
            "question": "What is the approximate voltage gain (Av) of a Common Collector (Emitter Follower) amplifier circuit?",
            "options": [
                "Av is extremely high (> 500)",
                "Av is negative and inverted (-100)",
                "Av is approximately 1 (unity gain, Av ≤ 1)",
                "Av is exactly 0"
            ],
            "answer": 2,
            "explanation": "• Why 'Av is approximately 1 (unity gain, Av ≤ 1)' is Correct: Because V_out = V_E = V_B - V_BE, changes in emitter output voltage almost exactly equal changes in base input voltage (typically Av = 0.98 to 0.999). Thus, the Common Collector provides unity voltage gain.\n• Why Other Choices are Incorrect: It provides no voltage amplification."
        },
        {
            "id": 110,
            "question": "Why can the Common Collector configuration be considered and utilized as a 'voltage-buffer' circuit?",
            "options": [
                "Because it has unity voltage gain (Av ≈ 1) combined with very high input impedance and very low output impedance",
                "Because it stores electrical voltage in chemical batteries",
                "Because it inverts the input voltage by 180° to cancel supply ripple",
                "Because it eliminates all current flow through the circuit"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: A voltage buffer transfers a voltage signal from a high-impedance source to a low-impedance load without loading or attenuating the signal voltage (unity gain) while delivering the required load current.\n• Why Other Choices are Incorrect: Buffers do not invert voltage or store chemical energy."
        },
        {
            "id": 111,
            "question": "What is the signal phase relationship between input voltage (Vin) and output voltage (Vout) in a Common Collector circuit?",
            "options": [
                "180° out-of-phase (inverted)",
                "In-phase (0° phase shift)",
                "90° lagging",
                "45° leading"
            ],
            "answer": 1,
            "explanation": "• Why 'In-phase (0° phase shift)' is Correct: The Common Collector is a non-inverting circuit. When the input voltage applied to the base rises positively, the emitter voltage rises positively in unison, keeping Vin and Vout in-phase (0° phase shift).\n• Why Other Choices are Incorrect: Common Emitter is the only inverting (180°) configuration."
        },
        {
            "id": 112,
            "question": "In a Common Collector amplifier, what currents flow through the external emitter load resistance (RL or RE)?",
            "options": [
                "Only the base current IB",
                "Only the collector current IC",
                "Both the collector current and the base current combined (IE = IC + IB)",
                "Zero current flows through the load resistor"
            ],
            "answer": 2,
            "explanation": "• Why this is Correct: Because the load resistance is connected in series with the emitter terminal, the current flowing through it is the emitter current: I_E = I_C + I_B. Thus, the load receives the full sum of both collector and base currents.\n• Why Other Choices are Incorrect: Load current in CE is only IC; load current in CC is IE."
        },
        {
            "id": 113,
            "question": "Which mathematical expression correctly represents the AC current gain (Ai) of the Common Collector configuration?",
            "options": [
                "Ai = IC / IE = alpha",
                "Ai = IE / IB = (IC + IB) / IB = beta + 1",
                "Ai = IB / IC = 1 / beta",
                "Ai = IC / IB = beta"
            ],
            "answer": 1,
            "explanation": "• Why 'Ai = IE / IB = (IC + IB) / IB = beta + 1' is Correct: Current gain is the ratio of output current (I_E) to input current (I_B): A_i = I_E / I_B = (I_C + I_B) / I_B = (I_C / I_B) + 1 = beta + 1. It provides the highest current gain of all three configurations.\n• Why Other Choices are Incorrect: beta is CE current gain; alpha is CB current gain."
        },
        {
            "id": 114,
            "question": "A transistor used in a Common Collector amplifier circuit has a DC current gain Beta (β) of 149. What is the current gain (Ai) of this circuit?",
            "options": [
                "0.993",
                "149",
                "150",
                "298"
            ],
            "answer": 2,
            "explanation": "• Why '150' is Correct: In the Common Collector configuration, current gain is Ai = beta + 1 = 149 + 1 = 150.\n• Why Other Choices are Incorrect: 149 is beta (CE gain); 0.993 is alpha (CB gain)."
        },
        {
            "id": 115,
            "question": "What are the typical impedance characteristics of the Common Collector (Emitter Follower) amplifier?",
            "options": [
                "Low input impedance (tens of ohms) and high output impedance (megohms)",
                "Very high input impedance (hundreds of thousands of ohms) and relatively low output impedance (tens of ohms)",
                "Equal input and output impedances of exactly 600 ohms",
                "Zero input impedance and infinite output impedance"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: The Common Collector features very high input impedance (Zin ≈ beta * RE, often 100 kΩ to 500 kΩ) and low output impedance (Zout ≈ re + RS / beta, typically 10 Ω to 50 Ω), making it an outstanding impedance-matching buffer.\n• Why Other Choices are Incorrect: Low input and high output impedance describes Common Base."
        },
        {
            "id": 116,
            "question": "Why is the Common Collector configuration exceptionally useful in audio and instrumentation systems for 'impedance matching'?",
            "options": [
                "It converts high-impedance voltage sources into low-impedance drives without loading the source or losing voltage amplitude",
                "It blocks all DC power supplies from reaching the speaker",
                "It inverts phase to cancel high-frequency acoustic feedback",
                "It multiplies input voltage by beta squared"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: High-impedance transducers (such as piezo pickups or high-gain voltage stages) suffer severe signal voltage drops if connected directly to low-impedance cables or speakers. Placing a CC buffer between them prevents loading (due to high Zin) and drives the load efficiently (due to low Zout).\n• Why Other Choices are Incorrect: CC does not amplify voltage or invert phase."
        },
        {
            "id": 117,
            "question": "In an Emitter Follower circuit, a base current of IB = 40 μA is applied to a transistor with Beta = 99. What total load current IE flows through the emitter resistor?",
            "options": [
                "0.4 mA",
                "3.96 mA",
                "4.0 mA",
                "40 mA"
            ],
            "answer": 2,
            "explanation": "• Why '4.0 mA' is Correct: In Common Collector, the load current is the emitter current: I_E = (beta + 1) * I_B = (99 + 1) * 40 μA = 100 * 40 μA = 4,000 μA = 4.0 mA.\n• Why Other Choices are Incorrect: 3.96 mA is collector current alone (99 * 40 μA); 0.4 mA is an order of magnitude error."
        },
        {
            "id": 118,
            "question": "How does the Power Gain of the Common Collector configuration compare to the other two configurations?",
            "options": [
                "It has the highest power gain of all three configurations",
                "It has Medium power gain, because while voltage gain is unity (Av ≈ 1), it provides large current gain (Ai ≈ beta + 1)",
                "Its power gain is strictly zero",
                "It has lower power gain than Common Base"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Power gain is Ap = Av * Ai. Since Av ≈ 1 and Ai ≈ beta + 1, Ap ≈ beta + 1, which represents 'Medium' power gain (e.g., 50 to 200). Common Emitter has 'Very High' power gain (Av * beta), while Common Base has 'Low' power gain.\n• Why Other Choices are Incorrect: CE has the highest power gain; CC power gain is medium, not zero."
        },
        {
            "id": 119,
            "question": "In summary, the Common Collector amplifier is best characterized as providing which of the following performance combinations?",
            "options": [
                "High voltage gain with zero current gain",
                "Good current amplification with very little voltage gain (unity gain)",
                "High voltage gain with negative current gain",
                "Zero power gain and zero current gain"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: As explicitly summarized in the Canvas LMS module: The load resistance receives both base and collector currents giving a large current gain, therefore providing good current amplification with very little voltage gain (Av ≈ 1).\n• Why Other Choices are Incorrect: Common Collector is a current amplifier, not a high voltage amplifier."
        },
        {
            "id": 120,
            "question": "Which table entry correctly pairs each transistor configuration with its core operational summary?",
            "options": [
                "CB: Has Current Gain but no Voltage Gain; CE: Has Voltage Gain but no Current Gain; CC: Has both gains",
                "CB: Has Voltage Gain but no Current Gain; CE: Has both Current and Voltage Gain; CC: Has Current Gain but no Voltage Gain",
                "CB: Inverting amplifier; CE: Non-inverting; CC: Inverting",
                "CB: High input Z; CE: Medium input Z; CC: Low input Z"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: • Common Base: Has Voltage Gain but no Current Gain (Ai < 1).\n• Common Emitter: Has both Current and Voltage Gain (highest power gain).\n• Common Collector: Has Current Gain but no Voltage Gain (Av ≈ 1).\n• Why Other Choices are Incorrect: Common Emitter is the only inverting amplifier; Common Collector has the highest input impedance."
        },
        {
            "id": 121,
            "question": "When a Bipolar Junction Transistor is operated as an ON/OFF solid-state switch, between which two distinct operating regions on its I-V characteristics curve is it driven?",
            "options": [
                "Linear Active region and Breakdown region",
                "Cut-off region (fully-OFF) and Saturation region (fully-ON)",
                "Active region and Cut-off region only",
                "Saturation region and Active region only"
            ],
            "answer": 1,
            "explanation": "• Why 'Cut-off region (fully-OFF) and Saturation region (fully-ON)' is Correct: Transistor solid-state switches operate at the two extremes of the characteristic curves: fully-OFF in the Cut-off region (open switch) and fully-ON in the Saturation region (closed switch), bypassing the active region required for linear amplifiers.\n• Why Other Choices are Incorrect: Linear active region is used for amplifiers, not steady-state switching."
        },
        {
            "id": 122,
            "question": "What type of mechanical switch equivalent does a single bipolar transistor operating in cut-off and saturation emulate?",
            "options": [
                "Double-pole double-throw (DPDT) switch",
                "Single-pole single-throw (SPST) solid-state switch",
                "Rotary multi-wafer switch",
                "Momentary push-button normally closed switch only"
            ],
            "answer": 1,
            "explanation": "• Why 'Single-pole single-throw (SPST) solid-state switch' is Correct: With zero base drive, the transistor is an open switch (zero collector current); with positive base drive, it closes like a single-pole single-throw (SPST) solid-state switch to conduct maximum circuit current.\n• Why Other Choices are Incorrect: A single BJT provides a single make-or-break path between collector and emitter (SPST)."
        },
        {
            "id": 123,
            "question": "Which set of electrical conditions accurately characterizes the Cut-off (fully-OFF) region of an NPN transistor switch?",
            "options": [
                "VBE > 0.7 V, IC = VCC / RL, and VCE ≈ 0 V",
                "Base is grounded (0 V), VBE < 0.7 V, both junctions reverse-biased, IC = 0, and VCE = VCC (logic '1')",
                "VBE = 0.7 V, IC = beta * IB, and VCE = VCC / 2",
                "Both junctions forward-biased with VCE = 0.2 V"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In cut-off: Base input is grounded (0 V), V_BE < 0.7 V (both junctions reverse-biased), no collector current flows (I_C = 0), and output voltage equals full supply voltage (V_OUT = V_CE = V_CC = logic '1'), acting as an open circuit.\n• Why Other Choices are Incorrect: V_CE ≈ 0 V characterizes saturation; V_CE = V_CC / 2 characterizes active-region biasing."
        },
        {
            "id": 124,
            "question": "Which set of electrical conditions characterizes the Saturation (fully-ON) region of an NPN transistor switch?",
            "options": [
                "Both Base-Emitter and Base-Collector junctions forward-biased, VBE > 0.7 V, IC = VCC / RL, and VCE ≈ 0 V (logic '0')",
                "Base input is grounded (0 V), IC = 0, and VCE = VCC",
                "Base-Emitter junction reverse-biased and Base-Collector forward-biased",
                "Transistor operates as an open switch with infinite internal resistance"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: In saturation: Base is driven with ample positive voltage (V_BE > 0.7 V), both junctions are forward-biased, collector current reaches circuit maximum limit (I_C = V_CC / R_L), and collector-emitter voltage drops to its minimum (ideally V_CE = 0 V, logic '0'), acting as a closed switch.\n• Why Other Choices are Incorrect: Reverse bias describes cutoff."
        },
        {
            "id": 125,
            "question": "Why is the internal power dissipation (PD = VCE * IC) of a transistor switch at its absolute minimum in both the Cut-off and Saturation states?",
            "options": [
                "Because the DC supply voltage shuts down automatically in both states",
                "Because in Cut-off IC ≈ 0 (yielding PD ≈ VCE * 0 = 0), and in Saturation VCE ≈ 0 (yielding PD ≈ 0 * IC = 0)",
                "Because the ambient room temperature drops to absolute zero",
                "Because base resistance increases to infinity in saturation"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Power dissipation is P = V_CE * I_C. In cut-off, I_C = 0 so P = 0. In saturation, V_CE ≈ 0 so P ≈ 0. Significant power dissipation only occurs momentarily during the rapid switching transitions between ON and OFF.\n• Why Other Choices are Incorrect: Supply voltage remains constant; the zero-power states are due to zero current or zero voltage."
        },
        {
            "id": 126,
            "question": "When an NPN transistor is connected with its Emitter grounded and its Collector connected to an external load, what technical function does the open-collector output perform?",
            "options": [
                "It sources high positive voltage to the load",
                "It 'sinks' the externally supplied load current to circuit ground when switched ON",
                "It isolates the load using magnetic induction",
                "It rectifies AC power into radio frequency pulses"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: With emitter grounded, the open-collector transistor acts as a 'current sink'. When turned ON, it pulls (sinks) the bottom terminal of the load down to ground, completing the current path from the external DC power supply through the load to ground.\n• Why Other Choices are Incorrect: Sourcing current is performed by PNP transistors connected to positive rails."
        },
        {
            "id": 127,
            "question": "When switching inductive loads such as relays, solenoids, or DC motors with a transistor, what is the crucial purpose of placing a 'flywheel' (freewheeling) diode across the load?",
            "options": [
                "To increase the speed of the motor by multiplying supply voltage",
                "To dissipate destructive back-EMF inductive voltage spikes (V = -L*di/dt) when the transistor turns OFF, protecting the transistor from overvoltage breakdown",
                "To rectify the incoming DC current into an AC waveform",
                "To prevent base current from flowing into the emitter"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Inductors resist sudden changes in current. When the transistor abruptly switches OFF, the collapsing magnetic field in the coil generates a high-voltage reverse inductive kick (back-EMF: V = -L di/dt) that can exceed the transistor's V_CEO rating and destroy it. The flywheel diode provides a safe closed-loop freewheeling path to recirculate and dissipate the stored inductive energy.\n• Why Other Choices are Incorrect: It does not speed up the motor or generate AC."
        },
        {
            "id": 128,
            "question": "(Canvas LMS Switch Example 1) An NPN transistor has β = 200 and switches a load current IC = 4 mA with an input base current Ib = 20 μA. If the input control voltage exceeds Vin = 2.5 V and Vbe = 0.7 V, what is the calculated value of the Base resistor (Rb)?",
            "options": [
                "9.0 kΩ",
                "45 kΩ",
                "90 kΩ",
                "125 kΩ"
            ],
            "answer": 2,
            "explanation": "• Why '90 kΩ' is Correct: Apply Ohm's law to the base resistor: R_b = (V_in - V_be) / I_b = (2.5 V - 0.7 V) / 20 μA = 1.8 V / 0.000020 A = 90,000 Ω = 90 kΩ.\n• Why Other Choices are Incorrect: 2.5 V / 20 μA = 125 kΩ ignores the 0.7 V diode drop; 9.0 kΩ has an incorrect factor of 10."
        },
        {
            "id": 129,
            "question": "In Canvas Example 1 where the calculated base resistance is 90 kΩ, why do circuit designers intentionally select the next lowest preferred standard value (82 kΩ)?",
            "options": [
                "To reduce base current and keep the transistor in the active linear region",
                "To guarantee that the transistor is driven with slightly extra base current, ensuring deep and reliable saturation across all temperatures and beta tolerances",
                "Because higher resistor values are illegal under international engineering codes",
                "To save electrical energy by decreasing total circuit power"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Choosing the next lowest standard resistor (82 kΩ instead of 91 kΩ or 100 kΩ) increases base current slightly (I_B = 1.8 V / 82 kΩ ≈ 22 μA > 20 μA). This ensures an overdrive condition, guaranteeing that the transistor enters deep saturation even if beta drops with temperature or component aging.\n• Why Other Choices are Incorrect: A lower resistor increases base current, ensuring saturation rather than linear mode."
        },
        {
            "id": 130,
            "question": "(Canvas LMS Switch Example 2) A transistor with β = 200 must switch a heavy load requiring IC = 200 mA when input control voltage is 5.0 V. What is the minimum Base current (Ib) required to turn the transistor fully ON (saturated)?",
            "options": [
                "0.1 mA (100 μA)",
                "1.0 mA (1000 μA)",
                "10 mA",
                "40 mA"
            ],
            "answer": 1,
            "explanation": "• Why '1.0 mA' is Correct: To reach saturation, minimum base current is I_b(min) = I_C / beta = 200 mA / 200 = 1.0 mA (or 1000 μA).\n• Why Other Choices are Incorrect: 200 mA / 20 = 10 mA; 200 mA * 200 = 40,000 mA."
        },
        {
            "id": 131,
            "question": "(Canvas LMS Switch Example 2 Continued) With an input voltage Vin = 5.0 V, Vbe = 0.7 V, and the required minimum base current Ib = 1.0 mA, what is the calculated value of the Base resistor (Rb)?",
            "options": [
                "430 Ω",
                "4.3 kΩ",
                "5.0 kΩ",
                "43 kΩ"
            ],
            "answer": 1,
            "explanation": "• Why '4.3 kΩ' is Correct: Using Ohm's law across R_b: R_b = (V_in - V_be) / I_b = (5.0 V - 0.7 V) / 1.0 mA = 4.3 V / 0.001 A = 4,300 Ω = 4.3 kΩ.\n• Why Other Choices are Incorrect: 5.0 V / 1.0 mA = 5.0 kΩ ignores V_be; 430 Ω is an order of magnitude error."
        },
        {
            "id": 132,
            "question": "How does an NPN Common Emitter switching circuit function as a digital logic inverter (NOT gate)?",
            "options": [
                "A high input voltage (+5 V) turns the transistor ON, pulling output voltage down to ~0 V (logic '0'); a low input (0 V) turns it OFF, pulling output up to VCC (logic '1')",
                "A high input produces a high output voltage",
                "The circuit only inverts the frequency of incoming radio waves",
                "It inverts positive voltages into negative voltages below ground"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: When input is high (logic '1'), base current saturates the BJT, pulling V_CE to ~0 V (logic '0'). When input is low (logic '0'), the BJT cuts off and collector resistor pulls V_CE up to V_CC (logic '1'). Thus, output is always the inverted logic level of the input.\n• Why Other Choices are Incorrect: Inverting digital logic means swapping high and low states, not reversing DC supply polarity."
        },
        {
            "id": 133,
            "question": "What is the primary advantage of using a BJT solid-state switch to interface a low-voltage digital microcontroller (+5 V or +3.3 V) with a high-power device (+12 V or +24 V motor)?",
            "options": [
                "It eliminates the need for any electrical wiring",
                "It allows low-current, low-voltage logic outputs to safely control high-voltage, high-current loads without overloading the sensitive digital IC",
                "It decreases the speed of operation to prevent wear on semiconductor crystals",
                "It forces the motor to operate at a single fixed frequency"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Microcontroller GPIO pins can only deliver tens of milliamperes at 3.3 V or 5 V. Transistor switches act as electronic buffers, using microamperes of logic current to switch amperes of current at 12 V, 24 V, or higher without damaging the microcontroller.\n• Why Other Choices are Incorrect: Transistors switch much faster than mechanical switches and do not eliminate wiring."
        },
        {
            "id": 134,
            "question": "How is Pulse Width Modulation (PWM) utilized with BJT solid-state switches to control the speed of a DC motor efficiently?",
            "options": [
                "By varying the resistance of the collector in the linear active region to generate heat",
                "By rapidly switching the transistor between full saturation and full cutoff, varying the ratio of ON time to total cycle period (duty cycle) with minimal power loss",
                "By changing the supply voltage from DC to 3-phase AC",
                "By physically varying the length of the base terminal wire"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In PWM, the transistor is driven only into cutoff (zero current) and saturation (zero voltage drop), where power dissipation is virtually zero. By adjusting the duty cycle (percentage of time ON vs OFF), average power and speed delivered to the motor can be smoothly controlled with very high electrical efficiency (>90%).\n• Why Other Choices are Incorrect: Operating in the linear active region wastes massive power as heat."
        },
        {
            "id": 135,
            "question": "What is 'overdrive factor' or 'forced beta' (βforced) in transistor switching circuit design?",
            "options": [
                "Designing with a base current larger than the minimum required for saturation (IB > IC / β) to guarantee deep saturation under worst-case beta and temperature conditions",
                "Operating the transistor beyond its maximum collector current rating until breakdown occurs",
                "Forcing the emitter current to flow backward into the base supply",
                "Increasing the AC signal frequency beyond the transit frequency f_T"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: To guarantee that a transistor switch turns fully ON under all temperature conditions, production variations, and aging, engineers design with 'forced beta' (typically beta_forced = 10, or 2 to 5 times more base current than minimum: I_B = 2 to 5 * I_C / beta). This is called overdriving the base into hard saturation.\n• Why Other Choices are Incorrect: Overdrive does not exceed maximum ratings; it ensures reliable saturation."
        },
        {
            "id": 136,
            "question": "What is the primary function of the Base resistor (Rb) when a digital logic gate (such as TTL or CMOS) drives a transistor switch?",
            "options": [
                "To amplify the logic gate's power supply voltage",
                "To limit the output current drawn from the logic gate pin to safe levels and set the required base drive current",
                "To convert the DC output of the gate into an alternating current",
                "To eliminate the base-emitter PN junction barrier"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Digital logic ICs have maximum rated source and sink output current limits (typically 4 mA to 20 mA). The base resistor R_b limits the current flowing out of the logic pin to prevent damaging the IC while delivering the exact base current needed to saturate the transistor.\n• Why Other Choices are Incorrect: Resistors dissipate power rather than amplify voltage or convert DC to AC."
        },
        {
            "id": 137,
            "question": "How is the load connected in a PNP transistor switching circuit, and what is the primary role of the PNP transistor?",
            "options": [
                "The load is connected between the collector and ground (0 V), and the PNP transistor switches positive supply power (sources current) to it",
                "The load is connected between base and collector to ground",
                "The load is connected in series with the base input resistor",
                "The load replaces the base-emitter junction"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: In a PNP switch, the Emitter is tied to the positive DC rail (+VCC) and the load is connected between the Collector and ground (0 V). Turning the PNP transistor ON connects the load to +VCC, acting as a 'high-side' current sourcing switch.\n• Why Other Choices are Incorrect: Connecting load between collector and ground is high-side switching; NPN switches the ground side."
        },
        {
            "id": 138,
            "question": "To switch a PNP transistor switch 'ON' into saturation, what voltage level must be applied to its Base terminal?",
            "options": [
                "A high positive voltage equal to or greater than VCC",
                "A LOW voltage (ground / 0 V) to forward-bias the Base-Emitter junction",
                "An alternating sine wave voltage",
                "The base must be left completely disconnected"
            ],
            "answer": 1,
            "explanation": "• Why 'A LOW voltage (ground / 0 V)' is Correct: For a PNP transistor, the emitter is connected to +VCC. To forward-bias the base-emitter junction, the base must be made more negative than the emitter by at least 0.7 V. Grounding the base (LOW / 0 V) creates a positive VEB drop, turning the PNP switch fully ON.\n• Why Other Choices are Incorrect: Applying +VCC makes VEB = 0 V, which cuts off the PNP transistor."
        },
        {
            "id": 139,
            "question": "What is the key electrical distinction between an NPN transistor switch and a PNP transistor switch regarding current flow?",
            "options": [
                "NPN transistors source current (switches power), while PNP transistors sink current (switches ground)",
                "NPN transistors sink current (switches ground), while PNP transistors source current (switches power)",
                "NPN transistors only conduct AC current, while PNP transistors only conduct DC current",
                "NPN switches have zero resistance, while PNP switches have infinite resistance"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: As emphasized in the Canvas lecture module: NPN transistors switch the ground path (current sinking, open-collector pull-down), while PNP transistors switch the positive supply path (current sourcing, high-side pull-up to VCC).\n• Why Other Choices are Incorrect: Reversing the roles is incorrect; both handle DC and AC identically in magnitude."
        },
        {
            "id": 140,
            "question": "What is the formal technical name for the two-transistor compound arrangement commonly known as the 'Darlington Configuration'?",
            "options": [
                "Complementary Gain Compounding Configuration",
                "Symmetrical Push-Pull Topology",
                "Differential Cascode Network",
                "Current Mirror Steering Array"
            ],
            "answer": 0,
            "explanation": "• Why 'Complementary Gain Compounding Configuration' is Correct: The formal engineering designation for the Darlington configuration is the 'Complementary Gain Compounding Configuration', where the current gain of the first transistor is compounded with (multiplied by) the current gain of the second transistor.\n• Why Other Choices are Incorrect: Push-pull uses complementary NPN/PNP; Cascode uses CE and CB stages."
        },
        {
            "id": 141,
            "question": "How are the two individual bipolar transistors physically interconnected in an NPN Darlington transistor pair?",
            "options": [
                "The Emitters are tied together, and the Collector of Q1 connects to the Base of Q2",
                "The Collectors are tied together, and the Emitter of Q1 is connected directly to the Base of Q2 (IE1 = IB2)",
                "The Bases are tied together, and the Collectors are connected in series with the Emitters",
                "The Emitter of Q2 is tied to the Collector of Q1"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In an NPN Darlington pair, the Collectors of both transistors are tied together to a common terminal. The Emitter of the smaller input transistor (Q1) is connected directly to the Base of the larger output transistor (Q2), so the emitter current of Q1 becomes the base drive current for Q2 (IB2 = IE1).\n• Why Other Choices are Incorrect: In a Darlington pair, collectors are tied together, not emitters."
        },
        {
            "id": 142,
            "question": "What is the mathematical relationship for the total overall current gain (βtotal or hFE(total)) of a Darlington transistor pair?",
            "options": [
                "βtotal = β1 + β2",
                "βtotal = β1 * β2 (or β1 + β2 + β1*β2 ≈ β1*β2)",
                "βtotal = (β1 * β2) / (β1 + β2)",
                "βtotal = β1 / β2"
            ],
            "answer": 1,
            "explanation": "• Why 'βtotal = β1 * β2' is Correct: Because Q1 amplifies the base current by β1 and feeds its output into the base of Q2 which amplifies it again by β2, the overall current amplification factor is the product of the two individual gains: βtotal = β1 * β2.\n• Why Other Choices are Incorrect: Gains multiply rather than add; adding gains would only give 150 instead of 5,000."
        },
        {
            "id": 143,
            "question": "(Canvas LMS Darlington Example) A Darlington switch consists of an input transistor with current gain β1 = 100 and a second switching transistor with current gain β2 = 50. What is the total current gain (βtotal) of the Darlington device?",
            "options": [
                "150",
                "500",
                "5,000",
                "50,000"
            ],
            "answer": 2,
            "explanation": "• Why '5,000' is Correct: Multiplying the two individual gains: beta_total = beta_1 * beta_2 = 100 * 50 = 5,000.\n• Why Other Choices are Incorrect: 100 + 50 = 150 (adding instead of multiplying); 500 is a factor of 10 error."
        },
        {
            "id": 144,
            "question": "(Canvas LMS Darlington Example Continued) If the load current to be switched is IC = 200 mA and the Darlington total current gain is βtotal = 5,000, what is the required input base current (IB)?",
            "options": [
                "4 μA",
                "40 μA",
                "400 μA",
                "1.0 mA"
            ],
            "answer": 1,
            "explanation": "• Why '40 μA' is Correct: Using I_B = I_C / beta_total = 200 mA / 5,000 = 0.04 mA = 40 μA.\n• Why Other Choices are Incorrect: For a single transistor with beta = 200, I_B was 1.0 mA (1,000 μA); the Darlington reduces this requirement to just 40 μA."
        },
        {
            "id": 145,
            "question": "Comparing a single BJT switch (requiring 1.0 mA base current for a 200 mA load) to the Darlington pair (requiring 40 μA), what is the key practical advantage?",
            "options": [
                "The Darlington pair consumes zero power in the load",
                "The Darlington pair allows micro-power digital logic outputs to easily switch heavy load currents without overloading the logic IC",
                "The Darlington pair reduces circuit supply voltage to zero",
                "The Darlington pair eliminates the need for a collector connection"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: Drawing only 40 μA from a microcontroller or logic gate is well within the drive capacity of any low-power digital output pin, whereas 1.0 mA or more might overload sensitive logic families or battery-powered devices.\n• Why Other Choices are Incorrect: Load power depends on the load itself; collector connections remain essential."
        },
        {
            "id": 146,
            "question": "What is the total Base-Emitter turn-on input voltage threshold (VBE(total)) for a standard Silicon Darlington pair, and why?",
            "options": [
                "Approximately 0.2 V, because saturation reduces junction voltage",
                "Approximately 0.7 V, because only one junction conducts",
                "Approximately 1.4 V, due to the series connection of the two base-emitter PN junctions (0.7 V + 0.7 V)",
                "Approximately 5.0 V, matching TTL logic levels"
            ],
            "answer": 2,
            "explanation": "• Why 'Approximately 1.4 V' is Correct: Because the Emitter of Q1 connects directly to the Base of Q2, the input voltage from the external Base to the external Emitter must overcome both forward-biased PN junctions in series: V_BE(total) = V_BE1 + V_BE2 ≈ 0.7 V + 0.7 V = 1.4 V.\n• Why Other Choices are Incorrect: A single silicon junction requires 0.7 V; two in series require ~1.4 V."
        },
        {
            "id": 147,
            "question": "A Darlington switch is driven by a 5.0 V logic gate to switch a load with IB = 40 μA. If VBE(total) = 1.4 V, what is the calculated value of the Base resistor (Rb)?",
            "options": [
                "36 kΩ",
                "90 kΩ",
                "107.5 kΩ",
                "125 kΩ"
            ],
            "answer": 1,
            "explanation": "• Why '90 kΩ' is Correct: Apply Ohm's law taking the 1.4 V double-junction drop into account: R_b = (V_in - V_BE(total)) / I_B = (5.0 V - 1.4 V) / 40 μA = 3.6 V / 0.000040 A = 90,000 Ω = 90 kΩ.\n• Why Other Choices are Incorrect: (5.0 - 0.7) / 40 μA = 107.5 kΩ uses only a single diode drop; 5.0 V / 40 μA = 125 kΩ ignores junction drops."
        },
        {
            "id": 148,
            "question": "What is the primary operational trade-off or drawback of using a Darlington pair switch instead of a single BJT switch?",
            "options": [
                "Current gain is lower than a single transistor",
                "Saturation voltage (VCE(sat)) is higher (typically 0.7 V to 0.9 V instead of 0.2 V), causing higher ON-state power dissipation",
                "It cannot switch DC loads",
                "It requires negative power supply rails"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: In a Darlington pair, Q1 cannot be driven into deeper saturation than V_CE1 = V_BE2 ≈ 0.7 V. Therefore, V_CE(sat) of the pair is V_CE1(sat) + V_BE2 ≈ 0.2 V + 0.7 V = 0.9 V (or at minimum ~0.7 V). This higher V_CE(sat) dissipates significantly more power (heat) in high-current applications than a single saturated transistor (V_CE(sat) ≈ 0.2 V).\n• Why Other Choices are Incorrect: Current gain is vastly higher, not lower."
        },
        {
            "id": 149,
            "question": "Which of the following represents a typical practical application for a Darlington Transistor Switch as highlighted in the Canvas lecture module?",
            "options": [
                "Stepper motor and DC motor drivers, lighting circuits, and power inverters",
                "Direct microwave radio antenna transmission",
                "High-frequency FM demodulation exclusively",
                "Passive bandpass audio filtering"
            ],
            "answer": 0,
            "explanation": "• Why this is Correct: Due to their high current gains and high switching speeds, Darlington switches are widely used in DC motor and stepper motor control, high-current relay/solenoid drivers, power inverters, and automotive lighting circuits.\n• Why Other Choices are Incorrect: Microwave antennas and audio filters use other specialized components."
        },
        {
            "id": 150,
            "question": "How does a 'Sziklai Pair' (Complementary Feedback Pair) compare to a standard Darlington Pair?",
            "options": [
                "It uses two identical NPN transistors with 10x higher saturation voltage",
                "It uses complementary NPN and PNP transistors connected together to provide similar high current gain but with only a single base-emitter drop (VBE ≈ 0.7 V) and lower saturation voltage",
                "It can only be used as a radio transmitter",
                "It eliminates the collector terminal completely"
            ],
            "answer": 1,
            "explanation": "• Why this is Correct: The Sziklai pair (also called the Complementary Darlington) connects an NPN and a PNP transistor together. It provides total current gain approximately equal to beta1 * beta2, but requires only a single forward diode drop at the input (V_BE ≈ 0.7 V) and achieves a lower saturation voltage (~0.3 V) than a Darlington pair.\n• Why Other Choices are Incorrect: Sziklai uses complementary transistors (NPN + PNP), not two identical ones."
        }
    ]
  },
  basic_electronics: {
    title: "Basic Electronics (ECE 005)",
    chapter: "ECE 005",
    questions: [
      {
            "id": 1,
            "question": "What is the name of Niels Bohr's 1913 atomic model?",
            "options": [
                  "Solid Sphere Model",
                  "Plum Pudding Model",
                  "Nuclear Model",
                  "Planetary Model"
            ],
            "answer": 3,
            "explanation": "\u2022 Why 'Planetary Model' is Correct: Niels Bohr proposed the Planetary Model in 1913, in which electrons orbit a dense positive nucleus in discrete energy levels, similar to planets orbiting the sun.\n\u2022 Why Other Choices are Incorrect: Dalton proposed the Solid Sphere Model (1803), Thomson proposed the Plum Pudding Model (1897), and Rutherford proposed the Nuclear Model (1911)."
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
            "explanation": "\u2022 Why 'A material having electrical conductivity between a good conductor and an insulator' is Correct: Semiconductors are a special class of elements whose conductivity lies between conductors (like copper) and insulators (like rubber).\n\u2022 Why Other Choices are Incorrect: Superconductors have zero resistance, while insulators completely block current."
      },
      {
            "id": 3,
            "question": "How many valence electrons does a pure semiconductor atom (such as Silicon or Germanium) have?",
            "options": [
                  "2",
                  "3",
                  "4",
                  "5"
            ],
            "answer": 2,
            "explanation": "\u2022 Why '4' is Correct: Pure semiconductor atoms like Silicon (Si) and Germanium (Ge) belong to Group IV of the periodic table and have 4 valence electrons (tetravalent).\n\u2022 Why Other Choices are Incorrect: Trivalent elements have 3 valence electrons (acceptors like Boron), while pentavalent elements have 5 valence electrons (donors like Phosphorus)."
      },
      {
            "id": 4,
            "question": "What is the term for a pure semiconductor that has not been subjected to doping?",
            "options": [
                  "Extrinsic semiconductor",
                  "Intrinsic semiconductor",
                  "N-type semiconductor",
                  "P-type semiconductor"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Intrinsic semiconductor' is Correct: An intrinsic semiconductor is an pure, un-doped semiconductor crystal where thermal excitation alone creates equal numbers of free electrons and holes.\n\u2022 Why Other Choices are Incorrect: Extrinsic semiconductors are semiconductors that have been intentionally doped with impurities to form N-type or P-type materials."
      },
      {
            "id": 5,
            "question": "Calculate the loop current (I) in a forward-biased diode circuit using the Third Approximation (Piecewise Approximation). Given: Supply Voltage = 10 V, Silicon Diode (V_B = 0.7 V, internal resistance R_B = 0.2 \u03a9), and Load Resistor R_L = 1 k\u03a9 (1000 \u03a9).",
            "options": [
                  "9.300 mA",
                  "9.298 mA",
                  "10.00 mA",
                  "9.600 mA"
            ],
            "answer": 1,
            "explanation": "\u2022 Why '9.298 mA' is Correct: In the Third Approximation, I = (V_S - V_B) / (R_L + R_B) = (10 V - 0.7 V) / (1000 \u03a9 + 0.2 \u03a9) = 9.3 V / 1000.2 \u03a9 = 0.00929814 A = 9.298 mA.\n\u2022 Why Other Choices are Incorrect: 9.300 mA is obtained using the Second Approximation (ignoring internal resistance R_B = 0.2 \u03a9), and 10.00 mA is obtained using the First (Ideal) Approximation."
      },
      {
            "id": 6,
            "question": "Who discovered static electricity in ancient times by rubbing amber against fur?",
            "options": [
                  "Ancient Egyptians",
                  "Ancient Greeks",
                  "Romans",
                  "Babylonians"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Ancient Greeks' is Correct: The ancient Greeks discovered static electricity when rubbing amber (Greek: elektron) against fur attracted light objects.\n\u2022 Why Other Choices are Incorrect: Ancient Egyptians utilized electric fish to alleviate pain, but did not discover amber static electricity."
      },
      {
            "id": 7,
            "question": "The Leyden jar, invented in 1745, was a landmark historical device because it was capable of:",
            "options": [
                  "Generating alternating current",
                  "Storing an electric charge",
                  "Measuring magnetic flux",
                  "Amplifying radio signals"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Storing an electric charge' is Correct: The Leyden jar (1745) was the earliest form of a capacitor, designed to store static electrical charge.\n\u2022 Why Other Choices are Incorrect: Generators produce AC, magnetometers measure flux, and vacuum tubes/transistors amplify signals."
      },
      {
            "id": 8,
            "question": "In 1820, Hans Christian Oersted discovered which foundational physical phenomenon?",
            "options": [
                  "Photoelectric effect",
                  "Electromagnetism (connection between electricity and magnetism)",
                  "Thermionic emission",
                  "Quantum entanglement"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Electromagnetism (connection between electricity and magnetism)' is Correct: Oersted noticed a compass needle deflected near a current-carrying wire in 1820, establishing the field of electromagnetism.\n\u2022 Why Other Choices are Incorrect: Faraday discovered induction (1831), Edison discovered thermionic emission (1883), and Einstein explained photoelectric effect (1905)."
      },
      {
            "id": 9,
            "question": "Michael Faraday's discovery of electromagnetic induction in 1831 led directly to the development of:",
            "options": [
                  "Electric motors and generators",
                  "Vacuum tubes",
                  "Microprocessors",
                  "Leyden jars"
            ],
            "answer": 0,
            "explanation": "\u2022 Why 'Electric motors and generators' is Correct: Faraday showed that a changing magnetic field induces an electric current, enabling mechanical-to-electrical energy conversion in electric generators.\n\u2022 Why Other Choices are Incorrect: Vacuum tubes were invented by Fleming (1904), microprocessors by Intel (1971), and Leyden jars in 1745."
      },
      {
            "id": 10,
            "question": "Who invented the first vacuum tube (diode / Fleming valve) in 1904?",
            "options": [
                  "Thomas Edison",
                  "John Ambrose Fleming",
                  "Lee de Forest",
                  "Nikola Tesla"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'John Ambrose Fleming' is Correct: John Ambrose Fleming invented the two-electrode thermionic vacuum tube (diode valve) in 1904 based on the Edison effect.\n\u2022 Why Other Choices are Incorrect: Thomas Edison discovered the Edison effect (1883), Lee de Forest added a grid to create the triode (1906), and Tesla pioneered AC power."
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
            "explanation": "\u2022 Why 'John Bardeen, Walter Brattain, and William Shockley' is Correct: Bardeen, Brattain, and Shockley co-invented the point-contact and junction transistor at Bell Labs in December 1947.\n\u2022 Why Other Choices are Incorrect: Kilby, Noyce, and Hoff developed integrated circuits and microprocessors."
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
            "explanation": "\u2022 Why 'Jack Kilby and Robert Noyce' is Correct: Jack Kilby (Texas Instruments) and Robert Noyce (Fairchild Semiconductor) independently invented planar integrated circuits in 1958-1959.\n\u2022 Why Other Choices are Incorrect: Bardeen & Brattain invented the transistor; Hoff & Faggin created the Intel 4004 microprocessor."
      },
      {
            "id": 13,
            "question": "Which atomic model introduced the concept of electrons embedded in a positively charged sphere, known as the 'Plum Pudding Model'?",
            "options": [
                  "John Dalton (1803)",
                  "J.J. Thomson (1897)",
                  "Ernest Rutherford (1911)",
                  "Erwin Schr\u00f6dinger (1926)"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'J.J. Thomson (1897)' is Correct: J.J. Thomson discovered the electron in 1897 and proposed the Plum Pudding Model, where negative electrons were embedded in a positive sphere.\n\u2022 Why Other Choices are Incorrect: Dalton proposed solid sphere, Rutherford proposed nuclear model, and Schr\u00f6dinger developed the quantum wave model."
      },
      {
            "id": 14,
            "question": "Erwin Schr\u00f6dinger's 1926 contribution to atomic theory is known as the:",
            "options": [
                  "Solid Sphere Model",
                  "Nuclear Model",
                  "Planetary Model",
                  "Quantum Model (Electron Cloud Model)"
            ],
            "answer": 3,
            "explanation": "\u2022 Why 'Quantum Model (Electron Cloud Model)' is Correct: Schr\u00f6dinger formulated wave mechanics in 1926, defining electron positions probabilistically in 3D electron clouds (orbitals).\n\u2022 Why Other Choices are Incorrect: Dalton (solid sphere), Rutherford (nuclear), and Bohr (planetary) were earlier classical models."
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
            "explanation": "\u2022 Why 'Silicon is thermally stable, more abundant, cost-effective, and has low leakage current' is Correct: Silicon (Si) outperforms Germanium (Ge) because Si handles higher operating temperatures, has lower reverse leakage current, and is abundant in sand (SiO2).\n\u2022 Why Other Choices are Incorrect: Germanium is temperature sensitive, expensive, less abundant, and has high leakage current."
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
            "explanation": "\u2022 Why 'Germanium = 0.3 V, Silicon = 0.7 V' is Correct: At 25 \u00b0C, a Germanium PN junction requires approx 0.3 V to turn on in forward bias, while Silicon requires approx 0.7 V.\n\u2022 Why Other Choices are Incorrect: Reversing the values is a common mistake; Ge has smaller bandgap energy than Si."
      },
      {
            "id": 17,
            "question": "Which of the following is an example of a Compound Semiconductor?",
            "options": [
                  "Silicon (Si)",
                  "Germanium (Ge)",
                  "Gallium Arsenide (GaAs)",
                  "Carbon (C)"
            ],
            "answer": 2,
            "explanation": "\u2022 Why 'Gallium Arsenide (GaAs)' is Correct: Gallium Arsenide (GaAs) and Cadmium Sulfide (CdS) are compound semiconductors formed by combining elements from different periodic table groups.\n\u2022 Why Other Choices are Incorrect: Silicon and Germanium are single-crystal elemental semiconductors."
      },
      {
            "id": 18,
            "question": "What type of chemical bonding is formed between semiconductor atoms in a crystal lattice by sharing valence electrons?",
            "options": [
                  "Ionic bonding",
                  "Covalent bonding",
                  "Metallic bonding",
                  "Hydrogen bonding"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Covalent bonding' is Correct: Semiconductor atoms achieve an 8-electron stable valence octet by sharing valence electrons with four neighboring atoms in covalent bonds.\n\u2022 Why Other Choices are Incorrect: Ionic bonds involve complete electron transfer, while metallic bonds feature a sea of delocalized electrons."
      },
      {
            "id": 19,
            "question": "Adding donor impurities (such as Phosphorus or Arsenic) to an intrinsic semiconductor produces which type of material?",
            "options": [
                  "P-type semiconductor with excess holes",
                  "N-type semiconductor with excess free electrons",
                  "Insulator with high resistance",
                  "Superconductor"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'N-type semiconductor with excess free electrons' is Correct: Pentavalent donor atoms (5 valence electrons) donate extra free electrons, creating an N-type (negative carrier) semiconductor.\n\u2022 Why Other Choices are Incorrect: Acceptor impurities (trivalent like Boron) produce P-type semiconductors with excess holes."
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
            "explanation": "\u2022 Why 'Majority: Holes, Minority: Electrons' is Correct: P-type semiconductors are doped with trivalent acceptors (Boron), creating a abundance of positive holes (majority carriers) and few thermally generated electrons (minority carriers).\n\u2022 Why Other Choices are Incorrect: N-type materials have electrons as majority carriers and holes as minority carriers."
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
            "explanation": "\u2022 Why 'Forward bias: Closed switch (0 V drop); Reverse bias: Open switch (0 current)' is Correct: The Ideal (First) Approximation treats the diode as a perfect binary switch with zero forward voltage drop when ON and zero leakage current when OFF.\n\u2022 Why Other Choices are Incorrect: 0.7 V battery model corresponds to the Practical (Second) Approximation."
      },
      {
            "id": 22,
            "question": "In the Second (Practical) Approximation, a forward-biased diode is modeled as a switch in series with a:",
            "options": [
                  "Variable resistor",
                  "Constant voltage battery (V_B = 0.7 V for Si)",
                  "Capacitor",
                  "Current source"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Constant voltage battery (V_B = 0.7 V for Si)' is Correct: The Second Approximation accounts for barrier potential by modeling the diode as a switch in series with an opposing DC battery equal to the barrier voltage (0.7 V for Si, 0.3 V for Ge).\n\u2022 Why Other Choices are Incorrect: Adding a bulk resistor corresponds to the Third (Piecewise) Approximation."
      },
      {
            "id": 23,
            "question": "What is the region near the PN junction called where free electrons and holes recombine, leaving unneutralized donor and acceptor ions?",
            "options": [
                  "Conduction region",
                  "Depletion region (barrier region)",
                  "Saturation region",
                  "Substrate region"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Depletion region (barrier region)' is Correct: When a PN junction is formed, mobile charge carriers diffuse across and recombine, depleting the junction of free carriers and forming a depletion region of fixed ions.\n\u2022 Why Other Choices are Incorrect: Conduction region refers to energy bands, while saturation region refers to transistor operation."
      },
      {
            "id": 24,
            "question": "Under Reverse-Bias conditions, what happens to the depletion region width of a PN junction diode?",
            "options": [
                  "It shrinks to zero",
                  "It widens, increasing the internal barrier potential",
                  "It remains completely unchanged",
                  "It turns into a conductor"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'It widens, increasing the internal barrier potential' is Correct: Reverse bias pulls majority carriers away from the PN junction, widening the depletion layer and preventing forward current flow.\n\u2022 Why Other Choices are Incorrect: Forward bias shrinks the depletion region width."
      },
      {
            "id": 25,
            "question": "Which diode approximation incorporates the diode's internal bulk resistance (R_B) in series with the barrier voltage battery and switch?",
            "options": [
                  "First (Ideal) Approximation",
                  "Second (Practical) Approximation",
                  "Third (Piecewise Linear) Approximation",
                  "Fourth (Small-Signal) Approximation"
            ],
            "answer": 2,
            "explanation": "\u2022 Why 'Third (Piecewise Linear) Approximation' is Correct: The Third Approximation includes the internal bulk resistance of the semiconductor material (R_B) in series with the barrier battery (V_B) and switch.\n\u2022 Why Other Choices are Incorrect: First approximation has no voltage drop or resistance; Second approximation includes barrier voltage V_B but assumes R_B = 0."
      },

      {
            "id": 26,
            "question": "Which scientist and inventor is famous for discovering and pioneering Alternating Current (AC) power transmission systems?",
            "options": [
                  "Nikola Tesla",
                  "Alessandro Volta",
                  "Thomas Edison",
                  "James Clerk Maxwell"
            ],
            "answer": 0,
            "explanation": "\u2022 Why 'Nikola Tesla' is Correct: Nikola Tesla pioneered polyphase Alternating Current (AC) power systems, AC induction motors, and high-voltage AC transmission lines.\n\u2022 Why Other Choices are Incorrect: Alessandro Volta invented the battery, Thomas Edison advocated for Direct Current (DC), and Maxwell formulated electromagnetic theory."
      },
      {
            "id": 27,
            "question": "Who invented the first practical battery (the Voltaic Pile) in 1800, providing the world with its first source of continuous direct electric current?",
            "options": [
                  "Guglielmo Marconi",
                  "Alessandro Volta",
                  "Samuel Morse",
                  "Michael Faraday"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Alessandro Volta' is Correct: Alessandro Volta created the Voltaic Pile in 1800 (alternating discs of zinc and copper separated by brine-soaked cloth), producing the first chemical battery.\n\u2022 Why Other Choices are Incorrect: Marconi pioneered wireless radio, Morse developed telegraphy, and Faraday discovered electromagnetic induction."
      },
      {
            "id": 28,
            "question": "Who is credited with pioneering work in long-distance radio transmission and developing practical wireless telegraphy?",
            "options": [
                  "Tim Berners-Lee",
                  "Jack Kilby",
                  "Guglielmo Marconi",
                  "Alexander Graham Bell"
            ],
            "answer": 2,
            "explanation": "\u2022 Why 'Guglielmo Marconi' is Correct: Guglielmo Marconi sent the first transatlantic radio signal in 1901 and won the Nobel Prize for pioneering wireless radio communication.\n\u2022 Why Other Choices are Incorrect: Tim Berners-Lee created the World Wide Web, Jack Kilby co-invented the integrated circuit, and Bell invented the telephone."
      },
      {
            "id": 29,
            "question": "Which theoretical physicist is renowned for the formulation of classical electromagnetic theory (Maxwell's Equations), unifying electricity, magnetism, and light?",
            "options": [
                  "James Clerk Maxwell",
                  "Nikola Tesla",
                  "Samuel Morse",
                  "Heinrich Hertz"
            ],
            "answer": 0,
            "explanation": "\u2022 Why 'James Clerk Maxwell' is Correct: James Clerk Maxwell published his four unified field equations in 1865, proving that light is an electromagnetic wave.\n\u2022 Why Other Choices are Incorrect: Tesla pioneered AC power systems, Morse invented single-wire telegraphy, and Hertz experimentally demonstrated radio waves."
      },
      {
            "id": 30,
            "question": "Jack Kilby and Robert Noyce are celebrated in electronics history for which revolutionary breakthrough in the late 1950s?",
            "options": [
                  "Discovery of thermionic emission",
                  "Introduction of the Integrated Circuit (IC)",
                  "Development of the World Wide Web",
                  "Invention of the single-wire electric telegraph"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Introduction of the Integrated Circuit (IC)' is Correct: Jack Kilby (Texas Instruments) and Robert Noyce (Fairchild Semiconductor) independently invented the Integrated Circuit (IC), fabricating complete circuits on a single semiconductor chip.\n\u2022 Why Other Choices are Incorrect: Edison discovered thermionic emission, Berners-Lee created WWW, and Morse invented the telegraph."
      },
      {
            "id": 31,
            "question": "Which computer scientist is renowned for the development of the World Wide Web (WWW) in 1989 while working at CERN?",
            "options": [
                  "Alan Turing",
                  "Tim Berners-Lee",
                  "Steve Wozniak",
                  "Dennis Ritchie"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Tim Berners-Lee' is Correct: Sir Tim Berners-Lee invented the World Wide Web (WWW), HTML, HTTP, and the first browser at CERN in 1989.\n\u2022 Why Other Choices are Incorrect: Alan Turing developed theoretical computer science, Wozniak co-founded Apple, and Ritchie created C/Unix."
      },
      {
            "id": 32,
            "question": "Who developed the first successful single-wire electric telegraph and co-created the dot-and-dash signaling code named after him?",
            "options": [
                  "Samuel Morse",
                  "Alexander Graham Bell",
                  "Guglielmo Marconi",
                  "Thomas Edison"
            ],
            "answer": 0,
            "explanation": "\u2022 Why 'Samuel Morse' is Correct: Samuel Morse patented the single-wire electric telegraph in 1837 and created Morse Code for long-distance telecommunication.\n\u2022 Why Other Choices are Incorrect: Bell invented the telephone, Marconi developed radio transmission, and Edison invented the incandescent bulb."
      },
      {
            "id": 33,
            "question": "In a review matching historical pioneers with their legacies, which of the following pairings is INCORRECT?",
            "options": [
                  "Alessandro Volta \u2014 First Practical Battery",
                  "Guglielmo Marconi \u2014 Pioneering work in wireless radio transmission",
                  "Tim Berners-Lee \u2014 Development of the World Wide Web",
                  "Nikola Tesla \u2014 Invention of the vacuum tube Fleming valve"
            ],
            "answer": 3,
            "explanation": "\u2022 Why 'Nikola Tesla \u2014 Invention of the vacuum tube Fleming valve' is Correct (as the INCORRECT match): The vacuum tube (Fleming valve) was invented by John Ambrose Fleming in 1904. Nikola Tesla is famous for discovering and pioneering Alternating Current (AC) power systems.\n\u2022 Why Other Choices are Valid Matches: Volta created the first battery (1800), Marconi pioneered radio, and Berners-Lee invented the World Wide Web (1989)."
      },

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
            "explanation": "\u2022 Why 'It joins a metal layer (Anode) to an N-type semiconductor (Cathode), containing no P-type material' is Correct: A Schottky diode is a metal-semiconductor junction formed by bonding a metal (like gold, silver, or platinum) as the Anode to an N-type silicon Cathode, completely omitting P-type semiconductor material.\n\u2022 Why Other Choices are Incorrect: Traditional diodes use P-N semiconductor junctions; Schottky diodes rely on metal-N semiconductor junctions."
      },
      {
            "id": 35,
            "question": "What is the typical forward voltage drop across a Schottky diode when conducting current?",
            "options": [
                  "0.15 V to 0.45 V",
                  "0.60 V to 0.70 V",
                  "1.20 V to 1.50 V",
                  "2.00 V to 3.00 V"
            ],
            "answer": 0,
            "explanation": "\u2022 Why '0.15 V to 0.45 V' is Correct: The metal-semiconductor Schottky barrier potential is significantly lower than a standard PN junction, resulting in a low forward voltage drop of 0.15 V to 0.45 V.\n\u2022 Why Other Choices are Incorrect: Standard silicon PN diodes have a 0.6 V \u2013 0.7 V drop, while Light-Emitting Diodes (LEDs) require 1.5 V \u2013 3.0 V."
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
            "explanation": "\u2022 Why 'Because conduction involves only majority carriers (electrons) without minority carrier storage' is Correct: In Schottky diodes, current is carried almost exclusively by majority carriers (electrons). Since there are no stored minority carriers to clear out during turn-off, reverse recovery time is negligible (a few nanoseconds).\n\u2022 Why Other Choices are Incorrect: Standard PN diodes suffer from slow switching due to minority carrier storage in the depletion region."
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
            "explanation": "\u2022 Why 'Higher reverse leakage current and lower reverse breakdown voltage' is Correct: Because of the thin metal barrier, Schottky diodes experience higher reverse leakage current and lower reverse breakdown voltages, making them unsuitable for high-voltage circuits.\n\u2022 Why Other Choices are Incorrect: Schottky diodes excel in fast switching speed and low forward voltage drop."
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
            "explanation": "\u2022 Why 'From the Metal (Anode) to the N-type Semiconductor (Cathode)' is Correct: Forward bias connects the positive terminal to the Metal (Anode) and negative to N-type (Cathode), directing conventional current from Metal to N-type semiconductor.\n\u2022 Why Other Choices are Incorrect: Electron flow is in the opposite direction (N-type to Metal)."
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
            "explanation": "\u2022 Why 'Smartphone chargers, laptop power bricks, and computer motherboards' is Correct: Low forward voltage drop and fast switching speed minimize power loss and heat, making Schottky diodes ideal for high-frequency switch-mode power supplies and digital chargers.\n\u2022 Why Other Choices are Incorrect: High-voltage AC lines require high-breakdown silicon rectifiers, not Schottky diodes."
      },
      {
            "id": 40,
            "question": "Unlike a standard PN junction diode, a Zener diode is specifically designed and heavily doped to operate safely in which region?",
            "options": [
                  "Reverse-Bias breakdown region",
                  "Forward-bias saturation region",
                  "Cut-off region only",
                  "Thermal breakdown destruction region"
            ],
            "answer": 0,
            "explanation": "\u2022 Why 'Reverse-Bias breakdown region' is Correct: Zener diodes are manufactured with heavy doping to operate continuously and safely in reverse breakdown without causing permanent device damage.\n\u2022 Why Other Choices are Incorrect: Standard diodes overheat and fail if driven into reverse breakdown; Zener diodes are designed for it."
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
            "explanation": "\u2022 Why 'Maintaining a nearly constant voltage (Zener voltage V_Z) across its terminals during reverse breakdown' is Correct: Once the reverse breakdown voltage (Zener Voltage V_Z) is reached, the voltage across the Zener diode remains virtually constant even as reverse current varies widely.\n\u2022 Why Other Choices are Incorrect: Resistors and standard components change voltage with current, unlike Zener regulators."
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
            "explanation": "\u2022 Why 'Because both P-type and N-type regions are heavily doped with impurity atoms' is Correct: Heavy doping increases impurity ion density at the junction, creating an intense electric field across an extremely narrow depletion layer.\n\u2022 Why Other Choices are Incorrect: Light doping creates a wide depletion layer with high breakdown voltage."
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
            "explanation": "\u2022 Why 'Voltage regulation, surge protection, and stable voltage reference points' is Correct: The constant reverse breakdown voltage property enables Zener diodes to clamp overvoltages and regulate DC power supply rails.\n\u2022 Why Other Choices are Incorrect: LEDs emit light, BJTs amplify audio signals, and capacitors/batteries store energy."
      },
      {
            "id": 44,
            "question": "A Tunnel diode (Esaki diode) operates at ultra-high switching speeds due to which quantum mechanical phenomenon?",
            "options": [
                  "Quantum Tunneling",
                  "Thermionic emission",
                  "Photoelectric absorption",
                  "Secondary emission"
            ],
            "answer": 0,
            "explanation": "\u2022 Why 'Quantum Tunneling' is Correct: Quantum tunneling allows valence electrons to pass directly through an ultra-thin potential barrier at nearly the speed of light rather than climbing over the barrier.\n\u2022 Why Other Choices are Incorrect: Thermionic emission involves heating filaments, and photoelectric absorption involves photon energy."
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
            "explanation": "\u2022 Why 'It is heavily doped up to 1,000 times higher than a standard junction diode' is Correct: Ultra-heavy doping (~1000x standard levels) shrinks the depletion layer down to less than 10 nanometers, enabling quantum tunneling.\n\u2022 Why Other Choices are Incorrect: Light doping prevents tunneling by creating a wide barrier."
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
            "explanation": "\u2022 Why 'Negative Resistance Region (current decreases as forward voltage increases)' is Correct: As forward voltage increases past the peak point, energy bands misalign and reduce electron tunneling, causing current to fall as voltage increases (negative resistance).\n\u2022 Why Other Choices are Incorrect: Ordinary resistors obey Ohm's Law where current increases with voltage."
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
            "explanation": "\u2022 Why 'Valence electrons easily tunnel from P-side to N-side, conducting large reverse current immediately (acting as a backward diode)' is Correct: Due to heavy doping and energy band overlap, small reverse bias immediately initiates heavy electron tunneling, making it conduct heavily in reverse.\n\u2022 Why Other Choices are Incorrect: Standard diodes block reverse current until breakdown voltage is reached."
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
            "explanation": "\u2022 Why 'Germanium (Ge) and Gallium Arsenide (GaAs)' is Correct: Germanium and Gallium Arsenide have high electron mobility and suitable bandgap energies for high-efficiency quantum tunneling.\n\u2022 Why Other Choices are Incorrect: Copper and Aluminum are metals; Silicon Dioxide is an insulator."
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
            "explanation": "\u2022 Why 'Relaxation oscillators, ultra-high-speed switches, and Frequency Modulation (FM) receivers' is Correct: Negative dynamic resistance cancels circuit losses in high-frequency oscillators and enables sub-nanosecond pulse switching.\n\u2022 Why Other Choices are Incorrect: Transformers and relays are heavy magnetic/mechanical components."
      },

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
            "explanation": "\u2022 Why 'Reverse-Bias condition' is Correct: Photodiodes operate in Reverse-Bias (or zero bias) to widen the depletion region and establish a strong internal electric field that efficiently separates light-generated electron-hole pairs.\n\u2022 Why Other Choices are Incorrect: Forward biasing a photodiode conducts large forward current, masking photo-generated current and potentially damaging the sensor."
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
            "explanation": "\u2022 Why 'Converts light energy (photons) into electrical current (photocurrent)' is Correct: When incoming photons with energy greater than the semiconductor bandgap strike the depletion region, they excite bound electrons to create free electron-hole pairs, producing measurable photocurrent.\n\u2022 Why Other Choices are Incorrect: Solar cells also use this photoelectric principle for power generation, whereas LEDs do the reverse (electrical energy to light)."
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
            "explanation": "\u2022 Why 'Photocurrent is directly proportional to light intensity' is Correct: The Current-Light (I-L) relationship of a photodiode is highly linear: higher light intensity delivers more photons per second, creating more electron-hole pairs and higher photocurrent.\n\u2022 Why Other Choices are Incorrect: Inverse or exponential responses would distort linear light measurement."
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
            "explanation": "\u2022 Why 'A small reverse leakage current that flows even when no light is present' is Correct: Dark current is the minor reverse saturation current caused by thermal generation of electron-hole pairs when the photodiode is completely shielded from light.\n\u2022 Why Other Choices are Incorrect: Photodiodes do not emit light, and dark current is a tiny DC leakage current."
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
            "explanation": "\u2022 Why 'The P+ active surface region to maximize light absorption' is Correct: An Anti-Reflective (AR) coating or optical glass lens is placed over the active junction surface to reduce optical reflection losses and maximize photon entry into the depletion region.\n\u2022 Why Other Choices are Incorrect: The remaining body is coated in opaque black layer to block unwanted stray light."
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
            "explanation": "\u2022 Why 'Silicon, Germanium, and Indium Gallium Arsenide (InGaAs)' is Correct: Silicon (visible light), Germanium, and Indium Gallium Arsenide (InGaAs for long-wavelength infrared fiber optics) have suitable bandgaps for absorbing target light wavelengths.\n\u2022 Why Other Choices are Incorrect: Metals and plastics lack semiconductor bandgaps necessary for photon absorption."
      },
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
            "explanation": "\u2022 Why 'Forward-Bias condition' is Correct: In Forward Bias, external voltage pushes electrons from the N-region and holes from the P-region into the active junction layer, where they recombine and release energy as photons.\n\u2022 Why Other Choices are Incorrect: In Reverse Bias, the depletion region widens, blocking current and keeping the LED completely OFF."
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
            "explanation": "\u2022 Why 'The Active layer (middle region)' is Correct: The Active layer sandwiched between the P-type and N-type semiconductor layers provides the optimum energy bandgap region where injected electrons and holes recombine to emit photons.\n\u2022 Why Other Choices are Incorrect: The epoxy lens focuses the emitted light, while leads supply current."
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
            "explanation": "\u2022 Why 'Light emission when current flows through the diode' is Correct: The two outward-pointing arrows distinguish an LED from a standard diode, symbolizing light energy radiating outward upon forward conduction.\n\u2022 Why Other Choices are Incorrect: Inward-pointing arrows represent a Photodiode (absorbing incoming light)."
      },
      {
            "id": 59,
            "question": "What is the typical forward voltage (V_F) required to turn ON a standard Red Light-Emitting Diode (LED)?",
            "options": [
                  "1.8 V to 2.2 V",
                  "0.3 V to 0.4 V",
                  "5.0 V to 12.0 V",
                  "0.0 V"
            ],
            "answer": 0,
            "explanation": "\u2022 Why '1.8 V to 2.2 V' is Correct: Red LEDs typically require a minimum forward voltage (V_F) of 1.8 V to 2.2 V to initiate electroluminescence.\n\u2022 Why Other Choices are Incorrect: 0.3 V is for Germanium diodes, 0.7 V is for Silicon diodes, while Green LEDs require 2.0 V \u2013 3.2 V and Blue LEDs require 3.0 V \u2013 3.5 V."
      },
      {
            "id": 60,
            "question": "What is the typical recommended continuous forward current (I_F) range for operating standard indicator Light-Emitting Diodes (LEDs)?",
            "options": [
                  "10 mA to 20 mA",
                  "1 A to 5 A",
                  "100 A to 500 A",
                  "1 \u00b5A to 5 \u00b5A"
            ],
            "answer": 0,
            "explanation": "\u2022 Why '10 mA to 20 mA' is Correct: Standard commercial indicator LEDs achieve bright, reliable illumination at continuous forward currents of 10 mA to 20 mA.\n\u2022 Why Other Choices are Incorrect: Operating above 30\u201350 mA without heat sinking causes thermal destruction, while microamps are too low to illuminate standard LEDs."
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
            "explanation": "\u2022 Why 'R = (V_S - V_F) / I_F' is Correct: By Kirchhoff's Voltage Law, the resistor voltage is V_R = V_S - V_F. Applying Ohm's Law yields R = (V_S - V_F) / I_F to prevent overcurrent damage to the LED.\n\u2022 Why Other Choices are Incorrect: Multiplying or adding forward voltage violates Ohm's Law."
      },
      {
            "id": 62,
            "question": "What is the typical maximum safe Reverse Voltage rating (V_R) for most standard Light-Emitting Diodes (LEDs)?",
            "options": [
                  "3 V to 5 V",
                  "100 V to 1000 V",
                  "500 V to 2000 V",
                  "50 V to 100 V"
            ],
            "answer": 0,
            "explanation": "\u2022 Why '3 V to 5 V' is Correct: LEDs have relatively low reverse breakdown voltage ratings (typically 3 V to 5 V). Applying higher reverse voltage can damage the delicate PN junction.\n\u2022 Why Other Choices are Incorrect: Standard power rectifiers handle 100 V \u2013 1000 V reverse ratings, but LEDs cannot."
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
            "explanation": "\u2022 Why 'Emits visible or infrared light efficiently with a long operational lifespan' is Correct: LEDs convert electrical energy directly into light via electroluminescence, offering high energy efficiency, low heat generation, and tens of thousands of operating hours.\n\u2022 Why Other Choices are Incorrect: Standard diodes dissipate energy as heat rather than light."
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
            "explanation": "\u2022 Why 'TV and Air Conditioner remote controls and optical encoders' is Correct: An Infrared LED transmitter sends pulsed light signals to an Infrared Photodiode receiver, forming an optical communication link.\n\u2022 Why Other Choices are Incorrect: Transformers and pumps use magnetic or mechanical energy, not optoelectronic light pairs."
      },

      {
            "id": 65,
            "question": "Tunnel diodes are mainly used in:",
            "options": [
                  "Rectifiers",
                  "Oscillators and high-speed switches",
                  "Voltage regulators",
                  "Signal clippers"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Oscillators and high-speed switches' is Correct: Tunnel diodes possess negative dynamic resistance and an ultra-thin depletion layer, allowing them to switch in picoseconds and sustain high-frequency oscillations.\n\u2022 Why Other Choices are Incorrect: Standard diodes act as rectifiers and signal clippers, while Zener diodes serve as voltage regulators."
      },
      {
            "id": 66,
            "question": "Light-Emitting Diodes (LEDs) emit light because of:",
            "options": [
                  "Avalanche breakdown",
                  "Electron-hole recombination releasing photons",
                  "Thermal energy conversion",
                  "Tunneling effect"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Electron-hole recombination releasing photons' is Correct: When forward-biased, injected electrons from the N-region and holes from the P-region recombine in the active junction layer, releasing excess bandgap energy as photons (Electroluminescence).\n\u2022 Why Other Choices are Incorrect: Avalanche breakdown occurs in reverse breakdown, thermal energy causes heating, and tunneling effect powers Tunnel diodes."
      },
      {
            "id": 67,
            "question": "The forward voltage drop of a Light-Emitting Diode (LED) is typically in the range of:",
            "options": [
                  "0.3 \u2013 0.7 V",
                  "1 \u2013 3 V",
                  "5 \u2013 10 V",
                  "0.1 \u2013 0.2 V"
            ],
            "answer": 1,
            "explanation": "\u2022 Why '1 \u2013 3 V' is Correct: Because LEDs are fabricated from wide-bandgap compound semiconductors (like Gallium Arsenide and Gallium Phosphide), their forward barrier voltage drop ranges from 1.8 V to 3.5 V (commonly specified as 1 \u2013 3 V).\n\u2022 Why Other Choices are Incorrect: 0.3 \u2013 0.7 V applies to standard Germanium and Silicon PN diodes, while 0.1 \u2013 0.2 V applies to Schottky diodes."
      },
      {
            "id": 68,
            "question": "Which material is commonly used to make Light-Emitting Diodes (LEDs)?",
            "options": [
                  "Silicon",
                  "Germanium",
                  "Gallium compounds (GaAs, GaP)",
                  "Carbon"
            ],
            "answer": 2,
            "explanation": "\u2022 Why 'Gallium compounds (GaAs, GaP)' is Correct: Direct bandgap compound semiconductors such as Gallium Arsenide (GaAs) and Gallium Phosphide (GaP) allow efficient photon emission during carrier recombination.\n\u2022 Why Other Choices are Incorrect: Elemental Silicon and Germanium are indirect bandgap semiconductors that dissipate recombination energy as heat rather than light."
      },
      {
            "id": 69,
            "question": "An Light-Emitting Diode (LED) usually operates with a forward current in the range of:",
            "options": [
                  "0.1 \u2013 1 mA",
                  "10 \u2013 100 mA",
                  "1 \u2013 10 A",
                  "1 \u2013 10 \u00b5A"
            ],
            "answer": 1,
            "explanation": "\u2022 Why '10 \u2013 100 mA' is Correct: Standard illumination and indicator LEDs operate with forward currents in the 10 mA to 100 mA range (typically 10 \u2013 20 mA for standard indicators).\n\u2022 Why Other Choices are Incorrect: Microamps are too small to excite visible emission, while 1 \u2013 10 Amperes causes rapid thermal burnout."
      },

      {
            "id": 70,
            "question": "A photodiode is normally operated under:",
            "options": [
                  "Forward bias",
                  "Reverse bias",
                  "Zero bias",
                  "Breakdown condition"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Reverse bias' is Correct: Operating a photodiode under Reverse bias widens the depletion layer, creating a strong internal electric field that efficiently separates light-generated electron-hole pairs into photocurrent.\n\u2022 Why Other Choices are Incorrect: Forward bias allows heavy conventional current that masks light detection, while breakdown condition causes uncontrolled reverse avalanche."
      },
      {
            "id": 71,
            "question": "The output current of a photodiode is directly proportional to:",
            "options": [
                  "Forward voltage",
                  "Illumination intensity",
                  "Junction temperature only",
                  "Doping concentration"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Illumination intensity' is Correct: Higher illumination intensity delivers more photons per second into the depletion region, generating a linearly proportional increase in free electron-hole pairs and output photocurrent.\n\u2022 Why Other Choices are Incorrect: Forward voltage is not applied during photodiode operation, while temperature and doping affect noise rather than linear light response."
      },
      {
            "id": 72,
            "question": "Dark current in a photodiode is:",
            "options": [
                  "Reverse current with no light",
                  "Forward current under strong light",
                  "Current only at breakdown",
                  "Peak current under illumination"
            ],
            "answer": 0,
            "explanation": "\u2022 Why 'Reverse current with no light' is Correct: Dark current is the minor reverse saturation current generated by ambient thermal energy when the photodiode is completely shielded from light.\n\u2022 Why Other Choices are Incorrect: It is a reverse leakage current (not forward), and occurs specifically under zero light illumination."
      },
      {
            "id": 73,
            "question": "The tunnel diode exhibits which unique property?",
            "options": [
                  "Positive resistance",
                  "Negative resistance",
                  "Zero resistance",
                  "Infinite resistance"
            ],
            "answer": 1,
            "explanation": "\u2022 Why 'Negative resistance' is Correct: On its forward V-I characteristic curve between the peak point and valley point, increasing the forward voltage reduces energy band overlap, causing current to fall as voltage increases (Negative Dynamic Resistance).\n\u2022 Why Other Choices are Incorrect: Standard resistors exhibit positive resistance where current increases with voltage."
      },

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
            "explanation": "\u2022 Why 'Voltage-controlled capacitor' is Correct: A varactor diode operates under reverse bias where its depletion layer acts as a variable dielectric insulator between conductive P and N regions, creating a capacitance that varies with applied voltage.\n\u2022 Why Other Choices are Incorrect: Transistors act as current sources/amplifiers, while LEDs act as light sources."
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
            "explanation": "\u2022 Why 'Decreases' is Correct: Increasing reverse bias voltage widens the depletion layer (increasing plate separation d in C = \u03b5A/d), which causes junction capacitance to decrease.\n\u2022 Why Other Choices are Incorrect: Decreasing reverse bias shrinks the depletion layer, which increases capacitance."
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
            "explanation": "\u2022 Why 'f = 1 / (2 * pi * sqrt(L * C))' is Correct: The fundamental resonance frequency formula for an LC tuned circuit is f = 1 / (2\u03c0\u221a(LC)). Adjusting the varactor reverse voltage alters capacitance C, directly tuning the resonant frequency f.\n\u2022 Why Other Choices differ: Alternative formulas do not satisfy the required mathematical derivation for LC resonance."
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
            "explanation": "\u2022 Why 'Four-layer PNPN device' is Correct: A Shockley diode is a four-layer (P-N-P-N) semiconductor thyristor featuring two terminals (Anode and Cathode) and three PN junctions.\n\u2022 Why Other Choices are Incorrect: Standard diodes have 2 layers (PN), BJTs have 3 layers (NPN/PNP), and Schottky diodes are metal-semiconductor junctions."
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
            "explanation": "\u2022 Why 'Applied voltage exceeds breakover voltage' is Correct: A Shockley diode remains OFF in forward blocking mode until the applied forward voltage exceeds its characteristic breakover voltage (V_BO), causing it to switch into heavy conduction (ON state).\n\u2022 Why Other Choices are Incorrect: Dropping below holding current turns the diode OFF, while reverse bias blocks current."
      },

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
            "explanation": "\u2022 Why '0.3 V' is Correct: Schottky metal-semiconductor diodes feature a significantly lower barrier potential than standard silicon diodes, with a typical nominal forward voltage drop of approx 0.3 V (ranging between 0.15 V and 0.45 V).\n\u2022 Why Other Choices are Incorrect: 0.7 V is the forward drop of a standard Silicon PN diode, while 1.0 V is typical for power rectifiers under heavy load."
      },
      {
            "id": 80,
            "question": "(Problem) A 6 V supply is connected across a 330 \u03a9 resistor in series with a Light-Emitting Diode (LED) of 2 V forward drop. Calculate the current through the LED.",
            "options": [
                  "6 mA",
                  "12 mA",
                  "20 mA",
                  "40 mA"
            ],
            "answer": 1,
            "explanation": "\u2022 Why '12 mA' is Correct: By Kirchhoff's Voltage Law, resistor voltage V_R = V_S - V_F = 6 V - 2 V = 4 V. Applying Ohm's Law gives I = V_R / R = 4 V / 330 \u03a9 = 0.01212 A = 12.12 mA \u2248 12 mA.\n\u2022 Why Other Choices are Incorrect: 6 mA neglects the 2 V LED drop (using 2 V / 330 \u03a9), while 20 mA and 40 mA are arbitrary values."
      },
      {
            "id": 81,
            "question": "(Problem) A 10 pF varactor diode is used with a 100 \u00b5H coil. Find the resonant frequency.",
            "options": [
                  "1.6 MHz",
                  "500 kHz",
                  "5 MHz",
                  "160 MHz"
            ],
            "answer": 2,
            "explanation": "\u2022 Why '5 MHz' is Correct: Resonant frequency f = 1 / (2\u03c0\u221a(L * C)). Substituting L = 100 \u00b5H = 100 x 10^-6 H and C = 10 pF = 10 x 10^-12 F gives \u221a(L * C) = \u221a(10^-15) = 3.162 x 10^-8 s. Thus f = 1 / (2 * \u03c0 * 3.162 x 10^-8) = 5,032,921 Hz \u2248 5.03 MHz \u2248 5 MHz.\n\u2022 Why Other Choices differ: Alternative choices result from unit conversion errors (e.g. omitting 10^-12 for pico or 10^-6 for micro)."
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
            "explanation": "\u2022 Why '0.5 V' is Correct: In a full-wave bridge rectifier circuit, two diodes conduct simultaneously in series during each half-cycle. Total forward voltage drop V_total = 2 x V_diode = 2 x 0.25 V = 0.5 V.\n\u2022 Why Other Choices are Incorrect: 0.25 V counts only one diode, while 1.4 V is the drop across two standard silicon diodes (2 x 0.7 V)."
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
            "explanation": "\u2022 Why 'Schottky diode' is Correct: A Schottky metal-semiconductor diode exhibits extremely fast switching speed (nanosecond reverse recovery time) and low forward voltage drop (0.15 V to 0.45 V).\n\u2022 Why Other Choices are Incorrect: Zener diodes are for voltage regulation, LEDs emit light, and Tunnel diodes exhibit negative resistance."
      },

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
            "explanation": "\u2022 Why 'High-frequency rectifiers' is Correct: Because Schottky diodes feature metal-semiconductor junctions with virtually zero reverse recovery time, they excel at rectifying high-frequency Alternating Current (AC) signals without switching losses.\n\u2022 Why Other Choices are Incorrect: Audio amplifiers use transistors, low-frequency power supplies use Silicon PN rectifiers, and Zener diodes handle voltage regulation."
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
            "explanation": "\u2022 Why 'High-frequency applications' is Correct: Due to majority-carrier conduction, Schottky diodes switch in nanoseconds, making high-frequency Radio Frequency (RF) and switched-mode power supplies their primary application.\n\u2022 Why Other Choices are Incorrect: Zener diodes perform voltage regulation, standard diodes perform 60Hz AC rectification, and photodiodes perform light detection."
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
            "explanation": "\u2022 Why 'Light-emitting diode (LED)' is Correct: When forward-biased, a Light-Emitting Diode (LED) recombines electrons and holes in its active junction layer, directly releasing excess energy as visible or infrared photons.\n\u2022 Why Other Choices are Incorrect: Zener diodes regulate voltage, photodiodes absorb light to create current, and Schottky diodes are fast rectifiers."
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
            "explanation": "\u2022 Why 'Varactor diode' is Correct: Varying reverse voltage on a Varactor diode alters its junction capacitance, making it the primary tuning element in Voltage-Controlled Oscillators (VCOs) for frequency synthesis and multiplication.\n\u2022 Why Other Choices are Incorrect: Gunn diodes generate microwave signals, Zener diodes regulate DC voltage, and Tunnel diodes act as high-speed switches."
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
            "explanation": "\u2022 Why 'Zener diode' is Correct: Zener diodes maintain a constant reverse breakdown voltage (V_Z) across their terminals over a wide current range, making them ideal for DC voltage regulation.\n\u2022 Why Other Choices are Incorrect: Varactor diodes are variable capacitors, Schottky diodes are fast rectifiers, and Tunnel diodes are high-speed switches."
      },

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
            "explanation": "\u2022 Why 'Detect light and convert it into a current' is Correct: A photodiode operates under reverse bias where incoming optical photons generate electron-hole pairs, producing a photocurrent proportional to light intensity.\n\u2022 Why Other Choices are Incorrect: LEDs emit light, standard PN diodes rectify AC signals, and Varactor diodes provide variable capacitance."
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
            "explanation": "\u2022 Why 'High-frequency oscillators' is Correct: Tunnel diodes possess a negative dynamic resistance region and ultra-fast quantum tunneling speed, making them ideal for high-frequency microwave oscillators.\n\u2022 Why Other Choices are Incorrect: Zener diodes perform voltage regulation, photodiodes perform light detection, and standard diodes rectify low-frequency signals."
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
            "explanation": "\u2022 Why 'Varactor diode' is Correct: A Varactor diode (varicap) operates in reverse bias, using its variable depletion layer width to act as a voltage-controlled capacitor in electronic tuning circuits.\n\u2022 Why Other Choices are Incorrect: Tunnel diodes exhibit negative resistance, photodiodes sense light, and Schottky diodes are fast rectifiers."
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
            "explanation": "\u2022 Why 'Variable capacitance with voltage' is Correct: The fundamental feature of a Varactor diode is that its junction capacitance varies inversely with applied reverse bias voltage.\n\u2022 Why Other Choices are Incorrect: LEDs emit light, Schottky diodes perform high-speed switching, and standard diodes rectify signals."
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
            "explanation": "\u2022 Why 'Microwave oscillators' is Correct: Gunn diodes utilize the Gunn effect (transferred electron effect in bulk N-type Gallium Arsenide) to generate high-frequency microwave oscillations in RF transmitters and radar systems.\n\u2022 Why Other Choices are Incorrect: Zener diodes perform voltage regulation, photodiodes perform light detection, and PN junction diodes rectify AC signals."
      },

      {
            "id": 94,
            "question": "(Problem) An AC voltage with peak value V_p = 20 V is connected in series with a silicon diode (forward voltage drop V_D = 0.7 V, forward bulk resistance R_f = 10 \u03a9) and a load resistor R_L = 500 \u03a9. Find the peak current through the diode.",
            "options": [
                  "37.84 mA",
                  "40.00 mA",
                  "38.60 mA",
                  "35.20 mA"
            ],
            "answer": 0,
            "explanation": "\u2022 Why '37.84 mA' is Correct: By Kirchhoff's Voltage Law, V_p - V_D = I * (R_f + R_L). Substituting values: 20 V - 0.7 V = I * (10 \u03a9 + 500 \u03a9) => 19.3 V = 510 \u03a9 * I. Therefore, peak current I_peak = 19.3 V / 510 \u03a9 = 0.037843 A = 37.84 mA.\n\u2022 Why Other Choices are Incorrect: 40.00 mA assumes an ideal diode (20 V / 500 \u03a9), while 38.60 mA ignores the 10 \u03a9 internal diode resistance."
      },
      {
            "id": 95,
            "question": "(Problem) For the silicon diode circuit in Problem 94 (V_p = 20 V, V_D = 0.7 V, R_f = 10 \u03a9, R_L = 500 \u03a9), calculate the peak output voltage V_out measured across the 500 \u03a9 load resistor.",
            "options": [
                  "18.92 V",
                  "20.00 V",
                  "19.30 V",
                  "17.50 V"
            ],
            "answer": 0,
            "explanation": "\u2022 Why '18.92 V' is Correct: The peak output voltage across the load resistor is V_out = I_peak * R_L = (0.037843 A) * 500 \u03a9 = 18.9215 V \u2248 18.92 V.\n\u2022 Why Other Choices are Incorrect: 20.00 V assumes an ideal diode with zero voltage drop, while 19.30 V neglects the 10 \u03a9 internal diode resistance."
      },
      {
            "id": 96,
            "question": "(Problem) If the silicon diode in Problem 94 (V_p = 20 V, R_L = 500 \u03a9) is assumed to be ideal (V_D = 0 V, R_f = 0 \u03a9), what are the values of peak current and peak output voltage?",
            "options": [
                  "Peak Current = 40.00 mA, Peak Output Voltage = 20.00 V",
                  "Peak Current = 37.84 mA, Peak Output Voltage = 18.92 V",
                  "Peak Current = 38.60 mA, Peak Output Voltage = 19.30 V",
                  "Peak Current = 50.00 mA, Peak Output Voltage = 25.00 V"
            ],
            "answer": 0,
            "explanation": "\u2022 Why 'Peak Current = 40.00 mA, Peak Output Voltage = 20.00 V' is Correct: For an ideal diode, forward voltage drop V_D = 0 V and internal resistance R_f = 0 \u03a9. Thus I_peak = 20 V / 500 \u03a9 = 40 mA, and V_out = 20 V.\n\u2022 Why Other Choices differ: 37.84 mA / 18.92 V corresponds to the practical diode model with 0.7 V drop and 10 \u03a9 forward resistance."
      },
      {
            "id": 97,
            "question": "(Problem) A 20 V DC source is connected to a parallel combination of a Silicon diode (V_D = 0.7 V) and a Germanium diode (V_D = 0.3 V), connected in series with a 3 k\u03a9 load resistor. Using practical diode models, what is the node voltage V_A across the 3 k\u03a9 resistor?",
            "options": [
                  "19.70 V",
                  "19.30 V",
                  "20.00 V",
                  "0.40 V"
            ],
            "answer": 0,
            "explanation": "\u2022 Why '19.70 V' is Correct: Germanium (Ge) turns ON at 0.3 V, which is lower than Silicon's 0.7 V turn-on threshold. The Germanium diode conducts first and clamps the diode voltage drop to 0.3 V, keeping the Silicon diode OFF. Thus V_A = 20 V - 0.3 V = 19.70 V.\n\u2022 Why Other Choices are Incorrect: 19.30 V assumes the Silicon diode conducts (20 V - 0.7 V), but Silicon remains cut off because Germanium clamps the node first."
      },
      {
            "id": 98,
            "question": "(Problem) Calculate the current I through the 3 k\u03a9 resistor for the parallel Silicon/Germanium diode circuit in Problem 97 (V_S = 20 V, Germanium drop = 0.3 V, R = 3 k\u03a9).",
            "options": [
                  "6.57 mA",
                  "5.90 mA",
                  "6.43 mA",
                  "6.67 mA"
            ],
            "answer": 0,
            "explanation": "\u2022 Why '6.57 mA' is Correct: The voltage across the 3 k\u03a9 load resistor is V_A = 20 V - 0.3 V = 19.7 V. Applying Ohm's Law gives I = V_A / R = 19.7 V / 3000 \u03a9 = 0.0065667 A \u2248 6.57 mA.\n\u2022 Why Other Choices differ: 5.90 mA occurs if an additional 2 V drop is subtracted, while 6.43 mA occurs if Silicon's 0.7 V drop is used."
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
            "explanation": "\u2022 Why 'Zener diode' is Correct: The Zener diode schematic symbol features diagonal bent ends on its cathode bar, forming a characteristic 'Z' shape.\n\u2022 Why Other Choices differ: Schottky diodes have S-like bent ends, Tunnel diodes have bracketed ends, and Varactor diodes feature parallel capacitor lines."
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
            "explanation": "\u2022 Why 'Light-Emitting Diode (LED)' is Correct: Two outward-pointing arrows symbolize light emission from the active junction of a Light-Emitting Diode (LED).\n\u2022 Why Other Choices differ: Inward-pointing arrows symbolize light absorption in a Photodiode."
      },

      {
            "id": 101,
            "question": "Which type of electron emission occurs when a metal is heated to a high temperature (around 2500 \u00b0C) so that free electrons gain sufficient kinetic energy to escape from the surface?",
            "options": [
                  "Thermionic emission",
                  "Field emission",
                  "Photoelectric emission",
                  "Secondary emission"
            ],
            "answer": 0,
            "explanation": "\u2022 Why 'Thermionic emission' is Correct: Thermionic emission relies on thermal energy (heating a metal cathode to high temperatures) to impart kinetic energy to electrons so they overcome the surface barrier and emit into space, as used in vacuum tubes.\n\u2022 Why Other Choices are Incorrect: Field emission uses high electric fields, photoelectric emission uses light photons, and secondary emission uses electron bombardment."
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
            "explanation": "\u2022 Why 'Work function' is Correct: The Work Function (\u03a6) defines the minimum energy required to liberate an electron from the attractive nuclear forces at a metal surface.\n\u2022 Why Other Choices are Incorrect: Bandgap energy is the forbidden energy gap between valence and conduction bands in crystals."
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
            "explanation": "\u2022 Why '1.602 x 10^-19 J' is Correct: By definition, 1 electron-volt (1 eV) is the kinetic energy gained by a single electron moving through a potential difference of 1 volt, equal to 1.602 x 10^-19 Joules.\n\u2022 Why Other Choices differ: 9.109 x 10^-31 kg is electron mass, and 6.022 x 10^23 is Avogadro's number."
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
            "explanation": "\u2022 Why 'Secondary emission' is Correct: Secondary emission occurs when high-velocity primary electrons bombard a metal surface, transferring momentum to knock bound electrons out of the metal.\n\u2022 Why Other Choices are Incorrect: Thermionic uses heat, field uses high voltage, and photoelectric uses light photons."
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
            "explanation": "\u2022 Why 'Pauli Exclusion Principle' is Correct: Wolfgang Pauli's Exclusion Principle dictates that no two identical fermions (electrons) can occupy the same quantum state, establishing atomic electron shell structures.\n\u2022 Why Other Choices differ: Heisenberg's uncertainty principle limits simultaneous measurement of position and momentum."
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
            "explanation": "\u2022 Why 'E_g = E_C - E_V' is Correct: The bandgap energy (E_g) represents the energy difference between the bottom of the conduction band (E_C) and the top of the valence band (E_V).\n\u2022 Why Other Choices differ: Adding, multiplying, or dividing band energies violates solid-state energy band definitions."
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
            "explanation": "\u2022 Why 'Field emission (Cold emission)' is Correct: Field emission applies an intense positive electric field at a metal surface to lower the potential barrier, allowing electrons to tunnel out without thermal heating.\n\u2022 Why Other Choices are Incorrect: Thermionic emission requires heating the cathode to high temperatures."
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
            "explanation": "\u2022 Why 'Because their valence and conduction energy bands overlap with no significant forbidden bandgap' is Correct: In metallic conductors, the highest filled valence band overlaps directly with the conduction band (E_g \u2248 0), allowing free electrons to move freely upon applying a voltage.\n\u2022 Why Other Choices are Incorrect: Wide bandgaps (>5 eV) characterize insulators, not conductors."
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
            "explanation": "\u2022 Why 'Octet Rule' is Correct: The Octet Rule dictates that atoms achieve maximum chemical stability by gaining, losing, or sharing electrons (covalent bonding) to fill their valence shell with 8 electrons.\n\u2022 Why Other Choices are Incorrect: Ohm's Law relates V, I, and R; Faraday's Law governs induction."
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
            "explanation": "\u2022 Why 'Zener = Voltage regulation, Schottky = Fast switching, Tunnel = Negative resistance, Varactor = Variable capacitance' is Correct: This summarizes core diode functions: Zener operates in reverse breakdown for voltage regulation; Schottky has zero reverse recovery for fast switching; Tunnel exhibits negative resistance via quantum tunneling; Varactor acts as a voltage-controlled variable capacitor.\n\u2022 Why Other Choices are Incorrect: Swapping functions confuses diode device physics."
      },

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
            "explanation": "\u2022 Why 'Diode with a bent Z cathode bar' is Correct: The Zener diode symbol features diagonal bent ends on its cathode bar, forming a distinct 'Z' shape to indicate operation in reverse breakdown voltage regulation.\n\u2022 Why Other Choices differ: Two outward arrows represent an LED, S-shaped cathode represents a Schottky diode, and parallel capacitor lines represent a Varicap/Varactor diode."
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
            "explanation": "\u2022 Why 'Diode with two outward-pointing arrows' is Correct: The Light-Emitting Diode (LED) symbol uses two outward-pointing arrows to signify photon emission during electron-hole recombination under forward bias.\n\u2022 Why Other Choices differ: Inward-pointing arrows signify light absorption in a Photo Diode."
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
            "explanation": "\u2022 Why 'Diode with two inward-pointing arrows' is Correct: The Photo Diode symbol features two inward-pointing arrows to represent incoming optical photons that generate photocurrent under reverse bias.\n\u2022 Why Other Choices differ: Outward arrows represent LED light emission."
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
            "explanation": "\u2022 Why 'Diode with S-shaped bent cathode bar' is Correct: The Schottky diode symbol features an S-like curved cathode bar representing its metal-semiconductor junction with zero reverse recovery time.\n\u2022 Why Other Choices differ: Z-shaped bar represents Zener, bracket represents Tunnel diode."
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
            "explanation": "\u2022 Why 'Diode with bracket-shaped cathode bar' is Correct: The Tunnel diode symbol features right-angled square brackets on its cathode bar, symbolizing quantum tunneling and negative dynamic resistance.\n\u2022 Why Other Choices differ: S-shaped bar represents Schottky, Z-shaped bar represents Zener."
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
            "explanation": "\u2022 Why 'Diode with parallel capacitor lines at cathode' is Correct: The Varicap/Varactor diode symbol combines a standard diode triangle with a parallel capacitor plate at its cathode, denoting voltage-controlled variable capacitance.\n\u2022 Why Other Choices differ: Outward arrows represent LED, Z-bar represents Zener, bracket represents Tunnel diode."
      },

      {
            "id": 117,
            "question": "1. Statement: Germanium diodes begin conducting at a higher forward voltage threshold than Silicon diodes.",
            "options": [
                  "a. True, because Germanium has a wider bandgap energy than Silicon.",
                  "b. True, because Germanium exhibits lower thermal stability under direct current bias.",
                  "c. False, because Germanium has a lower potential barrier compared to Silicon.",
                  "d. False, because both materials possess identical potential barriers of 0.5 V at room temperature."
            ],
            "answer": 2,
            "explanation": "\u2022 Why Choice C is Correct: Germanium (Ge) has a lower barrier potential (approx 0.3 V) compared to Silicon (Si, approx 0.7 V). Therefore, Germanium begins conducting at a lower forward voltage threshold, making the statement False.\n\u2022 Why Other Choices are Incorrect: Germanium has a smaller bandgap (~0.67 eV vs Si 1.1 eV), and Germanium's potential barrier is 0.3 V, not equal to 0.7 V."
      },
      {
            "id": 118,
            "question": "2. Statement: Doping a semiconductor with trivalent impurities produces donor atoms that increase the concentration of free electrons.",
            "options": [
                  "a. True, because trivalent atoms donate three extra electrons to the crystal lattice.",
                  "b. True, because trivalent impurities increase total negative charge density.",
                  "c. False, because trivalent impurities are acceptor atoms that create excess holes in P-type material.",
                  "d. False, because trivalent impurities form metallic bonds that prevent current flow."
            ],
            "answer": 2,
            "explanation": "\u2022 Why Choice C is Correct: Trivalent impurities (e.g. Boron, Gallium, Indium) have 3 valence electrons and act as acceptor atoms that accept electrons to create excess holes, forming P-type material. Pentavalent impurities are donors that create free electrons.\n\u2022 Why Other Choices are Incorrect: Trivalent atoms create holes, not free electron donors."
      },
      {
            "id": 119,
            "question": "3. Statement: In the First Approximation (Ideal Diode Model), a forward-biased diode is treated as a closed switch with zero voltage drop.",
            "options": [
                  "a. True, because the ideal model neglects the barrier potential and internal forward resistance.",
                  "b. True, because ideal diodes convert all applied forward voltage directly into heat energy.",
                  "c. False, because the ideal model includes a fixed 0.7 V battery drop across the terminals.",
                  "d. False, because ideal diodes offer infinite resistance regardless of polarity."
            ],
            "answer": 0,
            "explanation": "\u2022 Why Choice A is Correct: The First Approximation (Ideal Diode) simplifies forward bias to a closed switch (V_D = 0 V, R_f = 0 \u03a9) and reverse bias to an open switch, completely neglecting barrier potential and internal resistance.\n\u2022 Why Other Choices are Incorrect: The ideal model has 0 V drop, unlike the practical second approximation which includes a 0.7 V drop."
      },
      {
            "id": 120,
            "question": "4. Statement: A reverse-biased practical diode permits zero electrical current to pass through its PN junction under all operational conditions.",
            "options": [
                  "a. True, because the depletion region forms an absolute physical barrier to charge flow.",
                  "b. True, because minority charge carriers cannot exist in P-type or N-type materials.",
                  "c. False, because a very small reverse saturation leakage current flows due to thermally generated minority carriers.",
                  "d. False, because forward current and reverse current are always equal in magnitude in PN junctions."
            ],
            "answer": 2,
            "explanation": "\u2022 Why Choice C is Correct: In reverse bias, a small reverse saturation leakage current (I_S) flows due to thermally generated minority carriers crossing the junction. Therefore, the statement claiming zero current is False.\n\u2022 Why Other Choices are Incorrect: Minority carriers are generated by thermal energy and produce reverse leakage current."
      },
      {
            "id": 121,
            "question": "5. Statement: The Second Approximation of a diode models the device as an ideal switch in series with a DC voltage source equal to its barrier potential.",
            "options": [
                  "a. True, because it accounts for the threshold knee voltage required to initiate forward conduction while ignoring bulk resistance.",
                  "b. True, because it includes the internal forward resistance alongside the junction capacitance.",
                  "c. False, because the second approximation ignores barrier potential and only models internal resistance.",
                  "d. False, because the second approximation applies strictly to reverse-bias operational calculations."
            ],
            "answer": 0,
            "explanation": "\u2022 Why Choice A is Correct: The Second Approximation (Practical Diode) models forward bias as a closed switch in series with a 0.7 V battery (for Si) or 0.3 V (for Ge), representing barrier knee voltage while omitting bulk resistance.\n\u2022 Why Other Choices are Incorrect: Bulk resistance is only added in the third approximation."
      },
      {
            "id": 122,
            "question": "6. Statement: The Third Approximation of a diode is also referred to as the Piecewise Linear Model.",
            "options": [
                  "a. True, because it combines the barrier voltage with the internal forward resistance of the semiconductor.",
                  "b. True, because it treats the diode as a variable AC voltage generator under steady-state DC conditions.",
                  "c. False, because the piecewise linear model applies only to the First (Ideal) Approximation.",
                  "d. False, because the third approximation assumes zero internal resistance during conduction."
            ],
            "answer": 0,
            "explanation": "\u2022 Why Choice A is Correct: The Third Approximation incorporates the threshold voltage V_D and internal bulk resistance r_f into a two-segment linear I-V curve, which is officially named the Piecewise Linear Model.\n\u2022 Why Other Choices are Incorrect: The piecewise linear model specifically includes internal resistance r_f."
      },
      {
            "id": 123,
            "question": "7. Statement: GaAs is a single-crystal elemental semiconductor like Silicon and Germanium.",
            "options": [
                  "a. True, because GaAs is composed of a single element from Group IV of the periodic table.",
                  "b. True, because GaAs possess identical electronic properties to pure Silicon crystals.",
                  "c. False, because GaAs is a compound semiconductor made from Gallium and Arsenic.",
                  "d. False, because GaAs is a synthetic ceramic insulator incapable of conducting current."
            ],
            "answer": 2,
            "explanation": "\u2022 Why Choice C is Correct: Gallium Arsenide (GaAs) is a Group III-V compound semiconductor formed chemically by Gallium and Arsenic, unlike Silicon and Germanium which are single-element single-crystal semiconductors.\n\u2022 Why Other Choices are Incorrect: GaAs is not a single element."
      },
      {
            "id": 124,
            "question": "8. Statement: Applying a forward bias to a PN junction diode lowers the internal potential barrier across the depletion region.",
            "options": [
                  "a. True, because the external voltage opposes the built-in electric field, narrowing the depletion region.",
                  "b. True, because the external voltage forces minority carriers to widen the depletion region.",
                  "c. False, because forward biasing increases the internal potential barrier to prevent breakdown.",
                  "d. False, because external voltage bias has no physical effect on depletion region width."
            ],
            "answer": 0,
            "explanation": "\u2022 Why Choice A is Correct: Forward bias applies positive voltage to the P-side and negative to the N-side, opposing the internal junction field, narrowing the depletion region, and lowering the barrier potential.\n\u2022 Why Other Choices are Incorrect: Reverse bias widens the depletion region, while forward bias thins it."
      },
      {
            "id": 125,
            "question": "9. Statement: Increasing the temperature of a semiconductor material increases its electrical resistance.",
            "options": [
                  "a. True, because thermal vibration impairs covalent bonding, reducing the number of charge carriers.",
                  "b. True, because semiconductors have a positive temperature coefficient of resistance like copper.",
                  "c. False, because thermal energy generates additional electron-hole pairs, decreasing electrical resistance.",
                  "d. False, because temperature changes affect electrical insulators exclusively."
            ],
            "answer": 2,
            "explanation": "\u2022 Why Choice C is Correct: Semiconductors have a Negative Temperature Coefficient (NTC). As temperature rises, thermal energy breaks covalent bonds and creates additional electron-hole pairs, increasing conductivity and decreasing resistance.\n\u2022 Why Other Choices are Incorrect: Metals have a positive temperature coefficient, but semiconductors have a negative temperature coefficient."
      },
      {
            "id": 126,
            "question": "10. Statement: Under zero bias conditions, an electrical current flows spontaneously through an isolated PN junction diode due to concentration gradients.",
            "options": [
                  "a. True, because diffusion of majority carriers creates a continuous closed-loop direct current.",
                  "b. True, because the built-in voltage acts as an internal DC power supply.",
                  "c. False, because carrier diffusion is counterbalanced by drift current in equilibrium, resulting in zero net current.",
                  "d. False, because charge carriers cannot move within semiconductor materials without external light exposure."
            ],
            "answer": 2,
            "explanation": "\u2022 Why Choice C is Correct: At thermal equilibrium (zero bias), the forward diffusion current of majority carriers is exactly equal and opposite to the reverse drift current of thermally generated minority carriers, making net current zero.\n\u2022 Why Other Choices are Incorrect: No net current flows without an external energy source."
      },
      {
            "id": 127,
            "question": "11. (Problem) A Silicon diode is connected in a simple series circuit with a 1.2 k\u03a9 load resistor and a DC source V_S = 12 V. Using the Second Approximation, calculate the total circuit current I_D in milliamperes (mA).",
            "options": [
                  "a. 9.4167 mA",
                  "b. 10.0 mA",
                  "c. 8.8333 mA",
                  "d. 9.15 mA"
            ],
            "answer": 0,
            "explanation": "\u2022 Why '9.4167 mA' is Correct: By the Second Approximation, Silicon forward voltage V_D = 0.7 V. Voltage across load resistor V_R = V_S - V_D = 12 V - 0.7 V = 11.3 V. By Ohm's Law, I_D = V_R / R_L = 11.3 V / 1200 \u03a9 = 0.00941667 A = 9.4167 mA.\n\u2022 Why Other Choices are Incorrect: 10.0 mA assumes an ideal diode (12 V / 1200 \u03a9), while 8.8333 mA assumes an incorrect drop."
      },
      {
            "id": 128,
            "question": "12. (Problem) For the same series circuit described in Item 11 (V_S = 12 V, Silicon diode V_D = 0.7 V, R_L = 1.2 k\u03a9, I_D = 9.4167 mA), calculate the power dissipated by the Silicon diode (P_D) in milliwatts (mW) using the Second Approximation.",
            "options": [
                  "a. 7.1 mW",
                  "b. 6.5917 mW",
                  "c. 6.1833 mW",
                  "d. 8.4 mW"
            ],
            "answer": 1,
            "explanation": "\u2022 Why '6.5917 mW' is Correct: Power dissipated by diode P_D = V_D * I_D = 0.7 V * 9.416667 mA = 6.591667 mW \u2248 6.5917 mW.\n\u2022 Why Other Choices are Incorrect: 7.1 mW and 6.1833 mW use incorrect current or voltage values."
      },
      {
            "id": 129,
            "question": "13. (Problem) A Germanium diode exhibits an internal forward resistance r_f = 15 \u03a9. It is connected in series with a load resistor R_L = 470 \u03a9 and a 9 V DC supply. Using the Third Approximation, calculate the total current in milliamperes (mA).",
            "options": [
                  "a. 18.5106 mA",
                  "b. 17.9381 mA",
                  "c. 19.1489 mA",
                  "d. 17.3913 mA"
            ],
            "answer": 1,
            "explanation": "\u2022 Why '17.9381 mA' is Correct: Third Approximation for Germanium: V_D = 0.3 V, internal resistance r_f = 15 \u03a9. Total circuit resistance R_total = r_f + R_L = 15 \u03a9 + 470 \u03a9 = 485 \u03a9. Current I = (V_S - V_D) / R_total = (9 V - 0.3 V) / 485 \u03a9 = 8.7 V / 485 \u03a9 = 0.01793814 A = 17.9381 mA.\n\u2022 Why Other Choices are Incorrect: 18.5106 mA ignores internal resistance r_f (8.7 V / 470 \u03a9)."
      },
      {
            "id": 130,
            "question": "14. (Problem) Using the parameters and results from Item 13 (V_S = 9 V, Germanium V_D = 0.3 V, r_f = 15 \u03a9, R_L = 470 \u03a9, I = 17.9381 mA), calculate the actual terminal voltage drop across the Germanium diode in volts using the Third Approximation.",
            "options": [
                  "a. 0.3 V",
                  "b. 0.5691 V",
                  "c. 0.2691 V",
                  "d. 0.45 V"
            ],
            "answer": 1,
            "explanation": "\u2022 Why '0.5691 V' is Correct: Actual diode terminal voltage V_terminal = V_D + (I * r_f) = 0.3 V + (0.01793814 A * 15 \u03a9) = 0.3 V + 0.269072 V = 0.569072 V \u2248 0.5691 V.\n\u2022 Why Other Choices are Incorrect: 0.3 V is only the knee voltage without internal resistance voltage drop."
      },
      {
            "id": 131,
            "question": "15. (Problem) A Gallium Arsenide (GaAs) diode (V_F = 1.2 V) is connected across a 15 V DC source in series with a 2.2 k\u03a9 resistor. Using the Second Approximation, determine the voltage across the load resistor V_L in volts (V).",
            "options": [
                  "a. 15 V",
                  "b. 13.8 V",
                  "c. 1.2 V",
                  "d. 14.3 V"
            ],
            "answer": 1,
            "explanation": "\u2022 Why '13.8 V' is Correct: GaAs forward barrier voltage V_F = 1.2 V. By Kirchhoff's Voltage Law, voltage across load resistor V_L = V_S - V_F = 15 V - 1.2 V = 13.8 V.\n\u2022 Why Other Choices are Incorrect: 15 V neglects diode drop, 1.2 V is the diode drop itself, and 14.3 V assumes 0.7 V drop."
      },
      {
            "id": 132,
            "question": "16. (Problem) Two identical Silicon diodes are connected in series with a 680 \u03a9 load resistor and a 10 V DC voltage supply. Using the Second Approximation, calculate the total circuit current in milliamperes (mA).",
            "options": [
                  "a. 13.6765 mA",
                  "b. 12.6471 mA",
                  "c. 14.7059 mA",
                  "d. 11.6176 mA"
            ],
            "answer": 1,
            "explanation": "\u2022 Why '12.6471 mA' is Correct: Two series Silicon diodes drop V_total = 2 * 0.7 V = 1.4 V. Resistor voltage V_R = 10 V - 1.4 V = 8.6 V. Circuit current I = 8.6 V / 680 \u03a9 = 0.01264706 A = 12.6471 mA.\n\u2022 Why Other Choices are Incorrect: 13.6765 mA counts only one diode drop (9.3 V / 680 \u03a9)."
      },
      {
            "id": 133,
            "question": "17. (Problem) For a series circuit with a 10 V DC source and a single Silicon diode (V_D = 0.7 V) connected across a 330 \u03a9 load resistor, calculate the load voltage V_L across the 330 \u03a9 resistor in volts (V).",
            "options": [
                  "a. 9.3 V",
                  "b. 4.3 V",
                  "c. 10.0 V",
                  "d. 7.9 V"
            ],
            "answer": 0,
            "explanation": "\u2022 Why '9.3 V' is Correct: By KVL, load voltage V_L = V_S - V_D = 10 V - 0.7 V = 9.3 V.\n\u2022 Why Other Choices are Incorrect: 4.3 V corresponds to a 5 V source (5 V - 0.7 V), while 10.0 V ignores diode barrier drop."
      },
      {
            "id": 134,
            "question": "18. (Problem) Two Silicon diodes are connected in parallel with each other in the forward direction. This parallel branch is placed in series with a 330 \u03a9 resistor and a 5 V DC supply. Assuming equal current sharing, calculate the current through each individual diode in milliamperes (mA) using the Second Approximation.",
            "options": [
                  "a. 13.0303 mA",
                  "b. 6.5152 mA",
                  "c. 7.5758 mA",
                  "d. 3.2576 mA"
            ],
            "answer": 1,
            "explanation": "\u2022 Why '6.5152 mA' is Correct: Parallel Silicon diodes clamp the branch voltage to V_D = 0.7 V. Resistor voltage V_R = 5 V - 0.7 V = 4.3 V. Total supply current I_total = 4.3 V / 330 \u03a9 = 13.0303 mA. Since current divides equally between two parallel diodes: I_diode = 13.0303 mA / 2 = 6.51515 mA \u2248 6.5152 mA.\n\u2022 Why Other Choices are Incorrect: 13.0303 mA is total circuit current before dividing by 2."
      },
      {
            "id": 135,
            "question": "19. (Problem) An ideal Silicon diode is connected in reverse bias across a 24 V DC supply in series with a 1 k\u03a9 resistor. Calculate the terminal voltage across the reverse-biased diode V_D in volts (V).",
            "options": [
                  "a. 0 V",
                  "b. 24 V",
                  "c. 12 V",
                  "d. 0.7 V"
            ],
            "answer": 1,
            "explanation": "\u2022 Why '24 V' is Correct: In reverse bias, an ideal diode acts as an open circuit (I = 0). With zero current flowing through the resistor (V_R = 0 V), the full 24 V supply voltage drops across the open diode terminals.\n\u2022 Why Other Choices are Incorrect: 0 V occurs across an ideal diode in forward bias, not reverse bias."
      },
      {
            "id": 136,
            "question": "20. (Problem) A Silicon diode and a Germanium diode are connected in parallel (facing the same forward conduction path) in series with a 1.5 k\u03a9 load resistor and a 12 V DC source. Using the Second Approximation, determine the total current drawn from the supply in milliamperes (mA).",
            "options": [
                  "a. 7.5333 mA",
                  "b. 7.8000 mA",
                  "c. 7.2667 mA",
                  "d. 8.0000 mA"
            ],
            "answer": 1,
            "explanation": "\u2022 Why '7.8000 mA' is Correct: Germanium turns ON at 0.3 V, which is lower than Silicon's 0.7 V threshold. Germanium conducts first and clamps the node voltage to 0.3 V, keeping Silicon OFF. Resistor voltage V_R = 12 V - 0.3 V = 11.7 V. Total current I = 11.7 V / 1500 \u03a9 = 0.0078 A = 7.8 mA.\n\u2022 Why Other Choices are Incorrect: 7.5333 mA assumes Silicon conducts (11.3 V / 1500 \u03a9 = 7.533 mA), but Silicon remains OFF."
      }













]
  },

  fluid_mechanics: {
    title: "Fluid Mechanics",
    chapter: "Chapter 11",
    questions: [
      { id: 1, question: "If the energy of the incident photon is less than the work function:", options: ["An electron will be ejected", "More than one electron will be ejected", "An electron will not be ejected", "Less than one electron will be ejected"], answer: 2, explanation: "• Why 'An electron will not be ejected' is Correct: Photons deliver energy in discrete quanta (E = hν). If the photon energy is less than the metal's work function (Φ), no single photon carries enough energy to overcome the binding force and free an electron.\n• Why Other Choices are Incorrect: In photoelectric emission, photon-electron interactions are 1-to-1. Excess photons cannot pool their energy to eject electrons if individual photon energy is below the work function threshold." },
      { id: 2, question:"For supersonic flow, the pressure of fluid must decrease as the fluid flow area of the duct:", options: ["Increases", "Decreases", "Remain the same", "None of these"], answer: 0, explanation: "In compressible fluid dynamics, supersonic flow (Mach > 1) responds inversely to duct area changes compared to subsonic flow: expanding duct area increases flow velocity and drops fluid pressure." },
      { id: 3, question:"Density in terms of viscosity is:", options: ["Kinematic viscosity / dynamic viscosity", "Dynamic viscosity / kinematic viscosity", "Kinematic viscosity x dynamic viscosity", "None of the above"], answer: 1, explanation: "Kinematic viscosity (ν) represents dynamic viscosity (μ) normalized by mass density (ρ), expressed by the fundamental relation ν = μ / ρ." },
      { id: 4, question: "Liquids and gases take the following characteristic(s) of their contents.", options: ["Volume", "Shape", "Shape and volume", "Neither shape nor volume"], answer: 1, explanation: "• Why 'Shape' is Correct: Fluids (liquids and gases) lack shear resistance and conform to the shape of their container. Liquids maintain a fixed volume, while gases expand to fill both shape and volume.\n• Why Other Choices are Incorrect: Liquids do not take the volume of their contents (they have a fixed volume), so only 'Shape' applies universally to all fluids." },
      { id: 5, question: "Alcohol finds use in manometers as:", options: ["It provides a suitable meniscus for the inclined tube", "Its density being less can provide longer length for a pressure difference, thus more accuracy can be obtained", "A and B above are correct", "Cheap and easily available"], answer: 2, explanation: "• Why 'A and B above are correct' is Correct: Alcohol has a low mass density (producing a larger column height for small pressure changes, improving reading sensitivity) and forms a clean, easily readable meniscus in inclined tubes.\n• Why Other Choices are Incorrect: Low cost alone is not the primary engineering reason for selecting indicator fluids in precision manometers." },
      { id: 6, question: "Which of the following statements about a Newtonian fluid is most accurate?", options: ["Shear stress is proportional to strain", "Viscosity is zero", "Shear stress is multi – valued", "Shear stress is proportional to rate of strain"], answer: 3, explanation: "• Why 'Shear stress is proportional to rate of strain' is Correct: By definition, Newtonian fluids satisfy Newton's Law of Viscosity (τ = μ du/dy), meaning shear stress (τ) is linearly proportional to the rate of shear strain (du/dy).\n• Why Other Choices are Incorrect: Viscosity is non-zero, shear stress is single-valued for a given strain rate, and shear stress is proportional to rate of strain (not total static strain)." },
      { id: 7, question: "The normal stress is the same in all directions at a point in fluid:", options: ["Independent of the motion of one fluid layer relative to an adjacent layer", "When there is no motion of one fluid layer relative to an adjacent layer", "Only if the fluid is frictionless", "Only if fluid is frictionless and incompressible"], answer: 1, explanation: "• Why 'When there is no motion of one fluid layer relative to an adjacent layer' is Correct: By Pascal's Law, hydrostatic pressure at a point is equal in all directions only when the fluid is static (no relative motion, meaning zero shear stress).\n• Why Other Choices are Incorrect: When fluid layers move relative to each other, viscous shear stresses distort the stress tensor, making normal stress dependent on direction." },
      { id: 8, question: "Which of the following is not a characteristic of fluid pressure?", options: ["It is the same in all directions at a point in the fluid", "Its acts normal to a surface", "It is a shear stress", "It is linear with depth"], answer: 2, explanation: "• Why 'It is a shear stress' is Correct: Fluid pressure is a compressive normal stress acting perpendicular to surfaces, NOT a shear stress acting parallel to surfaces.\n• Why Other Choices are Incorrect: Pressure IS the same in all directions at a point in statics, DOES act normal to surfaces, and DOES increase linearly with depth (P = γh)." },
      { id: 9, question: "The length of mercury column at a place at an altitude will change with respect to that at ground in:", options: ["A linear relation", "A parabolic relation", "Will remain constant", "First slowly and then steeply"], answer: 3, explanation: "• Why 'First slowly and then steeply' is Correct: Atmospheric density decreases exponentially with altitude (barometric height relation), causing mercury column height to drop gradually at lower altitudes and progressively faster higher up.\n• Why Other Choices are Incorrect: Linear or constant relations ignore the compressible, exponential nature of Earth's atmosphere." },
      { id: 10, question: "All of the following dimensionless parameters are applicable to fluid flow problems except the _______.", options: ["Reynolds number", "Froude number", "Mach number", "Biot number"], answer: 3, explanation: "• Why 'Biot number' is Correct: Biot number (Bi = h L / k) evaluates conductive vs convective heat transfer resistance in solids. It is a thermal transport parameter, not a fluid dynamics flow parameter.\n• Why Other Choices are Incorrect: Reynolds number (viscous ratio), Froude number (gravity ratio), and Mach number (compressibility ratio) are all core fluid dynamic parameters." },
      { id: 11, question: "Mass density of liquid (ρ) is given by which of the following?", options: ["ρ = Mass / volume", "ρ = metric slug / m²", "ρ = kg-sec² / m⁴", "all of the above"], answer: 3, explanation: "• Why 'all of the above' is Correct: Mass density (ρ) quantifies mass packed per unit volume, which can be expressed in standard International System of Units (SI) units (kg/m³) or equivalent mass-force system representations.\n• Why Other Choices differ: Alternative options (ρ = Mass / volume, ρ = metric slug / m², ρ = kg-sec² / m⁴) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 12, question: "The speed of sound in all fluid is most closely related to all of the following properties except________.", options: ["Compressibility", "Density", "Bulk modulus", "Thermal conductivity"], answer: 3, explanation: "• Why 'Thermal conductivity' is Correct: Acoustic wave propagation speed in a fluid depends on elasticity (bulk modulus K) and inertia (density ρ) via c = √(K/ρ), independent of thermal transport properties.\n• Why Other Choices differ: Alternative options (Compressibility, Density, Bulk modulus) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 13, question: "Under which condition, the specific weight of water is 1000 kg/m³?", options: ["At normal pressure of 760 mm", "At 4 °C temperature", "At mean sea level", "All of the above"], answer: 3, explanation: "• Why 'All of the above' is Correct: Pure water achieves its peak mass density of 1000 kg/m³ at standard atmospheric pressure (760 mm Hg) at its density anomaly temperature of 4 °C at mean sea level.\n• Why Other Choices differ: Alternative options (At normal pressure of 760 mm, At 4 °C temperature, At mean sea level) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 14, question: "All of the following can be characteristics of fluids except_________.", options: ["kinematic viscosity", "surface tension", "bulk modulus", "hysteresis"], answer: 3, explanation: "• Why 'hysteresis' is Correct: Fluids are defined by transport and thermodynamic properties like viscosity, surface tension, and bulk modulus; hysteresis refers to energy dissipation in solid materials.\n• Why Other Choices differ: Alternative options (kinematic viscosity, surface tension, bulk modulus) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 15, question: "Which of the following can be used to measure the flow of water in a pipe of diameter 3000 mm?", options: ["Venturimeter", "Rotameter", "Nozzle", "Pitot tube"], answer: 3, explanation: "• Why 'Pitot tube' is Correct: In massive conduits (such as 3000 mm water mains), inserting a point-velocity probe like a Pitot tube is much more practical and cost-effective than installing full-bore obstruction meters.\n• Why Other Choices differ: Alternative options (Venturimeter, Rotameter, Nozzle) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 16, question: "The pressure at a given depth due to several immiscible liquids is:", options: ["The average of the individual pressures", "The sum of the individual pressures", "Independent of the individual pressures", "Unknown"], answer: 1, explanation: "• Why 'The sum of the individual pressures' is Correct: By hydrostatic principles, total pressure at a given depth within stratified immiscible liquids equals the cumulative sum of hydrostatic pressure heads (ρgh) exerted by each fluid layer above.\n• Why Other Choices differ: Alternative options (The average of the individual pressures, Independent of the individual pressures, Unknown) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 17, question: "The equation of continuity of flow is applicable if:", options: ["The flow is one dimensional", "The flow is steady", "The velocity is uniform over the cross – section", "All of the above conditions are together"], answer: 3, explanation: "• Why 'All of the above conditions are together' is Correct: The simplified One-Dimensional (1D) continuity relation Q = A₁V₁ = A₂V₂ assumes steady flow conditions where flow rate is constant over time and velocity is averaged uniformly across sections.\n• Why Other Choices differ: Alternative options (The flow is one dimensional, The flow is steady, The velocity is uniform over the cross – section) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 18, question: "Uniform flow takes place when:", options: ["Conditions remain unchanged with time at any point", "Rate of change of velocity of fluid is zero", "At every point the velocity vector is identical in magnitude and direction for any given instant", "The change in transverse direction is zero"], answer: 2, explanation: "• Why 'At every point the velocity vector is identical in magnitude and direction for any given instant' is Correct: Uniform flow requires that fluid velocity vectors remain constant in both magnitude and direction at every point along the flow channel at any given snapshot in time.\n• Why Other Choices differ: Alternative options (Conditions remain unchanged with time at any point, Rate of change of velocity of fluid is zero, The change in transverse direction is zero) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 19, question: "The continuity equation of an ideal fluid flow.", options: ["States that the net rate in – flow into any small volume must be zero", "Applies to irrotational flow only", "States that the energy remains constant along streamline", "States that energy is constant everywhere in the fluid"], answer: 3, explanation: "• Why 'States that energy is constant everywhere in the fluid' is Correct: For ideal (frictionless, incompressible) irrotational flow, Bernoulli's equation establishes that total mechanical energy head remains uniform across all streamlines in the fluid field.\n• Why Other Choices differ: Alternative options (States that the net rate in – flow into any small volume must be zero, Applies to irrotational flow only, States that the energy remains constant along streamline) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 20, question: "A Pitot tube can be used to measure fluid velocity as described by the Bernoulli's equation and the relationship between:", options: ["Kinetic energy and static pressure", "Fluid pressure and height of the fluid", "Fluid pressure and impact energy", "Pressure and momentum"], answer: 0, explanation: "• Why 'Kinetic energy and static pressure' is Correct: A Pitot tube measures fluid velocity by bringing local flow to rest at a stagnation point, measuring the difference between total stagnation pressure and static ambient pressure.\n• Why Other Choices differ: Alternative options (Fluid pressure and height of the fluid, Fluid pressure and impact energy, Pressure and momentum) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 21, question: "In order to avoid vaporization in the pipe line, the pipe line over the ridge is laid in such a way that it is not more than:", options: ["2.4m above the hydraulic gradient", "6.4m above the hydraulic gradient", "10m above the hydraulic gradient", "5m above the hydraulic gradient"], answer: 0, explanation: "• Why '2.4m above the hydraulic gradient' is Correct: To prevent fluid pressure from dropping below vapor pressure (causing cavitation and air locks), pipeline summits over ridges are restricted to ~2.4 m above the Hydraulic Grade Line.\n• Why Other Choices differ: Alternative options (6.4m above the hydraulic gradient, 10m above the hydraulic gradient, 5m above the hydraulic gradient) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 22, question: "The stream function is a useful parameter in describing_____________.", options: ["The conservation of mass", "The conservation of momentum", "The conservation of energy", "The equation of state"], answer: 0, explanation: "• Why 'The conservation of mass' is Correct: The stream function (Ψ) is mathematically defined such that its spatial derivatives automatically satisfy the Two-Dimensional (2D) incompressible mass conservation (continuity) equation.\n• Why Other Choices differ: Alternative options (The conservation of momentum, The conservation of energy, The equation of state) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 23, question: "For high speed flows, the potential energy of fluids are:", options: ["Positive", "Negative", "Negligible", "None of these"], answer: 2, explanation: "• Why 'Negligible' is Correct: When fluid flow reaches high velocities, changes in kinetic energy (V²/2) dominate the energy balance, making potential elevation head changes (gz) negligible by comparison.\n• Why Other Choices differ: Alternative options (Positive, Negative, None of these) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 24, question: "McLeod gauge used for low pressure measurement operates on the principle of _________.", options: ["Gas law", "Boyle's law", "Charles law", "Pascal's law"], answer: 1, explanation: "• Why 'Boyle's law' is Correct: A McLeod gauge measures ultra-low gas pressures by isolating a known volume of gas and compressing it isothermally to a higher readable pressure following Boyle's Law (P₁V₁ = P₂V₂).\n• Why Other Choices differ: Alternative options (Gas law, Charles law, Pascal's law) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 25, question: "Kaplan turbine is", options: ["A high head mixed flow turbine", "An impulse turbine, inward flow", "A reaction turbine, outward flow", "Low head axial flow turbine"], answer: 3, explanation: "• Why 'Low head axial flow turbine' is Correct: Kaplan turbines feature adjustable propeller blades operating in axial flow conditions, specifically engineered for high volume flow rates under low hydraulic heads.\n• Why Other Choices differ: Alternative options (A high head mixed flow turbine, An impulse turbine, inward flow, A reaction turbine, outward flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 26, question: "The most common method for calculating frictional energy loss for laminar flowing fluids in noncircular pipe is:", options: ["The Darcy equation", "The Hagen – Poiseuille equation", "The Hazen - Williams equation", "The Swamee – Jain equation"], answer: 0, explanation: "• Why 'The Darcy equation' is Correct: The Darcy-Weisbach friction head loss formula h_f = f(L/D_h)(V²/2g) remains the universal foundation for calculating viscous pressure drop across non-circular flow channels.\n• Why Other Choices differ: Alternative options (The Hagen – Poiseuille equation, The Hazen - Williams equation, The Swamee – Jain equation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 27, question: "The parameter f in the expression for head-loss is", options: ["The fraction of flow that is totally turbulent", "The Darcy friction factor", "The height of roughness scale in turbulent flow", "The static coefficient of friction"], answer: 1, explanation: "• Why 'The Darcy friction factor' is Correct: In pipe friction relations, f denotes the dimensionless Darcy friction factor, which quantifies boundary shear resistance along the conduit wall.\n• Why Other Choices differ: Alternative options (The fraction of flow that is totally turbulent, The height of roughness scale in turbulent flow, The static coefficient of friction) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 28, question: "Friction factor for both laminar and turbulent flows can be found plotted in a", options: ["Steam table", "Psychrometric chart", "Moody diagram", "Mollier diagram"], answer: 2, explanation: "• Why 'Moody diagram' is Correct: The Moody Diagram provides a unified graphical chart mapping friction factor (f) against Reynolds Number (Re) and relative pipe roughness (ε/D) across laminar, transitional, and turbulent regimes.\n• Why Other Choices differ: Alternative options (Steam table, Psychrometric chart, Mollier diagram) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 29, question: "Which of the following is relative velocity?", options: ["The difference between two velocities", "Average velocity", "Sum of two velocities", "Vector difference of two velocities"], answer: 3, explanation: "• Why 'Vector difference of two velocities' is Correct: Relative velocity evaluates the motion of one body relative to another, computed mathematically as the vector subtraction between their respective velocity vectors.\n• Why Other Choices differ: Alternative options (The difference between two velocities, Average velocity, Sum of two velocities) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 30, question: "Which of the following is the highest head?", options: ["33 inch Hg", "31.0 ft. water", "1.013 kg/cm²", "75.0 cm of Hg"], answer: 0, explanation: "• Why '33 inch Hg' is Correct: Converting pressure heads to standard pressure units reveals that 33 inches of mercury (~111.8 Kilopascals (kPa)) exerts greater pressure than 75 cm Hg (~100 Kilopascals (kPa)) or 31 ft of water (~92.6 Kilopascals (kPa)).\n• Why Other Choices differ: Alternative options (31.0 ft. water, 1.013 kg/cm², 75.0 cm of Hg) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 31, question: "For stable equilibrium of floating body its metacenter should lie:", options: ["Below the center of gravity", "Below the center of buoyancy", "Above the center of buoyancy", "Above the center of gravity"], answer: 3, explanation: "• Why 'Above the center of gravity' is Correct: A floating body is in stable rotational equilibrium when its Metacenter (M) lies above its Center of Gravity (G), generating a righting moment when tilted.\n• Why Other Choices are Incorrect: If the Metacenter lies below the Center of Gravity, any slight tilt produces an overturning moment causing the body to capsize (unstable equilibrium)." },
      { id: 32, question: "Center of pressure on an inclined plane lies ___.", options: ["At the centroid", "Above the centroid", "Below the centroid", "At metacenter"], answer: 2, explanation: "• Why 'Below the centroid' is Correct: Because hydrostatic pressure increases linearly with depth (P = ρgh), the lower half of a submerged surface experiences greater force, placing the resultant Center of Pressure below the geometric centroid.\n• Why Other Choices are Incorrect: At or above the centroid would imply uniform or upward-increasing pressure, which violates hydrostatic law." },
      { id: 33, question: "The line of action of the buoyant forces always acts through the centroid of the ______.", options: ["Submerged body", "Volume of the floating body", "Volume of the fluid vertically above the body", "Displaced volume of the fluid"], answer: 3, explanation: "• Why 'Displaced volume of the fluid' is Correct: Archimedes' Principle establishes that the upward buoyant force acts directly through the center of buoyancy, which is the geometric centroid of the displaced fluid volume.\n• Why Other Choices differ: Alternative options (Submerged body, Volume of the floating body, Volume of the fluid vertically above the body) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 34, question: "The hydraulic grade line of a pipe denotes which of the following?", options: ["Total energy", "Pressure energy", "Potential energy", "The sum of pressure energy and potential energy"], answer: 3, explanation: "• Why 'The sum of pressure energy and potential energy' is Correct: The Hydraulic Grade Line (HGL) represents piezometric head, combining pressure head (P/γ) and elevation head (z).\n• Why Other Choices are Incorrect: Total energy is represented by the Energy Grade Line (EGL), which also includes velocity head (V²/2g)." },
      { id: 35, question: "The energy grade line of a pipeline denotes which of the following?", options: ["Total energy", "Pressure energy", "Potential energy", "The sum of pressure energy and potential energy"], answer: 0, explanation: "• Why 'Total energy' is Correct: The Energy Grade Line (EGL) plots the total mechanical energy head, combining pressure head (P/γ), elevation head (z), and dynamic velocity head (V²/2g).\n• Why Other Choices are Incorrect: The sum of pressure and elevation head alone defines the Hydraulic Grade Line (HGL), not the EGL." },
      { id: 36, question: "The presence of friction in the energy grade line will always cause the line to slope", options: ["Down in the direction of the flow", "Upward in the direction of the flow", "Level (no slope)", "There is no effect of friction on the energy grade line"], answer: 0, explanation: "• Why 'Down in the direction of the flow' is Correct: Viscous dissipation and wall friction continuously consume total energy head in real fluids, forcing the Energy Grade Line to slope downward in the direction of flow.\n• Why Other Choices differ: Alternative options (Upward in the direction of the flow, Level (no slope), There is no effect of friction on the energy grade line) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 37, question: "The Pitot tube is a device used for measurement of", options: ["Pressure", "Flow", "Velocity", "Discharge"], answer: 2, explanation: "• Why 'Velocity' is Correct: A Pitot tube measures localized point velocity in a moving fluid stream by sensing stagnation vs static pressure differences.\n• Why Other Choices differ: Alternative options (Pressure, Flow, Discharge) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 38, question: "Hydrometer is used to find out", options: ["Specific gravity liquids", "Specific gravity solids", "Specific gravity gases", "Relative humidity"], answer: 0, explanation: "• Why 'Specific gravity liquids' is Correct: A hydrometer utilizes buoyant equilibrium (Archimedes' principle) to measure the relative density or specific gravity of liquids directly.\n• Why Other Choices differ: Alternative options (Specific gravity solids, Specific gravity gases, Relative humidity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 39, question: "The fluid forces taken into consideration in the Navier Stokes equation are:", options: ["Gravity, pressure and viscous", "Gravity, pressure and turbulent", "Pressure, viscous and turbulent", "Gravity, viscous and turbulent"], answer: 0, explanation: "• Why 'Gravity, pressure and viscous' is Correct: The Navier-Stokes equations express momentum conservation for viscous fluids, accounting for body forces (gravity), surface pressure gradients, and viscous shear forces.\n• Why Other Choices differ: Alternative options (Gravity, pressure and turbulent, Pressure, viscous and turbulent, Gravity, viscous and turbulent) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 40, question: "Permissible velocity of water flowing through concrete tunnel, is generally", options: ["4-5 m/s", "10-12 m/s", "13-16 m/s", "20 m/s"], answer: 0, explanation: "• Why '4-5 m/s' is Correct: To prevent scouring, erosion, and cavitation damage on concrete linings, flow velocity through unlined concrete water tunnels is generally restricted to 4–5 m/s.\n• Why Other Choices differ: Alternative options (10-12 m/s, 13-16 m/s, 20 m/s) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 41, question: "Orifice refers to an opening", options: ["With closed perimeter and of regular form through which water flows", "With prolonged sides having length of 2 to 3 diameters of opening in thick wall", "With partially full flow", "In hydraulic structure with regulation provision"], answer: 3, explanation: "• Why 'In hydraulic structure with regulation provision' is Correct: An orifice is a submerged opening with a closed perimeter placed in a wall or bulkhead, designed for fluid measurement or discharge regulation.\n• Why Other Choices differ: Alternative options (With closed perimeter and of regular form through which water flows, With prolonged sides having length of 2 to 3 diameters of opening in thick wall, With partially full flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 42, question: "The value of coefficient of discharge in comparison to coefficient of velocity is found to be_______.", options: ["More", "Less", "Same", "More/less depending on flow"], answer: 1, explanation: "• Why 'Less' is Correct: The overall coefficient of discharge (Cd) is the product of contraction coefficient (Cc) and velocity coefficient (Cv). Because jet contraction causes Cc < 1, Cd is always smaller than Cv.\n• Why Other Choices differ: Alternative options (More, Same, More/less depending on flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 43, question: "Weir refers to an opening", options: ["Having closed perimeter and of regular form through which water flows", "Having prolonged sides with length of 2 to 3 diameters of opening in thick wall", "Having partially full flow", "In hydraulic structures with regulation provision"], answer: 2, explanation: "• Why 'Having partially full flow' is Correct: A weir is an obstruction built across an open channel over which liquid flows with a free upper surface, characterized by partially full flow conditions.\n• Why Other Choices differ: Alternative options (Having closed perimeter and of regular form through which water flows, Having prolonged sides with length of 2 to 3 diameters of opening in thick wall, In hydraulic structures with regulation provision) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 44, question: "Which of the following parameters determine the friction factor of turbulent flow in a rough pipe?", options: ["Froude number and relative roughness", "Froude number and Mach number", "Reynolds number and relative roughness", "Mach number and relative roughness"], answer: 2, explanation: "• Why 'Reynolds number and relative roughness' is Correct: In fully turbulent pipe flow, boundary resistance depends simultaneously on flow turbulence (Reynolds number Reynolds Number (Re)) and wall surface micro-geometry (relative roughness ε/D).\n• Why Other Choices differ: Alternative options (Froude number and relative roughness, Froude number and Mach number, Mach number and relative roughness) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 45, question: "Power transmitted through a pipe is maximum when the loss of head due to friction is:", options: ["One-half of the total head supplied", "One-third of the total head supplied", "One-fourth of the total head supplied", "Equal to the total head supplied"], answer: 1, explanation: "• Why 'One-third of the total head supplied' is Correct: Hydraulic transmission theory proves that maximum power output through a pipe network occurs when friction head loss (h_f) equals exactly one-third of total available supply head (H/3).\n• Why Other Choices differ: Alternative options (One-half of the total head supplied, One-fourth of the total head supplied, Equal to the total head supplied) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 46, question: "In a nozzle if back pressure is same as inlet pressure; then_______________.", options: ["No flow takes place", "Maximum flow takes place", "Flow becomes subsonic in diverging section", "Flow becomes supersonic in converging as well as supersonic section"], answer: 0, explanation: "• Why 'No flow takes place' is Correct: Fluid motion requires a driving pressure gradient. If receiver back pressure equals supply pressure, the pressure gradient is zero and no flow can take place.\n• Why Other Choices differ: Alternative options (Maximum flow takes place, Flow becomes subsonic in diverging section, Flow becomes supersonic in converging as well as supersonic section) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 47, question: "The flow on two sides of a normal shock wave is called___________.", options: ["Sonic", "Sub-sonic", "Supersonic", "Supersonic on one side and sub-sonic on the other side"], answer: 3, explanation: "• Why 'Supersonic on one side and sub-sonic on the other side' is Correct: A normal shock wave causes a steep, irreversible compression process across which flow decelerates abruptly from supersonic (Mach > 1) upstream to subsonic (Mach < 1) downstream.\n• Why Other Choices differ: Alternative options (Sonic, Sub-sonic, Supersonic) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 48, question: "Which of the following is the basic of Bernoulli's law for fluid flow?", options: ["Continuity equation", "Principle of conservation of energy", "Fourier's law", "Principle of conservation of mass"], answer: 1, explanation: "• Why 'Principle of conservation of energy' is Correct: Bernoulli's equation is derived by integrating Euler's equation of motion along a streamline, expressing fundamental conservation of mechanical energy for inviscid fluids.\n• Why Other Choices differ: Alternative options (Continuity equation, Fourier's law, Principle of conservation of mass) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 49, question: "Which of the following is NOT a characteristic of fluid pressure?", options: ["It is a shear stress", "It is the same in all directions at a point in the fluid", "It acts normal to a surface", "It is linear with depth"], answer: 0, explanation: "• Why 'It is a shear stress' is Correct: Fluid pressure acts equally in all directions perpendicular to submerged boundaries, making it a normal compressive stress rather than a surface shear stress.\n• Why Other Choices differ: Alternative options (It is the same in all directions at a point in the fluid, It acts normal to a surface, It is linear with depth) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 50, question: "Refers to the compressibility of a fluid, the fractional change in fluid volume per unit change in fluid pressure.", options: ["Viscosity", "Bulk modulus", "Density", "Pressure"], answer: 3, explanation: "• Why 'Pressure' is Correct: Compressibility (β = 1/K) measures the relative volume reduction of a fluid element when subjected to a unit increase in hydrostatic pressure.\n• Why Other Choices differ: Alternative options (Viscosity, Bulk modulus, Density) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 51, question: "A Pitot tube can be used to measure fluid velocity as described by the Bernoulli's equation and the relationship between:", options: ["Kinetic energy and static pressure", "Fluid pressure and static pressure", "Fluid pressure and impact energy", "Pressure and momentum"], answer: 0, explanation: "• Why 'Kinetic energy and static pressure' is Correct: Relates kinetic energy (dynamic pressure) to static pressure.\n• Why Other Choices differ: Alternative options (Fluid pressure and static pressure, Fluid pressure and impact energy, Pressure and momentum) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 52, question: "The ratio of the area to the wetted perimeter is known as __________.", options: ["Flow factor", "Hydraulic radius", "Kutter's C", "Value of k in Darcy - Weisbach formula"], answer: 1, explanation: "• Why 'Hydraulic radius' is Correct: Hydraulic radius Rh = Area A / Wetted perimeter Pw.\n• Why Other Choices differ: Alternative options (Flow factor, Kutter's C, Value of k in Darcy - Weisbach formula) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 53, question: "What is the coefficient of contraction?", options: ["The ratio of the area of vena contracta to the area of the orifice", "The ratio of actual discharge to the theoretical discharge", "The ratio of the actual velocity to the theoretical velocity", "The ratio of the effective head to the actual head"], answer: 0, explanation: "• Why 'The ratio of the area of vena contracta to the area of the orifice' is Correct: Cc = Area of vena contracta / Area of orifice.\n• Why Other Choices differ: Alternative options (The ratio of actual discharge to the theoretical discharge, The ratio of the actual velocity to the theoretical velocity, The ratio of the effective head to the actual head) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 54, question: "Where is vena contracta most likely located?", options: ["At the orifice", "At a distance approximately ½ the diameter of the orifice", "At a distance approximately equal to the diameter of the orifice", "At a distance approximately twice the diameter of the orifice"], answer: 1, explanation: "• Why 'At a distance approximately ½ the diameter of the orifice' is Correct: Located outside orifice at approximately d/2.\n• Why Other Choices differ: Alternative options (At the orifice, At a distance approximately equal to the diameter of the orifice, At a distance approximately twice the diameter of the orifice) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 55, question: "A substance that is able to flow and yields to any force tending to change its shape without changing its volume such as water and air.", options: ["Fluid", "Flux", "Gas oil", "Water gas"], answer: 0, explanation: "• Why 'Fluid' is Correct: A fluid deforms continuously under shear stress.\n• Why Other Choices differ: Alternative options (Flux, Gas oil, Water gas) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 56, question: "The velocity of a fluid particle at the center of the pipe section is______.", options: ["Maximum", "Minimum", "Average", "Logarithmic average"], answer: 1, explanation: "• Official Exam Valid Answer: Option B (Minimum) is the designated answer key on the official test paper.\n• Physical Theory Note: In real-world fluid dynamics (Poiseuille/turbulent pipe flow), velocity is physically Maximum at the centerline due to wall friction (no-slip condition), but this reviewer credits B. Minimum per official exam key scoring." },
      { id: 57, question: "For supersonic flow, the pressure of fluid must increase as the fluid flow area of the duct:", options: ["Increases", "Decreases", "Constant", "None of these"], answer: 1, explanation: "• Why 'Decreases' is Correct: Decreasing duct area in supersonic flow decelerates fluid, raising pressure.\n• Why Other Choices differ: Alternative options (Increases, Constant, None of these) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 58, question: "Which is incorrect statement regarding apparent shear forces.", options: ["It can never be found in frictionless fluid regardless of its motion", "It can never be found when the fluid is at rest", "It depends upon cohesive forces", "It may occur owing to cohesion when the fluid is at rest"], answer: 3, explanation: "• Why 'It may occur owing to cohesion when the fluid is at rest' is Correct: Fluid at rest cannot sustain shear stress.\n• Why Other Choices differ: Alternative options (It can never be found in frictionless fluid regardless of its motion, It can never be found when the fluid is at rest, It depends upon cohesive forces) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 59, question: "The time required for half a quantity of radioactive particles to decay (disintegrate) is called its_____________.", options: ["Average life", "Median life", "Time constant", "Half time"], answer: 3, explanation: "• Why 'Half time' is Correct: Half-life or half time.\n• Why Other Choices differ: Alternative options (Average life, Median life, Time constant) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 60, question: "International System of Units (SI) unit of viscosity is:", options: ["10 times poise", "9.81 times poise", "1/9.81 time poise", "1/10 times poise"], answer: 0, explanation: "• Why '10 times poise' is Correct: 1 Pa·s = 10 Poise.\n• Why Other Choices differ: Alternative options (9.81 times poise, 1/9.81 time poise, 1/10 times poise) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 61, question: "For computation convenience, fluids are usually classed as:", options: ["Rotational or irrotational", "Real or ideal", "Laminar or turbulent", "Newtonian or non-newtonian"], answer: 1, explanation: "• Why 'Real or ideal' is Correct: Classified as real vs ideal fluids.\n• Why Other Choices differ: Alternative options (Rotational or irrotational, Laminar or turbulent, Newtonian or non-newtonian) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 62, question: "Which of the following is not a dimensionless parameter?", options: ["Kinematic viscosity", "Weber number", "Darcy Weisbach friction factor", "Froude number"], answer: 0, explanation: "• Why 'Kinematic viscosity' is Correct: Kinematic viscosity has units m²/s.\n• Why Other Choices differ: Alternative options (Weber number, Darcy Weisbach friction factor, Froude number) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 63, question: "Which of the following is not a characteristic of real fluids?", options: ["Finite viscosity", "Non-uniform velocity distributions", "Compressibility", "Experience of eddy current and turbulence"], answer: 3, explanation: "• Why 'Experience of eddy current and turbulence' is Correct: Ideal fluids lack turbulence; real fluids possess viscosity and turbulence.\n• Why Other Choices differ: Alternative options (Finite viscosity, Non-uniform velocity distributions, Compressibility) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 64, question: "Which of the following is not the mass density of water?", options: ["62.5 lbm/ft³", "100 kg/m³", "1 g/cm³", "1 kg/L"], answer: 1, explanation: "• Why '100 kg/m³' is Correct: Water density is 1000 kg/m³, not 100 kg/m³.\n• Why Other Choices differ: Alternative options (62.5 lbm/ft³, 1 g/cm³, 1 kg/L) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 65, question: "The upper critical Reynolds number for pipe flow is:", options: ["Of no practical importance to designers", "Always used to design pipes for strength", "The number at which turbulent flow changes over to laminar flow", "The number at which laminar flow changes into turbulent flow"], answer: 0, explanation: "• Why 'Of no practical importance to designers' is Correct: Upper critical Reynolds Number (Re) is unstable and has no practical design value.\n• Why Other Choices differ: Alternative options (Always used to design pipes for strength, The number at which turbulent flow changes over to laminar flow, The number at which laminar flow changes into turbulent flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 66, question: "Which of the following statements about gauge pressure is most correct? Gauge pressure are measured relative to _________.", options: ["Atmospheric pressure", "A vacuum", "Each other", "The surface"], answer: 0, explanation: "• Why 'Atmospheric pressure' is Correct: Gauge pressure is relative to atmospheric pressure.\n• Why Other Choices differ: Alternative options (A vacuum, Each other, The surface) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 67, question: "The volumetric change of the fluid caused by a resistance is called ________.", options: ["Volumetric strain", "Volumetric index", "Compressibility", "Adhesion"], answer: 3, explanation: "• Why 'Adhesion' is Correct: Past board question reference key.\n• Why Other Choices differ: Alternative options (Volumetric strain, Volumetric index, Compressibility) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 68, question: "Compressibility of a fluid relates the fractional change in fluid volume per unit change in fluid pressure.", options: ["Temperature", "Density", "Pressure", "Viscosity"], answer: 2, explanation: "• Why 'Pressure' is Correct: Relates volume change to pressure change.\n• Why Other Choices differ: Alternative options (Temperature, Density, Viscosity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 69, question: "Property of a fluid whereby its own molecules are attracted is known as ________.", options: ["Adhesion", "Cohesion", "Surface tension", "Viscosity"], answer: 1, explanation: "• Why 'Cohesion' is Correct: Cohesion is attraction between like molecules.\n• Why Other Choices differ: Alternative options (Adhesion, Surface tension, Viscosity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 70, question: "The term subsonic flow refers to a flowing gas with a speed:", options: ["Less than the local speed of sound", "Equal to the speed of sound", "Greater than the speed of sound", "Much greater than the speed of sound"], answer: 0, explanation: "• Why 'Less than the local speed of sound' is Correct: Subsonic speed is M < 1.\n• Why Other Choices differ: Alternative options (Equal to the speed of sound, Greater than the speed of sound, Much greater than the speed of sound) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 71, question: "The pressure at a point in a fluid will not be same in all the directions if the fluid is:", options: ["Viscous", "Viscous and static", "Inviscous and in motion", "Viscous and is in motion"], answer: 3, explanation: "• Why 'Viscous and is in motion' is Correct: Viscous fluid in motion generates non-isotropic stresses.\n• Why Other Choices differ: Alternative options (Viscous, Viscous and static, Inviscous and in motion) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 72, question: "The statement that 'the hydrostatic pressure a fluid exerts on an immersed object or on container walls is a function only of fluid depth' is", options: ["The perfect gas law", "D'Alembert's paradox", "The hydrostatic paradox", "Boyle's law"], answer: 2, explanation: "• Why 'The hydrostatic paradox' is Correct: Hydrostatic paradox.\n• Why Other Choices differ: Alternative options (The perfect gas law, D'Alembert's paradox, Boyle's law) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 73, question: "Bernoulli's equation is a/an ___________.", options: ["Momentum equation", "Conservation of energy equation", "Conservation of mass equation", "Equation of state"], answer: 1, explanation: "• Why 'Conservation of energy equation' is Correct: Conservation of energy.\n• Why Other Choices differ: Alternative options (Momentum equation, Conservation of mass equation, Equation of state) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 74, question: "An ideal fluid is one that:", options: ["Is very viscous", "Obeys Newton's law of viscosity", "Is assumed in problems in conduit flow", "Is frictionless and incompressible"], answer: 3, explanation: "• Why 'Is frictionless and incompressible' is Correct: Inviscid and incompressible.\n• Why Other Choices differ: Alternative options (Is very viscous, Obeys Newton's law of viscosity, Is assumed in problems in conduit flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 75, question: "The relationship between pressure and altitude in the atmosphere is given by the:", options: ["Perfect gas law", "Conservation of mass", "Barometric height relationship", "First law of thermodynamics"], answer: 2, explanation: "• Why 'Barometric height relationship' is Correct: Barometric height relationship.\n• Why Other Choices differ: Alternative options (Perfect gas law, Conservation of mass, First law of thermodynamics) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 76, question: "The fact the buoyant force on a floating object equal to the weight of the water displaced is:", options: ["Bernoulli's law", "Archimedes' principle", "The law of diminishing returns", "The conservation of mass"], answer: 1, explanation: "• Why 'Archimedes' principle' is Correct: Archimedes' Principle.\n• Why Other Choices differ: Alternative options (Bernoulli's law, The law of diminishing returns, The conservation of mass) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 77, question: "Which of the following terms does not appear in the steady flow energy equation (the extended Bernoulli's equation)?", options: ["Kinetic energy", "Potential energy", "Friction losses", "Hysteresis losses"], answer: 3, explanation: "• Why 'Hysteresis losses' is Correct: Hysteresis does not feature.\n• Why Other Choices differ: Alternative options (Kinetic energy, Potential energy, Friction losses) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 78, question: "Neglecting the forces due to inertia, gravity and frictional resistance, the design of a channel can be made by comparing", options: ["Weber number", "Reynolds number", "Froude's number", "Prandtl number"], answer: 2, explanation: "• Why 'Froude's number' is Correct: Froude number.\n• Why Other Choices differ: Alternative options (Weber number, Reynolds number, Prandtl number) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 79, question: "The difference between stagnation pressure and total pressure is:", options: ["Due to height difference", "Due to fluid kinetic energy", "None of the terms are interchangeable", "Important only in supersonic flow"], answer: 2, explanation: "• Why 'None of the terms are interchangeable' is Correct: Terms are not strictly interchangeable.\n• Why Other Choices differ: Alternative options (Due to height difference, Due to fluid kinetic energy, Important only in supersonic flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 80, question: "Fully turbulent flow in a pipe is characterized by all of the following except:", options: ["A parabolic velocity profile", "A momentum exchange due to fluid masses rather than molecules", "A maximum velocity at the fluid center line", "A 1/7 velocity profile"], answer: 0, explanation: "• Why 'A parabolic velocity profile' is Correct: Parabolic profile is for laminar flow.\n• Why Other Choices differ: Alternative options (A momentum exchange due to fluid masses rather than molecules, A maximum velocity at the fluid center line, A 1/7 velocity profile) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 81, question: "The laminar friction factor of fluid flowing through a pipe is a function of all of the following except:", options: ["Fluid velocity", "Pipe diameter", "Pipe roughness", "Reynolds number"], answer: 2, explanation: "• Why 'Pipe roughness' is Correct: Laminar f = 64/Reynolds Number (Re) is independent of roughness.\n• Why Other Choices differ: Alternative options (Fluid velocity, Pipe diameter, Reynolds number) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 82, question: "The continuity equation is applicable to:", options: ["Viscous unviscous fluid", "Compressibility of fluids", "Conservation of mass", "Steady unsteady flow"], answer: 2, explanation: "• Why 'Conservation of mass' is Correct: Conservation of mass.\n• Why Other Choices differ: Alternative options (Viscous unviscous fluid, Compressibility of fluids, Steady unsteady flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 83, question: "The rise or fall of head 'h' in a capillary tube of diameter 'd' and liquid surface tension 's' and specific weight 'w' is given by:", options: ["4s / wd", "4ds / w", "4wd / s", "4ws / d"], answer: 0, explanation: "• Why '4s / wd' is Correct: Capillary rise formula: h = 4s / (w d).\n• Why Other Choices differ: Alternative options (4ds / w, 4wd / s, 4ws / d) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 84, question: "The study of the practical laws of fluid flow and the resistance of open pipes and channels.", options: ["Fluid mechanics", "Hydraulics", "Aerodynamics", "Thermodynamics"], answer: 1, explanation: "• Why 'Hydraulics' is Correct: Hydraulics.\n• Why Other Choices differ: Alternative options (Fluid mechanics, Aerodynamics, Thermodynamics) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 85, question: "Which of the following turbine is different from the others?", options: ["Fourneyron turbine", "Francis turbine", "Kaplan turbine", "Pelton wheel"], answer: 3, explanation: "• Why 'Pelton wheel' is Correct: Pelton wheel is impulse.\n• Why Other Choices differ: Alternative options (Fourneyron turbine, Francis turbine, Kaplan turbine) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 86, question: "Running away speed of a Pelton wheel gives:", options: ["Actual operating speed", "No load speed", "Full load speed", "No load speed when governor mechanism fails"], answer: 3, explanation: "• Why 'No load speed when governor mechanism fails' is Correct: Maximum speed at zero load when governor fails.\n• Why Other Choices differ: Alternative options (Actual operating speed, No load speed, Full load speed) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 87, question: "Which of the following turbine is different from the others?", options: ["Pelton wheel", "Banki turbine", "Jonval turbine", "Kaplan turbine"], answer: 3, explanation: "• Why 'Kaplan turbine' is Correct: Kaplan is reaction.\n• Why Other Choices differ: Alternative options (Pelton wheel, Banki turbine, Jonval turbine) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 88, question: "The characteristic length of the Reynolds number used to calculate the friction in noncircular full running pipes is based on the __________.", options: ["Run length", "Pipe length", "Hydraulic diameter (the equivalent diameter)", "Wetted circumference"], answer: 2, explanation: "• Why 'Hydraulic diameter (the equivalent diameter)' is Correct: Hydraulic diameter Dh.\n• Why Other Choices differ: Alternative options (Run length, Pipe length, Wetted circumference) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 89, question: "The hydraulic radius of noncircular pipe is:", options: ["The square root of the flow area", "The ratio of the area to the wetted perimeter", "The radius of a pipe of equivalent area", "None of the above"], answer: 1, explanation: "• Why 'The ratio of the area to the wetted perimeter' is Correct: Ratio of area to wetted perimeter.\n• Why Other Choices differ: Alternative options (The square root of the flow area, The radius of a pipe of equivalent area, None of the above) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 90, question: "The Darcy equation can be used for all liquids and flows except:", options: ["Water", "Alcohol", "Gasoline", "Air flowing supersonically"], answer: 3, explanation: "• Why 'Air flowing supersonically' is Correct: Inapplicable to supersonic compressible flow.\n• Why Other Choices differ: Alternative options (Water, Alcohol, Gasoline) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 91, question: "The Hazen – Williams formula for head loss due to friction is based upon:", options: ["Rigorous mathematical derivation", "Empirical data", "Semi-empirical analysis", "Serendipity"], answer: 1, explanation: "• Why 'Empirical data' is Correct: Empirical field data.\n• Why Other Choices differ: Alternative options (Rigorous mathematical derivation, Semi-empirical analysis, Serendipity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 92, question: "The extended Bernoulli equation includes all of the following terms except:", options: ["Potential energy", "Kinetic energy", "Nuclear energy", "Friction losses"], answer: 2, explanation: "• Why 'Nuclear energy' is Correct: Nuclear energy.\n• Why Other Choices differ: Alternative options (Potential energy, Kinetic energy, Friction losses) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 93, question: "An equipotential line is one that:", options: ["Has no velocity component tangent to it", "Has uniformly varying dynamic pressure", "Has no velocity component normal to it", "Exists in case of rotational flow"], answer: 0, explanation: "• Why 'Has no velocity component tangent to it' is Correct: Velocity vectors are orthogonal to equipotential lines.\n• Why Other Choices differ: Alternative options (Has uniformly varying dynamic pressure, Has no velocity component normal to it, Exists in case of rotational flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 94, question: "What is the use of a Hydraulic jump?", options: ["Increase the flow rate", "Reduce the flow rate", "Reduce the velocity of flow", "Reduce the energy of flow"], answer: 3, explanation: "• Why 'Reduce the energy of flow' is Correct: Dissipates excess flow energy.\n• Why Other Choices differ: Alternative options (Increase the flow rate, Reduce the flow rate, Reduce the velocity of flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 95, question: "What do you call the lowest portion of storage basin from where the water is not drawn?", options: ["Bottom storage", "Sub soil storage", "Spring reserve", "Dead storage"], answer: 3, explanation: "• Why 'Dead storage' is Correct: Dead storage.\n• Why Other Choices differ: Alternative options (Bottom storage, Sub soil storage, Spring reserve) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 96, question: "The presence of friction in the hydraulic grade line will always cause the line to slope:", options: ["Down in the direction of the flow", "Upward in the direction of the flow", "Level (no slope)", "There is no effect of friction on the energy grade line"], answer: 0, explanation: "• Why 'Down in the direction of the flow' is Correct: Hydraulic Grade Line (HGL) slopes downward.\n• Why Other Choices differ: Alternative options (Upward in the direction of the flow, Level (no slope), There is no effect of friction on the energy grade line) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 97, question: "The presence of a minor loss in the energy grade line will cause the line to slope:", options: ["Down in the direction of the flow", "Upward in the direction of the flow", "Vertically downward", "There is no effect of friction on the energy grade line"], answer: 0, explanation: "• Why 'Down in the direction of the flow' is Correct: Causes downward drop in Energy Grade Line (EGL).\n• Why Other Choices differ: Alternative options (Upward in the direction of the flow, Vertically downward, There is no effect of friction on the energy grade line) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 98, question: "What do you call the pressure which the fluid exerts on an immersed object or container walls?", options: ["Normal pressure", "Standard liquid pressure", "Hydrostatic pressure", "Gage pressure"], answer: 2, explanation: "• Why 'Hydrostatic pressure' is Correct: Hydrostatic pressure.\n• Why Other Choices differ: Alternative options (Normal pressure, Standard liquid pressure, Gage pressure) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 99, question: "Viscosity for a fluid is defined as the constant of proportionality between shear stress and what other variable?", options: ["The spatial derivative of velocity", "The time derivative of pressure", "The time derivative of density", "The spatial derivative of density"], answer: 0, explanation: "• Why 'The spatial derivative of velocity' is Correct: Velocity gradient (spatial derivative of velocity).\n• Why Other Choices differ: Alternative options (The time derivative of pressure, The time derivative of density, The spatial derivative of density) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 100, question: "What is the classification of the fluid flow if the fluid travels parallel to the adjacent layers and the paths of the individual particles do not cross each other?", options: ["Steady flow", "Laminar flow", "Uniform flow", "Turbulent flow"], answer: 1, explanation: "• Why 'Laminar flow' is Correct: Laminar flow.\n• Why Other Choices differ: Alternative options (Steady flow, Uniform flow, Turbulent flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 101, question: "Which of the following refers to the measure of a fluid's sensitivity to changes in viscosity with changes in temperature?", options: ["Viscosity index", "Coefficient of viscosity", "Viscosity ratio", "Viscosity factor"], answer: 0, explanation: "• Why 'Viscosity index' is Correct: Viscosity Index.\n• Why Other Choices differ: Alternative options (Coefficient of viscosity, Viscosity ratio, Viscosity factor) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 102, question: "If the Mach number is greater than 1 but lesser than 5, what is the standard classification of the travel?", options: ["Transonic travel", "Subsonic travel", "Hypersonic travel", "Supersonic travel"], answer: 3, explanation: "• Why 'Supersonic travel' is Correct: Supersonic travel.\n• Why Other Choices differ: Alternative options (Transonic travel, Subsonic travel, Hypersonic travel) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 103, question: "What is measured by a Pitot tube?", options: ["Volumetric discharge", "Mass flow", "Pressure", "Velocity"], answer: 3, explanation: "• Why 'Velocity' is Correct: Velocity.\n• Why Other Choices differ: Alternative options (Volumetric discharge, Mass flow, Pressure) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 104, question: "What is the difference between the energy grade line and the hydraulic grade line?", options: ["Potential energy", "Pressure energy", "Kinetic energy", "Friction losses"], answer: 2, explanation: "• Why 'Kinetic energy' is Correct: Velocity head (kinetic energy).\n• Why Other Choices differ: Alternative options (Potential energy, Pressure energy, Friction losses) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 105, question: "Kinetic energy is not neglected in calculations of:", options: ["High speed flow", "Low speed flow", "Steady flow", "Equilibrium flow"], answer: 0, explanation: "• Why 'High speed flow' is Correct: High speed flow.\n• Why Other Choices differ: Alternative options (Low speed flow, Steady flow, Equilibrium flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 106, question: "Discharge losses through orifice are due to:", options: ["Friction losses", "Minor losses", "Both friction and minor losses", "Pressure losses"], answer: 2, explanation: "• Why 'Both friction and minor losses' is Correct: Friction and minor losses.\n• Why Other Choices differ: Alternative options (Friction losses, Minor losses, Pressure losses) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 107, question: "Which of the following is considered as an important parameter in the study of compressible flow?", options: ["Speed of fluid", "Speed of sound", "Speed of light", "Speed of fluid flow"], answer: 1, explanation: "• Why 'Speed of sound' is Correct: Speed of sound.\n• Why Other Choices differ: Alternative options (Speed of fluid, Speed of light, Speed of fluid flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 108, question: "Is the velocity at which an infinitesimal small pressure wave travels through a medium.", options: ["Subsonic velocity", "Hypersonic velocity", "Sonic velocity", "Monatomic velocity"], answer: 2, explanation: "• Why 'Sonic velocity' is Correct: Sonic velocity.\n• Why Other Choices differ: Alternative options (Subsonic velocity, Hypersonic velocity, Monatomic velocity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 109, question: "It is the ratio of the actual velocity of the fluid to the velocity of sound.", options: ["Mach number", "Froude number", "Sonic number", "Euler number"], answer: 0, explanation: "• Why 'Mach number' is Correct: Mach number.\n• Why Other Choices differ: Alternative options (Froude number, Sonic number, Euler number) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 110, question: "The flow is called sonic when Mach number is:", options: ["Equal to 1", "Less than 1", "More than 1", "None of these"], answer: 0, explanation: "• Why 'Equal to 1' is Correct: M = 1.\n• Why Other Choices differ: Alternative options (Less than 1, More than 1, None of these) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 111, question: "The following flow is sub-sonic when Mach no. is:", options: ["Greater than 1", "Less than 1", "More than 1", "None of these"], answer: 1, explanation: "• Why 'Less than 1' is Correct: M < 1.\n• Why Other Choices differ: Alternative options (Greater than 1, More than 1, None of these) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 112, question: "The flow is supersonic when Mach no. is:", options: ["Greater than zero", "Less than 1", "Greater than 1", "None of these"], answer: 2, explanation: "• Why 'Greater than 1' is Correct: M > 1.\n• Why Other Choices differ: Alternative options (Greater than zero, Less than 1, None of these) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 113, question: "The flow is transonic when", options: ["M = 0", "M < 1", "M > 1", "M = 1"], answer: 3, explanation: "• Why 'M = 1' is Correct: M = 1.\n• Why Other Choices differ: Alternative options (M = 0, M < 1, M > 1) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 114, question: "The pressure decreases as the temperature and velocity increases while the fluid velocity and Mach number:", options: ["Increases", "Decreases", "Remains constant", "None of these"], answer: 0, explanation: "• Why 'Increases' is Correct: Increases.\n• Why Other Choices differ: Alternative options (Decreases, Remains constant, None of these) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 115, question: "The Mach number is unity or one at the location of smallest flow area, called the:", options: ["Decreasing area", "Throat", "Increasing area", "None of these"], answer: 1, explanation: "• Why 'Throat' is Correct: Throat.\n• Why Other Choices differ: Alternative options (Decreasing area, Increasing area, None of these) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 116, question: "What happens to the velocity of fluid after passing the throat although the flow area increases?", options: ["Increases rapidly", "Decreases rapidly", "Remains constant", "None of these"], answer: 0, explanation: "• Why 'Increases rapidly' is Correct: Increases rapidly.\n• Why Other Choices differ: Alternative options (Decreases rapidly, Remains constant, None of these) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 117, question: "Which of the following is an example of Newtonian fluid?", options: ["Motor oils", "Gas", "Paints", "Clay slurries"], answer: 1, explanation: "• Why Gas is Correct: Gases (such as air or steam) maintain a constant dynamic viscosity regardless of the applied shear rate, perfectly obeying Newton's law of viscosity (τ = μ du/dy).\n• Why Other Choices are Incorrect: Motor oils (multigrade with polymer additives) and Paints are non-Newtonian shear-thinning (pseudoplastic/thixotropic) fluids whose viscosity changes with shear rate. Clay slurries are Bingham plastics that require a minimum yield stress before they begin to flow." },
      { id: 118, question: "What is the critical pressure of water?", options: ["150 kg/cm³", "Less than 200 kg/cm²", "More than 200 kg/cm²", "100 kg/cm²"], answer: 2, explanation: "• Why 'More than 200 kg/cm²' is Correct: More than 200 kg/cm² (22.06 Megapascals (MPa)).\n• Why Other Choices differ: Alternative options (150 kg/cm³, Less than 200 kg/cm², 100 kg/cm²) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 119, question: "Past ME Board Question: The volumetric change of the fluid caused by a resistance is called:", options: ["Volumetric change", "Volumetric index", "Compressibility", "Adhesion"], answer: 3, explanation: "• Why 'Adhesion' is Correct: Adhesion.\n• Why Other Choices differ: Alternative options (Volumetric change, Volumetric index, Compressibility) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 120, question: "The energy of a fluid flowing at any section in a pipeline is a function of:", options: ["Velocity of flow only", "Pressure only", "Height above a chosen datum, density, internal energy, pressure and velocity of flow", "Pressure, height above a chosen datum, velocity of flow, density of fluid"], answer: 2, explanation: "• Why 'Height above a chosen datum, density, internal energy, pressure and velocity of flow' is Correct: Elevation, density, internal energy, pressure, velocity.\n• Why Other Choices differ: Alternative options (Velocity of flow only, Pressure only, Pressure, height above a chosen datum, velocity of flow, density of fluid) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 121, question: "If the fluid travels parallel to the adjacent layers and the paths of individual particles do not cross, the fluid is said to be:", options: ["Turbulent", "Critical", "Dynamic", "Laminar"], answer: 3, explanation: "• Why 'Laminar' is Correct: Laminar.\n• Why Other Choices differ: Alternative options (Turbulent, Critical, Dynamic) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 122, question: "Center of pressure on an inclined plane lies:", options: ["At the centroid", "Above the centroid", "Below the centroid", "At the metacenter"], answer: 2, explanation: "• Why 'Below the centroid' is Correct: Below centroid.\n• Why Other Choices differ: Alternative options (At the centroid, Above the centroid, At the metacenter) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 123, question: "At any instant, if the number of particles passing every cross-section of the stream is the same, the flow is said to be:", options: ["Steady flow", "Uniform flow", "Continuous flow", "Laminar flow"], answer: 0, explanation: "• Why 'Steady flow' is Correct: Steady flow.\n• Why Other Choices differ: Alternative options (Uniform flow, Continuous flow, Laminar flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 124, question: "The ratio of cross-sectional area of flow to the wetted perimeter is:", options: ["Hydraulic lead", "Hydraulic section", "Hydraulic mean depth", "Hydraulic gradient"], answer: 2, explanation: "• Why 'Hydraulic mean depth' is Correct: Hydraulic mean depth.\n• Why Other Choices differ: Alternative options (Hydraulic lead, Hydraulic section, Hydraulic gradient) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 125, question: "If A is the cross-sectional area of the flow and Pw is the wetted perimeter of a pipe, then what is the hydraulic depth, Hd?", options: ["Pw – A", "Pw / A", "A / Pw", "Pw x A"], answer: 2, explanation: "• Why 'A / Pw' is Correct: A / Pw.\n• Why Other Choices differ: Alternative options (Pw – A, Pw / A, Pw x A) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 126, question: "If Q is the volume in gallon; D is height or elevation in ft. and m is weight in lbs. per gallon, what is the desired energy to lift the water from lower to higher elevation?", options: ["E = mD/Q", "E = mDQ", "E = mQ/D", "E = QD/m"], answer: 1, explanation: "• Why 'E = mDQ' is Correct: E = mDQ ft-lbs.\n• Why Other Choices differ: Alternative options (E = mD/Q, E = mQ/D, E = QD/m) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 127, question: "The flow of the convergent section of a nozzle is always subsonic. If the flow is subsonic then the Mach number is:", options: ["Greater than unity", "Less than unity", "Near unity", "Unity"], answer: 1, explanation: "• Why 'Less than unity' is Correct: Less than unity.\n• Why Other Choices differ: Alternative options (Greater than unity, Near unity, Unity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." }
    ]
  },

  deformable_bodies: {
    title: "Mechanics of Deformable Bodies",
    chapter: "Stresses • Tests 2, 3, 4, 8 (Vessels & Wire Ropes)",
    questions: [
      // Test 3 (Questions 1 to 50)
      { id: 1, question: "The ratio of the ultimate stress to the allowable stress.", options: ["Proportionality constant", "Strain", "Modulus", "Factor of safety"], answer: 3, explanation: "• Why 'An electron will not be ejected' is Correct: Photons deliver energy in discrete quanta (E = hν). If the photon energy is less than the metal's work function (Φ), no single photon carries enough energy to overcome the binding force and free an electron.\n• Why Other Choices are Incorrect: In photoelectric emission, photon-electron interactions are 1-to-1. Excess photons cannot pool their energy to eject electrons if individual photon energy is below the work function threshold." },
      { id: 2, question: "In a cantilever beam with a concentrated load at the free end, the moment is:", options: ["Constant along the beam", "Maximum at the wall", "¼ maximum half way out on the beam", "Maximum at the free end"], answer: 1, explanation: "• Why 'Increases' is Correct: In supersonic flow (Mach > 1), fluid dynamics behavior reverses compared to subsonic flow: expanding the duct cross-sectional area causes the fluid to accelerate further, decreasing fluid pressure.\n• Why Other Choices are Incorrect: Decreasing area in supersonic flow causes deceleration and pressure rise (acting like a diffuser), while remaining constant maintains choked velocity." },
      { id: 3, question: "The greatest unit pressure the soil can continuously withstand.", options: ["Yield point", "Bearing strength", "Ultimate strength", "Point of rupture"], answer: 1, explanation: "• Why 'Dynamic viscosity / kinematic viscosity' is Correct: Kinematic viscosity (ν) is defined as dynamic viscosity (μ) divided by mass density (ρ), giving ν = μ/ρ. Rearranging for density gives ρ = μ/ν.\n• Why Other Choices are Incorrect: Multiplying or reversing the ratio yields incorrect physical units (kg/m³ required for density)." },
      { id: 4, question: "A specimen is subjected to a load. When the load is removed the strain disappears. From this information, which of the following can be deduced about this material?", options: ["It is elastic.", "It has a modulus of elasticity.", "It is plastic", "It is ductile."], answer: 0, explanation: "• Why 'Shape' is Correct: Fluids (liquids and gases) lack shear resistance and conform to the shape of their container. Liquids maintain a fixed volume, while gases expand to fill both shape and volume.\n• Why Other Choices are Incorrect: Liquids do not take the volume of their contents (they have a fixed volume), so only 'Shape' applies universally to all fluids." },
      { id: 5, question: "A cantilever beam having a uniformly increasing load toward the fixed end:", options: ["Has uniform shear", "Has a reaction equal to the load", "Will have maximum bending moment midway to the beam", "Has a reaction is not equal to the load"], answer: 1, explanation: "• Why 'A and B above are correct' is Correct: Alcohol has a low mass density (producing a larger column height for small pressure changes, improving reading sensitivity) and forms a clean, easily readable meniscus in inclined tubes.\n• Why Other Choices are Incorrect: Low cost alone is not the primary engineering reason for selecting indicator fluids in precision manometers." },
      { id: 6, question: "The coefficient of friction for dry surfaces:", options: ["Depends on the materials and the finish condition of the surface", "Depends only on the finish condition of the surface", "Does not depend on the materials", "Depends on the composition of the materials only"], answer: 0, explanation: "• Why 'Shear stress is proportional to rate of strain' is Correct: By definition, Newtonian fluids satisfy Newton's Law of Viscosity (τ = μ du/dy), meaning shear stress (τ) is linearly proportional to the rate of shear strain (du/dy).\n• Why Other Choices are Incorrect: Viscosity is non-zero, shear stress is single-valued for a given strain rate, and shear stress is proportional to rate of strain (not total static strain)." },
      { id: 7, question: "The maximum stress to which a material may be subjected before failure occurs.", options: ["Rupture stress", "Yield stress", "Ultimate stress", "Allowable stress"], answer: 2, explanation: "• Why 'When there is no motion of one fluid layer relative to an adjacent layer' is Correct: By Pascal's Law, hydrostatic pressure at a point is equal in all directions only when the fluid is static (no relative motion, meaning zero shear stress).\n• Why Other Choices are Incorrect: When fluid layers move relative to each other, viscous shear stresses distort the stress tensor, making normal stress dependent on direction." },
      { id: 8, question: "The total resistance that a material offers to an applied load.", options: ["Flexure", "Stress", "Elasticity", "Rigidity"], answer: 1, explanation: "• Why 'It is a shear stress' is Correct: Fluid pressure is a compressive normal stress acting perpendicular to surfaces, NOT a shear stress acting parallel to surfaces.\n• Why Other Choices are Incorrect: Pressure IS the same in all directions at a point in statics, DOES act normal to surfaces, and DOES increase linearly with depth (P = γh)." },
      { id: 9, question: "If the areas of cross-sections of square and circular beams are the same and both are put to equal bending moment then the correct statement is:", options: ["Both the beams are equally economical", "Both the beams are equally strong", "The circular beam is more economical", "The square beam is more economical"], answer: 3, explanation: "• Why 'First slowly and then steeply' is Correct: Atmospheric density decreases exponentially with altitude (barometric height relation), causing mercury column height to drop gradually at lower altitudes and progressively faster higher up.\n• Why Other Choices are Incorrect: Linear or constant relations ignore the compressible, exponential nature of Earth's atmosphere." },
      { id: 10, question: "Ties are load carrying members that carry:", options: ["Axial compressive loads", "Axial tension loads", "Prestressing thick cylinders", "Relieving thick cylinders"], answer: 1, explanation: "• Why 'Biot number' is Correct: Biot number (Bi = h L / k) evaluates conductive vs convective heat transfer resistance in solids. It is a thermal transport parameter, not a fluid dynamics flow parameter.\n• Why Other Choices are Incorrect: Reynolds number (viscous ratio), Froude number (gravity ratio), and Mach number (compressibility ratio) are all core fluid dynamic parameters." },
      { id: 11, question: "Auto-frottage is the method of:", options: ["Calculating stresses in thick cylinders", "Increasing life of thick cylinders", "Prestressing thick cylinders", "Relieving thick cylinders"], answer: 2, explanation: "• Why 'Prestressing thick cylinders' is Correct: Autofrottage prestresses thick-walled pressure vessels.\n• Why Other Choices differ: Alternative options (Calculating stresses in thick cylinders, Increasing life of thick cylinders, Relieving thick cylinders) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 12, question: "Mohr's circle can be used to determine __________ on an inclined surface.", options: ["Principal stress", "Normal stress", "Tangential stress", "All of the above"], answer: 3, explanation: "• Why 'All of the above' is Correct: Mohr's circle determines principal, normal, and shear stresses.\n• Why Other Choices differ: Alternative options (Principal stress, Normal stress, Tangential stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 13, question: "Modulus of rigidity can be defined as the ratio of:", options: ["Linear stress to the longitudinal strain", "Shear stress to shear strain", "Shear to strain", "Shear stress to volumetric strain"], answer: 1, explanation: "• Why 'Shear stress to shear strain' is Correct: Modulus of Rigidity G = τ / γ.\n• Why Other Choices differ: Alternative options (Linear stress to the longitudinal strain, Shear to strain, Shear stress to volumetric strain) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 14, question: "The total strain energy stored in a body is called:", options: ["Resilience", "Proof resilience", "Modulus of resilience", "Toughness"], answer: 0, explanation: "• Why 'Resilience' is Correct: Resilience is total elastic strain energy.\n• Why Other Choices differ: Alternative options (Proof resilience, Modulus of resilience, Toughness) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 15, question: "The elongation of a conical bar under its own weight is equal to:", options: ["One fourth that of a prismatic bar of the same length", "One-sixth that of a prismatic bar of the same length", "One third that of a prismatic bar of the same length", "That of a prismatic bar of the same length"], answer: 2, explanation: "• Why 'One third that of a prismatic bar of the same length' is Correct: δ_conical = (ρgL²)/(6E) = 1/3 δ_prismatic.\n• Why Other Choices differ: Alternative options (One fourth that of a prismatic bar of the same length, One-sixth that of a prismatic bar of the same length, That of a prismatic bar of the same length) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 16, question: "Which one is the incorrect statement about true stress-strain method?", options: ["It is more sensitive to changes in mechanical conditions.", "There is no such phenomenon like true stress or true strain", "This method can be used for compression tests as well.", "True stress is load per unit area and similarly true strain is determined under actual conditions."], answer: 1, explanation: "• Why 'There is no such phenomenon like true stress or true strain' is Correct: True stress and true strain are well-defined physical quantities.\n• Why Other Choices differ: Alternative options (It is more sensitive to changes in mechanical conditions., This method can be used for compression tests as well., True stress is load per unit area and similarly true strain is determined under actual conditions.) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 17, question: "The tensile stress of a material is given by:", options: ["Average load during the test/average at the time of fracture", "Average load during the test/original cross-sectional area", "Maximum load during test/area at the time of fracture", "Maximum load during test/original cross-sectional area"], answer: 3, explanation: "• Why 'Maximum load during test/original cross-sectional area' is Correct: Engineering tensile strength = P_max / A_original.\n• Why Other Choices differ: Alternative options (Average load during the test/average at the time of fracture, Average load during the test/original cross-sectional area, Maximum load during test/area at the time of fracture) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 18, question: "When a part is constrained to move and heated, it develops what kind of stress?", options: ["Compressive stress", "Principal stress", "Shear stress", "Tensile stress"], answer: 0, explanation: "• Why 'Compressive stress' is Correct: Thermal expansion restricted causes compressive stress σ = E·α·ΔT.\n• Why Other Choices differ: Alternative options (Principal stress, Shear stress, Tensile stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 19, question: "For steel, the ultimate strength in shear as compared to in tension is nearly:", options: ["One-half", "One-third", "One-four", "The same"], answer: 0, explanation: "• Why 'One-half' is Correct: Shear ultimate strength is approx 50% to 60% of tensile ultimate strength.\n• Why Other Choices differ: Alternative options (One-third, One-four, The same) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 20, question: "The intensity of stress that causes unit strain is known as:", options: ["Bulk modulus", "Modulus of elasticity", "Modulus of rigidity", "Unit stress"], answer: 1, explanation: "• Why 'Modulus of elasticity' is Correct: Young's modulus E = σ / 1 = σ.\n• Why Other Choices differ: Alternative options (Bulk modulus, Modulus of rigidity, Unit stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 21, question: "The ultimate tensile stress of mild steel, as compared to its ultimate compressive stress will be:", options: ["Less", "More", "More or less depending on the factors", "Same"], answer: 1, explanation: "• Why 'More' is Correct: Mild steel ultimate tensile strength exceeds compressive strength.\n• Why Other Choices differ: Alternative options (Less, More or less depending on the factors, Same) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 22, question: "The relation between modulus of elasticity E and modulus of elasticity in shear G and Poisson's ratio μ is given by:", options: ["E = Gμ", "E = G(μ+1)", "E = 2G(μ+1)", "E = 4G(1+2μ)"], answer: 2, explanation: "• Why 'E = 2G(μ+1)' is Correct: E = 2G(1 + μ).\n• Why Other Choices differ: Alternative options (E = Gμ, E = G(μ+1), E = 4G(1+2μ)) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 23, question: "When shear force is zero along a section, the bending moment at that section will be:", options: ["Maximum", "Minimum", "Minimum or maximum", "Zero"], answer: 2, explanation: "• Why 'Minimum or maximum' is Correct: dM/dx = V = 0 implies local maximum or minimum bending moment.\n• Why Other Choices differ: Alternative options (Maximum, Minimum, Zero) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 24, question: "The stress-strain curve for a glass rod during tensile test is:", options: ["An irregular curve", "A parabola", "A sudden break", "A straight line"], answer: 2, explanation: "• Why 'A sudden break' is Correct: Brittle glass breaks suddenly at elastic limit.\n• Why Other Choices differ: Alternative options (An irregular curve, A parabola, A straight line) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 25, question: "The ratio of average shear stress to maximum shear stress for a circular section is equal to:", options: ["2", "2/3", "3/2", "3/4"], answer: 3, explanation: "• Why '3/4' is Correct: τ_max = (4/3) τ_avg, so τ_avg / τ_max = 3/4.\n• Why Other Choices differ: Alternative options (2, 2/3, 3/2) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 26, question: "The ratio of bulk modulus to shear modulus for Poisson's ratio of 0.25 will be equal to:", options: ["3/2", "5/16", "1", "2"], answer: 2, explanation: "• Why '1' is Correct: K/G = 2(1+μ) / [3(1-2μ)] = 2(1.25) / [3(0.5)] = 2.5 / 1.5 = 5/3 (Key indicates 1).\n• Why Other Choices differ: Alternative options (3/2, 5/16, 2) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 27, question: "The compression members tend to buckle in the direction of:", options: ["Axis of load", "Perpendicular to the axis of load", "Minimum cross-section", "Least radius of gyration"], answer: 3, explanation: "• Why 'Least radius of gyration' is Correct: Buckling occurs about the axis of minimum radius of gyration r_min.\n• Why Other Choices differ: Alternative options (Axis of load, Perpendicular to the axis of load, Minimum cross-section) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 28, question: "The stress in an elastic material is:", options: ["Inversely proportional to the materials yield strength", "Inversely proportional to the force acting", "Proportional to the displacement of the material acted upon by the force", "Inversely proportional to the strain"], answer: 2, explanation: "• Why 'Proportional to the displacement of the material acted upon by the force' is Correct: Hooke's Law: Stress is proportional to strain/displacement.\n• Why Other Choices differ: Alternative options (Inversely proportional to the materials yield strength, Inversely proportional to the force acting, Inversely proportional to the strain) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 29, question: "The slenderness ratio of a column is generally defined as the ratio of its:", options: ["Length to its minimum width", "Unsupported length to its maximum radius of gyration", "Length to its moment of inertia", "Unsupported length to its least radius of gyration"], answer: 3, explanation: "• Why 'Unsupported length to its least radius of gyration' is Correct: SR = L_eff / r_min.\n• Why Other Choices differ: Alternative options (Length to its minimum width, Unsupported length to its maximum radius of gyration, Length to its moment of inertia) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 30, question: "The linear portion of the stress-strain diagram of steel is known as:", options: ["Modulus of elongation", "Plastic range", "Irreversible range", "Elastic range"], answer: 3, explanation: "• Why 'Elastic range' is Correct: Linear Hookean region is the elastic range.\n• Why Other Choices differ: Alternative options (Modulus of elongation, Plastic range, Irreversible range) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 31, question: "Principal stresses occur on those planes:", options: ["Where the shearing stress is zero", "Which are 45 degrees apart", "Where the shearing stress is a maximum", "Which are subjected only to tension"], answer: 0, explanation: "• Why 'Above the center of gravity' is Correct: A floating body is in stable rotational equilibrium when its Metacenter (M) lies above its Center of Gravity (G), generating a righting moment when tilted.\n• Why Other Choices are Incorrect: If the Metacenter lies below the Center of Gravity, any slight tilt produces an overturning moment causing the body to capsize (unstable equilibrium)." },
      { id: 32, question: "The ratio of moment of inertia of the cross-section of a beam to the section modulus is:", options: ["Equal to the radius of gyration", "Equal to the area of the cross-section", "A measure of distance", "Multiplied by the bending moment to determine the stress"], answer: 2, explanation: "• Why 'Below the centroid' is Correct: Because hydrostatic pressure increases linearly with depth (P = ρgh), the lower half of a submerged surface experiences greater force, placing the resultant Center of Pressure below the geometric centroid.\n• Why Other Choices are Incorrect: At or above the centroid would imply uniform or upward-increasing pressure, which violates hydrostatic law." },
      { id: 33, question: "Structural steel elements subjected to torsion develop what kind of stress?", options: ["Bending stress", "Compressive stress", "Shearing stress", "Tensile stress"], answer: 2, explanation: "• Why 'Shearing stress' is Correct: Torsion generates torsional shear stress.\n• Why Other Choices differ: Alternative options (Bending stress, Compressive stress, Tensile stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 34, question: "The bending moment of a section of a beam is derived from the:", options: ["Sum of the moments of all external forces on one side of the section", "Difference between the moments on one side of the section and the opposite side", "Sum of the moments of all external forces on both sides of the section", "Sum of the moments of all external forces"], answer: 0, explanation: "• Why 'The sum of pressure energy and potential energy' is Correct: The Hydraulic Grade Line (HGL) represents piezometric head, combining pressure head (P/γ) and elevation head (z).\n• Why Other Choices are Incorrect: Total energy is represented by the Energy Grade Line (EGL), which also includes velocity head (V²/2g)." },
      { id: 35, question: "The stress concentration factor:", options: ["Is a ratio of the average stress on a section to the allowable stress", "Cannot be evaluated for brittle materials", "Is the ratio of the areas involved in a sudden change of cross section", "Is the ratio of the maximum stress produced in the cross section to the average stress over the section"], answer: 3, explanation: "• Why 'Total energy' is Correct: The Energy Grade Line (EGL) plots the total mechanical energy head, combining pressure head (P/γ), elevation head (z), and dynamic velocity head (V²/2g).\n• Why Other Choices are Incorrect: The sum of pressure and elevation head alone defines the Hydraulic Grade Line (HGL), not the EGL." },
      { id: 36, question: "Poisson's ratio is the ratio of the:", options: ["Unit lateral deformation to the unit longitudinal deformation", "Unit stress to unit strain", "Elastic limit to proportional limit", "Shear strain to compressive strain"], answer: 0, explanation: "• Why 'Unit lateral deformation to the unit longitudinal deformation' is Correct: Poisson's ratio μ = - (lateral strain) / (longitudinal strain).\n• Why Other Choices differ: Alternative options (Unit stress to unit strain, Elastic limit to proportional limit, Shear strain to compressive strain) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 37, question: "Hooke's law for an isotropic homogeneous medium experiencing one dimensional stress is known as:", options: ["Stress = E(strain)", "Strain = E(stress)", "(Force)(Area) = E(change length/length)", "Strain energy = E(internal energy)"], answer: 0, explanation: "• Why 'Stress = E(strain)' is Correct: σ = E · ε.\n• Why Other Choices differ: Alternative options (Strain = E(stress), (Force)(Area) = E(change length/length), Strain energy = E(internal energy)) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 38, question: "The modulus of rigidity of a steel member is:", options: ["A function of the length and depth", "Defined as the unit shear stress divided by the unit shear deformation", "Equal to the modulus of elasticity divided by one plus Poisson's ratio", "Defined as the length divided by the moment of inertia"], answer: 1, explanation: "• Why 'Defined as the unit shear stress divided by the unit shear deformation' is Correct: G = Shear stress / Shear strain.\n• Why Other Choices differ: Alternative options (A function of the length and depth, Equal to the modulus of elasticity divided by one plus Poisson's ratio, Defined as the length divided by the moment of inertia) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 39, question: "The maximum bending moment of a beam simply supported at both ends and subject to a total load w uniformly distributed over its length L is expressed by the formula:", options: ["w L / 8", "w L² / 8", "w L / 2", "w L² / 2"], answer: 0, explanation: "• Why 'w L / 8' is Correct: M_max = wL/8 where w is total load W (or W L/8 = w L²/8 for per unit length load).\n• Why Other Choices differ: Alternative options (w L² / 8, w L / 2, w L² / 2) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 40, question: "In a column (slenderness ratio > 160), which of the following has the greatest influence on its tendency to buckle under a compressive load?", options: ["The modulus of elasticity of the material", "The compressive strength of the material", "The radius of gyration of the column", "The length of the column"], answer: 3, explanation: "• Why 'The length of the column' is Correct: Critical Euler buckling load P_cr = π²EI / L² depends inversely on the square of column length L.\n• Why Other Choices differ: Alternative options (The modulus of elasticity of the material, The compressive strength of the material, The radius of gyration of the column) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 41, question: "The area of the shear diagram of a beam between any two points on the beam is equal to the:", options: ["Change in shear between the two points", "Total shear beyond the two points", "Average moment between the two points", "Change in moment between the two points"], answer: 3, explanation: "• Why 'Change in moment between the two points' is Correct: ∫ V dx = ΔM.\n• Why Other Choices differ: Alternative options (Change in shear between the two points, Total shear beyond the two points, Average moment between the two points) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 42, question: "Poisson's ratio is principally used in:", options: ["The determination of capability of material for being shaped", "The determination of capacity of a material for plastic deformation with fracture", "Stress-strain relationships where stresses are applied in more than one direction", "The determination of the endurance limit"], answer: 2, explanation: "• Why 'Stress-strain relationships where stresses are applied in more than one direction' is Correct: Used in multi-axial stress equations (Hooke's law in Two-Dimensional (2D)/Three-Dimensional (3D)).\n• Why Other Choices differ: Alternative options (The determination of capability of material for being shaped, The determination of capacity of a material for plastic deformation with fracture, The determination of the endurance limit) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 43, question: "Modulus of resilience is:", options: ["The same as the modulus of elasticity", "A measure of a material's ability to store strain energy", "The reciprocal of the modulus of elasticity", "A measure of the deflection of member"], answer: 1, explanation: "• Why 'A measure of a material's ability to store strain energy' is Correct: Energy absorption density up to elastic limit.\n• Why Other Choices differ: Alternative options (The same as the modulus of elasticity, The reciprocal of the modulus of elasticity, A measure of the deflection of member) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 44, question: "Which of the following best describes the 0.2% offset yield stress?", options: ["It is the elastic limit after which a measurable plastic strain has occurred.", "It is the stress at which the material plastically strains 0.2%.", "It is the stress at which the material elastically strains 0.2%.", "It is 0.2% below the fracture point of the material."], answer: 1, explanation: "• Why 'It is the stress at which the material plastically strains 0.2%.' is Correct: Offset yield point corresponds to 0.002 permanent plastic strain.\n• Why Other Choices differ: Alternative options (It is the elastic limit after which a measurable plastic strain has occurred., It is the stress at which the material elastically strains 0.2%., It is 0.2% below the fracture point of the material.) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 45, question: "Under very low deformation and at high temperature it is possible to have some plastic flow in a crystal at a shear stress lower than the critical shear stress. What is this phenomenon called?", options: ["Slip", "Twinning", "Creep", "Shearing"], answer: 2, explanation: "• Why 'Creep' is Correct: Time-dependent high-temperature deformation is creep.\n• Why Other Choices differ: Alternative options (Slip, Twinning, Shearing) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 46, question: "In a stress-strain diagram what is the correct term for the stress level at e = 0.20% offset?", options: ["Elastic limit", "Plastic limit", "Offset rupture stress", "Offset yield stress"], answer: 3, explanation: "• Why 'Offset yield stress' is Correct: Offset yield stress.\n• Why Other Choices differ: Alternative options (Elastic limit, Plastic limit, Offset rupture stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 47, question: "Under which type of loading does fatigue occur?", options: ["Static load", "Plane", "High load", "Repeated load"], answer: 3, explanation: "• Why 'Repeated load' is Correct: Fatigue failure results from cyclic or repeated loads.\n• Why Other Choices differ: Alternative options (Static load, Plane, High load) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 48, question: "A specimen is subjected to the load. When the load is removed, the strain disappears. From this information, which of the following can be deduced about this material?", options: ["It is elastic", "It is plastic", "It has a high modulus of elasticity", "It is ductile"], answer: 0, explanation: "• Why 'It is elastic' is Correct: Material behaves elastically.\n• Why Other Choices differ: Alternative options (It is plastic, It has a high modulus of elasticity, It is ductile) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 49, question: "Which of the following may be the Poisson's ratio of a material?", options: ["0.45", "0.5", "0.55", "0.60"], answer: 0, explanation: "• Why '0.45' is Correct: Poisson's ratio for real engineering materials is strictly < 0.5 (rubber is ~0.5).\n• Why Other Choices differ: Alternative options (0.5, 0.55, 0.60) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 50, question: "In pure torsion, the minimum torsional stress occurs at the:", options: ["Center", "Long side", "Medium side", "Short side"], answer: 1, explanation: "• Why 'Long side' is Correct: Test key specifies long side / center for solid sections.\n• Why Other Choices differ: Alternative options (Center, Medium side, Short side) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },

      // Test 2 (Questions 51 to 100)
      { id: 51, question: "At a given section of an I-beam the maximum bending stress occurs at the:", options: ["maximum shear stress area", "neutral axis", "web joint near the flange", "outermost"], answer: 3, explanation: "• Why 'outermost' is Correct: Bending stress σ = M·y/I is maximum at outermost fibers (y = y_max).\n• Why Other Choices differ: Alternative options (maximum shear stress area, neutral axis, web joint near the flange) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 52, question: "The resultant of two or more forces is a:", options: ["couple of forces", "concurrent of forces", "momentum", "resolution of forces"], answer: 3, explanation: "• Why 'resolution of forces' is Correct: Finding resultant is resolution/composition of forces.\n• Why Other Choices differ: Alternative options (couple of forces, concurrent of forces, momentum) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 53, question: "Two or more forces acting together could be replaced by a single force with same effect in a mass called:", options: ["Couple of forces", "Resolution of forces", "Resultant", "Concurrent of forces"], answer: 2, explanation: "• Why 'Resultant' is Correct: Resultant force.\n• Why Other Choices differ: Alternative options (Couple of forces, Resolution of forces, Concurrent of forces) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 54, question: "The frictional forces depends on coefficient of friction and:", options: ["Torque", "Weights of object", "Normal of force", "Moment"], answer: 2, explanation: "• Why 'Normal of force' is Correct: Friction force F = μ · N (Normal force).\n• Why Other Choices differ: Alternative options (Torque, Weights of object, Moment) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 55, question: "Shear modulus is also known as:", options: ["Shear elasticity", "Poisson's ratio", "Modulus of elasticity", "Modulus of rigidity"], answer: 3, explanation: "• Why 'Modulus of rigidity' is Correct: Shear modulus G = Modulus of Rigidity.\n• Why Other Choices differ: Alternative options (Shear elasticity, Poisson's ratio, Modulus of elasticity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 56, question: "The maximum stress induced in a material when subject to intermittent or repeated load without causing failure is called:", options: ["Ultimate stress", "Endurance limit", "Ultimate strength", "Elastic limit"], answer: 1, explanation: "• Why 'Endurance limit' is Correct: Endurance limit (fatigue limit).\n• Why Other Choices differ: Alternative options (Ultimate stress, Ultimate strength, Elastic limit) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 57, question: "Internal stress exerted by the fibers to resist the action of outside force is called:", options: ["Shearing stress", "Tensile stress", "Ultimate stress", "Compressive stress"], answer: 0, explanation: "• Why 'Shearing stress' is Correct: Internal resistance stress.\n• Why Other Choices differ: Alternative options (Tensile stress, Ultimate stress, Compressive stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 58, question: "Alloy steel axle under repeated load/stress will eventually fail if the load/stress is above the endurance for the steel under consideration. The endurance limit of the steel is therefore:", options: ["equal to the allowable stress of the module of elasticity", "equal to half of the ultimate strength", "equal to module of elasticity", "equal to 80% of the elastic limit"], answer: 1, explanation: "• Why 'equal to half of the ultimate strength' is Correct: For steel, endurance limit S_e ≈ 0.5 S_ut.\n• Why Other Choices differ: Alternative options (equal to the allowable stress of the module of elasticity, equal to module of elasticity, equal to 80% of the elastic limit) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 59, question: "Moment of inertia is also called:", options: ["Modulus of elasticity", "Weep strength", "Radius of the gyration", "None of these"], answer: 3, explanation: "• Why 'None of these' is Correct: Second moment of area.\n• Why Other Choices differ: Alternative options (Modulus of elasticity, Weep strength, Radius of the gyration) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 60, question: "Deflection of a beam is:", options: ["proportional to the modulus of elasticity and moment of inertia", "proportional to the load imposed and inversely to the length squared", "inversely proportional to the modulus of elasticity and moment of inertia", "inversely proportional to the weight imposed times the length"], answer: 2, explanation: "• Why 'inversely proportional to the modulus of elasticity and moment of inertia' is Correct: Deflection δ ∝ 1 / (E · I).\n• Why Other Choices differ: Alternative options (proportional to the modulus of elasticity and moment of inertia, proportional to the load imposed and inversely to the length squared, inversely proportional to the weight imposed times the length) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 61, question: "Continuous stretching under load even if the stress is less than the yield point is called:", options: ["Plasticity", "Elasticity", "Creep", "Ductility"], answer: 2, explanation: "• Why 'Creep' is Correct: Creep.\n• Why Other Choices differ: Alternative options (Plasticity, Elasticity, Ductility) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 62, question: "It is the opposite direction of parallel force.", options: ["Concurrent", "Coplanar", "Couple", "Non coplanar"], answer: 2, explanation: "• Why 'Couple' is Correct: A couple consists of equal, opposite parallel forces.\n• Why Other Choices differ: Alternative options (Concurrent, Coplanar, Non coplanar) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 63, question: "The ratio of the moment of inertia of the cross-section of the beam to the section of modulus is:", options: ["equal to the radius of gyration", "equal to the area of the cross-section", "measure of a distance", "dependent on modulus of elasticity of beam measure"], answer: 2, explanation: "• Why 'measure of a distance' is Correct: I / Z = c (distance from neutral axis).\n• Why Other Choices differ: Alternative options (equal to the radius of gyration, equal to the area of the cross-section, dependent on modulus of elasticity of beam measure) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 64, question: "The differential of the shear equation is which of the following:", options: ["bending moment of the beam", "tensile strength of the beam", "slope of the elastic curve", "load of the beam"], answer: 3, explanation: "• Why 'load of the beam' is Correct: dV/dx = w(x) (distributed load).\n• Why Other Choices differ: Alternative options (bending moment of the beam, tensile strength of the beam, slope of the elastic curve) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 65, question: "Could be defined as simply push and pull is known as:", options: ["Work", "Force", "Inertia", "Power"], answer: 1, explanation: "• Why 'Force' is Correct: Force.\n• Why Other Choices differ: Alternative options (Work, Inertia, Power) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 66, question: "The changes in shape or geometry of the body due to action of a force on it is called deformation or:", options: ["shearing stress", "stresses", "compressive stress", "strains"], answer: 3, explanation: "• Why 'strains' is Correct: Deformation/Strain.\n• Why Other Choices differ: Alternative options (shearing stress, stresses, compressive stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 67, question: "Ability to resist deformation under stress is called:", options: ["Plasticity", "All of these", "Stiffness", "Toughness"], answer: 2, explanation: "• Why 'Stiffness' is Correct: Stiffness.\n• Why Other Choices differ: Alternative options (Plasticity, All of these, Toughness) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 68, question: "The property of a material that relates the lateral strain to longitudinal strain is called:", options: ["Stress", "Strain", "Poisson's ratio", "Endurance limit"], answer: 2, explanation: "• Why 'Poisson's ratio' is Correct: Poisson's ratio.\n• Why Other Choices differ: Alternative options (Stress, Strain, Endurance limit) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 69, question: "The single force which produces the same effect upon a body as two or more force acting together is called:", options: ["Resultant force", "Co-planar force", "Couple", "Non-coplanar force"], answer: 0, explanation: "• Why 'Resultant force' is Correct: Resultant force.\n• Why Other Choices differ: Alternative options (Co-planar force, Couple, Non-coplanar force) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 70, question: "The ability of metal to resist being crushed is called:", options: ["Shearing strength", "Compressive stress", "Torsional strength", "Tensile strength"], answer: 1, explanation: "• Why 'Compressive stress' is Correct: Compressive strength/stress.\n• Why Other Choices differ: Alternative options (Shearing strength, Torsional strength, Tensile strength) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 71, question: "Finding the resultant of two or more forces is called:", options: ["Co-planar", "Non-coplanar forces", "Couple", "Composition of the forces"], answer: 3, explanation: "• Why 'Composition of the forces' is Correct: Composition of forces.\n• Why Other Choices differ: Alternative options (Co-planar, Non-coplanar forces, Couple) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 72, question: "In general, the design stress and factor of safety are related as follows:", options: ["Design stress = ultimate stress times factor of safety", "Design stress = ultimate stress divided by factor of safety", "Factor of safety = design stress divided ultimate stress", "Ultimate stress = factor of safety divided by design stress"], answer: 1, explanation: "• Why 'Design stress = ultimate stress divided by factor of safety' is Correct: Design Stress = Ultimate Stress / FS.\n• Why Other Choices differ: Alternative options (Design stress = ultimate stress times factor of safety, Factor of safety = design stress divided ultimate stress, Ultimate stress = factor of safety divided by design stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 73, question: "Stresses that are independent to loads are known as:", options: ["Working stresses", "Operating stresses", "Residual stresses", "Shear stresses"], answer: 2, explanation: "• Why 'Residual stresses' is Correct: Residual stresses exist without external load.\n• Why Other Choices differ: Alternative options (Working stresses, Operating stresses, Shear stresses) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 74, question: "The ratio of unit lateral deformation to unit longitudinal deformation is called:", options: ["Poisson's ratio", "Willan's line", "Modulus of elasticity", "Deformation"], answer: 0, explanation: "• Why 'Poisson's ratio' is Correct: Poisson's ratio.\n• Why Other Choices differ: Alternative options (Willan's line, Modulus of elasticity, Deformation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 75, question: "Separated forces, which can be so combined are called:", options: ["Non-concurrent forces", "Couple", "Combined forces", "Concurrent forces"], answer: 3, explanation: "• Why 'Concurrent forces' is Correct: Concurrent forces.\n• Why Other Choices differ: Alternative options (Non-concurrent forces, Couple, Combined forces) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 76, question: "Endurance strength is nearly proportional to the ultimate strength but not with:", options: ["yield strength", "design stress", "shear stress", "all of these"], answer: 0, explanation: "• Why 'yield strength' is Correct: Proportional to ultimate strength.\n• Why Other Choices differ: Alternative options (design stress, shear stress, all of these) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 77, question: "The three moment equation maybe used to analyse a:", options: ["tapered column", "continuous beam", "endurance limit", "tensile stress"], answer: 1, explanation: "• Why 'continuous beam' is Correct: Three moment equation analyzes continuous beams.\n• Why Other Choices differ: Alternative options (tapered column, endurance limit, tensile stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 78, question: "Poisson's ratio is the ratio of:", options: ["shear strain to compressive strain", "elastic limit to compressive strain", "lateral strain to longitudinal strain", "elastic limit to proportional limit"], answer: 2, explanation: "• Why 'lateral strain to longitudinal strain' is Correct: Lateral strain to longitudinal strain.\n• Why Other Choices differ: Alternative options (shear strain to compressive strain, elastic limit to compressive strain, elastic limit to proportional limit) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 79, question: "The product of the resultant of all forces acting on a body and the time that the resultant acts:", options: ["Angular impulse", "Angular momentum", "Linear impulse", "Linear momentum"], answer: 2, explanation: "• Why 'Linear impulse' is Correct: Linear Impulse = Force × Time.\n• Why Other Choices differ: Alternative options (Angular impulse, Angular momentum, Linear momentum) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 80, question: "The system of forces and opposite forces are added, which of the following if any is true?", options: ["equilibrium is destroyed", "equilibrium is maintained", "none of these is true", "an unbalanced of moment exist"], answer: 1, explanation: "• Why 'equilibrium is maintained' is Correct: Equal opposite forces preserve equilibrium.\n• Why Other Choices differ: Alternative options (equilibrium is destroyed, none of these is true, an unbalanced of moment exist) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 81, question: "What is the property of a material, which resists forces acting to pull the material apart?", options: ["Shear strength", "Tensile strength", "Torsional strength", "Compressive strength"], answer: 1, explanation: "• Why 'Tensile strength' is Correct: Tensile strength.\n• Why Other Choices differ: Alternative options (Shear strength, Torsional strength, Compressive strength) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 82, question: "What is the metal characteristic to withstand forces that causes twisting?", options: ["Torsional strength", "Modulus of elasticity", "Twisting moment", "Elasticity"], answer: 0, explanation: "• Why 'Torsional strength' is Correct: Torsional strength.\n• Why Other Choices differ: Alternative options (Modulus of elasticity, Twisting moment, Elasticity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 83, question: "The unit deformation is called:", options: ["Torsion", "Strain", "Stress", "Shear"], answer: 1, explanation: "• Why 'Strain' is Correct: Strain.\n• Why Other Choices differ: Alternative options (Torsion, Stress, Shear) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 84, question: "The total amount of permanent extension of the gage length measured after specimen has fractured is called:", options: ["Elongation", "Strain", "Stress", "Elastic limit"], answer: 0, explanation: "• Why 'Elongation' is Correct: Percentage elongation.\n• Why Other Choices differ: Alternative options (Strain, Stress, Elastic limit) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 85, question: "Strength of a material is that of a stress intensity determined by considering the maximum test load to act the original area of test specimen:", options: ["Yield point", "Ultimate strength", "Break strength", "Elastic limit"], answer: 1, explanation: "• Why 'Ultimate strength' is Correct: Ultimate strength.\n• Why Other Choices differ: Alternative options (Yield point, Break strength, Elastic limit) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 86, question: "The maximum stress, which is reached during a tension test is called:", options: ["Stress", "Elasticity", "Strain", "Tensile strength"], answer: 3, explanation: "• Why 'Tensile strength' is Correct: Tensile strength.\n• Why Other Choices differ: Alternative options (Stress, Elasticity, Strain) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 87, question: "Which of the following is the differential of the shear equation?", options: ["bending moment", "load on the beam", "tensile strength of the beam", "slope of the beam"], answer: 1, explanation: "• Why 'load on the beam' is Correct: dV/dx = w.\n• Why Other Choices differ: Alternative options (bending moment, tensile strength of the beam, slope of the beam) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 88, question: "The change in length per unit original length is:", options: ["strain", "stress", "deformation", "elastic modulus"], answer: 0, explanation: "• Why 'strain' is Correct: Strain ε = ΔL / L.\n• Why Other Choices differ: Alternative options (stress, deformation, elastic modulus) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 89, question: "The ability of material or metal to resist being crushed is:", options: ["fatigue strength", "bending strength", "torsional strength", "compressive strength"], answer: 3, explanation: "• Why 'compressive strength' is Correct: Compressive strength.\n• Why Other Choices differ: Alternative options (fatigue strength, bending strength, torsional strength) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 90, question: "The ability of metals to withstand loads without breaking down is termed as:", options: ["Strain", "Stress", "Elasticity", "Strength"], answer: 3, explanation: "• Why 'Strength' is Correct: Strength.\n• Why Other Choices differ: Alternative options (Strain, Stress, Elasticity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 91, question: "The ability of metals to withstand forces that causes a member to twist.", options: ["Shear strength", "Tensile strength", "Bearing strength", "Torsional strength"], answer: 3, explanation: "• Why 'Torsional strength' is Correct: Torsional strength.\n• Why Other Choices differ: Alternative options (Shear strength, Tensile strength, Bearing strength) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 92, question: "The ratio of stress to strain within the elastic limit is called:", options: ["Creep", "Modulus of rigidity", "Modulus of elasticity", "Poisson's ratio"], answer: 2, explanation: "• Why 'Modulus of elasticity' is Correct: Modulus of elasticity.\n• Why Other Choices differ: Alternative options (Creep, Modulus of rigidity, Poisson's ratio) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 93, question: "The last point at which a material may be stretched and still return to its undeformed combination upon release of stress:", options: ["Rupture limit", "Elastic limit", "Proportional limit", "Ultimate limit"], answer: 1, explanation: "• Why 'Elastic limit' is Correct: Elastic limit.\n• Why Other Choices differ: Alternative options (Rupture limit, Proportional limit, Ultimate limit) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 94, question: "The deformation that results from a stress and is expressed in terms of the amount of deformation per inch.", options: ["Elongation", "Strain", "Poisson's ratio", "Elasticity"], answer: 1, explanation: "• Why 'Strain' is Correct: Unit strain.\n• Why Other Choices differ: Alternative options (Elongation, Poisson's ratio, Elasticity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 95, question: "The internal resistance a material offers to being deformed and is measured in terms of applied load.", options: ["Strain", "Elasticity", "Stress", "Resilience"], answer: 2, explanation: "• Why 'Stress' is Correct: Stress.\n• Why Other Choices differ: Alternative options (Strain, Elasticity, Resilience) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 96, question: "The maximum stress induced in a material when subjected to alternating or repeated loading without causing failure.", options: ["Ultimate strength", "Yield strength", "Endurance strength", "Rupture strength"], answer: 2, explanation: "• Why 'Endurance strength' is Correct: Endurance strength.\n• Why Other Choices differ: Alternative options (Ultimate strength, Yield strength, Rupture strength) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 97, question: "The maximum stress to which a material may be subjected before failure occurs is called:", options: ["Rupture strength", "Ultimate strength", "Yield strength", "Proportional limit"], answer: 1, explanation: "• Why 'Ultimate strength' is Correct: Ultimate strength.\n• Why Other Choices differ: Alternative options (Rupture strength, Yield strength, Proportional limit) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 98, question: "The total deformation measured in the direction of the lines stress:", options: ["Strain", "Elasticity", "Elongation", "Contraction"], answer: 0, explanation: "• Why 'Strain' is Correct: Total elongation/strain.\n• Why Other Choices differ: Alternative options (Elasticity, Elongation, Contraction) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 99, question: "The total resistance that a material offers to an applied load is called:", options: ["Friction torque", "Stress", "Rigidity", "Compressive force"], answer: 1, explanation: "• Why 'Stress' is Correct: Stress.\n• Why Other Choices differ: Alternative options (Friction torque, Rigidity, Compressive force) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 100, question: "The ability of metal to withstand forces thus following a number of twist.", options: ["Shear strength", "Bearing strength", "Endurance limit", "Deformation"], answer: 0, explanation: "• Why 'Shear strength' is Correct: Shear/torsional resistance.\n• Why Other Choices differ: Alternative options (Bearing strength, Endurance limit, Deformation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },

      // Test 4 (Questions 101 to 150)
      { id: 101, question: "In a specification schedule is used when the pipe specified as 'schedule 80', then pipe corresponds to the:", options: ["'extra standard' weight", "Allowable stress", "Internal pressure", "'old standard' weight"], answer: 0, explanation: "• Why ''extra standard' weight' is Correct: Schedule 80 is Extra Strong / Extra Heavy weight pipe.\n• Why Other Choices differ: Alternative options (Allowable stress, Internal pressure, 'old standard' weight) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 102, question: "The modulus of elasticity for ordinary steel usually falls between _______ million pounds per square inch.", options: ["26 to 28", "28 to 31", "20 to 45", "50 to 30"], answer: 1, explanation: "• Why '28 to 31' is Correct: E for steel is 29 to 30 × 10⁶ Pounds per Square Inch (psi) (28-31 Mpsi).\n• Why Other Choices differ: Alternative options (26 to 28, 20 to 45, 50 to 30) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 103, question: "The modulus of elasticity is measured of:", options: ["Accuracy", "Quality", "Stiffness", "Rigidity"], answer: 2, explanation: "• Why 'Stiffness' is Correct: Modulus of elasticity E measures axial/bending stiffness.\n• Why Other Choices differ: Alternative options (Accuracy, Quality, Rigidity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 104, question: "The modulus of elasticity for most metals in compression is usually taken as that in:", options: ["Tension", "Bearing", "Torsion", "Yield"], answer: 0, explanation: "• Why 'Tension' is Correct: E in compression equals E in tension for isotropic metals.\n• Why Other Choices differ: Alternative options (Bearing, Torsion, Yield) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 105, question: "The ratio of the moment and stress is called:", options: ["Contraction", "Proportional constant", "Section modulus", "Strain"], answer: 2, explanation: "• Why 'Section modulus' is Correct: Section modulus Z = M / σ.\n• Why Other Choices differ: Alternative options (Contraction, Proportional constant, Strain) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 106, question: "For a symmetrical cross-section beam the flexural stress is ________ when the vertical shear is maximum.", options: ["Infinity", "Maximum", "Minimum", "Zero"], answer: 3, explanation: "• Why 'Zero' is Correct: Flexural stress is zero at neutral axis where shear stress is maximum.\n• Why Other Choices differ: Alternative options (Infinity, Maximum, Minimum) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 107, question: "When tested in compression, ductile materials usually exhibit _______ characteristics up to the yield strength as they do when tested in tension.", options: ["The same", "Less than", "More than", "Approximately the same"], answer: 3, explanation: "• Why 'Approximately the same' is Correct: Compression yield stress approximately equals tension yield stress.\n• Why Other Choices differ: Alternative options (The same, Less than, More than) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 108, question: "It has been said that 80% of the failures of machine parts have been due to:", options: ["Comprehension", "Fatigue failure", "Negligence", "Torsion"], answer: 1, explanation: "• Why 'Fatigue failure' is Correct: Fatigue accounts for ~80-90% of dynamic mechanical failures.\n• Why Other Choices differ: Alternative options (Comprehension, Negligence, Torsion) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 109, question: "Cazand quotes values for steel showing Sn/Su ratios, often called endurance ratio, from:", options: ["0.23 to 0.65", "0.34 to 0.45", "0.34 to 0.87", "0.63 to 0.93"], answer: 0, explanation: "• Why '0.23 to 0.65' is Correct: Endurance ratio Sn/Su ranges from 0.23 to 0.65.\n• Why Other Choices differ: Alternative options (0.34 to 0.45, 0.34 to 0.87, 0.63 to 0.93) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 110, question: "The discontinuity or change of section, such as scratches, holes, bends, or grooves is a:", options: ["Stress caiser", "Stress functioning", "Stress raiser", "Stress relieving"], answer: 2, explanation: "• Why 'Stress raiser' is Correct: Stress raiser (stress concentration).\n• Why Other Choices differ: Alternative options (Stress caiser, Stress functioning, Stress relieving) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 111, question: "The degree of stress concentration is usually indicated by the:", options: ["Power factor", "Stress concentration factor", "Service factor", "Stress factor"], answer: 1, explanation: "• Why 'Stress concentration factor' is Correct: Stress concentration factor Kt.\n• Why Other Choices differ: Alternative options (Power factor, Service factor, Stress factor) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 112, question: "In a part at uniform temperature and not acted upon by an external load, any internal stress that exist is called:", options: ["Control stress", "Form stress", "Residual stress", "Superposed stress"], answer: 2, explanation: "• Why 'Residual stress' is Correct: Residual stress.\n• Why Other Choices differ: Alternative options (Control stress, Form stress, Superposed stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 113, question: "The stress or load induced by the tightening operation:", options: ["Initial stress", "Initial tension", "Residual stress", "None of these"], answer: 0, explanation: "• Why 'Initial stress' is Correct: Initial stress/tightening load.\n• Why Other Choices differ: Alternative options (Initial tension, Residual stress, None of these) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 114, question: "A type of failure due to instability is known as:", options: ["Slenderness ratio", "Buckingham", "Buckling", "Stability"], answer: 2, explanation: "• Why 'Buckling' is Correct: Buckling is elastic instability.\n• Why Other Choices differ: Alternative options (Slenderness ratio, Buckingham, Stability) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 115, question: "The ratio of the length of the column and the radius of gyration of the cross-sectional area about a centroidal axis is called:", options: ["Contact ratio", "Constant ratio", "Power factor", "Slenderness ratio"], answer: 3, explanation: "• Why 'Slenderness ratio' is Correct: Slenderness ratio L / r.\n• Why Other Choices differ: Alternative options (Contact ratio, Constant ratio, Power factor) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 116, question: "Formula that applies to a very slender column is called:", options: ["Column formula", "Euler's formula", "Moment formula", "Slender formula"], answer: 1, explanation: "• Why 'Euler's formula' is Correct: Euler's column formula.\n• Why Other Choices differ: Alternative options (Column formula, Moment formula, Slender formula) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 117, question: "If two principal stresses are zero, the state stress is:", options: ["Biaxial", "Monoaxial", "Triaxial", "Uniaxial"], answer: 3, explanation: "• Why Gas is Correct: Gases (such as air or steam) maintain a constant dynamic viscosity regardless of the applied shear rate, perfectly obeying Newton's law of viscosity (τ = μ du/dy).\n• Why Other Choices are Incorrect: Motor oils (multigrade with polymer additives) and Paints are non-Newtonian shear-thinning (pseudoplastic/thixotropic) fluids whose viscosity changes with shear rate. Clay slurries are Bingham plastics that require a minimum yield stress before they begin to flow." },
      { id: 118, question: "If one principal stress is zero, the stress is:", options: ["Biaxial", "Monoaxial", "Triaxial", "Uniaxial"], answer: 0, explanation: "• Why 'Biaxial' is Correct: Biaxial stress state.\n• Why Other Choices differ: Alternative options (Monoaxial, Triaxial, Uniaxial) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 119, question: "If all the principal stresses have finite value, the system is:", options: ["Biaxial", "Monoaxial", "Triaxial", "Uniaxial"], answer: 2, explanation: "• Why 'Triaxial' is Correct: Triaxial stress state.\n• Why Other Choices differ: Alternative options (Biaxial, Monoaxial, Uniaxial) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 120, question: "Under theories of failure for static loading of ductile material, the design stress is the:", options: ["Endurance strength / factor of safety", "Factor of safety / yield stress", "Yield stress / factor of safety", "Ultimate stress / factor of safety"], answer: 2, explanation: "• Why 'Yield stress / factor of safety' is Correct: Design stress = Yield stress / FS.\n• Why Other Choices differ: Alternative options (Endurance strength / factor of safety, Factor of safety / yield stress, Ultimate stress / factor of safety) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 121, question: "Under theories of failure, the value of shear stress is ________ that of tensile stress:", options: ["Equal", "Double", "Half", "Three times"], answer: 2, explanation: "• Why 'Half' is Correct: Shear yield stress is 0.5 (Maximum Shear Stress Theory) to 0.577 of tensile yield stress.\n• Why Other Choices differ: Alternative options (Equal, Double, Three times) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 122, question: "The theories of mechanics of materials shows that the results from the octahedral shear stress theory and those from the maximum distortion energy theory are _______.", options: ["More than", "Less than", "Relevant", "The same"], answer: 3, explanation: "• Why 'The same' is Correct: Von Mises distortion energy theory equals octahedral shear stress theory.\n• Why Other Choices differ: Alternative options (More than, Less than, Relevant) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 123, question: "A kind of stress that is caused by forces acting along or parallel to the area is called:", options: ["Bearing stress", "Shearing stress", "Tangential stress", "Tensile stress"], answer: 1, explanation: "• Why 'Shearing stress' is Correct: Shearing/tangential stress.\n• Why Other Choices differ: Alternative options (Bearing stress, Tangential stress, Tensile stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 124, question: "Obtained by dividing the differential load dF by the dA over which it acts.", options: ["Elasticity", "Elongation", "Strain", "Stress"], answer: 3, explanation: "• Why 'Stress' is Correct: Stress σ = dF/dA.\n• Why Other Choices differ: Alternative options (Elasticity, Elongation, Strain) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 125, question: "The highest ordinate in the stress-strain diagram or curve is called:", options: ["Elastic limit", "Rupture strength", "Ultimate strength", "Yield point"], answer: 2, explanation: "• Why 'Ultimate strength' is Correct: Ultimate tensile strength.\n• Why Other Choices differ: Alternative options (Elastic limit, Rupture strength, Yield point) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 126, question: "A pair of forces equal in magnitude opposite in direction, and not in the same line is called:", options: ["Couple", "Momentum", "Parallel force", "Torque"], answer: 0, explanation: "• Why 'Couple' is Correct: Couple.\n• Why Other Choices differ: Alternative options (Momentum, Parallel force, Torque) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 127, question: "Framework composed of members joined at ends to form a rigid structure is known as:", options: ["Joists", "Machine", "Purlins", "Truss"], answer: 3, explanation: "• Why 'Truss' is Correct: Truss.\n• Why Other Choices differ: Alternative options (Joists, Machine, Purlins) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 128, question: "The ratio of the tensile stress to the tensile strain is called:", options: ["Bulk modulus", "Hooke's law", "Shear modulus", "Young modulus"], answer: 3, explanation: "• Why 'Young modulus' is Correct: Young's Modulus E = σ / ε.\n• Why Other Choices differ: Alternative options (Bulk modulus, Hooke's law, Shear modulus) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 129, question: "The ratio of the volume stress to the volume strain is called the coefficient of volume elasticity or:", options: ["Bulk modulus", "Hooke's law", "Shear modulus", "Young modulus"], answer: 0, explanation: "• Why 'Bulk modulus' is Correct: Bulk Modulus K.\n• Why Other Choices differ: Alternative options (Hooke's law, Shear modulus, Young modulus) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 130, question: "The action of a force is characterized by:", options: ["Its magnitude", "Direction of its action", "Point of application", "All of the above"], answer: 3, explanation: "• Why 'All of the above' is Correct: Magnitude, direction, and point of application.\n• Why Other Choices differ: Alternative options (Its magnitude, Direction of its action, Point of application) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 131, question: "At highest or lowest point on the moment diagram:", options: ["Shear is half", "Shear is maximum", "Shear is negative", "Shear is zero"], answer: 3, explanation: "• Why 'Shear is zero' is Correct: dM/dx = V = 0.\n• Why Other Choices differ: Alternative options (Shear is half, Shear is maximum, Shear is negative) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 132, question: "The built-in or fixed support is capable of supporting:", options: ["An axial load", "A traverse force", "A bending moment", "All of these"], answer: 3, explanation: "• Why 'All of these' is Correct: Fixed support resists axial force, shear force, and bending moment.\n• Why Other Choices differ: Alternative options (An axial load, A traverse force, A bending moment) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 133, question: "The modulus of elasticity in shear is commonly called:", options: ["Bulk modulus", "Deformation", "Modulus of rigidity", "Young modulus"], answer: 2, explanation: "• Why 'Modulus of rigidity' is Correct: Modulus of Rigidity.\n• Why Other Choices differ: Alternative options (Bulk modulus, Deformation, Young modulus) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 134, question: "The stress beyond which the material will not return to its original shape when unloaded, but will retain a permanent deformation is termed as:", options: ["Elastic limit", "Proportional limit", "Yield point", "Yield strength"], answer: 0, explanation: "• Why 'Elastic limit' is Correct: Elastic limit.\n• Why Other Choices differ: Alternative options (Proportional limit, Yield point, Yield strength) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 135, question: "Refers to the actual stress the material has when under load:", options: ["Allowable stress", "Factor of safety", "Ultimate strength", "Working stress"], answer: 3, explanation: "• Why 'Working stress' is Correct: Working/operating stress.\n• Why Other Choices differ: Alternative options (Allowable stress, Factor of safety, Ultimate strength) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 136, question: "The safe soil bearing pressure of diesel engine foundation is about:", options: ["2000 kg per sq. cm", "4600 kg per sq. cm", "4890 kg per sq. cm", "5633 kg per sq. cm"], answer: 2, explanation: "• Why '4890 kg per sq. cm' is Correct: 4890 kg/cm².\n• Why Other Choices differ: Alternative options (2000 kg per sq. cm, 4600 kg per sq. cm, 5633 kg per sq. cm) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 137, question: "The machine foundation must have a factor of safety of:", options: ["3", "4", "5", "6"], answer: 2, explanation: "• Why '5' is Correct: Machine foundations require FS of 5.\n• Why Other Choices differ: Alternative options (3, 4, 6) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 138, question: "The load acts over a smaller area, and the _______ continues to increase until failure:", options: ["Actual stress", "Allowable stress", "Comprehensive stress", "Tensile stress"], answer: 0, explanation: "• Why 'Actual stress' is Correct: Actual stress.\n• Why Other Choices differ: Alternative options (Allowable stress, Comprehensive stress, Tensile stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 139, question: "In the stress-strain diagram where there is a large increase in strain with little or no increase in stress is called:", options: ["Endurance strength", "Ultimate strength", "Rupture strength", "Yield strength"], answer: 3, explanation: "• Why 'Yield strength' is Correct: Yield point/strength.\n• Why Other Choices differ: Alternative options (Endurance strength, Ultimate strength, Rupture strength) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 140, question: "A ___________ member that carries loads transverse to its axis:", options: ["Structure", "Column", "Beam", "Frame"], answer: 2, explanation: "• Why 'Beam' is Correct: Beam.\n• Why Other Choices differ: Alternative options (Structure, Column, Frame) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 141, question: "Which type of load that is applied slowly and is never removed?", options: ["Uniform load", "Static load", "Equilibrium load", "Impact load"], answer: 1, explanation: "• Why 'Static load' is Correct: Static load.\n• Why Other Choices differ: Alternative options (Uniform load, Equilibrium load, Impact load) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 142, question: "When varying loads are applied that are not regular in their amplitude, the loading is called:", options: ["Repeated loading", "Random loading", "Reversed loading", "Fluctuating loading"], answer: 1, explanation: "• Why 'Random loading' is Correct: Random loading.\n• Why Other Choices differ: Alternative options (Repeated loading, Reversed loading, Fluctuating loading) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 143, question: "A measure of the relative safety of a load carrying components is termed as:", options: ["Design factor", "Load factor", "Ratio factor", "Demand factor"], answer: 0, explanation: "• Why 'Design factor' is Correct: Design factor (Safety factor).\n• Why Other Choices differ: Alternative options (Load factor, Ratio factor, Demand factor) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 144, question: "The condition, which causes actual stresses in machine members to be higher than nominal values predicted by elementary equations.", options: ["Stress concentration factor", "Stress factor", "Design factor", "Load factor"], answer: 0, explanation: "• Why 'Stress concentration factor' is Correct: Stress concentration factor.\n• Why Other Choices differ: Alternative options (Stress factor, Design factor, Load factor) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 145, question: "The stress value, which is used, in mathematical determination of the required size of the machine member.", options: ["Endurance stress", "Design stress", "Maximum stress", "Normal stress"], answer: 1, explanation: "• Why 'Design stress' is Correct: Design stress.\n• Why Other Choices differ: Alternative options (Endurance stress, Maximum stress, Normal stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 146, question: "Typical values for Poisson's ratio of cast iron is in the range of:", options: ["0.30 to 0.33", "0.27 to 0.30", "0.25 to 0.27", "0.35 to 0.45"], answer: 2, explanation: "• Why '0.25 to 0.27' is Correct: 0.25 to 0.27.\n• Why Other Choices differ: Alternative options (0.30 to 0.33, 0.27 to 0.30, 0.35 to 0.45) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 147, question: "Typical values for Poisson's ratio of steel is in range of:", options: ["0.30 to 0.33", "0.27 to 0.30", "0.27 to 0.27", "0.35 to 0.45"], answer: 1, explanation: "• Why '0.27 to 0.30' is Correct: 0.27 to 0.30.\n• Why Other Choices differ: Alternative options (0.30 to 0.33, 0.27 to 0.27, 0.35 to 0.45) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 148, question: "Typical values for Poisson's ratio of aluminium and titanium is in range of:", options: ["0.25 to 0.27", "0.27 to 0.30", "0.30 to 0.33", "0.35 to 0.45"], answer: 2, explanation: "• Why '0.30 to 0.33' is Correct: 0.30 to 0.33.\n• Why Other Choices differ: Alternative options (0.25 to 0.27, 0.27 to 0.30, 0.35 to 0.45) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 149, question: "The angle of inclination of the planes on which the principal stresses act is called:", options: ["Normal plane", "Principal plane", "Tangential plane", "Traverse plane"], answer: 1, explanation: "• Why 'Principal plane' is Correct: Principal plane.\n• Why Other Choices differ: Alternative options (Normal plane, Tangential plane, Traverse plane) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 150, question: "___________ provides a very accurate prediction of failure of ductile materials under static loads or completely reversed normal, shear or combined stresses.", options: ["Shear stress theory", "Normal stress theory", "Distortion energy theory", "Soderberg line theory"], answer: 2, explanation: "• Why 'Distortion energy theory' is Correct: Distortion Energy Theory (Von Mises).\n• Why Other Choices differ: Alternative options (Shear stress theory, Normal stress theory, Soderberg line theory) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      // Test 8 - Thin/Thick Walled Vessels and Wire Ropes (Questions 151 to 195)
      { id: 151, question: "A process of prestressing or over stressing a hollow cylindrical member beyond the elastic range by hydraulic pressure.", options: ["Presstage", "Stress relieving", "Auto frottage", "Countersinking"], answer: 2, explanation: "\u2022 Why 'Auto frottage' is Correct: Autofrettage (French for 'self-hooping') is a process where a thick-walled cylinder is subjected to enormous hydraulic pressure beyond its yield strength, causing the inner bore to deform plastically while outer layers deform elastically. When pressure is released, compressive residual stresses are locked at the inner surface, greatly enhancing pressure capacity and fatigue life.\n\u2022 Why Other Choices differ: Stress relieving relaxes stresses through heat treatment; presstage and countersinking are unrelated mechanical processes." },
      { id: 152, question: "When two touching surfaces have a high contact pressure and when these surfaces have minute relative motion a phenomenon called", options: ["Carving", "Friction", "Fretting", "Prestage"], answer: 2, explanation: "\u2022 Why 'Fretting' is Correct: Fretting (or fretting corrosion/wear) refers to surface damage and wear debris that occur when contacting surfaces under high pressure experience microscopic relative slip or oscillatory vibration.\n\u2022 Why Other Choices differ: Friction is general resistance to motion; carving and prestage do not describe this micro-motion phenomenon." },
      { id: 153, question: "Pipes subject to high pressure are generally made by", options: ["Slush casting", "Pressure casting", "Extrusion", "Centrifugal casting"], answer: 3, explanation: "\u2022 Why 'Centrifugal casting' is Correct: Centrifugal casting forces molten metal outwards under high rotational force, producing dense, uniform, and high-integrity cylindrical pipe walls with impurities driven to the inside diameter where they can be machined away.\n\u2022 Why Other Choices differ: Slush casting is for thin hollow decorative pieces; pressure casting and extrusion are generally for smaller non-ferrous sections." },
      { id: 154, question: "Hoop stress refers to", options: ["Circumferential tensile stress", "Compressive stress", "Longitudinal stress", "Radial stress"], answer: 0, explanation: "\u2022 Why 'Circumferential tensile stress' is Correct: Hoop stress (tangential stress, $\\sigma_h = \\frac{pd}{2t}$) acts along the circumference of a cylinder wall resisting internal fluid pressure and is tensile in nature.\n\u2022 Why Other Choices differ: Longitudinal stress acts axially; radial stress acts perpendicular through the wall." },
      { id: 155, question: "Autfrettage is the method of", options: ["Calculating stress in thick cylinders", "Increasing life of thick cylinders", "Prestressing thick cylinders", "Relieving thick cylinders"], answer: 2, explanation: "\u2022 Why 'Prestressing thick cylinders' is Correct: Autofrettage is specifically defined as a method of prestressing thick-walled cylinders by hydraulic overstraining to induce favorable compressive residual hoop stresses.\n\u2022 Why Other Choices differ: While it ultimately improves cylinder fatigue life, the mechanical mechanism is prestressing thick cylinders." },
      { id: 156, question: "The radial pressure and hoop tension for a thick cylinder is", options: ["Maximum at inner surface and decreases toward outer surface", "Minimum at inner surface and increase towards outer surface", "Minimum at inner and outer surfaces and maximum in middle", "Maximum at inner and outer surfaces and minimum in middle"], answer: 0, explanation: "\u2022 Why 'Maximum at inner surface and decreases toward outer surface' is Correct: By Lam\u00e9's equations for internal pressure, both the radial compressive pressure ($p_r = p_i$ at bore to 0 at outer surface) and tensile hoop stress ($\\sigma_h$) are maximum at the inner surface and decrease monotonically toward the outer surface.\n\u2022 Why Other Choices differ: In pure internal pressure, neither stress reaches a minimum at the bore nor peaks in the wall center." },
      { id: 157, question: "Assuming longitudinal strain to be constant at any point in the thickness of the cylinder, the radial stress Sr and hoop stress Sh are related as", options: ["Sr \u2013 Sh = constant", "Sr + Sh = constant", "Sr/Sh = constant", "Sr \u2013 Sh/Sr = constant"], answer: 0, explanation: "\u2022 Why 'Sr \u2013 Sh = constant' is Correct: In thick cylinder theory (Lam\u00e9's analysis under uniform axial strain), the difference between radial stress and hoop stress satisfies $S_r - S_h = \\text{constant}$ across the wall thickness.\n\u2022 Why Other Choices differ: The other formulations do not conform to the derived Lam\u00e9 relations." },
      { id: 158, question: "Thin cylindrical shell of diameter d and thickness t when subjected to internal pressure P, if Poisson's ratio of material is \u00b5, the circumferential or hoop strain is", options: ["Pd(1-2\u00b5)/2tE", "Pd(1-2\u00b5)/4tE", "Pd(1/2-\u00b5)/2tE", "Pd(1/2-\u00b5)/4tE"], answer: 0, explanation: "\u2022 Official Exam Key: Option A [Pd(1-2\u00b5)/2tE] is the keyed answer in standard exam reviewers.\n\u2022 Note on Theory: Exact circumferential strain is $\\epsilon_h = \\frac{\\sigma_h}{E} - \\mu \\frac{\\sigma_L}{E} = \\frac{Pd}{4tE}(2-\\mu)$, but Option A is the keyed choice in this exam series." },
      { id: 159, question: "A cylinder in which the ratio of the wall thickness to the inside diameter is _________ may be called a thin cylinder.", options: ["Less than 0.05", "Less than 0.07", "More than 0.05", "More than 0.07"], answer: 1, explanation: "\u2022 Why 'Less than 0.07' is Correct: A pressure cylinder is generally considered 'thin' when the ratio of wall thickness to inside diameter ($t / D_i$) is less than $1/15 \\approx 0.067$ to $0.07$.\n\u2022 Why Other Choices differ: When $t/D_i > 0.07$, radial stress variation cannot be ignored, requiring thick-cylinder theory." },
      { id: 160, question: "External pressure tubes in broilers are design with an apparent factor of safety at", options: ["1 to 3", "4 to 6", "5 to 7", "8 to 10"], answer: 3, explanation: "\u2022 Why '8 to 10' is Correct: Tubes subjected to external collapsing pressure inside boilers are designed with an apparent safety factor of 8 to 10 to account for manufacturing out-of-roundness, elevated operating temperatures, and buckling sensitivity.\n\u2022 Why Other Choices differ: Factors below 8 are unsafe against external pressure collapse." },
      { id: 161, question: "Refers to a hollow product of round or any other cross section having a continuous periphery", options: ["Gear", "Fly wheel", "Sphere", "Tube"], answer: 3, explanation: "\u2022 Why 'Tube' is Correct: Under ASME and engineering materials definitions, a tube is a hollow elongated product of circular or continuous non-circular cross section.\n\u2022 Why Other Choices differ: Gears and flywheels are disks; a sphere is a 3D closed shell." },
      { id: 162, question: "The thickness should be multiplied by ________ to obtain the nominal wall thickness.", options: ["5/8", "8/5", "7/8", "8/7"], answer: 3, explanation: "\u2022 Why '8/7' is Correct: Piping codes permit a negative mill tolerance of 12.5% ($t_{\\text{min}} = 0.875 t_{\\text{nom}} = \\frac{7}{8} t_{\\text{nom}}$). Inverting yields $t_{\\text{nom}} = \\frac{8}{7} t_{\\text{min}}$.\n\u2022 Why Other Choices differ: 7/8 yields minimum wall from nominal, so 8/7 converts minimum to nominal." },
      { id: 163, question: "It is used in high-pressure cylinders", options: ["Thin-walled cylinders", "Thick-walled cylinders", "Solid walled cylinders", "Hard-walled cylinders"], answer: 1, explanation: "\u2022 Why 'Thick-walled cylinders' is Correct: High internal pressures generate steep stress gradients through the wall that cannot be carried safely by thin shells, necessitating thick-walled cylinders.\n\u2022 Why Other Choices differ: Thin-walled cylinders would yield and rupture at high internal pressures." },
      { id: 164, question: "To obtain safe working pressures the critical pressure, should be at least _____ times the working pressure.", options: ["3", "4", "5", "6"], answer: 2, explanation: "\u2022 Why '5' is Correct: To prevent catastrophic elastic or plastic collapsing under external pressure, the critical collapsing pressure $P_{\\text{cr}}$ must be at least 5 times the working pressure ($P_{\\text{cr}} \\ge 5 P_w$).\n\u2022 Why Other Choices differ: 5 is the recognized minimum design factor." },
      { id: 165, question: "The radial pressure between the cylinders at the surface of contacts depends on the _________ of the materials.", options: ["Strength", "Hardness", "Modulus of elasticity", "Modulus of rigidity"], answer: 2, explanation: "\u2022 Why 'Modulus of elasticity' is Correct: In shrink-fit compound cylinders, interface contact pressure $p_c$ is directly proportional to interference $\\delta$ and the material's Young's modulus of elasticity $E$.\n\u2022 Why Other Choices differ: Strength and hardness govern yield criteria, but elastic contact stress magnitude depends on $E$." },
      { id: 166, question: "In cross or regular lay ropes the", options: ["Direction of twist in strands is opposite to the direction of twist of strands", "Direction of twist of wires and strands are the same", "Wires in two adjacent strands are twisted in opposite direction", "Wires are not twisted"], answer: 0, explanation: "\u2022 Why Option A is Correct: In regular (cross) lay rope, wires within individual strands are twisted in one direction while the strands themselves are twisted in the opposite direction, creating balance and reducing unlaying tendencies.\n\u2022 Why Other Choices differ: When both wires and strands twist in the same direction, it is Lang lay." },
      { id: 167, question: "Which of the ropes will be most flexible?", options: ["6 by 7", "6 by 19", "6 by 37", "8 by 19"], answer: 2, explanation: "\u2022 Why '6 by 37' is Correct: Having 37 wires per strand (222 wires total) means individual wire diameters are significantly smaller, giving 6x37 wire ropes superior bending flexibility around sheaves.\n\u2022 Why Other Choices differ: 6x7 has thick stiff wires; 6x19 is general-purpose." },
      { id: 168, question: "A wire rope that the wires and strands are twisted in opposite direction.", options: ["Long lay", "Lang lay", "Regular lay", "Performed"], answer: 2, explanation: "\u2022 Why 'Regular lay' is Correct: Regular lay rope features wires in the strands twisted in the opposite direction from the strands in the rope.\n\u2022 Why Other Choices differ: Lang lay has wires and strands twisted in the same direction." },
      { id: 169, question: "A wire rope that the wires and strands are twisted in the same direction.", options: ["Long lay", "Lang lay", "Performed", "Non-performed"], answer: 1, explanation: "\u2022 Why 'Lang lay' is Correct: Lang lay rope has wires in each strand twisted in the same direction as the strands in the rope, offering longer wire contact surfaces and greater fatigue life.\n\u2022 Why Other Choices differ: Regular lay has opposing twists." },
      { id: 170, question: "A type of rope used for haulages, rigging, and guardrails.", options: ["6 x 35 IWRC", "6 x 25 IWRC", "7 x 7 IWRC", "6 x 8 IWRC"], answer: 2, explanation: "\u2022 Why '7 x 7 IWRC' is Correct: 7x7 wire rope with an Independent Wire Rope Core features large outer wires offering high abrasion and corrosion resistance, ideal for standing rigging, guardrails, and haulage.\n\u2022 Why Other Choices differ: 6x25 and 6x35 are specialized flexible hoisting ropes." },
      { id: 171, question: "A rope used for general-purposes", options: ["6 x 15 IWRC", "6 x 21 IWRC", "6 x 19 IWRC", "7 x 26 IWRC"], answer: 2, explanation: "\u2022 Why '6 x 19 IWRC' is Correct: The 6x19 classification is the standard 'general-purpose' wire rope class across industrial applications, balancing flexibility and wear resistance.\n\u2022 Why Other Choices differ: 6x15, 6x21, and 7x26 are non-standard designations." },
      { id: 172, question: "A type of rope used for lines, hawsers, overhead cranes, hoists.", options: ["6 x 34 IWRC", "6 x 35 IWRC", "6 x 37 IWRC", "6 x 45 IWRC"], answer: 2, explanation: "\u2022 Why '6 x 37 IWRC' is Correct: 6x37 wire rope is extra flexible, widely used in overhead factory cranes, high-speed hoists, and heavy mooring hawsers.\n\u2022 Why Other Choices differ: 6x37 is the standard high-flexibility classification." },
      { id: 173, question: "The regular materials for wire rope are made of", options: ["Cast steel", "Chromium", "Wrought iron", "High-carbon steel"], answer: 3, explanation: "\u2022 Why 'High-carbon steel' is Correct: High-carbon steel (0.60% to 0.85% C) drawn into fine wire achieves the high tensile strength (up to 280+ ksi) and fatigue endurance demanded in wire ropes.\n\u2022 Why Other Choices differ: Cast steel and wrought iron do not possess the required tensile strength or cold-drawing capability." },
      { id: 174, question: "The ultimate strength of Improved Plow Steel is in range of", options: ["200 and 400 ksi", "240 and 280 ksi", "230 and 260 ksi", "400 and 500 ksi"], answer: 1, explanation: "\u2022 Why '240 and 280 ksi' is Correct: Improved Plow Steel (IPS) wire has an ultimate tensile strength ranging from 240 to 280 ksi (approx. 1650 to 1930 MPa).\n\u2022 Why Other Choices differ: Regular plow steel is 210\u2013240 ksi; extra improved plow steel is 260\u2013310 ksi." },
      { id: 175, question: "The minimum suggested design factor of ____________ for ropes miscellaneous hoisting equipment.", options: ["2", "3", "4", "5"], answer: 3, explanation: "\u2022 Why '5' is Correct: Mechanical design handbooks (Faires, Shigley) prescribe a minimum design factor of 5 for wire ropes used in miscellaneous hoisting machinery.\n\u2022 Why Other Choices differ: Design factors below 5 do not provide adequate safety against acceleration and wear." },
      { id: 176, question: "To avoid excessive wear rate the recommended limiting pressure for 6 x 19 rope is _________ for cast iron.", options: ["200 psi", "300 psi", "400 psi", "500 psi"], answer: 3, explanation: "\u2022 Why '500 psi' is Correct: The limiting bearing pressure ($p = \\frac{2T}{d D}$) between 6x19 rope and cast iron sheaves is recommended at 500 psi to prevent grooving and accelerated wire wear.\n\u2022 Why Other Choices differ: 500 psi is for cast iron, 900 psi is for cast steel, and 2500 psi is for manganese steel." },
      { id: 177, question: "To avoid excessive wear rate the recommended limiting pressure for 6 x 19 rope is _______ for cast steel.", options: ["700 psi", "900 psi", "1000 psi", "1200 psi"], answer: 1, explanation: "\u2022 Why '900 psi' is Correct: Cast steel sheaves are harder and can withstand a limiting bearing pressure of 900 psi without excessive furrowing.\n\u2022 Why Other Choices differ: 500 psi is for cast iron; 900 psi is standard for cast steel." },
      { id: 178, question: "To avoid excessive wear rate the recommended limiting pressure for 6 x 19 rope is ________ for manganese steel.", options: ["2000 psi", "2300 psi", "2500 psi", "3000 psi"], answer: 2, explanation: "\u2022 Why '2500 psi' is Correct: Work-hardening manganese steel sheaves allow high bearing pressures up to 2,500 psi.\n\u2022 Why Other Choices differ: 2,500 psi is the established design limit for manganese steel." },
      { id: 179, question: "Wire ropes are made from cold-drawn wires that are first wrapped into", options: ["Layer", "Segment", "Strands", "None of these"], answer: 2, explanation: "\u2022 Why 'Strands' is Correct: Cold-drawn steel wires are first helically twisted into individual strands, which are then wound around a core.\n\u2022 Why Other Choices differ: Strands are the primary structural building blocks of wire rope." },
      { id: 180, question: "The designation 6 by 7 indicates that the rope is made of six strands each containing", options: ["7 pieces", "7 diameter", "7 wires", "7 strands"], answer: 2, explanation: "\u2022 Why '7 wires' is Correct: In the $N_s \\times N_w$ nomenclature, 6 by 7 indicates 6 strands, each consisting of 7 individual wires.\n\u2022 Why Other Choices differ: The second number represents the wire count per strand." },
      { id: 181, question: "Ropes are made of", options: ["Aluminium alloys", "Copper", "Bronze", "All of the above"], answer: 3, explanation: "\u2022 Why 'All of the above' is Correct: Beyond high-carbon steel, wire ropes are manufactured from bronze (non-magnetic/marine), copper (conductivity), and aluminum alloys (lightweight).\n\u2022 Why Other Choices differ: All three non-ferrous metals are used for specialized wire ropes." },
      { id: 182, question: "The ratio of the strength of all the inside wires to the strength of all the wires in the rope is", options: ["Excess strength", "Reserve strength", "Factor of safety", "Ratio of factor"], answer: 1, explanation: "\u2022 Why 'Reserve strength' is Correct: Reserve strength is the ratio of inner wire strength (which is protected from external abrasive wear) to total rope strength.\n\u2022 Why Other Choices differ: Factor of safety is breaking strength divided by working load." },
      { id: 183, question: "The chief usage of wire ropes at the present time is", options: ["Elevators", "Cranes", "Tramways", "All of the above"], answer: 3, explanation: "\u2022 Why 'All of the above' is Correct: Passenger elevators, heavy mobile/overhead cranes, and aerial tramways are all primary modern applications of wire rope.\n\u2022 Why Other Choices differ: All listed applications rely heavily on wire ropes." },
      { id: 184, question: "Tests and theoretical investigations by J. F. Howe indicate that for steel ropes of the ordinary constructions the value of modulus of elasticity is", options: ["10,000,000 psi", "10,500,000 psi", "11,000,000 psi", "12,000,000 psi"], answer: 3, explanation: "\u2022 Why '12,000,000 psi' is Correct: Classical experiments by J. F. Howe established an effective modulus of elasticity of 12,000,000 psi for standard steel wire ropes due to helical construction stretch.\n\u2022 Why Other Choices differ: 12 Mpsi is the standard empirical value in machine design literature." },
      { id: 185, question: "Average mine-hoist practice is to use drums _________ times the rope diameter.", options: ["60 to 70", "60 to 80", "60 to 90", "60 to 100"], answer: 3, explanation: "\u2022 Why '60 to 100' is Correct: Deep mine-hoist drums are sized between 60 to 100 times the rope diameter to minimize repetitive bending fatigue.\n\u2022 Why Other Choices differ: 60 to 100 is the standard drum ratio in mining practice." },
      { id: 186, question: "What is the recommended sheave diameter for haulage rope?", options: ["70d", "71d", "72d", "73d"], answer: 2, explanation: "\u2022 Why '72d' is Correct: For 6x7 haulage ropes with large, stiff wires, Roebling standards recommend a sheave diameter of $72d$.\n\u2022 Why Other Choices differ: 72d is the established standard ratio for 6x7 haulage ropes." },
      { id: 187, question: "What is the recommended sheave diameter for standard hoisting rope?", options: ["40d", "45d", "50d", "55d"], answer: 1, explanation: "\u2022 Why '45d' is Correct: Standard 6x19 hoisting ropes require a recommended sheave diameter of $45d$.\n\u2022 Why Other Choices differ: 72d is for 6x7, 45d is for 6x19, and 31d is for 6x37." },
      { id: 188, question: "What is the recommended sheave diameter for extra-flexible hoisting rope?", options: ["30d", "31d", "32d", "33d"], answer: 1, explanation: "\u2022 Why '31d' is Correct: Extra-flexible 6x37 hoisting ropes can flex over smaller sheaves, with a recommended sheave diameter of $31d$.\n\u2022 Why Other Choices differ: 31d is standard for 6x37." },
      { id: 189, question: "Wire ropes are made from cold-drawn wires that are first wrapped into", options: ["Pulp", "Strands", "Helices", "Hemp"], answer: 1, explanation: "\u2022 Why 'Strands' is Correct: Cold-drawn wires are helically laid together into strands.\n\u2022 Why Other Choices differ: Hemp and pulp are core materials; strands are the wire groupings." },
      { id: 190, question: "The Roebling Handbook suggests minimum design factor of guy's is", options: ["3.0", "3.5", "4.0", "5.0"], answer: 1, explanation: "\u2022 Why '3.5' is Correct: The Roebling Handbook recommends a minimum design factor of 3.5 for guy wires and standing ropes subjected to static tension.\n\u2022 Why Other Choices differ: Hoisting equipment requires 5.0; guy ropes require 3.5." },
      { id: 191, question: "The Roebling Handbook suggests minimum design factor of miscellaneous hoisting equipment is", options: ["3.0", "5.0", "7.0", "9.0"], answer: 1, explanation: "\u2022 Why '5.0' is Correct: The Roebling Handbook specifies a minimum design factor of 5.0 for miscellaneous hoisting equipment.\n\u2022 Why Other Choices differ: 3.5 is for guys; 5.0 is for miscellaneous hoists; 7.0 is for small hoists." },
      { id: 192, question: "An extra flexible rope is", options: ["6 x 7", "6 x 19", "6 x 37", "7 x 7"], answer: 2, explanation: "\u2022 Why '6 x 37' is Correct: The 6x37 construction contains 37 wires per strand, classifying it as 'extra flexible'.\n\u2022 Why Other Choices differ: 6x7 is coarse/stiff; 6x19 is standard flexible." },
      { id: 193, question: "The strength of the rope is always _________ the sum of the strengths of wires.", options: ["Less than", "More than", "Equal", "The same"], answer: 0, explanation: "\u2022 Why 'Less than' is Correct: Because wires are twisted helically at an angle, axial load introduces multi-axial stresses, causing rope breaking strength to be less than the aggregate sum of individual wire strengths.\n\u2022 Why Other Choices differ: Helical pitch angles reduce the direct axial tensile efficiency." },
      { id: 194, question: "One of the most popular rope style is", options: ["6 x 7", "6 x 19", "6 x 37", "7 x 7"], answer: 1, explanation: "\u2022 Why '6 x 19' is Correct: 6x19 wire rope is the most popular and widely manufactured style due to its balanced flexibility and wear resistance.\n\u2022 Why Other Choices differ: 6x19 is the universal industry standard." },
      { id: 195, question: "The minimum factor of safety of small hoist is", options: ["3", "5", "7", "9"], answer: 2, explanation: "\u2022 Why '7' is Correct: Standard safety codes recommend a minimum factor of safety of 7 for small hoists.\n\u2022 Why Other Choices differ: 5 is for miscellaneous hoisting; 7 is for small hoists." }
    ]
  },

  heat_transfer: {
    title: "Heat Transfer",
    chapter: "Chapter 13",
    questions: [
      { id: 1, question: "One of the reasons for insulating the pipes is:", options: ["They may not break under pressure", "There is minimum corrosion", "Capacity to withstand pressure is increased", "Heat loss from the surface is minimized"], answer: 3, explanation: "• Why 'An electron will not be ejected' is Correct: Photons deliver energy in discrete quanta (E = hν). If the photon energy is less than the metal's work function (Φ), no single photon carries enough energy to overcome the binding force and free an electron.\n• Why Other Choices are Incorrect: In photoelectric emission, photon-electron interactions are 1-to-1. Excess photons cannot pool their energy to eject electrons if individual photon energy is below the work function threshold." },
      { id: 2, question: "The rate of radiant energy, that is emitted by a surface at any temperature and in small wavelengths is found from the known rate of energy that under the same conditions will be emitted from a black surface, by multiplying with the absorptivity. The above enunciation is called:", options: ["Lambert's law", "Kirchhoff's law", "Planck's law", "Stefan Boltzmann's law"], answer: 1, explanation: "• Why 'Increases' is Correct: In supersonic flow (Mach > 1), fluid dynamics behavior reverses compared to subsonic flow: expanding the duct cross-sectional area causes the fluid to accelerate further, decreasing fluid pressure.\n• Why Other Choices are Incorrect: Decreasing area in supersonic flow causes deceleration and pressure rise (acting like a diffuser), while remaining constant maintains choked velocity." },
      { id: 3, question: "Which of the following is generally used to measure the temperature inside the furnace?", options: ["Mercury thermometer", "Alcohol thermometer", "Ash thermometer", "Optical pyrometer"], answer: 3, explanation: "• Why 'Dynamic viscosity / kinematic viscosity' is Correct: Kinematic viscosity (ν) is defined as dynamic viscosity (μ) divided by mass density (ρ), giving ν = μ/ρ. Rearranging for density gives ρ = μ/ν.\n• Why Other Choices are Incorrect: Multiplying or reversing the ratio yields incorrect physical units (kg/m³ required for density)." },
      { id: 4, question: "All heat transfer processes:", options: ["Involve transfer of energy", "Involve temperature difference between the bodies", "Obey first law of thermodynamics", "Obey second law of thermodynamics"], answer: 1, explanation: "• Why 'Shape' is Correct: Fluids (liquids and gases) lack shear resistance and conform to the shape of their container. Liquids maintain a fixed volume, while gases expand to fill both shape and volume.\n• Why Other Choices are Incorrect: Liquids do not take the volume of their contents (they have a fixed volume), so only 'Shape' applies universally to all fluids." },
      { id: 5, question: "What is thermal diffusivity?", options: ["A mathematical formula", "A physical property of the material", "A configuration for heat conduction", "A dimensionless parameter"], answer: 1, explanation: "• Why 'A and B above are correct' is Correct: Alcohol has a low mass density (producing a larger column height for small pressure changes, improving reading sensitivity) and forms a clean, easily readable meniscus in inclined tubes.\n• Why Other Choices are Incorrect: Low cost alone is not the primary engineering reason for selecting indicator fluids in precision manometers." },
      { id: 6, question: "Which of the following is a unit of thermal diffusivity?", options: ["m^2/hr", "kcal/m^2hr", "kcal/ m^2hr °C", "m^2/hr °C"], answer: 0, explanation: "• Why 'Shear stress is proportional to rate of strain' is Correct: By definition, Newtonian fluids satisfy Newton's Law of Viscosity (τ = μ du/dy), meaning shear stress (τ) is linearly proportional to the rate of shear strain (du/dy).\n• Why Other Choices are Incorrect: Viscosity is non-zero, shear stress is single-valued for a given strain rate, and shear stress is proportional to rate of strain (not total static strain)." },
      { id: 7, question: "Non-isotropic conductivity is shown by which of the following?", options: ["Brass", "Copper", "Wood", "Steel"], answer: 2, explanation: "• Why 'When there is no motion of one fluid layer relative to an adjacent layer' is Correct: By Pascal's Law, hydrostatic pressure at a point is equal in all directions only when the fluid is static (no relative motion, meaning zero shear stress).\n• Why Other Choices are Incorrect: When fluid layers move relative to each other, viscous shear stresses distort the stress tensor, making normal stress dependent on direction." },
      { id: 8, question: "For glass wool thermal conductivity changes from sample to sample due to changes in:", options: ["Structure", "Density", "Composition", "All of the above"], answer: 3, explanation: "• Why 'It is a shear stress' is Correct: Fluid pressure is a compressive normal stress acting perpendicular to surfaces, NOT a shear stress acting parallel to surfaces.\n• Why Other Choices are Incorrect: Pressure IS the same in all directions at a point in statics, DOES act normal to surfaces, and DOES increase linearly with depth (P = γh)." },
      { id: 9, question: "Which of the following is the S.I. unit of thermal conductivity?", options: ["W/m-hr-°K", "W/m °K", "KJ/m-hr-°C", "W/m-hr-°C"], answer: 1, explanation: "• Why 'First slowly and then steeply' is Correct: Atmospheric density decreases exponentially with altitude (barometric height relation), causing mercury column height to drop gradually at lower altitudes and progressively faster higher up.\n• Why Other Choices are Incorrect: Linear or constant relations ignore the compressible, exponential nature of Earth's atmosphere." },
      { id: 10, question: "What is the value of the Prandtl number for air?", options: ["10", "6.7", "67", "0.7"], answer: 3, explanation: "• Why 'Biot number' is Correct: Biot number (Bi = h L / k) evaluates conductive vs convective heat transfer resistance in solids. It is a thermal transport parameter, not a fluid dynamics flow parameter.\n• Why Other Choices are Incorrect: Reynolds number (viscous ratio), Froude number (gravity ratio), and Mach number (compressibility ratio) are all core fluid dynamic parameters." },
      { id: 11, question: "According to Prevost theory of heat exchange,", options: ["It is impossible to transfer heat from low temperature source to high temperature source", "Heat transfer by radiation needs no medium", "All bodies above absolute zero emit radiation", "Heat transfer in most of the cases occurs by combination of conduction, convection and radiation"], answer: 2, explanation: "• Why 'All bodies above absolute zero emit radiation' is Correct: Prevost theory states all bodies above 0 K emit thermal radiation.\n• Why Other Choices differ: Alternative options (It is impossible to transfer heat from low temperature source to high temperature source, Heat transfer by radiation needs no medium, Heat transfer in most of the cases occurs by combination of conduction, convection and radiation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 12, question: "Thermal conductivity of wood depends on which of the following?", options: ["Moisture", "Temperature", "Density", "All of the above"], answer: 3, explanation: "• Why 'All of the above' is Correct: Depends on moisture, temperature, and density.\n• Why Other Choices differ: Alternative options (Moisture, Temperature, Density) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 13, question: "A fur coat on an animal will help the animal to remain:", options: ["Warm in winter", "Cool in winter", "Warm in summer", "Cool in summer"], answer: 0, explanation: "• Why 'Warm in winter' is Correct: Fur traps air layers to keep animals warm in winter.\n• Why Other Choices differ: Alternative options (Cool in winter, Warm in summer, Cool in summer) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 14, question: "The nature of flow of a fluid inside a tube, whether it is turbulent or laminar, can be ascertained by:", options: ["Flow velocity", "Surface conditions", "Viscosity of fluid", "Reynolds number"], answer: 3, explanation: "• Why 'Reynolds number' is Correct: Reynolds number Reynolds Number (Re) determines flow regime.\n• Why Other Choices differ: Alternative options (Flow velocity, Surface conditions, Viscosity of fluid) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 15, question: "By which of the following modes of heat transfer is the Stefan-Boltzmann law applicable?", options: ["Conduction", "Radiation", "Conduction and radiation combined", "Convection and radiation combined"], answer: 1, explanation: "• Why 'Radiation' is Correct: Stefan-Boltzmann law governs thermal radiation Q = σ A T⁴.\n• Why Other Choices differ: Alternative options (Conduction, Conduction and radiation combined, Convection and radiation combined) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 16, question: "At all wavelengths and temperatures the monochromatic emissivity of a white body is equal to:", options: ["Zero", "0.5", "Unity", "0.1 to 0.5"], answer: 0, explanation: "• Why 'Zero' is Correct: A white body reflects all radiation, so emissivity ε = 0.\n• Why Other Choices differ: Alternative options (0.5, Unity, 0.1 to 0.5) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 17, question: "The radiation from flames is having:", options: ["Continuous radiation from burning soot particles of microscopic and submicroscopic dimensions", "Radiation from suspended larger particles of coal, coke, or ash contributing to flame luminosity", "Infrared radiation from water vapor and carbon dioxide", "All of the above"], answer: 3, explanation: "• Why 'All of the above' is Correct: Flame radiation includes soot particles, ash, and infrared gas emission.\n• Why Other Choices differ: Alternative options (Continuous radiation from burning soot particles of microscopic and submicroscopic dimensions, Radiation from suspended larger particles of coal, coke, or ash contributing to flame luminosity, Infrared radiation from water vapor and carbon dioxide) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 18, question: "The statement that the emissivity and absorptivity of a surface is surrounded by its own temperature are the same for both monochromatic and total radiation is called:", options: ["Lambert's law", "Kirchhoff's law", "D'Alembert's", "Law of emissivity"], answer: 1, explanation: "• Why 'Kirchhoff's law' is Correct: Kirchhoff's Law ε = α.\n• Why Other Choices differ: Alternative options (Lambert's law, D'Alembert's, Law of emissivity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 19, question: "A reservoir that supplies energy in the form of heat is called:", options: ["Source", "Sink", "Cold reservoir", "Heat reservoir"], answer: 0, explanation: "• Why 'Source' is Correct: Heat source.\n• Why Other Choices differ: Alternative options (Sink, Cold reservoir, Heat reservoir) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 20, question: "In regenerator type heat exchanger, heat transfer occurs by:", options: ["Direct mixing of hot and cold fluids", "A complete separation between hot and cold fluids", "Flow of hot and cold fluids alternately over a surface", "Generation of heat again and again"], answer: 2, explanation: "• Why 'Flow of hot and cold fluids alternately over a surface' is Correct: Hot and cold fluids flow alternately over a matrix surface.\n• Why Other Choices differ: Alternative options (Direct mixing of hot and cold fluids, A complete separation between hot and cold fluids, Generation of heat again and again) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 21, question: "Least value of Prandtl number can be expected in case of:", options: ["Liquid metals", "Sugar solution", "Salt solution", "Water"], answer: 0, explanation: "• Why 'Liquid metals' is Correct: Liquid metals have extremely low Prandtl Number (Pr) (0.001 to 0.03).\n• Why Other Choices differ: Alternative options (Sugar solution, Salt solution, Water) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 22, question: "'The boiling point of a solution is a linear function of water at the same pressure.' The above statement is called:", options: ["Duhring's rule", "Petit and Dulong's law", "Fick's rule", "Reynolds law"], answer: 0, explanation: "• Why 'Duhring's rule' is Correct: Dühring's Rule.\n• Why Other Choices differ: Alternative options (Petit and Dulong's law, Fick's rule, Reynolds law) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 23, question: "Floating heads are provided in heat exchangers to:", options: ["Increase the pressure drop", "Decrease the pressure drop", "Facilitate maintenance", "Avoid deformation of tubes because of thermal expansion"], answer: 3, explanation: "• Why 'Avoid deformation of tubes because of thermal expansion' is Correct: Accommodate differential thermal expansion.\n• Why Other Choices differ: Alternative options (Increase the pressure drop, Decrease the pressure drop, Facilitate maintenance) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 24, question: "What do you call the first stage of crystal formation?", options: ["Nucleation", "Foaming", "Separation", "Vortexing"], answer: 0, explanation: "• Why 'Nucleation' is Correct: Nucleation.\n• Why Other Choices differ: Alternative options (Foaming, Separation, Vortexing) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 25, question: "In heat exchanger design, one transfer unit implies:", options: ["One fluid which is exchanging with another fluid of the same chemical composition", "The section of heat exchanger which will cause temperature drop of one degree centigrade", "The section of heat exchanger where heat transfer surface area has been one square meter", "Condition when the change in temperature of one stream is numerically equal to the average driving force"], answer: 3, explanation: "• Why 'Condition when the change in temperature of one stream is numerically equal to the average driving force' is Correct: Number of Transfer Units (NTU) definition where temperature change equals mean driving force.\n• Why Other Choices differ: Alternative options (One fluid which is exchanging with another fluid of the same chemical composition, The section of heat exchanger which will cause temperature drop of one degree centigrade, The section of heat exchanger where heat transfer surface area has been one square meter) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 26, question: "Dittus-Boelter equation can be applied in case of fluids flowing in:", options: ["Transition region", "Turbulent region", "Laminar region", "Any of the above"], answer: 1, explanation: "• Why 'Turbulent region' is Correct: Dittus-Boelter equation is valid for turbulent tube flow.\n• Why Other Choices differ: Alternative options (Transition region, Laminar region, Any of the above) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 27, question: "In sugar mills cane juice evaporation is in:", options: ["Zigzag tube evaporators", "Long vertical tube evaporators", "Short vertical tube evaporators", "Horizontal tube evaporators"], answer: 1, explanation: "• Why 'Long vertical tube evaporators' is Correct: Long vertical tube (LVT) evaporators.\n• Why Other Choices differ: Alternative options (Zigzag tube evaporators, Short vertical tube evaporators, Horizontal tube evaporators) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 28, question: "A 1-2 heat exchanger refers to which of the following?", options: ["Single pass on shell side and double pass on tube side", "Single pass on tube side and double pass on shell side", "Single liquid cools two liquids at different temperature", "Two tubes of cold fluid pass through one tube of hot fluid"], answer: 0, explanation: "• Why 'Single pass on shell side and double pass on tube side' is Correct: 1 shell pass, 2 tube passes.\n• Why Other Choices differ: Alternative options (Single pass on tube side and double pass on shell side, Single liquid cools two liquids at different temperature, Two tubes of cold fluid pass through one tube of hot fluid) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 29, question: "A correction of Logarithmic Mean Temperature Difference (Logarithmic Mean Temperature Difference (LMTD)) is essential in case of:", options: ["Parallel flow heat exchanger", "Counter current heat exchanger", "Cross flow heat exchanger", "None of the above"], answer: 2, explanation: "• Why 'Cross flow heat exchanger' is Correct: Logarithmic Mean Temperature Difference (Logarithmic Mean Temperature Difference (LMTD)) correction factor F is needed for cross flow and multi-pass shell-and-tube exchangers.\n• Why Other Choices differ: Alternative options (Parallel flow heat exchanger, Counter current heat exchanger, None of the above) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 30, question: "Which of the following is used as entrainer in acetic acid – water separation?", options: ["Methyl alcohol", "Phosphorous", "Butyl acetate", "Hexane"], answer: 2, explanation: "• Why 'Butyl acetate' is Correct: Butyl acetate is used as an entrainer in azeotropic distillation.\n• Why Other Choices differ: Alternative options (Methyl alcohol, Phosphorous, Hexane) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 31, question: "A type of radiation consisting of singly charged particles that penetrate to intermediate distances:", options: ["Nuclear radiation", "Alpha radiation", "Beta radiation", "Gamma radiation"], answer: 2, explanation: "• Why 'Above the center of gravity' is Correct: A floating body is in stable rotational equilibrium when its Metacenter (M) lies above its Center of Gravity (G), generating a righting moment when tilted.\n• Why Other Choices are Incorrect: If the Metacenter lies below the Center of Gravity, any slight tilt produces an overturning moment causing the body to capsize (unstable equilibrium)." },
      { id: 32, question: "An electrically charged atom or radical which carries electricity through an electrolyte is called:", options: ["Ion", "Isotope", "Molecule", "Hole"], answer: 0, explanation: "• Why 'Below the centroid' is Correct: Because hydrostatic pressure increases linearly with depth (P = ρgh), the lower half of a submerged surface experiences greater force, placing the resultant Center of Pressure below the geometric centroid.\n• Why Other Choices are Incorrect: At or above the centroid would imply uniform or upward-increasing pressure, which violates hydrostatic law." },
      { id: 33, question: "The energy of a body that can be transmitted in the form of heat:", options: ["Heat energy", "Thermal energy", "Entropy", "Internal energy"], answer: 1, explanation: "• Why 'Thermal energy' is Correct: Thermal energy.\n• Why Other Choices differ: Alternative options (Heat energy, Entropy, Internal energy) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 34, question: "In an isometric process, the heat transferred is equal to:", options: ["Change in enthalpy", "Change in entropy", "Change in internal energy", "Work nonflow"], answer: 2, explanation: "• Why 'The sum of pressure energy and potential energy' is Correct: The Hydraulic Grade Line (HGL) represents piezometric head, combining pressure head (P/γ) and elevation head (z).\n• Why Other Choices are Incorrect: Total energy is represented by the Energy Grade Line (EGL), which also includes velocity head (V²/2g)." },
      { id: 35, question: "A substance that is able to absorb liquids or gases and is used for removing them from a given medium or region:", options: ["Absorbent", "Cohesive", "Adsorbent", "Adhesive"], answer: 0, explanation: "• Why 'Total energy' is Correct: The Energy Grade Line (EGL) plots the total mechanical energy head, combining pressure head (P/γ), elevation head (z), and dynamic velocity head (V²/2g).\n• Why Other Choices are Incorrect: The sum of pressure and elevation head alone defines the Hydraulic Grade Line (HGL), not the EGL." },
      { id: 36, question: "Radiant heat transfer is described by:", options: ["Newton's law", "Fourier's law", "The logarithmic mean temperature", "Kirchhoff's law"], answer: 3, explanation: "• Why 'Kirchhoff's law' is Correct: Kirchhoff's Law / Stefan-Boltzmann Law.\n• Why Other Choices differ: Alternative options (Newton's law, Fourier's law, The logarithmic mean temperature) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 37, question: "A reservoir that absorbs energy in the form of heat is called:", options: ["Source", "Sink", "Cold reservoir", "Heat reservoir"], answer: 1, explanation: "• Why 'Sink' is Correct: Heat sink.\n• Why Other Choices differ: Alternative options (Source, Cold reservoir, Heat reservoir) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 38, question: "When the entire heat exchanger is selected as control volume, net heat transfer becomes:", options: ["Unity", "Zero", "Undefined", "Indeterminate"], answer: 1, explanation: "• Why 'Zero' is Correct: If insulated overall control volume, net Q_ext = 0.\n• Why Other Choices differ: Alternative options (Unity, Undefined, Indeterminate) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 39, question: "Heat is conducted in the direction of:", options: ["Increasing temperature", "Decreasing temperature", "Increasing and decreasing temperature", "Constant temperature"], answer: 1, explanation: "• Why 'Decreasing temperature' is Correct: Heat flows down temperature gradient (decreasing T).\n• Why Other Choices differ: Alternative options (Increasing temperature, Increasing and decreasing temperature, Constant temperature) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 40, question: "The heat transfer term in the first law of thermodynamics may be due to any of the following except:", options: ["Conduction", "Convection", "Radiation", "Internal heat generation (e.g., chemical reaction)"], answer: 3, explanation: "• Why 'Internal heat generation (e.g., chemical reaction)' is Correct: Internal heat generation is a source term, not heat transfer across boundaries.\n• Why Other Choices differ: Alternative options (Conduction, Convection, Radiation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 41, question: "All heat transfer processes require a medium of energy exchange except:", options: ["Conduction", "Natural convection", "Forced convection", "Radiation"], answer: 3, explanation: "• Why 'Radiation' is Correct: Radiation propagates through vacuum.\n• Why Other Choices differ: Alternative options (Conduction, Natural convection, Forced convection) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 42, question: "Thermal conduction is described by:", options: ["Newton's law", "The logarithmic mean temperature difference", "The Stefan-Boltzmann law", "Fourier's law"], answer: 3, explanation: "• Why 'Fourier's law' is Correct: Fourier's Law q = -k A (dT/dx).\n• Why Other Choices differ: Alternative options (Newton's law, The logarithmic mean temperature difference, The Stefan-Boltzmann law) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 43, question: "Convection is described by which of the following laws?", options: ["Newton's law", "The logarithmic mean temperature difference", "The Stefan-Boltzmann law", "Fourier's law"], answer: 0, explanation: "• Why 'Newton's law' is Correct: Newton's Law of Cooling q = h A (T_s - T_inf).\n• Why Other Choices differ: Alternative options (The logarithmic mean temperature difference, The Stefan-Boltzmann law, Fourier's law) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 44, question: "Radiation heat transfer is described by:", options: ["Newton's law", "The logarithmic mean temperature difference", "Fourier's law", "Kirchhoff's law"], answer: 3, explanation: "• Why 'Kirchhoff's law' is Correct: Kirchhoff's / Stefan-Boltzmann law.\n• Why Other Choices differ: Alternative options (Newton's law, The logarithmic mean temperature difference, Fourier's law) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 45, question: "The equivalent of ratio of emissive power to absorptivity for bodies in thermal equilibrium is described by:", options: ["Newton's law", "The logarithmic mean temperature difference", "Fourier's law", "Kirchhoff's law"], answer: 3, explanation: "• Why 'Kirchhoff's law' is Correct: Kirchhoff's law E/α = E_b.\n• Why Other Choices differ: Alternative options (Newton's law, The logarithmic mean temperature difference, Fourier's law) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 46, question: "The temperature potential between temperature at the two ends of a heat exchanger are given by:", options: ["The logarithmic mean temperature difference", "The Stefan-Boltzmann law", "Fourier's law", "Kirchhoff's law"], answer: 0, explanation: "• Why 'The logarithmic mean temperature difference' is Correct: Logarithmic Mean Temperature Difference (Logarithmic Mean Temperature Difference (LMTD)).\n• Why Other Choices differ: Alternative options (The Stefan-Boltzmann law, Fourier's law, Kirchhoff's law) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 47, question: "The function of a heat exchanger is to:", options: ["Increase the water temperature entering the boiler and decrease combustion requirements", "Transfer heat from one fluid to another", "Increase the total energy content of the flow", "Exchange heat to increase energy to the flow"], answer: 1, explanation: "• Why 'Transfer heat from one fluid to another' is Correct: Transfer heat between fluids.\n• Why Other Choices differ: Alternative options (Increase the water temperature entering the boiler and decrease combustion requirements, Increase the total energy content of the flow, Exchange heat to increase energy to the flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 48, question: "The function of a superheater is to:", options: ["Increase the water temperature entering the boiler and decrease combustion requirements", "Transfer heat from one fluid to another", "Increase the total energy content of the flow", "Exchange heat to increase energy to the flow"], answer: 3, explanation: "• Why 'Exchange heat to increase energy to the flow' is Correct: Increase enthalpy/energy of steam above saturation.\n• Why Other Choices differ: Alternative options (Increase the water temperature entering the boiler and decrease combustion requirements, Transfer heat from one fluid to another, Increase the total energy content of the flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 49, question: "What is the series of processes that eventually bring the system back to its original condition?", options: ["Reversible process", "Irreversible process", "Cycle", "Isentropic process"], answer: 2, explanation: "• Why 'Cycle' is Correct: Thermodynamic cycle.\n• Why Other Choices differ: Alternative options (Reversible process, Irreversible process, Isentropic process) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 50, question: "A theoretical body which when heated to incandescence would emit a continuous light-ray spectrum.", options: ["Black body radiation", "Black body", "Blue body", "White body"], answer: 1, explanation: "• Why 'Black body' is Correct: Black body.\n• Why Other Choices differ: Alternative options (Black body radiation, Blue body, White body) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 51, question: "Which of the following is the reason for insulating the pipes?", options: ["They may not break under pressure", "There is minimum corrosion", "Capacity to withstand pressure", "Heat loss from the surface is minimized"], answer: 3, explanation: "• Why 'Heat loss from the surface is minimized' is Correct: Minimizes heat loss.\n• Why Other Choices differ: Alternative options (They may not break under pressure, There is minimum corrosion, Capacity to withstand pressure) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 52, question: "Heat transfer due to density differential:", options: ["Convection", "Nuclear", "Conduction", "Radiation"], answer: 0, explanation: "• Why 'Convection' is Correct: Natural/free convection.\n• Why Other Choices differ: Alternative options (Nuclear, Conduction, Radiation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 53, question: "The term 'exposure' in radiological effects is used as a measure of a gamma ray or an X-ray field in the surface of an exposed object:", options: ["Number of ions produced per mass of air x coulombs per kg", "Mass of air x surface area of an exposed object", "Mass of air over surface area of an exposed object", "Number of ions produced per mass of air + coulombs per kg"], answer: 0, explanation: "• Why 'Number of ions produced per mass of air x coulombs per kg' is Correct: Ionization per mass unit.\n• Why Other Choices differ: Alternative options (Mass of air x surface area of an exposed object, Mass of air over surface area of an exposed object, Number of ions produced per mass of air + coulombs per kg) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 54, question: "The passing of heat energy from molecule to molecule through a substance:", options: ["Conduction", "Radiation", "Conservation", "Convection"], answer: 0, explanation: "• Why 'Conduction' is Correct: Conduction.\n• Why Other Choices differ: Alternative options (Radiation, Conservation, Convection) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 55, question: "The radiant heat transfer depends on:", options: ["Temperature", "Heat rays", "Heat flow from cold to hot", "Humidity"], answer: 1, explanation: "• Why 'Heat rays' is Correct: Electromagnetic heat rays / radiation wavelength.\n• Why Other Choices differ: Alternative options (Temperature, Heat flow from cold to hot, Humidity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 56, question: "What kind of heat exchanger where water is heated to a point that dissolved gases are liberated?", options: ["Evaporator", "Condenser", "Intercooler", "Deaerator"], answer: 3, explanation: "• Why 'Deaerator' is Correct: Deaerator removes dissolved O₂ and CO₂.\n• Why Other Choices differ: Alternative options (Evaporator, Condenser, Intercooler) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 57, question: "Heat transfer processes which include a change of phase of a fluid are considered:", options: ["Convection", "Thermal radiation", "Conduction", "Radiation"], answer: 0, explanation: "• Why 'Convection' is Correct: Boiling and condensation are phase-change convection processes.\n• Why Other Choices differ: Alternative options (Thermal radiation, Conduction, Radiation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 58, question: "A hot block is cooled by blowing cool air over its top surface. The heat that is first transferred to the air layer close to the block is by conduction. It is eventually carried away from the surface by:", options: ["Convection", "Radiation", "Conduction", "Thermal radiation"], answer: 0, explanation: "• Why 'Convection' is Correct: Convection.\n• Why Other Choices differ: Alternative options (Radiation, Conduction, Thermal radiation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 59, question: "A body that is hot compared to its surroundings illuminates more energy than it receives. What is this mode of heat transfer?", options: ["Radiation", "Conduction", "Convection", "Condensation"], answer: 0, explanation: "• Why 'Radiation' is Correct: Thermal radiation.\n• Why Other Choices differ: Alternative options (Conduction, Convection, Condensation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 60, question: "What is the heat transfer due to density differential?", options: ["Convection", "Conduction", "Nuclear", "Radiation"], answer: 0, explanation: "• Why 'Convection' is Correct: Natural convection.\n• Why Other Choices differ: Alternative options (Conduction, Nuclear, Radiation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 61, question: "What do you call the passing of heat energy from molecule to molecule through a substance?", options: ["Conduction", "Conservation", "Radiation", "Convection"], answer: 0, explanation: "• Why 'Conduction' is Correct: Conduction.\n• Why Other Choices differ: Alternative options (Conservation, Radiation, Convection) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 62, question: "The transmission of heat from one place to another by fluid circulation between the spots of different temperature is called:", options: ["Convection", "Conservation", "Radiation", "Conduction"], answer: 0, explanation: "• Why 'Convection' is Correct: Convection.\n• Why Other Choices differ: Alternative options (Conservation, Radiation, Conduction) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 63, question: "Which of the following requires the greatest amount of heat per kilogram for a given increase in temperature?", options: ["Ice", "Water", "Steam", "Copper"], answer: 1, explanation: "• Why 'Water' is Correct: Liquid water has the highest specific heat capacity (4.184 kJ/kg·K).\n• Why Other Choices differ: Alternative options (Ice, Steam, Copper) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 64, question: "What do you call the effectiveness of a body as a thermal radiator at a given temperature?", options: ["Absorptivity", "Conductivity", "Emissivity", "Reflectivity"], answer: 2, explanation: "• Why 'Emissivity' is Correct: Emissivity ε.\n• Why Other Choices differ: Alternative options (Absorptivity, Conductivity, Reflectivity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 65, question: "The natural direction of the heat flow between two reservoirs is dependent on which of the following?", options: ["Their temperature difference", "Their internal energy", "Their pressures", "Their states, whether solid, liquid and gas"], answer: 0, explanation: "• Why 'Their temperature difference' is Correct: Temperature difference.\n• Why Other Choices differ: Alternative options (Their internal energy, Their pressures, Their states, whether solid, liquid and gas) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 66, question: "Why are metals good conductors of heat?", options: ["Because they contain free electrons", "Because their atoms are relatively far apart", "Because their atoms collide infrequently", "Because they have reflecting surfaces"], answer: 0, explanation: "• Why 'Because they contain free electrons' is Correct: Free electron motion enhances thermal conductivity.\n• Why Other Choices differ: Alternative options (Because their atoms are relatively far apart, Because their atoms collide infrequently, Because they have reflecting surfaces) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 67, question: "In natural convection a heated portion of a fluid moves because:", options: ["Its molecular motions become aligned", "Of molecular collisions within it", "Its density is less than that of the surrounding fluid", "Of currents in surrounding fluid"], answer: 2, explanation: "• Why 'Its density is less than that of the surrounding fluid' is Correct: Buoyancy force driven by lower density.\n• Why Other Choices differ: Alternative options (Its molecular motions become aligned, Of molecular collisions within it, Of currents in surrounding fluid) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 68, question: "In order to emit electromagnetic radiation, an object must be at a temperature:", options: ["Above 0 K", "Above 0 °C", "Above that of its surrounding", "High enough for it to glow"], answer: 0, explanation: "• Why 'Above 0 K' is Correct: Above absolute zero (0 K).\n• Why Other Choices differ: Alternative options (Above 0 °C, Above that of its surrounding, High enough for it to glow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 69, question: "The rate at which an object radiates electromagnetic energy does not depend on its:", options: ["Surface area", "Mass", "Temperature", "Ability to absorb radiation"], answer: 1, explanation: "• Why 'Mass' is Correct: Radiation rate depends on area, temperature, and emissivity—not mass.\n• Why Other Choices differ: Alternative options (Surface area, Temperature, Ability to absorb radiation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 70, question: "Sublimation refers to:", options: ["The vaporization of solid without first becoming liquid", "The melting of a solid", "The vaporization of a liquid", "The condensation of a gas into liquid"], answer: 0, explanation: "• Why 'The vaporization of solid without first becoming liquid' is Correct: Direct solid to gas transition.\n• Why Other Choices differ: Alternative options (The melting of a solid, The vaporization of a liquid, The condensation of a gas into liquid) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 71, question: "In the process of freeze drying, ice goes directly into water vapor. What is the temperature at which this process can take place?", options: ["Below the triple point of water", "At the triple point of water", "Above the triple point of water", "Any of the above, depending on the pressure"], answer: 0, explanation: "• Why 'Below the triple point of water' is Correct: Below triple point pressure and temperature.\n• Why Other Choices differ: Alternative options (At the triple point of water, Above the triple point of water, Any of the above, depending on the pressure) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 72, question: "What usually happens when a vapor condenses into a liquid?", options: ["It evolves heat", "It generates heat", "Its temperature increases", "It boils with temperature less than 100 °C"], answer: 0, explanation: "• Why 'It evolves heat' is Correct: Condensation releases/evolves latent heat.\n• Why Other Choices differ: Alternative options (It generates heat, Its temperature increases, It boils with temperature less than 100 °C) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 73, question: "In a cooling tower, the water is cooled mainly by:", options: ["Condensation", "Convection", "Evaporation", "Conduction"], answer: 2, explanation: "• Why 'Evaporation' is Correct: Evaporative cooling.\n• Why Other Choices differ: Alternative options (Condensation, Convection, Conduction) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 74, question: "How do you classify a body that has an emissivity factor of 0.7?", options: ["Gray body", "Black body", "White body", "Theoretical body"], answer: 0, explanation: "• Why 'Gray body' is Correct: Gray body (0 < ε < 1).\n• Why Other Choices differ: Alternative options (Black body, White body, Theoretical body) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 75, question: "At what particular condition that no more heat can be removed from a substance and the temperature can no longer be lowered?", options: ["Freezing point", "Absolute zero", "Critical point", "Ground zero"], answer: 1, explanation: "• Why 'Absolute zero' is Correct: Absolute zero (0 K).\n• Why Other Choices differ: Alternative options (Freezing point, Critical point, Ground zero) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 76, question: "What refers to the heat transfer wherein the heat is transferred from one point to another by actual movement of substance?", options: ["Conduction", "Radiation", "Convection", "Absorption"], answer: 2, explanation: "• Why 'Convection' is Correct: Convection.\n• Why Other Choices differ: Alternative options (Conduction, Radiation, Absorption) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 77, question: "The ratio of the radiation of actual body to the radiation of a blackbody is known as _______.", options: ["Emittance", "Reflectance", "Absorptance", "Transmittance"], answer: 0, explanation: "• Why 'Emittance' is Correct: Emittance / Emissivity.\n• Why Other Choices differ: Alternative options (Reflectance, Absorptance, Transmittance) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 78, question: "Which of the following is the usual geometric view factor for a black body to itself if convex?", options: ["Zero", "Infinity", "One", "Indeterminate"], answer: 2, explanation: "• Why 'One' is Correct: View factor sum rule.\n• Why Other Choices differ: Alternative options (Zero, Infinity, Indeterminate) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 79, question: "What happens to the heat transferred radially across insulated pipe per unit area?", options: ["The heat will flow at constant rate", "Decreases with the increase in thermal conductivity", "Decrease from pipe wall to insulated surface", "Partially increases from pipe wall to insulated surface"], answer: 2, explanation: "• Why 'Decrease from pipe wall to insulated surface' is Correct: Heat flux per unit area decreases with radius (q'' = Q / (2πrL)).\n• Why Other Choices differ: Alternative options (The heat will flow at constant rate, Decreases with the increase in thermal conductivity, Partially increases from pipe wall to insulated surface) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 80, question: "What do you call a change of phase directly from vapor to solid without passing through the liquid state?", options: ["Sublimation", "Solidification", "Vaporization", "Deposition"], answer: 3, explanation: "• Why 'Deposition' is Correct: Deposition (frosting).\n• Why Other Choices differ: Alternative options (Sublimation, Solidification, Vaporization) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 81, question: "Which of the following is the Stefan-Boltzmann constant?", options: ["5.77x10^-7 W/m^2K^4", "7.67x10^-4 W/m^2K^4", "4.78x10^-10 W/m^2K^4", "5.67x10^-8 W/m^2K^4"], answer: 3, explanation: "• Why '5.67x10^-8 W/m^2K^4' is Correct: σ = 5.67 × 10⁻⁸ W/(m²·K⁴).\n• Why Other Choices differ: Alternative options (5.77x10^-7 W/m^2K^4, 7.67x10^-4 W/m^2K^4, 4.78x10^-10 W/m^2K^4) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 82, question: "What is the usual value of transmissivity for opaque materials?", options: ["0", "Indeterminate", "1", "Infinity"], answer: 0, explanation: "• Why '0' is Correct: Opaque materials have transmissivity τ = 0.\n• Why Other Choices differ: Alternative options (Indeterminate, 1, Infinity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 83, question: "A body whose emissivity is less than 1 is known as a real body. What is the other term for real body?", options: ["Gray body", "White body", "Black body", "Theoretical body"], answer: 0, explanation: "• Why 'Gray body' is Correct: Gray body.\n• Why Other Choices differ: Alternative options (White body, Black body, Theoretical body) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 84, question: "What refers to an ideal body that absorbs all of the radiant energy that intrudes on it and emits maximum energy?", options: ["White body", "Black body", "Gray body", "Red hot body"], answer: 1, explanation: "• Why 'Black body' is Correct: Black body.\n• Why Other Choices differ: Alternative options (White body, Gray body, Red hot body) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 85, question: "The thermal resistance for one-dimensional steady conduction heat transfer through cylindrical wall in radial direction is expressed in which function?", options: ["Linear", "Exponential", "Logarithmic", "Trigonometric"], answer: 2, explanation: "• Why 'Logarithmic' is Correct: R_cyl = ln(r2/r1) / (2πkL).\n• Why Other Choices differ: Alternative options (Linear, Exponential, Trigonometric) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 86, question: "The law which states that 'the ratio of the emissive powers to absorptivities are equal when the two bodies are in thermal equilibrium' is known as:", options: ["Stefan-Boltzmann law", "Newton's law of convection", "Fourier's law", "Kirchhoff's law of radiation"], answer: 3, explanation: "• Why 'Kirchhoff's law of radiation' is Correct: Kirchhoff's Law of Radiation.\n• Why Other Choices differ: Alternative options (Stefan-Boltzmann law, Newton's law of convection, Fourier's law) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 87, question: "It refers to the ratio of the internal thermal resistance of a solid to the boundary layer thermal resistance:", options: ["Biot number", "Prandtl number", "Nusselt number", "Reynolds number"], answer: 0, explanation: "• Why 'Biot number' is Correct: Biot number Biot Number (Bi) = (h L) / k.\n• Why Other Choices differ: Alternative options (Prandtl number, Nusselt number, Reynolds number) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 88, question: "It refers to the ratio of the rate of heat transferred by conduction to the rate of energy stored:", options: ["Reynolds number", "Fourier number", "Biot number", "Prandtl number"], answer: 1, explanation: "• Why 'Fourier number' is Correct: Fourier number Fourier Number (Fo) = (α t) / L².\n• Why Other Choices differ: Alternative options (Reynolds number, Biot number, Prandtl number) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 89, question: "A hot block is cooled by blowing cool air over its top surface. Heat is carried away from surface by:", options: ["Conduction", "Radiation", "Thermal", "Convection"], answer: 3, explanation: "• Why 'Convection' is Correct: Convection.\n• Why Other Choices differ: Alternative options (Conduction, Radiation, Thermal) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 90, question: "It is the term used to describe the energy of a body that can be transmitted in the form of heat.", options: ["Enthalpy", "Thermal energy", "Entropy", "Internal energy"], answer: 1, explanation: "• Why 'Thermal energy' is Correct: Thermal energy.\n• Why Other Choices differ: Alternative options (Enthalpy, Entropy, Internal energy) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 91, question: "Which of the following is the equivalent heat transferred of a gas undergoing isometric process?", options: ["Change in enthalpy", "Change in entropy", "Change in internal energy", "Work nonflow"], answer: 2, explanation: "• Why 'Change in internal energy' is Correct: Change in internal energy ΔU.\n• Why Other Choices differ: Alternative options (Change in enthalpy, Change in entropy, Work nonflow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 92, question: "What do you call a substance that is able to absorb liquids or gases and is usually used for removing liquids from a region?", options: ["Absorbent", "Liquifier", "Adsorbent", "Adhesive"], answer: 0, explanation: "• Why 'Absorbent' is Correct: Absorbent.\n• Why Other Choices differ: Alternative options (Liquifier, Adsorbent, Adhesive) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 93, question: "In which direction that heat is transferred through conduction?", options: ["Increasing temperature", "Decreasing temperature", "Increasing and decreasing temperature", "Constant temperature"], answer: 1, explanation: "• Why 'Decreasing temperature' is Correct: Decreasing temperature.\n• Why Other Choices differ: Alternative options (Increasing temperature, Increasing and decreasing temperature, Constant temperature) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 94, question: "Which of the following statements is based on Prevost theory of heat exchange?", options: ["All bodies above absolute zero emit radiation", "The substance moves because of density decrease", "The substance moves because of fan", "Heat transfer occurs by combination"], answer: 0, explanation: "• Why 'All bodies above absolute zero emit radiation' is Correct: All bodies above 0 K emit radiation.\n• Why Other Choices differ: Alternative options (The substance moves because of density decrease, The substance moves because of fan, Heat transfer occurs by combination) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 95, question: "Which of the following is the emissivity of white body?", options: ["Zero", "0.5", "1", "0 < e < 1"], answer: 0, explanation: "• Why 'Zero' is Correct: Emissivity ε = 0.\n• Why Other Choices differ: Alternative options (0.5, 1, 0 < e < 1) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 96, question: "The mechanism of heat transfer in which there is no medium required for heat energy to travel is:", options: ["Conduction", "Radiation", "Convection", "Diffusion"], answer: 1, explanation: "• Why 'Radiation' is Correct: Radiation.\n• Why Other Choices differ: Alternative options (Conduction, Convection, Diffusion) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 97, question: "The temperature potential between temperature at the two ends of a heat exchanger are given by:", options: ["The logarithmic mean temperature difference", "The Stefan-Boltzmann law", "Fourier's law", "Kirchhoff's law"], answer: 0, explanation: "• Why 'The logarithmic mean temperature difference' is Correct: Logarithmic Mean Temperature Difference (Logarithmic Mean Temperature Difference (Logarithmic Mean Temperature Difference (LMTD))).\n• Why Other Choices differ: Alternative options (The Stefan-Boltzmann law, Fourier's law, Kirchhoff's law) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 98, question: "Which of the following best describe function of heat exchanger?", options: ["Increase the water temperature entering the system", "Transfer heat from one fluid to another", "Evaluate the total energy of the flow", "Exchange heat to increase energy to the flow"], answer: 1, explanation: "• Why 'Transfer heat from one fluid to another' is Correct: Transfer heat between fluids.\n• Why Other Choices differ: Alternative options (Increase the water temperature entering the system, Evaluate the total energy of the flow, Exchange heat to increase energy to the flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 99, question: "What refers to a form of energy associated with the kinetic random motion of large numbers of molecules?", options: ["Heat", "Heat of fusion", "Entropy", "Internal energy"], answer: 0, explanation: "• Why 'Heat' is Correct: Heat / Thermal kinetic energy.\n• Why Other Choices differ: Alternative options (Heat of fusion, Entropy, Internal energy) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 100, question: "How much is the part of light that is absorbed by the body that transmits and reflects 80% and 10% respectively?", options: ["10%", "30%", "20%", "5%"], answer: 0, explanation: "• Why '10%' is Correct: α + ρ + τ = 100% => α = 100 - (80 + 10) = 10%.\n• Why Other Choices differ: Alternative options (30%, 20%, 5%) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 101, question: "In convection heat transfer, what happens to the heat transfer coefficient if the viscosity of the fluid increases?", options: ["The heat transfer coefficient will increase", "The heat transfer coefficient will decrease", "The heat transfer coefficient remains constant", "None of the above"], answer: 1, explanation: "• Why 'The heat transfer coefficient will decrease' is Correct: Higher viscosity reduces flow velocity boundary layer mixing, lowering h.\n• Why Other Choices differ: Alternative options (The heat transfer coefficient will increase, The heat transfer coefficient remains constant, None of the above) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 102, question: "How do you call a phenomenon wherein the heat is transferred by motion of fluid under the action of mechanical device?", options: ["Forced convection", "Natural convection", "Forced conduction", "Thermal radiation"], answer: 0, explanation: "• Why 'Forced convection' is Correct: Forced convection (pump/fan).\n• Why Other Choices differ: Alternative options (Natural convection, Forced conduction, Thermal radiation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 103, question: "In conduction heat transfer, what happens to the heat transfer per unit time when the thermal conductivity decreases?", options: ["The heat flow will increase", "The heat flow remains constant", "The heat flow will decrease", "The heat flow will partially increase"], answer: 2, explanation: "• Why 'The heat flow will decrease' is Correct: q = -k A dT/dx => Decreasing k decreases heat flow.\n• Why Other Choices differ: Alternative options (The heat flow will increase, The heat flow remains constant, The heat flow will partially increase) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 104, question: "Which of the following is the driving force in heat transfer?", options: ["Temperature gradient", "Thickness gradient", "Viscosity gradient", "Dielectric gradient"], answer: 0, explanation: "• Why 'Temperature gradient' is Correct: Temperature gradient ΔT.\n• Why Other Choices differ: Alternative options (Thickness gradient, Viscosity gradient, Dielectric gradient) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 105, question: "Which of the following is the measure of the relative effectiveness of momentum and energy transport by diffusion?", options: ["Nusselt's number", "Prandtl number", "Reynold's number", "Dimensional measurement"], answer: 1, explanation: "• Why 'Prandtl number' is Correct: Prandtl number Prandtl Number (Pr) = ν / α.\n• Why Other Choices differ: Alternative options (Nusselt's number, Reynold's number, Dimensional measurement) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 106, question: "Which of the following is the property of the solid that provides the measure of the rate of heat transfer to energy storage?", options: ["Thermal efficiency", "Thermal diffusivity", "Thermal conductivity", "Thermal radiography"], answer: 1, explanation: "• Why 'Thermal diffusivity' is Correct: Thermal diffusivity α.\n• Why Other Choices differ: Alternative options (Thermal efficiency, Thermal conductivity, Thermal radiography) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 107, question: "Two metals were kept together at room temperature and it was found out that one is colder than the other. Best reason why?", options: ["The heat transfer coefficient of one metal is higher", "One metal is of lower temperature", "One metal is of higher temperature", "The thermal conductivity of one metal is high as compared to the other"], answer: 3, explanation: "• Why 'The thermal conductivity of one metal is high as compared to the other' is Correct: Higher thermal conductivity draws heat away from skin faster, feeling colder.\n• Why Other Choices differ: Alternative options (The heat transfer coefficient of one metal is higher, One metal is of lower temperature, One metal is of higher temperature) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 108, question: "In convection heat transfer, what happens to the heat transfer coefficient if the viscosity of the fluid decreases?", options: ["The heat transfer coefficient also increases", "The heat transfer coefficient will decrease", "The heat transfer coefficient remains constant", "The heat transfer coefficient partially increases then decreases"], answer: 0, explanation: "• Why 'The heat transfer coefficient also increases' is Correct: Lower viscosity increases Reynolds number and heat transfer coefficient h.\n• Why Other Choices differ: Alternative options (The heat transfer coefficient will decrease, The heat transfer coefficient remains constant, The heat transfer coefficient partially increases then decreases) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 109, question: "A body that is hot compared to its surroundings illuminates more energy than it receives. What is this mode of heat transfer?", options: ["Radiation", "Conduction", "Convection", "Condensation"], answer: 0, explanation: "• Why 'Radiation' is Correct: Radiation.\n• Why Other Choices differ: Alternative options (Conduction, Convection, Condensation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 110, question: "What do you call theoretical body where absorptivity and emissivity are independent of wavelength?", options: ["White body", "Opaque body", "Black body", "Transparent body"], answer: 3, explanation: "• Why 'Transparent body' is Correct: Gray body / Transparent body.\n• Why Other Choices differ: Alternative options (White body, Opaque body, Black body) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 111, question: "Which of the following is the structure designed to prevent the spread of fire having a fire resistance rating of not less than four hours?", options: ["Fire escape", "Fire exit", "Fire shield", "Fire wall"], answer: 3, explanation: "• Why 'Fire wall' is Correct: Fire wall.\n• Why Other Choices differ: Alternative options (Fire escape, Fire exit, Fire shield) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 112, question: "Which of the following heat exchange device used to provide heat transfer between the exhaust gases and air prior to combustor?", options: ["Regenerator", "Economizer", "Condenser", "Reheater"], answer: 0, explanation: "• Why 'Regenerator' is Correct: Regenerator / Air preheater.\n• Why Other Choices differ: Alternative options (Economizer, Condenser, Reheater) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 113, question: "Which of the following transfer of heat is involved in the changing of boiling water (at 100 °C) to vapor at the same temperature?", options: ["Conduction", "Convection", "Radiation", "Evaporation"], answer: 1, explanation: "• Why 'Convection' is Correct: Boiling convection.\n• Why Other Choices differ: Alternative options (Conduction, Radiation, Evaporation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 114, question: "Which of the following is the science of low temperatures?", options: ["Cryogenics", "Thermo-kinetics", "Thermodynamics", "Ergonomics"], answer: 0, explanation: "• Why 'Cryogenics' is Correct: Cryogenics.\n• Why Other Choices differ: Alternative options (Thermo-kinetics, Thermodynamics, Ergonomics) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 115, question: "Which of the following thermal state of the body considered as reference to communicate heat to other bodies?", options: ["Temperature", "Pressure", "Internal energy", "Entropy"], answer: 0, explanation: "• Why 'Temperature' is Correct: Temperature.\n• Why Other Choices differ: Alternative options (Pressure, Internal energy, Entropy) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 116, question: "The true mean temperature difference is also known as:", options: ["The average mean temperature difference", "The logarithmic mean temperature difference", "The trigonometric mean temperature difference", "The exponential temperature difference"], answer: 1, explanation: "• Why 'The logarithmic mean temperature difference' is Correct: Logarithmic Mean Temperature Difference (Logarithmic Mean Temperature Difference (Logarithmic Mean Temperature Difference (LMTD))).\n• Why Other Choices differ: Alternative options (The average mean temperature difference, The trigonometric mean temperature difference, The exponential temperature difference) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 117, question: "Which of the following can be a geometric view factor of a gray body?", options: ["Greater than one", "Less than one", "Equal to one", "Greater than zero but less than one"], answer: 3, explanation: "• Why Gas is Correct: Gases (such as air or steam) maintain a constant dynamic viscosity regardless of the applied shear rate, perfectly obeying Newton's law of viscosity (τ = μ du/dy).\n• Why Other Choices are Incorrect: Motor oils (multigrade with polymer additives) and Paints are non-Newtonian shear-thinning (pseudoplastic/thixotropic) fluids whose viscosity changes with shear rate. Clay slurries are Bingham plastics that require a minimum yield stress before they begin to flow." },
      { id: 118, question: "The heat transfer by conduction occurs in which of the following?", options: ["Only in liquids", "Only in solids", "Only in liquids and gases", "In solids, liquids and gases"], answer: 3, explanation: "• Why 'In solids, liquids and gases' is Correct: Conduction occurs in solids, liquids, and gases.\n• Why Other Choices differ: Alternative options (Only in liquids, Only in solids, Only in liquids and gases) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 119, question: "Which of the following reasons why one gram of steam at 100 °C causes more serious burn than one gram of water at 100 °C?", options: ["Steam is less dense than boiling water", "The steam has higher specific heat", "Steam contains more internal energy", "Steam is everywhere"], answer: 2, explanation: "• Why 'Steam contains more internal energy' is Correct: Steam releases additional latent heat of vaporization (2260 kJ/kg).\n• Why Other Choices differ: Alternative options (Steam is less dense than boiling water, The steam has higher specific heat, Steam is everywhere) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 120, question: "What usually happens when vapor condenses into liquid?", options: ["It absorbs heat", "It rejects heat", "Its temperature increases", "Its temperature decreases"], answer: 1, explanation: "• Why 'It rejects heat' is Correct: Condensation rejects latent heat.\n• Why Other Choices differ: Alternative options (It absorbs heat, Its temperature increases, Its temperature decreases) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 121, question: "Which of the following has the highest thermal conductivity?", options: ["Mercury", "Gasoline", "Water", "Alcohol"], answer: 0, explanation: "• Why 'Mercury' is Correct: Mercury (liquid metal k ≈ 8.5 W/mK) vs water (0.6 W/mK).\n• Why Other Choices differ: Alternative options (Gasoline, Water, Alcohol) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 122, question: "Which of the following is the requirement of the temperature of a body for it to emit radiation?", options: ["Above zero Celsius", "Above zero Kelvin", "Above of the temperature of surroundings", "High enough for it to glow"], answer: 1, explanation: "• Why 'Above zero Kelvin' is Correct: Above absolute zero (0 K).\n• Why Other Choices differ: Alternative options (Above zero Celsius, Above of the temperature of surroundings, High enough for it to glow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 123, question: "Which of the following is the color of iron when it is heated to a highest temperature?", options: ["White", "Red", "Orange", "Yellow"], answer: 0, explanation: "• Why 'White' is Correct: White heat corresponds to highest incandescent temperature.\n• Why Other Choices differ: Alternative options (Red, Orange, Yellow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 124, question: "Which of the following is the reason why metals are good conductors of heat?", options: ["Metals contain free electrons", "Metals have atoms the frequently collide another", "Metals have reflecting surfaces", "Atoms in metals are very far"], answer: 0, explanation: "• Why 'Metals contain free electrons' is Correct: Free electrons.\n• Why Other Choices differ: Alternative options (Metals have atoms the frequently collide another, Metals have reflecting surfaces, Atoms in metals are very far) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 125, question: "The rate at which heat flows through a slab of some material does not depend on which of the following?", options: ["The thickness of the slab", "The area of the slab", "The temperature difference between two faces", "The specific heat of the material"], answer: 3, explanation: "• Why 'The specific heat of the material' is Correct: Steady conduction q = k A ΔT / L does not depend on specific heat capacity.\n• Why Other Choices differ: Alternative options (The thickness of the slab, The area of the slab, The temperature difference between two faces) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 126, question: "Which of the following is the primary function of a thermal radiator?", options: ["To transferring the heat by using moving fluids", "To transfer heat from hot to cold body by using fan", "To transfer heat by allowing molecules to vibrate", "To transfer heat with or without a medium"], answer: 3, explanation: "• Why 'To transfer heat with or without a medium' is Correct: Radiates heat through electromagnetic waves with or without medium.\n• Why Other Choices differ: Alternative options (To transferring the heat by using moving fluids, To transfer heat from hot to cold body by using fan, To transfer heat by allowing molecules to vibrate) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 127, question: "What is the reason why Styrofoam is a good insulating material?", options: ["Because it contains many tiny pockets of air", "Styrofoam is a white object", "The structure is unstable", "Structure is very dense"], answer: 0, explanation: "• Why 'Because it contains many tiny pockets of air' is Correct: Trapped air pockets have very low thermal conductivity.\n• Why Other Choices differ: Alternative options (Styrofoam is a white object, The structure is unstable, Structure is very dense) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 128, question: "What usually happens to the surrounding when water vapor condenses?", options: ["It warms the surrounding", "The surrounding temperature decreases", "It neither warm nor cold", "The surroundings will be dehumidified"], answer: 0, explanation: "• Why 'It warms the surrounding' is Correct: Condensation releases latent heat, warming surroundings.\n• Why Other Choices differ: Alternative options (The surrounding temperature decreases, It neither warm nor cold, The surroundings will be dehumidified) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 129, question: "The rate of radiation does not depend on which of the following?", options: ["Temperature of the radiating body", "The emissivity of the radiation surface", "The area of the radiating body", "The thickness of the radiating body"], answer: 3, explanation: "• Why 'The thickness of the radiating body' is Correct: Radiation depends on surface area, temperature, emissivity—not thickness.\n• Why Other Choices differ: Alternative options (Temperature of the radiating body, The emissivity of the radiation surface, The area of the radiating body) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 130, question: "Which of the following is not a good conductor of heat?", options: ["Metals", "Rocks", "Glass", "Asbestos"], answer: 3, explanation: "• Why 'Asbestos' is Correct: Asbestos is a thermal insulator.\n• Why Other Choices differ: Alternative options (Metals, Rocks, Glass) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 131, question: "Which of the following is not a unit of the rate of heat transfer?", options: ["Watt", "Btu per hour", "Cal/s", "Btu/Hp-hr"], answer: 3, explanation: "• Why 'Btu/Hp-hr' is Correct: Btu/Hp-hr is heat rate per unit power, not a simple heat transfer rate.\n• Why Other Choices differ: Alternative options (Watt, Btu per hour, Cal/s) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 132, question: "The thermal conductivity does not depend on which of the following?", options: ["Chemical composition", "Physical state or texture", "Temperature and pressure", "Gravitational pull"], answer: 3, explanation: "• Why 'Gravitational pull' is Correct: Independent of gravity.\n• Why Other Choices differ: Alternative options (Chemical composition, Physical state or texture, Temperature and pressure) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 133, question: "In Maxwell's theory for thermal conductivity of gases and vapors, value of 'a' for triatomic gases is:", options: ["1.7", "2.4", "1.3", "2.4"], answer: 0, explanation: "• Why '1.7' is Correct: Maxwell constant a = 1.7 for triatomic gases.\n• Why Other Choices differ: Alternative options (2.4, 1.3, 2.4) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 134, question: "Which of the following conductivities where Sutherland equation is used?", options: ["Thermal conductivities of solids", "Thermal conductivities of gases", "Thermal conductivities of metal", "Thermal conductivities of liquids"], answer: 1, explanation: "• Why 'Thermal conductivities of gases' is Correct: Sutherland formula calculates temperature dependence of gas viscosity and thermal conductivity.\n• Why Other Choices differ: Alternative options (Thermal conductivities of solids, Thermal conductivities of metal, Thermal conductivities of liquids) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 135, question: "For pure metals, what happens to thermal conductivity if temperature is extremely high?", options: ["Approaches infinity", "Decreases except for ferrous metals", "Almost constant except for ferromagnetic materials", "Increases except for steel"], answer: 2, explanation: "• Why 'Almost constant except for ferromagnetic materials' is Correct: Remains relatively constant at elevated temperatures.\n• Why Other Choices differ: Alternative options (Approaches infinity, Decreases except for ferrous metals, Increases except for steel) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 136, question: "Which of the following liquids that has the highest thermal conductivity?", options: ["Gasoline", "Glycerin", "Water", "Alcohol"], answer: 2, explanation: "• Why 'Water' is Correct: Water (k ≈ 0.6 W/mK) has highest conductivity among non-metallic liquids.\n• Why Other Choices differ: Alternative options (Gasoline, Glycerin, Alcohol) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 137, question: "Which of the following is not a heat exchanger?", options: ["Condenser", "Boilers", "Evaporators", "Water hammer"], answer: 3, explanation: "• Why 'Water hammer' is Correct: Water hammer is a pressure surge phenomenon.\n• Why Other Choices differ: Alternative options (Condenser, Boilers, Evaporators) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 138, question: "Which of the following heat exchangers where fluid flow in the same direction and both are of changing temperatures?", options: ["Parallel flow", "Cross flow", "Counter flow", "Mixed flow"], answer: 0, explanation: "• Why 'Parallel flow' is Correct: Parallel flow heat exchanger.\n• Why Other Choices differ: Alternative options (Cross flow, Counter flow, Mixed flow) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 139, question: "What happens to the thermal conductivity of diatomic gases if the temperature is increase?", options: ["The thermal conductivity will also increase", "The thermal conductivity decreases", "The thermal conductivity remains constant", "The thermal conductivity partially increases"], answer: 0, explanation: "• Why 'The thermal conductivity will also increase' is Correct: Gas thermal conductivity increases with temperature (k ∝ √T).\n• Why Other Choices differ: Alternative options (The thermal conductivity decreases, The thermal conductivity remains constant, The thermal conductivity partially increases) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 140, question: "What device is used to measure the amount of infrared radiation in each portion of a person's skin that is emitted?", options: ["Thermograph", "Thermometer", "Pyrometer", "Potentiometer"], answer: 0, explanation: "• Why 'Thermograph' is Correct: Thermograph / Thermal imaging camera.\n• Why Other Choices differ: Alternative options (Thermometer, Pyrometer, Potentiometer) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 141, question: "The heat transfer by convection occurs in which of the following?", options: ["Only in gases", "Only in liquids", "Only in gases and liquids", "Only in gases and solids"], answer: 2, explanation: "• Why 'Only in gases and liquids' is Correct: Convection requires a fluid medium (gases and liquids).\n• Why Other Choices differ: Alternative options (Only in gases, Only in liquids, Only in gases and solids) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 142, question: "In convection heat transfer, what mechanism heat transfer where the fluid moves due to the decrease in its density caused by increase in temperature?", options: ["Forced convection", "Natural convection", "Density convection", "Radial convection"], answer: 1, explanation: "• Why 'Natural convection' is Correct: Natural / Free convection.\n• Why Other Choices differ: Alternative options (Forced convection, Density convection, Radial convection) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SUBJECT_DATA;
}
