import React from "react";

export default function RightBlogs() {
  return (
    <div className="rightBlogs">
      <h3>Ən Yeni Paylaşımlar</h3>

      <div className="gap">
        <div className="icons">
          <div className="solid">
            <i className="fa-regular fa-calendar"></i>
            <span>18 iyun 2022-ci il</span>
          </div>

          <div className="solid">
            <i className="fa-solid fa-folder-open"></i>
            <span>Kateqoriyasız</span>
          </div>
        </div>

        <div className="fix">
          <h6>
            Evin Qiymətləndirilməsinə Nə Zərər Verir? Və Onları Düzəltmək Üçün 7
            Şey
          </h6>
          <p>
            Ev qiymətləndirilməsi zamanı yaranan problemləri həll etmək üçün ən
            yaxşı üsullar.
          </p>
        </div>
      </div>

      <div className="gap">
        <div className="icons">
          <div className="solid">
            <i className="fa-regular fa-calendar"></i>
            <span>18 iyun 2022-ci il</span>
          </div>

          <div className="solid">
            <i className="fa-solid fa-folder-open"></i>
            <span>Kateqoriyasız</span>
          </div>
        </div>

        <div className="fix">
          <h6>
            Evin Qiymətləndirilməsinə Nə Zərər Verir? Və Onları Düzəltmək Üçün 7
            Şey
          </h6>
          <p>
            Ev qiymətləndirilməsi zamanı yaranan problemləri həll etmək üçün ən
            yaxşı üsullar.
          </p>
        </div>
        <button>Ətraflı Baxın</button>
      </div>

      <div className="link">
        <h3>Bülletenimizə Qoşulun</h3>
        <p>
          Ən son xəbərlərdən və yeniliklərdən xəbərdar olmaq üçün bizim
          bülletenə abunə olun.
        </p>

        <form action="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
