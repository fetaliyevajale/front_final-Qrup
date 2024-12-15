import React, { useState, useEffect } from "react";
import LeftGallery from "./LeftGallery";

export default function Gallery() {
  const [houses, setHouses] = useState([]);

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

  return (
    <div>
      <div className="heroBlogs">
        <h2>Bizim Qalery</h2>
        <p>
          Burada, müxtəlif əmlak variantları haqqında daha çox məlumat əldə edə
          və şəkillərimizə baxa bilərsiniz. Mülklərin keyfiyyəti və vizual
          təcrübəsi ilə bağlı ətraflı görsellər təqdim olunur.
        </p>
      </div>
      <div className="flexWrap">
        {houses?.map((house, index) => (
          <div className="cols" key={index}>
            <img src={`.${house.image}`} alt="" />
          </div>
        ))}
      </div>
      <LeftGallery />
    </div>
  );
}
