export type Note = {
  slug: string;
  title: string;
  body: string;
};

export const notes: Note[] = [
  {
    slug: "interpretability-vs-model-size",
    title: "Why Interpretability Will Matter More Than Model Size",
    body: "As models become larger and more powerful, understanding their decisions becomes increasingly important. Accuracy alone is rarely enough when systems affect real-world outcomes.",
  },
  {
    slug: "lessons-from-imperfect-data",
    title: "Lessons from Training Segmentation Models on Imperfect Data",
    body: "Most datasets are messy. Real progress often comes not from architecture changes but from improving data quality, preprocessing, and evaluation methodology.",
  },
  {
    slug: "rl-beyond-games",
    title: "Reinforcement Learning Beyond Games",
    body: "The most interesting applications of reinforcement learning are often found outside benchmark environments—in robotics, healthcare, optimization, and adaptive control systems.",
  },
  {
    slug: "future-of-geospatial-intelligence",
    title: "The Future of Geospatial Intelligence",
    body: "Satellite imagery, foundation models, and large-scale data processing are changing how we understand cities, infrastructure, and environmental systems.",
  },
  {
    slug: "ai-with-limited-compute",
    title: "Building AI Systems with Limited Compute",
    body: "Constraints force creativity. Some of the most effective machine learning solutions come from careful engineering rather than larger hardware budgets.",
  },
];
