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
      <h3>Why Choose Us for Your House Needs?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
        {chooses?.map((choose, index) => (
          <div className="dataKey" key={index}>
            <div className="box">
              <div className="ground">
                <i className="fa-solid fa-check" style={{color:"#FFF"}}></i>
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
