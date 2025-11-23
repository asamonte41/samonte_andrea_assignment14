import React from "react";

import "../App.css"; // Make sure your Work CSS is included here

export default function Work() {
  const projects = [
    {
      title: "Tattoo Shop Website",
      subtitle: "HTML & CSS",
      imgSrc: "/images/web1.png",
      imgAlt: "Tattoo Shop Website",
      description:
        "Fictional Tattoo Website built for WebDev Term 1. Used my own illustrations to create contents.",
      tools: ["HTML", "CSS", "Illustrator"],
      link: "/PROJECT4_Andrea_Samonte/services.html",
    },
    {
      title: "Illustration Portfolio Site",
      subtitle: "HTML",
      imgSrc: "/images/web2.png",
      imgAlt: "Portfolio",
      description:
        "Illustration Portfolio Project from Term 1. It showcases my digital artworks.",
      tools: ["HTML", "CSS", "Photoshop"],
      link: "/PROJECT2/competency1.html",
    },
    {
      title: "Hayden Planetarium",
      subtitle: "HTML & CSS",
      imgSrc: "/images/web3.png",
      imgAlt: "Design System",
      description:
        "Duplicating a Web page assignment as close as possible using HTML and CSS only.",
      tools: ["HTML", "CSS"],
      link: "/Project1_Andrea_Samonte (Project2_Edited)/Project1_AndreaSamonte.html",
    },
  ];

  return (
    <div className="work-page">
      <h1 className="page-title">Selected Projects</h1>

      <div className="work-cards-container">
        {projects.map((project, index) => (
          <div key={project.title} className={`work-card work-card-${index}`}>
            <div className="work-image-container">
              <img
                src={project.imgSrc}
                alt={project.imgAlt}
                className="work-image"
              />
            </div>

            <h2 className="work-title">{project.title}</h2>

            <p className="work-subtitle">{project.subtitle}</p>

            <p className="work-description">{project.description}</p>

            <div className="work-tools">
              {project.tools.map((tool) => (
                <span key={tool} className="tool-badge">
                  {tool}
                </span>
              ))}
            </div>

            <div className="work-button-container">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <button className="work-button">View Project ✨</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
