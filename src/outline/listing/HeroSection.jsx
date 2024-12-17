import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [houses, setHouses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/hose.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHouses(data?.houses);
        console.log(data.houses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      <div className="flexWrap">
        {houses?.map((house, index) => (
          <div
            className="cols"
            key={index}
            onClick={() => handleClick(house.id)}
          >
            <img src={`.${house.image}`} alt="" />

            <h4>{house.name}</h4>
            <div className="icons">
              <i className="fa-solid fa-location-dot"></i>
              <span>{house.location}</span>
            </div>
            <button>{house.price}</button>
            <div className="rooms">
              <div className="border">
                <i className="fa-solid fa-border-all"></i>
                <span>{house.rooms}</span>
              </div>
              <div className="border">
                <i className="fa-solid fa-bed"></i>
                <span>{house.bed}</span>
              </div>
              <div className="border">
                <i className="fa-solid fa-bath"></i>
                <span>{house.bath}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}