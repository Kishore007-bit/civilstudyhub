import { Topic } from "../types";

export const topics: Topic[] = [
  // Engineering Mechanics
  {
    id: "force-systems",
    subjectId: "engineering-mechanics",
    title: "Force Systems & Equilibrium",
    description: "Understanding concurrent and non-concurrent force systems",
    order: 1,
  },
  {
    id: "friction",
    subjectId: "engineering-mechanics",
    title: "Friction & Applications",
    description: "Laws of friction and practical applications in engineering",
    order: 2,
  },
  {
    id: "centroid",
    subjectId: "engineering-mechanics",
    title: "Centroid & Center of Gravity",
    description: "Locating centroid of plane figures and composite bodies",
    order: 3,
  },
  {
    id: "moment-of-inertia",
    subjectId: "engineering-mechanics",
    title: "Moment of Inertia",
    description: "Second moment of area and its engineering significance",
    order: 4,
  },
  {
    id: "simple-machines",
    subjectId: "engineering-mechanics",
    title: "Simple Machines",
    description: "Mechanical advantage, velocity ratio, and efficiency",
    order: 5,
  },
  {
    id: "stress-strain",
    subjectId: "engineering-mechanics",
    title: "Stress and Strain Basics",
    description: "Introduction to material behavior under loading",
    order: 6,
  },

  // Engineering Mathematics
  {
    id: "matrices",
    subjectId: "engineering-mathematics",
    title: "Matrices & Determinants",
    description: "Matrix operations, inverse, and solving linear equations",
    order: 1,
  },
  {
    id: "differential-calculus",
    subjectId: "engineering-mathematics",
    title: "Differential Calculus",
    description: "Differentiation rules, maxima, minima, and applications",
    order: 2,
  },
  {
    id: "integral-calculus",
    subjectId: "engineering-mathematics",
    title: "Integral Calculus",
    description: "Integration techniques and definite integrals",
    order: 3,
  },
  {
    id: "differential-equations",
    subjectId: "engineering-mathematics",
    title: "Differential Equations",
    description: "First and second order differential equations",
    order: 4,
  },
  {
    id: "vector-calculus",
    subjectId: "engineering-mathematics",
    title: "Vector Calculus",
    description: "Gradient, divergence, curl, and line integrals",
    order: 5,
  },
  {
    id: "laplace-transforms",
    subjectId: "engineering-mathematics",
    title: "Laplace Transforms",
    description: "Transform techniques for solving differential equations",
    order: 6,
  },

  // Building Materials
  {
    id: "material-properties",
    subjectId: "building-materials",
    title: "Properties of Building Materials",
    description: "Physical and mechanical properties of construction materials",
    order: 1,
  },
  {
    id: "cement",
    subjectId: "building-materials",
    title: "Cement Types & Properties",
    description: "OPC, PPC, and specialty cements used in construction",
    order: 2,
  },
  {
    id: "concrete",
    subjectId: "building-materials",
    title: "Concrete Mix Design",
    description: "Proportioning, mixing, and curing of concrete",
    order: 3,
  },
  {
    id: "bricks",
    subjectId: "building-materials",
    title: "Bricks & Blocks",
    description: "Classification, manufacturing, and testing of bricks",
    order: 4,
  },
  {
    id: "timber",
    subjectId: "building-materials",
    title: "Timber & Its Uses",
    description: "Properties, defects, and preservation of wood",
    order: 5,
  },
  {
    id: "steel",
    subjectId: "building-materials",
    title: "Steel in Construction",
    description: "Types of steel, properties, and applications",
    order: 6,
  },

  // Environmental Science
  {
    id: "ecosystem",
    subjectId: "environmental-science",
    title: "Ecosystem Basics",
    description: "Components, types, and functions of ecosystems",
    order: 1,
  },
  {
    id: "water-pollution",
    subjectId: "environmental-science",
    title: "Water Pollution & Treatment",
    description: "Sources, effects, and treatment methods",
    order: 2,
  },
  {
    id: "air-pollution",
    subjectId: "environmental-science",
    title: "Air Pollution & Control",
    description: "Pollutants, monitoring, and control measures",
    order: 3,
  },
  {
    id: "solid-waste",
    subjectId: "environmental-science",
    title: "Solid Waste Management",
    description: "Collection, disposal, and recycling methods",
    order: 4,
  },
  {
    id: "eia",
    subjectId: "environmental-science",
    title: "Environmental Impact Assessment",
    description: "EIA process, methodology, and regulations",
    order: 5,
  },
  {
    id: "sustainability",
    subjectId: "environmental-science",
    title: "Sustainable Development",
    description: "Principles of sustainability in civil engineering",
    order: 6,
  },
];

export function getTopicsBySubject(subjectId: string): Topic[] {
  return topics
    .filter((topic) => topic.subjectId === subjectId)
    .sort((a, b) => a.order - b.order);
}

export function getTopicById(topicId: string): Topic | undefined {
  return topics.find((topic) => topic.id === topicId);
}

export function getAdjacentTopics(topicId: string): { prev?: Topic; next?: Topic } {
  const topic = getTopicById(topicId);
  if (!topic) return {};

  const subjectTopics = getTopicsBySubject(topic.subjectId);
  const currentIndex = subjectTopics.findIndex((t) => t.id === topicId);

  return {
    prev: currentIndex > 0 ? subjectTopics[currentIndex - 1] : undefined,
    next: currentIndex < subjectTopics.length - 1 ? subjectTopics[currentIndex + 1] : undefined,
  };
}
