import re
import json

filepath = r"C:\Users\Jacob\.gemini\antigravity\scratch\fluid-mechanics-quiz-reviewer\questions.js"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Let's write a python parser / replacer to enhance explanations into clear layman's terms.

# Key patterns for common physics/engineering concepts in layman's terms:
layman_replacements = [
    # Photoelectric / photons / work function
    (r"Photoelectric emission occurs only when the energy of incident photon.*",
     "Think of the work function as an exit ticket price. If light doesn't bring enough energy (cash) to pay the ticket price, no electron can leave the metal surface!"),

    # Supersonic flow duct
    (r"In supersonic flow \(Mach > 1\), expanding the duct area.*",
     "Unlike normal slow air, supersonic air acts backwards! Expanding a duct (wider nozzle) actually speeds supersonic air up even more, dropping its pressure."),

    # Mach number definition
    (r"Mach number is defined as the ratio of flow velocity to the speed of sound.*",
     "Mach number tells you how many times faster you're traveling compared to sound. Mach 1 = speed of sound, Mach > 1 = supersonic speed."),

    # Viscosity
    (r"Dynamic viscosity measure.*",
     "Viscosity is how 'thick' or sticky a fluid is. Water flows easily (low viscosity), while honey resists moving (high viscosity)."),
     
    (r"Kinematic viscosity is the ratio of dynamic viscosity to fluid density.*",
     "Kinematic viscosity is dynamic viscosity divided by density (ν = μ/ρ). It measures how fast a fluid spreads out under gravity vs its own weight."),

    # Reynolds number
    (r"Reynolds number represents the ratio of inertial forces to viscous forces.*",
     "Reynolds number measures flow chaos! Low numbers mean smooth laminar flow (like pouring syrup), while high numbers mean messy turbulent flow (like a rushing river)."),

    # Bernoulli's Principle
    (r"Bernoulli's equation states that total mechanical energy.*",
     "Bernoulli's principle means fast-moving fluids create low pressure! When fluid speeds up, its pressure drops to keep total energy constant."),

    # Pascal's Law
    (r"Pascal's law states that pressure applied to an enclosed fluid is transmitted equally.*",
     "Pascal's law: squeeze a fluid in a sealed container, and that exact same pressure pushes everywhere equally in all directions (like hydraulic car jacks!)."),

    # Archimedes' Principle
    (r"Archimedes' principle states that the buoyant force on a submerged object equals.*",
     "Archimedes' principle: an object in water gets pushed UP by a force equal to the exact weight of the water it pushes out of the way."),

    # Continuity Equation
    (r"The continuity equation for incompressible flow states that mass flow rate is constant.*",
     "Continuity (A1V1 = A2V2): Water can't vanish! If you squeeze a hose nozzle (smaller area), the water must shoot out faster to keep the flow rate the same."),

    # Surface tension
    (r"Surface tension is caused by cohesive forces between liquid molecules.*",
     "Surface tension is liquid skin! Molecules at the surface cling tightly together, letting bugs walk on water or forming round raindrops."),

    # Deformable Bodies / Stress & Strain
    (r"Stress is internal force per unit area.*",
     "Stress (σ = F/A) is how hard an internal load is trying to stretch or crush a material per square millimeter."),

    (r"Strain is the relative deformation or elongation per unit length.*",
     "Strain (ε = ΔL/L) is how much a material stretches compared to its original length (expressed as a percentage or decimal)."),

    (r"Hooke's Law states that stress is directly proportional to strain.*",
     "Hooke's Law (σ = Eε): Rubber bands and steel act like springs! Double the pulling force, and you double the stretch, as long as you don't permanently bend it."),

    (r"Young's Modulus E measures stiffness.*",
     "Young's Modulus (E) measures stiffness. High E (like steel) means hard to stretch; low E (like rubber) means super easy to stretch."),

    (r"Poisson's Ratio is the ratio of lateral strain to axial strain.*",
     "Poisson's ratio (ν): When you stretch a rubber band lengthwise, it gets thinner on the sides! It compares side-thinning to length-stretching."),

    (r"Shear stress occurs parallel to the surface.*",
     "Shear stress is sliding stress! Think of sliding a deck of cards sideways—the layers slide across each other."),

    (r"Torsion causes shear stress proportional to radius.*",
     "Torsion is twisting! Twisting a shaft creates the strongest twist (shear stress) on the outer skin, and zero twist at the exact center axis."),

    (r"Bending stress is maximum at the extreme fibers.*",
     "When you bend a beam, the top side gets crushed (compression) and the bottom side gets stretched (tension). The middle line (neutral axis) feels zero stress!"),

    # Heat Transfer
    (r"Conduction heat transfer occurs through molecular vibration.*",
     "Conduction is touch heat! Heat moves directly through solid matter as hot vibrating atoms bump into cooler neighboring atoms (like a spoon getting hot in soup)."),

    (r"Convection heat transfer occurs between a surface and a moving fluid.*",
     "Convection is fluid heat! Moving air or liquid carries heat away from a warm surface (like a fan blowing hot air away from your skin)."),

    (r"Radiation heat transfer occurs via electromagnetic waves without requiring a medium.*",
     "Radiation is wave heat! Energy travels through empty space as invisible light waves—just like how the sun warms Earth through space."),

    (r"Fourier's Law of Conduction states heat flux is proportional to temperature gradient.*",
     "Fourier's Law (q = -k dT/dx): Heat always flows from hot to cold! The bigger the temperature difference, the faster heat rushes across."),

    (r"Newton's Law of Cooling states heat loss is proportional to temperature difference.*",
     "Newton's Law of Cooling (q = h A ΔT): A hot cup of coffee cools down much faster in a cold room than in a warm room."),

    (r"Stefan-Boltzmann Law states total emissive power is proportional to absolute temperature to the fourth power.*",
     "Stefan-Boltzmann Law (E = σ T⁴): Doubling an object's absolute temperature increases its radiated heat by 16 times (2⁴ = 16)!"),

    (r"Thermal conductivity k measures a material's ability to conduct heat.*",
     "Thermal conductivity (k) measures heat speed. Metals have high k (conduct heat fast); foam insulation has low k (traps heat)."),

    (r"Blackbody is an ideal surface that absorbs all incident radiation.*",
     "A blackbody is a perfect heat sponge! It absorbs 100% of incoming radiation energy and emits maximum possible thermal radiation."),

    (r"Emissivity ε is the ratio of radiation emitted by a surface to that of a blackbody.*",
     "Emissivity (ε) is a surface's heat radiation score from 0 to 1. Matte black objects emit heat like a boss (ε ≈ 1), while shiny chrome traps heat (ε ≈ 0.05).")
]

# Let's perform regex replacements on the explanations in questions.js
for pattern, replacement in layman_replacements:
    content = re.sub(pattern, replacement, content)

# Write back to questions.js
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Layman's terms transformation complete!")
