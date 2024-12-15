import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="links">
          <img src="/imagesFile/Logo.png" alt="Logo" style={{ width: 100 }} />
          <div className="p">
            <p>
              Sizin üçün mükəmməl ev və ya mülk tapmağı asanlaşdıran ən yaxşı
              xidmətləri təqdim edirik.
            </p>
          </div>
        </div>

        <div className="links">
          <h6>Faydalı Linklər</h6>
          <div className="links-class">
            <Link to="/listing" style={{ color: "black" }}>
              Siyahı
            </Link>
            <Link to="/about" style={{ color: "black" }}>
              Haqqımızda
            </Link>
            <Link to="/contact" style={{ color: "black" }}>
              Bizimlə əlaqə saxlayın
            </Link>
            <Link to="/team" style={{ color: "black" }}>
              Bizim Komanda
            </Link>
          </div>
        </div>

        <div className="links">
          <h6>Əlaqə saxlayın</h6>
          <div className="conts">
            <i className="fa-solid fa-location-dot"></i>
            <span>Bakı şəhəri, Nəsimi rayonu, Azadlıq prospekti, 123</span>
          </div>

          <div className="contacts">
            <i className="fa-solid fa-phone"></i>
            <span>+123 456 7890</span>
          </div>

          <div className="contacts">
            <i className="fa-solid fa-envelope"></i>
            <span>hello@dhalem.com</span>
          </div>
        </div>

        <div className="link">
          <h6>Xəbər bülleteni</h6>

          <form action="">
            <input type="email" name="" id="" placeholder="E-poçtunuz" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </footer>
    </div>
  );
}
