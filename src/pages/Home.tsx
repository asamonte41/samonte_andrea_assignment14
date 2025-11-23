import React from "react";
import { HeroImage } from "../components/HeroImage";
import { Img } from "../components/Img";
import { Label } from "../components/Label";
import { Text } from "../components/Text";

const Home = () => {
  return (
    <>
      {" "}
      <div className="hero-section">
        {" "}
        <HeroImage src="/images/wp2.jpg" />{" "}
        <div className="hero-overlay">
          {" "}
          <h1 className="hero-title">Andrea Samonte</h1>{" "}
          <p className="hero-subtitle">Portfolio Assignment</p>{" "}
        </div>{" "}
      </div>
      <section className="section basic-info">
        <div className="basic-info-card fade-in">
          <div className="basic-info-img">
            <Img
              src="/images/me.jpg"
              alt="Andrea"
              width={160}
              height={160}
              rounded
            />
          </div>

          <div className="basic-info-content">
            <Label className="name-title">Andrea Samonte</Label>

            <Text className="role-title">
              Full-Stack Web Developer | UI/UX Designer
            </Text>

            <Text className="bio">
              Passionate about creating interactive web apps with clean code and
              intuitive interfaces.
            </Text>

            <div className="contact-list">
              <Text>📧 asamonte41@academic.rrc.ca</Text>
              <Text>💼 linkedin.com/in/andrea-samonte-2450b3381/</Text>
              <Text>💻 github.com/asamonte41</Text>
            </div>

            <div className="hobby-container">
              <span className="hobby-badge">🎨 Digital Art</span>
              <span className="hobby-badge">📸 Photography</span>
              <span className="hobby-badge">🍰 Baking</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
