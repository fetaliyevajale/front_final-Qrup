import React, { useState, useEffect } from "react";

export default function History() {
  const [chooses, setChooses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/history.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setChooses(data?.chooses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="choose">
      <div className="chooseLeft">
        <div className="dolor">
          <h3>Bizim Tarix</h3>
          <p>
            {" "}
            Şirkətimiz uzun illərdir ki, müştərilərinə peşəkar xidmətlər
            göstərir. Tariximiz dürüstlük, innovasiya və müştəri məmnuniyyəti
            prinsipləri üzərində qurulmuşdur. Hər addımda etibarlılıq və yüksək
            keyfiyyət ilə fərqlənmişik.
          </p>
        </div>
        {chooses?.map((choose, index) => (
          <div className="dataKey" key={index}>
            <div className="box">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <div className="title">
                <span>{choose.description}</span>
                <h5>{choose.title}</h5>
              </div>
            </div>
          </div>
        ))}

        <p>
          Şirkətimizin əsasını təşkil edən dəyərlər bizi bu günkü uğurlara
          aparıb. İllər ərzində əldə etdiyimiz təcrübə və müştərilərimizin
          dəstəyi sayəsində sektorun liderlərindən birinə çevrilmişik. Bizim
          üçün hər zaman əsas prioritet müştərilərimizin ehtiyaclarını
          qarşılamaq və onların güvənini qazanmaq olmuşdur.
        </p>
      </div>

      <div className="chooseRight">
        <img src="/imagesFile/Image (8).png" alt="Choose Us" />
      </div>
    </div>
  );
}
