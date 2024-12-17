import React from "react";
import Right from "./Right";
import Location from "./Location";
export default function Details() {
  return (
    <div className="concate">
      <div className="leftCont">
        <h3>Təfərrüatlar Əmlak</h3>
        <p>
          Bu əmlak, geniş həyəti, müasir memarlıq üslubu, rahat otaqları və
          ailənizin hər bir ehtiyacını qarşılayacaq funksional xüsusiyyətləri
          ilə seçilir, həmçinin sakinlərə təmizlik, rahatlıq və yüksək
          keyfiyyətli yaşayış şəraiti təmin edir, bu da onu xəyallarınızdakı
          ideal ev halına gətirir.
        </p>

        <div className="boxs">
          <div className="divBox">
            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Həyət</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Qaraj</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Mətbəx</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Yaddaş</span>
            </div>
          </div>
          <div className="divBox">
            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Heyvanlar</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Camaşırxana</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Otaqlar</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Wi-fi</span>
            </div>
          </div>
          <div className="divBox">
            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Balkon</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Fitnes</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Barbekü</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Sauna</span>
            </div>
          </div>
          <div className="divBox">
            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Üzgüçülük</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Studiya</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Futbol</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>İdman zalı</span>
            </div>
          </div>
        </div>

        <div className="divImages">
          <div className="img">
            <img src="/imagesFile/img1.jpg" alt="" />

            <img src="/imagesFile/img2.jpg" alt="" />

            <img src="/imagesFile/img3.jpg" alt="" />

            <img src="/imagesFile/img4.jpg" alt="" />
          </div>
        </div>

        <Location />
      </div>

      <Right />
    </div>
  );
}
