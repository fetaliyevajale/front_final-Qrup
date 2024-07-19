import React, { useState, useEffect } from "react";

export default function Section() {
  const [boxs, setBoxs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/box.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBoxs(data?.boxs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="box-page">
        {boxs?.map((box, index) => (
          <div className="box1" key={index}>
            <p>{box.description}</p>
            <div className="icon">
            <div className="div"></div>
<div className="user">
<h6>{box.title}</h6>
<span>{box.userTitle}</span>
</div>
            </div>
   
          </div>
        ))}
      </div>
    </div>
  );
}