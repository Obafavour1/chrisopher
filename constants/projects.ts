export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  longDescription: string;
  category: string;
  date: string;
  technologies: string[];
  image: string;
  folder?: string;
  githubUrl?: string;
  demoUrl?: string;
  keyFeatures?:string[]
  keyEngineeringContributions?: {
    title: string,
    points:string[]
  }[];
  keyAchievements?: string[];


  keyTechnicalDecisions?: {
    operatingPressure: string;

    optimalConfiguration: {
      theoreticalStagesMultiplier: number; // e.g. 2x minimum theoretical stages
      theoreticalTrays: number;
      realTrays: number;
      trayEfficiencyPercent: number;
    };

    feedTrayLocation: number;
    propyleneSideDrawLocation: number;

    reboilerDuty: {
      value: number;
      unit: string; // "M kcal/h"
      case: string; // "optimized"
    };

    unitSeparationCost: {
      value: number;
      currency: string; // "EUR"
      per: string; // "ton of feed"
    };
  };

  controlAndOperability?: {
    pressureControl: string;

    flowControls: Array<
      "feed" | "reflux" | "side-draw" | "bottoms"
    >;

    compositionAnalyzers: {
      online: boolean;
      purpose: string;
    };

    temperatureControl: {
      used: boolean;
      reason: string;
    };

    airCondenserBypass: {
      type: "split-range" | string;
      purpose: string;
    };
  };
}

export const projects: Project[] = [
  {
  "id": "ethylene-cracker-module",
  "title": "Ethylene Cracker Module – Multidisciplinary Engineering Design",
  "description": "Multidisciplinary engineering study of an ethylene cracker module covering layout, piping, materials, electrical, instrumentation, structural design, transport, and foundations.",
  "longDescription": "This project reproduces the engineering workflow of a large-scale ethylene cracker module, following EPC methodologies used in industrial projects. The work covered the full lifecycle from plot plan definition to module transportation and foundation selection, integrating process, mechanical, piping, electrical, instrumentation, civil, and structural disciplines. Key engineering constraints such as safety distances, corrosion environment, NPSH, weight control, seismic loads, constructability, and transport limitations were addressed using industry standards and real-world assumptions. The project was carried out in collaboration with Technip Energies, simulating real project interfaces, documentation, and engineering decision-making.",
  "category": "Process Design & Engineering",
  "date": "February 2025",
  "technologies": [
    "AutoCAD",
    "3D Plant Layout ",
    "Piping CAD Tools",
    "Excel",
    "EPC Engineering Standards",
    "ICSS Design Principles",
    "SPMT Transport Engineering",
    "Structural & Foundation Design Methods"
  ],
  "tags": [
    "Process Engineering",
    "Plant Layout",
    "EPC Engineering",
    "Modular Design",
    "Safety & Standards"
  ],
  "image": "/projects/ethylene-cracker.png",
  "githubUrl": "",
  "keyEngineeringContributions": [
  {
    "title": "Plant Layout & Piping",
    "points": [
      "Developed overall plot plan considering prevailing winds, safety distances, flare radiation zones, and constructability.",
      "Designed ECU modular layout integrating stick-built units, racks, and modules.",
      "Created 3D piping and equipment layout ensuring NPSH compliance, maintenance access, and PSV drainage."
    ]
  },
  {
    "title": "Materials & Corrosion Engineering",
    "points": [
      "Defined material selection philosophy for a coastal, industrial C4 corrosive environment.",
      "Evaluated external corrosion, CUI, and SCC risks based on operating conditions.",
      "Selected materials and corrosion allowances using HMB-derived process data."
    ]
  },
  {
    "title": "Electrical & Instrumentation",
    "points": [
      "Designed single-line electrical distribution from 66 kV grid down to LV systems.",
      "Sized transformers, switchgear, and power cables based on load lists and voltage drop criteria.",
      "Redesigned ICSS-based control room with Smart Junction Boxes, cabinet optimization, and heat dissipation calculations."
    ]
  },
  {
    "title": "Equipment Engineering",
    "points": [
      "Reviewed vendor General Arrangement Drawings (GADs) for installation, maintenance, and interface completeness.",
      "Performed technical bid evaluation and clarification for equipment packages (cooling tower, air dryer)."
    ]
  },
  {
    "title": "Weight Control & Transport",
    "points": [
      "Calculated module weight and center of gravity for transportation, dry-in-place, and operating conditions.",
      "Designed SPMT transport configuration, including dynamic loads, CoG uncertainty, and stability checks.",
      "Selected suitable barge transport solution based on geometry and weight constraints."
    ]
  },
  {
    "title": "Structural & Foundations",
    "points": [
      "Performed beam stress analysis and section sizing under SPMT load cases.",
      "Estimated structural steel weight for primary framing.",
      "Compared shallow vs pile foundations considering soft soil, seismic loads, settlement, and cost.",
      "Selected pile foundation solution based on ULS/SLS checks and economic evaluation."
    ]
  }
],



  "keyAchievements": [
    "Delivered a fully coordinated multidisciplinary module design",
    "Ensured compliance with EPC safety distances, corrosion classes, and EPC standards",
    "Validated transport feasibility  and stability for a >3,000-ton module",
    "Demonstrated engineering trade-off analysis (layout, materials, foundations, cost)"
  ]
},
  {
  "id": "aromatics-energy-efficiency-pinch",
  "title": "Energy Efficiency Improvement of an Aromatics Complex (Pinch Analysis)",
  "description": "Energy efficiency study of an aromatics complex using Pinch Analysis, HEN redesign, and economic evaluation to reduce fuel consumption and improve EII.",
  "longDescription": "This project focuses on improving the energy efficiency of an aromatics complex, particularly in the most fuel-intensive process area. Using Pinch Analysis and Minimum Energy Requirement (MER) concepts, an optimized Heat Exchanger Network (HEN) was designed to reduce hot utility demand while respecting minimum temperature approach constraints. The solution was evaluated both thermally and economically, including CAPEX estimation, fuel savings, Energy Intensity Index (EII) improvement, and payback analysis, following industrial heat integration methodology.",
  "category": "Energy Optimization",
  "date": "2024",
  "technologies": [
    "Pinch Analysis",
    "HINT Software",
    "Heat Exchanger Network Design",
    "Excel",
    "Energy Intensity Index (EII)",
    "Process Flow Diagram Analysis"
  ],
  "tags": [
    "Energy Efficiency",
    "Heat Integration",
    "Pinch Analysis",
    "Process Optimization",
    "Economic Evaluation"
  ],
  "image": "/projects/aromatics-pinch-analysis.png",
  "githubUrl": "",
  "keyEngineeringContributions": [
  {
    "title": "Pinch Analysis & Minimum Energy Requirements (MER)",
    "points": [
      "Identified pinch point at 145 °C using a ΔTmin of 10 °C.",
      "Determined Minimum Energy Requirements: Hot utility ≈ 54 MW, Cold utility ≈ 10 MW.",
      "Verified energy targets using HINT software."
    ]
  },
  {
    "title": "Heat Exchanger Network (HEN) Design",
    "points": [
      "Designed HEN by separating regions above and below the pinch.",
      "Applied Cp-rule and ΔT-rule to avoid cross-pinch violations.",
      "Developed and validated a network with 22 exchangers including heaters and coolers.",
      "Introduced 3 additional exchangers and replaced one shell-and-tube exchanger with a plate heat exchanger."
    ]
  },
  {
    "title": "Technical Improvement Proposal",
    "points": [
      "Evaluated two improvement options for Area 2: heater convection economizer (MP steam generation) and Packinox plate heat exchanger.",
      "Selected Packinox plate heat exchanger based on higher heat recovery, suitability for clean aromatics service, and significant reduction in heater duty."
    ]
  },
  {
    "title": "Energy & Economic Analysis",
    "points": [
      "Reduced heater duty by approximately 7.1 MMkcal/h, lowering fuel gas consumption.",
      "Estimated annual energy savings based on 8,000 hours per year operation.",
      "Performed CAPEX estimation (~4.6 million euros) and profitability analysis.",
      "Achieved Energy Intensity Index (EII) improvement to approximately 90 with a very short payback period of about one month."
    ]
  }
]
,
  "keyAchievements": [
    "Designed an MER-compliant heat exchanger network",
    "Identified high-impact energy efficiency retrofit in a fuel-intensive area",
    "Quantified impact using EII methodology",
    "Applied industrial heat integration tools and workflow",
    "Demonstrated strong CAPEX vs OPEX trade-off analysis"
  ]
}
,
  {
  "id": "fcc-propylene-recovery-c3-splitter",
  "title": "FCC Propylene Recovery Unit – C₃ Splitter Design",
  "description": "Design, simulation, and economic optimization of a propylene–propane splitter for an FCC gas plant, focusing on high-purity propylene recovery and minimum energy consumption.",
  "longDescription": "Designed and optimized an industrial propylene–propane splitter for an FCC unit gas plant using rigorous steady-state simulation. The project addressed the separation of closely boiling components, requiring careful optimization of column configuration, energy consumption, and operating pressure. The study covered the full workflow of an industrial distillation design: material balance, operating pressure selection, shortcut methods, rigorous simulation, equipment sizing, economic evaluation, and control strategy definition. Multiple column configurations were evaluated by varying the number of theoretical stages and tray locations to identify the most cost-effective solution while meeting strict product purity specifications. The final design achieved ≥95% propylene purity with controlled propylene losses, optimized energy demand, and a validated control scheme adapted to the absence of a distinct sensitive tray.",
  "category": "Distillation & Separation Processes",
  "date": "2024",
  "technologies": [
    "PRO/II (Rigorous distillation simulation)",
    "SRK Equation of State",
    "Shortcut Distillation Methods (Fenske / Underwood concepts)",
    "Excel (Material balance, tray efficiency, hydraulics, cost estimation)",
    "O’Connell Tray Efficiency Correlation",
    "Process Economics (CAPEX / OPEX evaluation)"
  ],
  "tags": [
    "Distillation Design",
    "Separation Processes",
    "Propylene Recovery",
    "Process Optimization",
    "Economic Evaluation",
    "PRO/II"
  ],
  "image": "/projects/c3-splitter.png",
  "githubUrl": "",
  "keyFeatures": [
    "Rigorous simulation of propylene–propane splitter using SRK thermodynamics",
    "Optimization of number of stages (1.5N-3N) based on energy and economic trade-offs",
    "Feed tray and side-draw tray optimization to minimize reboiler duty",
    "Full equipment sizing: column, trays, reboiler, and condenser, drums, pumps",
    "Detailed economic evaluation including CAPEX and OPEX ",
    "Control strategy design for distributed sensitivity (no single sensitive tray)"
  ],
  keyTechnicalDecisions: {
    operatingPressure: "Selected from reflux drum dew/bubble point constraints using air condensation",
    optimalConfiguration: {
      theoreticalStagesMultiplier: 2,
      theoreticalTrays: 114,
      realTrays: 132,
      trayEfficiencyPercent: 85
    },
    feedTrayLocation: 68,
    propyleneSideDrawLocation: 7,
    reboilerDuty: {
      value: 9.94,
      unit: "M kcal/h",
      case: "optimized"
    },
    unitSeparationCost: {
      value: 49.5,
      currency: "EUR",
      per: "ton of feed"
    }
  },
  controlAndOperability: {
    pressureControl: "Column overhead pressure control to stabilize VLE",
    flowControls: ["feed", "reflux", "side-draw", "bottoms"],
    compositionAnalyzers: {
      online: true,
      purpose: "Propylene purity control"
    },
    temperatureControl: {
      used: false,
      reason: "No single sensitive tray for temperature control"
    },
    airCondenserBypass: {
      type: "split-range",
      purpose: "Operational flexibility"
    }
  }
  // "keyAchievements": [
  //   "Achieved ≥95% propylene purity with controlled losses",
  //   "Optimized configuration with 114 theoretical trays",
  //   "Reduced reboiler duty to ~9.94 M kcal/h",
  //   "Achieved separation cost of approximately €49.5 per ton of feed",
  //   "Developed operable and stable control scheme"
  // ]
},
  {
  "id": "hds-unit-process-pid-design",
  "title": "Hydrodesulfurization (HDS) Unit – P&ID & Process Engineering Project",
  "description": "Engineering design of an industrial gasoil hydrodesulfurization unit, covering process simulation, equipment sizing, control philosophy, and full P&ID development.",
  "longDescription": "Developed the complete process and instrumentation design of a refinery Hydrodesulfurization (HDS) unit within an EPC engineering context, in collaboration with Technip Energies. The work covered the full workflow process simulation, heat and material balance to equipment sizing, control loops, safety systems (ESD), and final P&IDs, ensuring compliance with industrial standards and product specifications.",
  "category": "Process Engineering & P&ID Design",
  "date": "2024",
  "technologies": [
    "PRO/II",
    "Excel",
    "ASME Standards",
    "Nelson Curves",
    "Corrosion Allowance Methodology",
    "AutoCAD",
    "3D Plant Layout",
    "EPC Engineering Standards",
    "ICSS Design Principles",
    "SPMT Transport Engineering",
    "Structural & Foundation Design Methods"
  ],
  "tags": [
    "Process Engineering",
    "P&ID Development",
    "Hydrodesulfurization (HDS)",
    "Process Control",
    "Safety Systems",
    "PRO/II",
    "Plant Layout",
    "EPC Engineering",
    "Modular Design"
  ],
  "image": "/projects/hds-unit.png",
  "githubUrl": "",
  "keyFeatures": [
    "Full PFD and P&ID development for industrial HDS unit",
    "Rigorous PRO/II simulation under End-of-Run (EOR) conditions",
    "Reaction & separation section design (reactor, HP/LP separators, stripper, dryer)",
    "Control loop design (flow, pressure, temperature, level)",
    "Emergency Shutdown Diagram (ESD) and Cause & Effect chart",
    "Material Selection Diagram (MSD) based on temperature and corrosion",
    "Line sizing and equipment design calculations following industry standards"
  ],
  "keyEngineeringContributions": [
    {
      "title": "Plant Layout & Piping",
      "points": [
        "Developed the overall plot plan considering prevailing winds, safety distances, flare radiation zones, and constructability",
        "Designed HDS modular layout integrating stick-built units, pipe racks, and transportable modules",
        "Created 3D piping and equipment layouts ensuring NPSH compliance, maintenance accessibility, and PSV drainage"
      ]
    },
    {
      "title": "Materials & Corrosion Engineering",
      "points": [
        "Defined material selection philosophy for a coastal industrial C4 corrosive environment",
        "Evaluated external corrosion, CUI, and SCC risks based on operating conditions",
        "Selected materials and corrosion allowances using HMB-derived process data"
      ]
    },
    {
      "title": "Electrical & Instrumentation",
      "points": [
        "Designed single-line electrical distribution from 66 kV grid down to LV systems",
        "Sized transformers, switchgear, and power cables based on load lists and voltage-drop criteria",
        "Redesigned ICSS-based control room, including Smart Junction Boxes, cabinet optimization, and heat dissipation calculations"
      ]
    },
    {
      "title": "Equipment Engineering",
      "points": [
        "Reviewed vendor General Arrangement Drawings (GADs) for installation, maintenance, and interface completeness",
        "Performed technical bid evaluation and clarification for equipment packages (cooling tower, air dryer)"
      ]
    },
    {
      "title": "Weight Control & Transport",
      "points": [
        "Calculated module weight and center of gravity for transport, dry-in-place, and operating conditions",
        "Designed SPMT transport configuration, including dynamic loads, CoG uncertainty, and stability checks",
        "Selected suitable barge transport solution based on geometry and weight constraints"
      ]
    },
    {
      "title": "Structural & Foundations",
      "points": [
        "Performed beam stress analysis and section sizing under SPMT load cases",
        "Estimated structural steel weight for primary framing",
        "Compared shallow vs pile foundations considering soft soil, seismic loads, settlement, and cost",
        "Selected pile foundation solution based on ULS/SLS checks and economic evaluation"
      ]
    }
  ],
  "keyAchievements": [
    "Achieved 99.67% desulfurization meeting <50 ppm sulfur spec",
    "Optimized hydrogen-to-hydrocarbon control ratio to prevent coking",
    "Designed heat recovery network using feed/effluent exchangers",
    "Integrated safety interlocks for reactor, compressors, heaters, and separation section",
    "Applied Nelson curves, ASME B16.5, and corrosion allowance methodology"
  ]
}
,
  {
  "id": "dynamic-binary-distillation-simulation",
  "title": "Dynamic Simulation of a Binary Distillation Column",
  "description": "Dynamic modeling and simulation of a binary distillation column using Python, including stage-wise mass balances, VLE relations, and numerical solution of ODE/DAE systems.",
  "longDescription": "Developed a dynamic simulator for a binary distillation column using Python, reproducing the fundamental behavior industrial distillation  through stage-wise mass balances and vapor–liquid equilibrium (VLE) relationships. The model simulates transient evolution of liquid and vapor compositions along the column and explores the effect of relative volatility, reflux, and feed conditions. Advanced numerical methods were applied to solve stiff ordinary differential equations (ODEs) and differential–algebraic equations (DAEs) when temperature-dependent vapor pressure relations were introduced. The project bridges first-principles process modeling and numerical computation, similar in philosophy to commercial simulators.",
  "category": " Computational Modeling",
  "date": "2024",
  "technologies": [
    "Python",
    "NumPy",
    "SciPy",
    "Matplotlib",
    "Spyder IDE",
    
  ],
  "tags": [
    "Process Simulation",
    "Distillation Modeling",
    "Dynamic Systems",
    "Numerical Methods",
    "Python"
  ],
  "image": "/projects/dynamic-distillation.png",
  "githubUrl": "https://github.com/ChrisAbuga/Distillation-Project.git",
  "keyFeatures": [
    "Dynamic stage-by-stage mass balance model for a binary distillation column",
    "VLE modeling using relative volatility and Raoult’s law",
    "Time-dependent simulation of tray compositions",
    "Solution of stiff ODE systems using SciPy BDF solver",
    "Extension to DAE formulation including bubble-point temperature calculations",
    "Modular Python code structure suitable for further model extension"
  ],
  "keyAchievements": [
    "Implemented full first-principles dynamic model of binary distillation column",
    "Converted stage-wise mass balances and VLE relations into a solvable numerical system",
    "Simulated transient column behavior using stiff ODE and DAE solvers",
    "Built a Python-based framework comparable in structure to commercial simulators"
  ]
}

  
];
