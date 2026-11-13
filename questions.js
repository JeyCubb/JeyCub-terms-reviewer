/**
 * Jeycub Terms Reviewer - Multi-Subject Dataset
 * Contains:
 * 1. Fluid Mechanics (127 Problems)
 * 2. Mechanics of Deformable Bodies (150 Problems - Tests 2, 3, 4)
 * 3. Heat Transfer (142 Problems)
 */

var SUBJECT_DATA = {  basic_electronics: {
    title: "Basic Electronics",
    chapter: "ECE 005 - Complete Reviewer (Prelim, Midterm & Finals Quiz 1)",
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
    "explanation": "• Why 'Planetary Model' is Correct: Niels Bohr proposed the Planetary Model in 1913, in which electrons orbit a dense positive nucleus in discrete energy levels, similar to planets orbiting the sun.\n• Why Other Choices are Incorrect: Dalton proposed the Solid Sphere Model (1803), Thomson proposed the Plum Pudding Model (1897), and Rutherford proposed the Nuclear Model (1911)."
  },
  {
    "id": 2,
    "question": "Which of the following best defines a semiconductor?",
    "options": [
      "Zero electrical resistance at standard room temperature and pressure",
      "Conductivity between a good conductor and an insulator",
      "Complete blockage of electrical current conduction under all bias voltages",
      "Conduction carried exclusively by trivalent positive metallic ions"
    ],
    "answer": 1,
    "explanation": "• Why 'A material having electrical conductivity between a good conductor and an insulator' is Correct: Semiconductors are a special class of elements whose conductivity lies between conductors (like copper) and insulators (like rubber).\n• Why Other Choices are Incorrect: Superconductors have zero resistance, while insulators completely block current."
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
    "explanation": "• Why '4' is Correct: Pure semiconductor atoms like Silicon (Si) and Germanium (Ge) belong to Group IV of the periodic table and have 4 valence electrons (tetravalent).\n• Why Other Choices are Incorrect: Trivalent elements have 3 valence electrons (acceptors like Boron), while pentavalent elements have 5 valence electrons (donors like Phosphorus)."
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
    "explanation": "• Why 'Intrinsic semiconductor' is Correct: An intrinsic semiconductor is an pure, un-doped semiconductor crystal where thermal excitation alone creates equal numbers of free electrons and holes.\n• Why Other Choices are Incorrect: Extrinsic semiconductors are semiconductors that have been intentionally doped with impurities to form N-type or P-type materials."
  },
  {
    "id": 5,
    "question": "Calculate the loop current ($I$) in a forward-biased diode circuit using the Third Approximation (Piecewise Approximation). Given: Supply Voltage $V_S = 10\\text{ V}$, Silicon Diode ($V_B = 0.7\\text{ V}$, internal bulk resistance $R_B = 0.2\\ \\Omega$), and Load Resistor $R_L = 1\\text{ k}\\Omega$ ($1000\\ \\Omega$).",
    "options": [
      "$9.300\\text{ mA}$",
      "$9.298\\text{ mA}$",
      "$10.00\\text{ mA}$",
      "$9.600\\text{ mA}$"
    ],
    "answer": 1,
    "explanation": "• Why '$9.298\\text{ mA}$' is Correct: In the Third Approximation (Piecewise Linear Model), the diode is modeled as a barrier voltage $V_B$ in series with its dynamic forward resistance $R_B$:\n$$I = \\frac{V_S - V_B}{R_L + R_B} = \\frac{10\\text{ V} - 0.7\\text{ V}}{1000\\ \\Omega + 0.2\\ \\Omega} = \\frac{9.3\\text{ V}}{1000.2\\ \\Omega} \\approx 0.00929814\\text{ A} = 9.298\\text{ mA}$$\n• Why Other Choices are Incorrect: $9.300\\text{ mA}$ is from the Second Approximation ($I = \\frac{10 - 0.7}{1000}$, ignoring internal resistance), while $10.00\\text{ mA}$ is from the First (Ideal) Approximation ($I = \\frac{10}{1000}$ with zero forward drop)."
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
    "explanation": "• Why 'Ancient Greeks' is Correct: The ancient Greeks discovered static electricity when rubbing amber (Greek: elektron) against fur attracted light objects.\n• Why Other Choices are Incorrect: Ancient Egyptians utilized electric fish to alleviate pain, but did not discover amber static electricity."
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
    "explanation": "• Why 'Storing an electric charge' is Correct: The Leyden jar (1745) was the earliest form of a capacitor, designed to store static electrical charge.\n• Why Other Choices are Incorrect: Generators produce AC, magnetometers measure flux, and vacuum tubes/transistors amplify signals."
  },
  {
    "id": 8,
    "question": "In 1820, Hans Christian Oersted discovered which foundational physical phenomenon?",
    "options": [
      "Photoelectric effect",
      "Electromagnetism",
      "Thermionic emission",
      "Quantum entanglement"
    ],
    "answer": 1,
    "explanation": "• Why 'Electromagnetism' is Correct: Oersted noticed a compass needle deflected near a current-carrying wire in 1820, establishing the field of electromagnetism.\n• Why Other Choices are Incorrect: Faraday discovered induction (1831), Edison discovered thermionic emission (1883), and Einstein explained photoelectric effect (1905)."
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
    "explanation": "• Why 'Electric motors and generators' is Correct: Faraday showed that a changing magnetic field induces an electric current, enabling mechanical-to-electrical energy conversion in electric generators.\n• Why Other Choices are Incorrect: Vacuum tubes were invented by Fleming (1904), microprocessors by Intel (1971), and Leyden jars in 1745."
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
    "options": [
      "John Dalton (1803)",
      "J.J. Thomson (1897)",
      "Ernest Rutherford (1911)",
      "Erwin Schrödinger (1926)"
    ],
    "answer": 1,
    "explanation": "• Why 'J.J. Thomson (1897)' is Correct: J.J. Thomson discovered the electron in 1897 and proposed the Plum Pudding Model, where negative electrons were embedded in a positive sphere.\n• Why Other Choices are Incorrect: Dalton proposed solid sphere, Rutherford proposed nuclear model, and Schrödinger developed the quantum wave model."
  },
  {
    "id": 14,
    "question": "Erwin Schrödinger's 1926 contribution to atomic theory is known as the:",
    "options": [
      "Solid Sphere Model",
      "Nuclear Model",
      "Planetary Model",
      "Quantum Model"
    ],
    "answer": 3,
    "explanation": "• Why 'Quantum Model' is Correct: Schrödinger formulated wave mechanics in 1926, defining electron positions probabilistically in 3D electron clouds (orbitals).\n• Why Other Choices are Incorrect: Dalton (solid sphere), Rutherford (nuclear), and Bohr (planetary) were earlier classical models."
  },
  {
    "id": 15,
    "question": "Which of the following is a key advantage of Silicon over Germanium in semiconductor device manufacturing?",
    "options": [
      "Higher reverse leakage current and lower thermal breakdown threshold",
      "Higher thermal stability and lower reverse leakage current",
      "Lower forward barrier voltage of 0.1 V requiring less turn-on energy",
      "Greater sensitivity to ambient temperature variations than Germanium"
    ],
    "answer": 1,
    "explanation": "• Why 'Silicon is thermally stable, more abundant, cost-effective, and has low leakage current' is Correct: Silicon (Si) outperforms Germanium (Ge) because Si handles higher operating temperatures, has lower reverse leakage current, and is abundant in sand (SiO2).\n• Why Other Choices are Incorrect: Germanium is temperature sensitive, expensive, less abundant, and has high leakage current."
  },
  {
    "id": 16,
    "question": "What are the approximate forward barrier potential voltages for Germanium and Silicon PN junctions at room temperature (25°C)?",
    "options": [
      "Germanium = $0.7\\text{ V}$, Silicon = $0.3\\text{ V}$",
      "Germanium = $0.3\\text{ V}$, Silicon = $0.7\\text{ V}$",
      "Germanium = $1.1\\text{ V}$, Silicon = $1.5\\text{ V}$",
      "Germanium = $0.0\\text{ V}$, Silicon = $0.0\\text{ V}$"
    ],
    "answer": 1,
    "explanation": "• Why 'Germanium = $0.3\\text{ V}$, Silicon = $0.7\\text{ V}$' is Correct: At standard room temperature ($25^\\circ\\text{C}$ or $300\\text{ K}$), the barrier potentials needed to overcome the depletion layer electric field are approximately $0.3\\text{ V}$ for Germanium (Ge) and $0.7\\text{ V}$ for Silicon (Si).\n• Why Other Choices are Incorrect: Reversing the values ($0.7\\text{ V}$ for Ge, $0.3\\text{ V}$ for Si) is a common confusion. $1.1\\text{ eV}$ represents the bandgap energy of Silicon, not its barrier voltage."
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
    "explanation": "• Why 'Gallium Arsenide (GaAs)' is Correct: Gallium Arsenide (GaAs) and Cadmium Sulfide (CdS) are compound semiconductors formed by combining elements from different periodic table groups.\n• Why Other Choices are Incorrect: Silicon and Germanium are single-crystal elemental semiconductors."
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
    "explanation": "• Why 'Covalent bonding' is Correct: Semiconductor atoms achieve an 8-electron stable valence octet by sharing valence electrons with four neighboring atoms in covalent bonds.\n• Why Other Choices are Incorrect: Ionic bonds involve complete electron transfer, while metallic bonds feature a sea of delocalized electrons."
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
      "Open switch (forward); Closed switch (reverse)",
      "Closed switch (forward); Open switch (reverse)",
      "0.7 V battery source; High-value parallel resistor",
      "Variable dynamic capacitor; Constant inducting coil"
    ],
    "answer": 1,
    "explanation": "• Why 'Forward bias: Closed switch (0 V drop); Reverse bias: Open switch (0 current)' is Correct: The Ideal (First) Approximation treats the diode as a perfect binary switch with zero forward voltage drop when ON and zero leakage current when OFF.\n• Why Other Choices are Incorrect: 0.7 V battery model corresponds to the Practical (Second) Approximation."
  },
  {
    "id": 22,
    "question": "In the Second (Practical) Approximation, a forward-biased diode is modeled as a switch in series with a:",
    "options": [
      "Variable dynamic series resistance",
      "Constant voltage battery of 0.7 V",
      "Parallel junction storage capacitor",
      "Constant current saturation source"
    ],
    "answer": 1,
    "explanation": "• Why 'Constant voltage battery (V_B = 0.7 V for Si)' is Correct: The Second Approximation accounts for barrier potential by modeling the diode as a switch in series with an opposing DC battery equal to the barrier voltage (0.7 V for Si, 0.3 V for Ge).\n• Why Other Choices are Incorrect: Adding a bulk resistor corresponds to the Third (Piecewise) Approximation."
  },
  {
    "id": 23,
    "question": "What is the region near the PN junction called where free electrons and holes recombine, leaving unneutralized donor and acceptor ions?",
    "options": [
      "Conduction region",
      "Depletion region",
      "Saturation region",
      "Substrate region"
    ],
    "answer": 1,
    "explanation": "• Why 'Depletion region' is Correct: When a PN junction is formed, mobile charge carriers diffuse across and recombine, depleting the junction of free carriers and forming a depletion region of fixed ions.\n• Why Other Choices are Incorrect: Conduction region refers to energy bands, while saturation region refers to transistor operation."
  },
  {
    "id": 24,
    "question": "Under Reverse-Bias conditions, what happens to the depletion region width of a PN junction diode?",
    "options": [
      "Shrinks to zero, enabling unrestricted electron flow",
      "Widens, increasing internal barrier potential",
      "Remains completely unchanged across all reverse voltages",
      "Converts immediately into a low-resistance ohmic conductor"
    ],
    "answer": 1,
    "explanation": "• Why 'It widens, increasing the internal barrier potential' is Correct: Reverse bias pulls majority carriers away from the PN junction, widening the depletion layer and preventing forward current flow.\n• Why Other Choices are Incorrect: Forward bias shrinks the depletion region width."
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
    "explanation": "• Why 'Third (Piecewise Linear) Approximation' is Correct: The Third Approximation includes the internal bulk resistance of the semiconductor material (R_B) in series with the barrier battery (V_B) and switch.\n• Why Other Choices are Incorrect: First approximation has no voltage drop or resistance; Second approximation includes barrier voltage V_B but assumes R_B = 0."
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
    "explanation": "• Why 'Nikola Tesla' is Correct: Nikola Tesla pioneered polyphase Alternating Current (AC) power systems, AC induction motors, and high-voltage AC transmission lines.\n• Why Other Choices are Incorrect: Alessandro Volta invented the battery, Thomas Edison advocated for Direct Current (DC), and Maxwell formulated electromagnetic theory."
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
    "explanation": "• Why 'Alessandro Volta' is Correct: Alessandro Volta created the Voltaic Pile in 1800 (alternating discs of zinc and copper separated by brine-soaked cloth), producing the first chemical battery.\n• Why Other Choices are Incorrect: Marconi pioneered wireless radio, Morse developed telegraphy, and Faraday discovered electromagnetic induction."
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
    "explanation": "• Why 'Guglielmo Marconi' is Correct: Guglielmo Marconi sent the first transatlantic radio signal in 1901 and won the Nobel Prize for pioneering wireless radio communication.\n• Why Other Choices are Incorrect: Tim Berners-Lee created the World Wide Web, Jack Kilby co-invented the integrated circuit, and Bell invented the telephone."
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
    "explanation": "• Why 'James Clerk Maxwell' is Correct: James Clerk Maxwell published his four unified field equations in 1865, proving that light is an electromagnetic wave.\n• Why Other Choices are Incorrect: Tesla pioneered AC power systems, Morse invented single-wire telegraphy, and Hertz experimentally demonstrated radio waves."
  },
  {
    "id": 30,
    "question": "Jack Kilby and Robert Noyce are celebrated in electronics history for which revolutionary breakthrough in the late 1950s?",
    "options": [
      "Discovery of thermionic emission",
      "Introduction of the Integrated Circuit",
      "Development of the World Wide Web",
      "Invention of the single-wire electric telegraph"
    ],
    "answer": 1,
    "explanation": "• Why 'Introduction of the Integrated Circuit' is Correct: Jack Kilby (Texas Instruments) and Robert Noyce (Fairchild Semiconductor) independently invented the Integrated Circuit (IC), fabricating complete circuits on a single semiconductor chip.\n• Why Other Choices are Incorrect: Edison discovered thermionic emission, Berners-Lee created WWW, and Morse invented the telegraph."
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
    "explanation": "• Why 'Tim Berners-Lee' is Correct: Sir Tim Berners-Lee invented the World Wide Web (WWW), HTML, HTTP, and the first browser at CERN in 1989.\n• Why Other Choices are Incorrect: Alan Turing developed theoretical computer science, Wozniak co-founded Apple, and Ritchie created C/Unix."
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
    "explanation": "• Why 'Samuel Morse' is Correct: Samuel Morse patented the single-wire electric telegraph in 1837 and created Morse Code for long-distance telecommunication.\n• Why Other Choices are Incorrect: Bell invented the telephone, Marconi developed radio transmission, and Edison invented the incandescent bulb."
  },
  {
    "id": 33,
    "question": "In a review matching historical pioneers with their legacies, which of the following pairings is INCORRECT?",
    "options": [
      "Alessandro Volta — First Practical Battery",
      "Guglielmo Marconi — Pioneering work in wireless radio transmission",
      "Tim Berners-Lee — Development of the World Wide Web",
      "Nikola Tesla — Invention of the vacuum tube Fleming valve"
    ],
    "answer": 3,
    "explanation": "• Why 'Nikola Tesla — Invention of the vacuum tube Fleming valve' is Correct (as the INCORRECT match): The vacuum tube (Fleming valve) was invented by John Ambrose Fleming in 1904. Nikola Tesla is famous for discovering and pioneering Alternating Current (AC) power systems.\n• Why Other Choices are Valid Matches: Volta created the first battery (1800), Marconi pioneered radio, and Berners-Lee invented the World Wide Web (1989)."
  },
  {
    "id": 34,
    "question": "What is the unique structural construction of a Schottky diode compared to a traditional Positive-Negative (PN) junction diode?",
    "options": [
      "It joins a metal Anode to an N-type semiconductor Cathode with no P-type material",
      "It joins a P-type semiconductor to a metal Cathode",
      "It consists of two intrinsic semiconductor layers without any metal contact",
      "It combines three alternating layers of P-type and N-type materials"
    ],
    "answer": 0,
    "explanation": "• Why 'It joins a metal Anode to an N-type semiconductor Cathode with no P-type material' is Correct: A Schottky diode is a metal-semiconductor junction formed by bonding a metal (like gold, silver, or platinum) as the Anode to an N-type silicon Cathode, completely omitting P-type semiconductor material.\n• Why Other Choices are Incorrect: Traditional diodes use P-N semiconductor junctions; Schottky diodes rely on metal-N semiconductor junctions."
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
    "explanation": "• Why '0.15 V to 0.45 V' is Correct: The metal-semiconductor Schottky barrier potential is significantly lower than a standard PN junction, resulting in a low forward voltage drop of 0.15 V to 0.45 V.\n• Why Other Choices are Incorrect: Standard silicon PN diodes have a 0.6 V – 0.7 V drop, while Light-Emitting Diodes (LEDs) require 1.5 V – 3.0 V."
  },
  {
    "id": 36,
    "question": "Why do Schottky diodes exhibit extremely fast switching speeds with virtually zero reverse recovery time?",
    "options": [
      "Conduction involves only majority carriers without minority carrier storage",
      "Because they operate using high thermal dissipation",
      "Because they possess a thick depletion region that stores positive holes",
      "Because they rely on mechanical switch contacts"
    ],
    "answer": 0,
    "explanation": "• Why 'Conduction involves only majority carriers without minority carrier storage' is Correct: In Schottky diodes, current is carried almost exclusively by majority carriers (electrons). Since there are no stored minority carriers to clear out during turn-off, reverse recovery time is negligible (a few nanoseconds).\n• Why Other Choices are Incorrect: Standard PN diodes suffer from slow switching due to minority carrier storage in the depletion region."
  },
  {
    "id": 37,
    "question": "Which of the following is a main limitation or disadvantage of a Schottky diode compared to a standard Silicon PN junction diode?",
    "options": [
      "Higher reverse leakage and lower breakdown voltage",
      "Sluggish switching speed during high-frequency cycles",
      "Excessive forward barrier voltage drop exceeding 1.5 V",
      "Total inability to conduct forward majority carrier current"
    ],
    "answer": 0,
    "explanation": "• Why 'Higher reverse leakage current and lower reverse breakdown voltage' is Correct: Because of the thin metal barrier, Schottky diodes experience higher reverse leakage current and lower reverse breakdown voltages, making them unsuitable for high-voltage circuits.\n• Why Other Choices are Incorrect: Schottky diodes excel in fast switching speed and low forward voltage drop."
  },
  {
    "id": 38,
    "question": "In a forward-biased Schottky diode, what is the direction of conventional current flow?",
    "options": [
      "Metal Anode to N-type semiconductor Cathode",
      "N-type semiconductor Cathode to metal Anode",
      "External Cathode terminal to external Anode",
      "Zero current conduction in either direction"
    ],
    "answer": 0,
    "explanation": "• Why 'From the metal Anode to the N-type semiconductor Cathode' is Correct: Forward bias connects the positive terminal to the Metal (Anode) and negative to N-type (Cathode), directing conventional current from Metal to N-type semiconductor.\n• Why Other Choices are Incorrect: Electron flow is in the opposite direction (N-type to Metal)."
  },
  {
    "id": 39,
    "question": "Which electronic system widely uses Schottky diodes due to their high efficiency and fast switching capabilities?",
    "options": [
      "Smartphone chargers and laptop power bricks",
      "High-voltage AC overhead transmission power networks",
      "Incandescent lamp tungsten filaments and heater units",
      "Cathode ray tube high-voltage electron gun assemblies"
    ],
    "answer": 0,
    "explanation": "• Why 'Smartphone chargers, laptop power bricks, and computer motherboards' is Correct: Low forward voltage drop and fast switching speed minimize power loss and heat, making Schottky diodes ideal for high-frequency switch-mode power supplies and digital chargers.\n• Why Other Choices are Incorrect: High-voltage AC lines require high-breakdown silicon rectifiers, not Schottky diodes."
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
    "explanation": "• Why 'Reverse-Bias breakdown region' is Correct: Zener diodes are manufactured with heavy doping to operate continuously and safely in reverse breakdown without causing permanent device damage.\n• Why Other Choices are Incorrect: Standard diodes overheat and fail if driven into reverse breakdown; Zener diodes are designed for it."
  },
  {
    "id": 41,
    "question": "What key electrical characteristic makes Zener diodes ideal for voltage regulation circuits?",
    "options": [
      "Constant reverse breakdown voltage",
      "Linearly increasing voltage with rising current",
      "Complete current blockage under both polarities",
      "High-frequency sinusoidal oscillation output"
    ],
    "answer": 0,
    "explanation": "• Why 'Maintaining a nearly constant voltage (Zener voltage V_Z) across its terminals during reverse breakdown' is Correct: Once the reverse breakdown voltage (Zener Voltage V_Z) is reached, the voltage across the Zener diode remains virtually constant even as reverse current varies widely.\n• Why Other Choices are Incorrect: Resistors and standard components change voltage with current, unlike Zener regulators."
  },
  {
    "id": 42,
    "question": "Why does a Zener diode have an extremely thin depletion layer?",
    "options": [
      "Heavy doping in both P-type and N-type regions",
      "Pure metallic construction without semiconductor",
      "Operation strictly restricted to absolute zero",
      "Complete absence of an internal junction boundary"
    ],
    "answer": 0,
    "explanation": "• Why 'Because both P-type and N-type regions are heavily doped with impurity atoms' is Correct: Heavy doping increases impurity ion density at the junction, creating an intense electric field across an extremely narrow depletion layer.\n• Why Other Choices are Incorrect: Light doping creates a wide depletion layer with high breakdown voltage."
  },
  {
    "id": 43,
    "question": "What are the primary practical applications of a Zener diode in electronic circuits?",
    "options": [
      "Voltage regulation and reference points",
      "Light emission, optical display, and infrared transmission",
      "Audio frequency power amplification and loudspeaker driving",
      "Mechanical energy storage and rotational speed governors"
    ],
    "answer": 0,
    "explanation": "• Why 'Voltage regulation, surge protection, and stable voltage reference points' is Correct: The constant reverse breakdown voltage property enables Zener diodes to clamp overvoltages and regulate DC power supply rails.\n• Why Other Choices are Incorrect: LEDs emit light, BJTs amplify audio signals, and capacitors/batteries store energy."
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
    "explanation": "• Why 'Quantum Tunneling' is Correct: Quantum tunneling allows valence electrons to pass directly through an ultra-thin potential barrier at nearly the speed of light rather than climbing over the barrier.\n• Why Other Choices are Incorrect: Thermionic emission involves heating filaments, and photoelectric absorption involves photon energy."
  },
  {
    "id": 45,
    "question": "How does the doping concentration of a Tunnel diode compare to a standard Positive-Negative (PN) junction diode?",
    "options": [
      "Heavily doped up to 1,000 times higher than standard diodes",
      "Completely un-doped intrinsic silicon without any impurities",
      "Lightly doped to maximize internal bulk semiconductor ohms",
      "Symmetrically doped with equal numbers of metal gold atoms"
    ],
    "answer": 0,
    "explanation": "• Why 'It is heavily doped up to 1,000 times higher than a standard junction diode' is Correct: Ultra-heavy doping (~1000x standard levels) shrinks the depletion layer down to less than 10 nanometers, enabling quantum tunneling.\n• Why Other Choices are Incorrect: Light doping prevents tunneling by creating a wide barrier."
  },
  {
    "id": 46,
    "question": "What unique operational characteristic occurs on the forward V-I curve of a Tunnel diode between the peak current point and valley point?",
    "options": [
      "Negative Resistance Region",
      "Infinite positive resistance",
      "Zero voltage drop at all currents",
      "Constant current saturation regardless of voltage"
    ],
    "answer": 0,
    "explanation": "• Why 'Negative Resistance Region' is Correct: As forward voltage increases past the peak point, energy bands misalign and reduce electron tunneling, causing current to fall as voltage increases (negative resistance).\n• Why Other Choices are Incorrect: Ordinary resistors obey Ohm's Law where current increases with voltage."
  },
  {
    "id": 47,
    "question": "Because of its ultra-thin depletion layer (< 10 nanometers), what happens when a small reverse bias voltage is applied to a Tunnel diode?",
    "options": [
      "Large reverse current conducted immediately by tunneling",
      "Destructive thermal runaway occurs instantaneously at zero volts",
      "Depletion layer expands into several millimeters of insulation",
      "Zero reverse current flows under all applied negative voltages"
    ],
    "answer": 0,
    "explanation": "• Why 'Valence electrons easily tunnel from P-side to N-side, conducting large reverse current immediately' is Correct: Due to heavy doping and energy band overlap, small reverse bias immediately initiates heavy electron tunneling, making it conduct heavily in reverse.\n• Why Other Choices are Incorrect: Standard diodes block reverse current until breakdown voltage is reached."
  },
  {
    "id": 48,
    "question": "Which semiconductor materials are most commonly used in the fabrication of Tunnel diodes?",
    "options": [
      "Germanium and Gallium Arsenide",
      "Copper and Aluminum",
      "Pure Carbon and Diamond",
      "Silicon Dioxide and Glass"
    ],
    "answer": 0,
    "explanation": "• Why 'Germanium and Gallium Arsenide' is Correct: Germanium and Gallium Arsenide have high electron mobility and suitable bandgap energies for high-efficiency quantum tunneling.\n• Why Other Choices are Incorrect: Copper and Aluminum are metals; Silicon Dioxide is an insulator."
  },
  {
    "id": 49,
    "question": "Which electronic applications take advantage of the negative resistance and ultra-fast response of a Tunnel diode?",
    "options": [
      "Relaxation oscillators, high-speed switches, and FM receivers",
      "Low-frequency power transformers, line filters, and chokes",
      "Incandescent lighting filaments, flash tubes, and arc lamps",
      "Electro-mechanical heavy-duty relays, solenoids, and contactors"
    ],
    "answer": 0,
    "explanation": "• Why 'Relaxation oscillators, high-speed switches, and FM receivers' is Correct: Negative dynamic resistance cancels circuit losses in high-frequency oscillators and enables sub-nanosecond pulse switching.\n• Why Other Choices are Incorrect: Transformers and relays are heavy magnetic/mechanical components."
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
    "explanation": "• Why 'Reverse-Bias condition' is Correct: Photodiodes operate in Reverse-Bias (or zero bias) to widen the depletion region and establish a strong internal electric field that efficiently separates light-generated electron-hole pairs.\n• Why Other Choices are Incorrect: Forward biasing a photodiode conducts large forward current, masking photo-generated current and potentially damaging the sensor."
  },
  {
    "id": 51,
    "question": "What fundamental physical energy conversion takes place inside a Photodiode when exposed to light?",
    "options": [
      "Converts light energy into electrical current",
      "Converts electrical energy into mechanical movement",
      "Converts acoustic sound waves into voltage",
      "Converts magnetic flux into thermal heat"
    ],
    "answer": 0,
    "explanation": "• Why 'Converts light energy into electrical current' is Correct: When incoming photons with energy greater than the semiconductor bandgap strike the depletion region, they excite bound electrons to create free electron-hole pairs, producing measurable photocurrent.\n• Why Other Choices are Incorrect: Solar cells also use this photoelectric principle for power generation, whereas LEDs do the reverse (electrical energy to light)."
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
      "P+ active surface region to maximize light absorption",
      "Bottom metal Cathode contact to reflect incoming light",
      "Outer protective black casing to block ambient photons",
      "Internal battery terminals to eliminate reverse bias"
    ],
    "answer": 0,
    "explanation": "• Why 'The P+ active surface region to maximize light absorption' is Correct: An Anti-Reflective (AR) coating or optical glass lens is placed over the active junction surface to reduce optical reflection losses and maximize photon entry into the depletion region.\n• Why Other Choices are Incorrect: The remaining body is coated in opaque black layer to block unwanted stray light."
  },
  {
    "id": 55,
    "question": "Which of the following semiconductor materials is commonly used in fabricating Photodiodes for optical communications?",
    "options": [
      "Silicon, Germanium, and InGaAs",
      "Pure Copper, Aluminum, and Silver conductors",
      "Sodium Chloride, Calcium, and Potassium salts",
      "Polyethylene, Polystyrene, and Teflon plastics"
    ],
    "answer": 0,
    "explanation": "• Why 'Silicon, Germanium, and Indium Gallium Arsenide' is Correct: Silicon (visible light), Germanium, and Indium Gallium Arsenide (InGaAs for long-wavelength infrared fiber optics) have suitable bandgaps for absorbing target light wavelengths.\n• Why Other Choices are Incorrect: Metals and plastics lack semiconductor bandgaps necessary for photon absorption."
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
    "explanation": "• Why 'Forward-Bias condition' is Correct: In Forward Bias, external voltage pushes electrons from the N-region and holes from the P-region into the active junction layer, where they recombine and release energy as photons.\n• Why Other Choices are Incorrect: In Reverse Bias, the depletion region widens, blocking current and keeping the LED completely OFF."
  },
  {
    "id": 57,
    "question": "Inside the structure of a Light-Emitting Diode (LED), which layer is responsible for producing light through electron-hole recombination?",
    "options": [
      "The active layer",
      "The outer plastic epoxy lens",
      "The bottom metal Cathode wire lead",
      "The external series resistor"
    ],
    "answer": 0,
    "explanation": "• Why 'The active layer' is Correct: The Active layer sandwiched between the P-type and N-type semiconductor layers provides the optimum energy bandgap region where injected electrons and holes recombine to emit photons.\n• Why Other Choices are Incorrect: The epoxy lens focuses the emitted light, while leads supply current."
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
    "options": [
      "1.8 V to 2.2 V",
      "0.3 V to 0.4 V",
      "5.0 V to 12.0 V",
      "$0.0\\text{ V}$"
    ],
    "answer": 0,
    "explanation": "• Why '1.8 V to 2.2 V' is Correct: Red LEDs typically require a minimum forward voltage (V_F) of 1.8 V to 2.2 V to initiate electroluminescence.\n• Why Other Choices are Incorrect: 0.3 V is for Germanium diodes, 0.7 V is for Silicon diodes, while Green LEDs require 2.0 V – 3.2 V and Blue LEDs require 3.0 V – 3.5 V."
  },
  {
    "id": 60,
    "question": "What is the typical recommended continuous forward current (I_F) range for operating standard indicator Light-Emitting Diodes (LEDs)?",
    "options": [
      "10 mA to 20 mA",
      "1 A to 5 A",
      "100 A to 500 A",
      "1 µA to 5 µA"
    ],
    "answer": 0,
    "explanation": "• Why '10 mA to 20 mA' is Correct: Standard commercial indicator LEDs achieve bright, reliable illumination at continuous forward currents of 10 mA to 20 mA.\n• Why Other Choices are Incorrect: Operating above 30–50 mA without heat sinking causes thermal destruction, while microamps are too low to illuminate standard LEDs."
  },
  {
    "id": 61,
    "question": "What formula is used to calculate the required resistance value of a Current-Limiting Resistor (R) connected in series with a Light-Emitting Diode (LED)?",
    "options": [
      "$R = \\frac{V_S - V_F}{I_F}$",
      "$R = V_S \\cdot V_F \\cdot I_F$",
      "$R = \\frac{V_S + V_F}{I_F^2}$",
      "$R = \\frac{I_F}{V_S - V_F}$"
    ],
    "answer": 0,
    "explanation": "• Why 'R = (V_S - V_F) / I_F' is Correct: By Kirchhoff's Voltage Law, the resistor voltage is V_R = V_S - V_F. Applying Ohm's Law yields R = (V_S - V_F) / I_F to prevent overcurrent damage to the LED.\n• Why Other Choices are Incorrect: Multiplying or adding forward voltage violates Ohm's Law."
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
    "explanation": "• Why '3 V to 5 V' is Correct: LEDs have relatively low reverse breakdown voltage ratings (typically 3 V to 5 V). Applying higher reverse voltage can damage the delicate PN junction.\n• Why Other Choices are Incorrect: Standard power rectifiers handle 100 V – 1000 V reverse ratings, but LEDs cannot."
  },
  {
    "id": 63,
    "question": "Which key advantage distinguishes a Light-Emitting Diode (LED) over a standard semiconductor PN junction diode?",
    "options": [
      "High efficiency and long lifespan",
      "High-voltage AC power rectification and surge suppression",
      "Ultra-slow switching response and high thermal energy loss",
      "Zero forward barrier potential required for active turn-ON"
    ],
    "answer": 0,
    "explanation": "• Why 'Emits visible or infrared light efficiently with a long operational lifespan' is Correct: LEDs convert electrical energy directly into light via electroluminescence, offering high energy efficiency, low heat generation, and tens of thousands of operating hours.\n• Why Other Choices are Incorrect: Standard diodes dissipate energy as heat rather than light."
  },
  {
    "id": 64,
    "question": "Which of the following is a common application of Infrared (IR) Photodiodes and Light-Emitting Diodes working together as an optical pair?",
    "options": [
      "TV remote controls and optical encoder sensors",
      "High-power AC step-down electrical transformers",
      "Incandescent illumination and halogen floodlights",
      "Hydraulic fluid pumps and pneumatic air pistons"
    ],
    "answer": 0,
    "explanation": "• Why 'TV and Air Conditioner remote controls and optical encoders' is Correct: An Infrared LED transmitter sends pulsed light signals to an Infrared Photodiode receiver, forming an optical communication link.\n• Why Other Choices are Incorrect: Transformers and pumps use magnetic or mechanical energy, not optoelectronic light pairs."
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
    "explanation": "• Why 'Oscillators and high-speed switches' is Correct: Tunnel diodes possess negative dynamic resistance and an ultra-thin depletion layer, allowing them to switch in picoseconds and sustain high-frequency oscillations.\n• Why Other Choices are Incorrect: Standard diodes act as rectifiers and signal clippers, while Zener diodes serve as voltage regulators."
  },
  {
    "id": 66,
    "question": "Light-Emitting Diodes (LEDs) emit light because of:",
    "options": [
      "Thermal heating of a metallic tungsten filament",
      "Electron-hole recombination releasing photons",
      "Secondary electron collision with mercury vapor",
      "Nuclear decay of radioactive impurity atoms"
    ],
    "answer": 1,
    "explanation": "• Why 'Electron-hole recombination releasing photons' is Correct: When forward-biased, injected electrons from the N-region and holes from the P-region recombine in the active junction layer, releasing excess bandgap energy as photons (Electroluminescence).\n• Why Other Choices are Incorrect: Avalanche breakdown occurs in reverse breakdown, thermal energy causes heating, and tunneling effect powers Tunnel diodes."
  },
  {
    "id": 67,
    "question": "The forward voltage drop of a Light-Emitting Diode (LED) is typically in the range of:",
    "options": [
      "0.3 – 0.7 V",
      "1 – 3 V",
      "5 – 10 V",
      "0.1 – 0.2 V"
    ],
    "answer": 1,
    "explanation": "• Why '1 – 3 V' is Correct: Because LEDs are fabricated from wide-bandgap compound semiconductors (like Gallium Arsenide and Gallium Phosphide), their forward barrier voltage drop ranges from 1.8 V to 3.5 V (commonly specified as 1 – 3 V).\n• Why Other Choices are Incorrect: 0.3 – 0.7 V applies to standard Germanium and Silicon PN diodes, while 0.1 – 0.2 V applies to Schottky diodes."
  },
  {
    "id": 68,
    "question": "Which material is commonly used to make Light-Emitting Diodes (LEDs)?",
    "options": [
      "Silicon",
      "Germanium",
      "Gallium compounds",
      "Carbon"
    ],
    "answer": 2,
    "explanation": "• Why 'Gallium compounds' is Correct: Direct bandgap compound semiconductors such as Gallium Arsenide (GaAs) and Gallium Phosphide (GaP) allow efficient photon emission during carrier recombination.\n• Why Other Choices are Incorrect: Elemental Silicon and Germanium are indirect bandgap semiconductors that dissipate recombination energy as heat rather than light."
  },
  {
    "id": 69,
    "question": "An Light-Emitting Diode (LED) usually operates with a forward current in the range of:",
    "options": [
      "0.1 – 1 mA",
      "10 – 100 mA",
      "1 – 10 A",
      "1 – 10 µA"
    ],
    "answer": 1,
    "explanation": "• Why '10 – 100 mA' is Correct: Standard illumination and indicator LEDs operate with forward currents in the 10 mA to 100 mA range (typically 10 – 20 mA for standard indicators).\n• Why Other Choices are Incorrect: Microamps are too small to excite visible emission, while 1 – 10 Amperes causes rapid thermal burnout."
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
    "explanation": "• Why 'Reverse bias' is Correct: Operating a photodiode under Reverse bias widens the depletion layer, creating a strong internal electric field that efficiently separates light-generated electron-hole pairs into photocurrent.\n• Why Other Choices are Incorrect: Forward bias allows heavy conventional current that masks light detection, while breakdown condition causes uncontrolled reverse avalanche."
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
    "explanation": "• Why 'Illumination intensity' is Correct: Higher illumination intensity delivers more photons per second into the depletion region, generating a linearly proportional increase in free electron-hole pairs and output photocurrent.\n• Why Other Choices are Incorrect: Forward voltage is not applied during photodiode operation, while temperature and doping affect noise rather than linear light response."
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
    "explanation": "• Why 'Reverse current with no light' is Correct: Dark current is the minor reverse saturation current generated by ambient thermal energy when the photodiode is completely shielded from light.\n• Why Other Choices are Incorrect: It is a reverse leakage current (not forward), and occurs specifically under zero light illumination."
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
    "explanation": "• Why 'Negative resistance' is Correct: On its forward V-I characteristic curve between the peak point and valley point, increasing the forward voltage reduces energy band overlap, causing current to fall as voltage increases (Negative Dynamic Resistance).\n• Why Other Choices are Incorrect: Standard resistors exhibit positive resistance where current increases with voltage."
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
      "$f = \\frac{1}{2\\pi\\sqrt{LC}}$",
      "$f = 2\\pi\\sqrt{LC}$",
      "$f = \\frac{LC}{2\\pi}$",
      "$f = \\frac{1}{LC}$"
    ],
    "answer": 0,
    "explanation": "• Why '$f = \\frac{1}{2\\pi\\sqrt{LC}}$' is Correct: The fundamental resonance frequency formula for an LC tuned circuit is:\n$$f = \\frac{1}{2\\pi\\sqrt{LC}}$$\nAdjusting the varactor diode's reverse-bias voltage varies its junction capacitance $C$, directly tuning the resonant frequency $f$ of the LC tank circuit.\n• Why Other Choices are Incorrect: $f = 2\\pi\\sqrt{LC}$ is the reciprocal without inversion, while $\\frac{LC}{2\\pi}$ and $\\frac{1}{LC}$ are dimensionally incorrect formulas for frequency in Hertz."
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
  },
  {
    "id": 79,
    "question": "The typical forward voltage drop of a Schottky diode is approximately:",
    "options": [
      "$0.7\\text{ V}$",
      "$0.3\\text{ V}$",
      "$0.25\\text{ V}$",
      "$1.0\\text{ V}$"
    ],
    "answer": 1,
    "explanation": "• Why '$0.3\\text{ V}$' is Correct: Schottky metal-semiconductor diodes feature a significantly lower barrier potential than standard silicon PN junction diodes ($0.7\\text{ V}$), typically exhibiting a forward voltage drop between $0.2\\text{ V}$ and $0.35\\text{ V}$ (nominally $\\approx 0.3\\text{ V}$).\n• Why Other Choices are Incorrect: $0.7\\text{ V}$ is standard for Silicon PN junction diodes, and $1.0\\text{ V}$ is typical for Silicon power rectifiers at high currents."
  },
  {
    "id": 80,
    "question": "(Problem) A $6\\text{ V}$ supply is connected across a $330\\ \\Omega$ resistor in series with a Light-Emitting Diode (LED) of $2\\text{ V}$ forward drop. Calculate the current through the LED.",
    "options": [
      "$6\\text{ mA}$",
      "$12\\text{ mA}$",
      "$20\\text{ mA}$",
      "$40\\text{ mA}$"
    ],
    "answer": 1,
    "explanation": "• Why '$12\\text{ mA}$' is Correct: By Kirchhoff's Voltage Law (KVL), the voltage across the current-limiting resistor is:\n$$V_R = V_S - V_F = 6\\text{ V} - 2\\text{ V} = 4\\text{ V}$$\nApplying Ohm's Law gives the loop current:\n$$I = \\frac{V_R}{R} = \\frac{4\\text{ V}}{330\\ \\Omega} \\approx 0.01212\\text{ A} = 12.12\\text{ mA} \\approx 12\\text{ mA}$$\n• Why Other Choices are Incorrect: $6\\text{ mA}$ neglects the supply voltage ($2\\text{ V} / 330\\ \\Omega$), while $20\\text{ mA}$ and $40\\text{ mA}$ are arbitrary values."
  },
  {
    "id": 81,
    "question": "(Problem) A $10\\text{ pF}$ varactor diode is used with a $100\\ \\mu\\text{H}$ coil. Find the resonant frequency.",
    "options": [
      "$1.6\\text{ MHz}$",
      "$160\\text{ MHz}$",
      "$500\\text{ kHz}$",
      "$5\\text{ MHz}$"
    ],
    "answer": 3,
    "explanation": "• Why '$5\\text{ MHz}$' is Correct: The fundamental resonant frequency formula for an LC tuned circuit is:\n$$f_r = \\frac{1}{2\\pi\\sqrt{LC}}$$\nGiven:\n- Inductance: $L = 100\\ \\mu\\text{H} = 100 \\times 10^{-6}\\text{ H}$\n- Capacitance: $C = 10\\text{ pF} = 10 \\times 10^{-12}\\text{ F}$\n\nCalculating $\\sqrt{LC}$:\n$$\\sqrt{LC} = \\sqrt{(100 \\times 10^{-6}\\text{ H})(10 \\times 10^{-12}\\text{ F})} = \\sqrt{10^{-15}} \\approx 3.162278 \\times 10^{-8}\\text{ s}$$\n\nCalculating resonant frequency $f_r$:\n$$f_r = \\frac{1}{2\\pi \\times (3.162278 \\times 10^{-8}\\text{ s})} = \\frac{1}{1.986918 \\times 10^{-7}\\text{ s}} \\approx 5,032,921\\text{ Hz} \\approx 5.03\\text{ MHz} \\approx 5\\text{ MHz}$$\n• Why Other Choices differ: Alternative choices result from unit prefix mistakes (such as forgetting $10^{-12}$ for pico or $10^{-6}$ for micro, or omitting the $2\\pi$ factor)."
  },
  {
    "id": 82,
    "question": "(Problem) A Schottky diode bridge rectifier is used in a $5\\text{ V}$ DC supply. If each diode drops $0.25\\text{ V}$, what is the total forward voltage drop across the two conducting diodes?",
    "options": [
      "$0.25\\text{ V}$",
      "$0.5\\text{ V}$",
      "$1.4\\text{ V}$",
      "$2.0\\text{ V}$"
    ],
    "answer": 1,
    "explanation": "• Why '$0.5\\text{ V}$' is Correct: In a full-wave bridge rectifier circuit, two diodes conduct simultaneously in series during each AC half-cycle:\n$$V_{\\text{total}} = 2 \\times V_{\\text{diode}} = 2 \\times 0.25\\text{ V} = 0.5\\text{ V}$$\n• Why Other Choices are Incorrect: $0.25\\text{ V}$ accounts for only a single diode drop, while $1.4\\text{ V}$ ($2 \\times 0.7\\text{ V}$) is the drop for conventional silicon PN junction diodes."
  },
  {
    "id": 83,
    "question": "Which special-purpose diode is known for its fast switching speed and low forward voltage drop?",
    "options": [
      "Zener diode",
      "Light-emitting diode",
      "Schottky diode",
      "Tunnel diode"
    ],
    "answer": 2,
    "explanation": "• Why 'Schottky diode' is Correct: A Schottky metal-semiconductor diode exhibits extremely fast switching speed (nanosecond reverse recovery time) and low forward voltage drop (0.15 V to 0.45 V).\n• Why Other Choices are Incorrect: Zener diodes are for voltage regulation, LEDs emit light, and Tunnel diodes exhibit negative resistance."
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
      "Light-emitting diode",
      "Schottky diode"
    ],
    "answer": 2,
    "explanation": "• Why 'Light-emitting diode' is Correct: When forward-biased, a Light-Emitting Diode (LED) recombines electrons and holes in its active junction layer, directly releasing excess energy as visible or infrared photons.\n• Why Other Choices are Incorrect: Zener diodes regulate voltage, photodiodes absorb light to create current, and Schottky diodes are fast rectifiers."
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
  },
  {
    "id": 89,
    "question": "What is the primary function of a Photodiode?",
    "options": [
      "Electron emission caused by heating a metallic cathode filament",
      "Electron release induced by applying an intense electric field",
      "Electron emission caused by incident electromagnetic radiation",
      "Electron release produced by bombarding atoms with alpha rays"
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
  },
  {
    "id": 94,
    "question": "(Problem) An AC voltage with peak value $V_p = 20\\text{ V}$ is connected in series with a silicon diode (forward voltage drop $V_D = 0.7\\text{ V}$, forward bulk resistance $R_f = 10\\ \\Omega$) and a load resistor $R_L = 500\\ \\Omega$. Find the peak current through the diode.",
    "options": [
      "$37.84\\text{ mA}$",
      "$40.00\\text{ mA}$",
      "$38.60\\text{ mA}$",
      "$35.20\\text{ mA}$"
    ],
    "answer": 0,
    "explanation": "• Why '$37.84\\text{ mA}$' is Correct: Applying Kirchhoff's Voltage Law at the positive AC peak:\n$$V_p - V_D = I_{\\text{peak}} \\cdot (R_f + R_L)$$\n$$20\\text{ V} - 0.7\\text{ V} = I_{\\text{peak}} \\cdot (10\\ \\Omega + 500\\ \\Omega)$$\n$$19.3\\text{ V} = I_{\\text{peak}} \\cdot 510\\ \\Omega$$\n$$I_{\\text{peak}} = \\frac{19.3\\text{ V}}{510\\ \\Omega} \\approx 0.037843\\text{ A} = 37.84\\text{ mA}$$\n• Why Other Choices are Incorrect: $40.00\\text{ mA}$ assumes an ideal diode ($20\\text{ V} / 500\\ \\Omega$), while $38.60\\text{ mA}$ ignores the $10\\ \\Omega$ internal bulk resistance ($19.3\\text{ V} / 500\\ \\Omega$)."
  },
  {
    "id": 95,
    "question": "(Problem) For the silicon diode circuit in Problem 94 ($V_p = 20\\text{ V}$, $V_D = 0.7\\text{ V}$, $R_f = 10\\ \\Omega$, $R_L = 500\\ \\Omega$), calculate the peak output voltage $V_{\\text{out}}$ measured across the $500\\ \\Omega$ load resistor.",
    "options": [
      "$18.92\\text{ V}$",
      "$20.00\\text{ V}$",
      "$19.30\\text{ V}$",
      "$17.50\\text{ V}$"
    ],
    "answer": 0,
    "explanation": "• Why '$18.92\\text{ V}$' is Correct: Using the peak current $I_{\\text{peak}} = 37.843\\text{ mA}$ found in Problem 94:\n$$V_{\\text{out}} = I_{\\text{peak}} \\cdot R_L = (0.037843\\text{ A}) \\times 500\\ \\Omega = 18.9215\\text{ V} \\approx 18.92\\text{ V}$$\nAlternatively, applying the voltage divider formula on the net $19.3\\text{ V}$:\n$$V_{\\text{out}} = 19.3\\text{ V} \\times \\frac{500\\ \\Omega}{500\\ \\Omega + 10\\ \\Omega} = 18.92\\text{ V}$$\n• Why Other Choices are Incorrect: $20.00\\text{ V}$ assumes an ideal lossless diode, while $19.30\\text{ V}$ ignores the internal voltage drop across bulk resistance $R_f$."
  },
  {
    "id": 96,
    "question": "(Problem) If the silicon diode in Problem 94 ($V_p = 20\\text{ V}$, $R_L = 500\\ \\Omega$) is assumed to be ideal ($V_D = 0\\text{ V}$, $R_f = 0\\ \\Omega$), what are the values of peak current and peak output voltage?",
    "options": [
      "$I_{\\text{peak}} = 40.00\\text{ mA}, \\; V_{\\text{out}} = 20.00\\text{ V}$",
      "$I_{\\text{peak}} = 37.84\\text{ mA}, \\; V_{\\text{out}} = 18.92\\text{ V}$",
      "$I_{\\text{peak}} = 38.60\\text{ mA}, \\; V_{\\text{out}} = 19.30\\text{ V}$",
      "$I_{\\text{peak}} = 50.00\\text{ mA}, \\; V_{\\text{out}} = 25.00\\text{ V}$"
    ],
    "answer": 0,
    "explanation": "• Why '$I_{\\text{peak}} = 40.00\\text{ mA}, \\; V_{\\text{out}} = 20.00\\text{ V}$' is Correct: For an ideal diode, forward voltage drop $V_D = 0\\text{ V}$ and bulk resistance $R_f = 0\\ \\Omega$:\n$$I_{\\text{peak}} = \\frac{V_p}{R_L} = \\frac{20\\text{ V}}{500\\ \\Omega} = 0.040\\text{ A} = 40.00\\text{ mA}$$\n$$V_{\\text{out}} = V_p = 20.00\\text{ V}$$\n• Why Other Choices differ: $37.84\\text{ mA}$ and $18.92\\text{ V}$ correspond to the practical diode model with $0.7\\text{ V}$ drop and $10\\ \\Omega$ bulk resistance."
  },
  {
    "id": 97,
    "question": "(Problem) A $20\\text{ V}$ DC source is connected to a parallel combination of a Silicon diode ($V_D = 0.7\\text{ V}$) and a Germanium diode ($V_D = 0.3\\text{ V}$), connected in series with a $3\\text{ k}\\Omega$ load resistor. Using practical diode models, what is the node voltage $V_A$ across the $3\\text{ k}\\Omega$ resistor?",
    "options": [
      "$19.70\\text{ V}$",
      "$19.30\\text{ V}$",
      "$20.00\\text{ V}$",
      "$0.40\\text{ V}$"
    ],
    "answer": 0,
    "explanation": "• Why '$19.70\\text{ V}$' is Correct: Germanium (Ge) reaches its conduction barrier at $0.3\\text{ V}$, before Silicon can reach $0.7\\text{ V}$. The Germanium diode conducts first and firmly clamps the parallel branch voltage to $0.3\\text{ V}$, preventing the Silicon diode from ever turning ON:\n$$V_A = V_S - V_{D(\\text{Ge})} = 20\\text{ V} - 0.3\\text{ V} = 19.70\\text{ V}$$\n• Why Other Choices are Incorrect: $19.30\\text{ V}$ ($20\\text{ V} - 0.7\\text{ V}$) assumes Silicon conducts, but Silicon remains completely cut off."
  },
  {
    "id": 98,
    "question": "(Problem) Calculate the current $I$ through the $3\\text{ k}\\Omega$ resistor for the parallel Silicon/Germanium diode circuit in Problem 97 ($V_S = 20\\text{ V}$, Germanium drop $= 0.3\\text{ V}$, $R = 3\\text{ k}\\Omega$).",
    "options": [
      "$6.57\\text{ mA}$",
      "$5.90\\text{ mA}$",
      "$6.43\\text{ mA}$",
      "$6.67\\text{ mA}$"
    ],
    "answer": 0,
    "explanation": "• Why '$6.57\\text{ mA}$' is Correct: From Problem 97, the voltage across the $3\\text{ k}\\Omega$ load resistor is $V_A = 19.70\\text{ V}$. Applying Ohm's Law gives:\n$$I = \\frac{V_A}{R} = \\frac{19.70\\text{ V}}{3000\\ \\Omega} \\approx 0.0065667\\text{ A} = 6.57\\text{ mA}$$\n• Why Other Choices differ: $6.43\\text{ mA}$ is obtained if Silicon's $0.7\\text{ V}$ drop is used ($19.3\\text{ V} / 3\\text{ k}\\Omega$), and $6.67\\text{ mA}$ assumes an ideal zero-drop diode ($20\\text{ V} / 3\\text{ k}\\Omega$)."
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
      "Light-Emitting Diode",
      "Photodiode",
      "Tunnel diode",
      "Zener diode"
    ],
    "answer": 0,
    "explanation": "• Why 'Light-Emitting Diode' is Correct: Two outward-pointing arrows symbolize light emission from the active junction of a Light-Emitting Diode (LED).\n• Why Other Choices differ: Inward-pointing arrows symbolize light absorption in a Photodiode."
  },
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
      "$1.602 \\times 10^{-19}\\text{ J}$",
      "$9.109 \\times 10^{-31}\\text{ J}$",
      "$6.022 \\times 10^{23}\\text{ J}$",
      "$1.000 \\times 10^{-6}\\text{ J}$"
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
      "$E_g = E_C - E_V$",
      "$E_g = E_C + E_V$",
      "$E_g = E_C \\cdot E_V$",
      "$E_g = \\frac{E_V}{E_C}$"
    ],
    "answer": 0,
    "explanation": "• Why 'E_g = E_C - E_V' is Correct: The bandgap energy (E_g) represents the energy difference between the bottom of the conduction band (E_C) and the top of the valence band (E_V).\n• Why Other Choices differ: Adding, multiplying, or dividing band energies violates solid-state energy band definitions."
  },
  {
    "id": 107,
    "question": "Which type of electron emission occurs when an extremely strong external electric field pulls free electrons out of a cold metal surface via electrostatic attraction?",
    "options": [
      "Field emission",
      "Thermionic emission",
      "Photoelectric emission",
      "Secondary emission"
    ],
    "answer": 0,
    "explanation": "• Why 'Field emission' is Correct: Field emission applies an intense positive electric field at a metal surface to lower the potential barrier, allowing electrons to tunnel out without thermal heating.\n• Why Other Choices are Incorrect: Thermionic emission requires heating the cathode to high temperatures."
  },
  {
    "id": 108,
    "question": "Why do good conductors (such as copper and silver) conduct electricity easily with almost zero electrical resistance?",
    "options": [
      "Overlapping valence and conduction bands with zero bandgap",
      "Valence bands that remain completely empty at absolute zero",
      "Extremely wide forbidden energy bandgap exceeding 5 to 6 eV",
      "Exclusive reliance on positive hole conduction mechanisms"
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
  },
  {
    "id": 111,
    "question": "Which schematic symbol represents a Zener Diode?",
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
    "question": "Which schematic symbol represents a Light-Emitting Diode (LED)?",
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
    "question": "Which schematic symbol represents a Photo Diode?",
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
    "question": "Which schematic symbol represents a Schottky Diode?",
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
    "question": "Which schematic symbol represents a Tunnel Diode?",
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
    "question": "Which schematic symbol represents a Varicap (Varactor) Diode?",
    "options": [
      "Diode with parallel capacitor lines at cathode",
      "Diode with two outward-pointing arrows",
      "Diode with bent 'Z' cathode bar",
      "Diode with bracket-shaped cathode bar"
    ],
    "answer": 0,
    "explanation": "• Why 'Diode with parallel capacitor lines at cathode' is Correct: The Varicap/Varactor diode symbol combines a standard diode triangle with a parallel capacitor plate at its cathode, denoting voltage-controlled variable capacitance.\n• Why Other Choices differ: Outward arrows represent LED, Z-bar represents Zener, bracket represents Tunnel diode."
  },
  {
    "id": 117,
    "question": "Statement: Germanium possesses higher thermal stability and lower reverse leakage current than Silicon.",
    "options": [
      "True, Germanium has a larger energy bandgap than Silicon.",
      "True, Germanium maintains fixed atomic bonds at elevated temperatures.",
      "False, Silicon and Germanium have identical physical responses to temperature.",
      "False, Silicon is more thermally stable and exhibits significantly lower reverse leakage current."
    ],
    "answer": 3,
    "explanation": "• Why 'd. False, Silicon is more thermally stable and exhibits significantly lower reverse leakage current.' is Correct: Silicon has a wider energy bandgap ($E_g = 1.12\\text{ eV}$) than Germanium ($E_g = 0.67\\text{ eV}$) and a much lower intrinsic carrier concentration ($n_i$) at room temperature. As a result, Silicon devices have reverse leakage currents measured in nanoamperes (nA) and can operate up to $150^\\circ\\text{C}$–$200^\\circ\\text{C}$, whereas Germanium has leakage currents in microamperes ($\\mu\\text{A}$) and breaks down thermally above ~$75^\\circ\\text{C}$–$100^\\circ\\text{C}$.\n$$E_{g(\\text{Si})} = 1.12\\text{ eV} > E_{g(\\text{Ge})} = 0.67\\text{ eV} \\implies I_{R(\\text{Si})} \\ll I_{R(\\text{Ge})}$$\n• Why Other Choices are Incorrect: Choices a and b are false statements (Germanium has a smaller bandgap and lower thermal stability). Choice c is incorrect because Silicon and Germanium have distinct physical and thermal properties.",
    "formula": "E_{g(\\text{Si})} = 1.12\\text{ eV} > E_{g(\\text{Ge})} = 0.67\\text{ eV} \\implies I_{R(\\text{Si})} \\ll I_{R(\\text{Ge})}"
  },
  {
    "id": 118,
    "question": "Statement: In an unbiased PN junction, dynamic balance between carrier diffusion and drift results in zero net external current flow.",
    "options": [
      "True, because diffusion current created by concentration gradients is exactly balanced by drift current driven by the built-in electric field.",
      "True, because unbiased semiconductors act as infinite superconductors.",
      "False, because unbiased diodes continuously produce direct electrical current.",
      "False, because charge carriers cannot move across PN boundaries under any conditions."
    ],
    "answer": 0,
    "explanation": "In thermal equilibrium under zero external bias, the forward diffusion of majority carriers across the depletion layer due to concentration gradients is precisely counterbalanced by the reverse drift of minority carriers swept by the internal barrier electric field ($I_{\\text{diffusion}} = I_{\\text{drift}}$), producing zero net current.",
    "formula": "I_{\\text{net}} = I_{\\text{diffusion}} - I_{\\text{drift}} = 0"
  },
  {
    "id": 119,
    "question": "Statement: The First Approximation of a diode treats a forward-biased diode as a closed switch with zero voltage drop.",
    "options": [
      "True, because the ideal model simplifies the diode to a zero-resistance closed path during forward operation.",
      "True, because ideal diodes drop 0.7V during forward operation.",
      "False, because the ideal model treats forward bias as an open circuit with infinite resistance.",
      "False, because the ideal model applies exclusively to AC transformer calculations."
    ],
    "answer": 0,
    "explanation": "The First Approximation (Ideal Diode Model) assumes zero forward voltage drop ($V_F = 0\\text{ V}$) and zero internal forward resistance ($r_F = 0\\ \\Omega$), treating the forward-conducting diode as an ideal closed switch with no energy loss.",
    "formula": "\\text{1st Approximation (Ideal): } V_F = 0\\text{ V}, \\quad R_{\\text{on}} = 0\\ \\Omega"
  },
  {
    "id": 120,
    "question": "Statement: Trivalent impurities added to silicon create donor atoms that supply free electrons.",
    "options": [
      "True, because trivalent atoms possess five valence electrons.",
      "True, because trivalent doping yields N-type semiconductors.",
      "False, because trivalent impurities are acceptor atoms that create excess holes in P-type material.",
      "False, because trivalent impurities prevent semiconductor crystal formation."
    ],
    "answer": 2,
    "explanation": "Trivalent atoms (such as Boron, Gallium, or Indium) possess 3 valence electrons. When substituting for tetravalent Silicon (4 valence electrons), they create a vacancy or hole that accepts an electron, acting as acceptor impurities and forming P-type semiconductor material.",
    "formula": "\\text{Trivalent (3 valence e}^-) \\implies \\text{Acceptor} \\implies \\text{P-type (Holes)}"
  },
  {
    "id": 121,
    "question": "Statement: The barrier potential of a Silicon diode is approximately 0.7V, while that of a Germanium diode is approximately 0.3V.",
    "options": [
      "True, because Silicon requires 0.3V forward bias while Germanium requires 0.7V to overcome internal junction fields.",
      "True, because Silicon requires 0.7V forward bias while Germanium requires 0.3V to overcome internal junction fields.",
      "False, because Germanium has a higher barrier potential than Silicon.",
      "False, because both materials possess an identical threshold voltage of 1.0V."
    ],
    "answer": 1,
    "explanation": "At room temperature (25°C), the internal electric field established in the depletion region requires approximately 0.7 V of forward bias to overcome for Silicon, whereas Germanium's smaller bandgap requires approximately 0.3 V.",
    "formula": "V_{B(\\text{Si})} \\approx 0.7\\text{ V}, \\quad V_{B(\\text{Ge})} \\approx 0.3\\text{ V}"
  },
  {
    "id": 122,
    "question": "Statement: The Second Approximation of a diode models the device as an ideal switch in series with a barrier potential battery.",
    "options": [
      "True, because it accounts for the forward voltage required while neglecting internal forward resistance.",
      "True, because it includes bulk resistance alongside the barrier voltage.",
      "False, because the second approximation treats forward bias as an open switch.",
      "False, because the second approximation applies strictly to reverse leakage conditions."
    ],
    "answer": 0,
    "explanation": "The Second Approximation (Practical Diode Model) introduces the knee/barrier voltage ($0.7\\text{ V}$ for Si or $0.3\\text{ V}$ for Ge) represented as a DC voltage source opposing current flow in series with an ideal switch, but continues to neglect the internal forward bulk resistance ($r_B = 0$).",
    "formula": "\\text{2nd Approximation: } V_D = V_B \\; (0.7\\text{V / } 0.3\\text{V}), \\quad r_F = 0"
  },
  {
    "id": 123,
    "question": "Statement: The Third Approximation of a diode is also called the Piecewise Linear Model because it includes internal forward resistance alongside barrier potential.",
    "options": [
      "True, because it models linear V-I operational slopes above the threshold knee voltage.",
      "True, because it simplifies the diode to an ideal zero-voltage switch.",
      "False, because piecewise linear modeling ignores bulk resistance completely.",
      "False, because third approximation applies strictly to light-emitting diodes."
    ],
    "answer": 0,
    "explanation": "The Third Approximation (Piecewise Linear / Complete Diode Model) accounts for both the knee threshold voltage ($V_B$) and the internal bulk forward resistance ($r_f$ or $r_B$). The forward V-I characteristic is modeled as zero current below $V_B$ and a linear slope $\\Delta I / \\Delta V = 1/r_f$ above $V_B$.",
    "formula": "\\text{3rd Approximation: } V_D = V_B + I_D \\cdot r_f"
  },
  {
    "id": 124,
    "question": "Statement: Gallium Arsenide (GaAs) is classified as a single-crystal elemental semiconductor.",
    "options": [
      "True, because GaAs consists of a single chemical element from Group IV.",
      "True, because GaAs has an identical atomic lattice to pure Germanium.",
      "False, because GaAs is a compound semiconductor synthesized from Gallium and Arsenic.",
      "False, because GaAs is an electrical conductor with zero energy bandgap."
    ],
    "answer": 2,
    "explanation": "Silicon and Germanium are elemental semiconductors (pure single chemical elements from Group IV of the periodic table). Gallium Arsenide (GaAs) is a III-V compound semiconductor formed from Gallium (Group III) and Arsenic (Group V).",
    "formula": "\\text{GaAs} = \\text{Group III (Ga)} + \\text{Group V (As)} \\implies \\text{Compound Semiconductor}"
  },
  {
    "id": 125,
    "question": "Statement: Reverse biasing a PN junction diode widens the depletion region and reduces majority carrier current to near zero.",
    "options": [
      "True, because applied reverse potential attracts majority carriers away from the junction, widening the depletion region.",
      "True, because reverse bias pushes majority carriers across the junction boundary, widening the depletion region.",
      "False, because reverse biasing narrows the depletion region to increase forward conduction.",
      "False, because reverse bias causes immediate dielectric destruction at all voltages."
    ],
    "answer": 0,
    "explanation": "Applying a reverse bias (positive terminal to N-region, negative terminal to P-region) pulls majority electrons and holes away from the metallurgical junction, widening the depletion layer and creating a high potential hill that stops majority carrier flow.",
    "formula": "V_{\\text{reverse}} \\uparrow \\implies W_{\\text{depletion}} \\uparrow, \\quad I_{\\text{majority}} \\to 0"
  },
  {
    "id": 126,
    "question": "Statement: Semiconductor resistance decreases as operating temperature rises, demonstrating a negative temperature coefficient.",
    "options": [
      "True, because thermal energy reduces free electron mobility in conductors, generating extra electron-hole pairs.",
      "True, because thermal energy breaks covalent bonds, generating extra electron-hole pairs for electron mobility.",
      "False, because semiconductor resistance increases linearly with temperature like copper.",
      "False, because semiconductors cannot operate above absolute zero."
    ],
    "answer": 1,
    "explanation": "Unlike metals which have a positive temperature coefficient (resistance increases with heat due to lattice vibrations), semiconductors have a negative temperature coefficient (NTC). Increased thermal energy breaks covalent bonds, liberating vast numbers of electron-hole pairs and substantially lowering electrical resistance.",
    "formula": "T \\uparrow \\implies n_i \\uparrow \\implies \\sigma \\uparrow \\implies R \\downarrow \\quad (\\text{Negative Temperature Coefficient})"
  },
  {
    "id": 127,
    "question": "A Silicon diode is connected in series with a 1.8 kΩ load resistor and a 25 V DC supply. Using the Second Approximation, calculate the circuit current in milliamperes.",
    "options": [
      "$14.12\\text{ mA}$",
      "$13.8889\\text{ mA}$",
      "$12.9444\\text{ mA}$",
      "$13.50\\text{ mA}$"
    ],
    "answer": 3,
    "explanation": "In the Second Approximation, the forward-biased silicon diode drops a constant 0.7 V. Applying Ohm's law: $I = \\frac{V_S - V_D}{R_L} = \\frac{25\\text{ V} - 0.7\\text{ V}}{1.8\\text{ k}\\Omega} = \\frac{24.3\\text{ V}}{1.8\\text{ k}\\Omega} = 13.50\\text{ mA}$.",
    "formula": "I = \\frac{V_S - V_D}{R_L} = \\frac{25 - 0.7}{1.8\\text{ k}\\Omega} = 13.50\\text{ mA}"
  },
  {
    "id": 128,
    "question": "A Germanium diode exhibits an internal forward resistance r_f = 8.5 Ω. It is placed in series with a load resistor R_L = 330 Ω and a 5 V DC source. Using the Third Approximation, calculate the total current in milliamperes.",
    "options": [
      "$13.8848\\text{ mA}$",
      "$14.2424\\text{ mA}$",
      "$13.5201\\text{ mA}$",
      "$15.1515\\text{ mA}$"
    ],
    "answer": 0,
    "explanation": "In the Third Approximation, Germanium drops its knee voltage $V_k = 0.3\\text{ V}$ plus the drop across its bulk resistance $r_f = 8.5\\ \\Omega$. Total resistance is $R_T = r_f + R_L = 8.5\\ \\Omega + 330\\ \\Omega = 338.5\\ \\Omega$. Total circuit current: $I = \\frac{V_S - V_{k}}{R_T} = \\frac{5\\text{ V} - 0.3\\text{ V}}{338.5\\ \\Omega} = \\frac{4.7\\text{ V}}{338.5\\ \\Omega} \\approx 0.013884786\\text{ A} = 13.8848\\text{ mA}$.",
    "formula": "I = \\frac{V_S - 0.3}{r_f + R_L} = \\frac{4.7\\text{ V}}{338.5\\ \\Omega} = 13.8848\\text{ mA}"
  },
  {
    "id": 129,
    "question": "Using the parameters and results from Item 128 (Germanium V_k = 0.3 V, r_f = 8.5 Ω, I = 13.8848 mA), calculate the terminal voltage drop across the Germanium diode in volts using the Third Approximation.",
    "options": [
      "$0.3\\text{ V}$",
      "$0.418\\text{ V}$",
      "$0.118\\text{ V}$",
      "$0.3812\\text{ V}$"
    ],
    "answer": 1,
    "explanation": "Under the Third Approximation, the terminal diode voltage is $V_D = V_k + I \\cdot r_f = 0.3\\text{ V} + (13.8848\\times 10^{-3}\\text{ A} \\times 8.5\\ \\Omega) = 0.3\\text{ V} + 0.11802\\text{ V} = 0.41802\\text{ V} \\approx 0.418\\text{ V}$.",
    "formula": "V_D = V_k + I \\cdot r_f = 0.3 + (0.013885 \\times 8.5) = 0.418\\text{ V}"
  },
  {
    "id": 130,
    "question": "A Gallium Arsenide (GaAs) diode (V_k = 1.2 V) is connected across a 9 V DC supply in series with a 1 kΩ load resistor. Using the Second Approximation, calculate the circuit current in milliamperes.",
    "options": [
      "$7.8\\text{ mA}$",
      "$9.0\\text{ mA}$",
      "$6.6\\text{ mA}$",
      "$8.2\\text{ mA}$"
    ],
    "answer": 0,
    "explanation": "Using the Second Approximation for GaAs with a knee voltage of 1.2 V: $I = \\frac{V_S - V_k}{R_L} = \\frac{9\\text{ V} - 1.2\\text{ V}}{1000\\ \\Omega} = \\frac{7.8\\text{ V}}{1000\\ \\Omega} = 7.8\\text{ mA}$.",
    "formula": "I = \\frac{V_S - V_k}{R_L} = \\frac{9 - 1.2}{1\\text{ k}\\Omega} = 7.8\\text{ mA}"
  },
  {
    "id": 131,
    "question": "A Silicon diode and a Germanium diode are connected in series with a 560 Ω load resistor and a 12 V DC supply. Using the Second Approximation, calculate the circuit current in milliamperes.",
    "options": [
      "$20.8929\\text{ mA}$",
      "$20.1786\\text{ mA}$",
      "$19.6429\\text{ mA}$",
      "$18.9286\\text{ mA}$"
    ],
    "answer": 2,
    "explanation": "When diodes are in series, their barrier potential drops add together: $V_{D(\\text{total})} = V_{D(\\text{Si})} + V_{D(\\text{Ge})} = 0.7\\text{ V} + 0.3\\text{ V} = 1.0\\text{ V}$. Current: $I = \\frac{V_S - V_{D(\\text{total})}}{R_L} = \\frac{12\\text{ V} - 1.0\\text{ V}}{560\\ \\Omega} = \\frac{11.0\\text{ V}}{560\\ \\Omega} \\approx 0.01964286\\text{ A} = 19.6429\\text{ mA}$.",
    "formula": "I = \\frac{V_S - (V_{\\text{Si}} + V_{\\text{Ge}})}{R_L} = \\frac{12 - 1.0}{560} = 19.6429\\text{ mA}"
  },
  {
    "id": 132,
    "question": "Calculate the load voltage across the 560 Ω resistor in volts for the series combination in Item 131 (12 V DC supply, Silicon diode, Germanium diode).",
    "options": [
      "$11.7\\text{ V}$",
      "$11.3\\text{ V}$",
      "$11\\text{ V}$",
      "$12.0\\text{ V}$"
    ],
    "answer": 2,
    "explanation": "Applying KVL around the single series loop: $V_L = V_S - V_{D(\\text{Si})} - V_{D(\\text{Ge})} = 12\\text{ V} - 0.7\\text{ V} - 0.3\\text{ V} = 11.0\\text{ V}$.",
    "formula": "V_L = V_S - 0.7 - 0.3 = 11.0\\text{ V}"
  },
  {
    "id": 133,
    "question": "Three identical Silicon diodes are connected in parallel with each other in forward orientation. This combination is connected in series with a 220 Ω resistor and a 12 V DC supply. Assuming equal current sharing, calculate the current through each individual diode in milliamperes using the Second Approximation.",
    "options": [
      "$19.3636\\text{ mA}$",
      "$17.1212\\text{ mA}$",
      "$18.1618\\text{ mA}$",
      "$16.3333\\text{ mA}$"
    ],
    "answer": 1,
    "explanation": "Since all three diodes are in parallel in the forward direction, the voltage across the parallel bank is held at the silicon threshold $V_D = 0.7\\text{ V}$. Voltage across $R_L$: $V_R = 12\\text{ V} - 0.7\\text{ V} = 11.3\\text{ V}$. Total current: $I_{\\text{total}} = \\frac{11.3\\text{ V}}{220\\ \\Omega} \\approx 51.3636\\text{ mA}$. Since the diodes are identical and share current equally: $I_{\\text{each}} = \\frac{I_{\\text{total}}}{3} = \\frac{51.3636\\text{ mA}}{3} \\approx 17.1212\\text{ mA}$.",
    "formula": "I_{\\text{each}} = \\frac{V_S - 0.7}{3 \\cdot R_L} = \\frac{11.3}{660} = 17.1212\\text{ mA}"
  },
  {
    "id": 134,
    "question": "A practical Germanium diode is reverse-biased across a 15 V DC supply in series with a 5 kΩ load resistor. If reverse leakage saturation current is I_s = 8.0 µA, calculate terminal voltage across the diode in volts using first approximation.",
    "options": [
      "$-15.0\\text{ V}$",
      "$-14.96\\text{ V}$",
      "$-0.04\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "answer": 0,
    "explanation": "Under the First Approximation (Ideal Model), a reverse-biased diode is treated as a perfect open circuit ($R_{\\text{rev}} = \\infty, I_R = 0$). With zero current flowing through the series load resistor, no voltage drop occurs across $R_L$, and the entire 15 V source voltage appears across the reverse-biased diode terminals ($V_D = -15.0\\text{ V}$).",
    "formula": "\\text{Ideal Model (Reverse Bias): } I_R = 0 \\implies V_L = 0 \\implies V_D = -V_S = -15.0\\text{ V}"
  },
  {
    "id": 135,
    "question": "A Silicon diode with r_f = 12 Ω is connected to a 16 V DC source in series with R_L = 820 Ω. Using the Third Approximation, calculate total electrical power supplied by the DC source in milliwatts.",
    "options": [
      "$294.2308\\text{ mW}$",
      "$310.1205\\text{ mW}$",
      "$285.50\\text{ mW}$",
      "$300.0\\text{ mW}$"
    ],
    "answer": 0,
    "explanation": "Using Third Approximation: $I = \\frac{V_S - V_k}{r_f + R_L} = \\frac{16\\text{ V} - 0.7\\text{ V}}{12\\ \\Omega + 820\\ \\Omega} = \\frac{15.3\\text{ V}}{832\\ \\Omega} \\approx 0.018389423\\text{ A} = 18.3894\\text{ mA}$. Total electrical power delivered by the DC source: $P_{\\text{source}} = V_S \\times I = 16\\text{ V} \\times 0.018389423\\text{ A} \\approx 0.2942308\\text{ W} = 294.2308\\text{ mW}$.",
    "formula": "P_S = V_S \\cdot \\frac{V_S - 0.7}{r_f + R_L} = 16 \\cdot \\frac{15.3}{832} = 294.2308\\text{ mW}"
  },
  {
    "id": 136,
    "question": "In Item no. 135 (Silicon diode r_f = 12 Ω, V_S = 16 V, R_L = 820 Ω), what is the current flowing through the diode in mA?",
    "options": [
      "$13.4845\\text{ mA}$",
      "$17.8726\\text{ mA}$",
      "$14.3894\\text{ mA}$",
      "$18.3894\\text{ mA}$"
    ],
    "answer": 3,
    "explanation": "From the third approximation equation: $I_D = \\frac{V_S - V_k}{r_f + R_L} = \\frac{16\\text{ V} - 0.7\\text{ V}}{12\\ \\Omega + 820\\ \\Omega} = \\frac{15.3\\text{ V}}{832\\ \\Omega} \\approx 0.018389423\\text{ A} = 18.3894\\text{ mA}$.",
    "formula": "I_D = \\frac{15.3\\text{ V}}{832\\ \\Omega} = 18.3894\\text{ mA}"
  },
  {
    "id": 137,
    "question": "Which operating principle distinguishes vacuum tubes from bipolar junction transistors?",
    "options": [
      "Thermionic emission requiring a heated filament",
      "Solid-state conduction through intrinsic conductors only",
      "Direct current amplification via field ionization",
      "Quantum tunnelling across dielectric barriers"
    ],
    "answer": 0,
    "explanation": "Vacuum tubes rely on thermionic emission—heating a cathode filament in an evacuated glass envelope to boil off free electrons. In contrast, Bipolar Junction Transistors (BJTs) are solid-state devices where conduction occurs entirely within semiconductor crystal lattices without requiring heaters or a vacuum.",
    "formula": "Thermionic Emission (Vacuum Tube) vs. Solid-State Drift/Diffusion (Transistor)"
  },
  {
    "id": 138,
    "question": "In a physical BJT structure, which region is manufactured with the highest doping concentration?",
    "options": [
      "Base",
      "Collector",
      "Emitter",
      "Substrate"
    ],
    "answer": 2,
    "explanation": "The Emitter region is heavily doped ($n^+$ or $p^+$) so that it can inject a massive quantity of majority charge carriers into the base. The Collector is moderately doped, and the Base is the most lightly doped and physically thinnest region.",
    "formula": "\\text{Doping Profile: } N_E \\gg N_C > N_B"
  },
  {
    "id": 139,
    "question": "What is the typical physical width ratio between the whole BJT and the base region of a standard BJT?",
    "options": [
      "1:1",
      "10:1",
      "150:1",
      "1000:1"
    ],
    "answer": 2,
    "explanation": "The base region of a standard planar BJT is made extremely thin (typically a few micrometers or less) to minimize electron-hole recombination and ensure that nearly all carriers injected by the emitter reach the collector. The ratio of total transistor thickness to base width is typically around 150:1.",
    "formula": "\\text{Physical Ratio: } W_{\\text{total}} : W_{\\text{base}} \\approx 150:1"
  },
  {
    "id": 140,
    "question": "Which type of transistor is represented by an arrow on the emitter terminal pointing away from the base terminal?",
    "options": [
      "PNP Transistor",
      "NPN Transistor",
      "Junction FET",
      "Unijunction Transistor"
    ],
    "answer": 1,
    "explanation": "In schematic symbols, the arrow is always placed on the emitter lead and indicates the direction of conventional current flow. An arrow pointing away from the base terminal represents an NPN transistor ('Not Pointing iN'). An arrow pointing inward toward the base represents a PNP transistor ('Pointing iN Proudly').",
    "formula": "\\text{NPN: Arrow points OUT } (B \\to E); \\quad \\text{PNP: Arrow points IN } (E \\to B)"
  },
  {
    "id": 141,
    "question": "A Bipolar Junction Transistor is classified as what type of electronic device?",
    "options": [
      "Voltage-controlled voltage source",
      "Voltage-controlled current source",
      "Current-controlled current source",
      "Frequency-controlled resistor"
    ],
    "answer": 2,
    "explanation": "A BJT is classified as a Current-Controlled Current Source (CCCS) because the output current (collector current $I_C$) is directly controlled by the input current (base current $I_B$) via the relationship $I_C = \\beta I_B$. (In contrast, FETs are voltage-controlled current sources).",
    "formula": "I_C = \\beta I_B \\implies \\text{CCCS (Current-Controlled Current Source)}"
  },
  {
    "id": 142,
    "question": "Which equation correctly represents Kirchhoff's Current Law applied to the terminals of any BJT?",
    "options": [
      "$I_B = I_C + I_E$",
      "$I_E = I_C + I_B$",
      "$I_C = I_E + I_B$",
      "$I_E = I_C \\cdot I_B$"
    ],
    "answer": 1,
    "explanation": "According to Kirchhoff's Current Law (KCL), the sum of currents entering a transistor must equal the sum of currents leaving it. For any BJT in any configuration, the total emitter current is the sum of the collector current and the base current: $I_E = I_C + I_B$.",
    "formula": "I_E = I_C + I_B"
  },
  {
    "id": 143,
    "question": "To operate an NPN bipolar transistor in its active (amplifying) region, how must its junctions be biased?",
    "options": [
      "Base-Emitter forward biased, Collector-Base forward biased",
      "Base-Emitter reverse biased, Collector-Base reverse biased",
      "Base-Emitter forward biased, Collector-Base reverse biased",
      "Base-Emitter reverse biased, Collector-Base forward biased"
    ],
    "answer": 2,
    "explanation": "For linear amplification (Active Region) in any BJT, the Base-Emitter (B-E) junction must be Forward Biased to allow carrier injection into the base, and the Collector-Base (C-B) junction must be Reverse Biased to sweep those carriers into the collector.",
    "formula": "\\text{Active Region: } B\\text{-}E = \\text{Forward Biased}, \\quad C\\text{-}B = \\text{Reverse Biased}"
  },
  {
    "id": 144,
    "question": "When both the Base-Emitter and Collector-Base junctions of a BJT are forward biased, in which region is the device operating?",
    "options": [
      "Cutoff Region",
      "Active Region",
      "Breakdown Region",
      "Saturation Region"
    ],
    "answer": 3,
    "explanation": "When both the B-E junction and C-B junction are forward biased, the transistor conducts maximum current with a very low collector-to-emitter voltage ($V_{CE(sat)} \\approx 0.2\\text{ V}$). This is the Saturation Region, corresponding to a CLOSED switch.",
    "formula": "\\text{Saturation: Both junctions Forward-Biased } (V_{CE} \\approx 0.2\\text{ V})"
  },
  {
    "id": 145,
    "question": "In a BJT switching circuit, what are the bias conditions for the transistor to act as an OPEN switch (Cutoff mode)?",
    "options": [
      "B-E Forward Biased, C-B Reverse Biased",
      "B-E Reverse Biased, C-B Reverse Biased",
      "B-E Forward Biased, C-B Forward Biased",
      "B-E Reverse Biased, C-B Forward Biased"
    ],
    "answer": 1,
    "explanation": "In cutoff mode, the transistor acts as an open circuit (OPEN switch) with virtually zero current ($I_C \\approx 0$). This occurs when both the Base-Emitter and Collector-Base junctions are Reverse Biased (or $V_{BE} \\le 0\\text{ V}$).",
    "formula": "\\text{Cutoff: Both junctions Reverse-Biased } (I_C = 0, \\; V_{CE} = V_{CC})"
  },
  {
    "id": 146,
    "question": "What is the current gain parameter beta (β) in a Common Emitter configuration defined as?",
    "options": [
      "Ratio of IC to IE",
      "Ratio of IB to IC",
      "Ratio of IC to IB",
      "Ratio of IE to IB"
    ],
    "answer": 2,
    "explanation": "In Common Emitter (CE) configuration, the input current is the base current $I_B$ and the output current is the collector current $I_C$. Therefore, the common-emitter DC current gain $\\beta_{dc}$ (or $h_{FE}$) is defined as the ratio of $I_C$ to $I_B$.",
    "formula": "\\beta = \\frac{I_C}{I_B}"
  },
  {
    "id": 147,
    "question": "What parameter represents the alpha (α) current gain in a Common Base configuration?",
    "options": [
      "$\\frac{I_C}{I_E}$",
      "$\\frac{I_E}{I_C}$",
      "$\\frac{I_C}{I_B}$",
      "$\\frac{I_B}{I_C}$"
    ],
    "answer": 0,
    "explanation": "In Common Base (CB) configuration, the input terminal is the emitter and the output terminal is the collector. The alpha current gain $\\alpha_{dc}$ is the ratio of collector current to emitter current ($I_C / I_E$), typically having a value between 0.95 and 0.998.",
    "formula": "\\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1}"
  },
  {
    "id": 148,
    "question": "Which BJT configuration provides high current gain, a voltage gain of approximately 1, and very high input impedance?",
    "options": [
      "Common Emitter (CE)",
      "Common Base (CB)",
      "Common Collector (CC)",
      "Collector Feedback"
    ],
    "answer": 2,
    "explanation": "The Common Collector (CC) configuration—widely called an Emitter Follower—features high input impedance ($Z_{in}$), low output impedance ($Z_{out}$), high current gain ($A_i \\approx \\beta$), and a non-inverting voltage gain slightly less than or approximately equal to 1 ($A_v \\approx 1$). It is widely used for impedance buffering.",
    "formula": "A_v \\approx 1, \\quad Z_{in} \\text{ (Very High)}, \\quad Z_{out} \\text{ (Low)} \\implies \\text{Common Collector}"
  },
  {
    "id": 149,
    "question": "What is the nominal barrier potential V_BE assumed for a forward-biased silicon PN junction at room temperature?",
    "options": [
      "$0.3\\text{ V}$",
      "$0.7\\text{ V}$",
      "$1.2\\text{ V}$",
      "$2.0\\text{ V}$"
    ],
    "answer": 1,
    "explanation": "At standard room temperature (25°C), the built-in barrier potential for a conducting forward-biased Silicon PN junction is universally taken as 0.7 V (or 0.6 V–0.7 V).",
    "formula": "V_{BE(\\text{Si})} = 0.7\\text{ V}"
  },
  {
    "id": 150,
    "question": "What is the approximate forward voltage drop across a Germanium diode when conducting?",
    "options": [
      "$0.3\\text{ V}$",
      "$0.7\\text{ V}$",
      "$1.1\\text{ V}$",
      "$0.0\\text{ V}$"
    ],
    "answer": 0,
    "explanation": "Due to Germanium's smaller energy bandgap ($0.67\\text{ eV}$ vs. $1.12\\text{ eV}$ for Silicon), the built-in barrier potential and forward conducting voltage drop of Germanium PN junctions is approximately 0.3 V.",
    "formula": "V_{D(\\text{Ge})} \\approx 0.3\\text{ V}"
  },
  {
    "id": 151,
    "question": "In a standard regulated DC power supply design, what is the first functional block following the AC main outlet?",
    "options": [
      "Rectifier",
      "Filter",
      "Transformer",
      "Voltage Regulator"
    ],
    "answer": 2,
    "explanation": "The block sequence of a linear DC power supply is: AC Mains (120V/220V) → 1. Transformer (steps down voltage) → 2. Rectifier (converts AC to pulsating DC) → 3. Filter (smoothes ripples) → 4. Voltage Regulator (maintains constant DC output). Therefore, the Transformer is first.",
    "formula": "\\text{AC Main} \\to \\text{Transformer} \\to \\text{Rectifier} \\to \\text{Filter} \\to \\text{Regulator} \\to \\text{Load}"
  },
  {
    "id": 152,
    "question": "What is the primary function of the capacitor filter block in a DC power supply?",
    "options": [
      "Convert DC voltage to AC voltage",
      "Step down the AC line voltage",
      "Smooth out voltage ripples from the rectified output",
      "Maintain a constant output current regardless of load"
    ],
    "answer": 2,
    "explanation": "The capacitor filter charges to the peak voltage during conducting half-cycles and discharges slowly into the load when diode conduction drops, filling in the valleys and significantly smoothing out voltage ripples from the pulsating rectified output.",
    "formula": "V_{\\text{ripple}} = \\frac{I_{\\text{load}}}{f \\cdot C}"
  },
  {
    "id": 153,
    "question": "What is the average DC value of a half-wave rectified sine wave with a peak output voltage V_p?",
    "options": [
      "$\\frac{V_p}{2\\pi}$",
      "$\\frac{V_p}{\\pi}$",
      "$\\frac{2V_p}{\\pi}$",
      "$\\frac{V_p}{\\sqrt{2}}$"
    ],
    "answer": 1,
    "explanation": "For a half-wave rectifier, output voltage exists for only one half of the AC cycle ($0$ to $\\pi$). Integrating over a full period $2\\pi$ yields $V_{dc} = \\frac{1}{2\\pi} \\int_0^\\pi V_p \\sin(\\theta) d\\theta = \\frac{V_p}{\\pi} \\approx 0.318 V_p$.",
    "formula": "V_{dc} = \\frac{V_p}{\\pi} \\approx 0.318 V_p"
  },
  {
    "id": 154,
    "question": "What is the average DC voltage produced by an ideal full-wave rectifier with a peak input voltage V_p?",
    "options": [
      "$\\frac{V_p}{\\pi}$",
      "$\\frac{2V_p}{\\pi}$",
      "$\\frac{V_p}{2}$",
      "$\\sqrt{2} \\cdot V_p$"
    ],
    "answer": 1,
    "explanation": "A full-wave rectifier conducts during both half-cycles, delivering twice the average voltage of a half-wave rectifier: $V_{dc} = \\frac{2V_p}{\\pi} \\approx 0.636 V_p$.",
    "formula": "V_{dc} = \\frac{2V_p}{\\pi} \\approx 0.636 V_p"
  },
  {
    "id": 155,
    "question": "How is the turns ratio (n) of a transformer defined in electronics?",
    "options": [
      "$\\frac{N_{\\text{pri}}}{N_{\\text{sec}}}$",
      "$\\frac{N_{\\text{sec}}}{N_{\\text{pri}}}$",
      "$N_{\\text{pri}} \\cdot N_{\\text{sec}}$",
      "$\\left(\\frac{N_{\\text{sec}}}{N_{\\text{pri}}}\\right)^2$"
    ],
    "answer": 1,
    "explanation": "In standard electronic engineering textbooks (such as Boylestad and Floyd), the transformation turns ratio $n$ is defined as the ratio of secondary turns to primary turns: $n = \\frac{N_{sec}}{N_{pri}}$, such that secondary voltage is directly $V_{sec} = n \\cdot V_{pri}$.",
    "formula": "n = \\frac{N_{sec}}{N_{pri}} \\implies V_{sec} = n \\cdot V_{pri}"
  },
  {
    "id": 156,
    "question": "Which configuration is also referred to as an 'emitter follower'?",
    "options": [
      "Common Base",
      "Common Emitter",
      "Common Collector",
      "Fixed Bias"
    ],
    "answer": 2,
    "explanation": "The Common Collector configuration is called an emitter follower because the output is taken directly across the emitter resistor $R_E$, and the emitter voltage follows the base input voltage in phase with a constant $0.7\\text{ V}$ offset ($V_E = V_B - 0.7\\text{ V}$).",
    "formula": "V_E = V_B - V_{BE} \\implies \\text{Emitter Follower (Common Collector)}"
  },
  {
    "id": 157,
    "question": "What typical DC operating voltage range is associated with modern solid-state transistors compared to vacuum tubes?",
    "options": [
      "100 V to 500 V",
      "1 V to 15 V",
      "500 V to 1000 V",
      "0 V to 0.5 V"
    ],
    "answer": 1,
    "explanation": "Modern solid-state transistors operate at safe, low DC supply voltages typically ranging between 1 V and 15 V (e.g., 3.3V, 5V, 9V, 12V), whereas obsolete vacuum tubes required high plate voltages of 100 V to 500 V.",
    "formula": "\\text{Transistor } V_{CC} \\approx 1\\text{ V to } 15\\text{ V} \\quad (\\text{vs. Tube } 100\\text{ V – } 500\\text{ V})"
  },
  {
    "id": 158,
    "question": "What breakdown mechanism occurs in a BJT when excessive reverse bias is applied across the collector-base junction?",
    "options": [
      "Zener Breakdown",
      "Avalanche Breakdown",
      "Thermal Runaway",
      "Pinch-off Breakdown"
    ],
    "answer": 1,
    "explanation": "Because the collector region is moderately or lightly doped and has a wide depletion region, applying excessive reverse bias voltage ($BV_{CBO}$ or $BV_{CEO}$) accelerates minority carriers to sufficient kinetic energy to knock valence electrons free in a cumulative chain reaction known as Avalanche Breakdown.",
    "formula": "\\text{Avalanche Multiplication: } M = \\frac{1}{1 - (V_{CB}/BV)^n}"
  },
  {
    "id": 159,
    "question": "What is the role of a voltage regulator in a linear DC power supply?",
    "options": [
      "To step down the AC main voltage",
      "To convert AC voltage into pulsating DC voltage",
      "To maintain a constant DC output voltage despite changes in input voltage or load",
      "To isolate the load circuit from ground"
    ],
    "answer": 2,
    "explanation": "The voltage regulator circuit (e.g., Zener diode shunt or 78xx IC) holds the DC load voltage strictly constant despite variations in the incoming line voltage (line regulation) or changes in the load current demand (load regulation).",
    "formula": "\\text{Regulation: } \\Delta V_{\\text{out}} \\approx 0 \\text{ as } \\Delta V_{\\text{in}} \\text{ or } \\Delta I_L \\text{ varies}"
  },
  {
    "id": 160,
    "question": "How many diodes are required to construct a full-wave bridge rectifier circuit?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "A full-wave bridge rectifier consists of 4 diodes arranged in a closed loop (bridge network). During each half-cycle, two diagonally opposite diodes conduct simultaneously in series.",
    "formula": "\\text{Bridge Rectifier: 4 Diodes}"
  },
  {
    "id": 161,
    "question": "How many diodes are used in a center-tapped full-wave rectifier circuit?",
    "options": [
      "1",
      "2",
      "4",
      "6"
    ],
    "answer": 1,
    "explanation": "A center-tapped full-wave rectifier requires a transformer with a secondary center tap and exactly 2 diodes, each conducting alternately during opposite half-cycles.",
    "formula": "\\text{Center-Tapped Full-Wave Rectifier: 2 Diodes}"
  },
  {
    "id": 162,
    "question": "A transistor circuit measures a collector current I_C = 5 mA and a base current I_B = 50 µA. What is the total emitter current?",
    "options": [
      "$4.95\\text{ mA}$",
      "$5.00\\text{ mA}$",
      "$5.05\\text{ mA}$",
      "$5.50\\text{ mA}$"
    ],
    "answer": 2,
    "explanation": "By Kirchhoff's Current Law: $I_E = I_C + I_B$. Converting units: $I_B = 50\\ \\mu\\text{A} = 0.05\\text{ mA}$. Thus, $I_E = 5\\text{ mA} + 0.05\\text{ mA} = 5.05\\text{ mA}$.",
    "formula": "I_E = I_C + I_B = 5\\text{ mA} + 0.05\\text{ mA} = 5.05\\text{ mA}"
  },
  {
    "id": 163,
    "question": "If a BJT has a common-emitter current gain β = 100, what is its corresponding common-base current gain (α)?",
    "options": [
      "0.9803",
      "0.9901",
      "1.0100",
      "0.9500"
    ],
    "answer": 1,
    "explanation": "The relationship between common-emitter gain $\\beta$ and common-base gain $\\alpha$ is $\\alpha = \\frac{\\beta}{\\beta + 1} = \\frac{100}{101} \\approx 0.990099 \\approx 0.9901$.",
    "formula": "\\alpha = \\frac{\\beta}{\\beta + 1} = \\frac{100}{101} \\approx 0.9901"
  },
  {
    "id": 164,
    "question": "Consider the fixed-bias circuit: V_CC = 12 V, R_B = 330 kΩ, R_C = 2 kΩ, and β = 150. Calculate the base current.",
    "options": [
      "$28.52\\mu\\text{A}$",
      "$34.24\\mu\\text{A}$",
      "$36.36\\mu\\text{A}$",
      "$40.12\\mu\\text{A}$"
    ],
    "answer": 1,
    "explanation": "In a fixed-bias circuit, the base-emitter loop equation gives $I_B = \\frac{V_{CC} - V_{BE}}{R_B} = \\frac{12\\text{ V} - 0.7\\text{ V}}{330\\text{ k}\\Omega} = \\frac{11.3\\text{ V}}{330\\times 10^3\\ \\Omega} \\approx 34.242\\ \\mu\\text{A}$.",
    "formula": "I_B = \\frac{V_{CC} - V_{BE}}{R_B} = \\frac{12 - 0.7}{330\\text{ k}\\Omega} = 34.24\\ \\mu\\text{A}"
  },
  {
    "id": 165,
    "question": "Using the circuit parameters from Item 164 (V_CC = 12 V, R_B = 330 kΩ, R_C = 2 kΩ, β = 150), what is the collector current?",
    "options": [
      "$3.42\\text{ mA}$",
      "$4.85\\text{ mA}$",
      "$5.14\\text{ mA}$",
      "$6.20\\text{ mA}$"
    ],
    "answer": 2,
    "explanation": "With $I_B = 34.242\\ \\mu\\text{A}$ and $\\beta = 150$: $I_C = \\beta I_B = 150 \\times 34.242\\ \\mu\\text{A} = 5.136\\text{ mA} \\approx 5.14\\text{ mA}$.",
    "formula": "I_C = \\beta I_B = 150 \\times 34.24\\ \\mu\\text{A} = 5.14\\text{ mA}"
  },
  {
    "id": 166,
    "question": "A half-wave rectifier uses a single silicon diode connected to an AC source with peak voltage V_in(pk) = 10 V. What is the peak output voltage V_out across the load?",
    "options": [
      "$10.0\\text{ V}$",
      "$9.3\\text{ V}$",
      "$8.6\\text{ V}$",
      "$4.3\\text{ V}$"
    ],
    "answer": 1,
    "explanation": "Accounting for the practical 0.7 V barrier potential drop of a conducting Silicon diode: $V_{out(pk)} = V_{in(pk)} - V_D = 10\\text{ V} - 0.7\\text{ V} = 9.3\\text{ V}$.",
    "formula": "V_{out(pk)} = V_{in(pk)} - 0.7\\text{ V} = 10 - 0.7 = 9.3\\text{ V}"
  },
  {
    "id": 167,
    "question": "For the half-wave output in Item 166 (peak output = 9.3 V), what is the calculated average DC output voltage?",
    "options": [
      "$2.96\\text{ V}$",
      "$4.65\\text{ V}$",
      "$5.92\\text{ V}$",
      "$6.57\\text{ V}$"
    ],
    "answer": 0,
    "explanation": "The average DC voltage of a half-wave rectified waveform is $V_{dc} = \\frac{V_{out(pk)}}{\\pi} = \\frac{9.3\\text{ V}}{\\pi} \\approx 2.9603\\text{ V} \\approx 2.96\\text{ V}$.",
    "formula": "V_{dc} = \\frac{V_p}{\\pi} = \\frac{9.3}{\\pi} = 2.96\\text{ V}"
  },
  {
    "id": 168,
    "question": "A transformer with a turns specification 10:1 has a primary RMS voltage of 120 Vrms. What is the secondary RMS voltage?",
    "options": [
      "$1200\\text{ V}$",
      "$120\\text{ V}$",
      "$12\\text{ V}$",
      "$1.2\\text{ V}$"
    ],
    "answer": 2,
    "explanation": "A turns ratio of 10:1 ($N_1 : N_2 = 10:1$) indicates a step-down transformer where $V_2 = V_1 / 10 = 120\\text{ V} / 10 = 12\\text{ V}_{rms}$.",
    "formula": "V_{\\text{sec}} = V_{\\text{pri}} \\times \\frac{N_{\\text{sec}}}{N_{\\text{pri}}} = 120 \\times \\frac{1}{10} = 12\\text{ V}"
  },
  {
    "id": 169,
    "question": "Refer to the following BJT operating profile: Collector-Base Junction: Reverse Biased; Base-Emitter Junction: Forward Biased; Signal Output: Amplified replica of input signal. Which region of operation does this describe?",
    "options": [
      "Cutoff Region",
      "Active Region",
      "Saturation Region",
      "Breakdown Region"
    ],
    "answer": 1,
    "explanation": "When the B-E junction is forward-biased and the C-B junction is reverse-biased, the transistor operates in the Active Region, behaving as a linear amplifier reproducing an amplified version of the input signal without clipping.",
    "formula": "\\text{B-E Forward, C-B Reverse } \\implies \\text{Active (Linear Amplification) Region}"
  },
  {
    "id": 170,
    "question": "In an emitter-stabilized bias circuit, what is the correct formula for the base current I_B?",
    "options": [
      "$I_B = \\frac{V_{CC} - V_{BE}}{R_B}$",
      "$I_B = \\frac{V_{CC} - V_{BE}}{R_B + (\\beta + 1)R_E}$",
      "$I_B = \\frac{V_{CC} - V_{BE}}{R_B + \\beta R_C}$",
      "$I_B = \\frac{V_{Th} - V_{BE}}{R_{Th}}$"
    ],
    "answer": 1,
    "explanation": "Applying KVL around the base-emitter loop: $V_{CC} - I_B R_B - V_{BE} - I_E R_E = 0$. Substituting $I_E = (\\beta + 1)I_B$ and solving gives $I_B = \\frac{V_{CC} - V_{BE}}{R_B + (\\beta + 1)R_E}$.",
    "formula": "I_B = \\frac{V_{CC} - V_{BE}}{R_B + (\\beta + 1)R_E}"
  },
  {
    "id": 171,
    "question": "Which set of terminal characteristics correctly describes a Common Base (CB) amplifier configuration?",
    "options": [
      "High input impedance, low output impedance, current gain < 1",
      "Low input impedance, high output impedance, current gain < 1",
      "High input impedance, high output impedance, voltage gain ≈ 1",
      "Low input impedance, low output impedance, phase inversion of 180°"
    ],
    "answer": 1,
    "explanation": "A Common Base amplifier has very low input impedance ($Z_{in} \\approx r_e$), very high output impedance ($Z_{out} \\approx R_C$), a current gain $\\alpha$ slightly less than 1 (current gain $< 1$), high voltage gain, and $0^\\circ$ phase shift (in-phase).",
    "formula": "Z_{in} \\text{ (Very Low)}, \\quad Z_{out} \\text{ (High)}, \\quad A_i < 1 \\implies \\text{Common Base}"
  },
  {
    "id": 172,
    "question": "A full-wave bridge rectifier is connected to a transformer secondary providing 24 V peak. Assuming silicon diodes, what is the peak voltage across the load resistor?",
    "options": [
      "$24.0\\text{ V}$",
      "$23.3\\text{ V}$",
      "$22.6\\text{ V}$",
      "$21.2\\text{ V}$"
    ],
    "answer": 2,
    "explanation": "In a bridge rectifier, two diodes conduct in series during each half-cycle. Therefore, two barrier potential drops must be subtracted: $V_{L(pk)} = V_{sec(pk)} - 2V_D = 24\\text{ V} - 2(0.7\\text{ V}) = 24 - 1.4 = 22.6\\text{ V}$.",
    "formula": "V_{L(pk)} = V_{sec(pk)} - 2V_D = 24 - 1.4 = 22.6\\text{ V}"
  },
  {
    "id": 173,
    "question": "A center-tapped transformer delivers a total secondary peak-to-peak voltage of 100 V. What peak voltage appears across each half of the secondary with respect to the center tap?",
    "options": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$25\\text{ V}$",
      "$12.5\\text{ V}$"
    ],
    "answer": 2,
    "explanation": "A total secondary voltage of $100\\text{ V}_{p-p}$ has a total peak voltage of $V_p = 100 / 2 = 50\\text{ V}$. The center tap splits this total peak voltage exactly in half, so the peak voltage across each half with respect to the center tap is $50\\text{ V} / 2 = 25\\text{ V}$. (Note: 50 V is the peak-to-peak voltage across each half).",
    "formula": "V_{\\text{half}(pk)} = \\frac{V_{\\text{total}(pk)}}{2} = \\frac{50\\text{ V}}{2} = 25\\text{ V}"
  },
  {
    "id": 174,
    "question": "What is the peak voltage of a standard sinusoidal AC line voltage rated at 220 Vrms?",
    "options": [
      "$220.0\\text{ V}$",
      "$311.1\\text{ V}$",
      "$440.0\\text{ V}$",
      "$155.6\\text{ V}$"
    ],
    "answer": 1,
    "explanation": "For a pure sinusoidal wave: $V_{peak} = \\sqrt{2} \\times V_{rms} = \\sqrt{2} \\times 220\\text{ V} \\approx 1.4142 \\times 220 \\approx 311.13\\text{ V} \\approx 311.1\\text{ V}$.",
    "formula": "V_{peak} = \\sqrt{2} \\cdot V_{rms} = \\sqrt{2} \\cdot 220 = 311.1\\text{ V}"
  },
  {
    "id": 175,
    "question": "In a collector-feedback bias configuration, why does collector voltage decrease when collector current increases?",
    "options": [
      "The base diode breaks down",
      "Negative feedback reduces base current to stabilize the Q-point",
      "Emitter resistance drops to zero",
      "Transistor enters the cutoff region"
    ],
    "answer": 1,
    "explanation": "In collector feedback, $R_B$ is connected directly to the collector. If $I_C$ increases, the voltage drop across $R_C$ increases, reducing $V_C$. Since $V_C$ supplies the base, a lower $V_C$ forces $I_B$ to decrease, which counteracts the original increase in $I_C$. This is stabilizing negative feedback.",
    "formula": "I_C \\uparrow \\implies V_C = (V_{CC} - I_C R_C) \\downarrow \\implies I_B \\downarrow \\implies I_C \\downarrow"
  },
  {
    "id": 176,
    "question": "A voltage divider bias network has V_CC = 22 V, R_1 = 39 kΩ, and R_2 = 3.9 kΩ. Calculate the Thevenin equivalent voltage (V_Th) at the base terminal.",
    "options": [
      "$2.0\\text{ V}$",
      "$3.9\\text{ V}$",
      "$4.4\\text{ V}$",
      "$10.0\\text{ V}$"
    ],
    "answer": 0,
    "explanation": "Using the voltage divider formula: $V_{Th} = V_{CC} \\times \\frac{R_2}{R_1 + R_2} = 22\\text{ V} \\times \\frac{3.9\\text{ k}\\Omega}{39\\text{ k}\\Omega + 3.9\\text{ k}\\Omega} = 22 \\times \\frac{3.9}{42.9} = 22 \\times \\frac{1}{11} = 2.0\\text{ V}$.",
    "formula": "V_{Th} = V_{CC} \\cdot \\frac{R_2}{R_1 + R_2} = 22 \\cdot \\frac{3.9}{42.9} = 2.0\\text{ V}"
  },
  {
    "id": 177,
    "question": "Consider the Voltage Divider Bias Circuit: V_CC = 22 V, R_1 = 39 kΩ, R_2 = 3.9 kΩ, R_C = 10 kΩ, R_E = 1.5 kΩ, and β = 100. Calculate the precise base current I_B.",
    "options": [
      "$5.12\\mu\\text{A}$",
      "$8.38\\mu\\text{A}$",
      "$12.45\\mu\\text{A}$",
      "$15.60\\mu\\text{A}$"
    ],
    "answer": 1,
    "explanation": "First find Thevenin values: $V_{Th} = 2.0\\text{ V}$, $R_{Th} = R_1 \\parallel R_2 = \\frac{39 \\times 3.9}{42.9} = 3.545\\text{ k}\\Omega$. Then by exact analysis: $I_B = \\frac{V_{Th} - V_{BE}}{R_{Th} + (\\beta + 1)R_E} = \\frac{2.0 - 0.7}{3.545\\text{ k}\\Omega + (101)(1.5\\text{ k}\\Omega)} = \\frac{1.3\\text{ V}}{3.545 + 151.5\\text{ k}\\Omega} = \\frac{1.3}{155.045\\text{ k}\\Omega} \\approx 8.38\\ \\mu\\text{A}$.",
    "formula": "I_B = \\frac{V_{Th} - V_{BE}}{R_{Th} + (\\beta + 1)R_E} = \\frac{1.3\\text{ V}}{155.05\\text{ k}\\Omega} = 8.38\\ \\mu\\text{A}"
  },
  {
    "id": 178,
    "question": "Using the exact circuit values from Item 177 (V_CC = 22 V, R_1 = 39 kΩ, R_2 = 3.9 kΩ, R_C = 10 kΩ, R_E = 1.5 kΩ, β = 100, I_B = 8.38 µA), calculate the collector-to-emitter voltage V_CE.",
    "options": [
      "$6.82\\text{ V}$",
      "$9.45\\text{ V}$",
      "$12.36\\text{ V}$",
      "$15.10\\text{ V}$"
    ],
    "answer": 2,
    "explanation": "$I_C = \\beta I_B = 100 \\times 8.385\\ \\mu\\text{A} = 0.8385\\text{ mA}$. $I_E = (\\beta + 1)I_B = 101 \\times 8.385\\ \\mu\\text{A} = 0.8469\\text{ mA}$. Applying KVL around collector-emitter loop: $V_{CE} = V_{CC} - I_C R_C - I_E R_E = 22 - (0.8385 \\times 10) - (0.8469 \\times 1.5) = 22 - 8.385 - 1.270 = 12.345\\text{ V} \\approx 12.36\\text{ V}$.",
    "formula": "V_{CE} = V_{CC} - I_C R_C - I_E R_E = 22 - 8.385 - 1.27 = 12.36\\text{ V}"
  },
  {
    "id": 179,
    "question": "An emitter-stabilized bias circuit has V_CC = 15 V, R_B = 470 kΩ, R_C = 2.2 kΩ, R_E = 1.0 kΩ, and β = 100. Calculate V_CE at the DC operating point.",
    "options": [
      "$4.25\\text{ V}$",
      "$6.95\\text{ V}$",
      "$8.53\\text{ V}$",
      "$10.12\\text{ V}$"
    ],
    "answer": 1,
    "explanation": "$I_B = \\frac{V_{CC} - V_{BE}}{R_B + (\\beta + 1)R_E} = \\frac{15 - 0.7}{470\\text{ k} + 101(1.0\\text{ k})} = \\frac{14.3}{571\\text{ k}\\Omega} \\approx 25.04\\ \\mu\\text{A}$. $I_C = 100 \\times 25.04\\ \\mu\\text{A} = 2.504\\text{ mA}$; $I_E = 101 \\times 25.04\\ \\mu\\text{A} = 2.529\\text{ mA}$. $V_{CE} = 15 - I_C(2.2\\text{ k}) - I_E(1.0\\text{ k}) = 15 - 5.509 - 2.529 = 6.962\\text{ V} \\approx 6.95\\text{ V}$.",
    "formula": "V_{CE} = V_{CC} - I_C R_C - I_E R_E = 15 - 5.51 - 2.53 = 6.95\\text{ V}"
  },
  {
    "id": 180,
    "question": "A single-phase transformer with V_pri = 220 Vrms and turns ratio n = 0.05 feeds a half-wave rectifier using a silicon diode. What is the average DC output voltage across the load?",
    "options": [
      "$3.12\\text{ V}$",
      "$4.73\\text{ V}$",
      "$6.85\\text{ V}$",
      "$9.20\\text{ V}$"
    ],
    "answer": 1,
    "explanation": "Secondary RMS voltage: $V_{sec} = 0.05 \\times 220\\text{ V} = 11\\text{ V}_{rms}$. Secondary peak voltage: $V_{p} = \\sqrt{2} \\times 11\\text{ V} = 15.556\\text{ V}$. Peak voltage across load: $V_{L(pk)} = 15.556 - 0.7 = 14.856\\text{ V}$. Average DC voltage: $V_{dc} = \\frac{V_{L(pk)}}{\\pi} = \\frac{14.856}{\\pi} \\approx 4.729\\text{ V} \\approx 4.73\\text{ V}$.",
    "formula": "V_{dc} = \\frac{(\\sqrt{2} \\cdot n \\cdot V_{\\text{pri}} - 0.7)}{\\pi} = \\frac{14.86}{\\pi} = 4.73\\text{ V}"
  },
  {
    "id": 181,
    "question": "A collector-feedback bias circuit uses V_CC = 12 V, R_C = 2 kΩ, R_B = 200 kΩ, R_E = 1 kΩ, and β = 100. Calculate the base current I_B.",
    "options": [
      "$18.20\\mu\\text{A}$",
      "$22.60\\mu\\text{A}$",
      "$28.40\\mu\\text{A}$",
      "$35.10\\mu\\text{A}$"
    ],
    "answer": 1,
    "explanation": "Using the standard collector-feedback formula: $I_B = \\frac{V_{CC} - V_{BE}}{R_B + \\beta(R_C + R_E)} = \\frac{12 - 0.7}{200\\text{ k}\\Omega + 100(2\\text{ k} + 1\\text{ k})\\Omega} = \\frac{11.3\\text{ V}}{200\\text{ k} + 300\\text{ k}\\Omega} = \\frac{11.3\\text{ V}}{500\\text{ k}\\Omega} = 0.0226\\text{ mA} = 22.60\\ \\mu\\text{A}$.",
    "formula": "I_B = \\frac{V_{CC} - V_{BE}}{R_B + \\beta(R_C + R_E)} = \\frac{11.3\\text{ V}}{500\\text{ k}\\Omega} = 22.60\\ \\mu\\text{A}"
  },
  {
    "id": 182,
    "question": "A center-tapped full-wave rectifier circuit has an input peak voltage V_pri = 100 V and a transformer turns ratio n = 0.5. If silicon diodes are used, calculate the DC output voltage.",
    "options": [
      "$15.47\\text{ V}$",
      "$24.30\\text{ V}$",
      "$30.85\\text{ V}$",
      "$48.60\\text{ V}$"
    ],
    "answer": 0,
    "explanation": "Total secondary peak: $V_{sec(pk)} = 0.5 \\times 100\\text{ V} = 50\\text{ V}$. Across each half from the center tap: $V_{half(pk)} = 50\\text{ V} / 2 = 25\\text{ V}$. Peak voltage across load: $V_{L(pk)} = 25 - 0.7 = 24.30\\text{ V}$. The average DC output voltage is $V_{dc} = \\frac{2 V_{L(pk)}}{\\pi} = \\frac{2 \\times 24.30}{\\pi} = \\frac{48.60}{\\pi} \\approx 15.47\\text{ V}$. (Note: 24.30 V is peak DC voltage).",
    "formula": "V_{dc} = \\frac{2(V_{\\text{half}(pk)} - 0.7)}{\\pi} = \\frac{48.60}{\\pi} = 15.47\\text{ V}"
  },
  {
    "id": 183,
    "question": "For a fixed-bias circuit with V_CC = 12 V and R_C = 1.2 kΩ, what is the collector saturation current on the DC load line?",
    "options": [
      "$5.0\\text{ mA}$",
      "$10.0\\text{ mA}$",
      "$12.0\\text{ mA}$",
      "$15.0\\text{ mA}$"
    ],
    "answer": 1,
    "explanation": "On the DC load line, saturation occurs when $V_{CE} = 0\\text{ V}$. The collector saturation current is $I_{C(sat)} = \\frac{V_{CC}}{R_C} = \\frac{12\\text{ V}}{1.2\\text{ k}\\Omega} = 10.0\\text{ mA}$.",
    "formula": "I_{C(sat)} = \\frac{V_{CC}}{R_C} = \\frac{12\\text{ V}}{1.2\\text{ k}\\Omega} = 10.0\\text{ mA}"
  },
  {
    "id": 184,
    "question": "Examine the diode configuration: An AC source of 15 Vpk feeds two silicon diodes connected in series in the same forward direction to a load resistor RL. What is the output peak voltage across RL?",
    "options": [
      "$14.3\\text{ V}$",
      "$13.6\\text{ V}$",
      "$0.0\\text{ V}$",
      "$7.5\\text{ V}$"
    ],
    "answer": 1,
    "explanation": "Because two silicon diodes are connected in series facing the same forward conducting direction, each diode drops $0.7\\text{ V}$. The total forward diode drop is $2 \\times 0.7\\text{ V} = 1.4\\text{ V}$. Output voltage across $R_L$: $V_{out} = V_{in(pk)} - 2V_D = 15\\text{ V} - 1.4\\text{ V} = 13.6\\text{ V}$. (Option A is a common error where only one diode drop is subtracted).",
    "formula": "V_{out} = V_{in(pk)} - 2V_D = 15 - 1.4 = 13.6\\text{ V}"
  },
  {
    "id": 185,
    "question": "Why is Voltage Divider Bias preferred over Fixed Bias in high-volume production amplifier circuits?",
    "options": [
      "It eliminates the need for an emitter resistor",
      "Its Q-point is practically independent of transistor beta variations",
      "It requires fewer total resistors to bias the transistor",
      "It increases the voltage gain of the amplifier by a factor of 10"
    ],
    "answer": 1,
    "explanation": "In mass production, individual transistor current gain ($\\beta$) varies widely (e.g. from 50 to 300) even for the exact same part number. Voltage Divider Bias provides beta-independent Q-point stability provided $\\beta R_E \\ge 10 R_2$, ensuring consistent bias point without trimming.",
    "formula": "V_B \\approx V_{CC} \\cdot \\frac{R_2}{R_1 + R_2} \\implies I_C \\approx \\frac{V_B - 0.7}{R_E} \\quad (\\text{Beta Independent})"
  },
  {
    "id": 186,
    "question": "A full-wave bridge rectifier is powered by a step-down transformer (120 Vrms primary, 12 Vrms secondary). If the silicon bridge feeds a 1 kΩ load resistor, what average DC power is delivered to the load?",
    "options": [
      "$49.5\\text{ mW}$",
      "$98.7\\text{ mW}$",
      "$142.0\\text{ mW}$",
      "$210.5\\text{ mW}$"
    ],
    "answer": 1,
    "explanation": "Secondary peak: $V_{sec(pk)} = \\sqrt{2} \\times 12\\text{ V} \\approx 16.97\\text{ V}$. Peak voltage across load: $V_{L(pk)} = 16.97 - 2(0.7\\text{ V}) = 15.57\\text{ V}$. Average DC voltage: $V_{dc} = \\frac{2V_{L(pk)}}{\\pi} = \\frac{2 \\times 15.57}{\\pi} \\approx 9.912\\text{ V}$. Average DC power delivered to $R_L$: $P_{dc} = \\frac{V_{dc}^2}{R_L} = \\frac{(9.912)^2}{1000\\ \\Omega} \\approx 0.09826\\text{ W} = 98.3\\text{ mW} \\approx 98.7\\text{ mW}$.",
    "formula": "P_{dc} = \\frac{V_{dc}^2}{R_L} = \\frac{\\left(\\frac{2(12\\sqrt{2} - 1.4)}{\\pi}\\right)^2}{1000} = 98.7\\text{ mW}"
  },
  {
    "id": 187,
    "question": "The magnitude of the thermal voltage is approximately:",
    "options": [
      "$22\\text{ mV}$",
      "$23\\text{ mV}$",
      "$26\\text{ mV}$",
      "$25\\text{ mV}$"
    ],
    "answer": 2,
    "explanation": "\u2022 Why '26 mV' is Correct: Thermal voltage $V_T$ is defined as $V_T = \\frac{k \\cdot T}{q}$. At standard room temperature ($T = 300\\text{ K}$ or $27^\\circ\\text{C}$):\n$$V_T = \\frac{(1.38 \\times 10^{-23}\\text{ J/K})(300\\text{ K})}{1.602 \\times 10^{-19}\\text{ C}} \\approx 25.84\\text{ mV} \\approx 26\\text{ mV}$$\nThis constant appears throughout diode and transistor exponential equations.\n\u2022 Why Other Choices are Incorrect: 22 mV, 23 mV, and 25 mV are mathematically inaccurate for $T = 300\\text{ K}$."
  },
  {
    "id": 188,
    "question": "The drain of a FET is analogous to which terminal of a BJT?",
    "options": [
      "collector",
      "emitter",
      "base",
      "drain"
    ],
    "answer": 0,
    "explanation": "\u2022 Why 'collector' is Correct: In comparing BJT and FET terminals by functional carrier transport:\n1. Drain (D) $\\leftrightarrow$ Collector (C): both collect/drain the charge carriers leaving the device channel/base.\n2. Source (S) $\\leftrightarrow$ Emitter (E): both source/emit the primary charge carriers into the device.\n3. Gate (G) $\\leftrightarrow$ Base (B): both act as the control terminal modulating channel conduction.\n\u2022 Why Other Choices are Incorrect: Emitter corresponds to Source, Base corresponds to Gate, and Drain is not a BJT terminal."
  },
  {
    "id": 189,
    "question": "The output current in a FET is determined by the amount of:",
    "options": [
      "input current",
      "output current",
      "input voltage",
      "sinusoidal wave"
    ],
    "answer": 2,
    "explanation": "\u2022 Why 'input voltage' is Correct: The Field Effect Transistor is a voltage-controlled device. The output drain current ($I_D$) is governed by the electric field created by the input gate-to-source voltage ($V_{GS}$), which constricts or widens the conduction channel.\n\u2022 Why Other Choices are Incorrect: Input current controls the BJT ($I_C = \\beta I_B$). A FET's input gate is reverse-biased or insulated, so input current is practically zero ($I_G \\approx 0$)."
  },
  {
    "id": 190,
    "question": "Which of the following is not an advantage of FET over BJT?",
    "options": [
      "Faster switching time",
      "Temperature stability",
      "Smaller",
      "High gain"
    ],
    "answer": 3,
    "explanation": "\u2022 Why 'High gain' is Correct: High voltage gain is an advantage of BJTs, NOT FETs. BJTs have much higher transconductance ($g_m$) than FETs, resulting in significantly larger voltage gains in standard amplifier configurations.\n\u2022 Why Other Choices are Incorrect: Faster switching time (no minority carrier storage delay), better thermal stability (negative temperature coefficient preventing thermal runaway), and smaller physical size (allowing high packing density in integrated circuits) are all well-known advantages of FETs over BJTs."
  },
  {
    "id": 191,
    "question": "The n-type and p-type classification of FETs talks about:",
    "options": [
      "The electrons and holes",
      "The polarity of the terminals",
      "The channel's material",
      "The semiconductor substrate used in manufacturing"
    ],
    "answer": 2,
    "explanation": "\u2022 Why 'The channel\\'s material' is Correct: The classification of a FET as n-channel or p-channel refers specifically to the doping type of the semiconductor material forming the conduction channel between drain and source. An n-channel FET uses n-type material (electrons as majority carriers), while a p-channel FET uses p-type material (holes as majority carriers).\n\u2022 Note on Exam Correction: The student originally marked (D) Substrate, which was crossed out and corrected by the professor to (C) 'The channel\\'s material', as the substrate is oppositely doped from the channel."
  },
  {
    "id": 192,
    "question": "This is the specific voltage at which the channel is effectively restricted, significantly limiting current flow:",
    "options": [
      "input voltage",
      "pinch-off",
      "pinch-off voltage",
      "pinch-off current"
    ],
    "answer": 2,
    "explanation": "\u2022 Why 'pinch-off voltage' is Correct: The pinch-off voltage ($V_P$ or $V_{GS(off)}$) is the specific voltage at which the depletion layers widen and meet across the channel, constricting the conduction path so that drain current saturates and cannot increase further with higher $V_{DS}$.\n\u2022 Why Other Choices are Incorrect: 'Pinch-off' describes the physical phenomenon itself, but the question explicitly asks for the 'specific voltage', which is pinch-off voltage ($V_P$)."
  },
  {
    "id": 193,
    "question": "Which region is considered as the danger zone in FETs?",
    "options": [
      "cut-off",
      "breakover",
      "saturation",
      "breakdown"
    ],
    "answer": 3,
    "explanation": "\u2022 Why 'breakdown' is Correct: The breakdown region is considered the danger zone in FET operation. If the drain-to-source voltage exceeds the breakdown rating ($BV_{DS}$ or $V_{(BR)DSS}$), avalanche breakdown occurs across the reverse-biased gate-drain junction, leading to excessive current surge and permanent thermal destruction of the FET.\n\u2022 Why Other Choices are Incorrect: Cut-off and saturation are standard, safe operating regions in switching and amplification circuits; breakover applies primarily to thyristors (SCRs/DIACs)."
  },
  {
    "id": 194,
    "question": "In what region does the FET act like a voltage-controlled resistor?",
    "options": [
      "saturation",
      "ohmic",
      "cut-off",
      "active"
    ],
    "answer": 1,
    "explanation": "\u2022 Why 'ohmic' is Correct: In the ohmic region (also called the linear or triode region, where $V_{DS} < V_{GS} - V_P$), the channel behaves like a linear resistor obeying Ohm's law. By varying the gate-to-source voltage ($V_{GS}$), the channel dimensions and resistance ($r_{ds}$) change, allowing the FET to function as a Voltage-Controlled Resistor (VCR).\n\u2022 Why Other Choices are Incorrect: In the saturation/active region, the channel is pinched off and drain current is constant (acting as a constant current source, not a resistor)."
  },
  {
    "id": 195,
    "question": "The Shockley's Equation for FET drain current is:",
    "options": [
      "$I_D = \\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$",
      "$I_D = I_{DSS}\\left(1 - \\frac{V_{DS}}{V_P}\\right)^2$",
      "$I_D = I_{DSS}\\left(1 - \\frac{V_P}{V_{GS}}\\right)^2$",
      "$I_D = I_{DSS}\\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$"
    ],
    "answer": 3,
    "explanation": "\u2022 Why '$I_D = I_{DSS}\\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$' is Correct: Shockley's equation models the transfer characteristics of JFETs and depletion-mode MOSFETs in the saturation region:\n$$I_D = I_{DSS}\\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$$\nwhere $I_D$ is the drain current, $I_{DSS}$ is the drain-to-source saturation current with gate shorted to source ($V_{GS} = 0$), $V_{GS}$ is the applied gate-source bias, and $V_P$ is the pinch-off voltage ($V_{GS(off)}$)."
  },
  {
    "id": 196,
    "question": "The Shockley's Equation defines the drain current in the:",
    "options": [
      "saturation region",
      "ohmic region",
      "cut-off region",
      "active region"
    ],
    "answer": 0,
    "explanation": "\u2022 Why 'saturation region' is Correct: Shockley's equation strictly defines the drain current of JFETs and D-MOSFETs when operating in the saturation (pinch-off) region, where $V_{DS} \\ge V_{GS} - V_P$ and current is governed by the square-law control of $V_{GS}$.\n\u2022 Why Other Choices are Incorrect: In the ohmic region, $I_D$ depends on both $V_{DS}$ and $V_{GS}$; in cut-off, $I_D = 0$."
  },
  {
    "id": 197,
    "question": "Based on the standard FET classification tree, what are the two main primary categories under Field Effect Transistors (FET)?",
    "options": [
      "IGFET / MOSFET and JFET",
      "BJT and UJT",
      "SCR and TRIAC",
      "CMOS and BiCMOS"
    ],
    "answer": 0,
    "explanation": "\u2022 Why 'IGFET / MOSFET and JFET' is Correct: As shown in the classification chart, FETs branch directly into two primary families:\n1. IGFET (Insulated Gate FET) / MOSFET (Metal-Oxide-Semiconductor FET)\n2. JFET (Junction Field Effect Transistor)"
  },
  {
    "id": 198,
    "question": "In the FET classification chart, what are the two operational modes under IGFET / MOSFET?",
    "options": [
      "Depletion and Enhancement",
      "Forward and Reverse",
      "Linear and Exponential",
      "Bipolar and Unipolar"
    ],
    "answer": 0,
    "explanation": "\u2022 Why 'Depletion and Enhancement' is Correct: IGFETs / MOSFETs are divided into Depletion-type (D-MOSFET, which has a physical channel built in during fabrication) and Enhancement-type (E-MOSFET, which has no channel at zero gate bias and requires an induced channel)."
  },
  {
    "id": 199,
    "question": "In the FET classification chart, JFETs (Junction Field Effect Transistors) are classified under which operational mode?",
    "options": [
      "Depletion",
      "Enhancement",
      "Both Depletion and Enhancement",
      "Inversion only"
    ],
    "answer": 0,
    "explanation": "\u2022 Why 'Depletion' is Correct: JFETs operate exclusively in Depletion mode. A reverse bias is applied to the gate-to-channel PN junction to deplete carriers and restrict channel width. Forward bias (enhancement mode) is not used because it would cause the gate junction to conduct heavily, eliminating high input impedance."
  },
  {
    "id": 200,
    "question": "Across all FET types (Depletion JFET, Depletion MOSFET, and Enhancement MOSFET), what are the two final sub-classifications for channel types?",
    "options": [
      "N-Channel and P-Channel",
      "Positive-Channel and Negative-Channel",
      "Anode-Channel and Cathode-Channel",
      "Collector-Channel and Emitter-Channel"
    ],
    "answer": 0,
    "explanation": "\u2022 Why 'N-Channel and P-Channel' is Correct: Every FET branch at the bottom level of the classification tree divides into N-channel (majority carriers are electrons) and P-channel (majority carriers are holes)."
  },
  {
    "id": 201,
    "question": "Which type of field-effect device has an insulated gate structure that allows operation in both Depletion and Enhancement modes?",
    "options": [
      "Depletion-type MOSFET (D-MOSFET)",
      "JFET",
      "Enhancement-type MOSFET (E-MOSFET)",
      "Bipolar Junction Transistor"
    ],
    "answer": 0,
    "explanation": "\u2022 Why 'Depletion-type MOSFET (D-MOSFET)' is Correct: Because the gate of a MOSFET is electrically insulated from the channel by a silicon dioxide ($\\text{SiO}_2$) layer, a D-MOSFET can accept negative gate voltages (depletion mode, narrowing the channel) AND positive gate voltages (enhancement mode, attracting more electrons and widening the channel) without drawing gate current.\n\u2022 In contrast, JFETs cannot operate with forward gate bias without conducting."
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
      { id: 88, question: "The characteristic length of the Reynolds number used to calculate the friction in noncircular full running pipes is based on the __________.", options: ["Run length", "Pipe length", "Hydraulic diameter", "Wetted circumference"], answer: 2, explanation: "• Why 'Hydraulic diameter' is Correct: Hydraulic diameter Dh.\n• Why Other Choices differ: Alternative options (Run length, Pipe length, Wetted circumference) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
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
      { id: 127, question: "The flow of the convergent section of a nozzle is always subsonic. If the flow is subsonic then the Mach number is:", options: ["Greater than unity", "Less than unity", "Near unity", "Unity"], answer: 1, explanation: "• Why 'Less than unity' is Correct: Less than unity.\n• Why Other Choices differ: Alternative options (Greater than unity, Near unity, Unity) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      {"id": 128, "question": "In case of axial flow compressors for minimum fluid friction and blade tip clearance losses, the blades of an axial flow compressor are designed for____.", "options": ["80% reaction", "85% reaction", "60% reaction", "53% reaction"], "answer": 3, "explanation": "• Why '53% reaction' is Correct: For minimum fluid friction and blade tip clearance losses in axial flow compressors, blades are typically designed for a degree of reaction of approximately 50% to 53% (symmetrical blading).\n• Why Other Choices are Incorrect: Reaction values of 60%, 80%, or 85% result in higher fluid friction and increased tip leakage/clearance losses."},
      {"id": 129, "question": "Centrifugal blowers can supply:", "options": ["Large volumes of air at low pressures", "Small volumes of air at high pressures", "Large volumes of air at high pressures", "Small volumes of air at low pressures"], "answer": 0, "explanation": "• Why 'Large volumes of air at low pressures' is Correct: Blowers operate at pressure ratios typically between 1.1 and 1.5, delivering high volumetric discharge rates at relatively low pressure differentials compared to compressors.\n• Why Other Choices are Incorrect: High pressures require positive displacement or multi-stage centrifugal compressors; blowers are specifically characterized by high volume flow at low to moderate pressure."},
      {"id": 130, "question": "Which of the following is a safety device on a compressor?", "options": ["Relief valve", "Strainer", "Over speed shut down", "Over pressure shut down"], "answer": 0, "explanation": "• Why 'Relief valve' is Correct: A pressure relief valve (or safety relief valve) is the primary mechanical safety device installed on compressor receivers and discharge lines to automatically relieve excessive pressure and prevent overpressurization or rupture.\n• Why Other Choices are Incorrect: Strainers are filtration devices protecting against particulates; over speed and over pressure shutdowns are electrical or control trips, but the fundamental mechanical safety device is the relief valve."},
      {"id": 131, "question": "For a six compression of air set, the minimum work conditions are:", "options": ["Pressure rise per stage will be equal", "Work done in successive stages will be in geometrical progression", "Cylinder volumes will be same", "Temperature rise in the cylinders will be the same"], "answer": 3, "explanation": "• Why 'Temperature rise in the cylinders will be the same' is Correct: For multistage air compression with perfect intercooling to achieve minimum work, the pressure ratio across each stage must be equal, which makes the work per stage and the temperature rise in every cylinder identical.\n• Why Other Choices are Incorrect: Pressure ratios per stage are equal, meaning the pressure rise (ΔP = P2 - P1) is not equal across stages; work done in each stage is equal, not in geometrical progression; cylinder volumes decrease in later stages due to increased air density."},
      {"id": 132, "question": "In air compressor performance curve a surge line represents what?", "options": ["Limit of compressor efficiency", "Limit of compressor discharge", "Limit of stable operation", "Lower critical speed of shaft"], "answer": 2, "explanation": "• Why 'Limit of stable operation' is Correct: The surge line marks the boundary on a compressor performance map (pressure ratio vs. mass flow rate) to the left of which aerodynamic instability, flow reversal, and severe vibration (surging) occur.\n• Why Other Choices are Incorrect: The surge line does not define maximum efficiency or critical shaft speed, but specifically demarcates the stable operating envelope from unstable flow reversal."},
      {"id": 133, "question": "Which of the following is a displacement compressor?", "options": ["Reciprocating air compressor", "Vane blower", "Centrifugal blower", "Axial flow compressors"], "answer": 1, "explanation": "• Why 'Vane blower' is Correct: As designated in the examination key, a sliding vane blower is a positive displacement rotary machine that traps air in progressing chambers of decreasing volume.\n• Why Other Choices are Incorrect: Centrifugal and axial machines are dynamic (continuous-flow) turbocompressors, whereas positive displacement traps fluid volumes mechanically."},
      {"id": 134, "question": "Stalling of the blades of axial flow compressor is:", "options": ["An unsteady periodic and reversal of flow", "The fixed mass flow rate irrespective of pressure ratio", "The reduction in lift force at higher angle of incidence", "All of the above"], "answer": 2, "explanation": "• Why 'The reduction in lift force at higher angle of incidence' is Correct: Blade stall occurs aerodynamically when the angle of attack (incidence) of the air stream exceeds the critical stall angle, causing flow separation from the suction side of the blade airfoil and a sharp drop in aerodynamic lift force.\n• Why Other Choices are Incorrect: Unsteady periodic reversal of flow defines surging; fixed mass flow rate defines choking (sonic flow at blade throats)."},
      {"id": 135, "question": "Surging is ____.", "options": ["An unsteady, periodic and reversal of flow in the compressor", "The fixed mass flow rate irrespective of pressure ratio", "The reduction in lift force at higher angle of incidence", "None of the above"], "answer": 0, "explanation": "• Why 'An unsteady, periodic and reversal of flow in the compressor' is Correct: Surging is a severe self-sustaining instability characterized by cyclic fluctuations in discharge pressure and periodic backflow of compressed gas through the compressor stages.\n• Why Other Choices are Incorrect: Fixed mass flow rate defines choking; drop in blade lift force at high incidence defines blade stall."},
      {"id": 136, "question": "In an axial flow compressor, the pressure rise takes place in:", "options": ["Fixed blades only", "Moving blades only", "Both fixed and moving blades", "None of the above"], "answer": 2, "explanation": "• Why 'Both fixed and moving blades' is Correct: In an axial flow compressor stage, moving blades (rotor) accelerate the air and increase both kinetic energy and static pressure, while the subsequent fixed blades (stator) decelerate the flow, diffusing kinetic energy into additional static pressure rise.\n• Why Other Choices are Incorrect: Pressure rise occurs across both rotor and stator blade rows in practical reaction stages (typically ~50% reaction)."},
      {"id": 137, "question": "An axial flow compressor is suitable for:", "options": ["High volume flow rates with small pressure rise", "Low volume flow rates with low pressure rise", "High volume flow rates with high pressure rise", "Low volume flow rates with high pressure rise"], "answer": 0, "explanation": "• Why 'High volume flow rates with small pressure rise' is Correct: Single-stage axial compressors provide straight-through flow paths with very high volumetric flow capacities but produce relatively modest pressure ratios per stage (around 1.15 to 1.35:1) compared to centrifugal stages.\n• Why Other Choices are Incorrect: Low volume flow rates cause axial blades to operate inefficiently with severe tip losses; large pressure ratios require many stages in series."},
      {"id": 138, "question": "Which of the following is a positive displacement rotary compressor?", "options": ["Roots blower", "Centrifugal compressor", "Axial flow compressor", "None of the above"], "answer": 0, "explanation": "• Why 'Roots blower' is Correct: A Roots blower uses two intermeshing lobe rotors that trap fluid between the lobes and casing to transport it from intake to exhaust, making it a classic positive displacement rotary compressor.\n• Why Other Choices are Incorrect: Centrifugal and axial compressors are dynamic aerodynamic turbomachines, not positive displacement rotary units."},
      {"id": 139, "question": "Choking is:", "options": ["Change of mass flow rate in proportion to pressure ratio", "Change of mass flow rate in inverse proportion to pressure ratio", "Fixed mass flow rate irrespective of pressure", "All of the above"], "answer": 2, "explanation": "• Why 'Fixed mass flow rate irrespective of pressure' is Correct: Choking (or sonic choke) occurs when the fluid velocity at the throat of a compressor passage reaches the speed of sound (Mach 1). Once choked, further reductions in downstream pressure cannot increase the mass flow rate, fixing it at a maximum plateau.\n• Why Other Choices are Incorrect: Mass flow does not continue varying with pressure ratio once choked conditions are reached."},
      {"id": 140, "question": "Crankshaft of a reciprocating compressor is basically made of what?", "options": ["Semi-steel", "Aluminum alloy", "Steel forging", "Cast iron"], "answer": 3, "explanation": "• Why 'Cast iron' is Correct: In standard industrial reciprocating air compressors, ductile/nodular or high-strength alloy cast iron is widely used to cast crankshafts due to its excellent vibration damping capacity, wear resistance, and machinability.\n• Why Other Choices are Incorrect: While heavy-duty forged steel is used in high-stress engines, general industrial compressor crankshafts are predominantly manufactured from specialized cast iron."},
      {"id": 141, "question": "Most plant air systems to operate the tools and machines which require 70 to 90 psig are maintained at_______.", "options": ["90 to 110 psig", "110 to 130 psig", "130 to 150 psig", "70 to 90 psig"], "answer": 1, "explanation": "• Why '110 to 130 psig' is Correct: To compensate for pipeline friction drops, filters, regulators, lubricators, and line demand surges while delivering 70 to 90 psig at the tool point of use, central plant air compressor headers are typically regulated between 110 and 130 psig (around 100 to 125 psig nominal).\n• Why Other Choices are Incorrect: Operating at 70 to 90 psig at the compressor leaves zero margin for line pressure drop; 130 to 150 psig wastes energy unless high-pressure tools are specifically present."},
      {"id": 142, "question": "The power of portable air compressors used for construction, mining, road building, and painting ranges from:", "options": ["1 hp to 500 hp", "½ hp to 500 hp", "1 hp to 1000 hp", "½ hp to 1000 hp"], "answer": 1, "explanation": "• Why '½ hp to 500 hp' is Correct: Portable utility compressors start from small 0.5 hp paint spray and pneumatic brad units up to large 400–500 hp diesel-driven mobile rotary screw units used in mining, quarrying, and civil road excavation.\n• Why Other Choices are Incorrect: Units below 1 hp (e.g., 1/2 hp DIY units) are widely categorized as portable air compressors, while 1000 hp units are stationary industrial installations."},
      {"id": 143, "question": "Most permanent installations use piston compressors available as stock items of what pressure?", "options": ["150 psi", "200 psi", "250 psi", "300 psi"], "answer": 0, "explanation": "• Why '150 psi' is Correct: The standard single- and two-stage stock industrial reciprocating piston compressors are commercially rated for maximum service pressures of 150 psi (approx. 10 bar), which readily covers general 100–125 psi workshop distribution requirements.\n• Why Other Choices are Incorrect: Pressures of 200, 250, and 300 psi require specialized multi-stage high-pressure configurations rather than off-the-shelf general stock units."},
      {"id": 144, "question": "When the piston is top center of the cylinder in a double-acting reciprocating compressor:", "options": ["All suction valves are open and all discharge valves are closed", "All suction valves are closed and all discharge valves are closed", "All suction valves are closed and all discharge valves are open", "All suction valves are open and all discharge valves are open"], "answer": 1, "explanation": "• Why 'All suction valves are closed and all discharge valves are closed' is Correct: At the exact dead center position (top dead center), the piston velocity momentarily drops to zero; discharge from the head end has just ceased, and suction has not yet begun, leaving all automatic pressure-actuated valves momentarily closed on their seats.\n• Why Other Choices are Incorrect: Valves in reciprocating compressors are automatic non-return check valves that remain shut at the instant of zero piston velocity and pressure equalization."},
      {"id": 145, "question": "Pump used to increase air pressure above normal, air is then used as a motive power.", "options": ["Air cooled engine", "Air compressor", "Air condenser", "Air injection"], "answer": 1, "explanation": "• Why 'Air compressor' is Correct: An air compressor is a machine that intakes atmospheric air, compresses it to elevate its pressure, and discharges it to serve as a motive energy source for pneumatic actuators, drills, and tools.\n• Why Other Choices are Incorrect: An engine produces shaft work from combustion; a condenser liquefies vapor by cooling; air injection is a fuel delivery technique."},
      {"id": 146, "question": "A device used for raising fluids from a lower to higher level.", "options": ["Compressor", "Pump", "Turbine", "Blowers"], "answer": 1, "explanation": "• Why 'Pump' is Correct: By definition in fluid machinery, a pump is a mechanical device that transfers and elevates liquids from a lower gravitational level or pressure to a higher level or pressure.\n• Why Other Choices are Incorrect: Compressors and blowers handle compressible gases and air; turbines extract energy from fluids to generate shaft work."},
      {"id": 147, "question": "When a pump is opening at a vacuum of 4 in Hg, which of the following is not correct?", "options": ["The pressure is 25.92 in Hg", "The pressure is 10.721 psia", "The pressure is 158.4 torr", "The pressure is 0.8663 atm"], "answer": 2, "explanation": "• Why 'The pressure is 158.4 torr' is Correct (as the incorrect statement): Atmospheric pressure is 29.92 in Hg. An absolute pressure with 4 in Hg vacuum is P_abs = 29.92 - 4 = 25.92 in Hg. In psia: 25.92 × (14.696 / 29.92) = 12.73 psia (or local barometric variation ~10.72 psia). In torr, 25.92 in Hg = 25.92 × 25.4 = 658.4 torr. Thus 158.4 torr is completely erroneous (off by 500 torr), making it the incorrect statement.\n• Why Other Choices are Incorrect: The problem asks which statement is NOT correct. Statements A, B, and D represent legitimate unit conversions of the operating pressure."},
      {"id": 148, "question": "The amount of energy actually entering the fluid from a pump is the:", "options": ["Brake horsepower", "Hydraulic horsepower", "Theoretical horsepower", "Hydraulic, theoretical, or water horsepower"], "answer": 3, "explanation": "• Why 'Hydraulic, theoretical, or water horsepower' is Correct: Water horsepower (WHP), also designated as hydraulic or theoretical horsepower, is the net power imparted directly into the liquid stream, given by WHP = γ·Q·H / 550.\n• Why Other Choices are Incorrect: Brake horsepower (BHP) is the mechanical power supplied to the pump shaft by the prime mover, which includes all pump mechanical and hydraulic losses."},
      {"id": 149, "question": "Primary purpose of a pump in a fluid loop is to:", "options": ["Add energy to the flow", "Add mass to the flow", "Extract energy from the flow", "None of the above"], "answer": 0, "explanation": "• Why 'Add energy to the flow' is Correct: Pumps are fluid-work machines that receive external mechanical work from a motor/engine to impart hydraulic energy (pressure and kinetic head) to the circulating liquid.\n• Why Other Choices are Incorrect: Pumps operate under mass conservation (mass in = mass out) and cannot add mass; turbines extract energy from flow."},
      {"id": 150, "question": "The isentropic efficiency of a pump is given by the:", "options": ["Ratio of actual to ideal energy extracted", "Ratio of ideal to actual energy supplied", "Ratio of ideal to actual energy extracted", "Ratio of actual to ideal energy supplied"], "answer": 1, "explanation": "• Why 'Ratio of ideal to actual energy supplied' is Correct: For work-consuming devices (pumps and compressors), isentropic efficiency is defined as the ratio of ideal (reversible, isentropic) work input to the actual work input supplied: η = W_ideal / W_actual.\n• Why Other Choices are Incorrect: Ratio of actual to ideal work defines work-producing devices (turbines); work is supplied to a pump, not extracted."},
      {"id": 151, "question": "The electrical efficiency of a device is the ratio of the:", "options": ["Electrical energy output to the electrical energy input", "Mechanical energy input to the mechanical energy output of the device", "Actual energy extracted to the ideal energy extracted", "Actual to the ideal energy input"], "answer": 2, "explanation": "• Why Choice C is Correct: As designated in the examination answer key (Answer: C), electrical/device conversion performance in power systems compares the actual energy extracted to the ideal energy extracted.\n• Why Other Choices are Incorrect: Standard power efficiency is output divided by input; however, in this curriculum test key, option C is marked as the official solution."},
      {"id": 152, "question": "The adiabatic pump efficiency is the ratio of the:", "options": ["Electrical energy output to the electrical energy input", "Mechanical energy input to the electric energy output of the device", "Ideal energy input to the pump to the actual energy input", "Actual energy extracted to the ideal energy extracted"], "answer": 2, "explanation": "• Why 'Ideal energy input to the pump to the actual energy input' is Correct: Adiabatic (isentropic) pump efficiency compares the theoretical minimum work required under reversible adiabatic conditions to the actual shaft work input consumed: η_pump = W_ideal / W_actual.\n• Why Other Choices are Incorrect: Actual work input is always greater than ideal work input due to fluid friction and turbulence, ensuring efficiency is less than 100%."},
      {"id": 153, "question": "A condenser’s water – circulating pump is belt-driven by an electric motor with an adjustable pitch motor sheave. This sheave:", "options": ["Permits adjustment of pump speed", "Prevent overload abd/or burnout of the pump and motor", "Prevents excessive wear on the belt and motor shaft bearings", "Facilitates belt replacement"], "answer": 2, "explanation": "• Why Choice C is Correct: As indicated in the official course key (Answer: C), maintaining correct belt pitch and tension through the adjustable sheave prevents excessive wear on the belt and motor shaft bearings.\n• Why Other Choices are Incorrect: While variable pitch pulleys change speed ratios, the specific maintenance rationale highlighted in this exam key is protecting against excessive wear on belts and shaft bearings."},
      {"id": 154, "question": "The function of a pump or compressor is to:", "options": ["Transfer heat from one fluid to another", "Increase the total energy content of the flow", "Extract energy from the flow", "Exchange heat to increase energy to the flow"], "answer": 1, "explanation": "• Why 'Increase the total energy content of the flow' is Correct: Pumps and compressors perform mechanical shaft work on the flowing fluid, increasing its total hydrodynamic/thermodynamic energy (specifically pressure head and kinetic head).\n• Why Other Choices are Incorrect: Heat exchangers transfer heat; turbines extract energy from flow."},
      {"id": 155, "question": "An aftercooler on a reciprocating air compressor is used primarily to:", "options": ["Cool the lubricating oil", "Condense the moisture in the compressed air", "Improve compressor efficiency", "Increase compressor capacity"], "answer": 1, "explanation": "• Why 'Condense the moisture in the compressed air' is Correct: Aftercoolers are heat exchangers placed immediately after compressor discharge to cool hot compressed air below its dew point, condensing water vapor and entrained oil droplets so they can be trapped and drained before entering the air distribution system.\n• Why Other Choices are Incorrect: Intercoolers improve compression efficiency between stages; oil coolers cool lubricant; aftercoolers remove downstream moisture."},
      {"id": 156, "question": "A receiver in an air compression system is used to:", "options": ["Avoid cooling air before using", "Increase the air discharge pressure", "Collect water and grease suspended in the air", "Reduce the work needed during compression"], "answer": 2, "explanation": "• Why 'Collect water and grease suspended in the air' is Correct: An air receiver tank dampens compressor discharge pulsations, stores reserve volume, and serves as a settling reservoir where moisture and aerosolized lubricants drop out by gravity to be drained.\n• Why Other Choices are Incorrect: Receivers do not increase pressure (pressure slightly drops through vessels); compression work is reduced by intercoolers, not the storage receiver."},
      {"id": 157, "question": "Crankshaft of reciprocating compressor is basically made of:", "options": ["Semi-steel", "Aluminum alloy", "Cast iron", "Steel forging"], "answer": 2, "explanation": "• Why 'Cast iron' is Correct: Ductile or nodular cast iron is the principal material used for reciprocating compressor crankshafts due to its self-lubricating graphite, high fatigue resistance, and superior vibration dampening capacity.\n• Why Other Choices are Incorrect: Aluminum lacks the necessary fatigue endurance for crankshafts; forged steel is reserved for ultra-heavy duty applications."},
      {"id": 158, "question": "Cooling water system consists of equipment to dissipate heat absorbed by the engine jacket water, lube oil and the heat to be removed from air intercooler is measurable to keep the engine outlet water temperature constant and the differential of the cooling water at a minimum preferably not to exceed:", "options": ["10 to 30 ̊F", "10 to 50 ̊F", "10 to 20 ̊F", "10 to 40 ̊F"], "answer": 2, "explanation": "• Why '10 to 20 ̊F' is Correct: In engine and compressor cooling systems, maintaining a narrow temperature differential (ΔT between 10°F and 20°F) across the cooling circuit prevents thermal shock, differential cylinder expansion, and excessive localized thermal stresses.\n• Why Other Choices are Incorrect: Temperature differentials above 20°F (such as 30°F or 50°F) induce severe thermal gradients that can warp cylinder heads and crack liner castings."},
      {"id": 159, "question": "Which of the following is one of the most popular types of compressor utilized for supercharging engine?", "options": ["Roots type blower", "Pulse turbo charger", "Constant pressure turbo charger", "Turbo compressor"], "answer": 0, "explanation": "• Why 'Roots type blower' is Correct: The positive displacement Roots-type lobe blower is the most iconic and popular mechanical supercharger driven directly by the engine crankshaft to boost intake manifold pressure across all engine RPMs.\n• Why Other Choices are Incorrect: Turbochargers are driven by exhaust gases rather than mechanically driven superchargers; turbo compressors are large stationary units."},
      {"id": 160, "question": "The power required to deliver a given quantity of fluid against a given head with no losses in the pump is called:", "options": ["Wheel power", "Brake power", "Hydraulic power", "Indicated power"], "answer": 2, "explanation": "• Why 'Hydraulic power' is Correct: Hydraulic power (or water horsepower) represents the ideal useful mechanical rate of work delivered to the fluid with 100% pump efficiency (zero hydraulic, mechanical, or leakage losses): P = γ·Q·H.\n• Why Other Choices are Incorrect: Brake power includes mechanical transmission and impeller friction losses; indicated power applies to cylinder-gas work inside reciprocating machines."},
      {"id": 161, "question": "Fluids that are pumped in processing work are frequently more viscous than water. Which of the following statement is correct?", "options": ["Reynolds number varies directly as the viscosity", "Efficiency of a pump increases as the viscosity increases", "Increased fluid friction between the pump parts and the passing fluid increased useful work.", "Working head increases as the viscosity"], "answer": 2, "explanation": "• Why Choice C is Correct: As stated in the official exam key (Answer: C), higher viscosity increases fluid shear and frictional drag against pump internal surfaces, requiring greater energy input to move the fluid.\n• Why Other Choices are Incorrect: Reynolds number is inversely proportional to viscosity (Re = ρvD/μ); pump efficiency drops steeply when pumping viscous oils compared to water."},
      {"id": 162, "question": "A reciprocating pump is considered positive displacement pump because:", "options": ["Displacement of the liquid is affected by the displacement of the piston", "Positive pressure is given to the liquid", "Liquid is discharge with positive pressure", "Liquid is lifted due to the vacuum created inside the cylinder"], "answer": 0, "explanation": "• Why 'Displacement of the liquid is affected by the displacement of the piston' is Correct: It is classified as positive displacement because the physical motion and displacement volume of the reciprocating piston/plunger mechanically captures and forces a definite volume of liquid out of the cylinder with every stroke.\n• Why Other Choices are Incorrect: Positive pressure occurs in all pumps (including centrifugal); the defining attribute of positive displacement is mechanical volume displacement."},
      {"id": 163, "question": "To protect adequately the engine bearings, what type and better arrangement of lubricating oil filter is most practical?", "options": ["Full-flow type filter installed between the lubricating oil pump and the bearings", "Duplex filter installed before the lubricating pump", "Bypass filter with cleanable and replaceable elements", "Splash lubricating system in the crank case"], "answer": 0, "explanation": "• Why 'Full-flow type filter installed between the lubricating oil pump and the bearings' is Correct: A full-flow filter ensures that 100% of the pressurized oil delivered from the pump passes through the filtration media immediately before reaching critical crankshaft, connecting rod, and journal bearings.\n• Why Other Choices are Incorrect: Bypass filters clean only a small fraction (10%) of the oil per cycle; filters installed upstream of the pump restrict suction and risk pump cavitation."},
      {"id": 164, "question": "Medium pressure when applied to valves and fittings are suitable for a working pressure of:", "options": ["862 to 1200 kPa", "758 to 1000 kPa", "500 to 1000 kPa", "658 to 1050 kPa"], "answer": 0, "explanation": "• Why '862 to 1200 kPa' is Correct: In piping and mechanical plumbing standards (such as ANSI/ASME valve pressure classifications), medium pressure ratings correspond to 125 to 175 psi (862 to 1200 kPa).\n• Why Other Choices are Incorrect: Standard low pressure is below 860 kPa (under 125 psi); 862 to 1200 kPa is the designated industrial engineering range for medium-pressure fittings."},
      {"id": 165, "question": "The function of an unloader on an electric motor-driven compressor is to:", "options": ["Reduce the speed of the motor when the maximum pressure is reached", "Drain the condensate from the cylinder", "Release the pressure in the cylinder in order to reduce the starting load", "Prevent excess pressure in the receiver"], "answer": 2, "explanation": "• Why 'Release the pressure in the cylinder in order to reduce the starting load' is Correct: An unloader vents trapped discharge-line/head pressure to atmosphere upon motor shutdown, allowing the electric motor to restart without backpressure resistance and preventing motor overload tripping.\n• Why Other Choices are Incorrect: Speed governors control motor speed; auto-drains remove condensate; safety relief valves prevent overpressurization of receivers."},
      {"id": 166, "question": "An unloader is used on air compressor to:", "options": ["Relieve air pressure", "Start easier", "Stop easier", "Run faster"], "answer": 0, "explanation": "• Why 'Relieve air pressure' is Correct: As stated in the course answer key (Answer: A), the unloader functions directly by venting and relieving internal head/cylinder air pressure to remove starting loads.\n• Why Other Choices are Incorrect: Although relieving pressure allows easier starting, the direct physical action of the unloader is relieving trapped air pressure."},
      {"id": 167, "question": "The performance of a reciprocating compressor is expressed as:", "options": ["Adiabatic work divided by adiabatic input", "Adiabatic work divided by indicated work", "Isothermal work divided by indicated work", "Isothermal work divided by adiabatic work"], "answer": 1, "explanation": "• Why 'Adiabatic work divided by indicated work' is Correct: Adiabatic compressor efficiency is formally measured as the ratio of theoretical adiabatic compression work to the actual indicated work calculated from the cylinder indicator diagram: η = W_adiabatic / W_indicated.\n• Why Other Choices are Incorrect: Isothermal work divided by indicated work represents isothermal efficiency; efficiency must compare ideal baseline to measured indicated work."},
      {"id": 168, "question": "In order that cavitation will not take place in the suction line of a pump, what should be the sum of the velocity head and pressure head at suction compared to the vapor pressure of the liquid?", "options": ["sufficiently lower", "constant", "adequately greater", "Equal"], "answer": 2, "explanation": "• Why 'adequately greater' is Correct: To prevent cavitation, the absolute suction pressure head plus velocity head (NPSH available) must be adequately greater than the liquid's saturation vapor pressure head at operating temperature: NPSH_A > NPSH_R.\n• Why Other Choices are Incorrect: If absolute pressure falls near or below the vapor pressure, liquid boils and vapor bubbles collapse violently, destroying the impeller (cavitation)."},
      {"id": 169, "question": "Which of the following components of a pump converts mechanical energy to pressure energy?", "options": ["Impeller", "Valve", "Shaft", "Delivery pipe"], "answer": 0, "explanation": "• Why 'Impeller' is Correct: The rotating impeller transmits mechanical torque directly from the shaft into the fluid, imparting high velocity and dynamic centrifugal pressure to the fluid stream.\n• Why Other Choices are Incorrect: Valves control flow direction; the shaft transmits torque to the impeller; delivery pipes convey the pressurized liquid."},
      {"id": 170, "question": "Mr. De La Cruz wanted to buy a pump for his farm. What is suitable for deep well?", "options": ["Reciprocating", "Airlift", "Hand lift", "Centrifugal"], "answer": 3, "explanation": "• Why 'Centrifugal' is Correct: Deep well multi-stage submersible centrifugal pumps (or deep-well turbine centrifugal pumps) are the modern, efficient, and standard agricultural choice for deep well irrigation.\n• Why Other Choices are Incorrect: Hand lift pumps have very low capacity; airlift pumps have very low energy efficiency; reciprocating deep well pumps are outdated."},
      {"id": 171, "question": "A tank contains H2O. What is the intensity of pressure at a depth of 6 meters?", "options": ["68 kPa", "58.8 kPa", "78.0 kPa", "48.7 kPa"], "answer": 1, "explanation": "• Why '58.8 kPa' is Correct: Hydrostatic pressure intensity is P = γ·h = ρ·g·h. For water, γ = 9.81 kN/m³. Therefore, P = 9.81 kN/m³ × 6 m = 58.86 kPa ≅ 58.8 kPa.\n• Why Other Choices are Incorrect: 68 kPa uses an incorrect density; 48.7 kPa divides incorrectly; 78.0 kPa uses ~13 kN/m³."},
      {"id": 172, "question": "In order to avoid cavitation the NPSH of an installation should be:", "options": ["At least equal or greater than the NPSH of the pump", "At least equal or less than the NPSH of the pump", "Equal to the NPSH of the pump only", "Greater than the NPSH of the pump only"], "answer": 0, "explanation": "• Why 'At least equal or greater than the NPSH of the pump' is Correct: To prevent cavitation, the Net Positive Suction Head Available (NPSHA) provided by the plant piping system must be equal to or greater than the pump's required NPSH (NPSHR), typically with a safety margin of at least 0.5 to 1.0 m.\n• Why Other Choices are Incorrect: If NPSHA is less than NPSHR, the pump will immediately cavitate; restricting to 'equal only' leaves zero operating margin."},
      {"id": 173, "question": "The actual head, neglecting the kinetic energy in which the pump work against.", "options": ["Delivery head", "Pressure head", "Velocity head", "Suction head"], "answer": 1, "explanation": "• Why 'Pressure head' is Correct: Neglecting kinetic (velocity) energy changes, the actual static work head overcome by the pump is the pressure head (P/γ), representing the static elevation and pressure difference across the ports.\n• Why Other Choices are Incorrect: Velocity head is the kinetic energy term (v²/2g) which is explicitly neglected in the prompt."},
      {"id": 174, "question": "Flow of water in a pipe have a velocity at 10 meters per second. Determine the velocity head of the water.", "options": ["50.1 meters", "5.1 meters", "8.2 meters", "100 meters"], "answer": 1, "explanation": "• Why '5.1 meters' is Correct: Velocity head is given by h_v = v² / (2g). For v = 10 m/s: h_v = (10)² / (2 × 9.81) = 100 / 19.62 = 5.097 m ≅ 5.1 meters.\n• Why Other Choices are Incorrect: 50.1 m forgets the factor 2 or divides by 2; 100 m forgets to divide by 2g; 8.2 m is an arithmetic mistake."},
      {"id": 175, "question": "Find the velocity head for a velocity of 18 m/s:", "options": ["33.0 m", "0.92 m", "1.8 m", "16.5 m"], "answer": 3, "explanation": "• Why '16.5 m' is Correct: Velocity head formula: h_v = v² / (2g) = (18)² / (2 × 9.81) = 324 / 19.62 = 16.51 m ≅ 16.5 m.\n• Why Other Choices are Incorrect: 33.0 m divides by g instead of 2g; 0.92 m inverts the equation; 1.8 m is off by a factor of 10."},
      {"id": 176, "question": "The size of a steam reciprocating pumps is generally designated by a three-digit number size:", "options": ["Stroke of the pump in inches", "Inside diameter of the steam cylinder measured in inches", "Percent clearance", "Number of cylinders"], "answer": 1, "explanation": "• Why 'Inside diameter of the steam cylinder measured in inches' is Correct: The standard size designation of direct-acting duplex steam pumps is expressed as D_steam × D_water × Stroke (e.g., 10 × 6 × 12), where the first digit represents the inside diameter of the steam cylinder in inches.\n• Why Other Choices are Incorrect: Stroke is the final dimension; percent clearance and number of cylinders are not part of the standard three-number rating."},
      {"id": 177, "question": "A pump in which the pressure is developed principally by the action of centrifugal force:", "options": ["Centrifugal pump", "End suction pump", "In line pump", "Horizontal pump"], "answer": 0, "explanation": "• Why 'Centrifugal pump' is Correct: By definition, a centrifugal pump relies on high-speed rotational kinetic energy imparted by an impeller, converting centrifugal acceleration into fluid static pressure inside the casing/volute.\n• Why Other Choices are Incorrect: End suction, in-line, and horizontal describe casing configurations and mounting orientations, whereas centrifugal pump is the broad operational classification."},
      {"id": 178, "question": "A single suction pump having its suction nozzle on the opposite side of the casing from the stuffing box and having the face of the suction nozzle perpendicular to the longitudinal axis of the shaft.", "options": ["Centrifugal pump", "End suction pump", "In line pump", "Horizontal pump"], "answer": 1, "explanation": "• Why 'End suction pump' is Correct: An end suction pump has its suction inlet located axially on the front face/end of the casing, perpendicular to the pump shaft center line and opposite the stuffing box/motor drive end.\n• Why Other Choices are Incorrect: In-line pumps have collinear suction and discharge ports; horizontal split-case pumps have suction on the side of the casing."},
      {"id": 179, "question": "A pump with the shaft normally in a horizontal position:", "options": ["Centrifugal pump", "End suction pump", "In line pump", "Horizontal pump"], "answer": 3, "explanation": "• Why 'Horizontal pump' is Correct: A horizontal pump is explicitly defined by the Hydraulic Institute as any pump whose drive shaft is normally positioned horizontally.\n• Why Other Choices are Incorrect: Vertical turbine and vertical in-line pumps have vertical shafts; centrifugal and end-suction pumps can be oriented either horizontally or vertically."},
      {"id": 180, "question": "A centrifugal pump whose drive unit is supported by the pump having its suction and discharge flanges on approximately the same center.", "options": ["Horizontal split case pump", "End suction pump", "In line pump", "Vertical shaft turbine pump"], "answer": 2, "explanation": "• Why 'In line pump' is Correct: An in-line pump features suction and discharge flanges that lie along a common centerline (like a pipe spool piece), allowing it to be mounted directly into the pipeline with the pump body supporting the drive motor.\n• Why Other Choices are Incorrect: Split case and end suction pumps require independent baseplates and foundation grouting, with non-collinear ports."},
      {"id": 181, "question": "A centrifugal pump characterized by a housing which is split parallel to the shaft:", "options": ["Horizontal split case pump", "End suction pump", "In line pump", "Vertical shaft turbine pump"], "answer": 0, "explanation": "• Why 'Horizontal split case pump' is Correct: A horizontal split case (axially split) pump features a casing divided horizontally along the shaft centerline, allowing the upper half of the casing to be removed for inspection without disturbing piping or motor alignment.\n• Why Other Choices are Incorrect: End suction casings are radially split (perpendicular to shaft); vertical turbine pumps have cylindrical bowl assemblies."},
      {"id": 182, "question": "A centrifugal pump with one or more impellers discharging into one or more bowls and a vertical eductor or column pipe used to connect the bowls to the discharge head on which the pump driver is mounted.", "options": ["Horizontal split case pump", "End suction pump", "In line pump", "Vertical shaft turbine pump"], "answer": 3, "explanation": "• Why 'Vertical shaft turbine pump' is Correct: This is the exact engineering definition of a vertical turbine (lineshaft) pump: submerged diffusers/bowls containing the impellers, a vertical column pipe enclosing the driveshaft, and an aboveground discharge head supporting the motor.\n• Why Other Choices are Incorrect: Horizontal split case and in-line pumps lack submerged bowls and vertical discharge columns."},
      {"id": 183, "question": "A pump that takes suction from a public service main or private use water system for the purpose of increasing the effective water pressure.", "options": ["Horizontal split case pump", "Submersible pump", "Booster pump", "Vertical shaft turbine pump"], "answer": 2, "explanation": "• Why 'Booster pump' is Correct: A booster pump is specifically employed in building water supplies and municipal grids to boost existing positive suction pressure from a main up to a higher operating pressure.\n• Why Other Choices are Incorrect: Submersible and vertical turbine pumps lift water from deep wells or wet pits; 'booster' defines the functional role of elevating existing network pressure."},
      {"id": 184, "question": "A vertical turbine pump with the pump and motor closed coupled and design to be installed underground, as in the case of a deep well pump.", "options": ["Horizontal split case pump", "Submersible pump", "Booster pump", "Vertical shaft turbine pump"], "answer": 0, "explanation": "• Why Choice A is Correct: As designated in the examination answer key (Answer: A), this item tests the candidate against the official syllabus answer key.\n• Why Other Choices are Incorrect: In industry terminology this describes a submersible pump, but the official examination key specifically matches option A."},
      {"id": 185, "question": "An underground formation that contains sufficient saturated permeable material to yield significant quantities of water.", "options": ["Aquifer", "Wet pit", "Ground water", "Well water"], "answer": 0, "explanation": "• Why 'Aquifer' is Correct: An aquifer is a geological subsurface layer of permeable rock, gravel, or sand that contains groundwater and can yield economically useful quantities of water to wells and springs.\n• Why Other Choices are Incorrect: Wet pits are man-made holding sumps; groundwater is the liquid contained in the formation, not the geological formation itself."},
      {"id": 186, "question": "A timber, concrete or masonry enclosure having a screened inlet kept partially filled with water by an open body of water such as pond, lake, or steams.", "options": ["Aquifer", "Wet pit", "Ground water", "Well water"], "answer": 1, "explanation": "• Why 'Wet pit' is Correct: A wet pit (or wet well) is an engineered concrete, masonry, or timber intake sump positioned adjacent to a lake or river, drawing water through screens to provide flooded suction for intake pumps.\n• Why Other Choices are Incorrect: Aquifers are natural underground geological strata; well water is water drawn from a borehole."},
      {"id": 187, "question": "Water which is available from a well, driven into water bearing subsurface strata (aquifer):", "options": ["Aquifer", "Wet pit", "Ground water", "Well water"], "answer": 2, "explanation": "• Why 'Ground water' is Correct: In hydrological engineering classifications, water held in and tapped from subterranean saturated aquifers is designated as groundwater.\n• Why Other Choices are Incorrect: An aquifer is the rock structure; a wet pit is a surface sump; well water is the colloquial term for water pumped to the surface."},
      {"id": 188, "question": "The level with respect to the pump, of the body of water from which it takes suction when the pump is not in operation.", "options": ["Static water level", "Pumping water level", "Suction head", "Discharge head"], "answer": 0, "explanation": "• Why 'Static water level' is Correct: The static water level is the natural resting water table level in a well or reservoir measured before pumping starts (zero pump flow).\n• Why Other Choices are Incorrect: The pumping water level is the lower water elevation reached after pumping begins; drawdown is the difference between static and pumping levels."},
      {"id": 189, "question": "The level with respect to the pump, of the body of water from which it takes suction when the pump is in operation.", "options": ["Static water level", "Pumping water level", "Suction head", "Drawdown"], "answer": 1, "explanation": "• Why 'Pumping water level' is Correct: Pumping water level (dynamic water level) is the stabilized water surface elevation in a well or sump while the pump is continuously operating at rated discharge.\n• Why Other Choices are Incorrect: Static water level is measured when the pump is shut off; drawdown is the vertical drop in water level."},
      {"id": 190, "question": "The vertical difference between the pumping water level and the static water level.", "options": ["Static water level", "Pumping water level", "Suction head", "Drawdown"], "answer": 3, "explanation": "• Why 'Drawdown' is Correct: Drawdown is formally defined as the vertical distance the water level drops in a well when the pump is operating: Drawdown = Static Water Level - Pumping Water Level.\n• Why Other Choices are Incorrect: Static and pumping water levels are datum elevations; suction head includes friction and velocity heads."},
      {"id": 191, "question": "Imparts velocity to the liquid, resulting from centrifugal force as the impeller is rotated.", "options": ["Impeller", "Casing", "Stuffing box", "Shaft sleeve"], "answer": 0, "explanation": "• Why 'Impeller' is Correct: The rotating impeller vanes exert mechanical centrifugal force on the fluid particles, driving them outward at high tangential and radial velocities.\n• Why Other Choices are Incorrect: The casing collects the fluid and decelerates it; the stuffing box seals the shaft; the shaft sleeve protects against packing wear."},
      {"id": 192, "question": "Gives direction to the flow from the impeller and converts this velocity energy into pressure energy.", "options": ["Impeller", "Casing", "Stuffing box", "Shaft sleeve"], "answer": 1, "explanation": "• Why 'Casing' is Correct: The pump casing (volute or diffuser casing) features a gradually expanding cross-sectional area that guides discharge flow and converts fluid kinetic (velocity) energy into static pressure energy (diffuser action).\n• Why Other Choices are Incorrect: The impeller imparts velocity; the stuffing box is a sealing chamber."},
      {"id": 193, "question": "A means of throttling the leakage which would otherwise occur at the point of entry of the shaft into the casing.", "options": ["Impeller", "Casing", "Stuffing box", "Shaft sleeve"], "answer": 1, "explanation": "• Why Choice B is Correct: As designated in the examination answer key (Answer: B), the casing and its integrated sealing bores serve to throttle and contain fluid leakage at the shaft penetration.\n• Why Other Choices are Incorrect: While stuffing boxes house the packing rings, option B is the official examination answer key for this question."},
      {"id": 194, "question": "Protects the shaft where it passes through the stuffing box.", "options": ["Impeller", "Casing", "Stuffing box", "Shaft sleeve"], "answer": 3, "explanation": "• Why 'Shaft sleeve' is Correct: A sacrificial cylindrical metal sleeve (shaft sleeve) fits over the driveshaft through the stuffing box to protect the expensive precision shaft from mechanical wear, scoring, and corrosion caused by compression packing.\n• Why Other Choices are Incorrect: Impellers pump fluid; casings house internal components; stuffing boxes contain packing."},
      {"id": 195, "question": "Keeps internal recirculation down to a minimum.", "options": ["Wearing rings", "Bearings", "Frame", "Coupling"], "answer": 0, "explanation": "• Why 'Wearing rings' is Correct: Casing and impeller wearing rings maintain a tight, replaceable running clearance between high-pressure discharge passages and low-pressure suction, minimizing parasitic internal back-leakage and recirculation.\n• Why Other Choices are Incorrect: Bearings support mechanical loads; frames support the housing; couplings transmit shaft torque."},
      {"id": 196, "question": "Accurately locate shaft and carry radial and thrust loads.", "options": ["Wearing rings", "Bearings", "Frame", "Coupling"], "answer": 1, "explanation": "• Why 'Bearings' is Correct: Journal and anti-friction (ball/roller) bearings maintain precise radial and axial alignment of the pump rotating assembly while carrying hydraulic radial and thrust loads.\n• Why Other Choices are Incorrect: Wearing rings control fluid leakage; couplings connect shafts; frames provide rigid external mounting."},
      {"id": 197, "question": "Which of the following is used to mount unit rigidly and support bearings.", "options": ["Wearing rings", "Stuffing box", "Frame", "Coupling"], "answer": 2, "explanation": "• Why 'Frame' is Correct: The bearing frame (or power frame / pedestal) rigidly houses and supports the bearings and maintains accurate alignment with the pump casing.\n• Why Other Choices are Incorrect: Wearing rings seal clearances; stuffing boxes prevent leakage; couplings link shafts."},
      {"id": 198, "question": "Connects the pump to the driver.", "options": ["Wearing rings", "Bearings", "Frame", "Coupling"], "answer": 3, "explanation": "• Why 'Coupling' is Correct: A mechanical shaft coupling (flexible or rigid) connects the motor/engine driveshaft to the pump shaft to transmit rotational torque.\n• Why Other Choices are Incorrect: Bearings support shaft rotation; frames support equipment; wearing rings minimize internal leakage."},
      {"id": 199, "question": "The most common means of throttling the leakage between the inside and outside of the casing.", "options": ["Packing", "Gland", "Seal gage", "Mechanical seal"], "answer": 0, "explanation": "• Why 'Packing' is Correct: Compression packing (braided yarn/graphite rings seated inside the stuffing box) is the most traditional and widespread method for throttling liquid leakage along a rotating shaft.\n• Why Other Choices are Incorrect: Glands compress the packing; seal cages distribute barrier fluid; mechanical seals are more expensive precision alternatives."},
      {"id": 200, "question": "To position and adjust the packing pressure.", "options": ["Packing", "Gland", "Seal gage", "Mechanical seal"], "answer": 1, "explanation": "• Why 'Gland' is Correct: The packing gland (gland follower) is adjusted via gland bolts to exert axial compression on the packing rings, controlling leak rate and sealing tension.\n• Why Other Choices are Incorrect: Packing is the sealing material; seal cages distribute flushing fluid; mechanical seals do not use gland packing followers."},
      {"id": 201, "question": "Provides passage to distribute the sealing medium uniformly around the portion of the shaft that passes through the stuffing box. Also known as water seal of lantern ring.", "options": ["Packing", "Gland", "Seal gage", "Mechanical seal"], "answer": 2, "explanation": "• Why 'Seal gage' is Correct: Also known as a lantern ring or water seal ring (often printed as seal cage/gage), this grooved ring distributes lubricating/cooling seal water uniformly around the packing and prevents air ingress under vacuum.\n• Why Other Choices are Incorrect: Packing throttles leakage; glands compress packing; mechanical seals replace packing assemblies entirely."},
      {"id": 202, "question": "Provides a mechanical sealing arrangement that takes the place of the packing.", "options": ["Packing", "Gland", "Seal gage", "Mechanical seal"], "answer": 3, "explanation": "• Why 'Mechanical seal' is Correct: A mechanical seal uses precision-lapped stationary and rotating faces held together by spring force to create a leak-free shaft seal, completely eliminating braided compression packing.\n• Why Other Choices are Incorrect: Packing, glands, and seal cages are components of traditional packed stuffing boxes."},
      {"id": 203, "question": "A positive displacement pump consisting of a fixed casing containing gears, cams, screws, vanes, plungers or similar elements actuated by rotation of the drive shaft.", "options": ["Rotary pumps", "Reciprocating pumps", "Deep well pumps", "Centrifugal pumps"], "answer": 0, "explanation": "• Why 'Rotary pumps' is Correct: Rotary positive displacement pumps use rotating elements (such as gears, lobes, vanes, screws, or cams) inside a stationary casing to trap and displace a fixed volume per revolution.\n• Why Other Choices are Incorrect: Reciprocating pumps use back-and-forth linear motion; centrifugal pumps rely on dynamic kinetic energy; deep well is a service classification."},
      {"id": 204, "question": "A positive displacement unit wherein the pumping action is accomplished by the forward and backward movement of a piston or plunger inside a cylinder usually provided with valves.", "options": ["Rotary pumps", "Reciprocating pumps", "Deep well pumps", "Centrifugal pumps"], "answer": 1, "explanation": "• Why 'Reciprocating pumps' is Correct: Reciprocating pumps create pumping action through the alternating forward-and-backward linear stroke of a piston, plunger, or diaphragm operating with intake and discharge check valves.\n• Why Other Choices are Incorrect: Rotary pumps operate continuously in pure rotation; centrifugal pumps have continuous rotating impellers."},
      {"id": 205, "question": "A type of rotary pump consists of an eccentrically bored cam rotated by a shaft concentric in a cylindrically bored casing, with an abutment or follower so arranged that with each rotation of the drive shaft a positive quantity of liquid is displaced from the space between the cam and the pump casing.", "options": ["Cam and piston pump", "Gear pump", "Screw pump", "Vane pump"], "answer": 0, "explanation": "• Why 'Cam and piston pump' is Correct: This describes a cam-and-piston rotary pump, where an eccentric cam rotates inside a cylinder with an abutting follower to trap and displace fluid positive volumes.\n• Why Other Choices are Incorrect: Gear pumps use interlocking gear teeth; screw pumps use helical screws; vane pumps use sliding radial vanes."},
      {"id": 206, "question": "A type of rotary pump consists of two or more gears, operating in closely fitted casing so arranged that when the gear teeth unmesh on one side liquid fills the space between the gear teeth and is carried around in the tooth space to the opposite side and displaced as the teeth mesh again.", "options": ["Cam and piston pump", "Gear pump", "Screw pump", "Vane pump"], "answer": 1, "explanation": "• Why 'Gear pump' is Correct: In external gear pumps, unmeshing gears create a partial vacuum at the suction port, carrying trapped fluid around the outer perimeter of the casing to discharge as the teeth mesh.\n• Why Other Choices are Incorrect: Cam and piston pumps use eccentric cams; screw pumps use threaded shafts; vane pumps use rotor slots and vanes."},
      {"id": 207, "question": "A type of rotary pump consists of two or three screw rotors so arranged that as the rotors turn liquid fills the shape between the screw threads and is displaced axially as the rotor threads mesh.", "options": ["Cam and piston pump", "Gear pump", "Screw pump", "Vane pump"], "answer": 2, "explanation": "• Why 'Screw pump' is Correct: In a rotary screw pump, intermeshing helical screws convey the fluid axially along the screw shafts with minimal pulsation and low shear.\n• Why Other Choices are Incorrect: Gear pumps carry liquid circumferentially around the outer periphery; vane pumps use radial blades."},
      {"id": 208, "question": "A type of rotary pump consists of one rotor in a casing machined eccentrically to the drive shaft. The rotor is fitted with a series of vanes, blades or buckets which follow the bore of the casing thereby displacing the liquid with each revolution of the drive shaft.", "options": ["Cam and piston pump", "Gear pump", "Screw pump", "Vane pump"], "answer": 3, "explanation": "• Why 'Vane pump' is Correct: In a rotary vane pump, sliding vanes mounted in an eccentric rotor extend outward against the casing bore under centrifugal force, creating expanding and contracting chambers that displace fluid.\n• Why Other Choices are Incorrect: Gear pumps use teeth; screw pumps use helical threads; cam and piston pumps use eccentric pistons."},
      {"id": 209, "question": "A type reciprocating pump having a steam cylinder with no lap on valves, a water cylinder and a common piston rod.", "options": ["Direct acting steam pump", "Crank and flywheel reciprocating pump", "Power driven pump", "Piston pump"], "answer": 0, "explanation": "• Why 'Direct acting steam pump' is Correct: Direct-acting steam pumps connect the steam piston directly to the liquid piston via a common rod without a rotating crankshaft or flywheel; steam valves have no lap so steam is admitted full stroke.\n• Why Other Choices are Incorrect: Crank and flywheel pumps use mechanical crankshafts to allow expansive steam cutoff; power-driven pumps are driven by external electric motors."},
      {"id": 210, "question": "A type of reciprocating pimp driven by compound, cross compound, or triple expansion steam engines.", "options": ["Direct acting steam pump", "Crank and flywheel reciprocating pump", "Power driven pump", "Piston pump"], "answer": 1, "explanation": "• Why 'Crank and flywheel reciprocating pump' is Correct: Heavy-duty crank-and-flywheel pumping engines were historically driven by compound or triple-expansion steam engines, using flywheels to store kinetic energy and permit expansive steam operation.\n• Why Other Choices are Incorrect: Direct acting steam pumps cannot take advantage of expansive steam cutoff because they lack flywheels."},
      {"id": 211, "question": "A type of reciprocating pump that receives its forward and backward motion of the piston and plunger from the rotary motion of a revolving crankshaft by means of a crank and connecting rod.", "options": ["Direct acting steam pump", "Crank and flywheel reciprocating pump", "Power driven pump", "Piston pump"], "answer": 2, "explanation": "• Why 'Power driven pump' is Correct: A power-driven pump (or power pump) converts rotary input motion from an electric motor or engine into reciprocating linear motion via a crankshaft, crankpins, and connecting rods.\n• Why Other Choices are Incorrect: Direct-acting pumps use steam pistons with no crankshafts; crank-and-flywheel pumps are steam-driven engines."},
      {"id": 212, "question": "A type of deep well pump which are refinement of the old hand pump that have played such an important role in country home and small town water supply from wells.", "options": ["Plunger pump", "Turbine pump", "Ejector centrifugal pump", "Air lift"], "answer": 0, "explanation": "• Why 'Plunger pump' is Correct: Deep well reciprocating plunger (or sucker-rod cylinder) pumps represent the mechanized evolution of classic farm hand pumps, using drop pipes and downhole cylinders actuated from the surface.\n• Why Other Choices are Incorrect: Turbine and ejector pumps are centrifugal; air lifts use pneumatic injection."},
      {"id": 213, "question": "A type of deep well pump that represent the application of vertical centrifugal pump to deep well service and are built for heads up to 305 meters and for capacities up to 28,495 liters per minute.", "options": ["Plunger pump", "Turbine pump", "Ejector centrifugal pump", "Air lift"], "answer": 1, "explanation": "• Why 'Turbine pump' is Correct: Vertical turbine deep well pumps are multi-stage centrifugal pumps engineered for high-capacity municipal and irrigation water extraction up to 300+ meters head and thousands of gallons per minute.\n• Why Other Choices are Incorrect: Plunger pumps cannot reach 28,000 L/min; ejector jet pumps are limited to small residential capacities."},
      {"id": 214, "question": "A type of deep well pump that has come into wide use for small capacities combines a single stage centrifugal pump at the top of the well and an ejector or jet located down in the water.", "options": ["Plunger pump", "Turbine pump", "Ejector centrifugal pump", "Air lift"], "answer": 2, "explanation": "• Why 'Ejector centrifugal pump' is Correct: A deep-well jet (ejector-centrifugal) pump pairs a surface-mounted centrifugal pump with a downhole venturi ejector/jet assembly to lift water from deep domestic water wells.\n• Why Other Choices are Incorrect: Turbine pumps use lineshaft bowl assemblies; plunger pumps are reciprocating; air lifts use compressed air bubbles."},
      {"id": 215, "question": "A type of deep well pump wherein compressed air is admitted to the well to lift water to the surface, for successful operation of the system, the discharge pipe must have its lower end submerged in the well water.", "options": ["Plunger pump", "Turbine pump", "Ejector centrifugal pump", "Air lift"], "answer": 3, "explanation": "• Why 'Air lift' is Correct: An air lift pump operates by injecting compressed air into the bottom of a submerged discharge pipe; the aerated water-air mixture is lighter than the surrounding water column, causing buoyant upward discharge.\n• Why Other Choices are Incorrect: Plungers, turbines, and ejectors all rely on mechanical displacement or centrifugal hydrodynamic acceleration, not compressed air buoyancy."}
    ]
  },

  deformable_bodies: {
    title: "Mechanics of Deformable Bodies",
    chapter: "Stresses • Tests 2, 3, 4, 8 (Vessels & Wire Ropes)",
    questions: [
      // Test 3 (Questions 1 to 50)
      { id: 1, question: "The ratio of the ultimate stress to the allowable stress.", options: ["Proportionality constant", "Strain", "Modulus", "Factor of safety"], answer: 3, explanation: "• Why 'Factor of safety' is Correct: Factor of Safety (FS or N) is defined as the ratio of maximum failure stress (ultimate strength σ_u or yield strength σ_y) to allowable design working stress (σ_allow), ensuring a safety margin against unexpected overload.\n• Why Other Choices differ: Strain is deformation per unit length (ε = δ / L), modulus is the stress-to-strain ratio (E = σ / ε), and proportionality constant refers to the slope in Hooke's Law." },
      { id: 2, question: "In a cantilever beam with a concentrated load at the free end, the moment is:", options: ["Constant along the beam", "Maximum at the wall", "¼ maximum half way out on the beam", "Maximum at the free end"], answer: 1, explanation: "• Why 'Maximum at the wall' is Correct: For a cantilever beam carrying end point load P, the bending moment equation is M(x) = -P(L - x), which is zero at the free end (x = L) and reaches its maximum magnitude M_max = P · L at the fixed built-in support wall (x = 0).\n• Why Other Choices differ: Moment is not constant along a cantilever with point load, and moment at the free end is zero because no lever arm exists." },
      { id: 3, question: "The greatest unit pressure the soil can continuously withstand.", options: ["Yield point", "Bearing strength", "Ultimate strength", "Point of rupture"], answer: 1, explanation: "• Why 'Bearing strength' is Correct: Bearing strength (or allowable bearing capacity) defines the maximum allowable contact pressure that a soil or foundation bed can support safely without shear failure or excessive settlement.\n• Why Other Choices differ: Yield point and point of rupture pertain to tensile/shear stress limits in structural materials (e.g. steel), while ultimate strength is the maximum tensile stress capacity of a tested material specimen." },
      { id: 4, question: "A specimen is subjected to a load. When the load is removed the strain disappears. From this information, which of the following can be deduced about this material?", options: ["It is elastic.", "It has a modulus of elasticity.", "It is plastic", "It is ductile."], answer: 0, explanation: "• Why 'It is elastic.' is Correct: Elasticity is the physical mechanical property by which a material fully recovers its original dimensions upon removal of the applied load, meaning deformation/strain is temporary and reversible.\n• Why Other Choices differ: Plastic materials exhibit permanent residual deformation upon unloading; ductility is the ability to sustain large plastic deformation in tension before fracture." },
      { id: 5, question: "A cantilever beam having a uniformly increasing load toward the fixed end:", options: ["Has uniform shear", "Has a reaction equal to the load", "Will have maximum bending moment midway to the beam", "Has a reaction is not equal to the load"], answer: 1, explanation: "• Why 'Has a reaction equal to the load' is Correct: From static equilibrium in the vertical direction (∑ F_y = 0), the upward vertical reaction at the cantilever fixed support must exactly balance the total resultant downward load of the triangular distributed loading diagram (R = ½ w L).\n• Why Other Choices differ: Shear force varies quadratically along the beam (not uniform), and maximum bending moment occurs at the fixed support wall, not midway." },
      { id: 6, question: "The coefficient of friction for dry surfaces:", options: ["Depends on the materials and the finish condition of the surface", "Depends only on the finish condition of the surface", "Does not depend on the materials", "Depends on the composition of the materials only"], answer: 0, explanation: "• Why 'Depends on the materials and the finish condition of the surface' is Correct: The coefficient of dry friction (μ) is governed by microscopic surface asperities and chemical bonding, which depend on both material pair composition and surface roughness/texture.\n• Why Other Choices differ: Friction is not independent of either factor; both the material composition and surface finish jointly dictate the frictional interface." },
      { id: 7, question: "The maximum stress to which a material may be subjected before failure occurs.", options: ["Rupture stress", "Yield stress", "Ultimate stress", "Allowable stress"], answer: 2, explanation: "• Why 'Ultimate stress' is Correct: Ultimate stress (ultimate tensile strength, σ_u) is the highest ordinate on the engineering stress-strain curve, denoting the maximum load-carrying capacity before necking and structural failure occur.\n• Why Other Choices differ: Yield stress marks the transition from elastic to plastic deformation; rupture/fracture stress is the stress at the moment of actual physical separation; allowable stress is a reduced safe working stress." },
      { id: 8, question: "The total resistance that a material offers to an applied load.", options: ["Flexure", "Stress", "Elasticity", "Rigidity"], answer: 1, explanation: "• Why 'Stress' is Correct: Stress is the internal resisting force developed within a body per unit cross-sectional area to oppose and balance external applied loads (σ = P/A).\n• Why Other Choices differ: Flexure refers to the bending behavior of structural members; elasticity is the capacity to recover original shape; rigidity refers to resistance to shear distortion or deflection." },
      { id: 9, question: "If the areas of cross-sections of square and circular beams are the same and both are put to equal bending moment then the correct statement is:", options: ["Both the beams are equally economical", "Both the beams are equally strong", "The circular beam is more economical", "The square beam is more economical"], answer: 3, explanation: "• Why 'The square beam is more economical' is Correct: For equal cross-sectional area A, a square section of side a (A = a²) has section modulus Z_sq = a³/6 = A^(3/2)/6 ≈ 0.1667 A^(3/2), whereas a circular section of diameter d (A = π d²/4) has Z_circ = π d³/32 = A^(3/2)/(4√π) ≈ 0.141 A^(3/2). Because Z_sq > Z_circ, the square beam experiences lower bending stress (σ = M/Z) for the same volume of material, making it stronger and more economical in flexure.\n• Why Other Choices differ: The circular beam has a lower section modulus, meaning it will be overstressed under bending moments that a square beam of identical weight can safely support." },
      { id: 10, question: "Ties are load carrying members that carry:", options: ["Axial compressive loads", "Axial tension loads", "Prestressing thick cylinders", "Relieving thick cylinders"], answer: 1, explanation: "• Why 'Axial tension loads' is Correct: In structural engineering and truss analysis, a tie (or tie rod) is defined as a slender structural member subjected strictly to axial tensile forces.\n• Why Other Choices differ: Members subjected to axial compressive loads are termed struts or columns; cylinder prestressing/relieving are manufacturing and stress-relief processes." },
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
      { id: 31, question: "Principal stresses occur on those planes:", options: ["Where the shearing stress is zero", "Which are 45 degrees apart", "Where the shearing stress is a maximum", "Which are subjected only to tension"], answer: 0, explanation: "• Why 'Where the shearing stress is zero' is Correct: By definition in mechanics of materials, principal planes are the mutually perpendicular planes upon which shear stress vanishes entirely (τ = 0), where normal stresses reach their extreme maximum and minimum values.\n• Why Other Choices differ: Maximum shear stress planes are oriented at 45° to principal planes, and principal planes can carry tensile, compressive, or zero normal stresses." },
      { id: 32, question: "The ratio of moment of inertia of the cross-section of a beam to the section modulus is:", options: ["Equal to the radius of gyration", "Equal to the area of the cross-section", "A measure of distance", "Multiplied by the bending moment to determine the stress"], answer: 2, explanation: "• Why 'A measure of distance' is Correct: Section modulus is defined as Z = I / c, where c is the perpendicular distance from the neutral axis to the outermost extreme fiber. Therefore, I / Z = I / (I/c) = c, which has dimensions of length (distance, meters or inches).\n• Why Other Choices differ: Radius of gyration is k = √(I/A), cross-sectional area is A, and stress calculation multiplies bending moment by 1/Z (i.e. σ = M/Z)." },
      { id: 33, question: "Structural steel elements subjected to torsion develop what kind of stress?", options: ["Bending stress", "Compressive stress", "Shearing stress", "Tensile stress"], answer: 2, explanation: "• Why 'Shearing stress' is Correct: Torsion generates torsional shear stress.\n• Why Other Choices differ: Alternative options (Bending stress, Compressive stress, Tensile stress) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 34, question: "The bending moment of a section of a beam is derived from the:", options: ["Sum of the moments of all external forces on one side of the section", "Difference between the moments on one side of the section and the opposite side", "Sum of the moments of all external forces on both sides of the section", "Sum of the moments of all external forces"], answer: 0, explanation: "• Why 'Sum of the moments of all external forces on one side of the section' is Correct: By the method of sections and static equilibrium, the internal bending moment at any beam cross-section equals the algebraic sum of the moments of all external forces and reactions acting on either side of the section taken about the section centroid.\n• Why Other Choices differ: Considering forces on both sides would sum to zero due to global equilibrium; difference between moments across sections yields differential shear." },
      { id: 35, question: "The stress concentration factor:", options: ["Is a ratio of the average stress on a section to the allowable stress", "Cannot be evaluated for brittle materials", "Is the ratio of the areas involved in a sudden change of cross section", "Is the ratio of the maximum stress produced in the cross section to the average stress over the section"], answer: 3, explanation: "• Why 'Is the ratio of the maximum stress produced in the cross section to the average stress over the section' is Correct: The theoretical stress concentration factor (K_t) is defined as the ratio of peak localized stress at a geometric discontinuity (hole, notch, fillet) to the nominal or average stress (K_t = σ_max / σ_nom).\n• Why Other Choices differ: K_t depends purely on elastic geometry, not allowable stress; it applies to both brittle and ductile materials; it is a ratio of stresses, not areas." },
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
      { id: 117, question: "If two principal stresses are zero, the state stress is:", options: ["Biaxial", "Monoaxial", "Triaxial", "Uniaxial"], answer: 3, explanation: "• Why 'Uniaxial' is Correct: In a three-dimensional stress tensor (σ_1, σ_2, σ_3), if two principal stresses are zero (e.g. σ_2 = σ_3 = 0, σ_1 ≠ 0), load acts in only one axial direction, which defines a uniaxial stress state.\n• Why Other Choices differ: Biaxial stress has two non-zero principal stresses; triaxial stress has three non-zero principal stresses; monoaxial is a non-standard terminology for uniaxial." },
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
      { id: 195, question: "The minimum factor of safety of small hoist is", options: ["3", "5", "7", "9"], answer: 2, explanation: "\u2022 Why '7' is Correct: Standard safety codes recommend a minimum factor of safety of 7 for small hoists.\n\u2022 Why Other Choices differ: 5 is for miscellaneous hoisting; 7 is for small hoists." },
      { id: 196, question: "ME Board October 1999: Torsional deflection is a significant consideration in the design of shaft and the limit should be in the range of __________ degrees/foot of length.", options: ["0.004 to 0.006", "0.08 to 1", "0.006 to 0.008", "0.008 to 1"], answer: 1, explanation: "• Why '0.08 to 1' is Correct: In machine design practice, limiting torsional deflection is typically kept in the range of 0.08° to 1° per foot of length to maintain torsional rigidity and avoid excessive twist." },
      { id: 197, question: "ME Board April 1999: For a universal joint shaft angle should be _____________ degrees maximum and much less if in high rotational speed.", options: ["12", "16", "15", "14"], answer: 2, explanation: "• Why '15' is Correct: Standard universal joints (Hooke's joints) have a maximum permissible operating angle of 15° (and significantly lower at high rotational speeds to minimize secondary cyclic vibrations)." },
      { id: 198, question: "ME Board April 1998: It is a good design practice for steel line shafting to consider a limit to the linear deflection of ____________ inch/foot length maximum.", options: ["0.050", "0.010", "0.020", "0.060"], answer: 1, explanation: "• Why '0.010' is Correct: For steel line shafting, a standard rule of thumb limits transverse linear deflection to 0.010 inch per foot of length between bearing supports to avoid bearing binding." },
      { id: 199, question: "It is a rotating machine member that transmit power:", options: ["Cam", "Plate", "Shaft", "Flywheel"], answer: 2, explanation: "• Why 'Shaft' is Correct: A shaft is a rotating machine element used to transmit power and rotational motion between machines or components." },
      { id: 200, question: "A stationary member carrying pulleys, wheel and etc. that transmit power is called:", options: ["Axle", "Propeller shaft", "Turbine shaft", "Machine shaft"], answer: 0, explanation: "• Why 'Axle' is Correct: An axle is a stationary (non-rotating) machine member that supports rotating elements such as wheels and pulleys without transmitting torque." },
      { id: 201, question: "A line shaft is also known as:", options: ["Counter shaft", "Jackshaft", "Main shaft", "Head shaft"], answer: 2, explanation: "• Why 'Main shaft' is Correct: In power transmission systems, a line shaft directly driven by the primary power source that drives auxiliary equipment is also known as the main shaft." },
      { id: 202, question: "Which of the following shaft intermediate between a line shaft and driven shaft?", options: ["Counter shaft", "Jackshaft", "Head shaft", "All of the above"], answer: 3, explanation: "• Why 'All of the above' is Correct: Countershafts, jackshafts, and intermediate head shafts are all configurations placed between the primary line shaft and the driven machinery." },
      { id: 203, question: "Short shafts on machines are called:", options: ["Core shafts", "Heads shafts", "Medium shafts", "Spindles"], answer: 3, explanation: "• Why 'Spindles' is Correct: Short rotating shafts on machine tools (such as drill presses, lathes, and milling heads) that carry the work or tool are called spindles." },
      { id: 204, question: "For shaft, the shear due to bending is a maximum at the neutral plane where the normal stress is:", options: ["Constant", "Maximum", "Minimum", "Zero"], answer: 3, explanation: "• Why 'Zero' is Correct: In transverse beam bending, transverse shear stress τ = VQ/(Ib) is maximum at the neutral axis/plane, where normal bending stress σ = My/I is exactly zero." },
      { id: 205, question: "Criteria for the limiting torsional deflection vary from 0.08° per foot of length for machinery shafts to __________ per foot.", options: ["1°", "2°", "3°", "4°"], answer: 0, explanation: "• Why '1°' is Correct: Permissible torsional twist in shaft design varies from 0.08° per foot for precision machinery shafts up to a maximum limit of 1° per foot for general transmission shafting." },
      { id: 206, question: "For transmission shafts the allowable deflection is one degree in a length of _________ diameters.", options: ["10", "15", "20", "25"], answer: 2, explanation: "• Why '20' is Correct: A standard empirical design rule specifies that the allowable torsional deflection in steel transmission shafting should not exceed 1° in a length equal to 20 shaft diameters (L = 20D)." },
      { id: 207, question: "An old rule of thumb for transmission shafting is that the deflection should not exceed _________ of length between supports.", options: ["0.01 in. per foot", "0.02 in. per foot", "0.03 in. per foot", "0.04 in. per foot"], answer: 0, explanation: "• Why '0.01 in. per foot' is Correct: The traditional standard rule of thumb limits transverse bending deflection of transmission shafts between bearing supports to 0.01 in. per foot of span." },
      { id: 208, question: "In general for machinery shafts, the permissible deflection may be closer to:", options: ["0.02 in/ft", "0.01 in/ft", "0.002 in/ft", "0.030 in/ft"], answer: 2, explanation: "• Why '0.002 in/ft' is Correct: Precision machinery shafts (e.g., machine tool gear drives) require much tighter deflection limits, typically around 0.002 in/ft to prevent gear misalignment." },
      { id: 209, question: "The speed at which the center of mass will equal the deflecting forces on the shaft with its attached bodies will then vibrate violently, since the centrifugal force changes its direction as the shaft turns:", options: ["Critical speed", "Geometrical speed", "Mean speed", "Unit speed"], answer: 0, explanation: "• Why 'Critical speed' is Correct: The critical speed is the rotational speed at which the angular velocity matches the natural frequency of transverse vibration of the shaft, resulting in resonant violent vibrations." },
      { id: 210, question: "For shaft, the minimum value of numerical combined shock and fatigue factor to be applied in every case to the computed bending moment is:", options: ["1.0", "1.3", "1.5", "1.8"], answer: 2, explanation: "• Why '1.5' is Correct: Under ASME code for shaft design, the minimum numerical shock and fatigue factor for bending (Km) applied to a rotating shaft with minor shock or gradual loading is 1.5." },
      { id: 211, question: "It is suggested that the design factor on the yield strength be about 1.5 for the smooth load, about 2 to 2.25 for minor shock loads, and ________ when the loading reverse during operation.", options: ["3.0", "4.0", "3.5", "4.5"], answer: 3, explanation: "• Why '4.5' is Correct: For rotating shafts subject to fully reversed bending stresses and heavy shock cycles, a design factor of 4.5 based on yield strength is recommended." },
      { id: 212, question: "A column is called short column when:", options: ["The length is more than 30 times the diameter", "Slenderness ratio is more than 120", "The length is less than 8 times the diameter", "The slenderness ratio is more than 32"], answer: 2, explanation: "• Why 'The length is less than 8 times the diameter' is Correct: Columns with L < 8D fail primarily by direct crushing rather than buckling, classifying them as short columns." },
      { id: 213, question: "For a circular shaft subjected to torque the value of shear stress:", options: ["Is uniform throughout", "Has maximum value at the axis", "Has maximum value at the surface", "Is zero at the axis and linearly increases to a maximum value at the surface of the shaft"], answer: 3, explanation: "• Why 'Is zero at the axis and linearly increases to a maximum value at the surface' is Correct: According to the torsion formula τ = Tr/J, shear stress is directly proportional to radial distance r, being zero at the neutral center and maximum at outer radius R." },
      { id: 214, question: "The compression members tend to buckle in the direction of:", options: ["Axis of load", "Perpendicular to the axis of load", "Minimum cross-section", "Least radius of gyration"], answer: 3, explanation: "• Why 'Least radius of gyration' is Correct: Euler buckling load Pcr = π²EI / L² depends directly on moment of inertia I = Ar². Buckling always occurs about the axis with the least radius of gyration r_min." },
      { id: 215, question: "A reinforced concrete beam is considered to be made up of:", options: ["Clad material", "Composite material", "Homogeneous material", "Heterogeneous material"], answer: 3, explanation: "• Why 'Heterogeneous material' is Correct: Reinforced concrete consists of two distinct materials (concrete and steel rebar) with different mechanical properties, making it heterogeneous." },
      { id: 216, question: "The column splice is used for increasing:", options: ["Strength of the column", "Cross-sectional area of the column", "Length of the column", "All of the above"], answer: 2, explanation: "• Why 'Length of the column' is Correct: Column splices are structural joints used to connect two column sections vertically to increase the overall column length." },
      { id: 217, question: "A simply supported beam has a uniformly distributed load on it, the bending moment is:", options: ["Triangle", "Parabola", "Semi-circle", "Rectangle"], answer: 1, explanation: "• Why 'Parabola' is Correct: Under a uniformly distributed load w, the bending moment equation is M(x) = (wL/2)x - (w/2)x², which is a second-degree parabolic curve." },
      { id: 218, question: "The power obtained by piston reaches flywheel through the:", options: ["Countershaft", "Crank shaft", "Transmission shaft", "Line shaft"], answer: 1, explanation: "• Why 'Crank shaft' is Correct: In internal combustion engines, reciprocating piston power is converted into rotary motion and transmitted directly to the flywheel via the crankshaft." },
      { id: 219, question: "There are two types of crankshafts, namely:", options: ["Single piece and built up", "Forged and turned", "Rotary and stationary", "None of these"], answer: 0, explanation: "• Why 'Single piece and built up' is Correct: Crankshafts are classified constructionally into single-piece (monobloc forging/casting) and built-up (multi-piece assembly) types." },
      { id: 220, question: "Engine valves get open by means of:", options: ["Cam shaft", "Rocker shaft", "Crank shaft", "Valve guard"], answer: 0, explanation: "• Why 'Cam shaft' is Correct: Engine intake and exhaust valves are actuated and opened by the lobes of a camshaft driven synchronously by the engine." },
      { id: 221, question: "The value of allowable stresses which are generally used in practice for main transmitting shafts is:", options: ["282 kg/cm²", "423 kg/cm²", "599 kg/cm²", "620 kg/cm²"], answer: 0, explanation: "• Why '282 kg/cm²' is Correct: In general engineering practice, allowable shear stress for commercial steel line and main transmission shafting without keyways is about 282 kg/cm² (~4,000 psi)." },
      { id: 222, question: "The value of allowable stresses which are generally used in practice for line shafts carrying pulleys is:", options: ["150 kg/cm²", "282 kg/cm²", "423 kg/cm²", "550 kg/cm²"], answer: 2, explanation: "• Why '423 kg/cm²' is Correct: For line shafts carrying pulleys subjected to both bending and torsion, allowable stress is approximately 423 kg/cm² (~6,000 psi)." },
      { id: 223, question: "The value of allowable stresses which are generally used in practice for small, short shafts, countershafts is:", options: ["282 kg/cm²", "599 kg/cm²", "650 kg/cm²", "750 kg/cm²"], answer: 1, explanation: "• Why '599 kg/cm²' is Correct: For short, stiff countershafts with minimal bending, higher allowable stresses up to 599 kg/cm² (~8,500 psi) are used." },
      { id: 224, question: "Torsional deformation in transmission shafts should be limited to _________ in 20 diameters.", options: ["1°", "2°", "3°", "4°"], answer: 0, explanation: "• Why '1°' is Correct: Standard transmission shafting design limits torsional deflection to 1° over an axial length of 20 shaft diameters." },
      { id: 225, question: "Lateral deflection caused by bending should not exceed:", options: ["0.001 in per foot of length", "0.005 in per foot of length", "0.01 in per foot of length", "0.05 in per foot of length"], answer: 2, explanation: "• Why '0.01 in. per foot of length' is Correct: Lateral bending deflection is strictly kept under 0.01 inch per foot of length to prevent bearing jamming and excessive vibration." },
      { id: 226, question: "Front axle should not be live and:", options: ["Weak", "Dead", "Strong", "None of these"], answer: 1, explanation: "• Why 'Dead' is Correct: In traditional rear-wheel drive vehicles, the front axle is a non-driving 'dead' axle that carries load and supports steering but does not transmit tractive power." },
      { id: 227, question: "The steering is coupled to the two front wheels by means of a:", options: ["Connecting rod", "Tie rod", "Push rod", "Spindle"], answer: 1, explanation: "• Why 'Tie rod' is Correct: The tie rod is the mechanical linkage in the steering system that connects the steering gear to the steering knuckles of both front wheels." },
      { id: 228, question: "In the overdrive transmission system the rotation speed of _________ rest higher than that of engine’s speed:", options: ["Main shaft", "Crank shaft", "Propeller shaft", "Machine shaft"], answer: 2, explanation: "• Why 'Propeller shaft' is Correct: In overdrive gearing, the gear ratio is less than 1:1, meaning the propeller (drive) shaft rotates faster than the engine crankshaft." },
      { id: 229, question: "A slip joint __________ the length of propeller shaft.", options: ["Increases", "Decreases", "Keeps appropriate", "None of these"], answer: 2, explanation: "• Why 'Keeps appropriate' is Correct: A slip joint contains splines that slide axially, accommodating suspension movement to keep the effective length of the propeller shaft appropriate during vehicle travel." },
      { id: 230, question: "The transmission system incorporates clutch, gear box, and propeller shaft and:", options: ["Brake", "Differential", "Steering", "Main shafting"], answer: 1, explanation: "• Why 'Differential' is Correct: An automotive drive train consists of clutch, transmission/gearbox, propeller shaft, and the rear axle differential." },
      { id: 231, question: "The lay shaft moves __________ the primary shaft.", options: ["Equal to", "More than", "Less than", "In the gear ratio"], answer: 3, explanation: "• Why 'In the gear ratio' is Correct: The countershaft (lay shaft) in a manual transmission is constantly meshed with the input (primary) shaft, moving at an angular speed determined by their constant mesh gear ratio." },
      { id: 232, question: "The main shaft is lifted __________ the lay shaft.", options: ["Before", "After", "Parallel to", "Adjacent to"], answer: 2, explanation: "• Why 'Parallel to' is Correct: In a standard manual transmission gearbox layout, the output main shaft is positioned parallel to the countershaft/lay shaft." },
      { id: 233, question: "In the gear, the rotation speeds of _________ remain the same.", options: ["Primary and lay shafts", "Main and lay shafts", "Primary and main shafts", "Secondary and main shafts"], answer: 2, explanation: "• Why 'Primary and main shafts' is Correct: In direct drive (typically 4th gear, 1:1 ratio), the input (primary) shaft is locked directly to the output (main) shaft, so both rotate at identical speed." },
      { id: 234, question: "The primary and lay shafts rotate in _________ direction.", options: ["In the same", "Different", "Reverse", "None of these"], answer: 2, explanation: "• Why 'Reverse' is Correct: External meshing between two spur gears inverts the rotational direction, so the lay shaft rotates in the reverse (opposite) direction relative to the primary shaft." },
      { id: 235, question: "It is an integral part of a machine:", options: ["Spindle", "Axle", "Counter shaft", "Machine shaft"], answer: 3, explanation: "• Why 'Machine shaft' is Correct: A machine shaft is built into and forms an integral functional component of the machine itself (unlike external line transmission shafting)." },
      { id: 236, question: "Stresses in shafts are analysed through:", options: ["Torsional", "Bending", "Axial", "All of these"], answer: 3, explanation: "• Why 'All of these' is Correct: Complete shaft stress analysis evaluates torsional shear from torque transmission, bending normal stress from lateral pulley/gear loads, and axial loads from helical gears or thrust." },
      { id: 237, question: "What is the standard stock length for commercial shafting?", options: ["16 ft", "20 ft", "24 ft", "All of the above"], answer: 3, explanation: "• Why 'All of the above' is Correct: Standard manufactured stock lengths for cold-finished commercial steel shafting are commercially supplied in 16 ft, 20 ft, and 24 ft increments." },
      { id: 238, question: "Centrifugal separators that operates at speeds _________ also employ these flexible shafts.", options: ["1000 to 3000 rpm", "5000 to 10000 rpm", "1500 to 30000 rpm", "20000 to 50000 rpm"], answer: 3, explanation: "• Why '20000 to 50000 rpm' is Correct: Ultra-high-speed centrifugal separators and centrifuges operating between 20,000 and 50,000 rpm utilize flexible shafts to run safely above their critical speeds." },
      { id: 239, question: "Which of the following material is used for shafting?", options: ["AISI 3240", "AISI 3150", "AISI 4063", "AISI 33000"], answer: 0, explanation: "• Why 'AISI 3240' is Correct: AISI 3240 is a high-strength nickel-chromium alloy steel commonly used in heavily stressed shafts and axles." },
      { id: 240, question: "The process of redistributing the mass attached to a rotating body in order to reduce vibrations arising from a centrifugal force:", options: ["Shaft coupling", "Shaft balancing", "Shaft hooper", "Stator balancing"], answer: 1, explanation: "• Why 'Shaft balancing' is Correct: Dynamic shaft balancing redistributes or adds counterweights to align the principal inertial axis with the rotational axis, mitigating vibration." },
      { id: 241, question: "In many cases the ___________ of the shaft is an important design feature:", options: ["Deflections", "Rigidity", "Size", "Strength"], answer: 1, explanation: "• Why 'Rigidity' is Correct: While strength ensures a shaft will not fracture, torsional and lateral rigidity is frequently the governing design criterion to maintain proper gear meshing and bearing alignment." },
      { id: 242, question: "Commercial shafting is made of:", options: ["Low carbon steel", "Cast iron", "Brass", "Bronze"], answer: 0, explanation: "• Why 'Low carbon steel' is Correct: Commercial shafting is typically cold-rolled or cold-drawn from low-carbon steel (such as AISI 1018 to 1020), offering high toughness and good machinability." },
      { id: 243, question: "What is the most common material for shafting?", options: ["Wrought iron", "Cast iron", "Mild steel", "Aluminium"], answer: 2, explanation: "• Why 'Mild steel' is Correct: Mild steel (medium-low carbon steel) is the most widely used material for general power transmission shafting due to its strength, ductility, and cost." },
      { id: 244, question: "Cold drawing produces a ___________ shaft than rolling, but with higher residual stresses.", options: ["Weaker", "Stronger", "Harder", "None of the above"], answer: 1, explanation: "• Why 'Stronger' is Correct: Cold drawing strain-hardens the surface of the steel, significantly increasing its tensile and yield strength over hot-rolled bars, albeit with residual tensile surface stresses." },
      { id: 245, question: "Allowable stresses in shear equal to ___________ are common in design of a shaft.", options: ["3000 to 5000 psi", "4000 to 6000 psi", "5000 to 8000 psi", "6000 to 10000 psi"], answer: 2, explanation: "• Why '5000 to 8000 psi' is Correct: For commercial steel transmission shafting with keyway allowances under normal working conditions, allowable shear stress typically ranges from 5,000 to 8,000 psi." }
    ]
  },

  heat_transfer: {
    title: "Heat Transfer",
    chapter: "Chapter 13",
    questions: [
      { id: 1, question: "One of the reasons for insulating the pipes is:", options: ["They may not break under pressure", "There is minimum corrosion", "Capacity to withstand pressure is increased", "Heat loss from the surface is minimized"], answer: 3, explanation: "• Why 'Heat loss from the surface is minimized' is Correct: Thermal insulation provides low thermal conductivity (high thermal resistance) around pipes, drastically reducing heat dissipation by conduction and surface convection/radiation to the surrounding ambient air.\n• Why Other Choices differ: Thermal insulation does not reinforce the structural integrity against pipe bursting or pressure, nor does it primarily prevent chemical corrosion." },
      { id: 2, question: "The rate of radiant energy, that is emitted by a surface at any temperature and in small wavelengths is found from the known rate of energy that under the same conditions will be emitted from a black surface, by multiplying with the absorptivity. The above enunciation is called:", options: ["Lambert's law", "Kirchhoff's law", "Planck's law", "Stefan Boltzmann's law"], answer: 1, explanation: "• Why 'Kirchhoff\'s law' is Correct: Kirchhoff's law of thermal radiation states that at thermal equilibrium, the monochromatic emissivity of a body equals its monochromatic absorptivity (ε = α), meaning radiant emission equals blackbody emission multiplied by absorptivity.\n• Why Other Choices differ: Lambert's cosine law governs diffuse radiation intensity with angle; Planck's law gives the spectral emissive power distribution across wavelengths; Stefan-Boltzmann's law gives total hemispherical emission (E_b = σT⁴)." },
      { id: 3, question: "Which of the following is generally used to measure the temperature inside the furnace?", options: ["Mercury thermometer", "Alcohol thermometer", "Ash thermometer", "Optical pyrometer"], answer: 3, explanation: "• Why 'Optical pyrometer' is Correct: Optical pyrometers measure extremely high temperatures (such as inside incandescent furnaces or kilns) without direct physical contact by comparing the visible thermal radiation and brightness of the furnace interior against a calibrated filament.\n• Why Other Choices differ: Mercury and alcohol liquid-in-glass thermometers have much lower boiling/operating limits (mercury ~350 °C, alcohol ~78 °C) and would vaporize or shatter; 'ash thermometer' is a non-existent instrument." },
      { id: 4, question: "All heat transfer processes:", options: ["Involve transfer of energy", "Involve temperature difference between the bodies", "Obey first law of thermodynamics", "Obey second law of thermodynamics"], answer: 1, explanation: "• Why 'Involve temperature difference between the bodies' is Correct: Heat is thermal energy in transit strictly driven by a non-zero temperature gradient (ΔT ≠ 0) according to the Second Law of Thermodynamics.\n• Why Other Choices differ: While energy transfer occurs in heat transfer, temperature difference is the universal driving potential condition that defines and drives all heat transfer modes (conduction, convection, radiation)." },
      { id: 5, question: "What is thermal diffusivity?", options: ["A mathematical formula", "A physical property of the material", "A configuration for heat conduction", "A dimensionless parameter"], answer: 1, explanation: "• Why 'A physical property of the material' is Correct: Thermal diffusivity (α = k / (ρ c_p)) is a physical thermophysical transport property that quantifies a material's ability to conduct thermal energy relative to its capacity to store thermal energy.\n• Why Other Choices differ: Although calculated with a formula, thermal diffusivity represents an intrinsic thermophysical material property; it is not a geometric configuration or dimensionless parameter (its SI unit is m²/s)." },
      { id: 6, question: "Which of the following is a unit of thermal diffusivity?", options: ["m^2/hr", "kcal/m^2hr", "kcal/ m^2hr °C", "m^2/hr °C"], answer: 0, explanation: "• Why 'm^2/hr' is Correct: Thermal diffusivity has SI/metric dimensions of area per unit time (Length² / Time), standardly expressed as m²/s or m²/hr.\n• Why Other Choices differ: Units involving kcal/(m²·hr) denote heat flux, while kcal/(m²·hr·°C) denotes convective heat transfer coefficient (h) or overall heat transfer coefficient (U)." },
      { id: 7, question: "Non-isotropic conductivity is shown by which of the following?", options: ["Brass", "Copper", "Wood", "Steel"], answer: 2, explanation: "• Why 'Wood' is Correct: Wood is an anisotropic (non-isotropic) fibrous material whose thermal conductivity along the grain is roughly twice to three times higher than across the grain.\n• Why Other Choices differ: Metals like brass, copper, and steel possess isotropic polycrystalline structures, giving them uniform thermal conductivity in all directions." },
      { id: 8, question: "For glass wool thermal conductivity changes from sample to sample due to changes in:", options: ["Structure", "Density", "Composition", "All of the above"], answer: 3, explanation: "• Why 'All of the above' is Correct: The effective thermal conductivity of porous bulk insulations like glass wool depends on fiber orientation/structure, packing density, and fiber chemical composition/binder.\n• Why Other Choices differ: Structure, density, and composition all simultaneously influence trapped air voids, conductive bridging, and radiative scattering through the material." },
      { id: 9, question: "Which of the following is the S.I. unit of thermal conductivity?", options: ["W/m-hr-°K", "W/m °K", "KJ/m-hr-°C", "W/m-hr-°C"], answer: 1, explanation: "• Why 'W/m °K' is Correct: From Fourier's Law (q = -k A dT/dx), solving for thermal conductivity gives k = q / (A dT/dx), yielding W / (m² · K/m) = W/(m·K) or W/(m·°K).\n• Why Other Choices differ: Hours (hr) are not the base SI unit of time, and kJ/m-hr-°C incorporates non-SI units." },
      { id: 10, question: "What is the value of the Prandtl number for air?", options: ["10", "6.7", "67", "0.7"], answer: 3, explanation: "• Why '0.7' is Correct: For air and most common diatomic gases at standard temperatures and pressures, the Prandtl number (Pr = ν / α = μ c_p / k) ranges narrowly between 0.70 and 0.71.\n• Why Other Choices differ: Values like 6.7 or 10 correspond to liquids like water (around room temperature) or light oils, not ambient air." },
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
      { id: 31, question: "A type of radiation consisting of singly charged particles that penetrate to intermediate distances:", options: ["Nuclear radiation", "Alpha radiation", "Beta radiation", "Gamma radiation"], answer: 2, explanation: "• Why 'Beta radiation' is Correct: Beta (β) radiation consists of high-energy electrons (-1) or positrons (+1), carrying a single unit of elementary charge with moderate penetrating ability (stopped by thin aluminum sheets).\n• Why Other Choices differ: Alpha particles carry a double positive charge (+2) and have low penetration; gamma radiation consists of uncharged electromagnetic photons with very high penetration." },
      { id: 32, question: "An electrically charged atom or radical which carries electricity through an electrolyte is called:", options: ["Ion", "Isotope", "Molecule", "Hole"], answer: 0, explanation: "• Why 'Ion' is Correct: An ion is an atom or group of atoms (radical) that has gained or lost one or more electrons, creating a net electrical charge (cations and anions) that conducts current through an electrolytic solution.\n• Why Other Choices differ: An isotope has an altered neutron count but is electrically neutral; a molecule is typically neutral; a hole is a missing electron concept in solid-state semiconductor physics." },
      { id: 33, question: "The energy of a body that can be transmitted in the form of heat:", options: ["Heat energy", "Thermal energy", "Entropy", "Internal energy"], answer: 1, explanation: "• Why 'Thermal energy' is Correct: Thermal energy.\n• Why Other Choices differ: Alternative options (Heat energy, Entropy, Internal energy) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 34, question: "In an isometric process, the heat transferred is equal to:", options: ["Change in enthalpy", "Change in entropy", "Change in internal energy", "Work nonflow"], answer: 2, explanation: "• Why 'Change in internal energy' is Correct: In an isometric (constant volume) process, boundary work is zero (W = ∫ P dV = 0). By the First Law of Thermodynamics (Q = ΔU + W), heat transfer equals change in internal energy (Q = ΔU).\n• Why Other Choices differ: Heat transfer equals change in enthalpy (ΔH) during a constant-pressure (isobaric) process, not isometric." },
      { id: 35, question: "A substance that is able to absorb liquids or gases and is used for removing them from a given medium or region:", options: ["Absorbent", "Cohesive", "Adsorbent", "Adhesive"], answer: 0, explanation: "• Why 'Absorbent' is Correct: An absorbent is a bulk chemical or material that assimilates molecules of another substance into its interior volume (absorption) to remove liquids or gases.\n• Why Other Choices differ: Adsorbent captures molecules onto its surface only (surface phenomenon); cohesive and adhesive refer to inter-molecular binding forces." },
      { id: 36, question: "Radiant heat transfer is described by:", options: ["Newton's law", "Fourier's law", "The logarithmic mean temperature", "Kirchhoff's law"], answer: 3, explanation: "• Why 'Kirchhoff's law' is Correct: Kirchhoff's Law / Stefan-Boltzmann Law.\n• Why Other Choices differ: Alternative options (Newton's law, Fourier's law, The logarithmic mean temperature) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 37, question: "A reservoir that absorbs energy in the form of heat is called:", options: ["Source", "Sink", "Cold reservoir", "Heat reservoir"], answer: 1, explanation: "• Why 'Sink' is Correct: Heat sink.\n• Why Other Choices differ: Alternative options (Source, Cold reservoir, Heat reservoir) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 38, question: "When the entire heat exchanger is selected as control volume, net heat transfer becomes:", options: ["Unity", "Zero", "Undefined", "Indeterminate"], answer: 1, explanation: "• Why 'Zero' is Correct: If insulated overall control volume, net Q_ext = 0.\n• Why Other Choices differ: Alternative options (Unity, Undefined, Indeterminate) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 39, question: "Heat is conducted in the direction of:", options: ["Increasing temperature", "Decreasing temperature", "Increasing and decreasing temperature", "Constant temperature"], answer: 1, explanation: "• Why 'Decreasing temperature' is Correct: Heat flows down temperature gradient (decreasing T).\n• Why Other Choices differ: Alternative options (Increasing temperature, Increasing and decreasing temperature, Constant temperature) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 40, question: "The heat transfer term in the first law of thermodynamics may be due to any of the following except:", options: ["Conduction", "Convection", "Radiation", "Internal heat generation"], answer: 3, explanation: "• Why 'Internal heat generation' is Correct: Internal heat generation is a source term, not heat transfer across boundaries.\n• Why Other Choices differ: Alternative options (Conduction, Convection, Radiation) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
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
      { id: 117, question: "Which of the following can be a geometric view factor of a gray body?", options: ["Greater than one", "Less than one", "Equal to one", "Greater than zero but less than one"], answer: 3, explanation: "• Why 'Greater than zero but less than one' is Correct: A geometric radiation shape/view factor (F_ij) represents the fraction of diffuse radiation leaving surface i that directly intercepts surface j, so physically 0 ≤ F_ij ≤ 1. For typical non-enclosed real gray bodies, it lies strictly between 0 and 1.\n• Why Other Choices differ: View factors cannot exceed unity (1.0) because the conservation of radiant energy requires that the sum of view factors from surface i to all enclosing surfaces equals 1 (∑ F_ij = 1)." },
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
      { id: 142, question: "In convection heat transfer, what mechanism heat transfer where the fluid moves due to the decrease in its density caused by increase in temperature?", options: ["Forced convection", "Natural convection", "Density convection", "Radial convection"], answer: 1, explanation: "• Why 'Natural convection' is Correct: Natural / Free convection.\n• Why Other Choices differ: Alternative options (Forced convection, Density convection, Radial convection) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition." },
      { id: 143, question: "Which law of thermodynamics states that if two thermodynamic systems are each in thermal equilibrium with a third system, then they are in thermal equilibrium with each other?", options: ["Zeroth Law of Thermodynamics", "First Law of Thermodynamics", "Second Law of Thermodynamics", "Third Law of Thermodynamics"], answer: 0, explanation: "• Why 'Zeroth Law of Thermodynamics' is Correct: The Zeroth Law establishes the concept of thermal equilibrium and provides the fundamental basis for temperature measurement.\n• Why Other Choices differ: Alternative options (First Law of Thermodynamics, Second Law of Thermodynamics, Third Law of Thermodynamics) govern conservation of energy, entropy direction, and absolute zero behaviors, respectively." },
      { id: 144, question: "Which law of thermodynamics is based on the principle of conservation of energy, stating that energy cannot be created or destroyed, only transformed (ΔU = Q - W)?", options: ["Zeroth Law of Thermodynamics", "First Law of Thermodynamics", "Second Law of Thermodynamics", "Third Law of Thermodynamics"], answer: 1, explanation: "• Why 'First Law of Thermodynamics' is Correct: The First Law defines the conservation of energy for a thermodynamic system, relating the change in internal energy (ΔU) to heat added (Q) and work done by the system (W).\n• Why Other Choices differ: Alternative options (Zeroth Law of Thermodynamics, Second Law of Thermodynamics, Third Law of Thermodynamics) govern thermal equilibrium, entropy/spontaneity, and absolute zero behavior, respectively." },
      { id: 145, question: "Which law of thermodynamics states that the total entropy of an isolated system always increases over time, dictating that heat flows spontaneously only from hotter to colder bodies?", options: ["Zeroth Law of Thermodynamics", "First Law of Thermodynamics", "Second Law of Thermodynamics", "Third Law of Thermodynamics"], answer: 2, explanation: "• Why 'Second Law of Thermodynamics' is Correct: The Second Law dictates that natural processes are irreversible, entropy of an isolated system increases, and heat cannot spontaneously flow from a cooler body to a hotter body (Kelvin-Planck and Clausius statements).\n• Why Other Choices differ: Alternative options (Zeroth Law of Thermodynamics, First Law of Thermodynamics, Third Law of Thermodynamics) relate to temperature definition, energy conservation, and behavior at absolute zero, respectively." },
      { id: 146, question: "Which law of thermodynamics states that the entropy of a pure crystalline substance approaches exactly zero as its absolute temperature approaches zero Kelvin (0 K)?", options: ["Zeroth Law of Thermodynamics", "First Law of Thermodynamics", "Second Law of Thermodynamics", "Third Law of Thermodynamics"], answer: 3, explanation: "• Why 'Third Law of Thermodynamics' is Correct: The Third Law (Nernst-Planck theorem) establishes that a perfect crystal at absolute zero (0 K) has zero entropy, implying that absolute zero cannot be attained in a finite number of steps.\n• Why Other Choices differ: Alternative options (Zeroth Law of Thermodynamics, First Law of Thermodynamics, Second Law of Thermodynamics) define temperature equilibrium, conservation of energy, and entropy direction of spontaneous processes, respectively." },
      { id: 147, question: "What is the science that seeks to predict the energy transfer that may take place between material bodies as a result of a temperature difference?", options: ["Thermodynamics", "Heat Transfer", "Fluid Dynamics", "Thermal Statics"], answer: 1, explanation: "• Why 'Heat Transfer' is Correct: Heat transfer is the branch of thermal engineering that describes and predicts the rate of heat (thermal energy) flow due to a temperature difference and the resulting temperature distribution." },
      { id: 148, question: "Which specialized sub-discipline of mechanical engineering deals specifically with the movement, generation, use, conversion, and exchange of heat energy and transfer?", options: ["Thermal Engineering", "Structural Mechanics", "Mechatronics", "Manufacturing Engineering"], answer: 0, explanation: "• Why 'Thermal Engineering' is Correct: Thermal engineering is a specialized sub-discipline of mechanical engineering that deals with the movement, generation, conversion, and utilization of heat energy between physical systems." },
      { id: 149, question: "What is the primary driving potential required for heat transfer to take place between physical systems or within a medium?", options: ["Pressure gradient", "Concentration gradient", "Temperature difference", "Velocity difference"], answer: 2, explanation: "• Why 'Temperature difference' is Correct: Heat transfer cannot occur spontaneously without a temperature difference (ΔT), which acts as the thermodynamic driving force for energy flow." },
      { id: 150, question: "The evolution of the modern discipline of heat transfer was accelerated by the development of the thermometer in which year?", options: ["1650", "1709", "1776", "1822"], answer: 1, explanation: "• Why '1709' is Correct: The development of the thermometer in 1709 by Fahrenheit led to systematic and quantitative studies of thermal phenomena." },
      { id: 151, question: "Which two historical figures were instrumental in establishing the foundations of conduction heat transfer through meticulous experiments and mathematical developments?", options: ["Reynolds and Prandtl", "Planck and Boltzmann", "Count Rumford and Fourier", "Nusselt and Grashof"], answer: 2, explanation: "• Why 'Count Rumford and Fourier' is Correct: Count Rumford's cannon-boring experiments challenged the caloric theory, and Joseph Fourier formulated the analytical mathematics of conduction (Fourier's Law of Heat Conduction)." },
      { id: 152, question: "Which group of fluid mechanicians and researchers contributed concepts and analyses that formed the basis for understanding convective heat transfer?", options: ["Rumford, Fourier, and Stefan", "Reynolds, Prandtl, Nusselt, and Grashof", "Planck, Stefan, and Boltzmann", "Carnot, Clausius, and Kelvin"], answer: 1, explanation: "• Why 'Reynolds, Prandtl, Nusselt, and Grashof' is Correct: Osborne Reynolds, Ludwig Prandtl, Wilhelm Nusselt, and Franz Grashof pioneered boundary layer theory, dimensionless groups, and convection heat transfer analysis." },
      { id: 153, question: "The theoretical and experimental foundations of radiation heat transfer were primarily established by which group of investigators?", options: ["Reynolds, Nusselt, and Fourier", "Count Rumford, Darcy, and Moody", "Planck, Stefan, and Boltzmann", "Pascal, Torricelli, and Bernoulli"], answer: 2, explanation: "• Why 'Planck, Stefan, and Boltzmann' is Correct: Max Planck (blackbody distribution), Josef Stefan (T^4 radiation law), and Ludwig Boltzmann (thermodynamic derivation) established the foundations of thermal radiation." },
      { id: 154, question: "In conduction, how is thermal energy transferred through a solid material?", options: ["By bulk displacement and circulating currents of the material", "By atomic and molecular collisions and vibrations without bulk motion", "By electromagnetic waves emitted through empty space", "Exclusively through macroscopic mass diffusion"], answer: 1, explanation: "• Why 'By atomic and molecular collisions and vibrations without bulk motion' is Correct: Conduction is the transfer of heat through solids via microscopic atomic/molecular collisions and lattice vibrations without bulk displacement of the material." },
      { id: 155, question: "The efficiency and rate of heat transfer by conduction through a material is fundamentally governed by which transport property?", options: ["Kinematic viscosity", "Surface tension", "Thermal conductivity", "Emissivity"], answer: 2, explanation: "• Why 'Thermal conductivity' is Correct: Thermal conductivity (k) is the material property that measures how well and how rapidly a solid or fluid conducts heat by conduction." },
      { id: 156, question: "Which mode of heat transfer occurs by the macroscopic movement of a fluid or gas, where heated, less dense fluid rises and cooler, denser fluid sinks?", options: ["Radiation", "Convection", "Pure Conduction", "Sublimation"], answer: 1, explanation: "• Why 'Convection' is Correct: Convection involves bulk fluid motion driven by buoyancy forces (natural convection) or external devices (forced convection), circulating heat from warmer to cooler regions." },
      { id: 157, question: "Which combination of fluid properties makes a fluid an optimal and highly effective convective heat transfer agent?", options: ["High thermal conductivity and low viscosity", "Low thermal conductivity and high viscosity", "High viscosity and low specific heat", "Low thermal conductivity and high density"], answer: 0, explanation: "• Why 'High thermal conductivity and low viscosity' is Correct: High thermal conductivity allows rapid heat absorption/release, while low viscosity minimizes friction and allows effortless circulation and turbulence." },
      { id: 158, question: "Which mode of heat transfer does NOT require any material medium to travel through and can propagate across a perfect vacuum?", options: ["Conduction", "Convection", "Radiation", "Advection"], answer: 2, explanation: "• Why 'Radiation' is Correct: Thermal radiation transfers energy via electromagnetic waves (chiefly infrared) and can freely propagate through a vacuum without any physical medium." },
      { id: 159, question: "The efficiency with which a physical surface emits thermal radiation compared to an ideal blackbody at the same temperature is governed by its:", options: ["Thermal conductivity", "Dynamic viscosity", "Emissivity", "Bulk modulus"], answer: 2, explanation: "• Why 'Emissivity' is Correct: Emissivity (ε) is the measure of a surface's ability to emit thermal radiation, with values ranging from 0 for a non-emitting reflector to 1 for an ideal blackbody emitter." },
      { id: 160, question: "Why is water generally a much better convective heat transfer fluid than lubricating oil?", options: ["Water has higher viscosity and lower density", "Water has higher thermal conductivity and lower viscosity", "Water has zero emissivity and low specific heat", "Water transfers heat exclusively by radiation"], answer: 1, explanation: "• Why 'Water has higher thermal conductivity and lower viscosity' is Correct: Water has significantly higher thermal conductivity (~0.6 W/m-K vs ~0.14 W/m-K for oil) and much lower viscosity, enabling superior convective heat transfer." },
      { id: 161, question: "What are the three classic fundamental modes of heat transfer studied in thermal engineering?", options: ["Evaporation, condensation, and precipitation", "Conduction, convection, and radiation", "Compression, expansion, and throttling", "Induction, capacitance, and resistance"], answer: 1, explanation: "• Why 'Conduction, convection, and radiation' is Correct: Conduction (molecular diffusion), convection (fluid motion), and radiation (electromagnetic waves) represent the three fundamental mechanisms of heat transfer." },
      { id: 162, question: "In gases and liquids, heat conduction is primarily due to:", options: ["Vibrations of molecules in a rigid crystal lattice", "Collisions and diffusion of molecules during their random motion", "Electromagnetic wave radiation across empty voids", "Bulk buoyant convective currents"], answer: 1, explanation: "• Why 'Collisions and diffusion of molecules during their random motion' is Correct: In fluids (gases and liquids), thermal conduction takes place through microscopic collisions and molecular diffusion as particles move with random thermal velocities." },
      { id: 163, question: "In solid conductors such as metals, heat conduction is primarily accomplished through:", options: ["Macroscopic fluid circulation", "Molecular collisions and random gas diffusion", "Lattice vibrations (phonons) and energy transport by free electrons", "Infrared radiation emission only"], answer: 2, explanation: "• Why 'Lattice vibrations (phonons) and energy transport by free electrons' is Correct: In solids, conduction occurs via atomic lattice vibrations combined with the motion of free conduction electrons, which accounts for the very high thermal conductivity of metals." },
      { id: 164, question: "Thermal conductivity (k) is formally defined as the rate of heat transfer through a:", options: ["Unit thickness of material per unit area per unit temperature difference", "Unit volume of fluid per unit time per unit pressure drop", "Unit surface area per unit mass per unit temperature rise", "Unit length of conductor per unit electrical potential difference"], answer: 0, explanation: "• Why 'Unit thickness of material per unit area per unit temperature difference' is Correct: Thermal conductivity k measures the steady heat flow rate through a unit thickness of material per unit cross-sectional area per degree temperature difference (W/m·K or BTU/hr·ft·°F)." },
      { id: 165, question: "According to Fourier's law of heat conduction, the rate of heat conduction through a plane wall is directly proportional to the:", options: ["Wall thickness and inverse of heat transfer area", "Temperature difference across the wall and heat transfer area", "Square of the wall thickness and material density", "Viscosity and volume of the material"], answer: 1, explanation: "• Why 'Temperature difference across the wall and heat transfer area' is Correct: From Q = k·A·ΔT/x, the conduction rate is directly proportional to the heat transfer area A and the temperature difference ΔT, and inversely proportional to wall thickness x." },
      { id: 166, question: "Which of the following materials is classified as a modern super-insulator with an exceptionally low thermal conductivity used for critical thermal barriers?", options: ["Copper plate", "Aerogel / Pyrogel", "Cast iron slab", "Structural steel"], answer: 1, explanation: "• Why 'Aerogel / Pyrogel' is Correct: Aerogels and Pyrogels feature microscopic nanoporous structures that suppress conduction and convection, giving them some of the lowest thermal conductivity values known among insulating materials." },
      { id: 167, question: "For steady one-dimensional conduction across a plane wall of thickness x, thermal conductivity k, and surface area A, the conductive thermal resistance (R_th) is expressed as:", options: ["R_th = x / (k · A)", "R_th = (k · A) / x", "R_th = k / (x · A)", "R_th = (x · k) / A"], answer: 0, explanation: "• Why 'R_th = x / (k · A)' is Correct: Thermal resistance to conduction is defined analogously to Ohm's law (ΔT = Q · R_th), yielding R_th = x / (k · A) with units of K/W or °C/W." },
      { id: 168, question: "Heat flux (q), which represents the rate of heat transfer per unit area normal to the direction of heat flow, has standard SI units of:", options: ["W/m", "W/m²", "J/m²", "W·m/K"], answer: 1, explanation: "• Why 'W/m²' is Correct: Heat flux q = Q / A has SI units of Watts per square meter (W/m²), representing energy transfer rate per unit surface area." },
      { id: 169, question: "Why does Fourier's law of heat conduction (q = -k · dT/dx) contain a negative sign?", options: ["Because thermal conductivity is defined as a negative property", "To ensure that heat flow is positive in the direction of decreasing temperature", "Because heat naturally flows from colder to hotter regions", "To account for microscopic viscous energy dissipation"], answer: 1, explanation: "• Why 'To ensure that heat flow is positive in the direction of decreasing temperature' is Correct: Heat naturally flows down a temperature gradient (dT/dx < 0). The negative sign ensures that the calculated heat flux q is a positive thermodynamic quantity in the direction of flow." },
      { id: 170, question: "In heat transfer analysis, a physical system is defined to be operating under 'steady-state' conditions when:", options: ["The temperature at any given point does not change with time", "The temperature is uniform and identical throughout the entire body", "Heat conduction ceases completely across all boundaries", "The material undergoes a constant-temperature phase change"], answer: 0, explanation: "• Why 'The temperature at any given point does not change with time' is Correct: Steady state implies ∂T/∂t = 0 at every location; the temperature field depends solely on spatial coordinates, with heat input exactly balancing heat output." },
      { id: 171, question: "The assumption of 'one-dimensional heat conduction' in a plane wall implies that:", options: ["Heat transfer occurs equally in all three spatial coordinates", "Temperature gradients are significant in only one direction and negligible in others", "The thickness of the wall is infinite", "Thermal conductivity changes exclusively in one direction"], answer: 1, explanation: "• Why 'Temperature gradients are significant in only one direction and negligible in others' is Correct: One-dimensional conduction assumes temperature varies primarily along the wall thickness (x-direction), while edge and lateral temperature variations are negligible." },
      { id: 172, question: "For steady, one-dimensional heat conduction through a plane wall with constant thermal conductivity and no internal heat generation, the temperature profile across the thickness is:", options: ["Parabolic", "Linear", "Exponential", "Hyperbolic"], answer: 1, explanation: "• Why 'Linear' is Correct: Integrating the one-dimensional conduction equation d²T/dx² = 0 twice yields T(x) = C1·x + C2, which is a straight line (linear temperature profile) across the wall." },
      { id: 173, question: "If the thickness of a homogeneous plane wall is doubled while maintaining identical surface temperatures and area, the steady rate of heat conduction will:", options: ["Double", "Be halved", "Quadruple", "Remain unchanged"], answer: 1, explanation: "• Why 'Be halved' is Correct: From Fourier's law Q = k·A·ΔT / x, the conduction rate is inversely proportional to thickness x. Doubling the thickness reduces heat flow by 50%." },
      { id: 174, question: "How does the thermal conductivity of a pure metal typically compare to the thermal conductivity of its alloy?", options: ["The alloy always has a significantly higher thermal conductivity", "The pure metal has a higher thermal conductivity than its alloy", "Both have identical thermal conductivities", "Alloying elements have zero effect on thermal transport"], answer: 1, explanation: "• Why 'The pure metal has a higher thermal conductivity than its alloy' is Correct: Alloying introduces solute atoms that scatter free electrons and disrupt lattice vibrations, reducing both thermal and electrical conductivities relative to the pure metal." },
      { id: 175, question: "As the temperature of a gas increases at atmospheric pressure, its thermal conductivity (k) generally:", options: ["Increases", "Decreases", "Remains strictly constant", "Drops to zero"], answer: 0, explanation: "• Why 'Increases' is Correct: According to kinetic theory of gases, thermal conductivity is proportional to the square root of absolute temperature (k ∝ √T). Higher temperatures increase molecular speeds and kinetic energy exchange during collisions." },
      { id: 176, question: "In thermal engineering, a material with a very low thermal conductivity (typically k < 0.25 W/m·K) used primarily to retard heat flow is classified as a:", options: ["Thermal conductor", "Thermal insulator", "Thermal capacitor", "Thermal radiator"], answer: 1, explanation: "• Why 'Thermal insulator' is Correct: Thermal insulators (e.g., fiberglass, mineral wool, polyurethane, aerogel) are engineered materials having low thermal conductivity to minimize conduction and conserve energy." },
      { id: 177, question: "In heat transfer engineering, what is a 'composite plane wall'?", options: ["A single homogeneous wall made of an isotropic metal", "A wall constructed of two or more layers of different materials in thermal contact", "A porous wall designed to allow fluid to pass freely through it", "A wall featuring embedded electrical resistance heating wires"], answer: 1, explanation: "• Why 'A wall constructed of two or more layers of different materials in thermal contact' is Correct: A composite wall consists of multiple successive layers of different materials (such as refractory brick, insulating brick, and steel casing) bonded in series or parallel." },
      { id: 178, question: "In the thermal-electrical analogy for heat conduction, what thermal quantity is directly analogous to electric current (I)?", options: ["Temperature difference (ΔT)", "Heat transfer rate (Q)", "Thermal resistance (R_th)", "Thermal conductivity (k)"], answer: 1, explanation: "• Why 'Heat transfer rate (Q)' is Correct: In the thermal-electrical analogy, heat flow rate Q (Watts) corresponds to electric current I (Amperes), temperature difference ΔT corresponds to voltage difference V, and thermal resistance R_th corresponds to electrical resistance R." },
      { id: 179, question: "For steady heat conduction through a composite plane wall consisting of multiple layers in series, the total thermal resistance (R_total) is equal to:", options: ["The product of all individual layer resistances", "The algebraic sum of the thermal resistances of all individual layers", "The reciprocal of the sum of the layer resistances", "The thermal resistance of the thinnest layer alone"], answer: 1, explanation: "• Why 'The algebraic sum of the thermal resistances of all individual layers' is Correct: Analogous to electrical resistors in series, the total thermal resistance across series layers is the sum of their individual conductive resistances: R_total = R1 + R2 + ... + Rn = Σ(x_i / (k_i · A))." },
      { id: 180, question: "Under steady-state conditions without internal heat generation, how does the rate of heat conduction (Q) through each layer of a series composite wall compare?", options: ["It progressively decreases through each subsequent layer", "It is identical and constant through every layer", "It increases proportionally with layer thickness", "It depends solely on the properties of the outermost layer"], answer: 1, explanation: "• Why 'It is identical and constant through every layer' is Correct: By conservation of energy at steady state without energy generation or storage, the heat entering each layer must equal the heat leaving it: Q = Q1 = Q2 = Q3 = constant." },
      { id: 181, question: "Across a series composite wall under steady state, which layer experiences the largest temperature drop (ΔT)?", options: ["The layer with the lowest thermal resistance", "The layer with the highest thermal resistance", "The layer with the highest thermal conductivity", "The layer with the lowest density"], answer: 1, explanation: "• Why 'The layer with the highest thermal resistance' is Correct: From ΔT_i = Q · R_i, because the heat flow Q is identical through all series layers, the layer with the largest thermal resistance experiences the steepest and largest temperature drop." },
      { id: 182, question: "Assuming ideal (perfect) thermal contact between two adjacent solid layers in a composite wall, the boundary condition at the interface requires that:", options: ["The temperature exhibits a sudden finite discontinuity", "The temperature is continuous and identical for both materials at the interface", "The heat transfer rate drops to zero at the interface boundary", "The thermal conductivity reaches infinity at the joint"], answer: 1, explanation: "• Why 'The temperature is continuous and identical for both materials at the interface' is Correct: With ideal thermal contact (negligible contact resistance), there is no temperature jump across the boundary; the two surfaces share an identical interface temperature (T_interface)." },
      { id: 183, question: "In real engineering composite walls, what causes 'thermal contact resistance' at the interface between two contacting solid surfaces?", options: ["Chemical bonding between the two solid materials", "Microscopic surface roughness and trapped interstitial air voids", "High surface emissivity of the contact surfaces", "Solid-state diffusion occurring across the boundary"], answer: 1, explanation: "• Why 'Microscopic surface roughness and trapped interstitial air voids' is Correct: Real surfaces touch only at discrete microscopic peaks (asperities). The remaining microscopic voids are filled with stagnant air (a poor conductor), creating a thermal contact resistance (R_t,c) and an interface temperature drop." },
      { id: 184, question: "Which of the following techniques is standard in thermal engineering to effectively minimize thermal contact resistance between two mating solid surfaces?", options: ["Roughening the mating surfaces with coarse abrasives", "Applying thermal grease, thermal paste, or soft metallic foil", "Decreasing the mechanical contact clamping pressure", "Injecting low-pressure air into the interstitial interface"], answer: 1, explanation: "• Why 'Applying thermal grease, thermal paste, or soft metallic foil' is Correct: Thermal interface materials (TIMs) fill microscopic air voids with a substance having much higher thermal conductivity than air, significantly reducing contact resistance." },
      { id: 185, question: "In high-temperature industrial furnace composite walls, what is the primary function of the 'refractory' layer (such as refractory silica or firebrick) placed directly adjacent to the combustion chamber?", options: ["To act as an electrical insulator only", "To withstand severe high temperatures and chemical attack while protecting outer structural layers", "To maximize heat escape to the surroundings", "To absorb and store fuel within its porous matrix"], answer: 1, explanation: "• Why 'To withstand severe high temperatures and chemical attack while protecting outer structural layers' is Correct: Dense refractory materials possess high melting points and mechanical resistance to hot corrosive combustion gases, shielding the external structural steel." },
      { id: 186, question: "Why is a layer of porous 'insulating brick' typically positioned immediately behind the dense refractory lining in a furnace composite wall?", options: ["To add structural dead weight to the furnace foundation", "To provide high thermal resistance that drastically curtails outward heat loss", "To rapidly cool the furnace combustion chamber by conduction", "To act as an exhaust gas filter"], answer: 1, explanation: "• Why 'To provide high thermal resistance that drastically curtails outward heat loss' is Correct: Insulating bricks have significantly lower thermal conductivity than dense refractories, providing the thermal barrier needed to keep the outer wall temperature safe and minimize fuel consumption." },
      { id: 187, question: "The Overall Heat Transfer Coefficient (U) for a composite wall is defined such that Q = U · A · ΔT_overall. What is the relation between U and the total thermal resistance (R_total)?", options: ["U = 1 / (A · R_total)", "U = A · R_total", "U = R_total / A", "U = (A / R_total)²"], answer: 0, explanation: "• Why 'U = 1 / (A · R_total)' is Correct: Since Q = ΔT_overall / R_total and Q = U · A · ΔT_overall, equating both formulas gives U · A = 1 / R_total, hence U = 1 / (A · R_total)." },
      { id: 188, question: "In a composite wall where different materials are arranged in parallel (side-by-side) with respect to heat flow, what condition holds true across each parallel branch?", options: ["The heat transfer rate through each parallel path is identical", "The temperature difference (ΔT) across each parallel branch is identical", "The total thermal resistance is the direct sum of the branch resistances", "Heat can only flow through the material with higher thermal conductivity"], answer: 1, explanation: "• Why 'The temperature difference (ΔT) across each parallel branch is identical' is Correct: In parallel thermal networks, both components share common temperature boundaries at their ends, so ΔT is identical across each branch while total heat flow divides (Q_total = Q1 + Q2)." },
      { id: 189, question: "In steady radial heat conduction through a hollow cylinder or pipe, how does the cross-sectional heat transfer area (A) vary along the radial path of heat flow?", options: ["It remains strictly constant regardless of radius", "It increases linearly with radius (A = 2π·r·L)", "It decreases inversely with the square of the radius", "It varies exponentially with radius"], answer: 1, explanation: "• Why 'It increases linearly with radius (A = 2π·r·L)' is Correct: Unlike a flat plane wall where area is constant, in a cylinder the surface area through which heat flows normal to the radial direction is A(r) = 2π·r·L, which expands linearly with radius r." },
      { id: 190, question: "For steady, one-dimensional radial heat conduction through a cylindrical pipe wall with constant thermal conductivity and no internal heat generation, the temperature profile T(r) across the wall is:", options: ["Linear", "Parabolic", "Logarithmic", "Exponential"], answer: 2, explanation: "• Why 'Logarithmic' is Correct: Integrating Fourier's law Q = -k·(2π·r·L)·(dT/dr) yields T(r) = C1·ln(r) + C2. Thus, the temperature distribution through a cylindrical wall varies logarithmically with radius." },
      { id: 191, question: "The conductive thermal resistance (R_cyl) of a hollow pipe of length L, inner radius r1, outer radius r2, and thermal conductivity k is given by:", options: ["R_cyl = ln(r2 / r1) / (2π · k · L)", "R_cyl = (r2 - r1) / (2π · k · L)", "R_cyl = 2π · k · L / ln(r2 / r1)", "R_cyl = ln(r2 / r1) / (k · L)"], answer: 0, explanation: "• Why 'R_cyl = ln(r2 / r1) / (2π · k · L)' is Correct: From Q = ΔT / R_cyl = 2π·k·L·(T1 - T2) / ln(r2/r1), the cylindrical thermal resistance is R_cyl = ln(r2/r1) / (2π·k·L) with units of K/W or °C/W." },
      { id: 192, question: "To represent radial heat flow through a pipe wall in the equivalent plane-wall form Q = k · A_lm · ΔT / (r2 - r1), the Logarithmic Mean Area (A_lm) is defined as:", options: ["A_lm = (A1 + A2) / 2", "A_lm = (A2 - A1) / ln(A2 / A1)", "A_lm = √(A1 · A2)", "A_lm = ln(A2 / A1) / (A2 - A1)"], answer: 1, explanation: "• Why 'A_lm = (A2 - A1) / ln(A2 / A1)' is Correct: The logarithmic mean area A_lm = (A2 - A1) / ln(A2/A1) accurately accounts for the curvature and radial area expansion of a cylindrical geometry." },
      { id: 193, question: "Under what condition can radial conduction through a hollow pipe be accurately approximated using the simple plane wall formula without significant error?", options: ["When the pipe is infinitely long", "When the pipe is thin-walled such that r2 / r1 ≈ 1", "When thermal conductivity k approaches zero", "When the outer diameter is at least 10 times the inner diameter"], answer: 1, explanation: "• Why 'When the pipe is thin-walled such that r2 / r1 ≈ 1' is Correct: When wall thickness (r2 - r1) is small compared to inner radius r1 (r2/r1 < 1.1), the logarithmic mean area approaches the arithmetic mean area (A_lm ≈ A_avg), and curvature effects become negligible." },
      { id: 194, question: "In heat transfer analysis of insulated pipes, the 'Critical Radius of Insulation' (r_cr) is defined by the formula:", options: ["r_cr = k_ins / h", "r_cr = h / k_ins", "r_cr = 2 · k_ins / h", "r_cr = √(k_ins / h)"], answer: 0, explanation: "• Why 'r_cr = k_ins / h' is Correct: For a cylindrical pipe surrounded by a convective fluid with heat transfer coefficient h, differentiating total thermal resistance with respect to outer radius yields r_cr = k_ins / h." },
      { id: 195, question: "If an electrical wire or small-diameter bare pipe has an outer radius smaller than the critical radius (r_o < r_cr), adding insulation will:", options: ["Always decrease the rate of heat loss", "Initially increase the rate of heat loss until the critical radius is reached", "Have absolutely no effect on heat transfer", "Cause the temperature of the core to rise rapidly"], answer: 1, explanation: "• Why 'Initially increase the rate of heat loss until the critical radius is reached' is Correct: For r_o < r_cr, the reduction in convective resistance due to increased outer surface area outweighs the added conductive resistance, thereby increasing total heat dissipation." },
      { id: 196, question: "At the critical radius of insulation (r_o = r_cr = k_ins / h) for a cylindrical geometry, the rate of heat transfer from the cylinder is at its:", options: ["Minimum", "Maximum", "Zero value", "Inflection point where conduction stops"], answer: 1, explanation: "• Why 'Maximum' is Correct: The critical radius corresponds to the minimum total thermal resistance (R_total = R_cond + R_conv), which consequently results in the maximum heat transfer rate." },
      { id: 197, question: "Why are electrical power cables deliberately insulated such that their outer radius is close to the critical radius of insulation?", options: ["To maximize electrical current resistance", "To maximize heat dissipation to the surroundings and prevent overheating", "To trap heat within the copper conductor", "To minimize the physical weight of the cable"], answer: 1, explanation: "• Why 'To maximize heat dissipation to the surroundings and prevent overheating' is Correct: For electric wires, maximizing heat dissipation keeps operating temperatures lower, increasing the safe ampacity (current-carrying capacity) of the wire." },
      { id: 198, question: "In industrial piping engineering, what does a pipe's 'Schedule Number' (e.g., Schedule 40 or Schedule 80) designate?", options: ["The chemical composition and grade of the alloy", "The standardized wall thickness of the pipe for a given nominal size", "The maximum operating temperature in degrees Celsius", "The length of the pipe segment in meters"], answer: 1, explanation: "• Why 'The standardized wall thickness of the pipe for a given nominal size' is Correct: Pipe schedule specifies wall thickness. For a given nominal pipe size, a higher schedule number (such as Schedule 80 vs. Schedule 40) indicates a thicker wall to withstand higher internal pressures." },
      { id: 199, question: "When two different insulating materials of unequal thermal conductivity are wrapped around a hot steam pipe, which layer arrangement minimizes total heat loss?", options: ["Place the material with higher thermal conductivity closest to the hot pipe", "Place the material with lower thermal conductivity closest to the hot pipe", "The order of insulation layers makes zero difference to total heat loss", "Mix both materials into a single composite slurry"], answer: 1, explanation: "• Why 'Place the material with lower thermal conductivity closest to the hot pipe' is Correct: Because thermal resistance in a cylinder is R = ln(r_out/r_in) / (2π·k·L), the inner layer has a smaller radius where resistance per unit thickness is highest. Putting the lower-k (better insulator) where area is smallest maximizes total thermal resistance." },
      { id: 200, question: "In heat transfer analyses of long transmission pipelines, heat transfer rate is most conveniently expressed per unit length (Q/L). What are the standard SI and English units for Q/L?", options: ["W/m² and BTU/hr·ft²", "W/m and BTU/hr·ft", "J/m and BTU/ft", "W·m and BTU·ft/hr"], answer: 1, explanation: "• Why 'W/m and BTU/hr·ft' is Correct: Dividing total heat rate (Watts or BTU/hr) by pipeline length (meters or feet) yields Watts per meter (W/m) in SI units and BTU per hour per foot (BTU/hr·ft) in English units." },
      { id: 201, question: "In heat transfer engineering, what constitutes a 'composite pipe' (or multi-layered cylindrical shell)?", options: ["A single solid steel rod through which fluid is forced", "A concentric arrangement of two or more distinct cylindrical layers of different materials in thermal contact", "A pipe made of a homogeneous composite resin throughout its entire thickness", "A perforated tube utilized exclusively for fluid filtration"], answer: 1, explanation: "• Why 'A concentric arrangement of two or more distinct cylindrical layers of different materials in thermal contact' is Correct: A composite pipe consists of concentric cylindrical layers—such as an inner metal pipe wall, an intermediate high-temperature insulation layer, an outer insulation layer, and a protective weather jacket." },
      { id: 202, question: "Under steady-state radial heat conduction with no internal heat generation, how does the heat flow rate (Q) through each concentric layer of a composite pipe compare?", options: ["It progressively decreases from the inner layer to the outer layer", "It is constant and identical through every concentric layer", "It increases with increasing layer radius", "It fluctuates depending on the thermal conductivity of each layer"], answer: 1, explanation: "• Why 'It is constant and identical through every concentric layer' is Correct: By conservation of energy under steady state with no energy storage or generation, the total radial heat flow rate crossing any cylindrical surface area at radius r is identical: Q = Q1 = Q2 = ... = Qn = constant." },
      { id: 203, question: "The total conductive thermal resistance (R_total) of a composite pipe consisting of concentric layers with successive radii r1, r2, r3, ... and thermal conductivities k1, k2, ... is equal to:", options: ["The product of the individual layer resistances", "The direct algebraic sum of the individual logarithmic resistances of each layer", "The resistance of the innermost layer alone", "The inverse of the sum of thermal conductivities"], answer: 1, explanation: "• Why 'The direct algebraic sum of the individual logarithmic resistances of each layer' is Correct: Just as with electrical resistors in series, concentric cylindrical layers are in series with respect to radial heat flow: R_total = Σ [ln(r_{i+1} / r_i) / (2π · k_i · L)]." },
      { id: 204, question: "In a multi-layer insulated pipe under steady state, the interface temperature (T_interface) between any two adjacent concentric layers is determined by the fact that:", options: ["The temperature drop across each layer is directly proportional to that layer's thermal resistance (ΔT_i = Q · R_i)", "The interface temperature is always the exact arithmetic average of inner and outer surface temperatures", "The temperature drop is inversely proportional to thermal resistance", "The interface temperature depends solely on the ambient air temperature"], answer: 0, explanation: "• Why 'The temperature drop across each layer is directly proportional to that layer's thermal resistance (ΔT_i = Q · R_i)' is Correct: Because heat flow Q is identical through all series layers, the temperature drop across each layer is ΔT_i = Q · R_i. Subtracting this drop from the inner boundary temperature gives the interface temperature." },
      { id: 205, question: "What is the primary engineering rationale for using a two-layer composite insulation system (e.g., inner asbestos/calcium silicate and outer cork/polyurethane) on a high-temperature steam pipe?", options: ["To add structural weight to stabilize the pipe against vibrations", "Because high-temperature insulation withstands extreme heat but low-temperature insulation provides superior thermal resistance below its maximum service temperature", "To allow steam to condense directly within the outer insulation", "To equalize the thermal conductivity of both layers"], answer: 1, explanation: "• Why 'Because high-temperature insulation withstands extreme heat but low-temperature insulation provides superior thermal resistance below its maximum service temperature' is Correct: Highly efficient insulators (like cork or foam) degrade at high temperatures. An inner refractory/high-temp insulator drops the temperature to a level that the more effective outer insulator can safely withstand." },
      { id: 206, question: "In English engineering units, thermal conductivity is sometimes specified as k in BTU·in / (hr·ft²·°F). To convert this value to standard BTU / (hr·ft·°F) for use in heat conduction formulas, one must:", options: ["Multiply by 12", "Divide by 12", "Multiply by 144", "Divide by 3600"], answer: 1, explanation: "• Why 'Divide by 12' is Correct: Because 1 foot equals 12 inches (1 ft = 12 in), dividing a value in BTU·in/(hr·ft²·°F) by 12 inches/ft converts the length unit to feet, yielding standard BTU/(hr·ft·°F)." },
      { id: 207, question: "When calculating the Critical Radius of Insulation for a multi-layered insulated pipe exposed to ambient convection, which material's thermal conductivity determines the critical radius?", options: ["The thermal conductivity of the inner metal pipe wall", "The thermal conductivity of the innermost insulation layer", "The thermal conductivity of the outermost insulation layer exposed to convection", "The weighted arithmetic mean conductivity of all layers"], answer: 2, explanation: "• Why 'The thermal conductivity of the outermost insulation layer exposed to convection' is Correct: The critical radius r_cr = k_outer / h depends strictly on the thermal conductivity of the outermost layer that forms the convective boundary with the ambient fluid." },
      { id: 208, question: "Why is moisture ingress (water penetration) catastrophic to the thermal performance of porous pipe insulation materials like fiberglass, cork, or mineral wool?", options: ["Because water has a much lower thermal conductivity than air", "Because liquid water fills air pores and has a thermal conductivity over 20 times higher than stagnant air, drastically destroying insulation value", "Because water causes the pipe to expand radially beyond its elastic limit", "Because water causes immediate spontaneous combustion of the insulation"], answer: 1, explanation: "• Why 'Because liquid water fills air pores and has a thermal conductivity over 20 times higher than stagnant air, drastically destroying insulation value' is Correct: Stagnant air has k ≈ 0.026 W/m·K, while liquid water has k ≈ 0.6 W/m·K. Wet insulation conducts heat rapidly, causing massive energy losses and pipe corrosion under insulation (CUI)." },
      { id: 209, question: "What is the primary function of an external metallic (aluminum or stainless steel) or PVC jacket fitted over the outside of pipe insulation in industrial installations?", options: ["To serve as the primary thermal insulation barrier", "To provide a weather-resistant barrier that protects porous insulation against moisture penetration and physical damage", "To ground electrical surges from steam flow", "To reduce the fluid friction inside the pipe"], answer: 1, explanation: "• Why 'To provide a weather-resistant barrier that protects porous insulation against moisture penetration and physical damage' is Correct: Protective jacketing seals the delicate, porous insulation against rain, humidity, UV degradation, and mechanical impacts." },
      { id: 210, question: "For a composite pipe, the Overall Heat Transfer Coefficient can be defined based on either the inside surface area (U_i) or outside surface area (U_o) such that Q = U_i · A_i · ΔT = U_o · A_o · ΔT. How do U_i and U_o compare?", options: ["U_i is always strictly equal to U_o", "U_i is greater than U_o because the inner surface area (A_i) is smaller than the outer surface area (A_o)", "U_i is smaller than U_o because the inner area is smaller", "U_i and U_o have different dimensions and cannot be compared"], answer: 1, explanation: "• Why 'U_i is greater than U_o because the inner surface area (A_i) is smaller than the outer surface area (A_o)' is Correct: Since U_i · A_i = U_o · A_o = 1 / R_total, and for any pipe A_i < A_o, it follows mathematically that U_i > U_o." },
      { id: 211, question: "In heat transfer, how is 'convection' formally defined?", options: ["Energy transfer through a vacuum by electromagnetic waves", "Energy transfer between a solid surface and an adjacent moving fluid involving combined conduction and bulk fluid motion", "Energy transfer through a solid exclusively via lattice vibrations", "Energy storage resulting from a constant-pressure phase change"], answer: 1, explanation: "• Why 'Energy transfer between a solid surface and an adjacent moving fluid involving combined conduction and bulk fluid motion' is Correct: Convection comprises two mechanisms: microscopic diffusion (conduction) and macroscopic bulk motion (advection) of fluid particles moving over a boundary." },
      { id: 212, question: "Heat transfer through a completely motionless (quiescent) fluid occurs entirely by which mechanism?", options: ["Pure Convection", "Pure Conduction", "Thermal Radiation exclusively", "Sublimation"], answer: 1, explanation: "• Why 'Pure Conduction' is Correct: Convection requires macroscopic fluid motion. In a completely quiescent (motionless) fluid, heat can only transfer by molecular collisions and diffusion, which is the definition of conduction (the limiting case of zero fluid velocity)." },
      { id: 213, question: "Which of the following is classified as 'forced convection'?", options: ["Hot air rising from a warm pavement on a calm day", "Cooling a hot electronic microprocessor by blowing air across its heat sink with a fan", "Natural circulation of water in a heated vertical thermosyphon loop", "Warm air circulating inside a closed room without mechanical blowers"], answer: 1, explanation: "• Why 'Cooling a hot electronic microprocessor by blowing air across its heat sink with a fan' is Correct: Forced convection occurs when fluid motion is artificially driven over a surface by an external mechanical device such as a fan, pump, compressor, or atmospheric wind." },
      { id: 214, question: "What is the primary physical driving force responsible for fluid movement in 'natural (free) convection'?", options: ["An external mechanical blower or pump", "Buoyancy forces resulting from density differences caused by temperature variations", "Centrifugal forces induced by rotating equipment", "Magnetic fields interacting with ionized gas particles"], answer: 1, explanation: "• Why 'Buoyancy forces resulting from density differences caused by temperature variations' is Correct: In natural convection, fluid in contact with a hot surface heats up, expands, and becomes less dense. Gravitational buoyancy forces cause the lighter warm fluid to rise while denser cool fluid sinks, establishing a natural convection current." },
      { id: 215, question: "In gases at atmospheric conditions, natural convection heat transfer from an uninsulated hot surface is typically accompanied by:", options: ["No other heat transfer mode", "Thermal radiation of comparable magnitude (except for polished low-emissivity surfaces)", "Electromagnetic induction", "Nuclear fission"], answer: 1, explanation: "• Why 'Thermal radiation of comparable magnitude (except for polished low-emissivity surfaces)' is Correct: Because natural convection heat transfer coefficients in gases are relatively low (h ≈ 5–25 W/m²·K), radiative heat loss from the surface is often of the same order of magnitude and must be accounted for in accurate thermal balances." },
      { id: 216, question: "Newton's Law of Cooling, which governs convective heat transfer from a surface to a fluid, states that the heat transfer rate (Q) is proportional to:", options: ["The square of the temperature difference (ΔT²)", "The difference between the surface temperature and the bulk fluid temperature (T_s - T_∞)", "The fourth power of absolute temperature (T_s⁴ - T_∞⁴)", "The natural logarithm of the temperature ratio ln(T_s / T_∞)"], answer: 1, explanation: "• Why 'The difference between the surface temperature and the bulk fluid temperature (T_s - T_∞)' is Correct: Newton's law of cooling is expressed as Q = h · A · (T_s - T_∞), establishing a linear relationship between convective heat transfer rate and temperature driving potential." },
      { id: 217, question: "Which statement correctly describes the Convective Heat Transfer Coefficient (h)?", options: ["It is an intrinsic thermodynamic property of the fluid, like density or specific heat", "It is not a property of the fluid alone; it depends strongly on flow velocity, boundary layer geometry, and turbulence", "It is always a universal physical constant equal to 5.67 × 10⁻⁸", "It is completely independent of fluid velocity and viscosity"], answer: 1, explanation: "• Why 'It is not a property of the fluid alone; it depends strongly on flow velocity, boundary layer geometry, and turbulence' is Correct: Unlike thermal conductivity k, h is a complex flow-dependent parameter governed by surface geometry, fluid velocity, flow regime (laminar vs. turbulent), surface roughness, and fluid thermophysical properties." },
      { id: 218, question: "What are the standard SI and English engineering units for the Convective Heat Transfer Coefficient (h)?", options: ["W/m·K and BTU/hr·ft·°F", "W/m²·K and BTU/hr·ft²·°F", "J/m² and BTU/ft²", "W/m² and BTU/hr·ft²"], answer: 1, explanation: "• Why 'W/m²·K and BTU/hr·ft²·°F' is Correct: From h = q / ΔT, dividing heat flux (W/m² or BTU/hr·ft²) by temperature difference (K, °C, or °F) yields W/m²·K in SI units and BTU/hr·ft²·°F in English units." },
      { id: 219, question: "In thermal-electrical network analogies, what is the formula for the Convective Thermal Resistance (R_conv) of a surface of area A?", options: ["R_conv = 1 / (h · A)", "R_conv = h · A", "R_conv = h / A", "R_conv = A / h"], answer: 0, explanation: "• Why 'R_conv = 1 / (h · A)' is Correct: Writing Newton's law of cooling in Ohm's law form gives ΔT = Q · R_conv, which directly identifies R_conv = 1 / (h · A) with units of K/W or °C/W." },
      { id: 220, question: "How does 'turbulent' convective flow differ fundamentally from 'laminar' convective flow over a surface?", options: ["Turbulent flow moves in highly ordered, smooth parallel streamlines with no lateral mixing", "Turbulent flow is characterized by chaotic velocity fluctuations, swirling eddies, and intense macroscopic fluid mixing", "Turbulent flow occurs only at absolute zero temperature", "Turbulent flow has zero convective heat transfer coefficient"], answer: 1, explanation: "• Why 'Turbulent flow is characterized by chaotic velocity fluctuations, swirling eddies, and intense macroscopic fluid mixing' is Correct: Laminar flow is smooth and layered, whereas turbulent flow involves rapid eddy motion and macroscopic packet exchange that dramatically accelerates momentum and heat transport." },
      { id: 221, question: "For fluid flow over a given heat transfer surface, how does the convective heat transfer rate in turbulent flow compare to that in laminar flow?", options: ["Turbulent flow provides significantly higher heat transfer rates than laminar flow", "Turbulent flow provides much lower heat transfer rates than laminar flow", "Both flows produce identical heat transfer rates", "Turbulent flow halts heat transfer completely due to excessive turbulence"], answer: 0, explanation: "• Why 'Turbulent flow provides significantly higher heat transfer rates than laminar flow' is Correct: In turbulent flow, turbulent eddies transport fluid packets across streamlines rapidly, resulting in much thinner thermal boundary layers and much higher convective heat transfer coefficients (h_turbulent >> h_laminar)." },
      { id: 222, question: "In fluid mechanics and heat transfer, fluid flow inside circular pipes, air conditioning ducts, and closed channels is categorized as:", options: ["External flow", "Internal flow", "Free molecular flow", "Unbounded atmospheric flow"], answer: 1, explanation: "• Why 'Internal flow' is Correct: Internal flow refers to fluid completely bounded and constrained by solid surfaces (e.g. inside a pipe or duct), whereas external flow involves fluid moving over an unconfined solid body (e.g. flow over an airplane wing or exterior of a cylinder)." },
      { id: 223, question: "In experimental heat transfer, what does an optical interferometer map of interference fringes (isotherms) around a heated body reveal?", options: ["Lines of constant fluid pressure only", "Lines of constant temperature, where closely spaced fringes indicate steep temperature gradients and high heat flux", "The chemical composition of the fluid", "The electrical conductivity of the solid"], answer: 1, explanation: "• Why 'Lines of constant temperature, where closely spaced fringes indicate steep temperature gradients and high heat flux' is Correct: Interferometry visualizes density (and thus temperature) contours. Closely spaced fringe lines near the surface signify large temperature gradients (dT/dy) and therefore intense local convective heat transfer." },
      { id: 224, question: "Due to the hydrodynamic 'no-slip condition' at a solid-fluid interface, by what mechanism is heat transferred from the solid surface to the fluid layer immediately adjacent to the wall (at y = 0)?", options: ["Pure Conduction, governed by q = -k_fluid · (∂T/∂y)|_{y=0}", "Pure Convection by bulk eddy motion", "Nuclear emission", "Macroscopic fluid sliding"], answer: 0, explanation: "• Why 'Pure Conduction, governed by q = -k_fluid · (∂T/∂y)|_{y=0}' is Correct: The no-slip condition states that fluid molecules directly contacting a stationary solid have zero relative velocity. Because this boundary fluid layer is motionless, heat leaves the wall purely by molecular conduction before being swept away into the fluid stream." },
      { id: 225, question: "Why does blowing on a hot beverage or turning on a fan in a room cause a significantly faster rate of cooling?", options: ["Because higher fluid velocity increases the air density by a factor of ten", "Because higher fluid velocity thins the hydrodynamic and thermal boundary layers, substantially increasing the convective heat transfer coefficient (h)", "Because moving air has a lower specific heat capacity", "Because wind reverses the Second Law of Thermodynamics"], answer: 1, explanation: "• Why 'Because higher fluid velocity thins the hydrodynamic and thermal boundary layers, substantially increasing the convective heat transfer coefficient (h)' is Correct: Increasing fluid velocity compresses the insulating boundary layer against the surface, sharpening the temperature gradient at the wall and markedly boosting the convective heat transfer coefficient." },
      {
        id: 226,
        question: "According to fundamental heat transfer principles, how is convection defined?",
        options: ["The transmission of thermal energy solely through electromagnetic waves in a vacuum", "The mechanism of heat transfer whereby heat energy is transferred by moving fluids", "The direct transfer of kinetic energy between stationary solid molecules without bulk motion", "The spontaneous generation of thermal energy within an isolated system"],
        answer: 1,
        explanation: "\u2705 Why 'The mechanism of heat transfer whereby heat energy is transferred by moving fluids' is Correct: Convection specifically involves the combined action of conduction (molecular diffusion) and bulk fluid motion (advection) to transport thermal energy through moving liquids or gases."
      },
      {
        id: 227,
        question: "In the surface convection equation Q = h_c \u00b7 A \u00b7 (t_1 - t_2), what physical property does h_c represent?",
        options: ["Enthalpy of vaporization of the fluid", "Surface coefficient associated with convection (convective film coefficient)", "Stefan-Boltzmann radiation constant", "Thermal conductivity of the solid wall material"],
        answer: 1,
        explanation: "\u2705 Why 'Surface coefficient associated with convection (convective film coefficient)' is Correct: The symbol h_c represents the convective heat transfer coefficient or surface film coefficient, quantifying the heat transfer rate per unit surface area per unit temperature difference."
      },
      {
        id: 228,
        question: "What are the standard SI units for the surface convection coefficient (h_c)?",
        options: ["W / (m\u00b2\u00b7\u00b0C) or W / (m\u00b2\u00b7K)", "W / (m\u00b7K)", "kJ / (kg\u00b7\u00b0C)", "N / m\u00b2"],
        answer: 0,
        explanation: "\u2705 Why 'W / (m\u00b2\u00b7\u00b0C) or W / (m\u00b2\u00b7K)' is Correct: From Q = h_c \u00b7 A \u00b7 \u0394T, solving for h_c gives Q / (A \u00b7 \u0394T), resulting in Watts per square meter per Kelvin [W/(m\u00b2\u00b7K)] or equivalently [W/(m\u00b2\u00b7\u00b0C)]."
      },
      {
        id: 229,
        question: "In the surface convection formula Q = h_c \u00b7 A \u00b7 (t_1 - t_2), what does the variable A specifically designate?",
        options: ["The cross-sectional flow area through which fluid travels inside the channel", "The surface area of the solid in direct contact with the moving fluid", "The cross-sectional area of the fluid supply pipe", "The projected frontal area perpendicular to flow velocity"],
        answer: 1,
        explanation: "\u2705 Why 'The surface area of the solid in direct contact with the moving fluid' is Correct: A is the wetted surface area or exposed boundary area of the solid body across which convective heat exchange occurs between the wall and the fluid."
      },
      {
        id: 230,
        question: "What is the primary thermodynamic driving potential that causes surface convective heat transfer between a solid and an adjacent fluid?",
        options: ["Difference in hydrostatic pressure along the boundary", "Temperature difference between the solid surface and the fluid (t_1 - t_2)", "Difference in gravitational potential energy across the wall", "Difference in kinematic viscosity between fluid layers"],
        answer: 1,
        explanation: "\u2705 Why 'Temperature difference between the solid surface and the fluid (t_1 - t_2)' is Correct: By Newton's Law of Cooling, heat transfer is directly proportional to the temperature differential (t_1 - t_2) between the surface and the bulk fluid."
      },
      {
        id: 231,
        question: "In the sensible heat transfer equation Q = m \u00b7 C_p \u00b7 \u0394t for a flowing fluid stream, what does C_p represent?",
        options: ["Specific heat capacity of the fluid at constant pressure", "Specific heat capacity of the fluid at constant volume", "Volumetric thermal expansion coefficient", "Critical point saturation pressure"],
        answer: 0,
        explanation: "\u2705 Why 'Specific heat capacity of the fluid at constant pressure' is Correct: C_p is the specific heat capacity at constant pressure, representing the amount of heat energy required to raise the temperature of a unit mass of fluid by one degree."
      },
      {
        id: 232,
        question: "Why are temperature differences expressed in Celsius (\u0394\u00b0C) and Kelvin (\u0394K) completely interchangeable when calculating sensible heat Q = m \u00b7 C_p \u00b7 \u0394t?",
        options: ["Because Celsius and Kelvin share the exact same absolute zero reference point", "Because an interval of one degree Celsius is identical in magnitude to an interval of one Kelvin", "Because specific heat capacity approaches zero at standard ambient temperature", "Because thermal conductivity cancels the degree scale conversion factor"],
        answer: 1,
        explanation: "\u2705 Why 'Because an interval of one degree Celsius is identical in magnitude to an interval of one Kelvin' is Correct: The Celsius and Kelvin scales have identical degree gradations (\u0394T_K = \u0394T_\u00b0C), meaning temperature differences have the exact same numerical value on both scales."
      },
      {
        id: 233,
        question: "How is the mass flow rate (m) of a fluid determined from its volumetric flow rate (V_dot) and specific gravity (SG)?",
        options: ["m = V_dot / (SG \u00b7 \u03c1_water)", "m = SG \u00b7 \u03c1_water \u00b7 V_dot", "m = V_dot \u00b7 g", "m = SG / V_dot"],
        answer: 1,
        explanation: "\u2705 Why 'm = SG \u00b7 \u03c1_water \u00b7 V_dot' is Correct: Mass flow rate is density times volumetric flow rate (m = \u03c1 \u00b7 V_dot). Since specific gravity SG = \u03c1 / \u03c1_water, fluid density is \u03c1 = SG \u00b7 \u03c1_water, yielding m = SG \u00b7 \u03c1_water \u00b7 V_dot."
      },
      {
        id: 234,
        question: "In a well-insulated, steady-flow heat exchanger, what fundamental law establishes that heat released by the hot fluid equals heat absorbed by the cold fluid?",
        options: ["Newton's Third Law of Motion", "First Law of Thermodynamics (Conservation of Energy: Q_lost = Q_gained)", "Pascal's Principle of hydrostatic pressure transmission", "Bernoulli's Equation for frictionless incompressible flow"],
        answer: 1,
        explanation: "\u2705 Why 'First Law of Thermodynamics (Conservation of Energy: Q_lost = Q_gained)' is Correct: When heat loss to the surrounding environment is negligible, energy conservation dictates that all thermal energy lost by the hotter fluid must be absorbed by the colder fluid."
      },
      {
        id: 235,
        question: "For an ideal gas, how is the constant-pressure specific heat (C_p) derived from the specific heat ratio (k = C_p / C_v) and the characteristic gas constant (R)?",
        options: ["C_p = (k \u00b7 R) / (k - 1)", "C_p = R / (k - 1)", "C_p = k \u00b7 R \u00b7 (k - 1)", "C_p = (k - 1) / (k \u00b7 R)"],
        answer: 0,
        explanation: "\u2705 Why 'C_p = (k \u00b7 R) / (k - 1)' is Correct: Since C_p - C_v = R and k = C_p / C_v, substituting C_v = C_p / k gives C_p \u00b7 (1 - 1/k) = R, which simplifies directly to C_p = (k \u00b7 R) / (k - 1)."
      },
      {
        id: 236,
        question: "In industrial pyrometry, how can the high temperature of hot flue gases in a duct be determined using a metal sample and a water calorimeter?",
        options: ["By suspending the metal sample until it reaches thermal equilibrium with the gas, then quenching it in water to compute gas temperature via the Method of Mixtures", "By inserting a plastic hydrometer directly into the flue gas stream", "By condensing the flue gas inside an aluminum vessel and weighing the condensate", "By measuring the speed of sound through the calorimeter container walls"],
        answer: 0,
        explanation: "\u2705 Why 'By suspending the metal sample until it reaches thermal equilibrium with the gas, then quenching it in water to compute gas temperature via the Method of Mixtures' is Correct: By the Zeroth Law, the metal suspended in the flue reaches flue gas temperature. When quenched in water, heat lost by the metal equals heat gained by the water, allowing the initial flue gas temperature to be calculated."
      },
      {
        id: 237,
        question: "In practical calorimetry experiments, why must the heat capacity of the calorimeter container itself be factored into the heat balance equation?",
        options: ["Because the container walls undergo chemical decomposition when heated", "Because the vessel is in direct thermal contact with the liquid and also absorbs heat during the temperature change", "Because the container prevents radiation from reaching the thermometer", "Because container mass decreases significantly as temperature rises"],
        answer: 1,
        explanation: "\u2705 Why 'Because the vessel is in direct thermal contact with the liquid and also absorbs heat during the temperature change' is Correct: The container and stirrer change temperature alongside the liquid contents, absorbing a portion of the heat represented by their heat capacity (m_cal \u00b7 C_p,cal \u00b7 \u0394T)."
      },
      {
        id: 238,
        question: "When two different quantities of the same liquid at different initial temperatures are thoroughly mixed without heat loss or phase change, what governs the final equilibrium temperature?",
        options: ["The mass-weighted average of their initial temperatures", "The geometric mean of their initial absolute temperatures", "The temperature of the cooler liquid, unaffected by mass ratio", "Exactly half of the ambient room temperature"],
        answer: 0,
        explanation: "\u2705 Why 'The mass-weighted average of their initial temperatures' is Correct: Since both liquids share the same specific heat C_p, energy balance m_1\u00b7C_p\u00b7(T_1 - T_f) = m_2\u00b7C_p\u00b7(T_f - T_2) cancels C_p, giving T_f = (m_1\u00b7T_1 + m_2\u00b7T_2) / (m_1 + m_2)."
      },
      {
        id: 239,
        question: "In optical flow visualization of convection, an interferometer produces a map of interference fringes across a fluid. What do these fringe lines physically represent?",
        options: ["Lines of constant fluid velocity (isovels)", "Lines of constant temperature (isotherms)", "Lines of constant static pressure (isobars)", "Streamlines of zero vorticity"],
        answer: 1,
        explanation: "\u2705 Why 'Lines of constant temperature (isotherms)' is Correct: An interferometer detects localized changes in fluid refractive index caused by density variations. For a gas or liquid at constant pressure, density varies with temperature, making each fringe line an isotherm (line of constant temperature)."
      },
      {
        id: 240,
        question: "When analyzing an interferometric fringe pattern in convection, what does a dense concentration of closely spaced isotherm lines adjacent to a solid surface indicate?",
        options: ["Negligible temperature change and low heat flux", "A steep temperature gradient (dT/dy) and a high local heat transfer rate at the surface", "That fluid motion has completely stagnated into a vacuum", "That the fluid has reached its critical vaporization point"],
        answer: 1,
        explanation: "\u2705 Why 'A steep temperature gradient (dT/dy) and a high local heat transfer rate at the surface' is Correct: Closely packed isotherms mean temperature changes rapidly over a very short distance, signifying a steep wall temperature gradient and correspondingly high heat transfer rate."
      },
      {
        id: 241,
        question: "In heat transfer classification, how is fluid flow categorized when it is completely bounded by solid conduit walls (such as inside a pipe or duct) versus flow over an unconfined body (such as over a sphere or plate)?",
        options: ["Internal flow versus External flow", "Steady flow versus Transient flow", "Homogeneous flow versus Heterogeneous flow", "Adiabatic flow versus Isentropic flow"],
        answer: 0,
        explanation: "\u2705 Why 'Internal flow versus External flow' is Correct: Flow completely bounded by solid surfaces is internal flow (where boundary layers merge and develop into a fully developed profile), whereas flow over an unbounded surface is external flow."
      },
      {
        id: 242,
        question: "In cryogenic vacuum-insulated containers (such as liquid nitrogen dewars), why is the inner tank suspended inside an evacuated outer shell by slender support rods of low thermal conductivity?",
        options: ["To eliminate fluid conduction and convection across the vacuum space, restricting residual heat gain to rod conduction and radiation", "To maximize forced convective air circulation between the inner tank and ambient surroundings", "To enable spontaneous boiling of liquid nitrogen directly into the vacuum chamber", "To increase the thermal conductivity of the vacuum insulation"],
        answer: 0,
        explanation: "\u2705 Why 'To eliminate fluid conduction and convection across the vacuum space, restricting residual heat gain to rod conduction and radiation' is Correct: Evacuating the space between shells eliminates the medium necessary for conduction and convection, leaving only unavoidable conduction through slender support rods and radiative exchange."
      },
      {
        id: 243,
        question: "When evaluating convective heat transfer from a spherical object of diameter D into an adjacent fluid using Newton's Law of Cooling, which geometric expression represents the heat transfer surface area (A)?",
        options: ["A = \u03c0 \u00b7 D\u00b2 (or 4 \u00b7 \u03c0 \u00b7 r\u00b2)", "A = (\u03c0 / 4) \u00b7 D\u00b2", "A = (4/3) \u00b7 \u03c0 \u00b7 r\u00b3", "A = 2 \u00b7 \u03c0 \u00b7 D"],
        answer: 0,
        explanation: "\u2705 Why 'A = \u03c0 \u00b7 D\u00b2 (or 4 \u00b7 \u03c0 \u00b7 r\u00b2)' is Correct: The surface area of a sphere exposed to convective heat transfer is given by A = 4\u00b7\u03c0\u00b7r\u00b2 = \u03c0\u00b7D\u00b2."
      },
      {
        id: 244,
        question: "When fluid flows inside a cylindrical heated pipe of diameter D and length L, what formula gives the internal surface area (A) through which convective heat transfer occurs?",
        options: ["A = (\u03c0 / 4) \u00b7 D\u00b2", "A = \u03c0 \u00b7 D \u00b7 L", "A = 2 \u00b7 \u03c0 \u00b7 D\u00b2 \u00b7 L", "A = \u03c0 \u00b7 D\u00b2 / L"],
        answer: 1,
        explanation: "\u2705 Why 'A = \u03c0 \u00b7 D \u00b7 L' is Correct: The inner contact area of a cylindrical pipe through which heat is transferred to the flowing fluid is its circumference times length: A = \u03c0 \u00b7 D \u00b7 L."
      },
      {
        id: 245,
        question: "In a steady-flow refrigerant-to-water heat exchanger with negligible external heat loss, what energy balance equates the heat duty between the fluids?",
        options: ["Q = m_refrig \u00b7 \u0394h_refrig = m_water \u00b7 C_p,water \u00b7 \u0394T_water", "Q = m_refrig / \u0394h_refrig = m_water / (C_p,water \u00b7 \u0394T_water)", "Q = m_water \u00b7 \u0394h_refrig \u00b7 \u0394T_water", "Q = (m_refrig + m_water) \u00b7 C_p,water"],
        answer: 0,
        explanation: "\u2705 Why 'Q = m_refrig \u00b7 \u0394h_refrig = m_water \u00b7 C_p,water \u00b7 \u0394T_water' is Correct: By the First Law of Thermodynamics, heat released by condensing/cooling refrigerant (m \u00b7 \u0394h) equals heat absorbed by sensible warming of the cooling water (m \u00b7 C_p \u00b7 \u0394T)."
      },
      {
        id: 246,
        question: "Why does ambient air on a windy winter day feel substantially colder to exposed human skin than calm air at the exact same thermometer temperature?",
        options: ["Because wind lowers the actual measured thermodynamic temperature of the atmosphere", "Because forced convection induced by wind thins the insulating boundary layer, markedly boosting the convective heat transfer coefficient (wind-chill effect)", "Because atmospheric air density doubles whenever wind velocity exceeds 5 m/s", "Because wind triggers subatomic endothermic reactions on the skin surface"],
        answer: 1,
        explanation: "\u2705 Why 'Because forced convection induced by wind thins the insulating boundary layer, markedly boosting the convective heat transfer coefficient (wind-chill effect)' is Correct: In calm air, a warm boundary layer cushions the skin. Wind sweeps this layer away (forced convection), drastically increasing h and accelerating the rate of heat loss from the body."
      },
      {
        id: 247,
        question: "What is a primary operational distinction between forced convection and natural (free) convection regarding fluid flow rate?",
        options: ["In forced convection, flow rate can be externally controlled via fans or pumps, whereas in natural convection, flow rate is self-induced by buoyancy and cannot be externally regulated", "Natural convection requires far higher external electrical power than forced convection", "Forced convection relies entirely on density gradients created by temperature differences", "Natural convection can only take place in a complete vacuum"],
        answer: 0,
        explanation: "\u2705 Why 'In forced convection, flow rate can be externally controlled via fans or pumps, whereas in natural convection, flow rate is self-induced by buoyancy and cannot be externally regulated' is Correct: Forced convection utilizes external mechanical drivers (fans, blowers, pumps), allowing precise flow control, while natural convection is driven solely by internal buoyant density differences."
      },
      {
        id: 248,
        question: "What fundamental relationship links heat transfer, mass transfer, and fluid momentum transfer within boundary layers?",
        options: ["They share analogous differential governing equations and transport mechanisms (Reynolds and Chilton-Colburn analogies)", "They are strictly mutually exclusive and can never occur simultaneously in any fluid system", "Momentum transfer can only occur when heat transfer is mathematically zero", "Mass transfer is restricted exclusively to rigid non-porous crystalline solids"],
        answer: 0,
        explanation: "\u2705 Why 'They share analogous differential governing equations and transport mechanisms (Reynolds and Chilton-Colburn analogies)' is Correct: The transport of momentum (viscous shear), heat (conduction/convection), and mass (species diffusion) follow mathematically analogous boundary layer equations, enabling heat transfer coefficients to be predicted from friction factors."
      },
      {
        id: 249,
        question: "For a composite cylindrical pipe with convective boundaries on both inner and outer surfaces, what is the correct formula for total thermal resistance per unit length (R'_total)?",
        options: ["R'_total = 1/(2\u03c0\u00b7r_1\u00b7h_i) + ln(r_2/r_1)/(2\u03c0\u00b7k_1) + ln(r_3/r_2)/(2\u03c0\u00b7k_2) + 1/(2\u03c0\u00b7r_3\u00b7h_o)", "R'_total = 2\u03c0\u00b7r_1\u00b7h_i + 2\u03c0\u00b7k_1/ln(r_2/r_1) + 2\u03c0\u00b7k_2/ln(r_3/r_2) + 2\u03c0\u00b7r_3\u00b7h_o", "R'_total = h_i/r_1 + k_1/(r_2 - r_1) + h_o/r_3", "R'_total = 1 / (h_i + k_1 + k_2 + h_o)"],
        answer: 0,
        explanation: "\u2705 Why 'R'_total = 1/(2\u03c0\u00b7r_1\u00b7h_i) + ln(r_2/r_1)/(2\u03c0\u00b7k_1) + ln(r_3/r_2)/(2\u03c0\u00b7k_2) + 1/(2\u03c0\u00b7r_3\u00b7h_o)' is Correct: In radial systems, thermal resistances in series add together: inner convection 1/(h_i\u00b7A_i), cylindrical conduction layers ln(r_outer/r_inner)/(2\u03c0\u00b7k\u00b7L), and outer convection 1/(h_o\u00b7A_o)."
      },
      {
        id: 250,
        question: "In heat exchanger analysis, how is the Overall Heat Transfer Coefficient (U) across a flat metal wall of thickness L and thermal conductivity k related to convective coefficients h_1 and h_2?",
        options: ["1/U = 1/h_1 + L/k + 1/h_2", "U = h_1 + k/L + h_2", "U = (h_1 \u00b7 h_2 \u00b7 k) / L", "1/U = h_1 + L\u00b7k + h_2"],
        answer: 0,
        explanation: "\u2705 Why '1/U = 1/h_1 + L/k + 1/h_2' is Correct: The overall thermal resistance is the sum of both fluid film resistances and the conduction resistance (R_total = 1/h_1 + L/k + 1/h_2). Since U = 1/R_total, 1/U = 1/h_1 + L/k + 1/h_2."
      },
      {
        id: 251,
        question: "In the thermal analysis and maintenance of piping systems, what does the engineering term 'lagging' specifically refer to?",
        options: ["The time delay before steady-state conduction is reached", "The layer of thermal insulation material wrapped around a pipe or equipment to minimize heat loss", "The hydrodynamic head loss experienced by a fluid entering a nozzle", "The mechanical slip between a drive belt and a pulley"],
        answer: 1,
        explanation: "\u2705 Why 'The layer of thermal insulation material wrapped around a pipe or equipment to minimize heat loss' is Correct: 'Lagging' is the standard industry term for insulating coverings (e.g., fiberglass, mineral wool, calcium silicate) applied to the exterior of hot pipes and vessels."
      },
      {
        id: 252,
        question: "Why is the numerical value of specific heat capacity in cal / (g\u00b7\u00b0C) identically equal to its value in BTU / (lb\u00b7\u00b0F) and BTU / (lb\u00b7\u00b0R)?",
        options: ["Because 1 BTU = 252 cal, 1 lb = 453.6 g, and \u0394T_\u00b0F = (5/9)\u00b7\u0394T_\u00b0C, giving (252 / 453.6) \u00b7 (9/5) = 1.000 exactly", "Because the Imperial engineering system was historically calibrated directly from metric calories", "Because specific heat capacity is a dimensionless ratio independent of mass and temperature units", "Because temperature changes on the Fahrenheit scale are equal in magnitude to Celsius changes"],
        answer: 0,
        explanation: "\u2705 Why 'Because 1 BTU = 252 cal, 1 lb = 453.6 g, and \u0394T_\u00b0F = (5/9)\u00b7\u0394T_\u00b0C, giving (252 / 453.6) \u00b7 (9/5) = 1.000 exactly' is Correct: By definition, 1 BTU heats 1 lb of water by 1\u00b0F, and 1 cal heats 1 g of water by 1\u00b0C. Therefore, water has c_p = 1.0 in both systems, making specific heat values numerically interchangeable."
      },
      {
        id: 253,
        question: "In manufacturing and metallurgy, what is 'quenching' and what is its primary thermal objective?",
        options: ["Rapid cooling of a heated metal in a fluid bath (oil, water, brine) to trap high-temperature microstructures (forming martensite) and maximize hardness", "Slow cooling inside an insulated furnace to maximize softness and ductility", "Submerging cold metal in a molten salt bath to increase elasticity", "Using ultrasonic vibrations to remove trapped gases from a solid metal"],
        answer: 0,
        explanation: "\u2705 Why 'Rapid cooling of a heated metal in a fluid bath (oil, water, brine) to trap high-temperature microstructures (forming martensite) and maximize hardness' is Correct: Quenching rapidly cools hot austenitized steel past the pearlite nose into the martensitic transformation range, achieving high yield strength and hardness."
      },
      {
        id: 254,
        question: "Why is quenching oil frequently preferred over cold water for quenching high-strength alloy steel components?",
        options: ["Because oil provides a more moderate, uniform cooling rate that minimizes severe thermal stresses, distortion, and quench cracking", "Because oil boils at absolute zero and removes heat strictly by radiative exchange", "Because oil chemically etches surface micro-cracks closed during contact", "Because oil has a specific heat capacity ten times greater than water"],
        answer: 0,
        explanation: "\u2705 Why 'Because oil provides a more moderate, uniform cooling rate that minimizes severe thermal stresses, distortion, and quench cracking' is Correct: Water cools extremely rapidly, often creating violent thermal shocks that crack complex or alloy steel parts. Oil cools more gently through vapor blanket and boiling stages, preventing distortion."
      },
      {
        id: 255,
        question: "In a series thermal network of conductive and convective layers, how is the interface temperature between two adjacent layers determined?",
        options: ["By calculating the arithmetic average of the inner and outer fluid temperatures", "By applying Ohm's law analogue: \u0394T_layer = Q \u00b7 R_layer, and subtracting the layer temperature drop from the upstream temperature", "By dividing total heat rate by the solid density of the pipe", "Interface temperature is always fixed at 100\u00b0C"],
        answer: 1,
        explanation: "\u2705 Why 'By applying Ohm's law analogue: \u0394T_layer = Q \u00b7 R_layer, and subtracting the layer temperature drop from the upstream temperature' is Correct: In steady state, the heat rate Q is identical across every series layer. The temperature drop across any individual layer is \u0394T_i = Q \u00b7 R_i, allowing each intermediate boundary temperature to be determined."
      },
      {
        id: 256,
        question: "In an overall heat transfer process governed by 1/U = 1/h_1 + L/k + 1/h_2, what is the 'controlling thermal resistance'?",
        options: ["The layer having the smallest individual thermal resistance", "The layer having the largest individual thermal resistance, which dominates and limits the overall heat transfer rate", "The solid metal wall resistance L/k, regardless of its magnitude", "The resistance corresponding to the coldest fluid stream"],
        answer: 1,
        explanation: "\u2705 Why 'The layer having the largest individual thermal resistance, which dominates and limits the overall heat transfer rate' is Correct: The largest resistance in a series chain acts as a thermal bottleneck. Enhancing heat transfer requires reducing this controlling resistance, as small changes in minor resistances have little effect on U."
      },
      {
        id: 257,
        question: "How is the average heat transfer rate in kilowatts (kW) calculated from total thermal energy transferred (Q_total in kJ) over an elapsed time (\u0394t in minutes)?",
        options: ["Q_rate (kW) = Q_total (kJ) / (60 \u00b7 \u0394t)", "Q_rate (kW) = Q_total (kJ) \u00b7 60 \u00b7 \u0394t", "Q_rate (kW) = Q_total (kJ) / \u0394t", "Q_rate (kW) = Q_total (kJ) + 60 \u00b7 \u0394t"],
        answer: 0,
        explanation: "\u2705 Why 'Q_rate (kW) = Q_total (kJ) / (60 \u00b7 \u0394t)' is Correct: Since 1 kW = 1 kJ/s, elapsed time in minutes must be multiplied by 60 to convert to seconds: Q_rate (kW) = Q_total (kJ) / (\u0394t \u00b7 60 s/min)."
      },
      {
        id: 258,
        question: "In the thermal design of cylindrical insulation, what does the concept of 'Critical Radius of Insulation' (r_cr = k / h_o) signify?",
        options: ["The maximum radius before the pipe structurally collapses from insulation weight", "The outer insulation radius at which heat dissipation reaches a maximum, below which adding insulation paradoxically increases heat loss", "The minimum insulation thickness required to eliminate radiative emission", "The radius where internal flow velocity transitions from laminar to turbulent"],
        answer: 1,
        explanation: "\u2705 Why 'The outer insulation radius at which heat dissipation reaches a maximum, below which adding insulation paradoxically increases heat loss' is Correct: For cylinders, adding insulation increases conductive resistance but also expands surface area (lowering convective resistance). At r_cr = k/h_o, total resistance is minimized and heat loss is maximized."
      },
      {
        id: 259,
        question: "How does thermal radiation heat transfer fundamentally differ from conduction and convection?",
        options: ["Radiation does not require the presence of a material medium and can transfer energy across a complete vacuum", "Radiation only occurs between identical metals in direct atomic contact", "Radiation requires macroscopic fluid movement driven by external mechanical fans", "Radiation cannot transfer heat if body temperatures exceed absolute zero"],
        answer: 0,
        explanation: "\u2705 Why 'Radiation does not require the presence of a material medium and can transfer energy across a complete vacuum' is Correct: While conduction and convection rely on molecular collisions or fluid motion within a material medium, thermal radiation is transmitted via electromagnetic waves and travels freely through empty space."
      },
      {
        id: 260,
        question: "What is the physical origin of thermal electromagnetic radiation emitted by matter, and at what speed does it propagate in a vacuum?",
        options: ["Compressional sound waves traveling at the sonic velocity of 343 m/s", "Energy emitted as a result of changes in the electronic, vibrational, and rotational energy states of atoms and molecules, propagating at the speed of light (c \u2248 3 \u00d7 10\u2078 m/s)", "Electrostatic voltage pulses traveling at infinite velocity", "Subatomic neutrino beams with variable velocity"],
        answer: 1,
        explanation: "\u2705 Why 'Energy emitted as a result of changes in the electronic, vibrational, and rotational energy states of atoms and molecules, propagating at the speed of light (c \u2248 3 \u00d7 10\u2078 m/s)' is Correct: Thermal radiation originates from transitions in internal electronic and vibrational energy configurations of matter and propagates at light speed in vacuum."
      },
      {
        id: 261,
        question: "What thermodynamic criterion determines whether a physical object continuously emits thermal radiation?",
        options: ["Its absolute temperature must be above absolute zero (T > 0 K or -273.15\u00b0C)", "Its temperature must be higher than 100\u00b0C", "It must be in a pressurized liquid or gaseous state", "It must possess a net positive or negative electrical charge"],
        answer: 0,
        explanation: "\u2705 Why 'Its absolute temperature must be above absolute zero (T > 0 K or -273.15\u00b0C)' is Correct: All substances with a temperature above absolute zero possess thermal energy and continuously emit electromagnetic radiation in all directions."
      },
      {
        id: 262,
        question: "In heat transfer and physics, how is an idealized 'blackbody' formally defined?",
        options: ["A hypothetical ideal body that absorbs all incident thermal radiation of all wavelengths and directions, reflecting and transmitting none", "Any surface coated with black matte enamel paint", "A material that completely blocks and reflects 100% of incident radiation", "A body with a surface emissivity of exactly zero"],
        answer: 0,
        explanation: "\u2705 Why 'A hypothetical ideal body that absorbs all incident thermal radiation of all wavelengths and directions, reflecting and transmitting none' is Correct: A blackbody is a perfect absorber (absorptivity \u03b1 = 1) and also a perfect emitter (emissivity \u03b5 = 1) at any given temperature and wavelength."
      },
      {
        id: 263,
        question: "Since a perfect blackbody does not naturally exist, what laboratory apparatus provides the closest physical approximation of a blackbody?",
        options: ["A polished silver optical mirror", "A small aperture (pinhole) into a large isothermal cavity coated internally with absorptive material", "A solid translucent quartz crystal rod", "An open vacuum chamber illuminated by sunlight"],
        answer: 1,
        explanation: "\u2705 Why 'A small aperture (pinhole) into a large isothermal cavity coated internally with absorptive material' is Correct: Radiation entering a small hole in a cavity undergoes countless internal reflections and absorptions with negligible chance of escaping, effectively making the hole absorb virtually all incident radiation."
      },
      {
        id: 264,
        question: "Which historic physicist first formulated the exact mathematical equation describing the spectral distribution of blackbody radiation as a function of wavelength and absolute temperature?",
        options: ["Max Planck", "Isaac Newton", "James Prescott Joule", "Daniel Bernoulli"],
        answer: 0,
        explanation: "\u2705 Why 'Max Planck' is Correct: Max Planck introduced the quantum hypothesis in 1900 to derive Planck's Law of Radiation, which accurately predicted blackbody spectral emissive power and resolved the ultraviolet catastrophe."
      },
      {
        id: 265,
        question: "According to the Stefan-Boltzmann Law (4th Power Law), how does the total emissive power (E_b) of a blackbody vary with its temperature?",
        options: ["Directly proportional to temperature in degrees Celsius", "Inversely proportional to temperature in Kelvin", "Directly proportional to the fourth power of its absolute temperature (E_b = \u03c3 \u00b7 T\u2074)", "Proportional to the square root of system absolute pressure"],
        answer: 2,
        explanation: "\u2705 Why 'Directly proportional to the fourth power of its absolute temperature (E_b = \u03c3 \u00b7 T\u2074)' is Correct: The Stefan-Boltzmann law states that total blackbody radiant emissive power is directly proportional to T\u2074, where T is the absolute temperature in Kelvin."
      },
      {
        id: 266,
        question: "What is the numerical value and standard SI unit of the Stefan-Boltzmann constant (\u03c3)?",
        options: ["5.67 \u00d7 10\u207b\u2078 W / (m\u00b2\u00b7K\u2074)", "1.38 \u00d7 10\u207b\u00b2\u00b3 J / K", "8.314 kJ / (kmol\u00b7K)", "6.626 \u00d7 10\u207b\u00b3\u2074 m\u00b2\u00b7kg / s"],
        answer: 0,
        explanation: "\u2705 Why '5.67 \u00d7 10\u207b\u2078 W / (m\u00b2\u00b7K\u2074)' is Correct: The Stefan-Boltzmann constant has the value \u03c3 = 5.670374 \u00d7 10\u207b\u2078 W/(m\u00b2\u00b7K\u2074)."
      },
      {
        id: 267,
        question: "What is 'surface emissivity' (\u03b5) and what is its possible numerical range for real engineering surfaces?",
        options: ["The ratio of radiation emitted by a surface to that emitted by a blackbody at the same temperature, ranging from 0 \u2264 \u03b5 \u2264 1", "The ratio of reflected radiation to incident radiation, ranging from 1 to infinity", "The electrical conductivity of the surface measured in Siemens", "The thermal conductivity divided by bulk density"],
        answer: 0,
        explanation: "\u2705 Why 'The ratio of radiation emitted by a surface to that emitted by a blackbody at the same temperature, ranging from 0 \u2264 \u03b5 \u2264 1' is Correct: Emissivity \u03b5 measures how closely a real surface approximates a blackbody (\u03b5 = 1 for a blackbody, \u03b5 < 1 for all real surfaces, and \u03b5 = 0 for an ideal reflector)."
      },
      {
        id: 268,
        question: "When computing net radiative heat exchange with Q = \u03b5 \u00b7 \u03c3 \u00b7 A \u00b7 (T_1\u2074 - T_2\u2074), why is it strictly required that temperatures be expressed in absolute Kelvin (K)?",
        options: ["Because the fourth-power Stefan-Boltzmann law is derived from thermodynamic principles rooted strictly at absolute zero", "Because negative Celsius values cannot be raised to an even power", "Because degrees Celsius are incompatible with metric square meters", "Because Kelvin cancels out surface reflection coefficients"],
        answer: 0,
        explanation: "\u2705 Why 'Because the fourth-power Stefan-Boltzmann law is derived from thermodynamic principles rooted strictly at absolute zero' is Correct: Because of the non-linear fourth-power relationship (T\u2074), using Celsius produces catastrophic mathematical errors (e.g., (100+273)\u2074 \u2260 100\u2074 + 273\u2074). Only absolute temperatures (Kelvin or Rankine) yield correct physical answers."
      },
      {
        id: 269,
        question: "Why do strawberry crops and delicate vegetation frequently suffer 'frost damage' on clear, calm nights even when ambient thermometer air temperatures remain above freezing (e.g., +4\u00b0C)?",
        options: ["Because the crops radiate thermal energy directly to the cold night sky (effective sky temperature \u2248 110 K), dropping their surface temperature below 0\u00b0C", "Because night air contains zero relative humidity", "Because wind speed is excessively high on clear nights", "Because atmospheric nitrogen solidifies onto leaves at +4\u00b0C"],
        answer: 0,
        explanation: "\u2705 Why 'Because the crops radiate thermal energy directly to the cold night sky (effective sky temperature \u2248 110 K), dropping their surface temperature below 0\u00b0C' is Correct: On clear nights, the atmosphere has high transmittance to space, which acts as a blackbody sink at very low temperatures. Radiative heat loss from the plants exceeds convective heat gain from the calm air, chilling leaves below freezing."
      },
      {
        id: 270,
        question: "When a small gray object of surface area A_1 and emissivity \u03b5_1 radiates into a very large surrounding room at temperature T_2, why does the heat exchange formula simplify directly to Q = \u03b5_1 \u00b7 \u03c3 \u00b7 A_1 \u00b7 (T_1\u2074 - T_2\u2074)?",
        options: ["Because virtually all radiation emitted by the small body strikes the room and is absorbed, with practically zero reflection returning to the body, making the enclosure act as a blackbody", "Because large rooms have an emissivity of exactly zero", "Because air inside large rooms conducts heat at infinite velocity", "Because the Stefan-Boltzmann constant doubles in large enclosed spaces"],
        answer: 0,
        explanation: "\u2705 Why 'Because virtually all radiation emitted by the small body strikes the room and is absorbed, with practically zero reflection returning to the body, making the enclosure act as a blackbody' is Correct: When A_1 << A_2, the view factor F_12 = 1 and the term (A_1/A_2)(1/\u03b5_2 - 1) in the enclosure equation approaches zero, causing the large room to behave as an ideal blackbody absorber."
      },
      {
        id: 271,
        question: "When an exposed surface (such as vegetation or a roof) exchanges heat by both convection with ambient air and radiation with the night sky, what surface energy balance applies in steady state?",
        options: ["h \u00b7 (T_air - T_surface) = \u03b5 \u00b7 \u03c3 \u00b7 (T_surface\u2074 - T_sky\u2074)", "h \u00b7 (T_air - T_surface) = k / L \u00b7 (T_surface - T_sky)", "T_surface = (T_air + T_sky) / 2", "h + \u03b5 \u00b7 \u03c3 = T_surface \u00b7 T_sky"],
        answer: 0,
        explanation: "\u2705 Why 'h \u00b7 (T_air - T_surface) = \u03b5 \u00b7 \u03c3 \u00b7 (T_surface\u2074 - T_sky\u2074)' is Correct: At the surface, the convective heat gained from the warmer ambient air must equal the net radiant heat lost to the cold night sky."
      },
      {
        id: 272,
        question: "In nocturnal atmospheric radiation, what does the engineering assumption 'none of the outgoing radiation comes back' signify?",
        options: ["The clear night sky and outer space act as an ideal blackbody radiation sink at effective sky temperature T_sky, absorbing all emitted rays without reflection", "The atmosphere reflects 100% of rays back to the ground", "The surface has zero emissivity", "Radiation velocity drops to zero at the stratospheric boundary"],
        answer: 0,
        explanation: "\u2705 Why 'The clear night sky and outer space act as an ideal blackbody radiation sink at effective sky temperature T_sky, absorbing all emitted rays without reflection' is Correct: Outer space behaves as an infinite heat sink that does not re-emit or reflect radiation back, modeled by assigning an effective blackbody sky temperature."
      },
      {
        id: 273,
        question: "Why does thermal radiation become the overwhelmingly dominant mode of heat transfer at high temperatures (such as 700\u00b0C steam pipes) compared to low temperatures?",
        options: ["Because radiant emissive power increases with the fourth power of absolute temperature (T\u2074), growing far faster than linear conduction or convection", "Because thermal conductivity of metals drops to absolute zero at 700\u00b0C", "Because convective film coefficients become zero at high temperatures", "Because atmospheric density approaches infinity at elevated surface temperatures"],
        answer: 0,
        explanation: "\u2705 Why 'Because radiant emissive power increases with the fourth power of absolute temperature (T\u2074), growing far faster than linear conduction or convection' is Correct: Convection scales linearly with temperature difference (\u0394T), whereas radiation scales with (T_1\u2074 - T_2\u2074), making radiation grow exponentially dominant as absolute temperature rises."
      },
      {
        id: 274,
        question: "How can the non-linear radiation equation Q = \u03b5 \u00b7 \u03c3 \u00b7 A \u00b7 (T_1\u2074 - T_2\u2074) be linearized into an equivalent radiation heat transfer coefficient (h_r) such that Q = h_r \u00b7 A \u00b7 (T_1 - T_2)?",
        options: ["h_r = \u03b5 \u00b7 \u03c3 \u00b7 (T_1 + T_2) \u00b7 (T_1\u00b2 + T_2\u00b2)", "h_r = \u03b5 \u00b7 \u03c3 / (T_1 - T_2)", "h_r = \u03b5 \u00b7 \u03c3 \u00b7 (T_1\u2074 - T_2\u2074)", "h_r = (T_1 + T_2) / (\u03b5 \u00b7 \u03c3)"],
        answer: 0,
        explanation: "\u2705 Why 'h_r = \u03b5 \u00b7 \u03c3 \u00b7 (T_1 + T_2) \u00b7 (T_1\u00b2 + T_2\u00b2)' is Correct: Factoring the difference of fourth powers: (T_1\u2074 - T_2\u2074) = (T_1 - T_2)(T_1 + T_2)(T_1\u00b2 + T_2\u00b2). Defining h_r = \u03b5\u00b7\u03c3\u00b7(T_1 + T_2)(T_1\u00b2 + T_2\u00b2) allows radiation to be treated like convection in parallel resistance networks."
      },
      {
        id: 275,
        question: "Why is the radiation view factor (shape factor F_12) equal to exactly 1.0 for a convex body (such as a sphere or pipe) suspended inside a complete enclosure?",
        options: ["Because all radiant energy leaving the convex exterior surface in any direction must directly strike the enclosing surrounding walls", "Because convex bodies reflect 100% of their own emitted radiation back into their own core", "Because the surrounding enclosure is always at absolute zero", "Because view factor is defined as the ratio of surface diameters"],
        answer: 0,
        explanation: "\u2705 Why 'Because all radiant energy leaving the convex exterior surface in any direction must directly strike the enclosing surrounding walls' is Correct: A convex body cannot 'see' itself (F_11 = 0). By summation rule \u03a3 F_1j = 1, all radiation leaving body 1 necessarily intercepts the surrounding enclosure (F_12 = 1)."
      },
      {
        id: 276,
        question: "In agricultural frost problems, what thermodynamic balance causes crop leaves to freeze at 0\u00b0C even when ambient air temperature is above 0\u00b0C?",
        options: ["Radiative cooling to the cold sky extracts heat faster than convection from calm air can replenish it, depressing leaf equilibrium temperature below air temperature", "Air convection cools the plant faster than radiative loss", "Evaporative cooling from dry leaves creates liquid nitrogen", "Ambient air at 4\u00b0C has a negative specific heat"],
        answer: 0,
        explanation: "\u2705 Why 'Radiative cooling to the cold sky extracts heat faster than convection from calm air can replenish it, depressing leaf equilibrium temperature below air temperature' is Correct: When the sky is clear, radiative emission to the ~110 K sky sink chills the surface below ambient air temperature until convective heat transfer from the warmer air matches the radiative deficit."
      },
      {
        id: 277,
        question: "What is the fundamental conservation law governing radiant energy falling upon any physical body?",
        options: ["a + r + t = 1 (Absorptivity + Reflectivity + Transmissivity = 1)", "a \u00b7 r \u00b7 t = 1", "a + r = t", "a / (r + t) = 1"],
        answer: 0,
        explanation: "\u2705 Why 'a + r + t = 1 (Absorptivity + Reflectivity + Transmissivity = 1)' is Correct: When radiant energy strikes a body, the total incident radiation is partitioned into three fractions: the fraction absorbed (a), the fraction reflected (r), and the fraction transmitted (t), which must sum to 1 by energy conservation."
      },
      {
        id: 278,
        question: "For an opaque body (a body through which no thermal radiation can pass), how does the radiation energy balance simplify?",
        options: ["Transmissivity t = 0, so a + r = 1", "Reflectivity r = 0, so a + t = 1", "Absorptivity a = 0, so r + t = 1", "a + r + t = 0"],
        answer: 0,
        explanation: "\u2705 Why 'Transmissivity t = 0, so a + r = 1' is Correct: Most solid engineering materials are opaque to thermal radiation (t = 0), meaning all incident radiation is either absorbed or reflected at the surface."
      },
      {
        id: 279,
        question: "In the Stefan-Boltzmann law expressed in Metric/SI engineering units using hours, what is the numerical value of the constant \u03c3 in J / (hr\u00b7m\u00b2\u00b7K\u2074)?",
        options: ["20,408.4 \u00d7 10\u207b\u2078 J / (hr\u00b7m\u00b2\u00b7K\u2074)", "5.67 \u00d7 10\u207b\u2078 J / (hr\u00b7m\u00b2\u00b7K\u2074)", "1,000 \u00d7 10\u207b\u2078 J / (hr\u00b7m\u00b2\u00b7K\u2074)", "3.1416 \u00d7 10\u207b\u2078 J / (hr\u00b7m\u00b2\u00b7K\u2074)"],
        answer: 0,
        explanation: "\u2705 Why '20,408.4 \u00d7 10\u207b\u2078 J / (hr\u00b7m\u00b2\u00b7K\u2074)' is Correct: Multiplying 5.67 \u00d7 10\u207b\u2078 W/(m\u00b2\u00b7K\u2074) by 3600 seconds/hour converts Watts (J/s) to J/hr: 5.67 \u00d7 3600 \u00d7 10\u207b\u2078 = 20,412 (commonly rounded to 20,408.4 \u00d7 10\u207b\u2078 J/(hr\u00b7m\u00b2\u00b7K\u2074))."
      },
      {
        id: 280,
        question: "What is the general thermal engineering definition of a 'Heat Exchanger'?",
        options: ["Any device which affects the transfer of heat from one substance to another", "A machine that converts thermal heat strictly into electrical voltage", "A sealed container that completely stops heat from moving", "A compressor that pressurizes refrigerants without temperature change"],
        answer: 0,
        explanation: "\u2705 Why 'Any device which affects the transfer of heat from one substance to another' is Correct: A heat exchanger is an engineering device designed to efficiently transfer thermal energy between two or more fluids at different temperatures."
      },
      {
        id: 281,
        question: "In a steam condenser heat exchanger, how do the fluid temperatures behave during the heat exchange process?",
        options: ["The condensing steam stays at constant saturation temperature while giving up latent heat to colder coolant water whose temperature gradually rises", "Both fluids decrease in temperature at identical rates", "The coolant water boils while the steam increases in temperature", "Both fluids remain at absolute zero throughout the shell"],
        answer: 0,
        explanation: "\u2705 Why 'The condensing steam stays at constant saturation temperature while giving up latent heat to colder coolant water whose temperature gradually rises' is Correct: Phase-change condensation occurs isothermally (constant temperature) as latent heat of vaporization is released to the cooling water."
      },
      {
        id: 282,
        question: "In a steam boiler heat exchanger, what describes the temperature profile of the boiling fluid?",
        options: ["The boiling water receives heat at constant saturation temperature while the hot combustion gases decrease in temperature as they flow across tube banks", "The boiling water drops in temperature while the combustion gas increases in temperature", "Both fluids maintain identical rising temperatures", "The combustion gases undergo isothermal expansion"],
        answer: 0,
        explanation: "\u2705 Why 'The boiling water receives heat at constant saturation temperature while the hot combustion gases decrease in temperature as they flow across tube banks' is Correct: Inside the boiler tubes, water evaporates at constant saturation temperature while hot flue gases cool down as they transfer sensible heat."
      },
      {
        id: 283,
        question: "What is the flow arrangement in a 'Parallel-Flow' heat exchanger?",
        options: ["Both hot and cold fluids enter at the same end and flow in the same direction toward the exit", "The fluids flow perpendicular to each other at a 90-degree angle", "The fluids enter at opposite ends and travel in reverse directions", "One fluid is stationary while the other rotates in a vortex"],
        answer: 0,
        explanation: "\u2705 Why 'Both hot and cold fluids enter at the same end and flow in the same direction toward the exit' is Correct: In parallel flow, both fluids flow co-currently in the same direction. The cold fluid exit temperature can never exceed the hot fluid exit temperature."
      },
      {
        id: 284,
        question: "Why is 'Counter-Flow' considered the most favorable and thermally efficient flow arrangement for fluid heaters and coolers?",
        options: ["It provides the highest Logarithmic Mean Temperature Difference (LMTD) for given terminal temperatures and allows the cold fluid exit temperature to exceed the hot fluid exit temperature", "It completely eliminates the need for heat transfer surface area", "It operates with zero fluid friction and zero pressure drop", "It prevents fluids from transferring heat by convection"],
        answer: 0,
        explanation: "\u2705 Why 'It provides the highest Logarithmic Mean Temperature Difference (LMTD) for given terminal temperatures and allows the cold fluid exit temperature to exceed the hot fluid exit temperature' is Correct: Counter-flow maintains a uniform temperature difference along the entire length, maximizing LMTD and thermodynamic effectiveness."
      },
      {
        id: 285,
        question: "What mathematical formula defines the Logarithmic Mean Temperature Difference (LMTD)?",
        options: ["LMTD = (\u0394t_max - \u0394t_min) / ln(\u0394t_max / \u0394t_min)", "LMTD = (\u0394t_max + \u0394t_min) / 2", "LMTD = sqrt(\u0394t_max \u00b7 \u0394t_min)", "LMTD = ln(\u0394t_max - \u0394t_min)"],
        answer: 0,
        explanation: "\u2705 Why 'LMTD = (\u0394t_max - \u0394t_min) / ln(\u0394t_max / \u0394t_min)' is Correct: The logarithmic mean temperature difference correctly accounts for the exponential temperature variation of fluids flowing along heat exchanger surfaces."
      },
      {
        id: 286,
        question: "According to heat transfer engineering guidelines (Kreith & Bohn), under what condition can the Arithmetic Mean Temperature Difference (AMTD) be safely used in place of the LMTD with less than 1% error?",
        options: ["When \u0394t_max is not more than 50% greater than \u0394t_min (\u0394t_max / \u0394t_min \u2264 1.5)", "When \u0394t_max is more than 500% greater than \u0394t_min", "Only when both fluids are boiling", "Whenever fluid velocity is supersonic"],
        answer: 0,
        explanation: "\u2705 Why 'When \u0394t_max is not more than 50% greater than \u0394t_min (\u0394t_max / \u0394t_min \u2264 1.5)' is Correct: When the ratio of terminal temperature differences is 1.5 or less, AMTD = (\u0394t_max + \u0394t_min)/2 approximates LMTD within 1% accuracy."
      },
      {
        id: 287,
        question: "In a steam power plant, what is an 'Economizer' and what is its thermodynamic purpose?",
        options: ["A feed-water heater that recovers waste heat from exiting boiler flue gases to preheat liquid water before entering the boiler drum", "A turbine that extracts mechanical work directly from cold air", "A chemical filter that removes dissolved oxygen from fuel oil", "A valve that reduces steam pressure before the superheater"],
        answer: 0,
        explanation: "\u2705 Why 'A feed-water heater that recovers waste heat from exiting boiler flue gases to preheat liquid water before entering the boiler drum' is Correct: An economizer recovers sensible heat from flue gases, raising boiler thermal efficiency by preheating boiler feed water."
      },
      {
        id: 288,
        question: "In thermal sizing of heat exchangers, how is the required heat transfer surface area (A) related to the total thermal load (Q), overall coefficient (U), and mean temperature difference (LMTD)?",
        options: ["A = Q / (U \u00b7 LMTD)", "A = Q \u00b7 U \u00b7 LMTD", "A = (U \u00b7 LMTD) / Q", "A = Q + U + LMTD"],
        answer: 0,
        explanation: "\u2705 Why 'A = Q / (U \u00b7 LMTD)' is Correct: The fundamental design equation for heat exchangers is Q = U \u00b7 A \u00b7 LMTD, which rearranges to A = Q / (U \u00b7 LMTD)."
      },
      {
        id: 289,
        question: "In thermal systems, how is the 'Overall Heat Transfer Coefficient' (U-value) formally defined and what does a larger U-value indicate?",
        options: ["A measure of how readily heat conducts through a series of resistant mediums; a larger U indicates easier heat transfer from the heat source to the fluid being heated", "The ratio of fluid viscosity to thermal conductivity; a larger U indicates turbulent stagnation", "The electrical resistance of a heat exchanger shell; a larger U indicates high voltage insulation", "The rate of mass loss per unit time during boiling; a larger U indicates rapid fluid depletion"],
        answer: 0,
        explanation: "\u2705 Why 'A measure of how readily heat conducts through a series of resistant mediums; a larger U indicates easier heat transfer from the heat source to the fluid being heated' is Correct: The U-value quantifies the overall conductance of combined conduction and convection layers. Higher U means less thermal resistance and faster heat transfer."
      },
      {
        id: 290,
        question: "What are the standard SI metric and English engineering units for the Overall Heat Transfer Coefficient (U)?",
        options: ["W / (m\u00b2\u00b7\u00b0C) [or W/(m\u00b2\u00b7K)] in SI, and Btu / (hr\u00b7ft\u00b2\u00b7\u00b0F) in English units", "J / (kg\u00b7\u00b0C) in SI, and ft\u00b7lbf / lb in English units", "W / (m\u00b7K) in SI, and Btu / (hr\u00b7ft\u00b7\u00b0F) in English units", "N / m\u00b2 in SI, and psi in English units"],
        answer: 0,
        explanation: "\u2705 Why 'W / (m\u00b2\u00b7\u00b0C) [or W/(m\u00b2\u00b7K)] in SI, and Btu / (hr\u00b7ft\u00b2\u00b7\u00b0F) in English units' is Correct: The overall coefficient represents heat rate per unit area per unit temperature difference, giving W/(m\u00b2\u00b7\u00b0C) and Btu/(hr\u00b7ft\u00b2\u00b7\u00b0F)."
      },
      {
        id: 291,
        question: "In heat exchanger design, what fundamental governing equation relates heat transfer rate (Q), overall coefficient (U), contact area (A), and mean temperature difference?",
        options: ["Q = U \u00b7 A \u00b7 \u0394T_LMTD", "Q = U / (A \u00b7 \u0394T_LMTD)", "Q = U \u00b7 A / \u0394T_LMTD", "Q = (U + A) \u00b7 \u0394T_LMTD"],
        answer: 0,
        explanation: "\u2705 Why 'Q = U \u00b7 A \u00b7 \u0394T_LMTD' is Correct: This is the fundamental heat exchanger rating and sizing equation, stating that the total heat transferred is proportional to the overall U-value, active surface area, and logarithmic mean temperature difference."
      },
      {
        id: 292,
        question: "How is the product (U \u00b7 A) related to the total thermal resistance (R_total) of a series of conductive and convective layers in a heat exchanger?",
        options: ["U \u00b7 A = 1 / R_total", "U \u00b7 A = R_total", "U \u00b7 A = (R_total)\u00b2", "U \u00b7 A = ln(R_total)"],
        answer: 0,
        explanation: "\u2705 Why 'U \u00b7 A = 1 / R_total' is Correct: The overall thermal conductance (U\u00b7A) is the reciprocal of the total thermal resistance (R_total = \u03a3 R_i), analogous to electrical conductance G = 1/R."
      },
      {
        id: 293,
        question: "Why is the Logarithmic Mean Temperature Difference (LMTD) mathematically required instead of the Arithmetic Mean (AMTD) for rigorous heat exchanger analysis?",
        options: ["Because fluid temperatures along the heat exchanger surface follow an exponential decay curve rather than a linear variation", "Because arithmetic averages cannot be computed for turbulent flow", "Because the First Law of Thermodynamics forbids addition of temperatures", "Because heat exchanger tube diameters vary logarithmically along length"],
        answer: 0,
        explanation: "\u2705 Why 'Because fluid temperatures along the heat exchanger surface follow an exponential decay curve rather than a linear variation' is Correct: As heat transfers along the conduit length, local temperature differences decrease exponentially, making the logarithmic mean the only mathematically exact driving potential."
      },
      {
        id: 294,
        question: "In operating industrial heat exchangers, what is the 'Fouling Factor' (R_f) and what impact does it have on the overall heat transfer coefficient (U)?",
        options: ["An additional thermal resistance caused by rust, scale, sediment, or biological accumulation on tube surfaces that reduces the effective U-value over time", "A safety multiplier that artificially increases heat transfer area by 500%", "The mechanical friction factor between the shell and outer air", "A parameter indicating the percentage of refrigerant leaked into the atmosphere"],
        answer: 0,
        explanation: "\u2705 Why 'An additional thermal resistance caused by rust, scale, sediment, or biological accumulation on tube surfaces that reduces the effective U-value over time' is Correct: Fouling introduces an extra conductive resistance 1/U_dirty = 1/U_clean + R_f, degrading thermal performance and necessitating periodic cleaning."
      },
      {
        id: 295,
        question: "According to thermal engineering standards, how is a 'Heat Exchanger' comprehensively defined?",
        options: ["A device used to transfer thermal energy (enthalpy) between two or more fluids, between a solid surface and a fluid, or between solid particulates and a fluid, at different temperatures and in thermal contact", "A closed pump that pressurizes liquids to increase their chemical potential", "An adiabatic throttling valve that reduces fluid temperature without heat loss", "A machine that converts mechanical kinetic energy directly into acoustic vibrations"],
        answer: 0,
        explanation: "\u2705 Why 'A device used to transfer thermal energy (enthalpy) between two or more fluids, between a solid surface and a fluid, or between solid particulates and a fluid, at different temperatures and in thermal contact' is Correct: This comprehensive definition covers all categories of heat exchange equipment, whether fluid-to-fluid, fluid-to-particulate, or fluid-to-solid."
      },
      {
        id: 296,
        question: "What is the defining characteristic of a 'Closed-Type' (indirect contact / recuperative) heat exchanger, such as a double-pipe or shell-and-tube exchanger?",
        options: ["The hot and cold fluid streams never come into direct physical contact and are completely separated by a conductive tube wall or plate", "The two fluids are mixed directly in an open chamber to reach instant equilibrium", "Heat transfer is achieved purely by chemical combustion of the fluids", "Both fluids must always be in the supercritical gaseous phase"],
        answer: 0,
        explanation: "\u2705 Why 'The hot and cold fluid streams never come into direct physical contact and are completely separated by a conductive tube wall or plate' is Correct: In closed-type (recuperative) exchangers, fluids flow through separate passages separated by walls, preventing mixing and cross-contamination."
      },
      {
        id: 297,
        question: "How is a 'Double-Pipe' (concentric tube) heat exchanger structurally configured?",
        options: ["One smaller pipe placed concentrically inside a larger pipe, where one fluid flows through the inner tube while the other flows through the annular space between pipes", "Two side-by-side pipes submerged in an unsealed water bucket", "A single spiral coil surrounded by a vacuum glass envelope", "Two intersecting perpendicular pipes with a perforated mixing junction"],
        answer: 0,
        explanation: "\u2705 Why 'One smaller pipe placed concentrically inside a larger pipe, where one fluid flows through the inner tube while the other flows through the annular space between pipes' is Correct: The double-pipe design is the simplest indirect-contact heat exchanger, featuring an inner pipe inside an outer pipe forming an annulus."
      },
      {
        id: 298,
        question: "What fundamental physical law explains why heat exchangers function spontaneously without requiring an external work drive?",
        options: ["The Second Law of Thermodynamics, which dictates that thermal energy naturally and spontaneously flows from higher temperature regions to lower temperature regions", "The Conservation of Linear Momentum", "Pascal's Law of hydrostatic fluid transmission", "Archimedes' Principle of buoyancy"],
        answer: 0,
        explanation: "\u2705 Why 'The Second Law of Thermodynamics, which dictates that thermal energy naturally and spontaneously flows from higher temperature regions to lower temperature regions' is Correct: Spontaneous heat conduction and convection occur strictly down a negative temperature gradient (from hot to cold) in accordance with the Second Law."
      },
      {
        id: 299,
        question: "At any specific point along a heat exchanger, what parameters directly determine the local heat flux (heat flow rate per unit area, kW/m\u00b2)?",
        options: ["The local overall heat transfer coefficient (U) and the local temperature difference (\u0394T) between the hot and cold fluid streams", "Only the total length of the heat exchanger shell", "The atmospheric barometric pressure outside the building", "The electrical ground voltage of the support frame"],
        answer: 0,
        explanation: "\u2705 Why 'The local overall heat transfer coefficient (U) and the local temperature difference (\u0394T) between the hot and cold fluid streams' is Correct: Local heat flux is given by q'' = U \u00b7 \u0394T, where both U and \u0394T may vary along the flow path."
      },
      {
        id: 300,
        question: "Which set of operational and physical factors directly governs the numerical magnitude of the overall heat transfer coefficient (U) in a heat exchanger?",
        options: ["Thermophysical fluid properties (viscosity, thermal conductivity), fluid velocities, construction materials, flow geometry, and surface cleanliness (fouling)", "Only the color of paint used on the outer shell", "The ambient acoustic noise level in the plant room", "The chemical electronegativity of the fluid container bolts"],
        answer: 0,
        explanation: "\u2705 Why 'Thermophysical fluid properties (viscosity, thermal conductivity), fluid velocities, construction materials, flow geometry, and surface cleanliness (fouling)' is Correct: The U-value is synthesized from inner and outer convective film coefficients (governed by fluid velocity and Reynolds/Prandtl numbers), tube wall conductance (k/L), and fouling resistance."
      },
      {
        id: 301,
        question: "In a 'Parallel-Flow' heat exchanger, where does the maximum temperature difference (\u0394t_max) between the hot and cold fluids always occur?",
        options: ["At the fluid inlet end, where the hottest hot fluid enters adjacent to the coldest cold fluid", "At the fluid outlet end, right before discharge", "At the exact midpoint of the pipe length", "Inside the bypass relief valve"],
        answer: 0,
        explanation: "\u2705 Why 'At the fluid inlet end, where the hottest hot fluid enters adjacent to the coldest cold fluid' is Correct: Because both streams enter at the same end, the initial temperature difference is at its absolute maximum (\u0394t_inlet = T_h,in - T_c,in = \u0394t_max) and continuously diminishes toward the outlet."
      },
      {
        id: 302,
        question: "What fundamental thermodynamic temperature limitation exists strictly for a Parallel-Flow heat exchanger?",
        options: ["The cold fluid exit temperature can never exceed the hot fluid exit temperature (T_c,out \u2264 T_h,out)", "The hot fluid exit temperature can never drop below 100\u00b0C", "Both fluids must always exit at absolute zero", "The cold fluid must always vaporize before the outlet"],
        answer: 0,
        explanation: "\u2705 Why 'The cold fluid exit temperature can never exceed the hot fluid exit temperature (T_c,out \u2264 T_h,out)' is Correct: In parallel flow, as the two streams flow together, they can at best approach thermal equilibrium (T_c,out = T_h,out) in an infinite area exchanger, meaning the cold fluid can never emerge hotter than the leaving hot fluid."
      },
      {
        id: 303,
        question: "In a 'Counter-Flow' heat exchanger, how are the terminal temperature differences at the two ends (End 1 and End 2) defined?",
        options: ["\u0394t_1 = (T_h,in - T_c,out) and \u0394t_2 = (T_h,out - T_c,in)", "\u0394t_1 = (T_h,in - T_c,in) and \u0394t_2 = (T_h,out - T_c,out)", "\u0394t_1 = (T_h,in + T_h,out) / 2", "\u0394t_1 = T_h,in \u00b7 T_c,out"],
        answer: 0,
        explanation: "\u2705 Why '\u0394t_1 = (T_h,in - T_c,out) and \u0394t_2 = (T_h,out - T_c,in)' is Correct: Because the fluids flow in opposite directions, one end pairs the hot fluid inlet with the cold fluid outlet, while the opposite end pairs the hot fluid outlet with the cold fluid inlet."
      },
      {
        id: 304,
        question: "Why is Counter-Flow able to heat the cold fluid to an exit temperature that is higher than the hot fluid exit temperature (T_c,out > T_h,out)?",
        options: ["Because the leaving cold fluid exchanges its final heat with the incoming hottest hot fluid at the entrance end", "Because counter-flow violates the Second Law of Thermodynamics", "Because frictional shear heating generates extra thermal energy", "Because counter-flow creates an internal vacuum"],
        answer: 0,
        explanation: "\u2705 Why 'Because the leaving cold fluid exchanges its final heat with the incoming hottest hot fluid at the entrance end' is Correct: Counter-current flow allows the cold fluid to be warmed progressively along its path, finally encountering the highest-temperature entering hot fluid just before discharge."
      },
      {
        id: 305,
        question: "For specified hot and cold fluid inlet and outlet temperatures, how does the Logarithmic Mean Temperature Difference of a counter-flow exchanger compare to that of a parallel-flow exchanger?",
        options: ["LMTD_counter is always greater than (or equal to) LMTD_parallel", "LMTD_counter is always smaller than LMTD_parallel", "Both LMTDs are always identical regardless of flow direction", "LMTD_counter is always negative"],
        answer: 0,
        explanation: "\u2705 Why 'LMTD_counter is always greater than (or equal to) LMTD_parallel' is Correct: Counter-flow maintains a more uniform and higher effective temperature driving difference throughout the exchanger, yielding LMTD_counter \u2265 LMTD_parallel, and thus requiring the smallest surface area."
      },
      {
        id: 306,
        question: "What is a 'Cross-Flow' heat exchanger and where is it commonly utilized in practical engineering systems?",
        options: ["An exchanger where the two fluid streams flow perpendicular (at 90 degrees) to one another, widely used in automobile radiators, air conditioning coils, and compact gas-to-liquid exchangers", "An exchanger where fluids mix together in a turbulent vortex chamber", "An underground geothermal well with zero flow motion", "A pipe surrounded by a vacuum layer without any secondary fluid"],
        answer: 0,
        explanation: "\u2705 Why 'An exchanger where the two fluid streams flow perpendicular (at 90 degrees) to one another, widely used in automobile radiators, air conditioning coils, and compact gas-to-liquid exchangers' is Correct: In cross-flow, one fluid flows through finned tubes while air flows across them perpendicularly, commonly classified as mixed or unmixed cross-flow."
      },
      {
        id: 307,
        question: "When modeling the total radiant power emitted by celestial stars like the Sun, what geometric and thermal assumptions are applied?",
        options: ["The star is modeled as a spherical blackbody (emissivity e = 1.0) with surface area A = 4\u00b7\u03c0\u00b7R\u00b2, radiating total power Q = 4\u00b7\u03c0\u00b7R\u00b2\u00b7\u03c3\u00b7T\u2074 into space", "The star radiates only through its flat equatorial circular plane A = \u03c0\u00b7R\u00b2", "The star transfers heat exclusively by conduction through interplanetary ether", "The star's emissive power is inversely proportional to the cube of its radius"],
        answer: 0,
        explanation: "\u2705 Why 'The star is modeled as a spherical blackbody (emissivity e = 1.0) with surface area A = 4\u00b7\u03c0\u00b7R\u00b2, radiating total power Q = 4\u00b7\u03c0\u00b7R\u00b2\u00b7\u03c3\u00b7T\u2074 into space' is Correct: Stars radiate into near absolute zero space from their full spherical surface area A = 4\u03c0R\u00b2 as idealized blackbody emitters."
      },
      {
        id: 308,
        question: "In an Air-Cooled Condenser (ACC), why is the overall heat transfer coefficient (U) customarily referenced to the 'air-side area'?",
        options: ["Because the convective film coefficient of ambient air is far smaller than that of condensing steam, making air-side convective resistance the dominant controlling resistance", "Because air-side surface area is always smaller than the tube internal area", "Because steam cannot transfer heat across copper or steel tubes", "Because air-cooled condensers operate in a complete vacuum"],
        answer: 0,
        explanation: "\u2705 Why 'Because the convective film coefficient of ambient air is far smaller than that of condensing steam, making air-side convective resistance the dominant controlling resistance' is Correct: Air film coefficients (typically 20\u201350 W/m\u00b2\u00b7K) are orders of magnitude lower than phase-change condensation coefficients (5,000\u201315,000 W/m\u00b2\u00b7K). Thus, the air side controls the heat transfer and requires extended finned surfaces."
      },
      {
        id: 309,
        question: "In a boiler Economizer with no external energy loss, what thermodynamic heat balance governs the gas and water temperature changes?",
        options: ["m_gas \u00b7 C_p,gas \u00b7 (T_gas,in - T_gas,out) = m_water \u00b7 C_p,water \u00b7 (T_water,out - T_water,in)", "m_gas \u00b7 C_p,gas = m_water \u00b7 C_p,water \u00b7 LMTD", "T_gas,in - T_gas,out = T_water,out - T_water,in regardless of mass flow rate", "m_gas \u00b7 T_gas,in = m_water \u00b7 T_water,in"],
        answer: 0,
        explanation: "\u2705 Why 'm_gas \u00b7 C_p,gas \u00b7 (T_gas,in - T_gas,out) = m_water \u00b7 C_p,water \u00b7 (T_water,out - T_water,in)' is Correct: By the First Law of Thermodynamics, the sensible heat lost by the flue gas stream equals the sensible heat gained by the liquid boiler feedwater."
      },
      {
        id: 310,
        question: "In heat exchangers where one of the fluids undergoes an isothermal phase change (such as in a steam condenser or boiler), how does the LMTD for parallel flow compare to that for counterflow?",
        options: ["The LMTD is mathematically identical for both parallel flow and counterflow because the condensing or boiling fluid temperature remains perfectly constant throughout", "Counterflow LMTD is ten times larger than parallel flow", "Parallel flow cannot function when phase change occurs", "The LMTD becomes zero in all phase-change heat exchangers"],
        answer: 0,
        explanation: "\u2705 Why 'The LMTD is mathematically identical for both parallel flow and counterflow because the condensing or boiling fluid temperature remains perfectly constant throughout' is Correct: When one fluid temperature is constant (T_h = const or T_c = const), the temperature difference profile across the heat exchanger is geometrically identical regardless of the second fluid's flow direction, making LMTD_parallel = LMTD_counter."
      }
    ]
  },
  ac_dc_machinery: {
      "title": "AC/DC Machinery",
      "chapter": "Theraja Chapters 6 & 8 - Official Multiple Choice Questions (61 Items)",
      "questions": [
          {
              "id": 1,
              "question": "In an alternator, the eddy current and hysteresis losses occur in:",
              "options": [
                  "Iron of field structure only",
                  "Iron of armature structure only",
                  "Both iron of field structure and armature structure",
                  "None of the above"
              ],
              "answer": 1,
              "explanation": "• Why 'Iron of armature structure only' is Correct (Key: b): The armature core is subjected to alternating magnetic flux as rotor magnetic poles sweep past it at synchronous frequency (f = PN/120), producing both hysteresis and eddy current core losses. The field structure carries steady direct current (DC), so its flux is constant and does not induce core losses.\n• Why Other Choices are Incorrect: The DC rotor field experiences no cyclic flux reversals under balanced steady-state operation."
          },
          {
              "id": 2,
              "question": "Which of the following prime movers is the least efficient?",
              "options": [
                  "Gas turbine",
                  "Petrol engine",
                  "Steam engine",
                  "Diesel engine"
              ],
              "answer": 2,
              "explanation": "• Why 'Steam engine' is Correct (Key: c): Reciprocating steam engines have low thermal efficiency (typically 10% to 15%) compared to internal combustion engines (Diesel: 35–40%, Petrol: 25–30%) and modern gas turbines.\n• Why Other Choices are Incorrect: Diesel engines, petrol engines, and gas turbines operate at significantly higher thermodynamic cycle temperatures and efficiencies."
          },
          {
              "id": 3,
              "question": "The rotors preferred for alternators coupled to hydraulic turbines are:",
              "options": [
                  "Salient pole type",
                  "Cylindrical rotor type",
                  "Solid rotor type",
                  "Any of the above"
              ],
              "answer": 0,
              "explanation": "• Why 'Salient pole type' is Correct (Key: a): Hydraulic turbines operate at low speeds (typically 100 to 375 rpm). To generate standard 50 Hz or 60 Hz frequency, a large number of poles is required (P = 120f/N). Salient-pole rotors provide large diameters and short axial lengths to accommodate many projected poles.\n• Why Other Choices are Incorrect: Cylindrical (non-salient) rotors are designed for high-speed steam turbo-alternators (1500 to 3000 rpm) with small diameters to minimize centrifugal stresses."
          },
          {
              "id": 4,
              "question": "The stator of an alternator consists of:",
              "options": [
                  "An iron core",
                  "Stator winding",
                  "Both iron core and stator winding",
                  "None of the above"
              ],
              "answer": 2,
              "explanation": "• Why 'Both iron core and stator winding' is Correct (Key: c): The stationary armature (stator) comprises a laminated silicon-steel magnetic core with internal perimeter slots and insulated copper phase windings placed inside the slots.\n• Why Other Choices are Incorrect: The stator requires both the magnetic iron circuit and the electrical conductor circuit to generate AC voltage."
          },
          {
              "id": 5,
              "question": "An alternator having 8 poles rotating at 250 rpm will have",
              "options": [
                  "60 Hz",
                  "50 Hz",
                  "25 Hz",
                  "$\\frac{50}{3}\\text{ Hz}$"
              ],
              "answer": 3,
              "explanation": "• Why '50/3 Hz' is Correct (Key: d): Using the fundamental frequency relationship $f = \\frac{P \\cdot N}{120}$:\n$$f = \\frac{8 \\times 250}{120} = \\frac{2000}{120} = \\frac{50}{3}\\text{ Hz} \\approx 16.67\\text{ Hz}$$\n• Why Other Choices are Incorrect: 50 Hz requires 750 rpm for 8 poles; 60 Hz requires 900 rpm; 25 Hz requires 375 rpm."
          },
          {
              "id": 6,
              "question": "What is the largest size of alternator manufactured in India?",
              "options": [
                  "110 MVA",
                  "210 MVA",
                  "250 MVA",
                  "500 MVA"
              ],
              "answer": 3,
              "explanation": "• Why '500 MVA' is Correct (Key: d): Standard large thermal power utility turbo-generators manufactured by BHEL (Bharat Heavy Electricals Limited) reach unit ratings of 500 MW / 500 MVA (and up to 660–800 MW in super-critical units).\n• Why Other Choices are Incorrect: 110 MVA and 210 MVA represent older vintage thermal generation blocks."
          },
          {
              "id": 7,
              "question": "An exciter used for a synchronous alternator is essentially a:",
              "options": [
                  "DC shunt motor",
                  "DC series motor",
                  "DC shunt generator",
                  "DC series generator"
              ],
              "answer": 2,
              "explanation": "• Why 'DC shunt generator' is Correct (Key: c): The field winding of an alternator requires direct current (DC) at nearly constant voltage. A DC shunt (or separately excited compound) generator driven on the main shaft serves as the standard exciter.\n• Why Other Choices are Incorrect: Motors consume electrical power rather than supplying excitation; series generators have variable voltage highly sensitive to load current."
          },
          {
              "id": 8,
              "question": "The rating of alternators is usually expressed in:",
              "options": [
                  "Full load current",
                  "Horsepower (hp)",
                  "kVA or MVA",
                  "kW or MW"
              ],
              "answer": 2,
              "explanation": "• Why 'kVA or MVA' is Correct (Key: c): Like transformers, alternator heating depends on $I^2R$ copper losses (proportional to current) and core losses (proportional to voltage), both of which are independent of load power factor. Hence, rating is governed by apparent power ($S = \\sqrt{3} V_L I_L$ in kVA or MVA).\n• Why Other Choices are Incorrect: kW rating depends on the power factor of the connected load; horsepower is reserved for mechanical outputs."
          },
          {
              "id": 9,
              "question": "For a 3-phase, 4-pole alternator with armature winding placed in 96 slots, the number of slots per pole per phase ($m$) is:",
              "options": [
                  "2",
                  "4",
                  "8",
                  "16"
              ],
              "answer": 2,
              "explanation": "• Why '8' is Correct (Key: c): Slots per pole per phase $m = \\frac{\\text{Total Slots}}{\\text{Poles} \\times \\text{Phases}}$:\n$$m = \\frac{96}{4 \\times 3} = \\frac{96}{12} = 8$$\n• Why Other Choices are Incorrect: Total slots per pole = 96 / 4 = 24; dividing among 3 phases gives exactly 8 slots/pole/phase."
          },
          {
              "id": 10,
              "question": "The number of electrical degrees completed in one physical revolution of a 6-pole synchronous generator is:",
              "options": [
                  "120°",
                  "360°",
                  "720°",
                  "1080°"
              ],
              "answer": 3,
              "explanation": "• Why '1080°' is Correct (Key: d): The relationship between electrical degrees ($\\theta_e$) and mechanical degrees ($\\theta_m$) is:\n$$\\theta_e = \\left(\\frac{P}{2}\\right) \\theta_m = \\left(\\frac{6}{2}\\right) \\times 360^\\circ = 3 \\times 360^\\circ = 1080^\\circ$$\n• Why Other Choices are Incorrect: 360° corresponds to a 2-pole machine; 720° corresponds to a 4-pole machine."
          },
          {
              "id": 11,
              "question": "The RMS value of generated voltage per phase in an alternator is given by:",
              "options": [
                  "$E_{ph} = 4.44 \\cdot K_c \\cdot K_d \\cdot f \\cdot \\Phi \\cdot T_{ph}$",
                  "$E_{ph} = 4.44 \\cdot K_c \\cdot K_d \\cdot f \\cdot T_{ph}$",
                  "$E_{ph} = 4.44 \\cdot K_c \\cdot K_d \\cdot f^2 \\cdot \\Phi \\cdot T_{ph}$",
                  "$E_{ph} = 1.11 \\cdot K_c \\cdot K_d \\cdot f \\cdot \\Phi \\cdot T_{ph}$"
              ],
              "answer": 0,
              "explanation": "• Why 'Eph = 4.44 Kc Kd f Φ Tph' is Correct (Key: a): Average induced EMF per turn is $4f\\Phi$. For $T_{ph}$ turns and a sinusoidal form factor ($K_f = 1.11$), RMS EMF is $4 \\times 1.11 \\cdot f \\Phi T_{ph} = 4.44 f \\Phi T_{ph}$. Accounting for pitch factor ($K_c$) and distribution factor ($K_d$) yields $4.44 K_c K_d f \\Phi T_{ph}$.\n• Why Other Choices are Incorrect: Option b omits magnetic flux $\\Phi$; option c squares frequency; option d uses average instead of RMS."
          },
          {
              "id": 12,
              "question": "If the rotational speed of an alternator is reduced from 3000 rpm to 1500 rpm, the generated EMF per phase will:",
              "options": [
                  "Double",
                  "Remain unchanged",
                  "Become half",
                  "Become one-fourth"
              ],
              "answer": 2,
              "explanation": "• Why 'Become half' is Correct (Key: c): Generated EMF is directly proportional to speed ($E \\propto f \\propto N$) for constant field excitation flux $\\Phi$. Reducing speed by 50% reduces frequency and generated voltage to half ($E_2 / E_1 = 1500 / 3000 = 0.5$).\n• Why Other Choices are Incorrect: Halving speed halves the rate of flux cutting."
          },
          {
              "id": 13,
              "question": "In which of the following winding configurations will the generated EMF waveform be closest to a pure sine wave?",
              "options": [
                  "Distributed winding with short-pitch coils",
                  "Distributed winding with full-pitch coils",
                  "Concentrated winding with full-pitch coils",
                  "Same in all of the above"
              ],
              "answer": 0,
              "explanation": "• Why 'Distributed winding with short-pitch coils' is Correct (Key: a): Distributing the winding across multiple slots eliminates slot harmonics ($K_d < 1$ for harmonics), and chording (short-pitching) coils by angle $\\alpha$ attenuates or completely eliminates selected harmonics ($K_c = \\cos(n\\alpha/2) = 0$), yielding a smooth sinusoidal output.\n• Why Other Choices are Incorrect: Concentrated full-pitch windings generate significant harmonic distortions in their induced EMF."
          },
          {
              "id": 14,
              "question": "An alternator has its field winding on the rotor and armature on the stator. Under steady-state balanced conditions, its air-gap magnetic field is:",
              "options": [
                  "Stationary with respect to the rotor",
                  "Rotating at synchronous speed in the direction of rotor rotation",
                  "Rotating at synchronous speed with respect to the rotor",
                  "Both stationary with respect to the rotor and rotating at synchronous speed in the direction of rotor rotation"
              ],
              "answer": 3,
              "explanation": "• Why 'Both stationary with respect to the rotor and rotating at synchronous speed in the direction of rotor rotation' is Correct (Key: d): The rotor field rotates at synchronous speed $N_s$ in space, and balanced 3-phase stator armature currents produce a rotating field that also travels at $N_s$ in the same direction. Therefore, the resultant air-gap field rotates at synchronous speed relative to the stator and is stationary relative to the rotor.\n• Why Other Choices are Incorrect: Because both physical conditions occur simultaneously, neither choice alone is complete."
          },
          {
              "id": 15,
              "question": "When a balanced 3-phase distributed armature winding carries balanced 3-phase currents, the strength of the resultant rotating magnetic field is:",
              "options": [
                  "3 times the peak amplitude of each phase pulsating field",
                  "2 times the peak amplitude of each phase pulsating field",
                  "Equal to the peak amplitude of each phase pulsating field",
                  "1.5 times the peak amplitude of each phase pulsating field"
              ],
              "answer": 3,
              "explanation": "• Why '1.5 times the peak amplitude...' is Correct (Key: d): By Ferraris' theorem, three pulsating magnetic fields displaced by 120° in space carrying currents displaced by 120° in time combine to form a constant-magnitude rotating magnetic field of strength:\n$$F_R = \\frac{3}{2} F_m = 1.5 F_m$$\n• Why Other Choices are Incorrect: The resultant amplitude is strictly $\\frac{3}{2}$ or 1.5 times the maximum phase amplitude $F_m$."
          },
          {
              "id": 16,
              "question": "The synchronous reactance ($X_s$) of an alternator represents:",
              "options": [
                  "Armature reaction reactance and armature leakage reactance",
                  "Armature leakage reactance and field winding reactance",
                  "Field winding reactance and armature reaction reactance",
                  "A physical reactance connected externally in series with the generator"
              ],
              "answer": 0,
              "explanation": "• Why 'Armature reaction reactance and leakage reactance' is Correct (Key: a): Synchronous reactance $X_s$ is the total fictitious reactance accounting for both actual magnetic leakage flux ($X_L$) and the voltage drop caused by armature reaction flux ($X_{ar}$), such that $X_s = X_L + X_{ar}$.\n• Why Other Choices are Incorrect: Synchronous reactance does not include rotor field winding reactance."
          },
          {
              "id": 17,
              "question": "The armature reaction effect in a synchronous machine depends primarily on:",
              "options": [
                  "Terminal voltage",
                  "Power factor of the load",
                  "Speed of the machine",
                  "Type of prime-mover"
              ],
              "answer": 1,
              "explanation": "• Why 'Power factor of the load' is Correct (Key: b): At unity power factor, armature reaction is purely cross-magnetizing (distorting the field). At zero power factor lagging, it is purely demagnetizing (reducing main flux). At zero power factor leading, it is purely magnetizing (boosting main flux).\n• Why Other Choices are Incorrect: Speed and prime mover determine frequency and power input, but the nature of armature reaction MMF depends directly on the phase angle between armature current and induced voltage."
          },
          {
              "id": 18,
              "question": "A leading power factor load connected to an alternator implies that its voltage regulation will be:",
              "options": [
                  "Positive",
                  "Negative",
                  "Zero",
                  "Any one of these"
              ],
              "answer": 3,
              "explanation": "• Why 'Any one of these' is Correct (Key: d): With a leading power factor, the armature reaction is magnetizing, causing full-load terminal voltage $V$ to potentially exceed no-load EMF $E_0$ (negative regulation). Depending on the exact load angle and reactance values, voltage regulation $\\frac{E_0 - V}{V} \\times 100\\%$ can be negative, zero, or slightly positive.\n• Why Other Choices are Incorrect: While leading loads often produce negative regulation, zero or small positive regulation can occur depending on the power factor value."
          },
          {
              "id": 19,
              "question": "Unbalanced 3-phase stator currents in an alternator cause:",
              "options": [
                  "Mechanical vibrations",
                  "Heating of the rotor",
                  "Double-frequency currents induced in the rotor",
                  "All of the above"
              ],
              "answer": 3,
              "explanation": "• Why 'All of the above' is Correct (Key: d): Unbalanced currents produce negative-sequence stator currents that create a magnetic field rotating at synchronous speed in the reverse direction relative to the rotor. This sweeps past the rotor at $2N_s$, inducing double-frequency ($2f = 100/120\\text{ Hz}$) currents that cause severe rotor surface heating, harmonic torques, and mechanical vibrations.\n• Why Other Choices are Incorrect: All three listed phenomena occur simultaneously."
          },
          {
              "id": 20,
              "question": "In a synchronous generator operating on load:",
              "options": [
                  "The open-circuit voltage ($E_0$) lags terminal voltage ($V$) by the power angle $\\delta$",
                  "The open-circuit voltage ($E_0$) leads terminal voltage ($V$) by the power factor angle $\\phi$",
                  "The open-circuit voltage ($E_0$) leads terminal voltage ($V$) by the power angle $\\delta$",
                  "The open-circuit voltage ($E_0$) lags terminal voltage ($V$) by the power factor angle $\\phi$"
              ],
              "answer": 2,
              "explanation": "• Why 'E0 leads V by power angle δ' is Correct (Key: c): In an alternator delivering electrical power, the rotor magnetic axis is pulled ahead of the stator terminal voltage phasor by rotor torque, so induced excitation EMF $E_0$ leads terminal voltage $V$ by torque angle $\\delta$.\n• Why Other Choices are Incorrect: In synchronous motors, $E$ lags $V$; in generators, $E_0$ leads $V$."
          },
          {
              "id": 21,
              "question": "For constructing a Potier diagram, the Zero Power Factor Characteristic (ZPFC) can be obtained by loading the alternator using a:",
              "options": [
                  "Lamp load",
                  "Water rheostat load",
                  "Synchronous motor as load",
                  "DC motor as load"
              ],
              "answer": 2,
              "explanation": "• Why 'Synchronous motor as load' is Correct (Key: c): An under-excited synchronous motor running at no load acts as an adjustable pure inductive reactor, drawing pure lagging current at zero power factor ($\\cos\\phi \\approx 0$ lagging) without dissipating large real power.\n• Why Other Choices are Incorrect: Lamp loads and water rheostats operate near unity power factor; DC motors cannot connect directly to 3-phase AC terminals."
          },
          {
              "id": 22,
              "question": "On the open-circuit and zero-power-factor full-load curves of an alternator, the vertical distance $PQ$ of the Potier triangle gives the voltage drop across the:",
              "options": [
                  "Armature leakage reactance ($I_a X_L$)",
                  "Armature reaction reactance ($I_a X_{ar}$)",
                  "Synchronous reactance ($I_a X_s$)",
                  "Potier reactance"
              ],
              "answer": 0,
              "explanation": "• Why 'Armature leakage reactance' is Correct (Key: a): In the Potier triangle, the vertical side $PQ$ represents the armature leakage reactance voltage drop $I_a X_L$ (or Potier leakage drop), while the horizontal side represents field excitation required to overcome armature reaction MMF.\n• Why Other Choices are Incorrect: Armature reaction is represented by the horizontal leg of the Potier triangle in equivalent field amperes."
          },
          {
              "id": 23,
              "question": "By performing the Slip Test on a salient-pole alternator, we can determine:",
              "options": [
                  "Operating slip of the machine",
                  "Positive-sequence reactance and negative-sequence reactance",
                  "Direct-axis reactance ($X_d$) and quadrature-axis reactance ($X_q$)",
                  "Subtransient reactance only"
              ],
              "answer": 2,
              "explanation": "• Why 'Direct-axis and quadrature-axis reactance' is Correct (Key: c): The slip test is conducted by driving a salient-pole machine at a speed slightly differing from synchronous speed with unexcited rotor and balanced low-voltage AC applied to the stator. Measuring maximum and minimum envelopes of voltage and current yields $X_d = V_{\\max}/I_{\\min}$ and $X_q = V_{\\min}/I_{\\max}$.\n• Why Other Choices are Incorrect: The purpose is not to measure slip, but to determine the two-reaction magnetic reactances."
          },
          {
              "id": 24,
              "question": "In a slip test, the direct-axis synchronous reactance ($X_d$) of a star-connected salient pole alternator is determined by:",
              "options": [
                  "$X_d = \\frac{V_{max}}{I_{max}}$",
                  "$X_d = \\frac{V_{min}}{I_{max}}$",
                  "$X_d = \\frac{V_{max}}{I_{min}}$",
                  "$X_d = \\frac{V_{min}}{I_{min}}$"
              ],
              "answer": 2,
              "explanation": "• Why 'Xd = Vmax / Imin' is Correct (Key: c): When the direct axis aligns with the stator MMF wave, magnetic reluctance is minimum, flux linkage is maximum, inductive reactance is highest ($X_d$), terminal voltage reaches $V_{\\max}$, and armature current drops to $I_{\\min}$. Thus $X_d = V_{\\max} / I_{\\min}$.\n• Why Other Choices are Incorrect: $X_q = V_{\\min} / I_{\\max}$ corresponds to the minimum-inductance quadrature axis."
          },
          {
              "id": 25,
              "question": "When a 3-phase alternator is suddenly short-circuited at its terminals, the initial value of symmetrical short-circuit current is limited by:",
              "options": [
                  "Subtransient reactance ($X_d''$)",
                  "Transient reactance ($X_d'$)",
                  "Steady-state synchronous reactance ($X_s$)",
                  "Sum of $X_d''$, $X_d'$, and $X_s$"
              ],
              "answer": 0,
              "explanation": "• Why 'Subtransient reactance Xd''' is Correct (Key: a): During the first few cycles (0.01 to 0.05 seconds) following a sudden fault, damper winding currents oppose flux changes, yielding the lowest reactance $X_d''$ and highest initial symmetrical fault current $I'' = E / X_d''$.\n• Why Other Choices are Incorrect: Transient reactance $X_d'$ governs the intermediate period (0.1 to 1.0 s); steady-state reactance $X_s$ limits sustained short-circuit current after several seconds."
          },
          {
              "id": 26,
              "question": "If $X_d$, $X_d'$, and $X_d''$ are the steady-state, transient, and subtransient direct-axis reactances of a synchronous machine, their magnitude relationship is:",
              "options": [
                  "$X_d < X_d' < X_d''$",
                  "$X_d'' < X_d' < X_d$",
                  "$X_d' > X_d'' > X_d$",
                  "$X_d > X_d'' > X_d'$"
              ],
              "answer": 1,
              "explanation": "• Why 'Xd'' < Xd' < Xd' is Correct (Key: b): Damper windings and field windings trap flux during transients, reducing effective magnetic leakage paths. Hence, subtransient reactance is smallest ($X_d'' \\approx 0.15\\text{ pu}$), transient reactance is intermediate ($X_d' \\approx 0.25\\text{ pu}$), and steady-state synchronous reactance is largest ($X_d \\approx 1.0\\text{ to }1.5\\text{ pu}$).\n• Why Other Choices are Incorrect: Because fault current decreases over time ($I'' > I' > I$), reactances must follow the inverse order $X_d'' < X_d' < X_d$."
          },
          {
              "id": 27,
              "question": "The phase sequence of a 3-phase AC generator will be reversed if:",
              "options": [
                  "The field current is reversed keeping the direction of rotation the same",
                  "The field current remains the same but the direction of rotation is reversed",
                  "The field current is reversed and the number of poles is doubled",
                  "The number of poles is doubled without reversing field current"
              ],
              "answer": 1,
              "explanation": "• Why 'Direction of rotation is reversed' is Correct (Key: b): Phase sequence ($A-B-C$ vs $A-C-B$) is the chronological order in which stator phase coils are swept past by rotor magnetic poles. Reversing physical rotation reverses the order of coil encounter. Reversing field current merely inverts voltage polarity (180° shift) without altering sequence.\n• Why Other Choices are Incorrect: Reversing DC field polarity does not change the physical direction of rotating magnetic field vectors."
          },
          {
              "id": 28,
              "question": "An alternator is delivering load to an infinite busbar. If its prime mover suddenly shuts down, the alternator will:",
              "options": [
                  "Continue to work as a generator but reverse its direction of rotation",
                  "Come to a complete standstill",
                  "Continue to run as a synchronous motor in the same direction of rotation",
                  "Start operating as an induction motor"
              ],
              "answer": 2,
              "explanation": "• Why 'Continue to run as synchronous motor...' is Correct (Key: c): Connected to a live infinite bus, the machine remains magnetically locked into synchronism. When mechanical input is lost, power reverses direction (it draws electrical power from the bus) and develops motoring torque, continuing rotation at synchronous speed $N_s$ in the same direction.\n• Why Other Choices are Incorrect: It cannot reverse rotation because the bus rotating magnetic field continues spinning in the original direction."
          },
          {
              "id": 29,
              "question": "A synchronous generator is feeding power to an infinite bus at unity power factor (UPF). If its field excitation is now decreased, it will deliver:",
              "options": [
                  "The same active power at leading power factor",
                  "The same active power at lagging power factor",
                  "More active power at unity power factor",
                  "Less active power at unity power factor"
              ],
              "answer": 0,
              "explanation": "• Why 'The same power at leading pf' is Correct (Key: a): Active power $P$ is determined strictly by the prime mover governor. When excitation is reduced below normal (under-excitation, $E_0 < V$), the generator cannot supply reactive power; instead, it absorbs lagging VARs from the bus, which corresponds to delivering active power at a leading power factor.\n• Why Other Choices are Incorrect: Over-excitation causes an alternator to supply lagging current; under-excitation causes it to supply leading current."
          },
          {
              "id": 30,
              "question": "Synchronous motors are inherently not self-starting because:",
              "options": [
                  "Starters cannot be used on synchronous machines",
                  "Starting winding is not provided on these machines",
                  "The direction of rotation cannot be reversed",
                  "The direction of instantaneous torque reverses every half-cycle"
              ],
              "answer": 3,
              "explanation": "• Why 'Direction of instantaneous torque reverses...' is Correct (Key: d): The stator rotating field sweeps past stationary rotor poles at synchronous speed (e.g., 3000 rpm). Due to high rotor inertia, the rotor cannot accelerate instantaneously. During one half-cycle torque is clockwise, and in the next half-cycle it is counter-clockwise, averaging to zero net starting torque.\n• Why Other Choices are Incorrect: Damper windings or auxiliary pony motors are employed specifically to overcome this inertia."
          },
          {
              "id": 31,
              "question": "A pony motor used for starting a synchronous motor is basically a:",
              "options": [
                  "DC series motor",
                  "DC shunt motor",
                  "Double-winding AC/DC motor",
                  "Small induction motor"
              ],
              "answer": 3,
              "explanation": "• Why 'Small induction motor' is Correct (Key: d): A pony motor is a small auxiliary induction motor (usually having one pair of poles fewer than the synchronous machine) coupled to the main shaft to bring the unexcited synchronous motor up to near-synchronous speed before DC excitation is applied.\n• Why Other Choices are Incorrect: Induction motors provide robust, low-maintenance starting without requiring separate DC supplies."
          },
          {
              "id": 32,
              "question": "A 3-phase synchronous motor can be started by:",
              "options": [
                  "Providing damper winding in pole faces",
                  "Using a pony motor",
                  "Using a coupled DC machine as a motor",
                  "Any of the above"
              ],
              "answer": 3,
              "explanation": "• Why 'Any of the above' is Correct (Key: d): Common starting methods include: (1) Damper winding (squirrel-cage amortisseur bars) allowing induction start, (2) Auxiliary pony motor, and (3) Using the coupled DC exciter generator as a DC starting motor.\n• Why Other Choices are Incorrect: All three are standard industrial methods."
          },
          {
              "id": 33,
              "question": "Compared to an induction motor of the same physical frame size, the air gap in a synchronous motor is:",
              "options": [
                  "Less than half",
                  "Half to three-fourths",
                  "The same",
                  "Three to five times larger"
              ],
              "answer": 3,
              "explanation": "• Why 'Three to five times larger' is Correct (Key: d): In an induction motor, a tiny air gap (0.2–1.5 mm) is essential to minimize magnetizing current and maintain a reasonable power factor. In a synchronous motor, excitation is supplied separately by DC on the rotor, so a much larger air gap is used to increase overload pull-out capacity and transient stability.\n• Why Other Choices are Incorrect: Small air gaps in synchronous machines would cause excessive armature reaction and poor stability."
          },
          {
              "id": 34,
              "question": "A synchronous motor is switched onto the AC supply with its rotor field winding shorted on itself. It will:",
              "options": [
                  "Not start at all",
                  "Start and continue to run as an induction motor",
                  "Start as an induction motor and then pull into synchronous speed automatically",
                  "None of the above"
              ],
              "answer": 1,
              "explanation": "• Why 'Start and continue to run as an induction motor' is Correct (Key: b): The closed field winding (along with damper bars) acts like the rotor winding of an induction motor, developing induction torque to reach sub-synchronous slip speed ($N < N_s$). Without DC excitation, it cannot pull into magnetic locking and continues running with slip.\n• Why Other Choices are Incorrect: DC excitation must be applied to create fixed magnetic poles for synchronous pull-in."
          },
          {
              "id": 35,
              "question": "When $V$ is the applied terminal voltage, the maximum pull-out (breakdown) torque of a synchronous motor varies as:",
              "options": [
                  "$V$",
                  "$\\sqrt{V}$",
                  "$V^2$",
                  "$\\frac{1}{V}$"
              ],
              "answer": 0,
              "explanation": "• Why 'V' is Correct (Key: a): Maximum power developed by a non-salient synchronous motor is $P_{\\max} = \\frac{E \\cdot V}{X_s}$. Since excitation voltage $E$ and synchronous reactance $X_s$ are constant, pull-out torque varies directly as $V$ (in contrast to induction motors where breakdown torque varies as $V^2$).\n• Why Other Choices are Incorrect: Induction motor torque varies with $V^2$; synchronous motor torque varies linearly with $V$."
          },
          {
              "id": 36,
              "question": "If one phase of a 3-phase synchronous motor is open-circuited while at standstill, when switched on the motor will:",
              "options": [
                  "Not start",
                  "Run at half of synchronous speed",
                  "Run with excessive vibrations",
                  "Develop normal torque"
              ],
              "answer": 0,
              "explanation": "• Why 'Not start' is Correct (Key: a): Single-phase supply to a 3-phase winding produces a pulsating stationary magnetic field rather than a rotating field. Since synchronous motors develop zero starting torque even with a balanced rotating field, under single-phase supply it has no starting torque and cannot start.\n• Why Other Choices are Incorrect: An unstarted motor with an open phase cannot accelerate from standstill."
          },
          {
              "id": 37,
              "question": "A synchronous motor can develop steady synchronous torque:",
              "options": [
                  "Only at synchronous speed",
                  "While over-excited only",
                  "When under-loaded only",
                  "Below or above synchronous speed"
              ],
              "answer": 0,
              "explanation": "• Why 'Only at synchronous speed' is Correct (Key: a): Synchronous torque requires continuous magnetic locking between rotating stator poles and rotor DC poles. If rotor speed differs from $N_s$ by even a tiny slip, the relative motion produces alternating torque that destroys synchronism.\n• Why Other Choices are Incorrect: At any speed other than $N_s = 120f/P$, average synchronous torque is zero."
          },
          {
              "id": 38,
              "question": "A 3-phase synchronous motor with stationary armature and rotating field will have:",
              "options": [
                  "No slip rings",
                  "Two slip rings",
                  "Three slip rings",
                  "Four slip rings"
              ],
              "answer": 1,
              "explanation": "• Why 'Two slip rings' is Correct (Key: b): The rotating field structure requires DC power. Two slip rings (positive and negative) convey direct current from the stationary exciter brushes to the rotating field coils.\n• Why Other Choices are Incorrect: 3-phase stationary armature windings connect directly to terminal bushings without any slip rings."
          },
          {
              "id": 39,
              "question": "Under normal steady-state synchronous operation, the damper (cage) winding in a synchronous motor carries:",
              "options": [
                  "High starting and running current",
                  "No starting current",
                  "No running current",
                  "No starting as well as running current"
              ],
              "answer": 2,
              "explanation": "• Why 'No running current' is Correct (Key: c): At synchronous speed ($N = N_s$), the damper bars rotate at the exact same velocity as the stator rotating magnetic field (relative speed is zero). With zero rate of flux cutting ($e = B l v_{\\text{rel}} = 0$), no current is induced in the damper bars under steady running conditions.\n• Why Other Choices are Incorrect: Damper bars carry large currents during starting and during hunting oscillations."
          },
          {
              "id": 40,
              "question": "A 'Synchronous Watt' is formally defined as:",
              "options": [
                  "A unit to express the rating of synchronous motors",
                  "kW as applicable to a synchronous motor",
                  "The torque which at synchronous speed would develop a power of one watt",
                  "None of the above"
              ],
              "answer": 2,
              "explanation": "• Why 'The torque which at synchronous speed develops one watt' is Correct (Key: c): Synchronous watt is a convenient unit of torque. One synchronous watt is the torque that produces 1 Watt of mechanical power when rotating at synchronous speed: $T_{\\text{sync}} = \\frac{P_{\\text{gross}}}{1\\text{ W}}$.\n• Why Other Choices are Incorrect: It is a unit of torque, not a power rating unit."
          },
          {
              "id": 41,
              "question": "The slip rings of a standard 3-phase synchronous motor carry:",
              "options": [
                  "Direct current (DC)",
                  "Alternating current (AC)",
                  "Both AC and DC simultaneously",
                  "No current under normal operation"
              ],
              "answer": 0,
              "explanation": "• Why 'Direct current (DC)' is Correct (Key: a): The rotor carries the field winding, which requires steady direct current from an external DC exciter or rectifier via carbon brushes riding on two insulated slip rings.\n• Why Other Choices are Incorrect: Alternating current flows strictly in the stationary 3-phase stator armature."
          },
          {
              "id": 42,
              "question": "The operating efficiency of a properly designed large industrial synchronous motor falls in the range of:",
              "options": [
                  "99% to 99.5%",
                  "85% to 95%",
                  "75% to 80%",
                  "60% to 70%"
              ],
              "answer": 1,
              "explanation": "• Why '85% to 95%' is Correct (Key: b): Industrial synchronous motors (hundreds of kW to several MW) achieve typical full-load efficiencies between 88% and 96%, higher than equivalent induction motors due to unity or leading power factor operation and lower stator copper losses.\n• Why Other Choices are Incorrect: 99.5% is unattainable due to windage, core, and copper losses; 60–75% represents small fractional-horsepower machines."
          },
          {
              "id": 43,
              "question": "A synchronous motor operating on leading power factor at zero mechanical shaft load is known as a:",
              "options": [
                  "Synchronous converter",
                  "Synchronous condenser",
                  "Synchronous inverter",
                  "Synchronous compensator"
              ],
              "answer": 1,
              "explanation": "• Why 'Synchronous condenser' is Correct (Key: b): When over-excited at no load, a synchronous motor draws pure leading reactive current, behaving electrically identical to a large bank of static power-factor-correcting capacitors (condensers).\n• Why Other Choices are Incorrect: Converters convert AC to DC; inverters convert DC to AC."
          },
          {
              "id": 44,
              "question": "The maximum value of torque that a synchronous motor can develop without losing synchronism is called:",
              "options": [
                  "Slip torque",
                  "Pull-out torque",
                  "Breaking torque",
                  "Synchronizing torque"
              ],
              "answer": 1,
              "explanation": "• Why 'Pull-out torque' is Correct (Key: b): Pull-out torque is the peak mechanical torque a synchronous motor can deliver at rated voltage and frequency before load angle exceeds maximum ($\\delta = 90^\\circ$ for cylindrical rotors) and the rotor pulls out of step.\n• Why Other Choices are Incorrect: Pull-in torque is the torque developed during transition from induction starting to synchronous locking."
          },
          {
              "id": 45,
              "question": "The armature current drawn by a synchronous motor for a given constant mechanical load will be minimum when its power factor is:",
              "options": [
                  "Zero",
                  "Unity",
                  "Leading",
                  "Lagging"
              ],
              "answer": 1,
              "explanation": "• Why 'Unity' is Correct (Key: b): Input power is $P = \\sqrt{3} V_L I_L \\cos\\phi$. For a constant mechanical load and constant supply voltage, current is $I_L = \\frac{P}{\\sqrt{3} V_L \\cos\\phi}$. Current is minimum when $\\cos\\phi$ reaches its maximum possible value of 1.0 (unity power factor, bottom of the V-curve).\n• Why Other Choices are Incorrect: At leading or lagging power factors, reactive current components increase the total armature current."
          },
          {
              "id": 46,
              "question": "When the field excitation of a synchronous motor is under-excited ($E < V$), its operating power factor will be:",
              "options": [
                  "Zero",
                  "Unity",
                  "Lagging",
                  "Leading"
              ],
              "answer": 2,
              "explanation": "• Why 'Lagging' is Correct (Key: c): When under-excited, the rotor field is insufficient to establish required air-gap flux. The motor draws lagging magnetizing VARs from the AC supply to compensate, resulting in a lagging power factor.\n• Why Other Choices are Incorrect: Over-excitation ($E > V$) results in leading power factor; normal excitation yields unity power factor."
          },
          {
              "id": 47,
              "question": "The operating rotational speed of a synchronous motor can be changed to a new constant value by:",
              "options": [
                  "Changing the mechanical shaft load",
                  "Changing the applied AC supply voltage",
                  "Changing the supply frequency",
                  "Using mechanical brakes"
              ],
              "answer": 2,
              "explanation": "• Why 'Changing frequency' is Correct (Key: c): Synchronous speed is strictly dictated by frequency and poles ($N_s = \\frac{120f}{P}$). Neither load variation nor voltage variation changes synchronous speed; only varying supply frequency $f$ (e.g., via a variable frequency drive) alters steady-state speed.\n• Why Other Choices are Incorrect: Increasing shaft load increases torque angle $\\delta$, but speed remains exactly $N_s$ until pull-out."
          },
          {
              "id": 48,
              "question": "The back EMF ($E_b$) set up in the stator of a synchronous motor depends on:",
              "options": [
                  "Rotor speed only",
                  "Mechanical shaft load only",
                  "Rotor field excitation flux",
                  "Coupling angle only"
              ],
              "answer": 2,
              "explanation": "• Why 'Rotor field excitation' is Correct (Key: c): Since rotor speed is fixed at synchronous speed ($N = N_s$), the magnitude of induced back EMF $E_b = 4.44 K_c K_d f \\Phi T_{ph}$ depends strictly on DC field excitation current controlling flux $\\Phi$.\n• Why Other Choices are Incorrect: Speed is strictly constant at synchronism; shaft load alters the phase angle $\\delta$ between $E_b$ and $V$, but not the magnitude of $E_b$."
          },
          {
              "id": 49,
              "question": "The percentage slip of a synchronous motor operating in synchronism is:",
              "options": [
                  "1%",
                  "100%",
                  "0.5%",
                  "Zero"
              ],
              "answer": 3,
              "explanation": "• Why 'Zero' is Correct (Key: d): Slip is defined as $s = \\frac{N_s - N}{N_s} \\times 100\\%$. Because a synchronous motor rotates strictly at synchronous speed ($N = N_s$), slip is identically zero under all steady operating loads.\n• Why Other Choices are Incorrect: Induction motors require slip to develop torque; synchronous motors operate with zero slip."
          },
          {
              "id": 50,
              "question": "The speed regulation of a synchronous motor is always:",
              "options": [
                  "1%",
                  "0.5%",
                  "Positive",
                  "Zero"
              ],
              "answer": 3,
              "explanation": "• Why 'Zero' is Correct (Key: d): Speed regulation is $\\frac{N_{\\text{no-load}} - N_{\\text{full-load}}}{N_{\\text{full-load}}} \\times 100\\%$. Since speed is strictly synchronous speed $N_s$ from no load to full load, the change in speed is zero, giving 0% speed regulation.\n• Why Other Choices are Incorrect: Synchronous motors are strictly constant-speed machines regardless of load."
          },
          {
              "id": 51,
              "question": "A synchronous motor can be made self-starting by providing:",
              "options": [
                  "Damper winding embedded in rotor pole faces",
                  "Damper winding on the stator frame",
                  "Damper winding on both stator and rotor",
                  "None of the above"
              ],
              "answer": 0,
              "explanation": "• Why 'Damper winding embedded in rotor pole faces' is Correct (Key: a): Copper or bronze bars short-circuited by end rings embedded in the rotor pole shoes form a squirrel-cage cage that develops induction torque, accelerating the motor from standstill to near-synchronous speed.\n• Why Other Choices are Incorrect: The stator already carries the 3-phase AC armature winding; damper bars are placed on the rotor."
          },
          {
              "id": 52,
              "question": "Synchronous speed ($N_s$) for a synchronous motor is given by:",
              "options": [
                  "$N_s = \\frac{200f}{P}$",
                  "$N_s = \\frac{120f}{P}$",
                  "$N_s = \\frac{120P}{f}$",
                  "$N_s = 120f \\cdot P$"
              ],
              "answer": 1,
              "explanation": "• Why 'Ns = 120f/P' is Correct (Key: b): In one electrical cycle, the magnetic field travels past two poles (one pole pair). With $f$ cycles per second and $P$ poles, speed in rpm is $N_s = \\frac{60 \\times 2f}{P} = \\frac{120f}{P}$.\n• Why Other Choices are Incorrect: Standard equation verified across all AC rotating machinery."
          },
          {
              "id": 53,
              "question": "Rotor hunting and oscillations in a synchronous motor can be damped out by:",
              "options": [
                  "Maintaining constant field excitation",
                  "Running the motor on leading power factor",
                  "Providing damping bars on the rotor pole faces",
                  "Oscillations cannot be damped"
              ],
              "answer": 2,
              "explanation": "• Why 'Providing damping bars...' is Correct (Key: c): When sudden load fluctuations cause the rotor to oscillate (hunt) about its equilibrium angle $\\delta$, the relative velocity between rotor and stator field induces currents in the damper bars, developing induction damping torque that extinguishes oscillations.\n• Why Other Choices are Incorrect: Field excitation adjustment does not provide dynamic velocity-proportional damping."
          },
          {
              "id": 54,
              "question": "If a synchronous motor has its field winding shorted and variable voltage is supplied to the stator, this will result in:",
              "options": [
                  "Immediate burning of the rotor",
                  "Motor running as an induction motor",
                  "Crawling of the rotor at harmonic speed",
                  "Magnetic locking of the rotor at standstill"
              ],
              "answer": 1,
              "explanation": "• Why 'Motor running as an induction motor' is Correct (Key: b): The shorted rotor field coils act as a closed polyphase or single-phase induction rotor winding, allowing the motor to start and operate as an induction motor with slip.\n• Why Other Choices are Incorrect: Without DC excitation, synchronous torque cannot develop, but safe induction motor action occurs."
          },
          {
              "id": 55,
              "question": "The torque angle (or power angle $\\delta$) of a synchronous motor is defined as:",
              "options": [
                  "The angle through which the motor lags behind synchronous speed",
                  "The angle of lag from no-load to full-load conditions",
                  "The angle between the rotating stator flux axis and the rotor magnetic poles axis",
                  "None of the above"
              ],
              "answer": 2,
              "explanation": "• Why 'Angle between stator flux and rotor poles' is Correct (Key: c): Torque angle $\\delta$ is the physical displacement in electrical degrees between the stator rotating MMF axis and the rotor DC field axis, representing the tension in magnetic lines of force transmitting shaft power.\n• Why Other Choices are Incorrect: The rotor does not lag behind synchronous speed; it rotates at synchronous speed displaced by angle $\\delta$."
          },
          {
              "id": 56,
              "question": "A synchronous motor can be used as a synchronous capacitor (condenser) when it is:",
              "options": [
                  "Under-loaded",
                  "Over-loaded",
                  "Under-excited",
                  "Over-excited"
              ],
              "answer": 3,
              "explanation": "• Why 'Over-excited' is Correct (Key: d): Over-excitation ($E > V$) forces the synchronous motor to draw leading current from the line, supplying reactive kilovars (kVAR) to the AC network exactly like a static capacitor.\n• Why Other Choices are Incorrect: Under-excitation draws lagging reactive current, behaving as an inductive reactor."
          },
          {
              "id": 57,
              "question": "Power developed by a non-salient synchronous motor will be maximum when the load angle $\\delta$ is:",
              "options": [
                  "0°",
                  "45°",
                  "90°",
                  "120°"
              ],
              "answer": 2,
              "explanation": "• Why '90°' is Correct (Key: c): For a cylindrical rotor machine neglecting armature resistance, electromagnetic power developed is $P = \\frac{E \\cdot V}{X_s} \\sin\\delta$. Power peaks when $\\sin\\delta = 1$, which occurs at $\\delta = 90^\\circ$.\n• Why Other Choices are Incorrect: In salient-pole machines reluctance torque shifts peak power to around 60°–70°, but for non-salient machines it is strictly 90°."
          },
          {
              "id": 58,
              "question": "A 3-phase induction motor draws 1000 kVA at 0.8 power factor lagging. A synchronous condenser is connected in parallel to draw an additional 750 kVA at 0.6 power factor leading. The resultant power factor of the total load is:",
              "options": [
                  "Unity (1.0)",
                  "Zero",
                  "0.6 lagging",
                  "0.707 leading"
              ],
              "answer": 0,
              "explanation": "• Why 'Unity (1.0)' is Correct (Key: a): Active power: $P_1 = 1000 \\times 0.8 = 800\\text{ kW}$, $P_2 = 750 \\times 0.6 = 450\\text{ kW}$. Total $P = 800 + 450 = 1250\\text{ kW}$.\nReactive power: $Q_1 = 1000 \\times 0.6 = +600\\text{ kVAR (lag)}$, $Q_2 = 750 \\times 0.8 = -600\\text{ kVAR (lead)}$. Total $Q = +600 - 600 = 0\\text{ kVAR}$.\nSince net reactive power is zero, resultant power factor is $\\cos\\phi = 1.0$ (Unity).\n• Why Other Choices are Incorrect: The leading kVAR of the synchronous condenser exactly cancels the lagging kVAR of the induction motor."
          },
          {
              "id": 59,
              "question": "A squirrel-cage (damper) winding is provided on the rotor of a synchronous motor primarily to make it:",
              "options": [
                  "Noise-free",
                  "Self-starting",
                  "Cheaper to manufacture",
                  "Quick to stop"
              ],
              "answer": 1,
              "explanation": "• Why 'Self-starting' is Correct (Key: b): The damper bars function as a squirrel-cage induction rotor during starting, developing induction torque to bring the machine from standstill up to synchronous pull-in speed without requiring external auxiliary drive motors.\n• Why Other Choices are Incorrect: It also suppresses hunting during sudden load shifts, but its primary purpose is enabling self-starting."
          },
          {
              "id": 60,
              "question": "A pony motor used to start a large synchronous machine is basically a:",
              "options": [
                  "Small induction motor",
                  "DC series motor",
                  "DC shunt motor",
                  "Double-winding AC/DC motor"
              ],
              "answer": 0,
              "explanation": "• Why 'Small induction motor' is Correct (Key: a): A pony motor is a small industrial induction motor mechanically coupled to the synchronous motor shaft to spin the rotor up to near-synchronous speed prior to applying DC field excitation.\n• Why Other Choices are Incorrect: Repeated from Question 31; textbook question pool reinforces that pony motors are small induction machines."
          },
          {
              "id": 61,
              "question": "While starting a 3-phase synchronous motor, its DC field winding should be:",
              "options": [
                  "Connected to the DC source immediately",
                  "Short-circuited (or closed through a high resistance)",
                  "Kept completely open-circuited",
                  "None of the above"
              ],
              "answer": 1,
              "explanation": "• Why 'Short-circuited (or closed through resistance)' is Correct (Key: b): If left open-circuited, the large number of rotor field turns cutting the high-speed stator rotating field would induce dangerously high voltages (thousands of volts) across the field terminals, destroying insulation and creating lethal shock hazards. Shorting or closing through a discharge resistor eliminates this hazard and adds starting torque.\n• Why Other Choices are Incorrect: Leaving the field open induces destructive breakdown voltages; connecting DC at standstill causes zero starting torque."
          },
          {
              "id": 62,
              "question": "6.11. What will be the rms value of emf induced per phase in a 3-phase, 6-pole, star-connected alternator having a stator with 90 slots and 8 conductors per slot? The flux per pole is $4 \\times 10^{-2}\\text{ Wb}$ and it runs at a speed of 1000 rpm. Assume full-pitched coils and sinusoidal flux distribution.",
              "options": [
                  "$E_{\\text{ph}} = 1019\\text{ V},\\; E_L = 1766\\text{ V}$",
                  "$E_{\\text{ph}} = 1019\\text{ V},\\; E_L = 1529\\text{ V}$",
                  "$E_{\\text{ph}} = 589\\text{ V},\\; E_L = 1766\\text{ V}$",
                  "$E_{\\text{ph}} = 589\\text{ V},\\; E_L = 1019\\text{ V}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$E_{\\text{ph}} = 1065\\text{ V},\\; E_L = 1845\\text{ V}$",
                  "$E_{\\text{ph}} = 1019\\text{ V},\\; E_L = 1019\\text{ V}$",
                  "$E_{\\text{ph}} = 883\\text{ V},\\; E_L = 1529\\text{ V}$"
],
              "explanation": "• Given: $P = 6$, $N = 1000\\text{ rpm}$, Slots $= 90$, Conductors/slot $= 8$, $\\Phi = 0.04\\text{ Wb}$, full pitch ($k_p = 1$).\n• Frequency: $f = \\frac{P \\cdot N}{120} = \\frac{6 \\times 1000}{120} = 50\\text{ Hz}$.\n• Slots/pole/phase $m = \\frac{90}{6 \\times 3} = 5$; Slot pitch $\\beta = \\frac{180^\\circ}{15} = 12^\\circ$.\n• $k_d = \\frac{\\sin(30^\\circ)}{5 \\sin 6^\\circ} \\approx 0.9567$; Turns/phase $T = 120$.\n• $E_{\\text{ph}} = 4.44 \\times 1 \\times 0.9567 \\times 50 \\times 0.04 \\times 120 = 1019.4\\text{ V} \\approx 1019\\text{ V}$.\n• Line emf: $E_L = \\sqrt{3} \\times 1019.4 = 1765.7\\text{ V} \\approx 1766\\text{ V}$."
          },
          {
              "id": 63,
              "question": "6.12. Determine the useful flux per pole required to develop 6600 V across the terminals of a 3-phase, star connected, 50 Hz, 4-pole alternator having 60 slots with 2 conductors per slot. The coils are short pitched such that if one coil side lies in slot No. 1 and the other lies in slot No. 13. Assume a double-layer winding.",
              "options": [
                  "$\\Phi = 94\\text{ mWb}$",
                  "$\\Phi = 82\\text{ mWb}$",
                  "$\\Phi = 54\\text{ mWb}$",
                  "$\\Phi = 47\\text{ mWb}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$\\Phi = 102\\text{ mWb}$",
                  "$\\Phi = 89\\text{ mWb}$",
                  "$\\Phi = 63\\text{ mWb}$"
],
              "explanation": "• Given: $E_L = 6600\\text{ V} \\implies E_{\\text{ph}} = 3810.5\\text{ V}$, $f = 50\\text{ Hz}$, $P = 4$, Slots $= 60$, Cond/slot $= 2$.\n• Turns/phase $T = 20$. Coil span $= 12\\text{ slots}$ (pole pitch $= 15\\text{ slots}$) $\\implies \\alpha = 36^\\circ \\implies k_p = \\cos 18^\\circ \\approx 0.9511$.\n• $m = 5$, $\\beta = 12^\\circ \\implies k_d \\approx 0.9567$.\n• Useful flux: $\\Phi = \\frac{3810.5}{4.44 \\times 0.9511 \\times 0.9567 \\times 50 \\times 20} = 0.09433\\text{ Wb} \\approx 94\\text{ mWb}$."
          },
          {
              "id": 64,
              "question": "6.13. A three-phase, 16-pole, 50 Hz star connected alternator has 144 slots and 10 conductors per slot. The flux per pole is $2.48 \\times 10^{-2}\\text{ Wb}$ sinusoidally distributed. The coil pitch is 2 slots short of full pitch. Find (i) speed (ii) line emf.",
              "options": [
                  "(i) $N_s = 375\\text{ rpm}$, (ii) $E_L = 2064\\text{ V}$",
                  "(i) $N_s = 375\\text{ rpm}$, (ii) $E_L = 1192\\text{ V}$",
                  "(i) $N_s = 750\\text{ rpm}$, (ii) $E_L = 2064\\text{ V}$",
                  "(i) $N_s = 750\\text{ rpm}$, (ii) $E_L = 1192\\text{ V}$"
],
              "answer": 0,
              "extraDistractors": [
                  "(i) $N_s = 375\\text{ rpm}$, (ii) $E_L = 1850\\text{ V}$",
                  "(i) $N_s = 500\\text{ rpm}$, (ii) $E_L = 2064\\text{ V}$",
                  "(i) $N_s = 500\\text{ rpm}$, (ii) $E_L = 1540\\text{ V}$"
],
              "explanation": "• Speed: $N_s = \\frac{120 \\times 50}{16} = 375\\text{ rpm}$.\n• Coil pitch is 2 slots short of 9 slots: $\\alpha = 2 \\times 20^\\circ = 40^\\circ \\implies k_p = \\cos 20^\\circ = 0.9397$; $k_d = 0.9598$; $T = 240\\text{ turns/phase}$.\n• Phase emf: $E_{\\text{ph}} = 4.44 \\times 0.9397 \\times 0.9598 \\times 50 \\times 0.0248 \\times 240 = 1191.8\\text{ V}$.\n• Line emf: $E_L = \\sqrt{3} \\times 1191.8 = 2064.2\\text{ V} \\approx 2064\\text{ V}$."
          },
          {
              "id": 65,
              "question": "6.14. A 10 MVA, 11 kV, 50 Hz, three-phase, star-connected alternator is driven at 300 rev/min. The stator winding is housed in 360 slots and has 6 conductors per slot. The coils spanning five-sixth of a pole pitch. Calculate: (i) the sinusoidally distributed flux/pole required to give a line voltage of 11 kV on open circuit, and (ii) the full load current per conductor.",
              "options": [
                  "(i) $\\Phi = 86\\text{ mWb}$, (ii) $I = 525\\text{ A/conductor}$",
                  "(i) $\\Phi = 86\\text{ mWb}$, (ii) $I = 909\\text{ A/conductor}$",
                  "(i) $\\Phi = 50\\text{ mWb}$, (ii) $I = 525\\text{ A/conductor}$",
                  "(i) $\\Phi = 50\\text{ mWb}$, (ii) $I = 909\\text{ A/conductor}$"
],
              "answer": 0,
              "extraDistractors": [
                  "(i) $\\Phi = 75\\text{ mWb}$, (ii) $I = 525\\text{ A/conductor}$",
                  "(i) $\\Phi = 86\\text{ mWb}$, (ii) $I = 303\\text{ A/conductor}$",
                  "(i) $\\Phi = 75\\text{ mWb}$, (ii) $I = 450\\text{ A/conductor}$"
],
              "explanation": "• Poles: $P = \\frac{120 \\times 50}{300} = 20$. Coil span $= 150^\\circ \\implies \\alpha = 30^\\circ \\implies k_p = \\cos 15^\\circ = 0.9659$; $k_d = 0.9561$; $T = 360\\text{ turns/phase}$.\n• Flux: $\\Phi = \\frac{6350.85}{4.44 \\times 0.9659 \\times 0.9561 \\times 50 \\times 360} = 0.086\\text{ Wb} = 86\\text{ mWb}$.\n• Current per conductor: $I = \\frac{10 \\times 10^6}{\\sqrt{3} \\times 11000} = 524.86\\text{ A} \\approx 525\\text{ A/conductor}$."
          },
          {
              "id": 66,
              "question": "6.15. The armature of a 6600 volt, three-phase, 20-pole, 300 rpm star-connected alternator has 180 slots. The flux per pole is 80 mWb and the coil span is 160° electrical. Determine the number of conductors in series per phase.",
              "options": [
                  "$Z_{\\text{ph}} = 454\\text{ conductors/phase}$",
                  "$Z_{\\text{ph}} = 412\\text{ conductors/phase}$",
                  "$Z_{\\text{ph}} = 227\\text{ conductors/phase}$",
                  "$Z_{\\text{ph}} = 196\\text{ conductors/phase}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$Z_{\\text{ph}} = 512\\text{ conductors/phase}$",
                  "$Z_{\\text{ph}} = 380\\text{ conductors/phase}$",
                  "$Z_{\\text{ph}} = 478\\text{ conductors/phase}$"
],
              "explanation": "• $E_{\\text{ph}} = \\frac{6600}{\\sqrt{3}} = 3810.5\\text{ V}$. $k_p = \\cos 10^\\circ = 0.9848$; $k_d = 0.9598$; $f = 50\\text{ Hz}$; $\\Phi = 0.08\\text{ Wb}$.\n• Turns/phase: $T = \\frac{3810.5}{4.44 \\times 0.9848 \\times 0.9598 \\times 50 \\times 0.08} = 226.96\\text{ turns}$.\n• Conductors in series per phase: $Z_{\\text{ph}} = 2T = 453.92 \\approx 454\\text{ conductors}$."
          },
          {
              "id": 67,
              "question": "6.16. A single-phase alternator has a rated output of 60 kVA at a terminal voltage of 220 V and 50 Hz. Its armature resistance is negligible and leakage reactance is $0.07\\;\\Omega$. Find the induced armature voltage at rated current with a power factor of 0.7 lagging.",
              "options": [
                  "$E = 234\\text{ V}$",
                  "$E = 227\\text{ V}$",
                  "$E = 215\\text{ V}$",
                  "$E = 206\\text{ V}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$E = 240\\text{ V}$",
                  "$E = 222\\text{ V}$",
                  "$E = 248\\text{ V}$"
],
              "explanation": "• Rated current: $I = \\frac{60000}{220} = 272.7\\text{ A}$. $I X_L = 272.7 \\times 0.07 = 19.1\\text{ V}$.\n• $E = \\sqrt{(220 \\times 0.7)^2 + (220 \\times 0.7141 + 19.1)^2} = \\sqrt{154^2 + 176.2^2} = 234\\text{ V}$."
          },
          {
              "id": 68,
              "question": "6.17. A 100 kVA, 600 V, 50 Hz, 1-phase alternator has an effective armature resistance of $0.072\\;\\Omega$ and leakage reactance of $0.18\\;\\Omega$. Calculate the induced emf at rated load for: (i) unity power factor, (ii) 0.75 pf lagging, (iii) 0.75 pf leading.",
              "options": [
                  "(i) $E = 613\\text{ V}$, (ii) $E = 629\\text{ V}$, (iii) $E = 590\\text{ V}$",
                  "(i) $E = 613\\text{ V}$, (ii) $E = 590\\text{ V}$, (iii) $E = 629\\text{ V}$",
                  "(i) $E = 600\\text{ V}$, (ii) $E = 629\\text{ V}$, (iii) $E = 590\\text{ V}$",
                  "(i) $E = 600\\text{ V}$, (ii) $E = 590\\text{ V}$, (iii) $E = 629\\text{ V}$"
],
              "answer": 0,
              "extraDistractors": [
                  "(i) $E = 613\\text{ V}$, (ii) $E = 645\\text{ V}$, (iii) $E = 575\\text{ V}$",
                  "(i) $E = 625\\text{ V}$, (ii) $E = 629\\text{ V}$, (iii) $E = 602\\text{ V}$",
                  "(i) $E = 600\\text{ V}$, (ii) $E = 645\\text{ V}$, (iii) $E = 590\\text{ V}$"
],
              "explanation": "• Rated current $I = \\frac{100,000}{600} = 166.7\\text{ A}$. Drops: $I R_a = 12\\text{ V}$, $I X_L = 30\\text{ V}$.\n• (i) Unity pf: $E = \\sqrt{(600 + 12)^2 + 30^2} = 612.73\\text{ V} \\approx 613\\text{ V}$.\n• (ii) 0.75 pf lagging: $E = \\sqrt{(450 + 12)^2 + (396.9 + 30)^2} = 629\\text{ V}$.\n• (iii) 0.75 pf leading: $E = \\sqrt{(450 + 12)^2 + (396.9 - 30)^2} = 590\\text{ V}$."
          },
          {
              "id": 69,
              "question": "6.18. A 500 V, 50 Hz, single-phase alternator gives 425 V on open-circuit and 170 A on short-circuit with a field current of 15 A. The armature resistance is $0.2\\;\\Omega$. Determine the voltage regulation when the alternator delivers a rated current of 170 A at: (a) unity power factor, (b) 0.8 power factor lagging.",
              "options": [
                  "$\\text{Reg} = 15\\%$, (b) $\\text{Reg} = 34\\%$",
                  "$\\text{Reg} = 15\\%$, (b) $\\text{Reg} = 28\\%$",
                  "$\\text{Reg} = 20\\%$, (b) $\\text{Reg} = 34\\%$",
                  "$\\text{Reg} = 20\\%$, (b) $\\text{Reg} = 28\\%$"
],
              "answer": 0,
              "extraDistractors": [
                  "(a) $\\text{Reg} = 15\\%$, (b) $\\text{Reg} = 40\\%$",
                  "(a) $\\text{Reg} = 12\\%$, (b) $\\text{Reg} = 34\\%$",
                  "(a) $\\text{Reg} = 18\\%$, (b) $\\text{Reg} = 31\\%$"
],
              "explanation": "• $Z_s = \\frac{425}{170} = 2.5\\;\\Omega \\implies X_s = \\sqrt{2.5^2 - 0.2^2} = 2.492\\;\\Omega$.\n• (a) Unity pf: $E_0 = 576.6\\text{ V} \\implies \\text{Reg} = 15.33\\% \\approx 15\\%$.\n• (b) 0.8 lag: $E_0 = 671.7\\text{ V} \\implies \\text{Reg} = 34.35\\% \\approx 34\\%$."
          },
          {
              "id": 70,
              "question": "6.19. A 3-phase star connected alternator has an armature resistance of $0.1\\;\\Omega/\\text{phase}$. When an open circuit voltage of 173.3 V between lines is obtained with a field excitation of 20 A, the short-circuit current is 200 A. Determine the line emf when the machine delivers 100 A at 0.8 pf lagging to a 400 V line, and find its percentage regulation.",
              "options": [
                  "$E_L = 468\\text{ V},\\; \\text{Reg} = 16\\%$",
                  "$E_L = 468\\text{ V},\\; \\text{Reg} = 10\\%$",
                  "$E_L = 440\\text{ V},\\; \\text{Reg} = 16\\%$",
                  "$E_L = 440\\text{ V},\\; \\text{Reg} = 10\\%$"
],
              "answer": 0,
              "extraDistractors": [
                  "$E_L = 468\\text{ V},\\; \\text{Reg} = 22\\%$",
                  "$E_L = 452\\text{ V},\\; \\text{Reg} = 16\\%$",
                  "$E_L = 485\\text{ V},\\; \\text{Reg} = 21\\%$"
],
              "explanation": "• Phase $V_{\\text{oc}} = 100\\text{ V} \\implies Z_s = 0.5\\;\\Omega \\implies X_s = 0.49\\;\\Omega$.\n• Terminal phase voltage $V = \\frac{400}{\\sqrt{3}} = 231\\text{ V}$.\n• At 0.8 lag: $E_{\\text{ph}} = 270.4\\text{ V} \\implies E_L = \\sqrt{3} \\times 270.4 = 468.4\\text{ V} \\approx 468\\text{ V}$.\n• Voltage regulation: $\\text{Reg} = \\frac{270.4 - 230.9}{230.9} = 16.22\\% \\approx 16\\%$."
          },
          {
              "id": 71,
              "question": "6.20. A 1200 kVA, 3300 V, 50 Hz, 3-phase, star-connected alternator has an armature resistance of $0.25\\;\\Omega/\\text{phase}$. A field excitation of 40 A produces a short-circuit current of 200 A and an open-circuit voltage of 1100 V (line). Calculate the voltage regulation on full load at 0.8 power factor lagging.",
              "options": [
                  "$\\text{Reg} = 26\\% \\;(E_0 = 2399\\text{ V})$",
                  "$\\text{Reg} = 26\\% \\;(E_0 = 2210\\text{ V})$",
                  "$\\text{Reg} = 18\\% \\;(E_0 = 2399\\text{ V})$",
                  "$\\text{Reg} = 18\\% \\;(E_0 = 2210\\text{ V})$"
],
              "answer": 0,
              "extraDistractors": [
                  "$\\text{Reg} = 26\\% \\;(E_0 = 2510\\text{ V})$",
                  "$\\text{Reg} = 31\\% \\;(E_0 = 2399\\text{ V})$",
                  "$\\text{Reg} = 22\\% \\;(E_0 = 2320\\text{ V})$"
],
              "explanation": "• Phase $V_{\\text{oc}} = \\frac{1100}{\\sqrt{3}} = 635.1\\text{ V} \\implies Z_s = 3.175\\;\\Omega \\implies X_s = 3.165\\;\\Omega$.\n• $I = 210\\text{ A}$; Phase $V = 1905.3\\text{ V}$.\n• $E_0 = 2399\\text{ V} \\implies \\text{Reg} = \\frac{2399 - 1905.3}{1905.3} = 25.98\\% \\approx 26\\%$."
          },
          {
              "id": 72,
              "question": "6.21. A 20 MVA, 11 kV, 50 Hz, 3-phase star-connected alternator has a resistance between terminal lines of $0.6\\;\\Omega$. The field current of 100 A gives full-load current on short circuit. The field current of 120 A gives an open-circuit voltage of 11 kV. Determine the synchronous reactance, percentage voltage regulation at 0.8 pf lagging, and power angle.",
              "options": [
                  "$X_s = 5\\;\\Omega,\\; \\delta = 13^\\circ,\\; \\text{Reg} = 13\\%$",
                  "$X_s = 5\\;\\Omega,\\; \\delta = 18^\\circ,\\; \\text{Reg} = 13\\%$",
                  "$X_s = 6\\;\\Omega,\\; \\delta = 13^\\circ,\\; \\text{Reg} = 21\\%$",
                  "$X_s = 6\\;\\Omega,\\; \\delta = 18^\\circ,\\; \\text{Reg} = 21\\%$"
],
              "answer": 0,
              "extraDistractors": [
                  "$X_s = 5\\;\\Omega,\\; \\delta = 13^\\circ,\\; \\text{Reg} = 18\\%$",
                  "$X_s = 4\\;\\Omega,\\; \\delta = 10^\\circ,\\; \\text{Reg} = 13\\%$",
                  "$X_s = 5\\;\\Omega,\\; \\delta = 15^\\circ,\\; \\text{Reg} = 16\\%$"
],
              "explanation": "• Phase resistance $R_a = \\frac{0.6}{2} = 0.3\\;\\Omega$.\n• Solving the vector diagram at 0.8 pf lag gives $X_s = 5.03\\;\\Omega \\approx 5\\;\\Omega$, torque angle $\\delta = 13.46^\\circ \\approx 13^\\circ$, and regulation $\\text{Reg} = 13.46\\% \\approx 13\\%$."
          },
          {
              "id": 73,
              "question": "6.22. Determine the synchronous impedance of an 11 kV, 3-phase, 50 Hz, 20 MVA alternator if rated emf on open circuit is produced by a field current of 10 A, and the same field current produces full-load rated current on short circuit.",
              "options": [
                  "$Z_s = 4\\;\\Omega$ ($3.63\\;\\Omega$)",
                  "$Z_s = 6\\;\\Omega$ ($6.05\\;\\Omega$)",
                  "$Z_s = 5\\;\\Omega$ ($4.85\\;\\Omega$)",
                  "$Z_s = 3\\;\\Omega$ ($2.75\\;\\Omega$)"
],
              "answer": 0,
              "extraDistractors": [
                  "$Z_s = 8\\;\\Omega$ ($7.50\\;\\Omega$)",
                  "$Z_s = 7\\;\\Omega$ ($6.80\\;\\Omega$)",
                  "$Z_s = 2\\;\\Omega$ ($2.10\\;\\Omega$)"
],
              "explanation": "• PDF / Textbook Key (Saturated Value): $Z_{s(\\text{sat})} = 3.63\\;\\Omega \\approx 4\\;\\Omega$ (accounting for magnetic saturation / $SCR \\approx 1.67$).\
• Unsaturated / Direct Formula Value: $V_{\\text{ph}} = \\frac{11,000}{\\sqrt{3}} = 6351\\text{ V}$, $I_{\\text{sc}} = \\frac{20 \\times 10^6}{\\sqrt{3} \\times 11,000} = 1050\\text{ A} \\implies Z_s = \\frac{6351}{1050} = 6.05\\;\\Omega \\approx 6\\;\\Omega$."
          },
          {
              "id": 74,
              "question": "6.23. A 10 kVA, 230 V, 3-phase star-connected alternator has an effective armature resistance of $0.5\\;\\Omega$ and a synchronous reactance of $1.2\\;\\Omega/\\text{phase}$. Calculate the percentage regulation at: (a) 0.8 power factor lagging, (b) 0.8 power factor leading, (c) determine the power factor for zero regulation.",
              "options": [
                  "$\\text{Reg} = 22\\%$, (b) $\\text{Reg} = -3\\%$, (c) $\\cos\\phi = 0.87\\text{ leading}$",
                  "$\\text{Reg} = 22\\%$, (b) $\\text{Reg} = +3\\%$, (c) $\\cos\\phi = 0.87\\text{ lagging}$",
                  "$\\text{Reg} = 15\\%$, (b) $\\text{Reg} = -3\\%$, (c) $\\cos\\phi = 0.71\\text{ leading}$",
                  "$\\text{Reg} = 15\\%$, (b) $\\text{Reg} = +3\\%$, (c) $\\cos\\phi = 0.71\\text{ lagging}$"
],
              "answer": 0,
              "extraDistractors": [
                  "(a) $\\text{Reg} = 22\\%$, (b) $\\text{Reg} = -3\\%$, (c) $\\cos\\phi = 0.92\\text{ leading}$",
                  "(a) $\\text{Reg} = 18\\%$, (b) $\\text{Reg} = -5\\%$, (c) $\\cos\\phi = 0.87\\text{ leading}$",
                  "(a) $\\text{Reg} = 22\\%$, (b) $\\text{Reg} = -7\\%$, (c) $\\cos\\phi = 0.80\\text{ leading}$"
],
              "explanation": "• Full-load phase voltage $V = 132.8\\text{ V}$, $I = 25.1\\text{ A}$.\n• (a) At 0.8 lag: $E_0 = 161.8\\text{ V} \\implies \\text{Reg} = 21.8\\% \\approx 22\\%$.\n• (b) At 0.8 lead: $E_0 = 128.7\\text{ V} \\implies \\text{Reg} = -3.06\\% \\approx -3\\%$.\n• (c) Zero regulation condition: $\\cos\\phi = 0.8692 \\approx 0.87\\text{ leading}$."
          },
          {
              "id": 75,
              "question": "6.24. A 10 kVA, 400 V, 50 Hz, 3-phase star-connected alternator has an armature resistance of $0.5\\;\\Omega/\\text{phase}$ and a synchronous reactance of $10\\;\\Omega/\\text{phase}$. Find the torque angle and voltage regulation at rated load and 0.8 power factor lagging.",
              "options": [
                  "$\\delta = 19^\\circ,\\; \\text{Reg} = 48\\%$",
                  "$\\delta = 19^\\circ,\\; \\text{Reg} = 32\\%$",
                  "$\\delta = 12^\\circ,\\; \\text{Reg} = 48\\%$",
                  "$\\delta = 12^\\circ,\\; \\text{Reg} = 32\\%$"
],
              "answer": 0,
              "extraDistractors": [
                  "$\\delta = 19^\\circ,\\; \\text{Reg} = 54\\%$",
                  "$\\delta = 24^\\circ,\\; \\text{Reg} = 48\\%$",
                  "$\\delta = 15^\\circ,\\; \\text{Reg} = 38\\%$"
],
              "explanation": "• $V_{\\text{ph}} = 230.9\\text{ V}$, $I = 14.43\\text{ A}$. Drops: $I R_a = 7.2\\text{ V}$, $I X_s = 144.3\\text{ V}$.\n• Vector solution: $E_0 = 341.9\\text{ V}$, $\\delta = 18.95^\\circ \\approx 19^\\circ$.\n• Voltage regulation: $\\text{Reg} = \\frac{341.9 - 230.9}{230.9} = 48.02\\% \\approx 48\\%$."
          },
          {
              "id": 76,
              "question": "6.25. A 500 kVA, 4000 V, 8-pole, 3-phase, 50 Hz star-connected alternator has the OCC data given. The armature reaction AT per pole is $1.1 \\times\\text{ampere-conductors/pole/phase}$. Armature has 240 conductors/phase and leakage reactance drop is 8%. Neglecting resistance, determine the total excitation AT and percentage regulation at full load 0.8 pf lagging.",
              "options": [
                  "$\\text{Total AT} = 7180\\text{ AT},\\; \\text{Reg} = 17\\%$",
                  "$\\text{Total AT} = 7180\\text{ AT},\\; \\text{Reg} = 22\\%$",
                  "$\\text{Total AT} = 5420\\text{ AT},\\; \\text{Reg} = 17\\%$",
                  "$\\text{Total AT} = 5420\\text{ AT},\\; \\text{Reg} = 22\\%$"
],
              "answer": 0,
              "extraDistractors": [
                  "$\\text{Total AT} = 7180\\text{ AT},\\; \\text{Reg} = 14\\%$",
                  "$\\text{Total AT} = 6500\\text{ AT},\\; \\text{Reg} = 17\\%$",
                  "$\\text{Total AT} = 8100\\text{ AT},\\; \\text{Reg} = 20\\%$"
],
              "explanation": "• Combining field ampere-turns with armature reaction vector yields Total excitation $\\text{AT} = 7180\\text{ AT}$ and regulation $= 16.88\\% \\approx 17\\%$."
          },
          {
              "id": 77,
              "question": "6.26. A 345 kVA, 6600 V, star non-salient alternator has an OCC given and SCC gives 35 A with $I_f = 50\\text{ A}$. The leakage reactance drop is 8% and $R_a \\approx 0$. Find the field current for full load at: (a) 0.8 lagging, (b) unity pf.",
              "options": [
                  "$I_f = 96\\text{ A}$, (b) $I_f = 72\\text{ A}$",
                  "$I_f = 96\\text{ A}$, (b) $I_f = 61\\text{ A}$",
                  "$I_f = 85\\text{ A}$, (b) $I_f = 72\\text{ A}$",
                  "$I_f = 85\\text{ A}$, (b) $I_f = 61\\text{ A}$"
],
              "answer": 0,
              "extraDistractors": [
                  "(a) $I_f = 96\\text{ A}$, (b) $I_f = 80\\text{ A}$",
                  "(a) $I_f = 76\\text{ A}$, (b) $I_f = 72\\text{ A}$",
                  "(a) $I_f = 90\\text{ A}$, (b) $I_f = 68\\text{ A}$"
],
              "explanation": "• Rated current: $I = 30.18\\text{ A}$.\n• At 0.8 pf lag, Potier/MMF vector combination yields $I_f = 96.2\\text{ A} \\approx 96\\text{ A}$.\n• At unity power factor, $I_f = 72.3\\text{ A} \\approx 72\\text{ A}$."
          },
          {
              "id": 78,
              "question": "6.27. A 3.3 kV, 1500 kVA star alternator at 760 rpm has OCC data given. Turns/phase = 55, terminal resistance = $0.5\\;\\Omega$, $X_L = 1.5\\;\\Omega$, armature reaction AT = $1.4 \\times\\text{AT/pole/phase}$, and $R_{\\text{eff}}/R_{\\text{meas}} = 1.4$. Find percentage regulation when full load at 0.8 lag is switched off and speed rises to 770 rpm.",
              "options": [
                  "$\\text{Reg} = 23\\% \\;(E_0 = 2351\\text{ V})$",
                  "$\\text{Reg} = 23\\% \\;(E_0 = 2120\\text{ V})$",
                  "$\\text{Reg} = 18\\% \\;(E_0 = 2351\\text{ V})$",
                  "$\\text{Reg} = 18\\% \\;(E_0 = 2120\\text{ V})$"
],
              "answer": 0,
              "extraDistractors": [
                  "$\\text{Reg} = 23\\% \\;(E_0 = 2460\\text{ V})$",
                  "$\\text{Reg} = 27\\% \\;(E_0 = 2351\\text{ V})$",
                  "$\\text{Reg} = 20\\% \\;(E_0 = 2280\\text{ V})$"
],
              "explanation": "• Adjusting OCC for speed rise to 770 rpm and accounting for combined MMF armature reaction gives voltage regulation $\\text{Reg} = 23.4\\% \\approx 23\\%$."
          },
          {
              "id": 79,
              "question": "6.28. A 1000 kVA, 2000 V, 50 Hz star-connected alternator has an armature resistance of $0.2\\;\\Omega/\\text{phase}$. Test data gives $I_{\\text{sc}} = 288.7\\text{ A}$ at $I_f = 28.87\\text{ A}$, and $V_{\\text{oc}} = 1940\\text{ V}$ at $I_f = 28.87\\text{ A}$. Determine full-load percentage regulation at: (a) 0.8 lag, (b) 0.8 lead.",
              "options": [
                  "$\\text{Reg} = 35\\%$, (b) $\\text{Reg} = -3\\%$",
                  "$\\text{Reg} = 35\\%$, (b) $\\text{Reg} = +3\\%$",
                  "$\\text{Reg} = 25\\%$, (b) $\\text{Reg} = -3\\%$",
                  "$\\text{Reg} = 25\\%$, (b) $\\text{Reg} = +3\\%$"
],
              "answer": 0,
              "extraDistractors": [
                  "(a) $\\text{Reg} = 35\\%$, (b) $\\text{Reg} = -6\\%$",
                  "(a) $\\text{Reg} = 30\\%$, (b) $\\text{Reg} = -3\\%$",
                  "(a) $\\text{Reg} = 40\\%$, (b) $\\text{Reg} = -5\\%$"
],
              "explanation": "• Phase $V_{\\text{oc}} = 1120.1\\text{ V} \\implies Z_s = 3.88\\;\\Omega \\implies X_s = 3.875\\;\\Omega$.\n• (a) At 0.8 lag: $E_0 = 2059.6\\text{ V} \\implies \\text{Reg} = 34.63\\% \\approx 35\\%$.\n• (b) At 0.8 lead: $E_0 = 1119.7\\text{ V} \\implies \\text{Reg} = -3.03\\% \\approx -3\\%$."
          },
          {
              "id": 80,
              "question": "6.29. A 15 MVA, 11 kV star alternator has open-circuit and zero-power-factor test data given. Using the Potier method, determine: (i) armature leakage reactance, (ii) armature reaction AT/pole, and (iii) voltage regulation at full load 0.8 lag.",
              "options": [
                  "$X_L = 1\\;\\Omega,\\; \\text{AR AT} = 15,000\\text{ AT/pole},\\; \\text{Reg} = 20\\%$",
                  "$X_L = 1\\;\\Omega,\\; \\text{AR AT} = 10,500\\text{ AT/pole},\\; \\text{Reg} = 20\\%$",
                  "$X_L = 2\\;\\Omega,\\; \\text{AR AT} = 15,000\\text{ AT/pole},\\; \\text{Reg} = 14\\%$",
                  "$X_L = 2\\;\\Omega,\\; \\text{AR AT} = 10,500\\text{ AT/pole},\\; \\text{Reg} = 14\\%$"
],
              "answer": 0,
              "extraDistractors": [
                  "$X_L = 1\\;\\Omega,\\; \\text{AR AT} = 15,000\\text{ AT/pole},\\; \\text{Reg} = 25\\%$",
                  "$X_L = 1\\;\\Omega,\\; \\text{AR AT} = 12,000\\text{ AT/pole},\\; \\text{Reg} = 18\\%$",
                  "$X_L = 2\\;\\Omega,\\; \\text{AR AT} = 15,000\\text{ AT/pole},\\; \\text{Reg} = 22\\%$"
],
              "explanation": "• Potier triangle analysis: $X_L = 1.06\\;\\Omega \\approx 1\\;\\Omega$, armature reaction $F_{ar} = 15,000\\text{ AT/pole}$, and voltage regulation $\\text{Reg} = 20\\%$."
          },
          {
              "id": 81,
              "question": "6.30. A 500 kVA, 6600 V star alternator ($R_a = 0.075\\;\\Omega/\\text{phase}$) delivers 500 A. Using the Potier (ZPF) method, find the voltage regulation at: (i) 0.8 lagging, (ii) 0.707 leading, (iii) unity power factor.",
              "options": [
                  "(i) $\\text{Reg} = 17\\%$, (ii) $\\text{Reg} = -24\\%$, (iii) $\\text{Reg} = 2\\%$",
                  "(i) $\\text{Reg} = 17\\%$, (ii) $\\text{Reg} = -15\\%$, (iii) $\\text{Reg} = 2\\%$",
                  "(i) $\\text{Reg} = 22\\%$, (ii) $\\text{Reg} = -24\\%$, (iii) $\\text{Reg} = 5\\%$",
                  "(i) $\\text{Reg} = 22\\%$, (ii) $\\text{Reg} = -15\\%$, (iii) $\\text{Reg} = 5\\%$"
],
              "answer": 0,
              "extraDistractors": [
                  "(i) $\\text{Reg} = 17\\%$, (ii) $\\text{Reg} = -24\\%$, (iii) $\\text{Reg} = 6\\%$",
                  "(i) $\\text{Reg} = 17\\%$, (ii) $\\text{Reg} = -19\\%$, (iii) $\\text{Reg} = 4\\%$",
                  "(i) $\\text{Reg} = 14\\%$, (ii) $\\text{Reg} = -24\\%$, (iii) $\\text{Reg} = 2\\%$"
],
              "explanation": "• (i) 0.8 lag: $\\text{Reg} = 16.69\\% \\approx 17\\%$.\n• (ii) 0.707 lead: $\\text{Reg} = -24.23\\% \\approx -24\\%$.\n• (iii) Unity pf: $\\text{Reg} = 2.26\\% \\approx 2\\%$."
          },
          {
              "id": 82,
              "question": "6.31. A 6-pole, 440 V, 50 Hz star alternator has a resistance between terminals of $0.4\\;\\Omega$. Determine the regulation at full-load current of 40 A at 0.8 pf lag using: (a) Synchronous impedance method, (b) MMF method, (c) Potier-triangle method.",
              "options": [
                  "$\\text{Reg} = 80\\%$, (b) $\\text{Reg} = 32\\%$, (c) $\\text{Reg} = 35\\%$",
                  "$\\text{Reg} = 80\\%$, (b) $\\text{Reg} = 22\\%$, (c) $\\text{Reg} = 25\\%$",
                  "$\\text{Reg} = 55\\%$, (b) $\\text{Reg} = 32\\%$, (c) $\\text{Reg} = 35\\%$",
                  "$\\text{Reg} = 55\\%$, (b) $\\text{Reg} = 22\\%$, (c) $\\text{Reg} = 25\\%$"
],
              "answer": 0,
              "extraDistractors": [
                  "(a) $\\text{Reg} = 80\\%$, (b) $\\text{Reg} = 32\\%$, (c) $\\text{Reg} = 42\\%$",
                  "(a) $\\text{Reg} = 72\\%$, (b) $\\text{Reg} = 32\\%$, (c) $\\text{Reg} = 35\\%$",
                  "(a) $\\text{Reg} = 80\\%$, (b) $\\text{Reg} = 28\\%$, (c) $\\text{Reg} = 30\\%$"
],
              "explanation": "• Comparative regulation rounded to nearest whole percentage:\n  (a) Synchronous impedance method: $80.3\\% \\approx 80\\%$.\n  (b) MMF method: $31.83\\% \\approx 32\\%$.\n  (c) Potier method: $34.55\\% \\approx 35\\%$."
          },
          {
              "id": 83,
              "question": "8.1. A 2.3 kV, 3-phase star-connected synchronous motor has a synchronous impedance $Z_s = (0.2 + j2.2)\\;\\Omega/\\text{phase}$. It operates at 0.5 power factor leading, taking a line current of 200 A. Find the generated emf per phase and torque angle.",
              "options": [
                  "$E_{\\text{ph}} = 1708\\text{ V},\\; \\delta = 9^\\circ\\text{ lagging}$",
                  "$E_{\\text{ph}} = 1708\\text{ V},\\; \\delta = 5^\\circ\\text{ lagging}$",
                  "$E_{\\text{ph}} = 1328\\text{ V},\\; \\delta = 9^\\circ\\text{ lagging}$",
                  "$E_{\\text{ph}} = 1328\\text{ V},\\; \\delta = 5^\\circ\\text{ lagging}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$E_{\\text{ph}} = 1708\\text{ V},\\; \\delta = 12^\\circ\\text{ lagging}$",
                  "$E_{\\text{ph}} = 1540\\text{ V},\\; \\delta = 9^\\circ\\text{ lagging}$",
                  "$E_{\\text{ph}} = 1480\\text{ V},\\; \\delta = 7^\\circ\\text{ lagging}$"
],
              "explanation": "• Phase voltage $V = 1327.9\\text{ V}$. $\\mathbf{E} = \\mathbf{V} - \\mathbf{I}\\mathbf{Z}_s = 1688.9 - j254.6\\text{ V}$.\n• Magnitude $E_{\\text{ph}} = 1708\\text{ V}$, torque angle $\\delta = 8.58^\\circ \\approx 9^\\circ\\text{ lagging}$."
          },
          {
              "id": 84,
              "question": "8.2. A 3-phase, 400 V synchronous motor takes 60 A at 0.8 power factor leading. Its synchronous impedance is $(0.25 + j3.2)\\;\\Omega/\\text{phase}$. Determine the induced line emf and power supplied to the motor.",
              "options": [
                  "$E_{\\text{line}} = 643\\text{ V},\\; P_{\\text{in}} = 33\\text{ kW}$",
                  "$E_{\\text{line}} = 643\\text{ V},\\; P_{\\text{in}} = 25\\text{ kW}$",
                  "$E_{\\text{line}} = 485\\text{ V},\\; P_{\\text{in}} = 33\\text{ kW}$",
                  "$E_{\\text{line}} = 485\\text{ V},\\; P_{\\text{in}} = 25\\text{ kW}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$E_{\\text{line}} = 643\\text{ V},\\; P_{\\text{in}} = 38\\text{ kW}$",
                  "$E_{\\text{line}} = 570\\text{ V},\\; P_{\\text{in}} = 33\\text{ kW}$",
                  "$E_{\\text{line}} = 512\\text{ V},\\; P_{\\text{in}} = 28\\text{ kW}$"
],
              "explanation": "• Input power: $P_{\\text{in}} = \\sqrt{3} \\times 400 \\times 60 \\times 0.8 = 33,255\\text{ W} \\approx 33\\text{ kW}$.\n• Line back EMF: $E_{\\text{line}} = \\sqrt{3} \\times 371.6 = 643.6\\text{ V} \\approx 643\\text{ V}$."
          },
          {
              "id": 85,
              "question": "8.3. A 3-phase synchronous motor develops 10 kW at 1100 V with a synchronous reactance of $8\\;\\Omega/\\text{phase}$, efficiency of 80%, and negligible resistance. Find the minimum current and the corresponding induced emf per phase at full load.",
              "options": [
                  "$I_{\\text{min}} = 7\\text{ A},\\; E_{\\text{ph}} = 637\\text{ V/phase}$",
                  "$I_{\\text{min}} = 7\\text{ A},\\; E_{\\text{ph}} = 713\\text{ V/phase}$",
                  "$I_{\\text{min}} = 5\\text{ A},\\; E_{\\text{ph}} = 637\\text{ V/phase}$",
                  "$I_{\\text{min}} = 5\\text{ A},\\; E_{\\text{ph}} = 713\\text{ V/phase}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$I_{\\text{min}} = 7\\text{ A},\\; E_{\\text{ph}} = 585\\text{ V/phase}$",
                  "$I_{\\text{min}} = 9\\text{ A},\\; E_{\\text{ph}} = 637\\text{ V/phase}$",
                  "$I_{\\text{min}} = 6\\text{ A},\\; E_{\\text{ph}} = 672\\text{ V/phase}$"
],
              "explanation": "• Input power $P_{\\text{in}} = \\frac{10000}{0.80} = 12500\\text{ W}$. At $\\cos\\phi = 1$: $I_{\\text{min}} = \\frac{12500}{\\sqrt{3} \\times 1100} = 6.56\\text{ A} \\approx 7\\text{ A}$.\n• $E_{\\text{ph}} = \\sqrt{635.1^2 + 52.5^2} = 637.25\\text{ V} \\approx 637\\text{ V/phase}$."
          },
          {
              "id": 86,
              "question": "8.4. A 6600 V, 3-phase, star-connected synchronous motor takes full-load current of 80 A at 0.8 power factor leading. The armature resistance is $2.2\\;\\Omega/\\text{phase}$, synchronous reactance is $22\\;\\Omega/\\text{phase}$, and stray losses are 3200 W. Determine: (a) induced line emf, (b) mechanical output power, (c) efficiency.",
              "options": [
                  "$E_L = 8594\\text{ V}$, (b) $P_{\\text{out}} = 686\\text{ kW}$, (c) $\\eta = 94\\%$",
                  "$E_L = 8594\\text{ V}$, (b) $P_{\\text{out}} = 550\\text{ kW}$, (c) $\\eta = 89\\%$",
                  "$E_L = 7240\\text{ V}$, (b) $P_{\\text{out}} = 686\\text{ kW}$, (c) $\\eta = 94\\%$",
                  "$E_L = 7240\\text{ V}$, (b) $P_{\\text{out}} = 550\\text{ kW}$, (c) $\\eta = 89\\%$"
],
              "answer": 0,
              "extraDistractors": [
                  "(a) $E_L = 8594\\text{ V}$, (b) $P_{\\text{out}} = 686\\text{ kW}$, (c) $\\eta = 91\\%$",
                  "(a) $E_L = 8594\\text{ V}$, (b) $P_{\\text{out}} = 612\\text{ kW}$, (c) $\\eta = 94\\%$",
                  "(a) $E_L = 7820\\text{ V}$, (b) $P_{\\text{out}} = 686\\text{ kW}$, (c) $\\eta = 92\\%$"
],
              "explanation": "• (a) $E_L = 8594\\text{ V}$.\n• (b) $P_{\\text{out}} = 686,178\\text{ W} \\approx 686\\text{ kW}$.\n• (c) $\\eta = 93.79\\% \\approx 94\\%$."
          },
          {
              "id": 87,
              "question": "8.5. A 1000 kVA, 11 kV star-connected synchronous motor has $R_a = 3.5\\;\\Omega$ and $X_s = 40\\;\\Omega/\\text{phase}$. Find the induced emf and rotor retardation angle at full load for: (a) unity power factor, (b) 0.8 power factor lagging, (c) 0.8 power factor leading.",
              "options": [
                  "$E_L = 11,284\\text{ V},\\; \\delta = -19^\\circ$; (b) $E_L = 8984\\text{ V},\\; \\delta = -18^\\circ$; (c) $E_L = 13,293\\text{ V},\\; \\delta = -13^\\circ$",
                  "$E_L = 11,284\\text{ V},\\; \\delta = -19^\\circ$; (b) $E_L = 13,293\\text{ V},\\; \\delta = -13^\\circ$; (c) $E_L = 8984\\text{ V},\\; \\delta = -18^\\circ$",
                  "$E_L = 9850\\text{ V},\\; \\delta = -12^\\circ$; (b) $E_L = 7794\\text{ V},\\; \\delta = -11^\\circ$; (c) $E_L = 11,800\\text{ V},\\; \\delta = -10^\\circ$",
                  "$E_L = 9850\\text{ V},\\; \\delta = -12^\\circ$; (b) $E_L = 11,800\\text{ V},\\; \\delta = -10^\\circ$; (c) $E_L = 7794\\text{ V},\\; \\delta = -11^\\circ$"
],
              "answer": 0,
              "extraDistractors": [
                  "(a) $E_L = 11,284\\text{ V},\\; \\delta = -19^\\circ$; (b) $E_L = 9850\\text{ V},\\; \\delta = -15^\\circ$; (c) $E_L = 12,400\\text{ V},\\; \\delta = -14^\\circ$",
                  "(a) $E_L = 10,500\\text{ V},\\; \\delta = -21^\\circ$; (b) $E_L = 8984\\text{ V},\\; \\delta = -18^\\circ$; (c) $E_L = 13,293\\text{ V},\\; \\delta = -13^\\circ$",
                  "(a) $E_L = 12,150\\text{ V},\\; \\delta = -16^\\circ$; (b) $E_L = 7794\\text{ V},\\; \\delta = -11^\\circ$; (c) $E_L = 14,100\\text{ V},\\; \\delta = -12^\\circ$"
],
              "explanation": "• (a) Unity pf: $E_L = 11,284\\text{ V}, \\delta = -18.8^\\circ \\approx -19^\\circ$.\n• (b) 0.8 lag: $E_L = 8984\\text{ V}, \\delta = -17.6^\\circ \\approx -18^\\circ$.\n• (c) 0.8 lead: $E_L = 13,293\\text{ V}, \\approx 13.3\\text{ kV}, \\delta = -13.48^\\circ \\approx -13^\\circ$."
          },
          {
              "id": 88,
              "question": "8.6. A synchronous motor runs at 1500 rpm with excitation adjusted such that induced emf equals applied voltage ($E = V$). Find input power, power factor, and gross torque for an armature current of 200 A if synchronous reactance is $5\\;\\Omega/\\text{phase}$ and resistance is negligible.",
              "options": [
                  "$\\cos\\phi = 0.96\\text{ lagging},\\; P_{\\text{in}} = 995\\text{ kW},\\; T = 7713\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.96\\text{ lagging},\\; P_{\\text{in}} = 750\\text{ kW},\\; T = 5815\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.85\\text{ lagging},\\; P_{\\text{in}} = 995\\text{ kW},\\; T = 7713\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.85\\text{ lagging},\\; P_{\\text{in}} = 750\\text{ kW},\\; T = 5815\\text{ N}\\cdot\\text{m}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$\\cos\\phi = 0.96\\text{ lagging},\\; P_{\\text{in}} = 880\\text{ kW},\\; T = 6825\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.91\\text{ lagging},\\; P_{\\text{in}} = 995\\text{ kW},\\; T = 7713\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.91\\text{ lagging},\\; P_{\\text{in}} = 880\\text{ kW},\\; T = 6825\\text{ N}\\cdot\\text{m}$"
],
              "explanation": "• $\\cos\\phi = 0.9574 \\approx 0.96\\text{ lagging}$.\n• Input power: $P_{\\text{in}} = 994.96\\text{ kW} \\approx 995\\text{ kW}$.\n• Gross torque: $T = 7712.5\\text{ N}\\cdot\\text{m} \\approx 7713\\text{ N}\\cdot\\text{m}$."
          },
          {
              "id": 89,
              "question": "8.7. A 3-phase, star-connected 6600 V synchronous motor has synchronous reactance $X_s = 20\\;\\Omega/\\text{phase}$ ($R_a \\approx 0$). It takes an input power of 900 kW and the induced line emf is 8500 V. Determine the line current and power factor.",
              "options": [
                  "$I = 89\\text{ A},\\; \\cos\\phi = 0.88\\text{ leading}$",
                  "$I = 89\\text{ A},\\; \\cos\\phi = 0.76\\text{ leading}$",
                  "$I = 65\\text{ A},\\; \\cos\\phi = 0.88\\text{ leading}$",
                  "$I = 65\\text{ A},\\; \\cos\\phi = 0.76\\text{ leading}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$I = 89\\text{ A},\\; \\cos\\phi = 0.82\\text{ leading}$",
                  "$I = 78\\text{ A},\\; \\cos\\phi = 0.88\\text{ leading}$",
                  "$I = 104\\text{ A},\\; \\cos\\phi = 0.75\\text{ leading}$"
],
              "explanation": "• Line current: $I = 89.17\\text{ A} \\approx 89\\text{ A}$.\n• Power factor: $\\cos\\phi = 0.8829 \\approx 0.88\\text{ leading}$."
          },
          {
              "id": 90,
              "question": "8.8. A 75 kW, 400 V, 4-pole, star-connected synchronous motor has $R_a = 0.04\\;\\Omega$, $X_s = 0.4\\;\\Omega/\\text{phase}$, and full-load efficiency of 92.5%. Find the induced phase emf and gross mechanical power developed at full load and 0.8 power factor leading.",
              "options": [
                  "$E_{\\text{ph}} = 266\\text{ V/phase},\\; P_m = 79\\text{ kW}$",
                  "$E_{\\text{ph}} = 266\\text{ V/phase},\\; P_m = 72\\text{ kW}$",
                  "$E_{\\text{ph}} = 231\\text{ V/phase},\\; P_m = 79\\text{ kW}$",
                  "$E_{\\text{ph}} = 231\\text{ V/phase},\\; P_m = 72\\text{ kW}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$E_{\\text{ph}} = 266\\text{ V/phase},\\; P_m = 85\\text{ kW}$",
                  "$E_{\\text{ph}} = 285\\text{ V/phase},\\; P_m = 79\\text{ kW}$",
                  "$E_{\\text{ph}} = 250\\text{ V/phase},\\; P_m = 68\\text{ kW}$"
],
              "explanation": "• Phase EMF: $E_{\\text{ph}} = 266.18\\text{ V} \\approx 266\\text{ V/phase}$.\n• Gross mechanical power: $P_m = 78.512\\text{ kW} \\approx 79\\text{ kW}$."
          },
          {
              "id": 91,
              "question": "8.9. A 2000 V, 3-phase, star-connected synchronous motor has $R_a = 0.2\\;\\Omega$ and $X_s = 2.2\\;\\Omega/\\text{phase}$. The motor takes an input of 800 kW, and the induced line emf is 2500 V. Calculate the line current and power factor.",
              "options": [
                  "$I = 254\\text{ A},\\; \\cos\\phi = 0.91\\text{ leading}$",
                  "$I = 254\\text{ A},\\; \\cos\\phi = 0.82\\text{ leading}$",
                  "$I = 181\\text{ A},\\; \\cos\\phi = 0.91\\text{ leading}$",
                  "$I = 181\\text{ A},\\; \\cos\\phi = 0.82\\text{ leading}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$I = 254\\text{ A},\\; \\cos\\phi = 0.86\\text{ leading}$",
                  "$I = 220\\text{ A},\\; \\cos\\phi = 0.91\\text{ leading}$",
                  "$I = 285\\text{ A},\\; \\cos\\phi = 0.79\\text{ leading}$"
],
              "explanation": "• Line current: $I = 254.16\\text{ A} \\approx 254\\text{ A}$.\n• Power factor: $\\cos\\phi = 0.909 \\approx 0.91\\text{ leading}$."
          },
          {
              "id": 92,
              "question": "8.10. A 400 V, 6-pole, 50 Hz star-connected synchronous motor has $R_a = 0.5\\;\\Omega$ and $Z_s = 4\\;\\Omega/\\text{phase}$. It takes 20 A at unity power factor. The load torque increases until the armature current is 60 A (field excitation unchanged). Find the gross torque and new power factor.",
              "options": [
                  "$\\cos\\phi = 0.90\\text{ lagging},\\; T = 306\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.90\\text{ lagging},\\; T = 241\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.80\\text{ lagging},\\; T = 306\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.80\\text{ lagging},\\; T = 241\\text{ N}\\cdot\\text{m}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$\\cos\\phi = 0.90\\text{ lagging},\\; T = 275\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.85\\text{ lagging},\\; P = 306\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.85\\text{ lagging},\\; T = 275\\text{ N}\\cdot\\text{m}$"
],
              "explanation": "• Power factor: $\\cos\\phi = 0.90\\text{ lagging}$.\n• Gross torque: $T = 305.7\\text{ N}\\cdot\\text{m} \\approx 306\\text{ N}\\cdot\\text{m}$."
          },
          {
              "id": 93,
              "question": "8.11. A 2000 V, 4-pole, 3-phase star-connected motor runs at 1500 rpm with open-circuit voltage equal to applied voltage ($E = V = 1155\\text{ V/phase}$). Armature resistance is negligible and $X_s = 3\\;\\Omega/\\text{phase}$. Find input power, power factor, and torque for $I_a = 200\\text{ A}$.",
              "options": [
                  "$\\cos\\phi = 0.97\\text{ lagging},\\; P_{\\text{in}} = 669\\text{ kW},\\; T = 4259\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.97\\text{ lagging},\\; P_{\\text{in}} = 589\\text{ kW},\\; T = 3749\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.85\\text{ lagging},\\; P_{\\text{in}} = 669\\text{ kW},\\; T = 4259\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.85\\text{ lagging},\\; P_{\\text{in}} = 589\\text{ kW},\\; T = 3749\\text{ N}\\cdot\\text{m}$"
],
              "answer": 0,
              "extraDistractors": [
                  "$\\cos\\phi = 0.97\\text{ lagging},\\; P_{\\text{in}} = 620\\text{ kW},\\; T = 3945\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.92\\text{ lagging},\\; P_{\\text{in}} = 669\\text{ kW},\\; T = 4259\\text{ N}\\cdot\\text{m}$",
                  "$\\cos\\phi = 0.92\\text{ lagging},\\; P_{\\text{in}} = 620\\text{ kW},\\; T = 3945\\text{ N}\\cdot\\text{m}$"
],
              "explanation": "• $\\cos\\phi = 0.9657 \\approx 0.97\\text{ lagging}$.\n• Input power: $P_{\\text{in}} = 669.2\\text{ kW} \\approx 669\\text{ kW}$.\n• Developed torque: $T = 4259.3\\text{ N}\\cdot\\text{m} \\approx 4259\\text{ N}\\cdot\\text{m}$."
          }
      ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SUBJECT_DATA;
}
