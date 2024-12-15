import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftBlogs from "./LeftBlogs";
import RightBlogs from "./RightBlogs";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  // Komponent yüklənəndə blogları çəkmək
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/blogs"); // API URL-ni düzgün tənzimləyin
        setBlogs(response.data);
      } catch (error) {
        console.error("Bloglar alınarkən xəta baş verdi:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <div className="heroBlogs">
        <h2>Bizim Blog</h2>
        <p>
          Komandamızın ekspert fikirləri, son tendensiyalar və müştərilərimiz
          üçün faydalı məsləhətlər haqqında yazılarımızı buradan izləyə
          bilərsiniz.
        </p>
      </div>
      <div className="centerBlogs">
        <LeftBlogs blogs={blogs} />
        <RightBlogs blogs={blogs} />
      </div>
    </div>
  );
}
