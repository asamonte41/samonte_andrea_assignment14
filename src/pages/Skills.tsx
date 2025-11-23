import React, { useState } from "react";
import "../App.css";

interface Skill {
  name: string;
  description: string;
  category: string;
  tools: string[];
}

const skills: Skill[] = [
  {
    name: "React",
    description: "Building interactive UI with reusable components.",
    category: "Frontend",
    tools: ["React", "Vite", "TypeScript", "CSS Modules"],
  },
  {
    name: "UI/UX",
    description: "User-centered design focused on accessibility and emotion.",
    category: "Design",
    tools: ["Figma", "Adobe XD", "Miro"],
  },
  {
    name: "Web Development",
    description: "Full-stack websites using modern standards.",
    category: "Full Stack",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    name: "Python",
    description:
      "Versatile programming language for web, scripting, and data science.",
    category: "Backend / Language",
    tools: ["Python 3", "Flask", "Django", "Pandas", "NumPy"],
  },
  {
    name: "Git/GitHub",
    description: "Version control and collaboration for projects.",
    category: "Dev Tools",
    tools: ["Git", "GitHub", "Branches", "Pull Requests"],
  },
  {
    name: "Digital Art / Illustration",
    description: "Creating artwork and assets for web and design projects.",
    category: "Design",
    tools: ["Procreate", "Adobe Illustrator", "Photoshop"],
  },
  {
    name: "Photography",
    description: "Capturing and editing photos with composition and style.",
    category: "Design / Hobby",
    tools: ["DSLR", "Lightroom", "Photoshop"],
  },
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState<string>("description");

  const currentSkill = skills[currentIndex];

  const nextSkill = () => {
    setCurrentIndex((prev) => (prev + 1) % skills.length);
    setSelectedTab("description");
  };

  const prevSkill = () => {
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
    setSelectedTab("description");
  };

  return (
    <div className="skills-page">
      <h1 className="page-title">My Skills</h1>

      <div className="skills-showcase">
        <button className="nav-button nav-button-left" onClick={prevSkill}>
          ❮
        </button>

        <div className="skill-display-card">
          <div className="skill-header">
            <h2 className="skill-title">{currentSkill.name}</h2>
            <span className="skill-icon">✿</span>
          </div>

          <div className="skill-counter">
            {currentIndex + 1} / {skills.length}
          </div>

          <div className="skill-radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="skill-view"
                value="description"
                checked={selectedTab === "description"}
                onChange={() => setSelectedTab("description")}
              />
              <span className="radio-label">📝 About</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="skill-view"
                value="category"
                checked={selectedTab === "category"}
                onChange={() => setSelectedTab("category")}
              />
              <span className="radio-label">🏷️ Category</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="skill-view"
                value="tools"
                checked={selectedTab === "tools"}
                onChange={() => setSelectedTab("tools")}
              />
              <span className="radio-label">🛠️ Tools</span>
            </label>
          </div>

          <div className="skill-content">
            {selectedTab === "description" && (
              <div className="content-box">
                <p className="content-text">{currentSkill.description}</p>
              </div>
            )}

            {selectedTab === "category" && (
              <div className="content-box content-center">
                <div className="category-badge">{currentSkill.category}</div>
              </div>
            )}

            {selectedTab === "tools" && (
              <div className="content-box">
                <div className="tools-grid">
                  {currentSkill.tools.map((tool) => (
                    <span key={tool} className="tool-item">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="skill-dots">
            {skills.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setSelectedTab("description");
                }}
              />
            ))}
          </div>
        </div>

        <button className="nav-button nav-button-right" onClick={nextSkill}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Skills;
