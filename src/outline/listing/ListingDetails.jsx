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
          Bu əmlak geniş həyəti və müasir dizaynı ilə rahat və keyfiyyətli bir
          həyat təmin edir. Otaqların funksional quruluşu və ailənizin
          ehtiyaclarını qarşılamağa yönəlmiş xüsusiyyətləri ilə diqqət çəkir.
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
            Bu mülk geniş həyəti, rahat yataq otaqları və modern mətbəxi ilə
            ideal yaşayış təklif edir. Evinizdə komfort və keyfiyyəti hiss edin.
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
            Əmlakın qiyməti və əlavə xüsusiyyətləri haqqında daha çox məlumat
            əldə edin. Bu, sizin üçün ideal ev ola bilər.
          </p>

          <div className="btnDiv">
            <h3>{product?.price}</h3>

            <button>İndi Ziyarət Edin!</button>
          </div>
        </div>
      </div>

      <Details />
    </div>
  );
};

export default ListingDetails;
