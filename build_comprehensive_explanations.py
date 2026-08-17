import sys
import re
import json

sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Custom comprehensive explanations for specific questions like #117 and general patterns for others
detailed_updates = {
    # Fluid Mechanics #117
    117: "• Why Gas is Correct: Gases (such as air or steam) maintain a constant dynamic viscosity regardless of the applied shear rate, perfectly obeying Newton's law of viscosity (τ = μ du/dy).\n• Why Other Choices are Incorrect: Motor oils (multigrade with polymer additives) and Paints are non-Newtonian shear-thinning (pseudoplastic/thixotropic) fluids whose viscosity changes with shear rate. Clay slurries are Bingham plastics that require a minimum yield stress before they begin to flow.",

    # Q1
    1: "• Why 'An electron will not be ejected' is Correct: Photons deliver energy in discrete quanta (E = hν). If the photon energy is less than the metal's work function (Φ), no single photon carries enough energy to overcome the binding force and free an electron.\n• Why Other Choices are Incorrect: In photoelectric emission, photon-electron interactions are 1-to-1. Excess photons cannot pool their energy to eject electrons if individual photon energy is below the work function threshold.",

    # Q2
    2: "• Why 'Increases' is Correct: In supersonic flow (Mach > 1), fluid dynamics behavior reverses compared to subsonic flow: expanding the duct cross-sectional area causes the fluid to accelerate further, decreasing fluid pressure.\n• Why Other Choices are Incorrect: Decreasing area in supersonic flow causes deceleration and pressure rise (acting like a diffuser), while remaining constant maintains choked velocity.",

    # Q3
    3: "• Why 'Dynamic viscosity / kinematic viscosity' is Correct: Kinematic viscosity (ν) is defined as dynamic viscosity (μ) divided by mass density (ρ), giving ν = μ/ρ. Rearranging for density gives ρ = μ/ν.\n• Why Other Choices are Incorrect: Multiplying or reversing the ratio yields incorrect physical units (kg/m³ required for density).",

    # Q4
    4: "• Why 'Shape' is Correct: Fluids (liquids and gases) lack shear resistance and conform to the shape of their container. Liquids maintain a fixed volume, while gases expand to fill both shape and volume.\n• Why Other Choices are Incorrect: Liquids do not take the volume of their contents (they have a fixed volume), so only 'Shape' applies universally to all fluids.",

    # Q5
    5: "• Why 'A and B above are correct' is Correct: Alcohol has a low mass density (producing a larger column height for small pressure changes, improving reading sensitivity) and forms a clean, easily readable meniscus in inclined tubes.\n• Why Other Choices are Incorrect: Low cost alone is not the primary engineering reason for selecting indicator fluids in precision manometers.",

    # Q6
    6: "• Why 'Shear stress is proportional to rate of strain' is Correct: By definition, Newtonian fluids satisfy Newton's Law of Viscosity (τ = μ du/dy), meaning shear stress (τ) is linearly proportional to the rate of shear strain (du/dy).\n• Why Other Choices are Incorrect: Viscosity is non-zero, shear stress is single-valued for a given strain rate, and shear stress is proportional to rate of strain (not total static strain).",

    # Q7
    7: "• Why 'When there is no motion of one fluid layer relative to an adjacent layer' is Correct: By Pascal's Law, hydrostatic pressure at a point is equal in all directions only when the fluid is static (no relative motion, meaning zero shear stress).\n• Why Other Choices are Incorrect: When fluid layers move relative to each other, viscous shear stresses distort the stress tensor, making normal stress dependent on direction.",

    # Q8
    8: "• Why 'It is a shear stress' is Correct: Fluid pressure is a compressive normal stress acting perpendicular to surfaces, NOT a shear stress acting parallel to surfaces.\n• Why Other Choices are Incorrect: Pressure IS the same in all directions at a point in statics, DOES act normal to surfaces, and DOES increase linearly with depth (P = γh).",

    # Q9
    9: "• Why 'First slowly and then steeply' is Correct: Atmospheric density decreases exponentially with altitude (barometric height relation), causing mercury column height to drop gradually at lower altitudes and progressively faster higher up.\n• Why Other Choices are Incorrect: Linear or constant relations ignore the compressible, exponential nature of Earth's atmosphere.",

    # Q10
    10: "• Why 'Biot number' is Correct: Biot number (Bi = h L / k) evaluates conductive vs convective heat transfer resistance in solids. It is a thermal transport parameter, not a fluid dynamics flow parameter.\n• Why Other Choices are Incorrect: Reynolds number (viscous ratio), Froude number (gravity ratio), and Mach number (compressibility ratio) are all core fluid dynamic parameters.",

    # Q31
    31: "• Why 'Above the center of gravity' is Correct: A floating body is in stable rotational equilibrium when its Metacenter (M) lies above its Center of Gravity (G), generating a righting moment when tilted.\n• Why Other Choices are Incorrect: If the Metacenter lies below the Center of Gravity, any slight tilt produces an overturning moment causing the body to capsize (unstable equilibrium).",

    # Q32
    32: "• Why 'Below the centroid' is Correct: Because hydrostatic pressure increases linearly with depth (P = ρgh), the lower half of a submerged surface experiences greater force, placing the resultant Center of Pressure below the geometric centroid.\n• Why Other Choices are Incorrect: At or above the centroid would imply uniform or upward-increasing pressure, which violates hydrostatic law.",

    # Q34
    34: "• Why 'The sum of pressure energy and potential energy' is Correct: The Hydraulic Grade Line (HGL) represents piezometric head, combining pressure head (P/γ) and elevation head (z).\n• Why Other Choices are Incorrect: Total energy is represented by the Energy Grade Line (EGL), which also includes velocity head (V²/2g).",

    # Q35
    35: "• Why 'Total energy' is Correct: The Energy Grade Line (EGL) plots the total mechanical energy head, combining pressure head (P/γ), elevation head (z), and dynamic velocity head (V²/2g).\n• Why Other Choices are Incorrect: The sum of pressure and elevation head alone defines the Hydraulic Grade Line (HGL), not the EGL."
}

# Function to parse and enhance all explanations in questions.js
def enhance_all_explanations(text):
    # Regex to find each question block
    def replace_exp(match):
        q_id = int(match.group(1))
        q_text = match.group(2)
        opts_str = match.group(3)
        ans_idx = int(match.group(4))
        old_exp = match.group(5)

        # Parse options
        options = [o.strip(' "') for o in opts_str.split('",')]
        correct_opt = options[ans_idx] if ans_idx < len(options) else "Correct Choice"

        if q_id in detailed_updates:
            new_exp = detailed_updates[q_id]
        else:
            # Build a structured explanation explaining why correct choice is valid and others differ
            other_opts = [o for i, o in enumerate(options) if i != ans_idx]
            other_str = ", ".join(other_opts[:3])
            
            # Clean old exp
            clean_old = old_exp.replace('•', '').strip()
            
            new_exp = f"• Why '{correct_opt}' is Correct: {clean_old}\n• Why Other Choices differ: Alternative options ({other_str}) do not satisfy the required governing physical principles or mathematical relations for this specific problem condition."

        return f'{{ id: {q_id}, question: "{q_text}", options: [{opts_str}], answer: {ans_idx}, explanation: "{new_exp.replace(chr(10), "\\n")}" }}'

    pattern = r'\{ id: (\d+), question: "([^"]+)", options: \[(.*?)\], answer: (\d+), explanation: "([^"]+)" \}'
    return re.sub(pattern, replace_exp, text)

new_content = enhance_all_explanations(content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated explanations across all questions in questions.js!")
