import React from "react";
import image1 from "./assets/image1.avif";
import image3 from "./assets/image3.avif";
import img2 from "./assets/img2.jpg";

function Testimonials() {
  const starColors = [
    "#fab67e",
    "#e09146",
    "#c95c03",
    "rgb(206, 94, 20)",
    "rgb(211, 49, 0)",
  ];

  const reviews = [
    {
      avatar: <img src={image1} alt="" />,
      name: "Sarah Jerkins",
      title: "Cyber security",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, iste, aliquid velit eligendi, asperiores atque nam repellendus recusandae nesciunt illo iusto tempore quis non consequatur in est perspiciatis rem. Tempore.",
    },

    {
      avatar: <img src={image3} />,
      name: "Jerry Hopper",
      title: "Software Engineer",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, iste, aliquid velit eligendi, asperiores atque nam repellendus recusandae nesciunt illo iusto tempore quis non consequatur in est perspiciatis rem. Tempore.",
    },

    {
      avatar: <img src={img2} />,
      name: "Maholm Alex",
      title: "Data Analyst",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, iste, aliquid velit eligendi, asperiores atque nam repellendus recusandae nesciunt illo iusto tempore quis non consequatur in est perspiciatis rem. Tempore.",
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2 className="testimonial-header-title ">
          What our past students say
        </h2>
        <p className="testimonials-header-subtitle">reviews of our past students and their view about us</p>
      </div>

      <div className="testimonial-grid">
        {reviews.map((item, index) => (
          <div className="testimonial-card">
            {item.avatar}

            <h3 className="testimonial-card-name">{item.name}</h3>
            <h4 className="testimonial-card-title">{item.title}</h4>
            <p className="testiomonial-card-desc">{item.description}</p>
            <span
              className="testimonial-card-rating "
              aria-label="5 colored stars"
                >
                    Rating:  
              {starColors.map((color, index) => {
                return (
                  <span
                    key={index}
                    style={{
                      color: color,
                      fontSize: "24px",
                      marginRight: "4px",
                    }}
                  >
                     ★
                  </span>
                );
              })}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
