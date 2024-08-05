import React, { useState, useEffect } from "react";

export default function Section() {
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/heroSer.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHeros(data?.heros);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
console.log(heros);
    fetchData();
  }, []);

  return (
    <div>
      <div className="sectionCntr">
        {heros?.map((hero, id) => (
              
          <div className="build" key={id}>
         <div className="ground">
                <i className="fa-solid fa-check" style={{color:"#FFF"}}></i>
              </div>
              <div className="divHero">
                  <h4>{hero?.title}</h4>
       <p>{hero?.description}</p>
              </div>
          
         
          </div>
        ))}
      </div>
    </div>
  );
}
