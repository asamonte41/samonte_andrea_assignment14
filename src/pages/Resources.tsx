import React, { useState } from "react"; // React in scope for JSX
import { Img } from "../components/Img";
import { Dropdown } from "../components/Dropdown";
import { Text } from "../components/Text";
import { Label } from "../components/Label";

type Resource = {
  title: string;
  img: string;
  summary: string;
  link: string;
};

// List of resources
const resourcesList: Resource[] = [
  {
    title: "React Docs",
    img: "/images/react-icon.png",
    summary: "Official documentation for React.",
    link: "https://reactjs.org/docs/getting-started.html",
  },
  {
    title: "TypeScript Handbook",
    img: "/images/ts-icon.png",
    summary: "Comprehensive guide to TypeScript.",
    link: "https://www.typescriptlang.org/docs/handbook/intro.html",
  },
  {
    title: "Ruby on Rails",
    img: "/images/rails-icon.png",
    summary: "Official Rails guide for full-stack development.",
    link: "https://guides.rubyonrails.org/",
  },
];

const Resources: React.FC = () => {
  const [selected, setSelected] = useState<string>("React");

  const options = [
    { label: "React", value: "React" },
    { label: "TypeScript", value: "TypeScript" },
    { label: "Ruby", value: "Ruby" },
  ];

  const filtered = resourcesList.filter((r) => r.title.includes(selected));

  return (
    <section className="section">
      <h2>Learning Resources</h2>

      {/* Dropdown for filtering */}
      <Dropdown
        label="Filter by Tech"
        name="resource"
        value={selected}
        onChange={(v: string) => setSelected(v)}
        options={options}
        required
      />

      {/* Resource Cards */}
      <div className="resources-container">
        {filtered.map((resource) => (
          <div key={resource.title} className="resource-card">
            <Img
              src={resource.img}
              alt={resource.title}
              width={60}
              height={60}
              rounded
            />
            <div className="resource-info">
              <Label>{resource.title}</Label>
              <Text>{resource.summary}</Text>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                Visit Resource
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
