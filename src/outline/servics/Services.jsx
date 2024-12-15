import React from "react";
import HeroServices from "./HeroServices";
import Estate from "./Estate";
import VarLet from "./VarLet";
export default function Services() {
  return (
    <div className="container">
      <div className="heroServices">
        <h2>Xidmətlərimiz</h2>
        <p>
          Əmlak xidməti sahəsində peşəkar dəstək və məsləhət üçün hər zaman
          yanınızdayıq. Bizim xidmətlərimiz ilə ev tapmaq və həyatınızı daha
          rahat etmək üçün lazım olan hər şeyi təklif edirik
        </p>
      </div>
      <div className="step">
        <h3>Seçilmiş Xidmətlər</h3>
        <p>
          Emlak və dizayn sahəsində geniş çeşidli xidmətlər təqdim edirik.
          Müstəqil evlərin, mənzillərin və komersiya sahələrinin alqı-satqısı və
          kirayə xidmətlərində hər zaman sizə kömək etməyə hazırıq
        </p>
      </div>
      <HeroServices />

      <div className="styled">
        <img src="/imagesFile/photo.jpg" alt="" />
      </div>

      <Estate />

      <div className="step">
        <h3>Dörd Təchizatçı</h3>
        <p>
          Emlak mütəxəssislərimiz sizin üçün ən uyğun mülkiyyəti seçməyə kömək
          edir. Emlak dizaynı, ev yoxlanışı və digər peşəkar xidmətlərimizlə
          sizə yüksək səviyyəli dəstək təqdim edirik.
        </p>
      </div>

      <div className="logoServices">
        <img src="/imagesFile/Frame.jpg" alt="" />
        <img src="/imagesFile/Frame (1).jpg" alt="" />
        <img src="/imagesFile/Frame (2).jpg" alt="" />
        <img src="/imagesFile/Frame (3).jpg" alt="" />
      </div>

      <VarLet />
    </div>
  );
}
