import React from "react";
import HeroImage from './assets/HeroImage.jpg';

function MyHero() {
    return (
      <section className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Gateway to Tech and Creative
            <span className="highlight"> Mastery</span>
          </h1>
          <p className="hero-subtitle">
            Join an elite community of developers, engineers, and creators. Get
            hands-on mentorship, build real-world software, and launch your
            career in the tech industry from scratch. 
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
            </div>
            <div className="hero-image-wrapper"><img src={HeroImage} alt="Hero image" className="hero-image"/></div>
      </section>
    );
}

export default MyHero