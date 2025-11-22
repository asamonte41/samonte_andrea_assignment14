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

function App() {
  const [level, setLevel] = useState("intermediate");
  const [tool, setTool] = useState("figma");
  const [featuredSkill, setFeaturedSkill] = useState("React");

  return (
    <div className="portfolio">

      {/* HERO IMAGE */}
      <HeroImage
        src="https://placehold.co/1200x500?text=Portfolio+Hero"
        alt="Portfolio top banner"
      />

      {/* ABOUT SECTION */}
      <section className="section">
        <Label>About Me</Label>
        <Text>
          I&apos;m a full stack web developer with a strong graphic design background.
          I enjoy creating pixel-perfect UIs, smooth UX flows, and writing clean code.
        </Text>

        <Button onClick={() => alert("Thanks for reading!")}>
          Learn More
        </Button>
      </section>

      {/* SKILL LEVEL */}
      <section className="section">
        <Label>Select Skill Level</Label>
        <Dropdown
  options={[
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
  ]}
  value={level}             // <- change "selected" to "value"
  onChange={(value) => setLevel(value)}
/>

<Dropdown
  options={[
    { label: "React", value: "React" },
    { label: "JavaScript", value: "JavaScript" },
    { label: "Node.js", value: "Node.js" },
    { label: "UI/UX", value: "UI/UX" },
    { label: "MongoDB", value: "MongoDB" },
  ]}
  value={featuredSkill}     // <- change "selected" to "value"
  onChange={(value) => setFeaturedSkill(value)}
/>

      </section>

      {/* TOOLS */}
      <section className="section">
        <Label>Preferred Design Tool</Label>
        <RadioButton
          name="tools"
          selectedValue={tool}
          onChange={(value) => setTool(value)}
          options={[
            { label: "Figma", value: "figma" },
            { label: "Illustrator", value: "ai" },
            { label: "Photoshop", value: "ps" },
          ]}
        />
      </section>

      {/* FEATURED SKILL */}
      <section className="section skills">
        <Label>Highlight a Skill:</Label>
        <Dropdown
          options={[
            { label: "React", value: "React" },
            { label: "JavaScript", value: "JavaScript" },
            { label: "Node.js", value: "Node.js" },
            { label: "UI/UX", value: "UI/UX" },
            { label: "MongoDB", value: "MongoDB" },
          ]}
          value={featuredSkill}
          onChange={(value) => setFeaturedSkill(value)}
        />
        <Text>Current selection: {featuredSkill}</Text>
      </section>

      {/* PROJECT CARD */}
      <section className="projects">
        <Card>
          <Img
            src="/me.jpg"
            alt="Andrea"
            width={130}
            height={130}
          />
          <Label>Sample Project</Label>
          <Text>
            A UX redesign focused on improving accessibility and visual hierarchy.
          </Text>
        </Card>
      </section>

      {/* CONTACT */}
      <section className="section contact">
        <Card>
          <Label>Let's Connect</Label>
          <Text>If you&apos;d like to work together or chat, feel free to reach out.</Text>
          <Button onClick={() => alert("Message Sent!")}>
            Contact Me
          </Button>
        </Card>
      </section>
    </div>
  );
}

export default App;
