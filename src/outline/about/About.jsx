import React from "react";
import History from "./History";
import Profil from "./Profil";
export default function About() {
  return (
    <div className="container">
      <div className="titles">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="step">
        <h3>
          Over 12+ Years Experience
          <br />
          in Real Estate Services
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="postBlog">
        <img src="/imagesFile/image1.jpg" alt="" />
      </div>

      <div className="about">
        <div className="visions">
          <h4>Our Vision</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="missions">
          <h4>Our Mission</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="step">
        <h3>Our Trusted Partner</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
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
        <h3>Our Agent List</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
<Profil/>
    </div>
  );
}
