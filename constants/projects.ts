export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  date: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  keyFeatures: string[];
  keyAchievements: string[];
}

export const projects: Project[] = [
  {
    id: "batch-distillation",
    title: "Batch Distillation Optimization",
    description: "Python-based optimization of batch distillation processes using MATLAB algorithms",
    longDescription: "Developed a comprehensive batch distillation simulator using Python with NumPy and SciPy. Implemented advanced optimization algorithms to minimize production time while maintaining product purity. The system reduced cycle time by 12% and improved energy efficiency.",
    category: "Process Simulation",
    date: "September 2023",
    technologies: ["Python", "MATLAB", "NumPy", "SciPy", "Matplotlib"],
    image: "/projects/batch-distillation.png",
    githubUrl: "https://github.com",
    keyFeatures: [
      "Real-time thermodynamic calculations",
      "Dynamic simulation with automatic control",
      "Multi-objective optimization",
      "Interactive visualization dashboard"
    ],
    keyAchievements: [
      "Reduced batch cycle time by 12%",
      "Improved product purity consistency to 99.5%",
      "Decreased energy consumption by 8%",
      "Automated manual control procedures"
    ]
  },
  {
    id: "heat-exchanger",
    title: "Heat Exchanger Network Synthesis",
    description: "Optimization of heat exchanger networks using Pinch Analysis and Python algorithms",
    longDescription: "Designed and optimized heat exchanger networks for a chemical manufacturing plant using Pinch Analysis methodology combined with Python optimization libraries. Achieved significant cost savings through improved energy integration and reduced heat transfer area.",
    category: "Optimization",
    date: "July 2023",
    technologies: ["Python", "MATLAB", "Aspen Plus","Pandas", "Optimization Algorithms"],
    image: "/projects/heat-exchanger.png",
    githubUrl: "https://github.com",
    keyFeatures: [
      "Optimized network configuration reduced energy costs by 22%",
      "Decreased capital investment for new equipment",
      "Improved overall plant thermal efficiency",
      "Created automated design selection tool"
    ],
    keyAchievements: [
      "Reduced annual energy costs by 15%",
      "Optimized 15+ heat exchangers",
      "Cut design time from 3 weeks to 1 week",
      "Automated network synthesis process",
    ]
  },
  {
    id: "process-monitoring",
    title: "Real-Time Process Monitoring Dashboard",
    description: "Interactive MATLAB dashboard for monitoring chemical reactor performance metrics",
    longDescription: "Built a comprehensive real-time monitoring dashboard in MATLAB that integrates with industrial sensors and databases. The system displays critical process parameters, trends, and alerts, enabling operators to make data-driven decisions.",
    category: "Automation",
    date: "May 2023",
    technologies: ["MATLAB", "SQL", "C++","Industrial Protocols", "Data Visualization"],
    image: "/projects/process-monitoring.png",
    githubUrl: "https://github.com/",
    keyFeatures: [
      "Real-time data acquisition from 20+ sensors",
      "Automated anomaly detection",
      "Historical data analysis and trending",
      "Predictive alerts for process deviations",
      "Export capabilities for regulatory compliance"
    ],
    keyAchievements: [
      "Integrated 20+ data sources in real-time",
      "Reduced operator response time by 40%",
      "Achieved 99.9% system uptime",
      "Improved data accuracy to 98.8%"
    ]
  },
  {
    id: "spc-system",
    title: "Statistical Process Control System",
    description: "Python-based SPC implementation for product quality control and trend analysis",
    longDescription: "Complete statistical toolkit for manufacturing quality assurance. Uses advanced statistics to monitor process stability and identify trends before they lead to defects.",
    category: "Data Analysis",
    date: "March 2023",
    technologies: ["Python", "SciPy", "Pandas","Matplotlib", "Statistical Analysis"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad3a?q=80&w=1000",
    githubUrl: "https://github.com",
    keyFeatures: [
      "Automated data collection and analysis",
      "Control limit calculations and visualization",
      "Capability index computations",
      "Root cause analysis tools",
      "Quality trend reporting"

    ],
    keyAchievements: [
      "Detected process issues 2 days earlier",
      "Reduced product defects by 15%",
      "Improved process capability to 1.5 Cpk",
      "Automated quality reporting"
    ]
  },
  {
    id: "reactor-kinetics",
    title: "Reactor Kinetics Modeling",
    description: "MATLAB-based modeling of complex reactor kinetics with parameter estimation",
    longDescription: "Developed comprehensive mathematical models for complex reactor kinetics including temperature effects, catalyst deactivation, and side reactions. Used parameter estimation techniques to validate models against experimental data.",
    category: "Modeling",
    date: "January 2023",
    technologies: ["MATLAB", "Simulink", "ODE Solvers","Parameter Estimation", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1532187875605-1ef6c237bbda?q=80&w=1000",
    githubUrl: "https://github.com",
    keyFeatures: [
      "Non-linear differential equation solving",
      "Parameter estimation and sensitivity analysis",
      "Validation against experimental data",
      "Predictive modeling for different conditions"
    ],
    keyAchievements: [
      "Model accuracy improved to 97%",
      "Predicted reactor behavior with 95% confidence",
      "Identified optimal operating conditions",
      "Reduced experimental testing time by 30%"
    ]
  },
  {
    id: "production-scheduling",
    title: "Production Scheduling Optimization",
    description: "Python optimization tool for multi-product batch scheduling and resource allocation",
    longDescription: "Created an advanced production scheduling system using Python and linear programming to optimize batch sequencing, minimize changeover times, and maximize equipment utilization. The system handles multiple product constraints and resource limitations.",
    category: "Optimization",
    date: "November 2022",
    technologies: ["Python", "PuLP", "Optimization", "Linear Programming", "Data Processing"],
    image: "https://images.unsplash.com/photo-1586762522777-62f741603515?q=80&w=1000",
    githubUrl: "https://github.com",
    keyFeatures: [
      "Mixed Integer Linear Programming (MILP) ",
      "Real-time schedule adjustments",
      "Constraint handling for equipment and materials",
      "Performance metrics tracking"
    ],
    keyAchievements: [
      "Increased production capacity by 18%",
      "Reduced changeover time by 25%",
      "Improved equipment utilization to 92%",
      "Saved 40+ hours/month in planning"
    ]
  }
];
