import sys
import re

# Set encoding for print output
sys.stdout.reconfigure(encoding='utf-8')

filepath = 'questions.js'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern replacements to convert blunt explanations into subtle conceptual hints
refinements = [
    # Q1
    ("Think of the work function as an exit ticket price. If light doesn't bring enough energy (cash) to pay the ticket price, no electron can leave the metal surface!",
     "The photoelectric effect requires the photon's energy (E = hν) to meet or exceed the metal's binding work function (Φ). If E < Φ, no single photon possesses sufficient energy to liberate a bound electron."),
    
    # Q2
    ("Unlike normal slow air, supersonic air acts backwards! Expanding a duct (wider nozzle) actually speeds supersonic air up even more, dropping its pressure.",
     "In compressible fluid dynamics, supersonic flow (Mach > 1) responds inversely to duct area changes compared to subsonic flow: expanding duct area increases flow velocity and drops fluid pressure."),
     
    # Q3
    ("Kinematic viscosity (ν) = Dynamic viscosity (μ) / Density (ρ), so Density (ρ) = Dynamic viscosity (μ) / Kinematic viscosity (ν).",
     "Kinematic viscosity (ν) represents dynamic viscosity (μ) normalized by mass density (ρ), expressed by the fundamental relation ν = μ / ρ."),

    # Q4
    ("Fluids (liquids and gases) do not have a fixed shape and conform to the shape of their container.",
     "Fluids continuously deform under applied shear stresses, allowing them to adapt seamlessly to the geometry of their container while retaining or expanding their volume."),

    # Q5
    ("Alcohol's low density provides a longer liquid column for a small pressure difference (higher sensitivity) and forms a clear, distinct meniscus.",
     "Low-density indicator fluids produce larger column displacements for minute pressure differentials, enhancing reading precision and forming a distinct fluid boundary."),

    # Q6
    ("A Newtonian fluid follows Newton's law of viscosity, where shear stress (τ) is directly proportional to the rate of shear strain.",
     "Newtonian fluids exhibit a linear relationship between applied shear stress (τ) and the velocity gradient (rate of shear strain du/dy), governed by a constant viscosity coefficient."),

    # Q7
    ("According to Pascal's Law, in a fluid at rest (no relative motion), pressure is equal in all directions.",
     "Pascal's Law demonstrates that in static fluids—where shear forces between adjacent fluid layers are absent—normal stress (hydrostatic pressure) remains uniform in every direction around a point."),

    # Q8
    ("Fluid pressure is a normal compressive stress, not a shear stress.",
     "Hydrostatic fluid pressure acts strictly perpendicular (normal) to any contacting boundary surface, representing compressive stress rather than tangential shear stress."),

    # Q9
    ("Atmospheric pressure decreases exponentially with altitude, causing mercury height to drop slowly near ground level and steeper higher up.",
     "Hydrostatic atmospheric pressure variation follows the barometric height relation, where ambient pressure decreases exponentially with increasing elevation above sea level."),

    # Q10
    ("Biot number is used in heat transfer calculations, whereas Reynolds, Froude, and Mach numbers are fluid dynamic parameters.",
     "Reynolds, Froude, and Mach numbers evaluate inertia against viscous, gravitational, and elastic forces in fluid motion, whereas Biot number characterizes conductive vs convective thermal resistance."),

    # Q11
    ("Mass density can be expressed in terms of mass/volume or gravitational units.",
     "Mass density (ρ) quantifies mass packed per unit volume, which can be expressed in standard SI units (kg/m³) or equivalent mass-force system representations."),

    # Q12
    ("Speed of sound c = √(K/ρ). Thermal conductivity does not directly govern sound wave propagation speed.",
     "Acoustic wave propagation speed in a fluid depends on elasticity (bulk modulus K) and inertia (density ρ) via c = √(K/ρ), independent of thermal transport properties."),

    # Q13
    ("Water achieves maximum mass density of 1000 kg/m³ at 4°C, 1 atm at sea level.",
     "Pure water achieves its peak mass density of 1000 kg/m³ at standard atmospheric pressure (760 mm Hg) at its density anomaly temperature of 4 °C at mean sea level."),

    # Q14
    ("Hysteresis is a structural/magnetic property, not a standard fluid property.",
     "Fluids are defined by transport and thermodynamic properties like viscosity, surface tension, and bulk modulus; hysteresis refers to energy dissipation in solid materials."),

    # Q15
    ("For large pipes (3000 mm), a Pitot tube is practical and economical for measuring point flow velocity.",
     "In massive conduits (such as 3000 mm water mains), inserting a point-velocity probe like a Pitot tube is much more practical and cost-effective than installing full-bore obstruction meters."),

    # Q16
    ("Total pressure at depth is the sum of pressure heads produced by each liquid layer above.",
     "By hydrostatic principles, total pressure at a given depth within stratified immiscible liquids equals the cumulative sum of hydrostatic pressure heads (ρgh) exerted by each fluid layer above."),

    # Q17
    ("Standard 1D continuity equation requires steady flow with uniform cross-sectional velocity.",
     "The simplified 1D continuity relation Q = A₁V₁ = A₂V₂ assumes steady flow conditions where flow rate is constant over time and velocity is averaged uniformly across sections."),

    # Q18
    ("Uniform flow occurs when velocity vector at a given instant does not change along the flow path.",
     "Uniform flow requires that fluid velocity vectors remain constant in both magnitude and direction at every point along the flow channel at any given snapshot in time."),

    # Q19
    ("In ideal irrotational fluid flow, total energy head remains constant everywhere throughout the field.",
     "For ideal (frictionless, incompressible) irrotational flow, Bernoulli's equation establishes that total mechanical energy head remains uniform across all streamlines in the fluid field."),

    # Q20
    ("Pitot tube converts dynamic pressure (kinetic energy) into stagnation pressure relative to static pressure.",
     "A Pitot tube measures fluid velocity by bringing local flow to rest at a stagnation point, measuring the difference between total stagnation pressure and static ambient pressure."),

    # Q21
    ("Summit elevation should not exceed ~2.4 m above HGL to prevent cavitation.",
     "To prevent fluid pressure from dropping below vapor pressure (causing cavitation and air locks), pipeline summits over ridges are restricted to ~2.4 m above the Hydraulic Grade Line."),

    # Q22
    ("Stream function automatically satisfies the 2D incompressible continuity equation (conservation of mass).",
     "The stream function (Ψ) is mathematically defined such that its spatial derivatives automatically satisfy the 2D incompressible mass conservation (continuity) equation."),

    # Q23
    ("In high-speed flows, potential energy changes are negligible compared to kinetic energy.",
     "When fluid flow reaches high velocities, changes in kinetic energy (V²/2) dominate the energy balance, making potential elevation head changes (gz) negligible by comparison."),

    # Q24
    ("McLeod gauge operates by compressing a trapped gas sample using Boyle's Law.",
     "A McLeod gauge measures ultra-low gas pressures by isolating a known volume of gas and compressing it isothermally to a higher readable pressure following Boyle's Law (P₁V₁ = P₂V₂)."),

    # Q25
    ("Kaplan turbine is an axial-flow reaction turbine designed for low heads and large flows.",
     "Kaplan turbines feature adjustable propeller blades operating in axial flow conditions, specifically engineered for high volume flow rates under low hydraulic heads."),

    # Q26
    ("The Darcy-Weisbach equation using hydraulic diameter is the general standard.",
     "The Darcy-Weisbach friction head loss formula h_f = f(L/D_h)(V²/2g) remains the universal foundation for calculating viscous pressure drop across non-circular flow channels."),

    # Q27
    ("Parameter f is the dimensionless Darcy friction factor.",
     "In pipe friction relations, f denotes the dimensionless Darcy friction factor, which quantifies boundary shear resistance along the conduit wall."),

    # Q28
    ("Moody diagram plots friction factor vs Reynolds number and relative roughness.",
     "The Moody Diagram provides a unified graphical chart mapping friction factor (f) against Reynolds Number (Re) and relative pipe roughness (ε/D) across laminar, transitional, and turbulent regimes."),

    # Q29
    ("Relative velocity is the vector difference between two velocities.",
     "Relative velocity evaluates the motion of one body relative to another, computed mathematically as the vector subtraction between their respective velocity vectors."),

    # Q30
    ("33 in Hg = 111.7 kPa, which is higher than 31 ft H2O (92.6 kPa) or 75 cm Hg (100 kPa).",
     "Converting pressure heads to standard pressure units reveals that 33 inches of mercury (~111.8 kPa) exerts greater pressure than 75 cm Hg (~100 kPa) or 31 ft of water (~92.6 kPa)."),

    # Q31
    ("Metacenter M must lie above the center of gravity G for stable equilibrium.",
     "A floating body achieves stable rotational equilibrium when its metacenter (M) is positioned vertically above its center of gravity (G), creating a restoring moment when tilted."),

    # Q32
    ("Hydrostatic pressure increases with depth, placing center of pressure below centroid.",
     "Because hydrostatic pressure increases linearly with depth, the resultant pressure force acts at the Center of Pressure, which always lies below the geometric centroid of an inclined submerged plane."),

    # Q33
    ("Buoyant force acts through the centroid of the displaced fluid volume (Archimedes' Principle).",
     "Archimedes' Principle establishes that the upward buoyant force acts directly through the center of buoyancy, which is the geometric centroid of the displaced fluid volume."),

    # Q34
    ("HGL = Pressure head (P/γ) + Elevation head (z).",
     "The Hydraulic Grade Line (HGL) represents piezometric head, combining static pressure head (P/γ) and potential elevation head (z) along a flow line."),

    # Q35
    ("EGL = Total energy head (P/γ + z + V²/2g).",
     "The Energy Grade Line (EGL) represents total fluid energy head, summing static pressure head (P/γ), elevation head (z), and dynamic velocity head (V²/2g)."),

    # Q36
    ("Friction dissipates total head, causing EGL to slope downward along flow direction.",
     "Viscous dissipation and wall friction continuously consume total energy head in real fluids, forcing the Energy Grade Line to slope downward in the direction of flow."),

    # Q37
    ("Pitot tube measures localized fluid velocity.",
     "A Pitot tube measures localized point velocity in a moving fluid stream by sensing stagnation vs static pressure differences."),

    # Q38
    ("Hydrometer measures specific gravity of liquids.",
     "A hydrometer utilizes buoyant equilibrium (Archimedes' principle) to measure the relative density or specific gravity of liquids directly."),

    # Q39
    ("Navier-Stokes balances inertia against gravity, pressure, and viscous forces.",
     "The Navier-Stokes equations express momentum conservation for viscous fluids, accounting for body forces (gravity), surface pressure gradients, and viscous shear forces."),

    # Q40
    ("Recommended maximum velocity to avoid concrete erosion is 4 to 5 m/s.",
     "To prevent scouring, erosion, and cavitation damage on concrete linings, flow velocity through unlined concrete water tunnels is generally restricted to 4–5 m/s."),

    # Q41
    ("An orifice is an opening in a hydraulic structure with flow regulation provision.",
     "An orifice is a submerged opening with a closed perimeter placed in a wall or bulkhead, designed for fluid measurement or discharge regulation."),

    # Q42
    ("Cd = Cc · Cv. Since Cc < 1, Cd is always less than Cv.",
     "The overall coefficient of discharge (Cd) is the product of contraction coefficient (Cc) and velocity coefficient (Cv). Because jet contraction causes Cc < 1, Cd is always smaller than Cv."),

    # Q43
    ("A weir is a structure with free surface (partially full) open channel flow.",
     "A weir is an obstruction built across an open channel over which liquid flows with a free upper surface, characterized by partially full flow conditions."),

    # Q44
    ("Friction factor in rough turbulent flow depends on Re and relative roughness.",
     "In fully turbulent pipe flow, boundary resistance depends simultaneously on flow turbulence (Reynolds number Re) and wall surface micro-geometry (relative roughness ε/D)."),

    # Q45
    ("Maximum power transmission occurs when friction head loss h_f = H/3.",
     "Hydraulic transmission theory proves that maximum power output through a pipe network occurs when friction head loss (h_f) equals exactly one-third of total available supply head (H/3)."),

    # Q46
    ("If back pressure equals inlet pressure, zero pressure gradient means no flow occurs.",
     "Fluid motion requires a driving pressure gradient. If receiver back pressure equals supply pressure, the pressure gradient is zero and no flow can take place."),

    # Q47
    ("Normal shock transitions flow abruptly from supersonic to subsonic.",
     "A normal shock wave causes a steep, irreversible compression process across which flow decelerates abruptly from supersonic (Mach > 1) upstream to subsonic (Mach < 1) downstream."),

    # Q48
    ("Bernoulli's equation is based on conservation of energy.",
     "Bernoulli's equation is derived by integrating Euler's equation of motion along a streamline, expressing fundamental conservation of mechanical energy for inviscid fluids."),

    # Q49
    ("Fluid pressure is a normal compressive stress, not shear stress.",
     "Fluid pressure acts equally in all directions perpendicular to submerged boundaries, making it a normal compressive stress rather than a surface shear stress."),

    # Q50
    ("Compressibility describes volume change per unit change in pressure.",
     "Compressibility (β = 1/K) measures the relative volume reduction of a fluid element when subjected to a unit increase in hydrostatic pressure.")
]

count = 0
for old, new in refinements:
    if old in content:
        content = content.replace(old, new)
        count += 1

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Successfully refined {count} explanations to be subtle and conceptually focused!")
