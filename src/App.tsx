import React, { useState } from "react";
import "./App.css";

// Components
import { HeroImage } from "./components/HeroImage";
import { Card } from "./components/Card";
import { Img } from "./components/Img";
import { TableRow } from "./components/Table/TableRow";
import { TableFooter } from "./components/Table/TableFooter";
import { TableCell } from "./components/Table/TableCell";
import { Button } from "./components/Button";
import { Label } from "./components/Label";
import { Text } from "./components/Text";
import { Dropdown } from "./components/Dropdown";
import { RadioButton, RadioButtonProps } from "./components/RadioButton";
import { Table } from "./components/Table";

function App() {
  const [selectedUtensil, setSelectedUtensil] = useState("Spoon");

  const options: RadioButtonProps["options"] = [
    { label: "Spoon", value: "Spoon" },
    { label: "Fork", value: "Fork" },
    { label: "Spork", value: "Spork" },
  ];

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {/* Hero Image */}
      <div style={{ position: "relative", textAlign: "center", color: "white", marginBottom: "2rem" }}>
        <HeroImage src="/images/wp2.jpg" alt="Hero banner" title="" subtitle="" />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <h1 style={{ margin: 0 }}>Portfolio: Business Systems Build & Testing</h1>
          <p>Showcasing course projects and skills</p>
        </div>
      </div>

      {/* Work / Projects Section */}
      <h2>My Work</h2>
      <Card title="Sample Project" subtitle="React Component Showcase">
        <Text>This is a description of a project I built using React components.</Text>
        <Img src="/images/imfine.jpg" alt="Project screenshot" width={200} height={200} rounded />
        <Button onClick={() => alert("View Project")}>View Project</Button>
      </Card>

      {/* Skills Section */}
      <h2>Skills & Tools</h2>
      <Card title="Frontend Development">
        <Text>Languages: HTML, CSS, JavaScript, TypeScript</Text>
        <Text>Frameworks: React</Text>
        <Text>Tools: VSCode, Git, Docker</Text>
      </Card>

      {/* Developer Setup Section */}
      <h2>Developer Setup</h2>
      <Card title="Preferred Editor Setup">
        <Text>VSCode with custom font: Fira Code</Text>
        <Text>Terminal setup: Windows Terminal or Git Bash</Text>
      </Card>

      {/* Radio Button Example */}
      <h2>Favorite Utensil (RadioButton Component)</h2>
      <RadioButton
        name="utensil"
        options={options}
        selectedValue={selectedUtensil}
        onChange={(value) => setSelectedUtensil(value)}
      />
      <Text style={{ marginTop: "1rem" }}>Selected utensil: {selectedUtensil}</Text>

      {/* Sample Table */}
      <h2>Sample Table</h2>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <table style={{ width: "80%", borderCollapse: "collapse", textAlign: "center" }}>
          <thead>
            <tr>
              {["Name", "Age", "Occupation"].map((header, index) => (
                <TableCell key={index} isHeader align="center">
                  {header}
                </TableCell>
              ))}
            </tr>
          </thead>
          <tbody>
            <TableRow cells={["Alice", 20, "Admin"]} />
            <TableRow cells={["Hannah", 45, "Assistant"]} />
            <TableRow cells={["Bob", 20, "HR"]} />
          </tbody>
          <TableFooter colSpan={3}>
            <div style={{ textAlign: "center" }}>Total Employees: 3</div>
          </TableFooter>
        </table>
      </div>
    </div>
  );
}

export default App;
