import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((a) => a.json())
      .then((b) => {
        if (b.success) {
          setUser(b.user);
        }
      });
  }, []);


  const logout =()=>{
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";  
  }
  return (
    <>
      {user ? (
        <div className="user-dropdown">
          <span>{user?.name[0]}</span>
          <ul className="inner-dropdown">
            <li onClick={logout}>Çıxış et</li>
          </ul>
        </div>
      ) : (
        <NavLink className="login" to="/login">Login</NavLink>
      )}
    </>
  );
};

export default User;
