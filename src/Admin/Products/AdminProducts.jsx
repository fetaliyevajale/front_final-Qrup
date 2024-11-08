import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import { fetchProducts } from '../../api/api';


const AdminProducts = () => {

    console.log('test....')

    const [products, setProducts] = useState([]); // Define products state
    const [selectedProduct, setSelectedProduct] = useState(null); // Define selectedProduct state
    const [loading, setLoading] = useState(true); // Define selectedProduct state


    useEffect(() => {
        fetchProducts()
          .then((res) =>{
            console.log(res)
            setProducts(res)
            setLoading(false);
          })
          .catch((err) => {
            console.log("Error fetching blogs:", err);  // Log any errors
            setLoading(false); 
          });
        return () => {};
      }, []);

    const handleUpdate = () => {
        console.log('handleUpd')
        // setSelectedProduct(null); 
    };

    const handleEdit = (product) => {
        console.log('handleEdi')
        // setSelectedProduct(product);
    };

    const handleDelete = (id) => {
        console.log('handleDel')
        // axios.delete(`http://127.0.0.1:8000/api/products/${id}`, {
        //     headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        // })
        // .then(() => fetchProducts()) 
        // .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Admin - Məhsullar</h1>
            {/* <ProductForm product={selectedProduct} onUpdate={handleUpdate} /> */}
            <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default AdminProducts;
