import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css"; 

export default function Dashboard() {
  return (
    <div id="adminDashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><NavLink className='same' to="/admin/product_form">Products CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/insert_blog">Blogs CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/team_form">Our Team CRUD</NavLink></li>
   
      </ul>
    </div>
  );
}