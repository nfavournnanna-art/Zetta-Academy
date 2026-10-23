
import React from "react";

function OurServices() {

    const services = [
      {
        badge: "Flagship",
        title: "Immersive Bootcamps",
        details: [
          "Full-Stack Software Engineering",
          "UI/UX Design Systems",
          "Data Science & AI Engineering",
        ],
        cta: "Explore Cohorts",
      },

      {
        badge: "B2B Solutions",
        title: "Enterprise Upskilling",
        details: [
          "Custom Corporate Training",
          "Tech Stack Transitioning",
          "Team Efficiency Audits",
        ],
        cta: "Get Enterprise Quote",
      },
      {
        badge: "1-on-1 Coaching",
        title: "Elite Mentorship",
        details: [
          "Weekly Code Reviews",
          "Career Mapping & Strategy",
          "Technical Interview Prep",
        ],
        cta: "Book a Mentor",
      },
    ];
    

    return (
      <section className="services-section">
        <div className="services-header">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            Comprehensive, tailored pipelines engineered to scale technical
            talent and creative expertise.
          </p> <br />
          <div className="service-layout"> 
            {services.map((service, index) => (
              <div className="service-column" key={index}> 
                <span className="service-badge">{service.badge}</span> 
                <h3 className="service-column-title">{service.title}</h3>
                <ul className="service-list">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="service-item"> 
                      <span className="checkmark">✦</span>
                      {detail}
                    </li> 
                  ))}
                   
                </ul> 
                <button className="service-button">{service.cta}</button>
              </div> 
            ))}
            
          </div>
          
        </div>
      </section>
    );
}

export default OurServices