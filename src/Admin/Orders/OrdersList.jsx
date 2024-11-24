// src/Admin/Order/OrderList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/orders', {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    setOrders(response.data);
  };

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order ID: {order.id} - Total: {order.total_amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
