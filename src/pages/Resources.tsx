import React, { useState } from "react";
import "../App.css";
/*hi this is for testing the workflow */
/*hi this is for testing 2*/

type Resource = {
  title: string;
  img: string;
  summary: string;
  link: string;
  category: string;
};

const resourcesList: Resource[] = [
  {
    title: "React Docs",
    img: "/images/react.png",
    summary: "Official documentation for React.",
    link: "https://reactjs.org/docs/getting-started.html",
    category: "Development",
  },
  {
    title: "TypeScript Handbook",
    img: "/images/typescript.png",
    summary: "Comprehensive guide to TypeScript.",
    link: "https://www.typescriptlang.org/docs/handbook/intro.html",
    category: "Development",
  },
  {
    title: "Ruby on Rails",
    img: "/images/rails.png",
    summary: "Official Rails guide for full-stack development.",
    link: "https://guides.rubyonrails.org/",
    category: "Development",
  },
  {
    title: "YouTube",
    img: "/images/yt.png",
    summary: "Video tutorials for learning coding and design.",
    link: "https://www.youtube.com/",
    category: "Learning",
  },
  {
    title: "Canva",
    img: "/images/canva.png",
    summary: "Create visual templates for web and social media.",
    link: "https://www.canva.com/",
    category: "Design",
  },
  {
    title: "Procreate",
    img: "/images/pc.png",
    summary: "Digital illustration app for making artwork and assets.",
    link: "https://procreate.art/",
    category: "Design",
  },
  {
    title: "W3Schools",
    img: "/images/w3s.png",
    summary: "Online coding tutorials for web development.",
    link: "https://www.w3schools.com/",
    category: "Learning",
  },
  {
    title: "Google Fonts",
    img: "/images/gfonts.png",
    summary: "Free library of fonts to use in web projects.",
    link: "https://fonts.google.com/",
    category: "Design",
  },
  {
    title: "Color Hunt",
    img: "/images/colorhunt.png",
    summary: "Find color palettes and inspiration for design projects.",
    link: "https://colorhunt.co/",
    category: "Design",
  },
  {
    title: "VSCode",
    img: "/images/vscode.png",
    summary: "Powerful code editor for development.",
    link: "https://code.visualstudio.com/",
    category: "Tools",
  },
  {
    title: "Jupyter Notebook",
    img: "/images/jupy.png",
    summary: "Interactive computing environment for Python and data science.",
    link: "https://jupyter.org/",
    category: "Tools",
  },
  {
    title: "MySQL",
    img: "/images/mysql.png",
    summary: "Relational database management system.",
    link: "https://www.mysql.com/",
    category: "Development",
  },
  {
    title: "VirtualBox",
    img: "/images/vb.png",
    summary: "Run virtual machines for different OS and testing environments.",
    link: "https://www.virtualbox.org/",
    category: "Tools",
  },
  {
    title: "Docker Desktop",
    img: "/images/docker.png",
    summary: "Containerization platform for development and deployment.",
    link: "https://www.docker.com/products/docker-desktop",
    category: "Tools",
  },
];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Development", "Design", "Learning", "Tools"];

  const filtered =
    selectedCategory === "All"
      ? resourcesList
      : resourcesList.filter((r) => r.category === selectedCategory);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="resources-page">
      <h1 className="page-title">Resources</h1>

      <div className="resources-filter-section">
        <div className="filter-card">
          <div className="filter-header">
            <span className="filter-icon">⋆˙⟡</span>
            <label className="filter-label">Choose Category</label>
            <span className="filter-icon">⋆˙⟡</span>
          </div>

          <div className="dropdown-wrapper">
            <select
              className="resources-dropdown"
              value={selectedCategory}
              onChange={handleSelect}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All"
                    ? "All Resources"
                    : `${getCategoryEmoji(cat)} ${cat}`}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-count">
            Showing {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      <div className="resources-grid">
        {filtered.map((resource, index) => (
          <div
            key={resource.title}
            className="resource-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="resource-image-wrapper">
              <img
                src={resource.img}
                alt={resource.title}
                className="resource-image"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/80/ff69b4/ffffff?text=?";
                }}
              />
              <span className="resource-category-badge">
                {getCategoryEmoji(resource.category)}
              </span>
            </div>

            <div className="resource-content">
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-summary">{resource.summary}</p>

              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
              >
                <span>Visit Resource</span>
                <span className="link-arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="no-results">
          <span className="no-results-icon">🔍</span>
          <p>No resources found in this category!</p>
        </div>
      )}
    </div>
  );
};

function getCategoryEmoji(category: string): string {
  const emojiMap: { [key: string]: string } = {
    Development: "💻",
    Design: "🎨",
    Learning: "📖",
    Tools: "🛠️",
  };
  return emojiMap[category] || "✨";
}

export default Resources;
