import React, { useState } from "react";
import "./App.css";
import { HeroImage } from "./components/HeroImage";
import { Card } from "./components/Card";
import { Img } from "./components/Img";
import { Label } from "./components/Label";
import { Text } from "./components/Text";
import { Button } from "./components/Button";
import { Dropdown } from "./components/Dropdown";
import { RadioButton } from "./components/RadioButton";
import { TableRow } from "./components/Table/TableRow";
import { TableCell } from "./components/Table/TableCell";
import { TableFooter } from "./components/Table/TableFooter";

const App: React.FC = () => {
  const [selectedUtensil, setSelectedUtensil] = useState("Spoon");
  const [favoriteSkill, setFavoriteSkill] = useState("React");

  const dropdownOptions = [
    { label: "React", value: "React" },
    { label: "TypeScript", value: "TypeScript" },
    { label: "Figma", value: "Figma" },
  ];

  const radioOptions = [
    { label: "Spoon", value: "Spoon" },
    { label: "Fork", value: "Fork" },
    { label: "Spork", value: "Spork" },
  ];

  const skillList = ["React", "TypeScript", "CSS", "HTML", "Docker", "VSCode", "GitHub", "Figma"];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <HeroImage src="/images/wp2.jpg" alt="Hero banner" title="" subtitle="" />
        <div className="hero-overlay">
          <h1 className="hero-title">Andrea Samonte</h1>
          <p className="hero-subtitle">Front-End Developer & UI/UX Designer</p>
          <Button onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}>
            Explore Portfolio
          </Button>
        </div>
      </div>

      {/* Basic Info */}
      <section className="section">
        <Img src="/images/imfine.jpg" alt="Profile" width={150} height={150} rounded />
        <Label style={{ display: "block", fontSize: "1.5rem", marginTop: "1rem" }}>
          Andrea Samonte
        </Label>
        <Text style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
          Passionate about creating interactive web applications and intuitive user experiences.
        </Text>
      </section>

      {/* Work Section */}
      <section className="section" style={{ backgroundColor: "#f0f0f0" }}>
        <h2>Selected Projects</h2>
        <div className="cards-container">
          <Card title="UI Dashboard" subtitle="React & TypeScript">
            <Text>Interactive dashboard showing real-time analytics.</Text>
            <Img src="/images/project1.jpg" alt="Dashboard" width={200} height={120} />
            <Button style={{ marginTop: "1rem" }}>View Project</Button>
          </Card>
          <Card title="Portfolio Site" subtitle="React & CSS">
            <Text>A personal portfolio website demonstrating components and styling.</Text>
            <Img src="/images/project2.jpg" alt="Portfolio" width={200} height={120} />
            <Button style={{ marginTop: "1rem" }}>View Project</Button>
          </Card>
          <Card title="Design System" subtitle="Figma & CSS">
            <Text>Reusable component library and design system for web apps.</Text>
            <Img src="/images/project3.jpg" alt="Design System" width={200} height={120} />
            <Button style={{ marginTop: "1rem" }}>View Project</Button>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2>Technical Skills</h2>
        <div className="skills-container">
          {skillList.map((skill) => (
            <div
              key={skill}
              className="skill-badge"
              onClick={() => setFavoriteSkill(skill)}
            >
              {skill}
            </div>
          ))}
        </div>
        <Text style={{ marginTop: "1rem" }}>Favorite Skill: {favoriteSkill}</Text>
      </section>

      {/* Developer Setup Section */}
      <section className="section" style={{ backgroundColor: "#f0f0f0" }}>
        <h2>Developer Environment</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <TableCell isHeader>Tool</TableCell>
                <TableCell isHeader>Description</TableCell>
              </tr>
            </thead>
            <tbody>
              <TableRow cells={["VSCode", "Extensions: Prettier, ESLint, Dark Theme"]} />
              <TableRow cells={["Terminal", "Windows Terminal / PowerShell"]} />
              <TableRow cells={["Editor Font", "Fira Code, Size 14"]} />
            </tbody>
            <TableFooter colSpan={2}>
              <div style={{ textAlign: "center" }}>Recommended Setup for Front-End Development</div>
            </TableFooter>
          </table>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="section">
        <h2>Try Interactive Components</h2>
        <div className="interactive-section">
          <Dropdown
            label="Choose Technology"
            name="tech"
            required
            value={favoriteSkill}
            onChange={(val) => setFavoriteSkill(val)}
            options={dropdownOptions}
          />
          <RadioButton
            name="utensil"
            options={radioOptions}
            selectedValue={selectedUtensil}
            onChange={(val) => setSelectedUtensil(val)}
          />
          <Text>Selected Utensil: {selectedUtensil}</Text>
          <Button onClick={() => alert(`Keep coding with ${favoriteSkill}!`)}>
            Say Hello
          </Button>
        </div>
      </section>
    </div>
  );
};

export default App;
