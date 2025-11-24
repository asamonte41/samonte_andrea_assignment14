import React from "react";
import { HeroImage } from "../components/HeroImage";
import { Img } from "../components/Img";
import { Label } from "../components/Label";
import { Text } from "../components/Text";

const Home = () => {
  return (
    <>
      {/* ✨ Hero Section */}
      <div className="home-hero-section">
        <HeroImage src="/images/header.png" />
        <div className="home-hero-overlay">
          <h1 className="page-title">Portfolio Assignment</h1>
          <p className="home-hero-subtitle">
            Business Systems Build and Testing
          </p>
        </div>
      </div>

      {/* 🍡 Basic Info Card */}
      <section className="home-info">
        <div className="home-info-card">
          {/* Profile Image */}
          <div className="home-profile-img">
            <Img
              src="/images/me.jpg"
              alt="Andrea"
              width={200}
              height={300}
              rounded
            />
          </div>

          {/* Info Content */}
          <div className="home-info-details">
            <Label className="home-name">Andrea Samonte</Label>

            <Text className="home-role">
              Full-Stack Web Developer | Graphic Designer
            </Text>

            <Text className="home-bio">
              Passionate about creating interactive web apps with clean code and
              intuitive interfaces. Building beautiful things that work well is
              my favorite thing!
            </Text>

            {/* Contact */}
            <div className="home-contact">
              <Text>📧 asamonte41@academic.rrc.ca</Text>
              <Text>💼 linkedin.com/in/andrea-samonte-2450b3381/</Text>
              <Text>💻 github.com/asamonte41</Text>
            </div>

            {/* Hobbies */}
            <div className="home-hobbies">
              <span className="home-hobby-badge">🎨 Digital Art</span>
              <span className="home-hobby-badge">📸 Photography</span>
              <span className="home-hobby-badge">🍰 Baking</span>
            </div>
          </div>
        </div>

        {/* Sparkles floating */}
        <div className="home-sparkle sparkle-1">₊⊹</div>
        <div className="home-sparkle sparkle-2">⋆˚꩜｡</div>
        <div className="home-sparkle sparkle-3">⋆˚✿˖°</div>
      </section>
    </>
  );
};

export default Home;
