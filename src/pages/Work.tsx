import React from "react";
import { Card, Text, Img, Button } from "../components";

interface Project {
  title: string;
  subtitle: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
  link: string;
}

const Work: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Tattoo Shop Website",
      subtitle: "HTML & CSS",
      imgSrc: "/images/web1.png",
      imgAlt: "Term 1 Website",
      description:
        "Fictional Tattoo Website built for WebDev Term 1. Used my own illustrations to create contents.",
      link: "/PROJECT4_Andrea_Samonte/services.html",
    },
    {
      title: "Illustration Portfolio Site",
      subtitle: "HTML",
      imgSrc: "/images/web2.png",
      imgAlt: "Portfolio",
      description:
        "Illustration Portfolio Project from Term 1. It showcases my digital artworks.",
      link: "/PROJECT2/competency1.html",
    },
    {
      title: "Hayden Planetarium",
      subtitle: "HTML & CSS",
      imgSrc: "/images/web3.png",
      imgAlt: "Design System",
      description:
        "Duplicating a Web page assignment as close as possible using HTML and CSS only.",
      link: "/Project1_Andrea_Samonte (Project2_Edited)/Project1_AndreaSamonte.html",
    },
  ];

  return (
    <section className="section work-section">
      {/* Section Title */}
      <Text className="text-2xl font-bold mb-4">Selected Projects</Text>

      {/* Project Cards */}
      <div className="cards-container flex gap-4 flex-wrap">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="work-card p-4"
            style={{ borderRadius: "12px" }}
          >
            <Text className="font-semibold text-lg">{project.title}</Text>
            <Text className="text-sm text-gray-500 mb-2">
              {project.subtitle}
            </Text>
            <Img
              src={project.imgSrc}
              alt={project.imgAlt}
              width={200}
              height={120}
              rounded
            />
            <Text className="mt-2">{project.description}</Text>
            <div className="card-button-container mt-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button>View Project</Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Work;
