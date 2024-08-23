import React from "react";

export default function NotFound() {
  return (
    <div className="container">
      <div  className="centerNot">
        <div className="notLeft">
          <div className="tops">
            <h2>
              Oops, Can’t Load this Page, Please Check Your Connection and
              Reload this Page
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button type="submit">Back to Homepage</button>
        </div>
        <div className="notRight">
          <img src="/imagesFile/image9.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
