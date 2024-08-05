import React, { useState, useEffect } from "react";
export default function HeroSection() {
  const [rights, setRights] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/right.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRights(data?.rights);
        console.log(data?.rights);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(rights);
  return (
    <div className="rightCont">
  <h3>Other Property</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt 
        </p>
      <div
        className="flexs"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {rights?.map((right, id) => (
          <div className="index" key={id}>
            <img src={`${right?.image}`} alt="" />
            <h3>{right.name}</h3>
            <div className="icons">
              <i className="fa-solid fa-location-dot"></i>
              <span>{right.location}</span>
            </div>
            <button>{right.price}</button>
            <div className="rooms">
              <div className="border">
                <i className="fa-solid fa-border-all"></i>
                <span>{right.rooms}</span>
              </div>
              <div className="border">
                <i className="fa-solid fa-bed"></i>
                <span>{right.bed}</span>
              </div>
              <div className="border">
                <i className="fa-solid fa-bath"></i>
                <span>{right.bath}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
