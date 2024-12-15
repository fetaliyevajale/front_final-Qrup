import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Hero from "./Hero";
import Section from "./Section";
import Vision from "./Vision";
import Visits from "./Visits";
import Choose from "./Choose";
import Box from "./Box";
import Movie from "./Movie";
export default function Home() {
  return (
    <div className="container">
      <Hero />
      <Section />
      <div className="lorem">
        <p>
          Ev alma prosesinizi daha da asanlaşdırmaq üçün biz burdayıq. Dhalem
          Real Estate ilə xəyallarınızdakı evə sahib olmaq üçün ilk addımı atın
        </p>
        <button>
          <Link style={{ color: "black" }} to="/listing">
            Ətraflı Baxın
          </Link>
        </button>
      </div>
      <Vision />
      <div className="step">
        <h3>
          Əmlak almaq üçün asan addım <br />
          Dhalem Daşınmaz Əmlakında
        </h3>
        <p>
          Dhalem Daşınmaz Əmlakında xəyallarınızdakı evə sahib olmaq üçün sadə
          və asan addımlar barədə daha çox məlumat əldə edin. Bizimlə işləyin və
          ev arayışınızı daha da rahat edin <br /> Əmlak almaq üçün asan addım
          atın və peşəkar komandamız tərəfindən hər addımda dəstək olun
        </p>
      </div>
      <Visits />
      <div className="lorem">
        <p>
          Əmlak barədə daha çox sualınız varsa, bizim tez-tez verilən suallar
          (FAQ) səhifəmizə baxın. Əməliyyat və proseslərlə bağlı bütün
          suallarınıza cavab tapın.
        </p>
        <button>
          <Link style={{ color: "black" }} to="/listing">
            Tez-tez verilən suallara baxın
          </Link>
        </button>
      </div>

      <Choose />
      <div className="step">
        <h3>
          Müştərilərimiz bizdən necə danışır? <br /> Ən son müştəri rəyləri və
          xoşbəxt təcrübələr haqqında məlumat əldə edin.
        </h3>
        <p>
          Xoşbəxt müştərilərimizin təcrübələri bizim üçün ən yaxşı tövsiyədir.{" "}
          <br /> Bizimlə əməkdaşlıq edərək xəyallarınızdakı evə daha sürətli
          sahib ola bilərsiniz.
        </p>
      </div>

      <Box />
      <Movie />
    </div>
  );
}
