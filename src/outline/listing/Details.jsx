import React from "react";
import Right from "./Right";
import Location from "./Location";
export default function Details() {
  return (
    <div className="concate">
      <div className="leftCont">
        <h3>Details Property</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat n on proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="boxs">
          <div className="divBox">
            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Backyard</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Garage</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Outdoor Kitchen</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Storage Units</span>
            </div>
          </div>
          <div className="divBox">
            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Pet Friendly</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Laundry</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Family Room</span>
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
              <span>Balcony</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Fitness Center</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Barbecue</span>
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
              <span>Swimming Pool</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Studio</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Soccer Field</span>
            </div>

            <div className="boxGround">
              <div className="ground">
                <i className="fa-solid fa-check" style={{ color: "#FFF" }}></i>
              </div>
              <span>Gym</span>
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
