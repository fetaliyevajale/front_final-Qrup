import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "", // Ad sahəsi əlavə edilib
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({}); // Əvvəlki səhvləri təmizləyirik

    fetch("http://127.0.0.1:8000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errData) => {
            if (res.status === 422) {
              setErrors(errData.errors);
            } else {
              throw new Error(errData.message || "Bir xəta baş verdi.");
            }
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          localStorage.setItem("token", data.token);

          navigate("/"); // İstifadəçi ana səhifəsinə yönləndir
        }
      })
      .catch((error) => {
        console.error(error);
        setErrors({ general: error.message });
      });
  };

  return (
    <div id="login">
      <div id="SecureImg"></div>
      <div id="loginRight">
        <div className="rightBox">
          <div>
            <img src="./logo.svg" alt="" />
            <h2 className="title">Xoş gəlmisiniz 👋 </h2>
            <span className="same">Zəhmət olmasa, daxil olun</span>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Adınız</label>
            <input
              onChange={(e) => setData({ ...data, name: e.target.value })}
              type="text"
              name="name"
              id="name"
              value={data.name}
            />
            {errors.name && (
              <p style={{ color: "red" }}>
                {Array.isArray(errors.name) ? errors.name[0] : errors.name}
              </p>
            )}

            <label htmlFor="email">E-poçt ünvanı</label>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              name="email"
              id="email"
              value={data.email}
            />
            {errors.email && (
              <p style={{ color: "red" }}>
                {Array.isArray(errors.email) ? errors.email[0] : errors.email}
              </p>
            )}

            <label htmlFor="password">Şifrə</label>
            <input
              onChange={(e) => setData({ ...data, password: e.target.value })}
              type="password"
              name="password"
              id="password"
              value={data.password}
            />
            {errors.password && (
              <p style={{ color: "red" }}>
                {Array.isArray(errors.password)
                  ? errors.password[0]
                  : errors.password}
              </p>
            )}

            <button type="submit">Daxil ol</button>
            <Link to="/login">Daxil ol</Link>
          </form>

          {errors.general && <p style={{ color: "red" }}>{errors.general}</p>}
        </div>
      </div>
    </div>
  );
}
