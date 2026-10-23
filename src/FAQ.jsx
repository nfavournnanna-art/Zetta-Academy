import React, { useState } from "react";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

      const faqData = [
        {
          question: "Do I need prior coding or design experience?",
          answer:
            "Absolutely not. Our immersive bootcamps are systematically engineered for complete beginners. We start from absolute scratch and gradually scale into industry-level mastery.",
        },
        {
          question: "How long do the cohorts last and what is the schedule?",
          answer:
            "Our flagship bootcamps run for 12 weeks (full-time) or 24 weeks (part-time, nights and weekends) to seamlessly fit around your current job or university schedule.",
        },
        {
          question: "Is there real-world job assistance after graduation?",
          answer:
            "Yes! Graduates get lifetime access to our exclusive corporate partner network, intensive resume workshops, 1-on-1 technical mock interview prep, and direct portfolio reviews.",
        },
        {
          question: "Can I get a corporate discount for my engineering team?",
          answer:
            "Yes, our Enterprise Upskilling service offers customizable packages, private Slack communication lines, and tailored tech stacks depending on your team's size. Contact us for a quote.",
        },
    ];
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

   

    return (
      <section className="faq-section">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about starting your journey at Zetta
            Academy.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {/* Visual plus/minus chevron indicator */}
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>

                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
}

export default FAQ