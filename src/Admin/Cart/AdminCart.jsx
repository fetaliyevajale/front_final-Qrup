// src/Admin/Cart/AdminCart.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/cart', {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    setCartItems(response.data);
  };

  return (
    <div>
      <h1>Admin Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.product.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCart;
