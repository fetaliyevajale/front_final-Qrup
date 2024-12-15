import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Profil() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/profil.json");
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
    <div className="containerAbout">
      <div className="aboutPost">
        {profiles?.map((profil, index) => (
          <div className="postList" key={index}>
            <img src={`.${profil.image}`} alt="" />
            <h5>{profil.name}</h5>
            <span>{profil.titles}</span>
          </div>
        ))}
      </div>
      <div className="loremIpsum">
        <p>
          Biz müştərilərimiz üçün hər zaman etibarlı xidmətlər təqdim edir,
          onların güvənini qazanmağı prioritet hesab edirik. Peşəkar
          komandamızın köməyi ilə istənilən çətinliyi birlikdə aşmağa hazırıq.
        </p>
        <button>
          <Link style={{ color: "black" }} to="/pages">
            Ətraflı Baxın
          </Link>
        </button>
      </div>
    </div>
  );
}
