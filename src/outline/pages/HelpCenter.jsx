import React from "react";
import View from "./View";
import RightEstate from "./RightEstate";
export default function HelpCenter() {
  return (
    <div className="name">
      <div className="heroBlogs">
        <h2>Yardım Mərkəzi</h2>
        <p>
          Burada sizə peşəkar xidmət təqdim edirik. Müşterilərimizin rahatlığı
          və məmnuniyyəti bizim prioritetimizdir. Sizə dəstəklə bağlı hər hansı
          sualınız varsa, bizimlə əlaqə saxlaya bilərsiniz.
        </p>
      </div>

      <div className="step">
        <h3>Peşəkar xidmət göstərərək və sizi xoşbəxt edmək istəyirik</h3>
        <p>
          Biz müştərilərimizə yüksək keyfiyyətli xidmət göstərmək və onların
          ehtiyaclarına uyğun həllər təqdim etmək üçün buradayıq. Sizə ən yaxşı
          xidmət təcrübəsi təqdim etmək istəyirik.
        </p>
      </div>

      <View />
      <div className="nameEstate">
        <div className="rightEstate">
          <RightEstate />
        </div>
      </div>
    </div>
  );
}
