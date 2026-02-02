import { Subject } from "../types";

export const subjects: Subject[] = [
  {
    id: "engineering-mechanics",
    name: "Engineering Mechanics",
    shortName: "Mechanics",
    description: "Force systems, equilibrium, friction, and structural analysis fundamentals",
    icon: "⚙️",
    topicCount: 6,
  },
  {
    id: "engineering-mathematics",
    name: "Engineering Mathematics",
    shortName: "Mathematics",
    description: "Calculus, matrices, differential equations, and vector analysis",
    icon: "📐",
    topicCount: 6,
  },
  {
    id: "building-materials",
    name: "Building Materials",
    shortName: "Materials",
    description: "Properties of cement, concrete, steel, timber, and construction materials",
    icon: "🧱",
    topicCount: 6,
  },
  {
    id: "environmental-science",
    name: "Environmental Science",
    shortName: "Environment",
    description: "Ecosystems, pollution control, waste management, and sustainability",
    icon: "🌿",
    topicCount: 6,
  },
];

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find((subject) => subject.id === id);
}
