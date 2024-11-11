import React from 'react';
import { useNavigate } from 'react-router-dom';  // React Router-dan useNavigate hook-u

export default function Navbar() {
  const navigate = useNavigate(); // Navigate funksiyasını çağırırıq

  // Logout funksiyası
  const handleLogout = () => {
    localStorage.removeItem('token');  // Tokeni localStorage-dan silirik
    navigate('/login');  // İstifadəçini login səhifəsinə yönləndiririk
  };

  return (
    <div className="navbar">
      <button onClick={handleLogout}>Logout</button>  {/* Logout düyməsi */}
    </div>
  );
}
