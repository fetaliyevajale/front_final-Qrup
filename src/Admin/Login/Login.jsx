import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({}); 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        fetch("http://127.0.0.1:8000/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((res) => {
            if (!res.ok) {
                return res.json().then(errData => {
                    throw new Error(errData.message || 'Bir hata oluştu.');
                });
            }
            return res.json();
        })
        .then((data) => {
            if (data.success) {
                localStorage.setItem('token', data.token);
                if (data.role === 'admin') { 
                    window.open('/admin');
                } else { 
                    navigate('/home'); 
                }
            }
        })
        .catch((error) => {
            console.error(error);
            setErrors({ email: error.message, password: error.message });
        });
    };

    return (
        <div id='login'>
            <div id='SecureImg'></div>
            <div id='loginRight'>
                <div className='rightBox'>
                    <div>
                        <img src="./logo.svg" alt="" />
                        <h2 className='title'>Welcome 👋 </h2>
                        <span className='same'>Please login here</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            type="email"
                            name="email"
                            id="email"
                        />
                        {errors.email && (
                            <p style={{ color: 'red' }}>
                                {Array.isArray(errors.email) ? errors.email[0] : errors.email}
                            </p>
                        )}

                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            type="password"
                            name="password"
                            id="password"
                        />
                        {errors.password && (
                            <p style={{ color: 'red' }}>
                                {Array.isArray(errors.password) ? errors.password[0] : errors.password}
                            </p>
                        )}
                       
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
