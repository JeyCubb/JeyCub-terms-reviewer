/**
 * JeyCub Terms Reviewer - Formulas Mode Database
 * Comprehensive engineering formula repository with interactive recall challenges.
 * Prioritized for Basic Electronics (ECE 005 - BJT DC Biasing Configurations & Formulas)
 * and extended across Mechanics of Deformable Bodies and Fluid Mechanics.
 */

const FORMULA_DATA = {
  basic_electronics: [
    /* ==========================================================================
       1. FIXED-BIAS CONFIGURATION
       ========================================================================== */
    {
      id: "bjt_fb_ib",
      subject: "basic_electronics",
      category: "Fixed-Bias",
      configName: "Fixed-Bias Configuration",
      name: "Base Current (IB)",
      targetVariable: "I_B",
      targetPrompt: "Base Current (I_B)",
      canonicalFormula: "(V_CC - V_BE) / R_B",
      displayFormula: "I_B = \\frac{V_{CC} - V_{BE}}{R_B}",
      acceptableVariants: [
        "(V_CC - V_BE) / R_B",
        "(V_CC - V_BE)/R_B",
        "(V_CC-V_BE)/R_B",
        "(V_CC - V_BE) / (R_B)",
        "(V_CC - V_BE)*1/R_B"
      ],
      variables: [
        { sym: "V_CC", label: "DC collector supply voltage" },
        { sym: "V_BE", label: "Base-to-emitter forward voltage drop (≈ 0.7 V for Si)" },
        { sym: "R_B", label: "Base current-limiting resistor" }
      ],
      hint: "Apply KVL from V_CC through the base branch to the grounded emitter. Solve for I_B.",
      explanation: "From the base-emitter KVL loop: V_CC - I_B·R_B - V_BE = 0. Solving for base current yields I_B = (V_CC - V_BE) / R_B."
    },
    {
      id: "bjt_fb_kvl_be",
      subject: "basic_electronics",
      category: "Fixed-Bias",
      configName: "Fixed-Bias Configuration",
      name: "Base-to-Emitter Loop (KVL)",
      targetVariable: "KVL_{B-E}",
      targetPrompt: "Base-to-Emitter Loop (KVL Equation)",
      canonicalFormula: "V_CC - I_B * R_B - V_BE = 0",
      displayFormula: "V_{CC} - I_B R_B - V_{BE} = 0",
      acceptableVariants: [
        "V_CC - I_B * R_B - V_BE = 0",
        "V_CC - I_B*R_B - V_BE = 0",
        "V_CC - I_B R_B - V_BE = 0",
        "V_CC - V_BE - I_B * R_B = 0",
        "I_B * R_B + V_BE = V_CC",
        "V_CC = I_B * R_B + V_BE"
      ],
      variables: [
        { sym: "V_CC", label: "Supply voltage" },
        { sym: "I_B", label: "Base current" },
        { sym: "R_B", label: "Base resistor" },
        { sym: "V_BE", label: "Base-emitter voltage" }
      ],
      hint: "Sum voltages around the input loop from V_CC through R_B and V_BE down to ground.",
      explanation: "Summing voltages around the input loop from the DC supply V_CC through R_B and the base-emitter junction to ground gives V_CC - I_B·R_B - V_BE = 0."
    },
    {
      id: "bjt_fb_vce",
      subject: "basic_electronics",
      category: "Fixed-Bias",
      configName: "Fixed-Bias Configuration",
      name: "Collector-Emitter Voltage (VCE)",
      targetVariable: "V_CE",
      targetPrompt: "Collector-Emitter Voltage (V_CE)",
      canonicalFormula: "V_CC - I_C * R_C",
      displayFormula: "V_{CE} = V_{CC} - I_C R_C",
      acceptableVariants: [
        "V_CC - I_C * R_C",
        "V_CC - I_C*R_C",
        "V_CC - I_C R_C",
        "V_C"
      ],
      variables: [
        { sym: "V_CC", label: "Supply voltage" },
        { sym: "I_C", label: "Collector current" },
        { sym: "R_C", label: "Collector resistor" }
      ],
      hint: "Output loop KVL: Supply V_CC minus the voltage drop across collector resistor R_C. Emitter is grounded.",
      explanation: "From the collector-emitter output loop KVL: V_CC - I_C·R_C - V_CE = 0. Since V_E = 0 V, V_CE = V_C = V_CC - I_C·R_C."
    },
    {
      id: "bjt_fb_ic",
      subject: "basic_electronics",
      category: "Fixed-Bias",
      configName: "Fixed-Bias Configuration",
      name: "Collector Current (IC)",
      targetVariable: "I_C",
      targetPrompt: "Collector Current (I_C) in Active Region",
      canonicalFormula: "\\beta * I_B",
      displayFormula: "I_C = \\beta I_B",
      acceptableVariants: [
        "\\beta * I_B",
        "\\beta I_B",
        "beta * I_B",
        "beta I_B",
        "β * I_B",
        "β I_B"
      ],
      variables: [
        { sym: "\\beta", label: "Common-emitter DC current amplification factor (h_FE)" },
        { sym: "I_B", label: "Base current" }
      ],
      hint: "In active mode, collector current is directly proportional to base current scaled by current gain.",
      explanation: "In active forward-bias mode, collector current is governed by the transistor's common-emitter current gain: I_C = β·I_B."
    },
    {
      id: "bjt_fb_vb",
      subject: "basic_electronics",
      category: "Fixed-Bias",
      configName: "Fixed-Bias Configuration",
      name: "Base Voltage (VB)",
      targetVariable: "V_B",
      targetPrompt: "Base Voltage with respect to ground (V_B)",
      canonicalFormula: "V_CC - I_B * R_B",
      displayFormula: "V_B = V_{CC} - I_B R_B",
      acceptableVariants: [
        "V_CC - I_B * R_B",
        "V_CC - I_B*R_B",
        "V_CC - I_B R_B",
        "V_BE"
      ],
      variables: [
        { sym: "V_CC", label: "Supply voltage" },
        { sym: "I_B", label: "Base current" },
        { sym: "R_B", label: "Base resistor" }
      ],
      hint: "Voltage at the base terminal is V_CC minus the voltage drop across R_B (or simply equal to V_BE).",
      explanation: "The base node potential relative to ground is V_B = V_CC - I_B·R_B. Since the emitter is grounded (V_E = 0), V_B is also equal to V_BE."
    },
    {
      id: "bjt_fb_ve",
      subject: "basic_electronics",
      category: "Fixed-Bias",
      configName: "Fixed-Bias Configuration",
      name: "Emitter Voltage (VE)",
      targetVariable: "V_E",
      targetPrompt: "Emitter Voltage with respect to ground (V_E)",
      canonicalFormula: "0",
      displayFormula: "V_E = 0\\text{ V}",
      acceptableVariants: [
        "0",
        "0 V",
        "0V"
      ],
      variables: [],
      hint: "Examine how the emitter terminal is connected in the Fixed-Bias circuit diagram.",
      explanation: "In the Fixed-Bias configuration, the emitter terminal is tied directly to the common ground reference, so V_E = 0 V."
    },

    /* ==========================================================================
       2. EMITTER-STABILIZED BIAS CONFIGURATION
       ========================================================================== */
    {
      id: "bjt_es_ib",
      subject: "basic_electronics",
      category: "Emitter-Stabilized",
      configName: "Emitter-Stabilized Bias Configuration",
      name: "Base Current (IB)",
      targetVariable: "I_B",
      targetPrompt: "Base Current (I_B) in Emitter-Stabilized Configuration",
      canonicalFormula: "(V_CC - V_BE) / (R_B + (\\beta + 1) * R_E)",
      displayFormula: "I_B = \\frac{V_{CC} - V_{BE}}{R_B + (\\beta + 1)R_E}",
      acceptableVariants: [
        "(V_CC - V_BE) / (R_B + (\\beta + 1) * R_E)",
        "(V_CC - V_BE)/(R_B + (\\beta + 1)*R_E)",
        "(V_CC - V_BE) / (R_B + (\\beta + 1) R_E)",
        "(V_CC - V_BE) / (R_B + (beta + 1) * R_E)",
        "(V_CC - V_BE) / (R_B + (beta + 1) R_E)",
        "(V_CC - V_BE) / (R_B + (β + 1) * R_E)"
      ],
      variables: [
        { sym: "V_CC", label: "Supply voltage" },
        { sym: "V_BE", label: "Base-emitter forward drop" },
        { sym: "R_B", label: "Base resistor" },
        { sym: "\\beta", label: "Transistor current gain" },
        { sym: "R_E", label: "Emitter stabilizing resistor" }
      ],
      hint: "Remember that the emitter current I_E = (β + 1)·I_B reflects the emitter resistance R_E into the base loop multiplied by (β + 1).",
      explanation: "Substituting I_E = (β + 1)·I_B into the base-emitter KVL loop yields V_CC - I_B·R_B - (β + 1)·I_B·R_E - V_BE = 0. Solving for I_B gives I_B = (V_CC - V_BE) / [R_B + (β + 1)·R_E]."
    },
    {
      id: "bjt_es_kvl_be",
      subject: "basic_electronics",
      category: "Emitter-Stabilized",
      configName: "Emitter-Stabilized Bias Configuration",
      name: "Base-to-Emitter Loop (KVL)",
      targetVariable: "KVL_{B-E}",
      targetPrompt: "Base-to-Emitter KVL Loop Equation",
      canonicalFormula: "V_CC - I_B * R_B - I_E * R_E - V_BE = 0",
      displayFormula: "V_{CC} - I_B R_B - I_E R_E - V_{BE} = 0",
      acceptableVariants: [
        "V_CC - I_B * R_B - I_E * R_E - V_BE = 0",
        "V_CC - I_B*R_B - I_E*R_E - V_BE = 0",
        "V_CC - I_B R_B - I_E R_E - V_BE = 0",
        "V_CC - V_BE - I_B * R_B - I_E * R_E = 0",
        "I_B * R_B + I_E * R_E + V_BE = V_CC"
      ],
      variables: [
        { sym: "V_CC", label: "Supply voltage" },
        { sym: "I_B", label: "Base current" },
        { sym: "R_B", label: "Base resistor" },
        { sym: "I_E", label: "Emitter current" },
        { sym: "R_E", label: "Emitter resistor" },
        { sym: "V_BE", label: "Base-emitter drop" }
      ],
      hint: "Trace the loop from V_CC through R_B, across the base-emitter junction V_BE, and through the emitter resistor R_E to ground.",
      explanation: "Kirchhoff's Voltage Law around the input loop accounts for the drop across R_B, the junction drop V_BE, and the drop across R_E: V_CC - I_B·R_B - I_E·R_E - V_BE = 0."
    },
    {
      id: "bjt_es_vce",
      subject: "basic_electronics",
      category: "Emitter-Stabilized",
      configName: "Emitter-Stabilized Bias Configuration",
      name: "Collector-Emitter Voltage (VCE)",
      targetVariable: "V_CE",
      targetPrompt: "Collector-Emitter Voltage (V_CE)",
      canonicalFormula: "V_CC - I_C * R_C - I_E * R_E",
      displayFormula: "V_{CE} = V_{CC} - I_C R_C - I_E R_E",
      acceptableVariants: [
        "V_CC - I_C * R_C - I_E * R_E",
        "V_CC - I_C*R_C - I_E*R_E",
        "V_CC - I_C R_C - I_E R_E",
        "V_C - V_E",
        "V_CC - I_C * (R_C + R_E)"
      ],
      variables: [
        { sym: "V_CC", label: "Supply voltage" },
        { sym: "I_C", label: "Collector current" },
        { sym: "R_C", label: "Collector resistor" },
        { sym: "I_E", label: "Emitter current" },
        { sym: "R_E", label: "Emitter resistor" }
      ],
      hint: "Output loop KVL: Supply V_CC minus the voltage drop across R_C and the voltage drop across R_E.",
      explanation: "Applying KVL around the collector-emitter output loop: V_CC - I_C·R_C - V_CE - I_E·R_E = 0. Solving for V_CE: V_CE = V_CC - I_C·R_C - I_E·R_E."
    },
    {
      id: "bjt_es_ie",
      subject: "basic_electronics",
      category: "Emitter-Stabilized",
      configName: "Emitter-Stabilized Bias Configuration",
      name: "Emitter Current (IE)",
      targetVariable: "I_E",
      targetPrompt: "Emitter Current (I_E) in terms of Base Current",
      canonicalFormula: "(\\beta + 1) * I_B",
      displayFormula: "I_E = (\\beta + 1)I_B",
      acceptableVariants: [
        "(\\beta + 1) * I_B",
        "(\\beta + 1) I_B",
        "(beta + 1) * I_B",
        "(beta + 1) I_B",
        "(β + 1) * I_B",
        "I_B + I_C",
        "I_C + I_B"
      ],
      variables: [
        { sym: "\\beta", label: "Current gain" },
        { sym: "I_B", label: "Base current" }
      ],
      hint: "Since I_E = I_B + I_C and I_C = β·I_B, factor out I_B.",
      explanation: "By Kirchhoff's Current Law, I_E = I_C + I_B. Substituting I_C = β·I_B gives I_E = β·I_B + I_B = (β + 1)·I_B."
    },
    {
      id: "bjt_es_ve",
      subject: "basic_electronics",
      category: "Emitter-Stabilized",
      configName: "Emitter-Stabilized Bias Configuration",
      name: "Emitter Voltage (VE)",
      targetVariable: "V_E",
      targetPrompt: "Emitter Voltage with respect to ground (V_E)",
      canonicalFormula: "I_E * R_E",
      displayFormula: "V_E = I_E R_E",
      acceptableVariants: [
        "I_E * R_E",
        "I_E*R_E",
        "I_E R_E",
        "V_B - V_BE"
      ],
      variables: [
        { sym: "I_E", label: "Emitter current" },
        { sym: "R_E", label: "Emitter resistor" }
      ],
      hint: "Ohm's Law across the emitter resistor connecting the emitter terminal to ground.",
      explanation: "The potential at the emitter relative to ground is the voltage drop produced by the emitter current flowing through R_E: V_E = I_E·R_E."
    },
    {
      id: "bjt_es_vb",
      subject: "basic_electronics",
      category: "Emitter-Stabilized",
      configName: "Emitter-Stabilized Bias Configuration",
      name: "Base Voltage (VB)",
      targetVariable: "V_B",
      targetPrompt: "Base Voltage with respect to ground (V_B)",
      canonicalFormula: "V_CC - I_B * R_B",
      displayFormula: "V_B = V_{CC} - I_B R_B",
      acceptableVariants: [
        "V_CC - I_B * R_B",
        "V_CC - I_B*R_B",
        "V_CC - I_B R_B",
        "V_BE + V_E",
        "V_E + V_BE"
      ],
      variables: [
        { sym: "V_CC", label: "Supply voltage" },
        { sym: "I_B", label: "Base current" },
        { sym: "R_B", label: "Base resistor" }
      ],
      hint: "You can express V_B from the top supply (V_CC minus drop across R_B) or from ground (V_BE + V_E).",
      explanation: "V_B can be found either by subtracting the drop across R_B from V_CC (V_B = V_CC - I_B·R_B) or summing up from ground (V_B = V_BE + V_E)."
    },

    /* ==========================================================================
       3. VOLTAGE-DIVIDER BIAS CONFIGURATION
       ========================================================================== */
    {
      id: "bjt_vd_vth",
      subject: "basic_electronics",
      category: "Voltage-Divider",
      configName: "Voltage-Divider Bias Configuration",
      name: "Thevenin Voltage (VTH)",
      targetVariable: "V_{TH}",
      targetPrompt: "Thevenin Equivalent Voltage (V_TH) at Base",
      canonicalFormula: "(R_2 / (R_1 + R_2)) * V_CC",
      displayFormula: "V_{TH} = \\frac{R_2}{R_1 + R_2} V_{CC}",
      acceptableVariants: [
        "(R_2 / (R_1 + R_2)) * V_CC",
        "(R_2 / (R_1 + R_2))*V_CC",
        "(R_2 * V_CC) / (R_1 + R_2)",
        "(R_2*V_CC)/(R_1 + R_2)",
        "(R_2 V_CC) / (R_1 + R_2)",
        "(R_2/(R_1+R_2))*V_CC"
      ],
      variables: [
        { sym: "R_1", label: "Upper voltage divider resistor connected to V_CC" },
        { sym: "R_2", label: "Lower voltage divider resistor connected to ground" },
        { sym: "V_CC", label: "DC supply voltage" }
      ],
      hint: "Standard voltage divider equation across lower resistor R_2 with open circuit at base terminal.",
      explanation: "The open-circuit Thevenin voltage at the base terminal is set by the voltage divider formed by R_1 and R_2: V_TH = [R_2 / (R_1 + R_2)] · V_CC."
    },
    {
      id: "bjt_vd_rth",
      subject: "basic_electronics",
      category: "Voltage-Divider",
      configName: "Voltage-Divider Bias Configuration",
      name: "Thevenin Resistance (RTH)",
      targetVariable: "R_{TH}",
      targetPrompt: "Thevenin Equivalent Resistance (R_TH) at Base",
      canonicalFormula: "(R_1 * R_2) / (R_1 + R_2)",
      displayFormula: "R_{TH} = \\frac{R_1 R_2}{R_1 + R_2}",
      acceptableVariants: [
        "(R_1 * R_2) / (R_1 + R_2)",
        "(R_1*R_2)/(R_1 + R_2)",
        "(R_1 R_2) / (R_1 + R_2)",
        "R_1 \\parallel R_2",
        "R_1 || R_2",
        "(R_2 * R_1) / (R_1 + R_2)"
      ],
      variables: [
        { sym: "R_1", label: "Upper divider resistor" },
        { sym: "R_2", label: "Lower divider resistor" }
      ],
      hint: "Deactivate independent DC voltage source V_CC by setting it to ground. What is the equivalent resistance of R_1 and R_2?",
      explanation: "Setting V_CC to 0 V connects both R_1 and R_2 in parallel to ground: R_TH = R_1 ∥ R_2 = (R_1 · R_2) / (R_1 + R_2)."
    },
    {
      id: "bjt_vd_ib",
      subject: "basic_electronics",
      category: "Voltage-Divider",
      configName: "Voltage-Divider Bias Configuration",
      name: "Base Current (IB - Thevenin)",
      targetVariable: "I_B",
      targetPrompt: "Base Current (I_B) via Exact Thevenin Method",
      canonicalFormula: "(V_TH - V_BE) / (R_TH + (\\beta + 1) * R_E)",
      displayFormula: "I_B = \\frac{V_{TH} - V_{BE}}{R_{TH} + (\\beta + 1)R_E}",
      acceptableVariants: [
        "(V_TH - V_BE) / (R_TH + (\\beta + 1) * R_E)",
        "(V_TH - V_BE)/(R_TH + (\\beta + 1)*R_E)",
        "(V_TH - V_BE) / (R_TH + (\\beta + 1) R_E)",
        "(V_TH - V_BE) / (R_TH + (beta + 1) * R_E)",
        "(V_TH - V_BE) / (R_TH + (β + 1) * R_E)"
      ],
      variables: [
        { sym: "V_{TH}", label: "Thevenin open-circuit base voltage" },
        { sym: "V_{BE}", label: "Base-emitter forward drop" },
        { sym: "R_{TH}", label: "Thevenin equivalent resistance (R_1 ∥ R_2)" },
        { sym: "\\beta", label: "Transistor current gain" },
        { sym: "R_E", label: "Emitter resistor" }
      ],
      hint: "Replace the voltage divider with its Thevenin equivalent circuit and apply KVL to the resulting input loop.",
      explanation: "Replacing the base network with V_TH and R_TH gives the loop equation V_TH - I_B·R_TH - V_BE - I_E·R_E = 0. With I_E = (β + 1)·I_B, solving for I_B gives I_B = (V_TH - V_BE) / [R_TH + (β + 1)·R_E]."
    },
    {
      id: "bjt_vd_i1",
      subject: "basic_electronics",
      category: "Voltage-Divider",
      configName: "Voltage-Divider Bias Configuration",
      name: "Upper Divider Current (I1)",
      targetVariable: "I_1",
      targetPrompt: "Current through Upper Divider Resistor (I_1)",
      canonicalFormula: "(V_CC - V_B) / R_1",
      displayFormula: "I_1 = \\frac{V_{CC} - V_B}{R_1}",
      acceptableVariants: [
        "(V_CC - V_B) / R_1",
        "(V_CC - V_B)/R_1",
        "(V_CC - V_B) / (R_1)",
        "(V_CC-V_B)/R_1"
      ],
      variables: [
        { sym: "V_CC", label: "Supply voltage" },
        { sym: "V_B", label: "Base node voltage" },
        { sym: "R_1", label: "Upper divider resistor" }
      ],
      hint: "Ohm's Law across R_1: the voltage difference between V_CC and base voltage V_B divided by R_1.",
      explanation: "Current flowing into the divider network from V_CC through resistor R_1 is given by Ohm's Law: I_1 = (V_CC - V_B) / R_1."
    },
    {
      id: "bjt_vd_i2",
      subject: "basic_electronics",
      category: "Voltage-Divider",
      configName: "Voltage-Divider Bias Configuration",
      name: "Lower Divider Current (I2)",
      targetVariable: "I_2",
      targetPrompt: "Current through Lower Divider Resistor (I_2)",
      canonicalFormula: "V_B / R_2",
      displayFormula: "I_2 = \\frac{V_B}{R_2}",
      acceptableVariants: [
        "V_B / R_2",
        "V_B/R_2",
        "(V_B) / (R_2)",
        "(V_B)/R_2"
      ],
      variables: [
        { sym: "V_B", label: "Base node voltage" },
        { sym: "R_2", label: "Lower divider resistor" }
      ],
      hint: "Ohm's Law across lower resistor R_2: voltage across R_2 is V_B to ground.",
      explanation: "Current through lower resistor R_2 to ground is determined by Ohm's Law: I_2 = V_B / R_2."
    },
    {
      id: "bjt_vd_ib_kcl",
      subject: "basic_electronics",
      category: "Voltage-Divider",
      configName: "Voltage-Divider Bias Configuration",
      name: "Base Current via Divider Currents (IB)",
      targetVariable: "I_B",
      targetPrompt: "Base Current (I_B) in terms of Divider Currents",
      canonicalFormula: "I_1 - I_2",
      displayFormula: "I_B = I_1 - I_2",
      acceptableVariants: [
        "I_1 - I_2",
        "I_1-I_2"
      ],
      variables: [
        { sym: "I_1", label: "Current flowing through R_1" },
        { sym: "I_2", label: "Current flowing through R_2" }
      ],
      hint: "Apply Kirchhoff's Current Law (KCL) at the base node: current in equals currents out.",
      explanation: "By KCL at the base node, current entering via R_1 splits into the base terminal and R_2: I_1 = I_2 + I_B ⟹ I_B = I_1 - I_2."
    },
    {
      id: "bjt_vd_vb",
      subject: "basic_electronics",
      category: "Voltage-Divider",
      configName: "Voltage-Divider Bias Configuration",
      name: "Base Voltage from Upper Resistor (VB)",
      targetVariable: "V_B",
      targetPrompt: "Base Voltage (V_B) from Supply V_CC and R_1",
      canonicalFormula: "V_CC - I_1 * R_1",
      displayFormula: "V_B = V_{CC} - I_1 R_1",
      acceptableVariants: [
        "V_CC - I_1 * R_1",
        "V_CC - I_1*R_1",
        "V_CC - I_1 R_1",
        "V_BE + V_E"
      ],
      variables: [
        { sym: "V_CC", label: "Supply voltage" },
        { sym: "I_1", label: "Current through R_1" },
        { sym: "R_1", label: "Upper divider resistor" }
      ],
      hint: "Start at V_CC and subtract the voltage drop across upper resistor R_1.",
      explanation: "The base node potential relative to ground is the supply voltage minus the IR drop across R_1: V_B = V_CC - I_1·R_1."
    },

    /* ==========================================================================
       4. COLLECTOR-FEEDBACK BIAS CONFIGURATION
       ========================================================================== */
    {
      id: "bjt_cf_ib",
      subject: "basic_electronics",
      category: "Collector-Feedback",
      configName: "Collector-Feedback Bias Configuration",
      name: "Base Current (IB)",
      targetVariable: "I_B",
      targetPrompt: "Base Current (I_B) in Collector-Feedback Configuration",
      canonicalFormula: "(V_CC - V_BE) / (R_F + (\\beta + 1) * (R_C + R_E))",
      displayFormula: "I_B = \\frac{V_{CC} - V_{BE}}{R_F + (\\beta + 1)(R_C + R_E)}",
      acceptableVariants: [
        "(V_CC - V_BE) / (R_F + (\\beta + 1) * (R_C + R_E))",
        "(V_CC - V_BE)/(R_F + (\\beta + 1)*(R_C + R_E))",
        "(V_CC - V_BE) / (R_F + (\\beta + 1)(R_C + R_E))",
        "(V_CC - V_BE) / (R_F + (beta + 1) * (R_C + R_E))",
        "(V_CC - V_BE) / (R_F + \\beta * (R_C + R_E))",
        "(V_CC - V_BE) / (R_F + beta * (R_C + R_E))",
        "(V_CC - V_BE) / (R_F + (β + 1) * (R_C + R_E))"
      ],
      variables: [
        { sym: "V_CC", label: "Supply voltage" },
        { sym: "V_BE", label: "Base-emitter forward drop" },
        { sym: "R_F", label: "Feedback resistor between collector and base" },
        { sym: "\\beta", label: "Current gain" },
        { sym: "R_C", label: "Collector resistor" },
        { sym: "R_E", label: "Emitter resistor" }
      ],
      hint: "Remember that current through R_C is I_C' = I_C + I_B ≈ (β + 1)·I_B, and through R_E is I_E = (β + 1)·I_B.",
      explanation: "Because the current flowing through R_C is I_C' = I_C + I_B = (β + 1)·I_B, summing KVL gives V_CC - (β + 1)·I_B·R_C - I_B·R_F - V_BE - (β + 1)·I_B·R_E = 0. Solving for I_B gives I_B = (V_CC - V_BE) / [R_F + (β + 1)(R_C + R_E)]."
    },
    {
      id: "bjt_cf_kvl_be",
      subject: "basic_electronics",
      category: "Collector-Feedback",
      configName: "Collector-Feedback Bias Configuration",
      name: "Base-to-Emitter Loop (KVL)",
      targetVariable: "KVL_{B-E}",
      targetPrompt: "Base-to-Emitter KVL Loop Equation with Feedback",
      canonicalFormula: "V_CC - I_B * R_F - I_C * R_C - I_E * R_E - V_BE = 0",
      displayFormula: "V_{CC} - I_B R_F - I_C R_C - I_E R_E - V_{BE} = 0",
      acceptableVariants: [
        "V_CC - I_B * R_F - I_C * R_C - I_E * R_E - V_BE = 0",
        "V_CC - I_B*R_F - I_C*R_C - I_E*R_E - V_BE = 0",
        "V_CC - I_B R_F - I_C R_C - I_E R_E - V_BE = 0",
        "V_CC - (I_C + I_B) * R_C - I_B * R_F - I_E * R_E - V_BE = 0",
        "V_CC - I_C * R_C - I_B * R_F - V_BE - I_E * R_E = 0"
      ],
      variables: [
        { sym: "V_CC", label: "Supply voltage" },
        { sym: "I_B", label: "Base current" },
        { sym: "R_F", label: "Feedback resistor" },
        { sym: "I_C", label: "Collector current" },
        { sym: "R_C", label: "Collector resistor" },
        { sym: "I_E", label: "Emitter current" },
        { sym: "R_E", label: "Emitter resistor" },
        { sym: "V_BE", label: "Base-emitter drop" }
      ],
      hint: "Trace from V_CC through R_C, then through the feedback branch R_F to base, through V_BE and R_E to ground.",
      explanation: "KVL from supply through collector resistor R_C, through feedback resistor R_F to base, and through V_BE and R_E to ground: V_CC - I_B·R_F - I_C·R_C - I_E·R_E - V_BE = 0."
    },
    {
      id: "bjt_cf_vb",
      subject: "basic_electronics",
      category: "Collector-Feedback",
      configName: "Collector-Feedback Bias Configuration",
      name: "Base Voltage from Collector (VB)",
      targetVariable: "V_B",
      targetPrompt: "Base Voltage (V_B) in terms of Collector Voltage and R_F",
      canonicalFormula: "V_C - I_B * R_F",
      displayFormula: "V_B = V_C - I_B R_F",
      acceptableVariants: [
        "V_C - I_B * R_F",
        "V_C - I_B*R_F",
        "V_C - I_B R_F"
      ],
      variables: [
        { sym: "V_C", label: "Collector node voltage" },
        { sym: "I_B", label: "Base current flowing through feedback resistor" },
        { sym: "R_F", label: "Feedback resistor" }
      ],
      hint: "Base is connected to collector via feedback resistor R_F. Apply Ohm's Law across R_F.",
      explanation: "Since base current I_B flows from the collector node through R_F into the base terminal, Ohm's law gives: V_B = V_C - I_B·R_F."
    },

    /* ==========================================================================
       5. UNIVERSAL BJT FORMULAS (APPLICABLE TO ALL CONFIGURATIONS)
       ========================================================================== */
    {
      id: "bjt_all_ve",
      subject: "basic_electronics",
      category: "Universal BJT",
      configName: "Universal BJT Relations",
      name: "Emitter Voltage (VE)",
      targetVariable: "V_E",
      targetPrompt: "Emitter Voltage with respect to ground (V_E)",
      canonicalFormula: "I_E * R_E",
      displayFormula: "V_E = I_E R_E",
      acceptableVariants: [
        "I_E * R_E",
        "I_E*R_E",
        "I_E R_E"
      ],
      variables: [
        { sym: "I_E", label: "Emitter current" },
        { sym: "R_E", label: "Emitter resistor" }
      ],
      hint: "Ohm's Law: current through the emitter resistor multiplied by its resistance.",
      explanation: "In any circuit with an emitter resistor, the potential at the emitter terminal is V_E = I_E·R_E."
    },
    {
      id: "bjt_all_vc",
      subject: "basic_electronics",
      category: "Universal BJT",
      configName: "Universal BJT Relations",
      name: "Collector Voltage (VC)",
      targetVariable: "V_C",
      targetPrompt: "Collector Voltage with respect to ground (V_C)",
      canonicalFormula: "V_CC - I_C * R_C",
      displayFormula: "V_C = V_{CC} - I_C R_C",
      acceptableVariants: [
        "V_CC - I_C * R_C",
        "V_CC - I_C*R_C",
        "V_CC - I_C R_C",
        "V_CE + V_E"
      ],
      variables: [
        { sym: "V_CC", label: "Supply voltage" },
        { sym: "I_C", label: "Collector current" },
        { sym: "R_C", label: "Collector resistor" }
      ],
      hint: "DC supply voltage minus the voltage drop across the collector resistor R_C.",
      explanation: "The node voltage at the collector terminal is the supply voltage minus the drop across the collector resistor: V_C = V_CC - I_C·R_C."
    },
    {
      id: "bjt_all_vbe",
      subject: "basic_electronics",
      category: "Universal BJT",
      configName: "Universal BJT Relations",
      name: "Base-to-Emitter Voltage (VBE)",
      targetVariable: "V_{BE}",
      targetPrompt: "Base-to-Emitter Voltage Difference (V_BE)",
      canonicalFormula: "V_B - V_E",
      displayFormula: "V_{BE} = V_B - V_E",
      acceptableVariants: [
        "V_B - V_E",
        "V_B-V_E"
      ],
      variables: [
        { sym: "V_B", label: "Base node voltage" },
        { sym: "V_E", label: "Emitter node voltage" }
      ],
      hint: "In double-subscript voltage notation, subtract the second terminal voltage from the first.",
      explanation: "Double-subscript notation represents the potential difference between two nodes: V_BE = V_B - V_E."
    },
    {
      id: "bjt_all_vce",
      subject: "basic_electronics",
      category: "Universal BJT",
      configName: "Universal BJT Relations",
      name: "Collector-to-Emitter Voltage (VCE)",
      targetVariable: "V_{CE}",
      targetPrompt: "Collector-to-Emitter Voltage Difference (V_CE)",
      canonicalFormula: "V_C - V_E",
      displayFormula: "V_{CE} = V_C - V_E",
      acceptableVariants: [
        "V_C - V_E",
        "V_C-V_E"
      ],
      variables: [
        { sym: "V_C", label: "Collector node voltage" },
        { sym: "V_E", label: "Emitter node voltage" }
      ],
      hint: "Collector potential minus emitter potential.",
      explanation: "The collector-emitter voltage drop across the transistor is V_CE = V_C - V_E."
    },
    {
      id: "bjt_all_vbc",
      subject: "basic_electronics",
      category: "Universal BJT",
      configName: "Universal BJT Relations",
      name: "Base-to-Collector Voltage (VBC)",
      targetVariable: "V_{BC}",
      targetPrompt: "Base-to-Collector Voltage Difference (V_BC)",
      canonicalFormula: "V_B - V_C",
      displayFormula: "V_{BC} = V_B - V_C",
      acceptableVariants: [
        "V_B - V_C",
        "V_B-V_C"
      ],
      variables: [
        { sym: "V_B", label: "Base node voltage" },
        { sym: "V_C", label: "Collector node voltage" }
      ],
      hint: "Double subscript rule: first subscript minus second subscript.",
      explanation: "By double-subscript notation, V_BC = V_B - V_C. For an NPN transistor in the active region, V_BC is typically negative (reverse-biased junction)."
    },
    {
      id: "bjt_all_ib_diff",
      subject: "basic_electronics",
      category: "Universal BJT",
      configName: "Universal BJT Relations",
      name: "Base Current from Terminal Currents (IB)",
      targetVariable: "I_B",
      targetPrompt: "Base Current (I_B) from Emitter and Collector Currents",
      canonicalFormula: "I_E - I_C",
      displayFormula: "I_B = I_E - I_C",
      acceptableVariants: [
        "I_E - I_C",
        "I_E-I_C"
      ],
      variables: [
        { sym: "I_E", label: "Emitter current" },
        { sym: "I_C", label: "Collector current" }
      ],
      hint: "KCL for the whole transistor: emitter current equals the sum of collector and base currents. Solve for I_B.",
      explanation: "From Kirchhoff's Current Law applied to the BJT as a whole: I_E = I_B + I_C ⟹ I_B = I_E - I_C."
    }
  ],

  /* ==========================================================================
     MECHANICS OF DEFORMABLE BODIES
     ========================================================================== */
  deformable_bodies: [
    {
      id: "def_hoop_stress",
      subject: "deformable_bodies",
      category: "Thin-Walled Vessels",
      configName: "Thin-Walled Cylindrical Vessel",
      name: "Hoop (Tangential) Stress",
      targetVariable: "\\sigma_h",
      targetPrompt: "Hoop (Tangential / Circumferential) Tensile Stress in Thin Cylinder",
      canonicalFormula: "(p * d) / (2 * t)",
      displayFormula: "\\sigma_h = \\frac{p \\cdot d}{2t} = \\frac{p \\cdot r}{t}",
      acceptableVariants: [
        "(p * d) / (2 * t)",
        "(p * d)/(2 * t)",
        "(p*d)/(2*t)",
        "(pd) / (2t)",
        "pd / (2t)",
        "(p * r) / t",
        "(p*r)/t",
        "pr / t"
      ],
      variables: [
        { sym: "p", label: "Internal gauge pressure" },
        { sym: "d", label: "Inside diameter of cylinder" },
        { sym: "t", label: "Wall thickness" },
        { sym: "r", label: "Inside radius (r = d/2)" }
      ],
      hint: "Circumferential bursting stress resisting internal fluid pressure along the cylinder's longitudinal cut.",
      explanation: "Equilibrium across a longitudinal diametral plane yields 2·(σ_h·t·L) = p·d·L ⟹ σ_h = pd/(2t) = pr/t."
    },
    {
      id: "def_axial_stress",
      subject: "deformable_bodies",
      category: "Thin-Walled Vessels",
      configName: "Thin-Walled Cylindrical Vessel",
      name: "Longitudinal (Axial) Stress",
      targetVariable: "\\sigma_L",
      targetPrompt: "Longitudinal (Axial) Stress in Thin Cylinder with End Caps",
      canonicalFormula: "(p * d) / (4 * t)",
      displayFormula: "\\sigma_L = \\frac{p \\cdot d}{4t} = \\frac{p \\cdot r}{2t} = \\frac{\\sigma_h}{2}",
      acceptableVariants: [
        "(p * d) / (4 * t)",
        "(p * d)/(4 * t)",
        "(p*d)/(4*t)",
        "(pd) / (4t)",
        "pd / (4t)",
        "(p * r) / (2 * t)",
        "pr / (2t)",
        "\\sigma_h / 2",
        "sigma_h / 2"
      ],
      variables: [
        { sym: "p", label: "Internal fluid pressure" },
        { sym: "d", label: "Inside diameter" },
        { sym: "t", label: "Wall thickness" }
      ],
      hint: "Stress resisting the force pushing against the closed circular ends. It is exactly half the hoop stress.",
      explanation: "Force on closed end is p·(πd²/4). Resisting wall area is π·d·t. Thus σ_L = [p·πd²/4] / [πdt] = pd/(4t) = σ_h / 2."
    },
    {
      id: "def_spherical_stress",
      subject: "deformable_bodies",
      category: "Thin-Walled Vessels",
      configName: "Thin-Walled Spherical Vessel",
      name: "Spherical Vessel Stress",
      targetVariable: "\\sigma",
      targetPrompt: "Tensile Stress in Thin-Walled Spherical Vessel",
      canonicalFormula: "(p * d) / (4 * t)",
      displayFormula: "\\sigma = \\frac{p \\cdot d}{4t} = \\frac{p \\cdot r}{2t}",
      acceptableVariants: [
        "(p * d) / (4 * t)",
        "(pd) / (4t)",
        "(p * r) / (2 * t)",
        "pr / (2t)"
      ],
      variables: [
        { sym: "p", label: "Internal pressure" },
        { sym: "d", label: "Diameter" },
        { sym: "t", label: "Wall thickness" }
      ],
      hint: "Every diametral cut through a sphere yields the same circular cross section as the longitudinal stress of a cylinder.",
      explanation: "By symmetry, the tensile stress along any great circle is uniform: σ = pd/(4t) = pr/(2t)."
    },
    {
      id: "def_wire_rope_sheave",
      subject: "deformable_bodies",
      category: "Wire Ropes",
      configName: "Wire Rope on Sheave / Drum",
      name: "Sheave Bearing Pressure",
      targetVariable: "p",
      targetPrompt: "Radial Bearing Pressure of Wire Rope in Sheave Groove",
      canonicalFormula: "(2 * T) / (d * D)",
      displayFormula: "p = \\frac{2T}{d \\cdot D}",
      acceptableVariants: [
        "(2 * T) / (d * D)",
        "(2T) / (d * D)",
        "(2*T)/(d*D)",
        "(2T) / (dD)",
        "2T / (d * D)",
        "2T / (dD)"
      ],
      variables: [
        { sym: "T", label: "Rope tensile load / tension" },
        { sym: "d", label: "Nominal rope diameter" },
        { sym: "D", label: "Sheave pitch diameter" }
      ],
      hint: "Pressure is twice the tension divided by rope diameter and sheave diameter.",
      explanation: "Radial bearing pressure exerted by a tensioned wire rope in a groove is p = 2T / (d·D). Safe limits: 500 psi (Cast Iron), 900 psi (Cast Steel), 2500 psi (Manganese Steel)."
    },
    {
      id: "def_hooke_axial",
      subject: "deformable_bodies",
      category: "Axial Loading",
      configName: "Axial Tension / Compression",
      name: "Axial Deformation (Elongation)",
      targetVariable: "\\delta",
      targetPrompt: "Axial Deformation (Elongation δ) of a Uniform Bar",
      canonicalFormula: "(P * L) / (A * E)",
      displayFormula: "\\delta = \\frac{P \\cdot L}{A \\cdot E}",
      acceptableVariants: [
        "(P * L) / (A * E)",
        "(P*L)/(A*E)",
        "(PL) / (AE)",
        "PL / (AE)",
        "(P * L) / (A E)"
      ],
      variables: [
        { sym: "P", label: "Applied axial load" },
        { sym: "L", label: "Original bar length" },
        { sym: "A", label: "Cross-sectional area" },
        { sym: "E", label: "Modulus of Elasticity (Young's Modulus)" }
      ],
      hint: "Hooke's Law: σ = E·ε where σ = P/A and ε = δ/L. Solve for δ.",
      explanation: "From Hooke's Law: stress σ = P/A, strain ε = δ/L, and σ = E·ε ⟹ δ = (P·L) / (A·E)."
    },
    {
      id: "def_torsion_shear",
      subject: "deformable_bodies",
      category: "Torsion",
      configName: "Circular Shaft Torsion",
      name: "Torsional Shear Stress",
      targetVariable: "\\tau",
      targetPrompt: "Maximum Torsional Shear Stress at Shaft Surface (τ_max)",
      canonicalFormula: "(T * r) / J",
      displayFormula: "\\tau = \\frac{T \\cdot r}{J} = \\frac{16T}{\\pi d^3}",
      acceptableVariants: [
        "(T * r) / J",
        "(T*r)/J",
        "(Tr) / J",
        "Tr / J",
        "(16 * T) / (\\pi * d^3)",
        "(16T) / (\\pi * d^3)",
        "16T / (\\pi * d^3)",
        "(16 * T) / (pi * d^3)"
      ],
      variables: [
        { sym: "T", label: "Internal applied torque" },
        { sym: "r", label: "Outer radius of shaft (d/2)" },
        { sym: "J", label: "Polar moment of inertia of cross section" }
      ],
      hint: "Torsion formula relating torque, outer radius, and polar moment of inertia J.",
      explanation: "The elastic torsion formula is τ = (T·r)/J. For a solid circular shaft where J = πd⁴/32, τ_max = 16T / (πd³)."
    },
    {
      id: "def_polar_j",
      subject: "deformable_bodies",
      category: "Torsion",
      configName: "Solid Circular Shaft",
      name: "Polar Moment of Inertia (J)",
      targetVariable: "J",
      targetPrompt: "Polar Moment of Inertia (J) for Solid Circular Shaft",
      canonicalFormula: "(\\pi * d^4) / 32",
      displayFormula: "J = \\frac{\\pi d^4}{32} = \\frac{\\pi r^4}{2}",
      acceptableVariants: [
        "(\\pi * d^4) / 32",
        "(\\pi * d^4)/32",
        "(\\pi d^4) / 32",
        "(pi * d^4) / 32",
        "pi * d^4 / 32",
        "(\\pi * r^4) / 2",
        "(pi * r^4) / 2"
      ],
      variables: [
        { sym: "d", label: "Shaft diameter" },
        { sym: "\\pi", label: "Pi constant (≈ 3.14159)" }
      ],
      hint: "Calculated from the integral of r² dA over a circular cross section: πd⁴ divided by a constant.",
      explanation: "For a solid round section of diameter d: J = πd⁴ / 32 = πr⁴ / 2."
    },
    {
      id: "def_flexure_stress",
      subject: "deformable_bodies",
      category: "Beam Bending",
      configName: "Pure Bending of Beams",
      name: "Flexure (Bending) Stress",
      targetVariable: "\\sigma",
      targetPrompt: "Flexure / Bending Stress in a Beam",
      canonicalFormula: "(M * y) / I",
      displayFormula: "\\sigma = \\frac{M \\cdot y}{I}",
      acceptableVariants: [
        "(M * y) / I",
        "(M*y)/I",
        "(My) / I",
        "My / I"
      ],
      variables: [
        { sym: "M", label: "Internal bending moment" },
        { sym: "y", label: "Distance from the neutral axis to the fiber" },
        { sym: "I", label: "Area moment of inertia of the beam cross section" }
      ],
      hint: "Flexure formula: bending moment multiplied by distance y divided by moment of inertia I.",
      explanation: "The flexure formula states that longitudinal bending stress varies linearly from the neutral axis: σ = (M·y)/I."
    }
  ],

  /* ==========================================================================
     FLUID MECHANICS
     ========================================================================== */
  fluid_mechanics: [
    {
      id: "flu_hydrostatic_p",
      subject: "fluid_mechanics",
      category: "Fluid Statics",
      configName: "Hydrostatic Pressure Column",
      name: "Hydrostatic Pressure",
      targetVariable: "p",
      targetPrompt: "Hydrostatic Pressure at Depth (p)",
      canonicalFormula: "\\rho * g * h",
      displayFormula: "p = \\rho g h = \\gamma h",
      acceptableVariants: [
        "\\rho * g * h",
        "\\rho*g*h",
        "\\rho g h",
        "rho * g * h",
        "rho g h",
        "\\gamma * h",
        "gamma * h",
        "γ * h",
        "γh"
      ],
      variables: [
        { sym: "\\rho", label: "Fluid mass density" },
        { sym: "g", label: "Acceleration due to gravity (9.81 m/s² or 32.2 ft/s²)" },
        { sym: "h", label: "Fluid depth / head" },
        { sym: "\\gamma", label: "Specific weight (γ = ρ·g)" }
      ],
      hint: "Pressure increases linearly with depth: fluid density times gravitational acceleration times depth.",
      explanation: "Hydrostatic equation dp/dz = -γ yields gauge pressure p = ρgh = γh at depth h below the free surface."
    },
    {
      id: "flu_reynolds_num",
      subject: "fluid_mechanics",
      category: "Pipe Flow",
      configName: "Internal Pipe Flow",
      name: "Reynolds Number",
      targetVariable: "Re",
      targetPrompt: "Reynolds Number (Re) for Pipe Flow",
      canonicalFormula: "(\\rho * v * D) / \\mu",
      displayFormula: "Re = \\frac{\\rho v D}{\\mu} = \\frac{v D}{\\nu}",
      acceptableVariants: [
        "(\\rho * v * D) / \\mu",
        "(\\rho * v * D)/\\mu",
        "(rho * v * D) / mu",
        "(rho*v*D)/mu",
        "(\\rho v D) / \\mu",
        "(v * D) / \\nu",
        "(v*D)/nu",
        "(v D) / \\nu"
      ],
      variables: [
        { sym: "\\rho", label: "Fluid density" },
        { sym: "v", label: "Mean flow velocity" },
        { sym: "D", label: "Internal pipe diameter" },
        { sym: "\\mu", label: "Dynamic / absolute viscosity" },
        { sym: "\\nu", label: "Kinematic viscosity (ν = μ/ρ)" }
      ],
      hint: "Ratio of inertial forces to viscous forces in a fluid: density times velocity times diameter divided by dynamic viscosity.",
      explanation: "The dimensionless Reynolds number Re = (ρ·v·D)/μ = (v·D)/ν predicts whether flow is laminar (Re < 2300) or turbulent (Re > 4000)."
    },
    {
      id: "flu_darcy_weisbach",
      subject: "fluid_mechanics",
      category: "Pipe Flow Friction",
      configName: "Pipe Major Head Loss",
      name: "Darcy-Weisbach Head Loss",
      targetVariable: "h_f",
      targetPrompt: "Frictional Head Loss (h_f) via Darcy-Weisbach Equation",
      canonicalFormula: "f * (L / D) * (v^2 / (2 * g))",
      displayFormula: "h_f = f \\cdot \\frac{L}{D} \\cdot \\frac{v^2}{2g}",
      acceptableVariants: [
        "f * (L / D) * (v^2 / (2 * g))",
        "f * (L/D) * (v^2 / (2*g))",
        "(f * L * v^2) / (2 * g * D)",
        "(f*L*v^2)/(2*g*D)",
        "(f L v^2) / (2 g D)"
      ],
      variables: [
        { sym: "f", label: "Darcy friction factor" },
        { sym: "L", label: "Pipe length" },
        { sym: "D", label: "Pipe inside diameter" },
        { sym: "v", label: "Mean flow velocity" },
        { sym: "g", label: "Acceleration of gravity" }
      ],
      hint: "Friction factor times length-to-diameter ratio times velocity head (v² / 2g).",
      explanation: "The Darcy-Weisbach equation calculates head loss due to pipe wall friction: h_f = f·(L/D)·(v² / 2g)."
    },
    {
      id: "flu_hagen_poiseuille",
      subject: "fluid_mechanics",
      category: "Laminar Pipe Flow",
      configName: "Laminar Flow in Round Pipes",
      name: "Laminar Pipe Friction Factor",
      targetVariable: "f",
      targetPrompt: "Darcy Friction Factor (f) for Laminar Flow (Hagen-Poiseuille)",
      canonicalFormula: "64 / Re",
      displayFormula: "f = \\frac{64}{Re}",
      acceptableVariants: [
        "64 / Re",
        "64/Re",
        "64 / (Re)"
      ],
      variables: [
        { sym: "Re", label: "Reynolds number (Re < 2300)" }
      ],
      hint: "In purely laminar pipe flow, the Darcy friction factor depends solely on the Reynolds number: 64 divided by Re.",
      explanation: "From the Hagen-Poiseuille solution for fully developed laminar pipe flow, the Darcy friction factor is f = 64/Re."
    },
    {
      id: "flu_continuity",
      subject: "fluid_mechanics",
      category: "Conservation Laws",
      configName: "1D Steady Incompressible Flow",
      name: "Continuity Equation",
      targetVariable: "Q",
      targetPrompt: "Continuity Equation for Incompressible Volumetric Flow Rate (Q)",
      canonicalFormula: "A_1 * v_1 = A_2 * v_2",
      displayFormula: "Q = A_1 v_1 = A_2 v_2",
      acceptableVariants: [
        "A_1 * v_1 = A_2 * v_2",
        "A_1*v_1 = A_2*v_2",
        "A_1 v_1 = A_2 v_2",
        "A * v",
        "A*v"
      ],
      variables: [
        { sym: "A", label: "Cross-sectional flow area" },
        { sym: "v", label: "Average fluid velocity" }
      ],
      hint: "Conservation of mass for an incompressible fluid: cross-sectional area times velocity remains constant.",
      explanation: "By conservation of mass for steady incompressible fluid flow: Q = A_1·v_1 = A_2·v_2 = constant."
    },
    {
      id: "flu_torricelli",
      subject: "fluid_mechanics",
      category: "Efflux Flow",
      configName: "Tank Orifice Discharge",
      name: "Torricelli's Law",
      targetVariable: "v",
      targetPrompt: "Efflux Velocity from an Open Orifice under Head h",
      canonicalFormula: "\\sqrt(2 * g * h)",
      displayFormula: "v = \\sqrt{2gh}",
      acceptableVariants: [
        "\\sqrt(2 * g * h)",
        "\\sqrt(2*g*h)",
        "\\sqrt(2gh)",
        "sqrt(2 * g * h)",
        "sqrt(2*g*h)",
        "sqrt(2gh)",
        "(2 * g * h)^(1/2)",
        "(2*g*h)^(1/2)"
      ],
      variables: [
        { sym: "g", label: "Gravitational acceleration" },
        { sym: "h", label: "Height of fluid surface above the orifice" }
      ],
      hint: "Derived from Bernoulli's equation with zero velocity at the top reservoir and atmospheric pressure at both ends.",
      explanation: "Torricelli's Law equates kinetic energy at discharge to potential energy: v = √(2gh)."
    }
  ]
};

// Export to window for browser access
if (typeof window !== 'undefined') {
  window.FORMULA_DATA = FORMULA_DATA;
}
