import React, { useState, useEffect } from "react";

export default function Section() {
  const [chooses, setChooses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/choose.json");
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
          <h3>Ev ehtiyaclarınız üçün niyə bizi seçməlisiniz?</h3>
          <p>
            Ev ehtiyaclarınız üçün niyə bizi seçməlisiniz? Bizim mükəmməl
            xidmətlərimizlə həyatınızı daha asan və rahat edə biləcəyiniz
            üstünlüklər təqdim edirik. Keyfiyyətli və səmərəli həllərimizlə hər
            zaman yanınızdayıq
          </p>
        </div>
        {chooses?.map((choose, index) => (
          <div className="dataKey" key={index}>
            <div className="box">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <div className="title">
                <h4>{choose.title}</h4>
                <p>{choose.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="chooseRight">
        <img src="/imagesFile/Image (8).png" alt="Choose Us" />
      </div>
    </div>
  );
}
