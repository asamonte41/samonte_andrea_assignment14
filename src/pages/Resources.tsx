import React, { useState } from "react";
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

const resourcesList: Resource[] = [
  {
    title: "React Docs",
    img: "/images/react-icon.png",
    summary: "Official documentation for React.",
    link: "[https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)",
  },
  {
    title: "TypeScript Handbook",
    img: "/images/ts-icon.png",
    summary: "Comprehensive guide to TypeScript.",
    link: "[https://www.typescriptlang.org/docs/handbook/intro.html](https://www.typescriptlang.org/docs/handbook/intro.html)",
  },
  {
    title: "Ruby on Rails",
    img: "/images/rails-icon.png",
    summary: "Official Rails guide for full-stack development.",
    link: "[https://guides.rubyonrails.org/](https://guides.rubyonrails.org/)",
  },
];

const Resources = () => {
  const [selected, setSelected] = useState("React");

  const options = [
    { label: "React", value: "React" },
    { label: "TypeScript", value: "TypeScript" },
    { label: "Ruby", value: "Ruby" },
  ];

  const filtered = resourcesList.filter((r) => r.title.includes(selected));

  return (
    <section className="section">
      {" "}
      <h2>Learning Resources</h2>
      <Dropdown
        label="Filter by Tech"
        name="resource"
        value={selected}
        onChange={(v) => setSelected(v)}
        options={options}
        required
      />
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
