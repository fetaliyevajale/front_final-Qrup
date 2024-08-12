import React, { useEffect, useState } from "react";
import RightBlogs from "./RightBlogs";
import LoremBlog from "./LoremBlog";
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

  const product = data.find((item) => item.id.toString() === id);
  console.log(product);
  return (
    <div className="containerBlog">
      <div className="postBlog">
        <div className="titles">
          <h3>{product?.title}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <img src={`.${product?.image}`} alt="" />
      </div>

      <div className="blogCntr">
        <LoremBlog />
        <RightBlogs />
      </div>
    </div>
  );
};

export default SingleBlog;
