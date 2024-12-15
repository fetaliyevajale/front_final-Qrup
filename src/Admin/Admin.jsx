import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Navbar from './Dashboard/Navbar';
import ProductForm from './Products/ProductForm';
import AdminProducts from './Products/AdminProducts';
import ProductList from './Products/ProductList';
import UpdateProducts from './Products/UpdateProducts';
import BlogForm from './Blogs/BlogForm'; 
import AdminBlogs from './Blogs/AdminBlogs';
import BlogList from './Blogs/BlogList';
import UpdateBlog from './Blogs/UpdateBlog';
import TeamForm from './Teams/TeamForm';
import AdminTeams from "./Teams/AdminTeams";
import TeamList from './Teams/TeamList';
import CartForm from './Cart/CartForm';
import CartList from "./Cart/CartList";
import AdminCart from './Cart/AdminCart';
import OrderForm from './Orders/OrderForm';
import OrderList from './Orders/OrdersList';
import AdminOrder from './Orders/AdminOrder';

export default function Admin() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/insert_blog" element={<BlogForm />} />
        <Route path="/blogs_crud" element={<BlogList />} />
        <Route path="/update_blog/:id" element={<UpdateBlog />} />
        <Route path="/admin_blog" element={<AdminBlogs />} />
        <Route path="/product_form" element={<ProductForm />} />
        <Route path="/admin_products" element={<AdminProducts />} /> 
        <Route path="/admin_products_list" element={<ProductList />} />
        <Route path="/admin/products/update/:id" element={<UpdateProducts />} />
        <Route path="/team_form" element={<TeamForm />} />
        <Route path="/admin_teams" element={<AdminTeams />} /> 
        <Route path="/admin_teams_list" element={<TeamList />} />
        <Route path="/cart" element={<CartForm />} />
        <Route path="/cart_list" element={<CartList />} />
        <Route path="/admin_cart" element={<AdminCart />} />
        <Route path="/order_form" element={<OrderForm />} /> 
        <Route path="/order_list" element={<OrderList />} />
        <Route path="/admin_order" element={<AdminOrder />} />
        
        {/* Fallback Route for 404 */}
        <Route path="*" element={<div>404 Səhifə tapılmadı</div>} />
      </Routes>
    </div>
  );
}
