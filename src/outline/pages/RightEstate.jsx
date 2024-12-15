import React, { useState } from "react";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="estateLeft">
        <img src="/imagesFile/photo2.jpg" alt="" />
        <div className="relativ">
          <img src="/imagesFile/photo1.jpg" alt="" />
        </div>
      </div>
      <div className="faq-right-content">
        <h2>Tez-tez Verilən Suallar</h2>
        <p>
          Tez-tez verilən suallar arasında bu sual çox yayılmışdır. Cavab tapmaq
          üçün burada müxtəlif məsələlərə toxunuruq və ən çox soruşulan suallara
          aydınlıq gətiririk
        </p>

        <div className="accordion">
          {[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ].map((question, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-header ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{question}</span>
                <i
                  className={`arrow ${activeIndex === index ? "rotate" : ""}`}
                ></i>
              </div>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <p>
                  Bu sual tez-tez müştərilərimiz tərəfindən verilən suallardan
                  biridir. Biz bu suallara cavab verərək, müştərilərimizin
                  məsələlərini ən yaxşı şəkildə izah edirik.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
