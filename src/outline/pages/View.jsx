import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function View() {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/list.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVisits(data?.visits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="visitData">
        {visits?.map((visit, index) => (
          <div className="data" key={index}>
            <div className="backGround"><h5>{visit.numbers}</h5></div>
            <h4>{visit.title}</h4>
          <p>{visit.content}</p>
          <div className="href">
          <Link>{visit.link}</Link>  
          </div>
      
          </div>
        ))}
      </div>
    </div>
  );
}
