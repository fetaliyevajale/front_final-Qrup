import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css"; 

export default function Dashboard() {
  return (
    <div id="adminDashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><NavLink className='same' to="/admin/products_crud">Products CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/blogs_crud">Blogs CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/teams_crud">Our Team CRUD</NavLink></li>
   
      </ul>
    </div>
  );
}