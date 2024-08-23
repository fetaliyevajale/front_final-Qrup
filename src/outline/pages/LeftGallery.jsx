import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function LeftGallery() {
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/pages.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPages(data?.pages);
        console.log(data.pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate(`/singleBlog/${id}`);
  };

  return (
    <div className="centerPages">
      <div className="pagesWeb">
        {pages?.map((page, index) => (
          <div className="post" key={index}>
            <img src={`.${page.image}`} alt="" />

            <div className="icons">
              <div className="solid">
                <i className="fa-regular fa-calendar" style={{ color: "#666" }}></i>
                <span style={{ color: "#666" }}>18 June 2022</span>
              </div>

              <div className="solid">
                <i className="fa-solid fa-folder-open" style={{ color: "#666" }}></i>
                <span style={{ color: "#666" }}>Uncategorized</span>
              </div>
            </div>

            <h5>{page.title}</h5>
            <p>{page.excerpt}</p>

            <div className="href">
              <Link to={`/singleBlog/${page.id}`} onClick={() => handleClick(page.id)} style={{ color: "#333" }}>
                {page.link}
              </Link>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
