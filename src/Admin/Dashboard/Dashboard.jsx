import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../index.css"; 

export default function Dashboard() {
  return (
    <div id="adminDashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><NavLink className='same' to="/admin/product_form" activeClassName="active">Products CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/insert_blog" activeClassName="active">Blogs CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/team_form" activeClassName="active">Our Team CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/vision-mission-form" activeClassName="active">Our Vision/Mission</NavLink></li>
        <li><NavLink className='same' to="/admin/easy_step_to_buy_property" activeClassName="active">Easy Step to Buy Property</NavLink></li>
        <li><NavLink className='same' to="/admin/why_choose_us" activeClassName="active">Why Choose Us</NavLink></li>
        <li><NavLink className='same' to="/admin/services" activeClassName="active">Services</NavLink></li>
        <li><NavLink className='same' to="/admin/about_us" activeClassName="active">About Us</NavLink></li>
        <li><NavLink className='same' to="/admin/gallery" activeClassName="active">Our Gallery CRUD</NavLink></li>
      </ul>
    </div>
  );
}
