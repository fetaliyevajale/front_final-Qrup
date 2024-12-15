import React from "react";
import HeroSection from "./HeroSection";
export default function Listing() {
  return (
    <div className="container">
      <div className="listing">
        <h2>Siyahımız</h2>
        <p>
          Evinizi tapmaq üçün ən yaxşı seçimləri təqdim edən siyahımıza göz atın
          və xəyallarınızdakı evi asanlıqla seçin.
        </p>
      </div>

      <HeroSection />
    </div>
  );
}
