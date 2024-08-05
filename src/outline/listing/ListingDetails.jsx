import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
const ListingDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      fetch("/JSON/hose.json")
        .then((a) => a.json())
        .then((data) => setData(data.houses));
    };
    getData();
  }, []);

  const product = data.find((item) => item.id === id);
  console.log(product);
  return (
    <div className="container">
      <div className="productName">
        <h2>{product?.name}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="centerContainer">
        <div className="left">
          <img src={product?.image} />
        </div>
        <div className="right">
          <img src="/imagesFile/image (20).jpg" alt="" />
          <img src="/imagesFile/image (21).jpg" alt="" />
        </div>
      </div>

      <div className="text">
        <div className="leftText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="icons">
            <i className="fa-solid fa-location-dot"></i>
            <span>{product?.location}</span>
          </div>

          <div className="rooms">
            <div className="border">
              <i className="fa-solid fa-border-all"></i>
              <span>{product?.rooms}</span>
            </div>
            <div className="border">
              <i className="fa-solid fa-bed"></i>
              <span>{product?.bed}</span>
            </div>
            <div className="border">
              <i className="fa-solid fa-bath"></i>
              <span>{product?.bath}</span>
            </div>
          </div>
        </div>
        <div className="rightText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>

          <div className="btnDiv">
            <h3>{product?.price}</h3>

            <button>Reqeuest Visit Now!</button>
          </div>
        </div>
      </div>

      <Details />
    </div>
  );
};

export default ListingDetails;
