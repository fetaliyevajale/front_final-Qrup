import React from "react";
import History from "./History";
import Profil from "./Profil";
export default function About() {
  return (
    <div className="container">
      <div className="titles">
        <h3>Haqqımızda</h3>
        <p>
          Biz, daşınmaz əmlak sektorunda illərdir fəaliyyət göstərən,
          müştərilərinə keyfiyyətli və peşəkar xidmətlər təqdim edən bir
          şirkətik. Şirkətimiz, müştərilərinə etibarlı və yenilikçi həllər
          təqdim etmək məqsədilə, sektorda liderliyini qorumaq üçün daim özünü
          inkişaf etdirməkdədir. Bizim məqsədimiz, hər zaman müştərilərimizin
          ehtiyaclarını anlamaq və onların təklif etdiyimiz xidmətlərdən ən
          yüksək səviyyədə faydalanmalarını təmin etməkdir. Təcrübəmiz sayəsində
          daşınmaz əmlak bazarında güvənilən bir tərəfdaş kimi tanınırıq.
        </p>
      </div>
      <div className="step">
        <h3>
          12 ildən artıq təcrübə ilə
          <br />
          Daşınmaz əmlak xidmətləri sahəsində liderik
        </h3>
        <p>
          Biz müştərilərimizə əmlak sahəsində ən yaxşı həllər təqdim etmək üçün
          geniş təcrübəmizdən istifadə edirik.
        </p>
      </div>

      <div className="postBlog">
        <img src="/imagesFile/image1.jpg" alt="" />
      </div>

      <div className="about">
        <div className="visions">
          <h4>Bizim Vizyonumuz</h4>
          <p>
            Əmlak bazarında yenilikçi həllər təqdim edərək, müştərilərimiz üçün
            dəyər yaratmağı hədəfləyirik.
          </p>
        </div>

        <div className="missions">
          <h4>Bizim Missiyamız</h4>
          <p>
            Şirkətimizin missiyası, müştərilərimizin ehtiyaclarını yüksək
            keyfiyyətlə ödəmək, təhlükəsiz və sərfəli daşınmaz əmlak
            alqı-satqısı təmin etməkdir. Biz hər zaman müştərilərimizin
            təhlükəsizliyini və məmnuniyyətini ön planda tuturuq.
          </p>
        </div>
      </div>

      <div className="step">
        <h3>Etibarlı Partnyorlarımız</h3>
        <p>
          Bizim uğurumuzda etibarlı partnyorlarımızın böyük rolu var. Birlikdə
          çalışdığımız şirkətlərlə yüksək keyfiyyətli nəticələr əldə edirik və
          müştərilərimizə ən yaxşı xidmətləri təqdim edirik.
        </p>
      </div>

      <div className="logoServices">
        <img src="/imagesFile/Frame.jpg" alt="" />
        <img src="/imagesFile/Frame (1).jpg" alt="" />
        <img src="/imagesFile/Frame (2).jpg" alt="" />
        <img src="/imagesFile/Frame (3).jpg" alt="" />
      </div>

      <History />
      <div className="step">
        <h3>Agentlərimizin Siyahısı</h3>
        <p>
          Bizim peşəkar agentlərimiz müştərilərimizin ehtiyaclarına ən uyğun
          həllər təqdim etmək üçün təcrübəli və səriştəlidirlər. Hər bir
          agentimiz, müştəriyə ən yaxşı xidmət göstərmək üçün çalışır.
        </p>
      </div>
      <Profil />
    </div>
  );
}
