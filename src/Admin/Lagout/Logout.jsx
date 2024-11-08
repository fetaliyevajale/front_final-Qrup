import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        fetch("http://127.0.0.1:8000/api/user/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                localStorage.removeItem('token'); 
                navigate('/login');
            } else {
                console.error("Çıxışda xəta baş verdi.");
            }
        })
        .catch((error) => {
            console.error("Server ilə əlaqədə xəta baş verdi:", error);
        });
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}
