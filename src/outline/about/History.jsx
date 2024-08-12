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
      <h3>Our History</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
        {chooses?.map((choose, index) => (
          <div className="dataKey" key={index}>
            <div className="box">
              <div className="ground">
                <i className="fa-solid fa-check" style={{color:"#FFF"}}></i>
              </div>
              <div className="title">
                <span>{choose.description}</span>
                <h5>{choose.title}</h5>
              </div>
             
            </div>
          </div>
        ))} 
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className="chooseRight">
        <img src="/imagesFile/Image (8).png" alt="Choose Us" />
      </div>
    </div>
  );
}
