import React from "react";
import HeroPages from "./HeroPages";
import Box from "../home/Box";
export default function Pages() {
  return (
    <div className="pagesContainer">
      <div className="heroBlogs">
        <h2>Bizim Komanda</h2>
        <p>
          Bizim güclü və peşəkar komandamız, müştərilərimizin tələblərinə uyğun
          ən yaxşı xidmətləri təqdim edir və onların ehtiyaclarını qarşılayır.
        </p>
      </div>

      <HeroPages />

      <div className="step">
        <h3>Məmnun Müştərilərimiz Nə Deyir</h3>
        <p>
          Müştərilərimiz bizim xidmətlərimizdən çox razıdırlar və bu, onların
          rəylərində aydın şəkildə görünür. <br /> Bizim güclü müştəri
          məmnuniyyəti strategiyamız müştərilərimizin gözləntilərini tam şəkildə
          ödəməyə imkan verir.
        </p>
      </div>
      <Box />
    </div>
  );
}
