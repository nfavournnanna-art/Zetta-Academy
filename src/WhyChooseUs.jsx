import React from "react";

function WhyChooseUs() {
  const features = [
    {
      icon: "⚡",
      title: "Zetta-Scale Learning",
      description:
        "Master massive, complex tech and creative concepts through highly optimized, bite-sized interactive modules.",
    },
    {
      icon: "🚀",
      title: "Project-Driven Curriculum",
      description:
        "Skip theoretical fluff. Build production-grade software applications and clean design portfolios from day one.",
    },
    {
      icon: "👨‍💻",
      title: "Elite Mentorship",
      description:
        "Get direct, real-world code reviews and strategy feedback from experienced industry professionals.",
    },
    {
      icon: "💼",
      title: "Career Acceleration",
      description:
        "Access our exclusive partner network, resume workshops, and interview prep designed to land you top-tier roles.",
    },
  ];
  return (
    <section className="why-choose-us-section">
      <div className="section-header">
        <h2 className="section-title">
          Why Choose <span className="logo-main-inline">ZETTA ACADEMY</span>?
        </h2>
        <p className="section-subtitle">
          Engineered to transform ambitious absolute beginners into
          industry-ready experts.
        </p>
      </div>
{/* For the features card */}
      <div className="features-grid">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            <div className="features-icon">{item.icon}</div>
            <h3 className="feature-card-title">{item.title}</h3>
            <p className="feature-card-desc">{item.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default WhyChooseUs;
