import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import { fetchProducts } from '../../api/api'; // API-nin məhsulları çəkmə funksiyası

const AdminProducts = () => {
    const [products, setProducts] = useState([]); // Məhsulları saxlamaq üçün vəziyyət
    const [selectedProduct, setSelectedProduct] = useState(null); // Redaktə üçün seçilmiş məhsul
    const [loading, setLoading] = useState(true); // Yüklənmə vəziyyəti

    useEffect(() => {
        // Məhsulları çəkmək üçün API çağırışı
        fetchProducts()
          .then((res) => {
            setProducts(res.data); // Məhsulları vəziyyətə yazırıq
            setLoading(false);
          })
          .catch((err) => {
            console.error("Məhsulları çəkməkdə səhv:", err);
            setLoading(false); 
          });
    }, []);

    // Məhsulu yeniləmək üçün funksiya
    const handleUpdate = () => {
        setSelectedProduct(null); // Məhsul yeniləndikdən sonra seçilmiş məhsulu sıfırlayırıq
        fetchProducts().then((res) => setProducts(res.data)); // Yenilənmiş məhsulları çəkirik
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
            <ProductForm product={selectedProduct} onUpdate={handleUpdate} />
            {/* Məhsulların siyahısı */}
            <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default AdminProducts;
