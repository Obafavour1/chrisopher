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
  keyFeatures: string[];
  keyAchievements: string[];
}

export const projects: Project[] = [
  {
  "id": "ethylene-cracker-module",
  "title": "Ethylene Cracker Module – Multidisciplinary Engineering Design",
  "description": "Multidisciplinary engineering study of an ethylene cracker module covering layout, piping, materials, electrical, instrumentation, structural design, transport, and foundations.",
  "longDescription": "This project reproduces the engineering workflow of a large-scale ethylene cracker module, following EPC methodologies used in industrial projects. The work covered the full lifecycle from plot plan definition to module transportation and foundation selection, integrating process, mechanical, piping, electrical, instrumentation, civil, and structural disciplines. Key engineering constraints such as safety distances, corrosion environment, NPSH, weight control, seismic loads, constructability, and transport limitations were addressed using industry standards and real-world assumptions. The project was carried out in collaboration with Technip Energies, simulating real project interfaces, documentation, and engineering decision-making.",
  "category": "Process & Plant Engineering",
  "date": "February 2025",
  "technologies": [
    "AutoCAD",
    "3D Plant Layout / Piping CAD Tools",
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
  "keyFeatures": [
    "Plant layout and piping design considering safety distances, constructability, and maintenance",
    "Material and corrosion engineering for C4 coastal industrial environment",
    "Electrical distribution and ICSS-based instrumentation system design",
    "Vendor drawing review and equipment technical evaluation",
    "Module weight control, CoG calculation, and SPMT transport design",
    "Structural framing and foundation type selection using ULS/SLS criteria"
  ],
  "keyAchievements": [
    "Delivered a fully coordinated multidisciplinary module design",
    "Ensured compliance with EPC safety and corrosion standards",
    "Validated transport feasibility for a >3,000-ton module",
    "Performed engineering trade-off studies for layout, materials, and foundations"
  ]
},
  {
  "id": "aromatics-energy-efficiency-pinch",
  "title": "Energy Efficiency Improvement of an Aromatics Complex (Pinch Analysis)",
  "description": "Energy efficiency study of an aromatics complex using Pinch Analysis, HEN redesign, and economic evaluation to reduce fuel consumption and improve EII.",
  "longDescription": "This project focuses on improving the energy efficiency of an aromatics complex, particularly in the most fuel-intensive process area. Using Pinch Analysis and Minimum Energy Requirement (MER) concepts, an optimized Heat Exchanger Network (HEN) was designed to reduce hot utility demand while respecting minimum temperature approach constraints. The solution was evaluated both thermally and economically, including CAPEX estimation, fuel savings, Energy Intensity Index (EII) improvement, and payback analysis, following industrial heat integration methodology.",
  "category": "Energy Optimization & Heat Integration",
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
  "keyFeatures": [
    "Pinch point identification and MER targeting using ΔTmin = 10°C",
    "Heat Exchanger Network design with pinch rules compliance",
    "Evaluation of retrofit options including economizers and Packinox exchangers",
    "Thermal and economic performance assessment of improvement options",
    "Fuel gas consumption reduction analysis",
    "CAPEX and payback period estimation"
  ],
  "keyAchievements": [
    "Designed an MER-compliant heat exchanger network",
    "Identified high-impact energy retrofit opportunity",
    "Improved EII to approximately 90",
    "Achieved very short payback period of about one month",
    "Demonstrated strong CAPEX vs OPEX trade-off analysis"
  ]
}
,
  {
  "id": "fcc-propylene-recovery-c3-splitter",
  "title": "FCC Propylene Recovery Unit – C₃ Splitter Design",
  "description": "Design, simulation, and economic optimization of a propylene–propane splitter for an FCC gas plant, focusing on high-purity propylene recovery and minimum energy consumption.",
  "longDescription": "Designed and optimized an industrial propylene–propane splitter for an FCC unit gas plant using rigorous steady-state simulation. The project covered full industrial distillation design workflow including material balance, operating pressure selection, shortcut methods, rigorous simulation, equipment sizing, economic evaluation, and control strategy definition. Multiple configurations were evaluated to identify the most cost-effective solution while meeting strict product purity specifications.",
  "category": "Distillation & Separation Processes",
  "date": "2024",
  "technologies": [
    "PRO/II",
    "SRK Equation of State",
    "Shortcut Distillation Methods",
    "Excel",
    "O’Connell Tray Efficiency Correlation",
    "Process Economics"
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
    "Optimization of number of stages based on energy and economic trade-offs",
    "Feed tray and side-draw tray optimization",
    "Full equipment sizing including column, trays, reboiler, and condenser",
    "Detailed CAPEX and OPEX economic evaluation",
    "Control strategy design without a single sensitive tray"
  ],
  "keyAchievements": [
    "Achieved ≥95% propylene purity with controlled losses",
    "Optimized configuration with 114 theoretical trays",
    "Reduced reboiler duty to ~9.94 M kcal/h",
    "Achieved separation cost of approximately €49.5 per ton of feed",
    "Developed operable and stable control scheme"
  ]
},
  {
  "id": "hds-unit-process-pid-design",
  "title": "Hydrodesulfurization (HDS) Unit – P&ID & Process Engineering Project",
  "description": "Engineering design of an industrial gasoil hydrodesulfurization unit, covering process simulation, equipment sizing, control philosophy, and full P&ID development.",
  "longDescription": "Developed the complete process and instrumentation design of a refinery Hydrodesulfurization (HDS) unit within an EPC engineering context, in collaboration with Technip Energies. The work covered process simulation, heat and material balance, equipment sizing, control loops, safety systems, and final P&IDs, ensuring compliance with industrial standards and product specifications.",
  "category": "Process Engineering & P&ID Design",
  "date": "2024",
  "technologies": [
    "PRO/II",
    "Excel",
    "ASME Standards",
    "Nelson Curves",
    "Corrosion Allowance Methodology"
  ],
  "tags": [
    "Process Engineering",
    "P&ID Development",
    "Hydrodesulfurization (HDS)",
    "Process Control",
    "Safety Systems",
    "PRO/II"
  ],
  "image": "/projects/hds-unit.png",
  "githubUrl": "",
  "keyFeatures": [
    "Full PFD and P&ID development for industrial HDS unit",
    "Rigorous simulation under End-of-Run conditions",
    "Design of reactor, separators, stripper, and dryer",
    "Control loop and ESD system design",
    "Material selection and line sizing calculations",
    "Heat recovery integration using feed-effluent exchangers"
  ],
  "keyAchievements": [
    "Achieved 99.67% desulfurization meeting <50 ppm sulfur spec",
    "Optimized hydrogen-to-hydrocarbon ratio to prevent coking",
    "Integrated comprehensive safety interlocks",
    "Ensured compliance with EPC and refinery standards",
    "Delivered complete process and instrumentation documentation"
  ]
}
,
  {
  "id": "dynamic-binary-distillation-simulation",
  "title": "Dynamic Simulation of a Binary Distillation Column",
  "description": "Dynamic modeling and simulation of a binary distillation column using Python, including stage-wise mass balances, VLE relations, and numerical solution of ODE/DAE systems.",
  "longDescription": "Developed a dynamic simulator for a binary distillation column using Python, reproducing industrial distillation behavior through stage-wise mass balances and vapor–liquid equilibrium relationships. The model simulates transient evolution of tray compositions and evaluates effects of relative volatility, reflux, and feed conditions. Advanced numerical methods were applied to solve stiff ODE and DAE systems, bridging first-principles modeling and numerical computation.",
  "category": "Process Simulation & Computational Modeling",
  "date": "2024",
  "technologies": [
    "Python",
    "NumPy",
    "SciPy",
    "Matplotlib",
    "Spyder IDE",
    "Numerical Methods"
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
    "Dynamic stage-by-stage mass balance model",
    "VLE modeling using relative volatility and Raoult’s law",
    "Transient simulation of tray compositions",
    "Solution of stiff ODE systems using BDF solver",
    "Extension to DAE formulation with bubble-point calculations",
    "Modular Python architecture for model extension"
  ],
  "keyAchievements": [
    "Implemented full first-principles dynamic distillation model",
    "Converted physical laws into solvable numerical systems",
    "Simulated transient startup and operating behavior",
    "Built framework comparable to commercial simulators"
  ]
}
,
  
];
