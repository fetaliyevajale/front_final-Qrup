import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProduct = ({ productId }) => {
    const [productData, setProductData] = useState({
        name: '',
        address: '',
        price: '',
        size: '',
        bedrooms: '',
        bathrooms: ''
    });

    const [loading, setLoading] = useState(false); // Yükləmə prosesi üçün
    const [error, setError] = useState(null); // Xətaların saxlanması üçün
    const [successMessage, setSuccessMessage] = useState(''); // Uğurlu yeniləmə mesajı

    // Məhsul məlumatlarını yükləyən useEffect
    useEffect(() => {
        const fetchProductData = async () => {
            setLoading(true); // Yükləməni başladın
            setError(null); // Əvvəlki xətaları sıfırlayın
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/products/${productId}`);
                setProductData(response.data);
            } catch (error) {
                console.error('Məhsul məlumatları alınarkən xəta baş verdi:', error);
                setError('Məhsul məlumatları alınarkən xəta baş verdi. Lütfən, yenidən cəhd edin.');
            } finally {
                setLoading(false); // Yükləmə bitdi
            }
        };

        fetchProductData();
    }, [productId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value
        });
    };

    const handleUpdateProduct = async () => {
        setError(null); // Əvvəlki xətaları sıfırlayın
        setSuccessMessage(''); // Uğurlu mesajı sıfırlayın

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Token tapılmadı. Zəhmət olmasa daxil olun.');
                return;
            }

            const response = await axios.put(`http://127.0.0.1:8000/api/products/${productId}`, productData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                setSuccessMessage('Məhsul uğurla yeniləndi.');
                console.log('Məhsul uğurla yeniləndi:', response.data);
            }
        } catch (error) {
            console.error('Məhsul yenilənərkən xəta baş verdi:', error);
            setError(
                error.response?.data?.message ||
                'Məhsul yenilənərkən xəta baş verdi. Lütfən, yenidən cəhd edin.'
            );
        }
    };

    return (
        <div className="update-product-container">
            <h2>Məhsul Yeniləmə</h2>
            {loading && <p>Yüklənir...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

            {!loading && (
                <>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleInputChange}
                        placeholder="Məhsul Adı"
                    />
                    <input
                        type="text"
                        name="address"
                        value={productData.address}
                        onChange={handleInputChange}
                        placeholder="Ünvan"
                    />
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleInputChange}
                        placeholder="Qiymət"
                    />
                    <input
                        type="number"
                        name="size"
                        value={productData.size}
                        onChange={handleInputChange}
                        placeholder="Sahə (kv.ft)"
                    />
                    <input
                        type="number"
                        name="bedrooms"
                        value={productData.bedrooms}
                        onChange={handleInputChange}
                        placeholder="Yataq otağı sayı"
                    />
                    <input
                        type="number"
                        name="bathrooms"
                        value={productData.bathrooms}
                        onChange={handleInputChange}
                        placeholder="Hamam sayı"
                    />
                    <button onClick={handleUpdateProduct}>Məhsulu Yenilə</button>
                </>
            )}
        </div>
    );
};

export default UpdateProduct;
