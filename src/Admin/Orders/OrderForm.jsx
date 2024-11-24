// src/Admin/Order/OrderForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [orderData, setOrderData] = useState({
    user_id: '',
    product_id: '',
    quantity: 1,
    total_amount: 0,
  });

  const handleChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/orders', orderData, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Error creating order:', error);
      });
  };

  return (
   <div className='homecart'>
     <form onSubmit={handleSubmit}>
      <label>User ID:</label>
      <input type="text" name="user_id" value={orderData.user_id} onChange={handleChange} />
      
      <label>Product ID:</label>
      <input type="text" name="product_id" value={orderData.product_id} onChange={handleChange} />

      <label>Quantity:</label>
      <input type="number" name="quantity" value={orderData.quantity} onChange={handleChange} />

      <label>Total Amount:</label>
      <input type="number" name="total_amount" value={orderData.total_amount} onChange={handleChange} />

      <button type="submit">Create Order</button>
    </form>
   </div>
  );
};

export default OrderForm;
