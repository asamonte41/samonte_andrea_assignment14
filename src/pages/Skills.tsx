import React, { useState } from "react";
import { Card, Text, Button } from "../components"; // Only using existing components

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<null | {
    name: string;
    description: string;
    category: string;
    tools: string;
  }>(null);

  const skills = [
    {
      name: "React",
      description:
        "A JavaScript library for building fast and interactive UIs.",
      category: "Front-End",
      tools: "React Router, Hooks, Zustand, Axios",
    },
    {
      name: "Node.js",
      description:
        "Server-side JavaScript runtime used to build scalable backend services.",
      category: "Backend",
      tools: "Express.js, JWT, MongoDB, REST APIs",
    },
    {
      name: "UI/UX",
      description: "Focused on designing intuitive and clean user experiences.",
      category: "Design",
      tools: "Figma, Adobe XD, Prototyping",
    },
    {
      name: "TypeScript",
      description:
        "A typed superset of JavaScript that enhances development reliability.",
      category: "Language",
      tools: "ts-node, type definitions, interfaces",
    },
  ];

  return (
    <section className="section skills-section">
      {/* Section Title */}
      <Text className="text-2xl font-bold mb-4">Skills</Text>

      {/* Skill Buttons */}
      <div className="flex gap-2 flex-wrap mb-4">
        {skills.map((skill) => (
          <Button
            key={skill.name}
            onClick={() => setSelectedSkill(skill)}
            className="px-3 py-1 rounded-lg hover:scale-105 transition-all duration-200"
          >
            {skill.name}
          </Button>
        ))}
      </div>

      {/* Skill Info Card */}
      {selectedSkill && (
        <Card className="mt-4 p-4" style={{ borderRadius: "12px" }}>
          <Text className="text-xl font-semibold">{selectedSkill.name}</Text>
          <Text className="mt-2">
            <strong>Description:</strong> {selectedSkill.description}
          </Text>
          <Text className="mt-1">
            <strong>Category:</strong> {selectedSkill.category}
          </Text>
          <Text className="mt-1">
            <strong>Tools:</strong> {selectedSkill.tools}
          </Text>

          <Button
            onClick={() => setSelectedSkill(null)}
            className="mt-3 text-sm underline text-blue-600"
          >
            Close
          </Button>
        </Card>
      )}
    </section>
  );
}
