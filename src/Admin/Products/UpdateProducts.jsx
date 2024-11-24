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

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/products/${productId}`);
                setProductData(response.data);
            } catch (error) {
                console.error('Məhsul məlumatları alınarkən xəta baş verdi:', error);
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
        try {
            const token = localStorage.getItem('token'); 
            const response = await axios.put(`http://127.0.0.1:8000/api/products/${productId}`, productData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                console.log('Məhsul uğurla yeniləndi:', response.data);
            }
        } catch (error) {
            console.error("Məhsul yenilənərkən xəta baş verdi:", error);
        }
    };

    return (
        <div>
            <h2>Məhsul Yeniləmə</h2>
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
        </div>
    );
};

export default UpdateProduct;
