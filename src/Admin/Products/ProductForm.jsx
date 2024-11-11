import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onUpdate }) => {
    const [productData, setProductData] = useState({
        name: '',
        address: '',
        price: '',
        size: '',
        bedrooms: '',
        bathrooms: ''
    });
    const [error, setError] = useState(null);  // Xəta mesajlarını saxlamaq üçün

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // localStorage-dan tokeni əldə et
            const token = localStorage.getItem('token');
            console.log('Token:', token);  
            if (!token) {
                setError('Token tapılmadı. Lütfən yenidən daxil olun.');
                return;
            }

            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            };

            // API-yə sorğu göndəririk
            const response = await axios.post('http://127.0.0.1:8000/api/admin/products/store', productData, { headers });
            console.log(response.data.message);

            // Formu təmizləyirik
            setProductData({
                name: '',
                address: '',
                price: '',
                size: '',
                bedrooms: '',
                bathrooms: ''
            });

            onUpdate();  // Məhsul siyahısını yeniləmək üçün (əgər varsa)
            setError(null);  // Əgər əvvəlki xətalar varsa, onları sıfırlayırıq

        } catch (error) {
            console.log(error); // Erroru daha yaxşı izah etmək üçün konsolda çap et
            if (error.response?.status === 401) {
                // Autentifikasiya xətası varsa, istifadəçini yenidən daxil olmağa məcbur edirik
                setError('Autentifikasiya uğursuz oldu, zəhmət olmasa yenidən daxil olun.');
            } else {
                // Başqa xətalar varsa, onları göstəririk
                setError(error.response?.data?.message || 'Xəta baş verdi. Lütfən yenidən cəhd edin.');
            }
            console.error('Xəta:', error.response?.data || error.message);
        }
    };

    return (
        <div className="product-form">
            <form onSubmit={handleSubmit}>
                <h2>Yeni Məhsul Əlavə Et</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Xətanı göstərmək üçün */}

                {/* Məhsul adı */}
                <div className="form-group">
                    <label htmlFor="name">Məhsul adı</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        placeholder="Məhsul adı"
                        maxLength="255"
                        required
                    />
                </div>

                {/* Məhsul ünvanı */}
                <div className="form-group">
                    <label htmlFor="address">Məhsul Ünvanı</label>
                    <input
                        type="text"
                        name="address"
                        value={productData.address}
                        onChange={handleChange}
                        placeholder="Məhsul ünvanı"
                        maxLength="255"
                        required
                    />
                </div>

                {/* Məhsul qiyməti */}
                <div className="form-group">
                    <label htmlFor="price">Məhsul Qiyməti</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        placeholder="Məhsul qiyməti"
                        step="0.01"
                        min="0"
                        required
                    />
                </div>

                {/* Ölçü (kv.ft.) */}
                <div className="form-group">
                    <label htmlFor="size">Ölçü (kv.ft.)</label>
                    <input
                        type="number"
                        name="size"
                        value={productData.size}
                        onChange={handleChange}
                        placeholder="Ölçü"
                        min="0"
                        required
                    />
                </div>

                {/* Yataq otağı sayı */}
                <div className="form-group">
                    <label htmlFor="bedrooms">Yataq Otağı Sayı</label>
                    <input
                        type="number"
                        name="bedrooms"
                        value={productData.bedrooms}
                        onChange={handleChange}
                        placeholder="Yataq otağı sayı"
                        min="0"
                        required
                    />
                </div>

                {/* Hamam otağı sayı */}
                <div className="form-group">
                    <label htmlFor="bathrooms">Hamam Otağı Sayı</label>
                    <input
                        type="number"
                        name="bathrooms"
                        value={productData.bathrooms}
                        onChange={handleChange}
                        placeholder="Hamam otağı sayı"
                        min="0"
                        required
                    />
                </div>

                <button type="submit" className="submit-button">
                    Məhsulu Əlavə Et
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
