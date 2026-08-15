/**
 * Chapter 11: Fluid Mechanics - Quiz & Reviewer Dataset
 * Contains 127 Multiple Choice Questions extracted with answers and category metadata.
 */

const QUIZ_DATA = [
  {
    id: 1,
    question: "If the energy of the incident photon is less than the work function:",
    options: [
      "An electron will be ejected",
      "More than one electron will be ejected",
      "An electron will not be ejected",
      "Less than one electron will be ejected"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Photoelectric emission occurs only when the energy of incident photon (hf) is greater than or equal to the work function (Φ) of the metal."
  },
  {
    id: 2,
    question: "For supersonic flow, the pressure of fluid must decrease as the fluid flow area of the duct:",
    options: [
      "Increases",
      "Decreases",
      "Remain the same",
      "None of these"
    ],
    answer: 0, // Index 0 -> A
    explanation: "In supersonic flow (Mach > 1), expanding the duct area (diverging section) causes the flow to accelerate further, resulting in a decrease in pressure."
  },
  {
    id: 3,
    question: "Density in terms of viscosity is:",
    options: [
      "Kinematic viscosity / dynamic viscosity",
      "Dynamic viscosity / kinematic viscosity",
      "Kinematic viscosity x dynamic viscosity",
      "None of the above"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Kinematic viscosity (ν) = Dynamic viscosity (μ) / Density (ρ), so Density (ρ) = Dynamic viscosity (μ) / Kinematic viscosity (ν)."
  },
  {
    id: 4,
    question: "Liquids and gases take the following characteristic(s) of their contents.",
    options: [
      "Volume",
      "Shape",
      "Shape and volume",
      "Neither shape nor volume"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Fluids (liquids and gases) do not have a fixed shape and conform to the shape of their container."
  },
  {
    id: 5,
    question: "Alcohol finds use in manometers as:",
    options: [
      "It provides a suitable meniscus for the inclined tube",
      "Its density being less can provide longer length for a pressure difference, thus more accuracy can be obtained",
      "A and B above are correct",
      "Cheap and easily available"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Alcohol's low density provides a longer liquid column for a small pressure difference (higher sensitivity) and forms a clear, distinct meniscus."
  },
  {
    id: 6,
    question: "Which of the following statements about a Newtonian fluid is most accurate?",
    options: [
      "Shear stress is proportional to strain",
      "Viscosity is zero",
      "Shear stress is multi – valued",
      "Shear stress is proportional to rate of strain"
    ],
    answer: 3, // Index 3 -> D
    explanation: "A Newtonian fluid follows Newton's law of viscosity, where shear stress (τ) is directly proportional to the velocity gradient or rate of shear strain (du/dy)."
  },
  {
    id: 7,
    question: "The normal stress is the same in all directions at a point in fluid:",
    options: [
      "Independent of the motion of one fluid layer relative to an adjacent layer",
      "When there is no motion of one fluid layer relative to an adjacent layer",
      "Only if the fluid is frictionless",
      "Only if fluid is frictionless and incompressible"
    ],
    answer: 1, // Index 1 -> B
    explanation: "According to Pascal's Law, in a fluid at rest (or when there is no relative motion between adjacent layers), pressure (normal stress) is equal in all directions."
  },
  {
    id: 8,
    question: "Which of the following is not a characteristic of fluid pressure?",
    options: [
      "It is the same in all directions at a point in the fluid",
      "Its acts normal to a surface",
      "It is a shear stress",
      "It is linear with depth"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Fluid pressure is a compressive normal stress, not a shear stress."
  },
  {
    id: 9,
    question: "The length of mercury column at a place at an altitude will change with respect to that at ground in:",
    options: [
      "A linear relation",
      "A parabolic relation",
      "Will remain constant",
      "First slowly and then steeply"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Atmospheric pressure decreases exponentially with altitude (barometric formula), causing mercury height to drop slowly near ground level and steeper higher up."
  },
  {
    id: 10,
    question: "All of the following dimensionless parameters are applicable to fluid flow problems except the _______.",
    options: [
      "Reynolds number",
      "Froude number",
      "Mach number",
      "Biot number"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Biot number is used in heat transfer calculations (transient conduction), whereas Reynolds, Froude, and Mach numbers are fluid dynamic dimensionless numbers."
  },
  {
    id: 11,
    question: "Mass density of liquid (ρ) is given by which of the following?",
    options: [
      "ρ = Mass / volume",
      "ρ = metric slug / m²",
      "ρ = kg-sec² / m⁴",
      "all of the above"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Mass density can be expressed as Mass/Volume, metric slug/m³, or in gravitational units kg-sec²/m⁴."
  },
  {
    id: 12,
    question: "The speed of sound in all fluid is most closely related to all of the following properties except________.",
    options: [
      "Compressibility",
      "Density",
      "Bulk modulus",
      "Thermal conductivity"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Speed of sound c = √(K/ρ) or √(1/(β·ρ)). Thermal conductivity does not directly govern acoustic wave speed in fluids."
  },
  {
    id: 13,
    question: "Under which condition, the specific weight of water is 1000 kg/m³?",
    options: [
      "At normal pressure of 760 mm",
      "At 4 °C temperature",
      "At mean sea level",
      "All of the above"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Standard pure water achieves its maximum mass density of 1000 kg/m³ at 4°C, 1 atm (760 mm Hg) at mean sea level."
  },
  {
    id: 14,
    question: "All of the following can be characteristics of fluids except_________.",
    options: [
      "kinematic viscosity",
      "surface tension",
      "bulk modulus",
      "hysteresis"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Hysteresis is a phenomenon associated with magnetic materials, solid mechanics stress-strain loops, or structural damping, not a standard fluid property."
  },
  {
    id: 15,
    question: "Which of the following can be used to measure the flow of water in a pipe of diameter 3000 mm?",
    options: [
      "Venturimeter",
      "Rotameter",
      "Nozzle",
      "Pitot tube"
    ],
    answer: 3, // Index 3 -> D
    explanation: "For very large pipelines (e.g. 3000 mm diameter), a Pitot tube is economical and practical because it measures localized point velocity across large conduits."
  },
  {
    id: 16,
    question: "The pressure at a given depth due to several immiscible liquids is:",
    options: [
      "The average of the individual pressures",
      "The sum of the individual pressures",
      "Independent of the individual pressures",
      "Unknown"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Total hydrostatic pressure at depth is the sum of pressure heads produced by each immiscible liquid layer above: P = ∑(ρ_i · g · h_i)."
  },
  {
    id: 17,
    question: "The equation of continuity of flow is applicable if:",
    options: [
      "The flow is one dimensional",
      "The flow is steady",
      "The velocity is uniform over the cross – section",
      "All of the above conditions are together"
    ],
    answer: 3, // Index 3 -> D
    explanation: "The elementary continuity equation A1·V1 = A2·V2 relies on steady, 1D flow with uniform velocity over each cross-section."
  },
  {
    id: 18,
    question: "Uniform flow takes place when:",
    options: [
      "Conditions remain unchanged with time at any point",
      "Rate of change of velocity of fluid is zero",
      "At every point the velocity vector is identical in magnitude and direction for any given instant",
      "The change in transverse direction is zero"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Uniform flow is defined when fluid parameters (velocity vector) at a given instant do not change along the path of flow: ∂V/∂s = 0."
  },
  {
    id: 19,
    question: "The continuity equation of an ideal fluid flow.",
    options: [
      "States that the net rate in – flow into any small volume must be zero",
      "Applies to irrotational flow only",
      "States that the energy remains constant along streamline",
      "States that energy is constant everywhere in the fluid"
    ],
    answer: 3, // Index 3 -> D
    explanation: "In an ideal, irrotational, steady fluid flow, Bernoulli's formulation guarantees that total energy head remains constant everywhere throughout the fluid field."
  },
  {
    id: 20,
    question: "A Pitot tube can be used to measure fluid velocity as described by the Bernoulli's equation and the relationship between:",
    options: [
      "Kinetic energy and static pressure",
      "Fluid pressure and height of the fluid",
      "Fluid pressure and impact energy",
      "Pressure and momentum"
    ],
    answer: 0, // Index 0 -> A
    explanation: "A Pitot tube converts dynamic pressure (kinetic energy per unit volume) into stagnation pressure relative to static pressure."
  },
  {
    id: 21,
    question: "In order to avoid vaporization in the pipe line, the pipe line over the ridge is laid in such a way that it is not more than:",
    options: [
      "2.4m above the hydraulic gradient",
      "6.4m above the hydraulic gradient",
      "10m above the hydraulic gradient",
      "5m above the hydraulic gradient"
    ],
    answer: 0, // Index 0 -> A
    explanation: "To prevent cavitation and liquid vaporization at elevated siphon summits, the pipe line summit should not exceed 2.4 m to 7.6 m above the HGL (typically ~2.4 m safety margin)."
  },
  {
    id: 22,
    question: "The stream function is a useful parameter in describing_____________.",
    options: [
      "The conservation of mass",
      "The conservation of momentum",
      "The conservation of energy",
      "The equation of state"
    ],
    answer: 0, // Index 0 -> A
    explanation: "The stream function (ψ) automatically satisfies the 2D incompressible continuity equation, representing the conservation of mass."
  },
  {
    id: 23,
    question: "For high speed flows, the potential energy of fluids are:",
    options: [
      "Positive",
      "Negative",
      "Negligible",
      "None of these"
    ],
    answer: 2, // Index 2 -> C
    explanation: "In high-speed flows (gas dynamics, high velocity nozzles), kinetic energy and enthalpy changes dwarf potential energy (elevation z) changes, making potential energy negligible."
  },
  {
    id: 24,
    question: "McLeod gauge used for low pressure measurement operates on the principle of _________.",
    options: [
      "Gas law",
      "Boyle's law",
      "Charles law",
      "Pascal's law"
    ],
    answer: 1, // Index 1 -> B
    explanation: "A McLeod gauge compresses a trapped volume of low-pressure gas isothermally into a smaller volume, measuring the resulting increased pressure using Boyle's Law (P1V1 = P2V2)."
  },
  {
    id: 25,
    question: "Kaplan turbine is",
    options: [
      "A high head mixed flow turbine",
      "An impulse turbine, inward flow",
      "A reaction turbine, outward flow",
      "Low head axial flow turbine"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Kaplan turbine is an axial-flow reaction hydraulic turbine with adjustable blades designed for low heads (under 30 m) and large volumetric discharge."
  },
  {
    id: 26,
    question: "The most common method for calculating frictional energy loss for laminar flowing fluids in noncircular pipe is:",
    options: [
      "The Darcy equation",
      "The Hagen – Poiseuille equation",
      "The Hazen - Williams equation",
      "The Swamee – Jain equation"
    ],
    answer: 0, // Index 0 -> A
    explanation: "The Darcy-Weisbach equation h_f = f(L/D_h)(V²/2g) using hydraulic diameter D_h is the standard general method for non-circular pipes."
  },
  {
    id: 27,
    question: "The parameter f in the expression for head-loss is",
    options: [
      "The fraction of flow that is totally turbulent",
      "The Darcy friction factor",
      "The height of roughness scale in turbulent flow",
      "The static coefficient of friction"
    ],
    answer: 1, // Index 1 -> B
    explanation: "In the Darcy-Weisbach equation for head loss, 'f' represents the dimensionless Darcy friction factor."
  },
  {
    id: 28,
    question: "Friction factor for both laminar and turbulent flows can be found plotted in a",
    options: [
      "Steam table",
      "Psychrometric chart",
      "Moody diagram",
      "Mollier diagram"
    ],
    answer: 2, // Index 2 -> C
    explanation: "The Moody diagram plots the Darcy friction factor f against Reynolds number (Re) for relative roughness values across laminar and turbulent regimes."
  },
  {
    id: 29,
    question: "Which of the following is relative velocity?",
    options: [
      "The difference between two velocities",
      "Average velocity",
      "Sum of two velocities",
      "Vector difference of two velocities"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Relative velocity V_rel is the vector difference between the velocity of a body/fluid and a reference frame: V_rel = V_1 - V_2."
  },
  {
    id: 30,
    question: "Which of the following is the highest head?",
    options: [
      "33 inch Hg",
      "31.0 ft. water",
      "1.013 kg/cm²",
      "75.0 cm of Hg"
    ],
    answer: 0, // Index 0 -> A
    explanation: "33 in Hg = 111.7 kPa, 31 ft H2O = 92.6 kPa, 1.013 kg/cm² = 99.3 kPa, 75 cm Hg = 100.0 kPa. Thus, 33 in Hg represents the highest pressure head."
  },
  {
    id: 31,
    question: "For stable equilibrium of floating body its metacenter should lie:",
    options: [
      "Below the center of gravity",
      "Below the center of buoyancy",
      "Above the center of buoyancy",
      "Above the center of gravity"
    ],
    answer: 3, // Index 3 -> D
    explanation: "A floating body is in stable equilibrium if its metacenter M lies above its center of gravity G (metacentric height GM > 0)."
  },
  {
    id: 32,
    question: "Center of pressure on an inclined plane lies ___.",
    options: [
      "At the centroid",
      "Above the centroid",
      "Below the centroid",
      "At metacenter"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Due to hydrostatic pressure increasing linearly with depth, the center of pressure always lies below the centroid of a submerged plane surface."
  },
  {
    id: 33,
    question: "The line of action of the buoyant forces always acts through the centroid of the ______.",
    options: [
      "Submerged body",
      "Volume of the floating body",
      "Volume of the fluid vertically above the body",
      "Displaced volume of the fluid"
    ],
    answer: 3, // Index 3 -> D
    explanation: "The center of buoyancy is located at the centroid of the volume of fluid displaced by the body (Archimedes' Principle)."
  },
  {
    id: 34,
    question: "The hydraulic grade line of a pipe denotes which of the following?",
    options: [
      "Total energy",
      "Pressure energy",
      "Potential energy",
      "The sum of pressure energy and potential energy"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Hydraulic Grade Line (HGL) represents the sum of piezometric head: Pressure head (P/γ) + Elevation head (z)."
  },
  {
    id: 35,
    question: "The energy grade line of a pipeline denotes which of the following?",
    options: [
      "Total energy",
      "Pressure energy",
      "Potential energy",
      "The sum of pressure energy and potential energy"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Energy Grade Line (EGL) represents the total energy head: P/γ + z + V²/(2g)."
  },
  {
    id: 36,
    question: "The presence of friction in the energy grade line will always cause the line to slope",
    options: [
      "Down in the direction of the flow",
      "Upward in the direction of the flow",
      "Level (no slope)",
      "There is no effect of friction on the energy grade line"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Frictional losses continuously dissipate total energy along the path of real fluid flow, causing the EGL to slope downward in the direction of flow."
  },
  {
    id: 37,
    question: "The Pitot tube is a device used for measurement of",
    options: [
      "Pressure",
      "Flow",
      "Velocity",
      "Discharge"
    ],
    answer: 2, // Index 2 -> C
    explanation: "A Pitot tube measures fluid flow velocity at a specific point in a fluid stream."
  },
  {
    id: 38,
    question: "Hydrometer is used to find out",
    options: [
      "Specific gravity liquids",
      "Specific gravity solids",
      "Specific gravity gases",
      "Relative humidity"
    ],
    answer: 0, // Index 0 -> A
    explanation: "A hydrometer is a floating instrument calibrated to measure the specific gravity (relative density) of liquids."
  },
  {
    id: 39,
    question: "The fluid forces taken into consideration in the Navier Stokes equation are:",
    options: [
      "Gravity, pressure and viscous",
      "Gravity, pressure and turbulent",
      "Pressure, viscous and turbulent",
      "Gravity, viscous and turbulent"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Navier-Stokes equations model real fluid motion by balancing inertia forces against body forces (gravity), pressure forces, and viscous shearing forces."
  },
  {
    id: 40,
    question: "Permissible velocity of water flowing through concrete tunnel, is generally",
    options: [
      "4-5 m/s",
      "10-12 m/s",
      "13-16 m/s",
      "20 m/s"
    ],
    answer: 0, // Index 0 -> A
    explanation: "To prevent scouring and erosion of concrete lining in water tunnels, maximum recommended design velocity is kept around 4 to 5 m/s."
  },
  {
    id: 41,
    question: "Orifice refers to an opening",
    options: [
      "With closed perimeter and of regular form through which water flows",
      "With prolonged sides having length of 2 to 3 diameters of opening in thick wall",
      "With partially full flow",
      "In hydraulic structure with regulation provision"
    ],
    answer: 3, // Index 3 -> D
    explanation: "An orifice is an opening in a hydraulic structure, vessel, or pipe wall through which fluid flows, often fitted with control valves/gates for flow regulation."
  },
  {
    id: 42,
    question: "The value of coefficient of discharge in comparison to coefficient of velocity is found to be_______.",
    options: [
      "More",
      "Less",
      "Same",
      "More/less depending on flow"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Coefficient of discharge Cd = Cc · Cv. Since coefficient of contraction Cc < 1 (approx 0.62), Cd is always less than Cv."
  },
  {
    id: 43,
    question: "Weir refers to an opening",
    options: [
      "Having closed perimeter and of regular form through which water flows",
      "Having prolonged sides with length of 2 to 3 diameters of opening in thick wall",
      "Having partially full flow",
      "In hydraulic structures with regulation provision"
    ],
    answer: 2, // Index 2 -> C
    explanation: "A weir is a notch or structure constructed across an open channel over which liquid flows with a free liquid surface (partially full open surface flow)."
  },
  {
    id: 44,
    question: "Which of the following parameters determine the friction factor of turbulent flow in a rough pipe?",
    options: [
      "Froude number and relative roughness",
      "Froude number and Mach number",
      "Reynolds number and relative roughness",
      "Mach number and relative roughness"
    ],
    answer: 2, // Index 2 -> C
    explanation: "In rough turbulent flow, the friction factor f depends on both the Reynolds number (Re) and the relative roughness (ε/D)."
  },
  {
    id: 45,
    question: "Power transmitted through a pipe is maximum when the loss of head due to friction is:",
    options: [
      "One-half of the total head supplied",
      "One-third of the total head supplied",
      "One-fourth of the total head supplied",
      "Equal to the total head supplied"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Maximum hydraulic power transmission occurs when friction head loss h_f = H/3, where H is total supply head at the inlet."
  },
  {
    id: 46,
    question: "In a nozzle if back pressure is same as inlet pressure; then_______________.",
    options: [
      "No flow takes place",
      "Maximum flow takes place",
      "Flow becomes subsonic in diverging section",
      "Flow becomes supersonic in converging as well as supersonic section"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Fluid flow requires a pressure gradient. If back pressure equals inlet pressure (P_back = P_in), ∆P = 0 and no flow occurs."
  },
  {
    id: 47,
    question: "The flow on two sides of a normal shock wave is called___________.",
    options: [
      "Sonic",
      "Sub-sonic",
      "Supersonic",
      "Supersonic on one side and sub-sonic on the other side"
    ],
    answer: 3, // Index 3 -> D
    explanation: "A normal shock wave transitions flow abruptly from supersonic (Mach > 1) upstream to subsonic (Mach < 1) downstream."
  },
  {
    id: 48,
    question: "Which of the following is the basic of Bernoulli's law for fluid flow?",
    options: [
      "Continuity equation",
      "Principle of conservation of energy",
      "Fourier's law",
      "Principle of conservation of mass"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Bernoulli's equation is a mathematical expression of the principle of conservation of energy applied to fluid streamlines."
  },
  {
    id: 49,
    question: "Which of the following is NOT a characteristic of fluid pressure?",
    options: [
      "It is a shear stress",
      "It is the same in all directions at a point in the fluid",
      "It acts normal to a surface",
      "It is linear with depth"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Fluid pressure is a normal compressive force per unit area, not a shear stress."
  },
  {
    id: 50,
    question: "Refers to the compressibility of a fluid, the fractional change in fluid volume per unit change in fluid pressure.",
    options: [
      "Viscosity",
      "Bulk modulus",
      "Density",
      "Compressibility / Pressure"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Compressibility (β = -1/V · dV/dP) describes fractional volume change per unit change in fluid pressure."
  },
  {
    id: 51,
    question: "A Pitot tube can be used to measure fluid velocity as described by the Bernoulli's equation and the relationship between:",
    options: [
      "Kinetic energy and static pressure",
      "Fluid pressure and static pressure",
      "Fluid pressure and impact energy",
      "Pressure and momentum"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Pitot tube relates dynamic pressure (kinetic head) to static pressure difference to calculate flow speed V = √(2(P_stag - P_stat)/ρ)."
  },
  {
    id: 52,
    question: "The ratio of the area to the wetted perimeter is known as __________.",
    options: [
      "Flow factor",
      "Hydraulic radius",
      "Kutter's C",
      "Value of k in Darcy - Weisbach formula"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Hydraulic radius R_h = Cross-sectional area A / Wetted perimeter P_w."
  },
  {
    id: 53,
    question: "What is the coefficient of contraction?",
    options: [
      "The ratio of the area of vena contracta to the area of the orifice",
      "The ratio of actual discharge to the theoretical discharge",
      "The ratio of the actual velocity to the theoretical velocity",
      "The ratio of the effective head to the actual head"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Coefficient of contraction Cc = Area of jet at vena contracta (A_c) / Area of orifice (A_o)."
  },
  {
    id: 54,
    question: "Where is vena contracta most likely located?",
    options: [
      "At the orifice",
      "At a distance approximately ½ the diameter of the orifice",
      "At a distance approximately equal to the diameter of the orifice",
      "At a distance approximately twice the diameter of the orifice"
    ],
    answer: 1, // Index 1 -> B
    explanation: "The vena contracta (minimum jet cross-section) forms just outside a sharp-edged orifice at a distance roughly d/2 (half the orifice diameter)."
  },
  {
    id: 55,
    question: "A substance that is able to flow and yields to any force tending to change its shape without changing its volume such as water and air.",
    options: [
      "Fluid",
      "Flux",
      "Gas oil",
      "Water gas"
    ],
    answer: 0, // Index 0 -> A
    explanation: "A fluid is defined as any substance (liquid or gas) that continuously deforms under applied shear stress."
  },
  {
    id: 56,
    question: "The velocity of a fluid particle at the center of the pipe section is______.",
    options: [
      "Maximum",
      "Minimum",
      "Average",
      "Logarithmic average"
    ],
    answer: 0, // Index 0 -> A (Note: Answer key in slide listed B due to typo, but standard fluid dynamics gives Maximum velocity at centerline)
    explanation: "In pipe flow (both laminar and turbulent), friction at the wall creates a velocity profile with maximum velocity along the centerline."
  },
  {
    id: 57,
    question: "For supersonic flow, the pressure of fluid must increase as the fluid flow area of the duct:",
    options: [
      "Increases",
      "Decreases",
      "Constant",
      "None of these"
    ],
    answer: 1, // Index 1 -> B
    explanation: "In supersonic flow, decreasing the duct area (converging duct) slows the flow down, converting kinetic energy to static pressure (pressure increases)."
  },
  {
    id: 58,
    question: "Which is incorrect statement regarding apparent shear forces.",
    options: [
      "It can never be found in frictionless fluid regardless of its motion",
      "It can never be found when the fluid is at rest",
      "It depends upon cohesive forces",
      "It may occur owing to cohesion when the fluid is at rest"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Fluid at rest cannot sustain shear stress. Cohesive forces alone do not generate static shear stress in stationary fluids."
  },
  {
    id: 59,
    question: "The time required for half a quantity of radioactive particles to decay (disintegrate) is called its_____________.",
    options: [
      "Average life",
      "Median life",
      "Time constant",
      "Half time / Half-life"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Half-life (or half time) is the duration required for half of a radioactive isotope sample to disintegrate."
  },
  {
    id: 60,
    question: "SI unit of viscosity is:",
    options: [
      "10 times poise",
      "9.81 times poise",
      "1/9.81 time poise",
      "1/10 times poise"
    ],
    answer: 0, // Index 0 -> A
    explanation: "1 Pascal-second (Pa·s, the SI unit of dynamic viscosity) equals 10 Poise (CGS unit)."
  },
  {
    id: 61,
    question: "For computation convenience, fluids are usually classed as:",
    options: [
      "Rotational or irrotational",
      "Real or ideal",
      "Laminar or turbulent",
      "Newtonian or non-newtonian"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Fluids are broadly categorized as ideal (frictionless, incompressible) or real (viscous, compressible) to simplify mathematical modeling."
  },
  {
    id: 62,
    question: "Which of the following is not a dimensionless parameter?",
    options: [
      "Kinematic viscosity",
      "Weber number",
      "Darcy Weisbach friction factor",
      "Froude number"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Kinematic viscosity has dimensions [L²/T] (m²/s in SI units). Weber, Froude, and friction factor are all dimensionless."
  },
  {
    id: 63,
    question: "Which of the following is not a characteristic of real fluids?",
    options: [
      "Finite viscosity",
      "Non-uniform velocity distributions",
      "Compressibility",
      "Experience of eddy current and turbulence"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Ideal fluids lack viscosity and turbulence, whereas real fluids experience viscosity, non-uniform velocity, compressibility, and turbulence."
  },
  {
    id: 64,
    question: "Which of the following is not the mass density of water?",
    options: [
      "62.5 lbm/ft³",
      "100 kg/m³",
      "1 g/cm³",
      "1 kg/L"
    ],
    answer: 1, // Index 1 -> B
    explanation: "The mass density of water is 1000 kg/m³, NOT 100 kg/m³."
  },
  {
    id: 65,
    question: "The upper critical Reynolds number for pipe flow is:",
    options: [
      "Of no practical importance to designers",
      "Always used to design pipes for strength",
      "The number at which turbulent flow changes over to laminar flow",
      "The number at which laminar flow changes into turbulent flow"
    ],
    answer: 0, // Index 0 -> A
    explanation: "The upper critical Reynolds number depends on extreme disturbance-free conditions (can reach 10,000 to 40,000) and is unstable, making lower critical Re (2000-2300) the practical limit."
  },
  {
    id: 66,
    question: "Which of the following statements about gauge pressure is most correct? Gauge pressure are measured relative to _________.",
    options: [
      "Atmospheric pressure",
      "A vacuum",
      "Each other",
      "The surface"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Gauge pressure measures pressure relative to local atmospheric pressure (P_gauge = P_absolute - P_atm)."
  },
  {
    id: 67,
    question: "The volumetric change of the fluid caused by a resistance is called ________.",
    options: [
      "Volumetric strain",
      "Volumetric index",
      "Compressibility",
      "Adhesion"
    ],
    answer: 3, // Index 3 -> D (Answer key in board question text: D)
    explanation: "Board question key specifies option D. Standard definition relates volume change per unit pressure to compressibility / volumetric strain."
  },
  {
    id: 68,
    question: "Compressibility of a fluid relates the fractional change in fluid volume per unit change in fluid pressure.",
    options: [
      "Temperature",
      "Density",
      "Pressure",
      "Viscosity"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Compressibility β = -(1/V)·(∂V/∂P) relates fractional volume change to pressure change."
  },
  {
    id: 69,
    question: "Property of a fluid whereby its own molecules are attracted is known as ________.",
    options: [
      "Adhesion",
      "Cohesion",
      "Surface tension",
      "Viscosity"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Cohesion is the intermolecular attraction between like molecules of the same fluid."
  },
  {
    id: 70,
    question: "The term subsonic flow refers to a flowing gas with a speed:",
    options: [
      "Less than the local speed of sound",
      "Equal to the speed of sound",
      "Greater than the speed of sound",
      "Much greater than the speed of sound"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Subsonic flow occurs when fluid speed is less than local sound speed (Mach number M < 1)."
  },
  {
    id: 71,
    question: "The pressure at a point in a fluid will not be same in all the directions if the fluid is:",
    options: [
      "Viscous",
      "Viscous and static",
      "Inviscous and in motion",
      "Viscous and is in motion"
    ],
    answer: 3, // Index 3 -> D
    explanation: "When a viscous fluid is in motion, shear stresses generate non-isotropic normal stress components."
  },
  {
    id: 72,
    question: "The statement that 'the hydrostatic pressure a fluid exerts on an immersed object or on container walls is a function only of fluid depth' is",
    options: [
      "The perfect gas law",
      "D'Alembert's paradox",
      "The hydrostatic paradox",
      "Boyle's law"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Hydrostatic Paradox states that pressure at a given depth in a fluid depends only on vertical depth h and fluid density, regardless of container shape or total liquid weight."
  },
  {
    id: 73,
    question: "Bernoulli's equation is a/an ___________.",
    options: [
      "Momentum equation",
      "Conservation of energy equation",
      "Conservation of mass equation",
      "Equation of state"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Bernoulli's equation expresses conservation of total mechanical energy along a fluid streamline."
  },
  {
    id: 74,
    question: "An ideal fluid is one that:",
    options: [
      "Is very viscous",
      "Obeys Newton's law of viscosity",
      "Is assumed in problems in conduit flow",
      "Is frictionless and incompressible"
    ],
    answer: 3, // Index 3 -> D
    explanation: "An ideal fluid is defined theoretically as inviscid (zero friction/viscosity) and incompressible (constant density)."
  },
  {
    id: 75,
    question: "The relationship between pressure and altitude in the atmosphere is given by the:",
    options: [
      "Perfect gas law",
      "Conservation of mass",
      "Barometric height relationship",
      "First law of thermodynamics"
    ],
    answer: 2, // Index 2 -> C
    explanation: "The barometric height formula P = P0 · e^(-mgh/kT) governs atmospheric pressure variation with altitude."
  },
  {
    id: 76,
    question: "The fact the buoyant force on a floating object equal to the weight of the water displaced is:",
    options: [
      "Bernoulli's law",
      "Archimedes' principle",
      "The law of diminishing returns",
      "The conservation of mass"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Archimedes' Principle states that buoyant force equals the weight of the fluid displaced by a submerged or floating body."
  },
  {
    id: 77,
    question: "Which of the following terms does not appear in the steady flow energy equation (the extended Bernoulli's equation)?",
    options: [
      "Kinetic energy",
      "Potential energy",
      "Friction losses",
      "Hysteresis losses"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Hysteresis losses do not feature in the fluid steady flow energy balance equation."
  },
  {
    id: 78,
    question: "Neglecting the forces due to inertia, gravity and frictional resistance, the design of a channel can be made by comparing",
    options: [
      "Weber number",
      "Reynolds number",
      "Froude's number",
      "Prandtl number"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Froude number (Fr = V/√(gd)) governs free surface open channel flows."
  },
  {
    id: 79,
    question: "The difference between stagnation pressure and total pressure is:",
    options: [
      "Due to height difference",
      "Due to fluid kinetic energy",
      "None of the terms are interchangeable",
      "Important only in supersonic flow"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Stagnation pressure and total pressure are identical concepts in frictionless flow, but when referring to different elevation data or definitions, the terms are not strictly interchangeable."
  },
  {
    id: 80,
    question: "Fully turbulent flow in a pipe is characterized by all of the following except:",
    options: [
      "A parabolic velocity profile",
      "A momentum exchange due to fluid masses rather than molecules",
      "A maximum velocity at the fluid center line",
      "A 1/7 velocity profile"
    ],
    answer: 0, // Index 0 -> A
    explanation: "A parabolic velocity profile occurs in laminar pipe flow (Poiseuille flow). Turbulent flow features a flatter 1/7 power law profile."
  },
  {
    id: 81,
    question: "The laminar friction factor of fluid flowing through a pipe is a function of all of the following except:",
    options: [
      "Fluid velocity",
      "Pipe diameter",
      "Pipe roughness",
      "Reynolds number"
    ],
    answer: 2, // Index 2 -> C
    explanation: "In laminar flow, friction factor f = 64/Re depends solely on Reynolds number and is independent of pipe roughness."
  },
  {
    id: 82,
    question: "The continuity equation is applicable to:",
    options: [
      "Viscous unviscous fluid",
      "Compressibility of fluids",
      "Conservation of mass",
      "Steady unsteady flow"
    ],
    answer: 2, // Index 2 -> C
    explanation: "The continuity equation is the mathematical statement of conservation of mass in fluid mechanics."
  },
  {
    id: 83,
    question: "The rise or fall of head 'h' in a capillary tube of diameter 'd' and liquid surface tension 's' and specific weight 'w' is given by:",
    options: [
      "4s / wd",
      "4ds / w",
      "4wd / s",
      "4ws / d"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Capillary rise formula: h = 4σ cosθ / (γ d) = 4s / (w d) where s is surface tension and w is specific weight."
  },
  {
    id: 84,
    question: "The study of the practical laws of fluid flow and the resistance of open pipes and channels.",
    options: [
      "Fluid mechanics",
      "Hydraulics",
      "Aerodynamics",
      "Thermodynamics"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Hydraulics is the applied engineering discipline focusing on practical fluid flow, conduits, open channels, and hydraulic machinery."
  },
  {
    id: 85,
    question: "Which of the following turbine is different from the others?",
    options: [
      "Fourneyron turbine",
      "Francis turbine",
      "Kaplan turbine",
      "Pelton wheel"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Pelton wheel is an impulse turbine, whereas Fourneyron, Francis, and Kaplan are reaction turbines."
  },
  {
    id: 86,
    question: "Running away speed of a Pelton wheel gives:",
    options: [
      "Actual operating speed",
      "No load speed",
      "Full load speed",
      "No load speed when governor mechanism fails"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Runaway speed is the maximum speed attained by a turbine under full head at zero load when the governing mechanism fails."
  },
  {
    id: 87,
    question: "Which of the following turbine is different from the others?",
    options: [
      "Pelton wheel",
      "Banki turbine",
      "Jonval turbine",
      "Kaplan turbine"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Kaplan turbine is a reaction axial turbine, while Pelton and Banki are impulse types."
  },
  {
    id: 88,
    question: "The characteristic length of the Reynolds number used to calculate the friction in noncircular full running pipes is based on the __________.",
    options: [
      "Run length",
      "Pipe length",
      "Hydraulic diameter (the equivalent diameter)",
      "Wetted circumference"
    ],
    answer: 2, // Index 2 -> C
    explanation: "For non-circular conduits running full, hydraulic diameter D_h = 4A/P_w serves as the characteristic length scale."
  },
  {
    id: 89,
    question: "The hydraulic radius of noncircular pipe is:",
    options: [
      "The square root of the flow area",
      "The ratio of the area to the wetted perimeter",
      "The radius of a pipe of equivalent area",
      "None of the above"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Hydraulic radius R_h = Cross-sectional flow area A / Wetted perimeter P_w."
  },
  {
    id: 90,
    question: "The Darcy equation can be used for all liquids and flows except:",
    options: [
      "Water",
      "Alcohol",
      "Gasoline",
      "Air flowing supersonically"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Darcy-Weisbach equation assumes incompressible liquid/gas flow; supersonic gas flows involve strong compressibility and shock waves."
  },
  {
    id: 91,
    question: "The Hazen – Williams formula for head loss due to friction is based upon:",
    options: [
      "Rigorous mathematical derivation",
      "Empirical data",
      "Semi-empirical analysis",
      "Serendipity"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Hazen-Williams formula is an empirical formula developed from field measurement data for water flow in pipes."
  },
  {
    id: 92,
    question: "The extended Bernoulli equation includes all of the following terms except:",
    options: [
      "Potential energy",
      "Kinetic energy",
      "Nuclear energy",
      "Friction losses"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Extended Bernoulli equation balances potential head, kinetic head, pressure head, pump/turbine head, and friction loss head—not nuclear energy."
  },
  {
    id: 93,
    question: "An equipotential line is one that:",
    options: [
      "Has no velocity component tangent to it",
      "Has uniformly varying dynamic pressure",
      "Has no velocity component normal to it",
      "Exists in case of rotational flow"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Flow velocity vectors are orthogonal to equipotential lines (ϕ = const), meaning there is zero velocity component tangent to an equipotential line."
  },
  {
    id: 94,
    question: "What is the use of a Hydraulic jump?",
    options: [
      "Increase the flow rate",
      "Reduce the flow rate",
      "Reduce the velocity of flow",
      "Reduce the energy of flow"
    ],
    answer: 3, // Index 3 -> D
    explanation: "A hydraulic jump dissipates excess kinetic energy (reduces flow energy) downstream of spillways and sluice gates to prevent channel erosion."
  },
  {
    id: 95,
    question: "What do you call the lowest portion of storage basin from where the water is not drawn?",
    options: [
      "Bottom storage",
      "Sub soil storage",
      "Spring reserve",
      "Dead storage"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Dead storage is the volume in a reservoir below the lowest outlet/intake invert level, reserved for sediment accumulation."
  },
  {
    id: 96,
    question: "The presence of friction in the hydraulic grade line will always cause the line to slope:",
    options: [
      "Down in the direction of the flow",
      "Upward in the direction of the flow",
      "Level (no slope)",
      "There is no effect of friction on the energy grade line"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Friction consumes total head continuously, causing HGL to slope downward along the flow direction."
  },
  {
    id: 97,
    question: "The presence of a minor loss in the energy grade line will cause the line to slope:",
    options: [
      "Down in the direction of the flow",
      "Upward in the direction of the flow",
      "Vertically downward",
      "There is no effect of friction on the energy grade line"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Minor losses (valves, bends, expansions) cause sudden drops or downward slopes in the energy grade line."
  },
  {
    id: 98,
    question: "What do you call the pressure which the fluid exerts on an immersed object or container walls?",
    options: [
      "Normal pressure",
      "Standard liquid pressure",
      "Hydrostatic pressure",
      "Gage pressure"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Hydrostatic pressure is the normal force per unit area exerted by a fluid at rest on any surface in contact with it."
  },
  {
    id: 99,
    question: "Viscosity for a fluid is defined as the constant of proportionality between shear stress and what other variable?",
    options: [
      "The spatial derivative of velocity",
      "The time derivative of pressure",
      "The time derivative of density",
      "The spatial derivative of density"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Newton's law of viscosity: τ = μ (du/dy), where du/dy is the spatial derivative of velocity (velocity gradient)."
  },
  {
    id: 100,
    question: "What is the classification of the fluid flow if the fluid travels parallel to the adjacent layers and the paths of the individual particles do not cross each other?",
    options: [
      "Steady flow",
      "Laminar flow",
      "Uniform flow",
      "Turbulent flow"
    ],
    answer: 1, // Index 1 -> B
    explanation: "In laminar flow, fluid particles move smoothly in parallel layers (laminae) without lateral mixing or crossing paths."
  },
  {
    id: 101,
    question: "Which of the following refers to the measure of a fluid's sensitivity to changes in viscosity with changes in temperature?",
    options: [
      "Viscosity index",
      "Coefficient of viscosity",
      "Viscosity ratio",
      "Viscosity factor"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Viscosity Index (VI) measures how much a fluid's viscosity changes with temperature variations."
  },
  {
    id: 102,
    question: "If the Mach number is greater than 1 but lesser than 5, what is the standard classification of the travel?",
    options: [
      "Transonic travel",
      "Subsonic travel",
      "Hypersonic travel",
      "Supersonic travel"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Supersonic speed regime corresponds to 1.0 < Mach < 5.0 (speeds above Mach 5 are hypersonic)."
  },
  {
    id: 103,
    question: "What is measured by a Pitot tube?",
    options: [
      "Volumetric discharge",
      "Mass flow",
      "Pressure",
      "Velocity"
    ],
    answer: 3, // Index 3 -> D
    explanation: "A Pitot tube directly determines localized fluid flow velocity."
  },
  {
    id: 104,
    question: "What is the difference between the energy grade line and the hydraulic grade line?",
    options: [
      "Potential energy",
      "Pressure energy",
      "Kinetic energy",
      "Friction losses"
    ],
    answer: 2, // Index 2 -> C
    explanation: "EGL - HGL = Velocity head V²/(2g), which represents the kinetic energy component per unit weight."
  },
  {
    id: 105,
    question: "Kinetic energy is not neglected in calculations of:",
    options: [
      "High speed flow",
      "Low speed flow",
      "Steady flow",
      "Equilibrium flow"
    ],
    answer: 0, // Index 0 -> A
    explanation: "In high-speed fluid flows, kinetic head V²/(2g) is significant and cannot be neglected."
  },
  {
    id: 106,
    question: "Discharge losses through orifice are due to:",
    options: [
      "Friction losses",
      "Minor losses",
      "Both friction and minor losses",
      "Pressure losses"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Orifice discharge coefficient accounts for fluid friction against edges as well as contraction and turbulent minor loss eddies."
  },
  {
    id: 107,
    question: "Which of the following is considered as an important parameter in the study of compressible flow?",
    options: [
      "Speed of fluid",
      "Speed of sound",
      "Speed of light",
      "Speed of fluid flow"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Speed of sound is the key velocity scale in compressible flow, giving rise to Mach number M = V/c."
  },
  {
    id: 108,
    question: "Is the velocity at which an infinitesimal small pressure wave travels through a medium.",
    options: [
      "Subsonic velocity",
      "Hypersonic velocity",
      "Sonic velocity",
      "Monatomic velocity"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Sonic velocity (speed of sound) is the speed at which weak acoustic pressure disturbances propagate through a compressible medium."
  },
  {
    id: 109,
    question: "It is the ratio of the actual velocity of the fluid to the velocity of sound.",
    options: [
      "Mach number",
      "Froude number",
      "Sonic number",
      "Euler number"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Mach number M = V / c."
  },
  {
    id: 110,
    question: "The flow is called sonic when Mach number is:",
    options: [
      "Equal to 1",
      "Less than 1",
      "More than 1",
      "None of these"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Sonic flow occurs when Mach number M = 1."
  },
  {
    id: 111,
    question: "The following flow is sub-sonic when Mach no. is:",
    options: [
      "Greater than 1",
      "Less than 1",
      "More than 1",
      "None of these"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Sub-sonic flow occurs when Mach number M < 1."
  },
  {
    id: 112,
    question: "The flow is supersonic when Mach no. is:",
    options: [
      "Greater than zero",
      "Less than 1",
      "Greater than 1",
      "None of these"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Supersonic flow occurs when Mach number M > 1."
  },
  {
    id: 113,
    question: "The flow is transonic when",
    options: [
      "M = 0",
      "M < 1",
      "M > 1",
      "M = 1"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Transonic flow regime centers around Mach M = 1 (typically 0.8 < M < 1.2)."
  },
  {
    id: 114,
    question: "The pressure decreases as the temperature and velocity increases while the fluid velocity and Mach number:",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "None of these"
    ],
    answer: 0, // Index 0 -> A
    explanation: "In accelerating nozzle flow, velocity and Mach number increase together while pressure drops."
  },
  {
    id: 115,
    question: "The Mach number is unity or one at the location of smallest flow area, called the:",
    options: [
      "Decreasing area",
      "Throat",
      "Increasing area",
      "None of these"
    ],
    answer: 1, // Index 1 -> B
    explanation: "In a convergent-divergent nozzle, sonic condition (M = 1) is achieved at the minimum area section, known as the throat."
  },
  {
    id: 116,
    question: "What happens to the velocity of fluid after passing the throat although the flow area increases?",
    options: [
      "Increases rapidly",
      "Decreases rapidly",
      "Remains constant",
      "None of these"
    ],
    answer: 0, // Index 0 -> A
    explanation: "In a supersonic CD nozzle, once sonic flow is choked at the throat, expanding flow area in the divergent section causes velocity to increase rapidly."
  },
  {
    id: 117,
    question: "Which of the following is an example of Newtonian fluid?",
    options: [
      "Motor oils",
      "Gas",
      "Paints",
      "Clay slurries"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Gases (like air, water vapor, nitrogen) behave as ideal Newtonian fluids with constant dynamic viscosity independent of shear strain rate."
  },
  {
    id: 118,
    question: "What is the critical pressure of water?",
    options: [
      "150 kg/cm³",
      "Less than 200 kg/cm²",
      "More than 200 kg/cm²",
      "100 kg/cm²"
    ],
    answer: 2, // Index 2 -> C
    explanation: "The thermodynamic critical pressure of water is 22.06 MPa (approx. 225 kg/cm²), which is more than 200 kg/cm²."
  },
  {
    id: 119,
    question: "Past ME Board Question: The volumetric change of the fluid caused by a resistance is called:",
    options: [
      "Volumetric change",
      "Volumetric index",
      "Compressibility",
      "Adhesion"
    ],
    answer: 3, // Index 3 -> D (According to Board exam key D)
    explanation: "Past Board Question reference key retains option D."
  },
  {
    id: 120,
    question: "The energy of a fluid flowing at any section in a pipeline is a function of:",
    options: [
      "Velocity of flow only",
      "Pressure only",
      "Height above a chosen datum, density, internal energy, pressure and velocity of flow",
      "Pressure, height above a chosen datum, velocity of flow, density of fluid"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Total fluid energy head accounts for potential height z, internal thermodynamic energy u, static pressure head P/ρ, and kinetic velocity V."
  },
  {
    id: 121,
    question: "If the fluid travels parallel to the adjacent layers and the paths of individual particles do not cross, the fluid is said to be:",
    options: [
      "Turbulent",
      "Critical",
      "Dynamic",
      "Laminar"
    ],
    answer: 3, // Index 3 -> D
    explanation: "Laminar flow is characterized by smooth, parallel streamline motion without fluid packet cross-mixing."
  },
  {
    id: 122,
    question: "Center of pressure on an inclined plane lies:",
    options: [
      "At the centroid",
      "Above the centroid",
      "Below the centroid",
      "At the metacenter"
    ],
    answer: 2, // Index 2 -> C
    explanation: "The hydrostatic center of pressure is always located below the centroid of an inclined or vertical submerged plane."
  },
  {
    id: 123,
    question: "At any instant, if the number of particles passing every cross-section of the stream is the same, the flow is said to be:",
    options: [
      "Steady flow",
      "Uniform flow",
      "Continuous flow",
      "Laminar flow"
    ],
    answer: 0, // Index 0 -> A
    explanation: "Steady flow implies that mass flow rate and fluid particle counts across sections remain constant with respect to time."
  },
  {
    id: 124,
    question: "The ratio of cross-sectional area of flow to the wetted perimeter is:",
    options: [
      "Hydraulic lead",
      "Hydraulic section",
      "Hydraulic mean depth",
      "Hydraulic gradient"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Hydraulic mean depth (or hydraulic radius) is defined as Area A divided by Wetted Perimeter P_w."
  },
  {
    id: 125,
    question: "If A is the cross-sectional area of the flow and Pw is the wetted perimeter of a pipe, then what is the hydraulic depth, Hd?",
    options: [
      "Pw – A",
      "Pw / A",
      "A / Pw",
      "Pw x A"
    ],
    answer: 2, // Index 2 -> C
    explanation: "Hydraulic mean depth Hd = A / Pw."
  },
  {
    id: 126,
    question: "If Q is the volume in gallon; D is height or elevation in ft. and m is weight in lbs. per gallon, what is the desired energy to lift the water from lower to higher elevation?",
    options: [
      "E = mD/Q",
      "E = mDQ",
      "E = mQ/D",
      "E = QD/m"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Total Weight W = m · Q (lbs/gal × gal = lbs). Work or potential energy E = Weight × Height = (m·Q) · D = mDQ ft-lbs."
  },
  {
    id: 127,
    question: "The flow of the convergent section of a nozzle is always subsonic. If the flow is subsonic then the Mach number is:",
    options: [
      "Greater than unity",
      "Less than unity",
      "Near unity",
      "Unity"
    ],
    answer: 1, // Index 1 -> B
    explanation: "Subsonic flow means Mach number M < 1 (less than unity)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_DATA;
}
