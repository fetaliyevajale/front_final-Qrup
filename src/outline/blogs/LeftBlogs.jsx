import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function LeftBlogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/blog.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data?.blogs);
        console.log(data.blogs);
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
    <div className="leftBlogs">
      <div className="blogPost">
        {blogs?.map((blog, index) => (
          <div className="post" key={index}>
            <img src={`.${blog.image}`} alt="" />

            <div className="icons">
              <div className="solid">
                <i className="fa-regular fa-calendar" style={{ color: "#666" }}></i>
                <span style={{ color: "#666" }}>18 iyun 2022-ci il</span>
              </div>

              <div className="solid">
                <i className="fa-solid fa-folder-open" style={{ color: "#666" }}></i>
                <span style={{ color: "#666" }}>Kateqoriyasız</span>
              </div>
            </div>

            <h5>{blog.title}</h5>
            <p>{blog.excerpt}</p>

            <div className="href">
              <Link to={`/singleBlog/${blog.id}`} onClick={() => handleClick(blog.id)}>
                {blog.link}
              </Link>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
