import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import { fetchProducts } from '../../api/api';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts()
          .then((res) => {
            setProducts(res.data); 
            setLoading(false);
          })
          .catch((err) => {
            console.error("Məhsulları çəkməkdə səhv:", err);
            setLoading(false); 
          });
    }, []);

    // Məhsulu yeniləmək üçün funksiya
    const handleUpdate = (newProduct) => {
        setSelectedProduct(null);
        setProducts(prevProducts => [...prevProducts, newProduct]); // Yeni məhsulu əlavə edirik
    };

    // Redaktə etmək üçün məhsulu seçən funksiya
    const handleEdit = (product) => {
        setSelectedProduct(product);
    };

    // Məhsulu silmək üçün funksiya
    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/products/${id}`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        })
        .then(() => fetchProducts().then((res) => setProducts(res.data)))
        .catch(error => console.error("Məhsulu silməkdə səhv:", error));
    };

    return (
        <div>
            <h1>Admin - Məhsullar</h1>
            {/* Məhsul formu */}
            <ProductForm onAdd={handleUpdate} />  {/* `onAdd` props yeni məhsulu qəbul edir */}
            {/* Məhsulların siyahısı */}
            <div className="flexWrap">
                {products?.map((product, index) => (
                    <ProductList 
                        key={index} 
                        product={product} 
                        onEdit={handleEdit} 
                        onDelete={handleDelete} 
                    />
                ))}
            </div>
        </div>
    );
};

export default AdminProducts;
