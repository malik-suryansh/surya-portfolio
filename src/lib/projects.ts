export type Project = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  body: string[];
  results?: string[];
  technologies: string[];
  year: string;
};

export const projects: Project[] = [
  {
    slug: "building-footprint-segmentation",
    name: "Building Footprint Segmentation",
    tagline: "Extracting urban structures from satellite imagery.",
    year: "2024",
    intro:
      "Building footprint extraction remains one of the most important challenges in geospatial intelligence, urban planning, and infrastructure mapping.",
    body: [
      "This project focuses on semantic segmentation of satellite imagery using transfer learning and deep neural networks. The goal was to accurately identify and extract building footprints from complex urban environments while working with limited and heterogeneous datasets.",
      "The system was trained on multi-source satellite imagery and optimized for Indian urban landscapes, where building density, roof structures, and image quality present unique challenges.",
    ],
    results: [
      "89% Overall Accuracy",
      "80% Intersection over Union (IoU)",
      "Transfer-learning-based architecture",
      "Optimized for limited computational resources",
    ],
    technologies: ["Python", "PyTorch", "ResNet-50", "RefineNet", "OpenCV", "Geospatial Data Processing"],
  },
  {
    slug: "rl-semg-denoising",
    name: "Reinforcement Learning for sEMG Denoising",
    tagline: "Teaching an agent to clean noisy biological signals.",
    year: "2024",
    intro:
      "Surface electromyography (sEMG) signals are critical for prosthetic control systems, but they are often corrupted by motion artifacts and ECG interference.",
    body: [
      "This project explores a reinforcement learning approach to signal denoising by combining Deep Q-Networks with adaptive wavelet thresholding.",
      "Instead of relying on fixed filtering rules, the agent learns how to optimize denoising strategies dynamically based on signal conditions. The result is a system capable of removing significant noise while preserving important muscle activation information.",
    ],
    results: [
      "85% Noise Suppression",
      "Preserved muscle activation patterns",
      "Generalized across multiple noise levels",
      "Improved signal quality for downstream applications",
    ],
    technologies: ["Python", "TensorFlow", "Reinforcement Learning", "DQN", "Wavelet Transform", "Signal Processing"],
  },
  {
    slug: "xai-hand-gesture",
    name: "Explainable AI for Hand Gesture Recognition",
    tagline: "Understanding why models make decisions.",
    year: "2023",
    intro:
      "Most machine learning systems focus exclusively on accuracy. This project explored a different question: can we understand why a model predicts a particular hand gesture?",
    body: [
      "Using surface electromyography signals collected from hand movements, multiple machine learning models were trained and compared. LIME-based explanations were then used to identify which signal characteristics influenced each model's predictions.",
      "The result was an interpretable machine learning framework that balanced predictive performance with transparency. This work was later published at an IEEE conference.",
    ],
    results: undefined,
    technologies: ["Python", "Scikit-Learn", "LIME", "Random Forest", "Gradient Boosting", "Explainable AI"],
  },
  {
    slug: "epc-intelligence-platform",
    name: "EPC Project Intelligence Platform",
    tagline: "Tracking engineering projects through data.",
    year: "2024",
    intro:
      "Large engineering, procurement, and construction projects generate enormous amounts of operational information.",
    body: [
      "This project involved designing a web-based platform for monitoring project progress across multiple stages including engineering, procurement, construction, and commissioning.",
      "The goal was to provide stakeholders with real-time visibility into project status while reducing reporting overhead and improving decision making.",
    ],
    results: undefined,
    technologies: ["Python", "Web Development", "Database Systems", "Project Analytics"],
  },
  {
    slug: "pos-system",
    name: "Point of Sale System",
    tagline: "Retail software built from the ground up.",
    year: "2022",
    intro: "A complete Point of Sale system designed for sports retail operations.",
    body: [
      "The platform managed inventory, sales transactions, employee records, customer relationships, and multi-store operations through a unified interface.",
      "The project served as an early introduction to designing software systems that solve practical business problems.",
    ],
    results: undefined,
    technologies: ["Java", "Swing", "MySQL", "JDBC"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
