import React from "react";

export default function Hero() {
  return (
    <>
      <div className="heroHome">
        <div className="leftHero">
          <h2>Ailənizin Xoşbəxtliyini Xəyallarınızdakı Evə Gətirin</h2>
          <p>
            Evinizdə rahatlıq və zövqü tapın, xəyallarınızdakı evdə ailənizin
            xoşbəxtliyini yaşayın.
          </p>

          <div className="form">
            <form>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Burada axtarın" />
            </form>
            <button>Axtar</button>
          </div>

          <div className="number">
            <div className="row">
              <h4>300+</h4>
              <span>Mükafatlar.</span>
            </div>
            <div className="row">
              <h4>80+</h4>
              <span>Mülk oxunuşu </span>
            </div>
            <div className="row">
              <h4>450+</h4>
              <span>Xoşbəxt Müştərilər</span>
            </div>
          </div>
        </div>

        <div className="imgHero">
          <img src="/imagesFile/Image.png" alt="Image" />
        </div>
      </div>

      <div className="listTured">
        <h3> Xüsusi Elanlar</h3>

        <p>
          Xüsusi elanlarımıza göz atın və sizə ən uyğun olanı tapın. Keyfiyyətli
          və unikal imkanlarla ev alqı-satqınızı fərqləndirin.
        </p>
      </div>
    </>
  );
}
