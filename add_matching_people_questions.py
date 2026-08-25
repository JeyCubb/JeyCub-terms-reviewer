import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

new_people_questions = [
    {
        "id": 26,
        "question": "Which scientist and inventor is famous for discovering and pioneering Alternating Current (AC) power transmission systems?",
        "options": ["Nikola Tesla", "Alessandro Volta", "Thomas Edison", "James Clerk Maxwell"],
        "answer": 0,
        "explanation": "• Why 'Nikola Tesla' is Correct: Nikola Tesla pioneered polyphase Alternating Current (AC) power systems, AC induction motors, and high-voltage AC transmission lines.\n• Why Other Choices are Incorrect: Alessandro Volta invented the battery, Thomas Edison advocated for Direct Current (DC), and Maxwell formulated electromagnetic theory."
    },
    {
        "id": 27,
        "question": "Who invented the first practical battery (the Voltaic Pile) in 1800, providing the world with its first source of continuous direct electric current?",
        "options": ["Guglielmo Marconi", "Alessandro Volta", "Samuel Morse", "Michael Faraday"],
        "answer": 1,
        "explanation": "• Why 'Alessandro Volta' is Correct: Alessandro Volta created the Voltaic Pile in 1800 (alternating discs of zinc and copper separated by brine-soaked cloth), producing the first chemical battery.\n• Why Other Choices are Incorrect: Marconi pioneered wireless radio, Morse developed telegraphy, and Faraday discovered electromagnetic induction."
    },
    {
        "id": 28,
        "question": "Who is credited with pioneering work in long-distance radio transmission and developing practical wireless telegraphy?",
        "options": ["Tim Berners-Lee", "Jack Kilby", "Guglielmo Marconi", "Alexander Graham Bell"],
        "answer": 2,
        "explanation": "• Why 'Guglielmo Marconi' is Correct: Guglielmo Marconi sent the first transatlantic radio signal in 1901 and won the Nobel Prize for pioneering wireless radio communication.\n• Why Other Choices are Incorrect: Tim Berners-Lee created the World Wide Web, Jack Kilby co-invented the integrated circuit, and Bell invented the telephone."
    },
    {
        "id": 29,
        "question": "Which theoretical physicist is renowned for the formulation of classical electromagnetic theory (Maxwell's Equations), unifying electricity, magnetism, and light?",
        "options": ["James Clerk Maxwell", "Nikola Tesla", "Samuel Morse", "Heinrich Hertz"],
        "answer": 0,
        "explanation": "• Why 'James Clerk Maxwell' is Correct: James Clerk Maxwell published his four unified field equations in 1865, proving that light is an electromagnetic wave.\n• Why Other Choices are Incorrect: Tesla pioneered AC power systems, Morse invented single-wire telegraphy, and Hertz experimentally demonstrated radio waves."
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
        "explanation": "• Why 'Introduction of the Integrated Circuit (IC)' is Correct: Jack Kilby (Texas Instruments) and Robert Noyce (Fairchild Semiconductor) independently invented the Integrated Circuit (IC), fabricating complete circuits on a single semiconductor chip.\n• Why Other Choices are Incorrect: Edison discovered thermionic emission, Berners-Lee created WWW, and Morse invented the telegraph."
    },
    {
        "id": 31,
        "question": "Which computer scientist is renowned for the development of the World Wide Web (WWW) in 1989 while working at CERN?",
        "options": ["Alan Turing", "Tim Berners-Lee", "Steve Wozniak", "Dennis Ritchie"],
        "answer": 1,
        "explanation": "• Why 'Tim Berners-Lee' is Correct: Sir Tim Berners-Lee invented the World Wide Web (WWW), HTML, HTTP, and the first browser at CERN in 1989.\n• Why Other Choices are Incorrect: Alan Turing developed theoretical computer science, Wozniak co-founded Apple, and Ritchie created C/Unix."
    },
    {
        "id": 32,
        "question": "Who developed the first successful single-wire electric telegraph and co-created the dot-and-dash signaling code named after him?",
        "options": ["Samuel Morse", "Alexander Graham Bell", "Guglielmo Marconi", "Thomas Edison"],
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
    }
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Convert new questions to format string and insert before closing bracket of basic_electronics questions array
new_q_str = ",\n" + json.dumps(new_people_questions, indent=6)[1:-1]

# Find the end of basic_electronics questions list (before fluid_mechanics or deformable_bodies)
target = '"id": 25,'
if '"id": 26,' not in content:
    idx = content.find(target)
    if idx != -1:
        # Find closing bracket of question 25 object }
        bracket_idx = content.find("}", idx)
        new_content = content[:bracket_idx+1] + new_q_str + content[bracket_idx+1:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully appended new people & legacy questions to basic_electronics!")
    else:
        print("Could not locate target Q25.")
else:
    print("New people questions already present.")
