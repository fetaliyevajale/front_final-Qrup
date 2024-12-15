import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ product, onUpdate }) => {
    const [productData, setProductData] = useState({
        name: '',
        address: '',
        price: '',
        size: '',
        bedrooms: '',
        bathrooms: '',
        image: null
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (product) {
            setProductData({
                name: product.name,
                address: product.address,
                price: product.price,
                size: product.size,
                bedrooms: product.bedrooms,
                bathrooms: product.bathrooms,
                image: null
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            setProductData({
                ...productData,
                image: files[0]
            });
        } else {
            setProductData({
                ...productData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            setError('Token tapılmadı. Lütfən yenidən daxil olun.');
            return;
        }

        try {
            const formData = new FormData();
            Object.keys(productData).forEach((key) => {
                formData.append(key, productData[key]);
            });

            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            };

            const response = await axios.post('http://127.0.0.1:8000/api/admin/products/store', formData, { headers });

            console.log(response.data.message);

            if (response.data.product) {
                // Yeni məhsulu HeroSection-a göndəririk
                onUpdate(response.data.product);
            }

            setProductData({
                name: '',
                address: '',
                price: '',
                size: '',
                bedrooms: '',
                bathrooms: '',
                image: null
            });

            setError(null);
        } catch (error) {
            console.log('Xəta baş verdi:', error);
            if (error.response) {
                setError(error.response.data?.message || 'Xəta baş verdi. Lütfən yenidən cəhd edin.');
            } else {
                setError('Şəbəkə problemi. Lütfən internet bağlantınızı yoxlayın.');
            }
        }
    };

    return (
        <div className="product-form">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <h2>Yeni Məhsul Əlavə Et</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}

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
                    <label htmlFor="address">Ünvan</label>
                    <input
                        type="text"
                        name="address"
                        value={productData.address}
                        onChange={handleChange}
                        placeholder="Məhsulun ünvanı"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Qiymət</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        placeholder="Məhsulun qiyməti"
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
                        placeholder="Məhsulun ölçüsü"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="bedrooms">Yataq otaqları</label>
                    <input
                        type="number"
                        name="bedrooms"
                        value={productData.bedrooms}
                        onChange={handleChange}
                        placeholder="Yataq otaqları sayı"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="bathrooms">Banyolar</label>
                    <input
                        type="number"
                        name="bathrooms"
                        value={productData.bathrooms}
                        onChange={handleChange}
                        placeholder="Banyoların sayı"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Şəkil</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        accept="image/*"
                        required
                    />
                </div>

                <button type="submit">Məhsulu əlavə et</button>
            </form>
        </div>
    );
};

export default ProductForm;
