import React, { useState, useEffect } from "react";

export default function Section() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/imgs.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHouses(data?.houses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="houseStreet">
        {houses?.map((house, index) => (
          <div className="cols" key={index}>
            <img src={`./${house.image}`} alt="" />
            <h4>{house.name}</h4>
            <div className="icons">
              <i className="fa-solid fa-location-dot"></i>
              <span>{house.location}</span>
            </div>
            <button>{house.price}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
