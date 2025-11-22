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
          <p className="hero-subtitle">Portfolio Assignment</p>
          <Button onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}>
            Explore Portfolio
          </Button>
        </div>
      </div>

    {/* Basic Info */}
<section className="section basic-info">
  <div className="profile-container">
    {/* Profile Image */}
    <div className="profile-image">
      <Img
        src="/images/me.jpg"
        alt="Andrea Samonte"
        width={150}
        height={150}
        rounded
      />
    </div>

    {/* Profile Details */}
    <div className="profile-details">
      <Label className="profile-name">
        Andrea Samonte
      </Label>
      <Text className="profile-title">
        Full-Stack Web Developer | UI/UX Designer
      </Text>
      <Text className="profile-bio">
        Passionate about creating interactive web apps with clean code and intuitive interfaces. Experienced in React, TypeScript, Node.js, and Figma.
      </Text>

      {/* Contact Info */}
      <div className="contact-info">
        <Text>Email: <a href="mailto:asamonte41@academic.rrc.ca">asamonte41@academic.rrc.ca</a></Text>
        <Text>LinkedIn: <a href="https://linkedin.com/in/andrea-samonte-2450b3381/" target="_blank" rel="noopener noreferrer">linkedin.com/in/andrea-samonte-2450b3381/</a></Text>
        <Text>GitHub: <a href="https://github.com/asamonte41" target="_blank" rel="noopener noreferrer">github.com/asamonte41</a></Text>
      </div>

      {/* Hobbies */}
      <Text className="profile-hobbies">
        Hobbies: Digital Art | Photography | Baking
      </Text>
    </div>
  </div>
</section>


      {/* Work Section */}
      <section className="section work-section">
        <h2>Selected Projects</h2>
        <div className="cards-container">

          <Card className="work-card" title="Tattoo Shop Website" subtitle="HTML & CSS">
            <Img src="/images/web1.png" alt="Term 1 Website" width={200} height={120} rounded />
            <Text>Fictional Tattoo Website built for WebDev Term 1. Used my own illustrations to create contents.</Text>
            <div className="card-button-container">
              <a
                href="/PROJECT4_Andrea_Samonte/services.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>View Project</Button>
              </a>
            </div>
          </Card>

          <Card className="work-card" title="Illustration Portfolio Site" subtitle="HTML">
            <Img src="/images/web2.png" alt="Portfolio" width={200} height={120} rounded />
            <Text>Illustration Portfolio Project from Term 1. It showcases my digital artworks.</Text>
            <div className="card-button-container">
              <a
                href="/PROJECT2/competency1.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>View Project</Button>
              </a>
            </div>
          </Card>

          <Card className="work-card" title="Hayden Planetarium" subtitle="HTML & CSS">
            <Img src="/images/web3.png" alt="Design System" width={200} height={120} rounded />
            <Text> Duplicating a Web page assignment as close as possible using HTML and CSS only.</Text>
            <div className="card-button-container">
              <a
                href="/Project1_Andrea_Samonte (Project2_Edited)/Project1_AndreaSamonte.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>View Project</Button>
              </a>
            </div>
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
