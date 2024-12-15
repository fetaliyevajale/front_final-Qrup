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
        console.error("Data çəkməkdə xəta baş verdi:", error);
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
            Hər bir insanın həyatında qarşılaşdığı unikal təcrübələr vardır. Bu yazıda, həyatımıza təsir edən əhəmiyyətli məsələləri və onların bizim gündəlik həyatımıza necə təsir etdiyini araşdırırıq.
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
