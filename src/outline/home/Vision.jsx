import React, { useState, useEffect } from "react";

export default function Section() {
  const [visions, setVisions] = useState([]);
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/visions.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVisions(data?.visions);
        setMissions(data?.missions); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="vision">
      <div className="visions">
        {visions?.map((vision, index) => (
          <div className="col" key={index}>
            <h3>{vision.title}</h3>
            <p>{vision.content}</p>
            <img src={`.${vision.image}`} alt={vision.title} />
            <h4>{vision.name}</h4>
          </div>
        ))}
      </div>
      <div className="missions">
        {missions?.map((mission, index) => (
          <div className="col" key={index}>
            <img src={`.${mission.image}`} alt={mission.title} />
            <h3>{mission.title}</h3>
            <p>{mission.content}</p>
            <h4>{mission.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
