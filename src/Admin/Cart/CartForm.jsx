// src/Admin/Cart/CartForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CartForm = () => {
  const [cartData, setCartData] = useState({
    user_id: '',
    product_id: '',
    quantity: 1,
  });

  const handleChange = (e) => {
    setCartData({
      ...cartData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/cart', cartData, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Product added to cart');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
<div className='homecart'>
<form onSubmit={handleSubmit}>
      <label>User ID:</label>
      <input type="text" name="user_id" value={cartData.user_id} onChange={handleChange} />
      
      <label>Product ID:</label>
      <input type="text" name="product_id" value={cartData.product_id} onChange={handleChange} />

      <label>Quantity:</label>
      <input type="number" name="quantity" value={cartData.quantity} onChange={handleChange} />

      <button type="submit">Add to Cart</button>
    </form>
</div>
  );
};

export default CartForm;
