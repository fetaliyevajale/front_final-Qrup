import React, { useEffect, useState } from "react";
import RightBlogs from "./RightBlogs";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/JSON/blog.json");
        const result = await response.json();
        setData(result.blogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const product= data.find((item) => item.id.toString() === id);
  console.log(product);
  return (
    <div className="container">
      <h2>{product?.title}</h2>

      <RightBlogs />
    </div>
  );
};

export default SingleBlog;
