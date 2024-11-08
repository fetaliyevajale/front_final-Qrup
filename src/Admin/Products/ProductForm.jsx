// ProductForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ product, onUpdate }) => {
    const [productData, setProductData] = useState({
        name: '',
        address: '',
        price: '',
        size: '',
        bedrooms: '',
        bathrooms: ''
    });

    useEffect(() => {
        if (product) {
            setProductData(product); 
        }
    }, [product]);

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
            if (productData.id) {
                await axios.put(`http://127.0.0.1:8000/api/admin/products/${productData.id}`, productData, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    }
                });
                console.log('Məhsul yeniləndi');
            } else {
               
              axios.get('http://127.0.0.1:8000/api/admin/products', {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})
                console.log('Məhsul əlavə edildi');
            }
            onUpdate(); 
        } catch (error) {
            console.error('Xəta:', error);
        }
    };

    return (
        <div className="product-form">
            <form onSubmit={handleSubmit}>
                <h2>{product ? 'Məhsul Redaktə Et' : 'Yeni Məhsul Əlavə Et'}</h2>
                <div className="form-group">
                    <label htmlFor="name">Məhsul adı</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        placeholder="Məhsul adı"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Məhsul Qiyməti</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        placeholder="Məhsul qiyməti"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Məhsul Ünvanı</label>
                    <input
                        type="text"
                        name="address"
                        value={productData.address}
                        onChange={handleChange}
                        placeholder="Məhsul ünvanı"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="size">Ölçü</label>
                    <input
                        type="text"
                        name="size"
                        value={productData.size}
                        onChange={handleChange}
                        placeholder="Ölçü"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="bedrooms">Yataq Otağı Sayı</label>
                    <input
                        type="number"
                        name="bedrooms"
                        value={productData.bedrooms}
                        onChange={handleChange}
                        placeholder="Yataq otağı sayı"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="bathrooms">Hamam Otağı Sayı</label>
                    <input
                        type="number"
                        name="bathrooms"
                        value={productData.bathrooms}
                        onChange={handleChange}
                        placeholder="Hamam otağı sayı"
                    />
                </div>

                <button type="submit" className="submit-button">{product ? 'Məhsulu Yenilə' : 'Məhsulu Əlavə Et'}</button>
            </form>
        </div>
    );
};

export default ProductForm;
