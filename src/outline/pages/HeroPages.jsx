import React, { useState, useEffect } from "react";

export default function LeftBlogs() {
  const [profiles, setProfiles] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/photo.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProfiles(data?.profiles);
        console.log(data.profiles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="containerPages">
      <div className="heroPages">
        {profiles?.map((profil, index) => (
          <div className="pagesList" key={index}>
            <img src={`.${profil.image}`} alt="" />
            <h5>{profil.name}</h5>
            <span>{profil.titles}</span>
          </div>
        ))}
      </div>
     
    </div>
  );
}
