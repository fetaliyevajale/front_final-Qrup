import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div id='adminDashboard'>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><NavLink className='same' to="/admin/show_who_we_are">Who We Are</NavLink></li>
        <li><NavLink className='same' to="/admin/show_how_we_works">How We Work</NavLink></li>
        <li><NavLink className='same' to="/admin/show_about_secura">About Secura</NavLink></li>
        <li><NavLink className='same' to="/admin/show_hero_slide">Hero Slide</NavLink></li>
        <li><NavLink className='same' to="/admin/our_vision_mission">Our Vision/Mission</NavLink></li>
        <li><NavLink className='same' to="/admin/hero">Hero</NavLink></li>
        <li><NavLink className='same' to="/admin/blogs">Blogs</NavLink></li>
        <li><NavLink className='same' to="/admin/contact_us">Contact Us</NavLink></li>
        <li><NavLink className='same' to="/admin/products">Product Add</NavLink></li>
        <li><NavLink className='same' to="/admin/our_team">Our Team</NavLink></li>
        <li><NavLink className='same' to="/admin/secura_content">Secura Content</NavLink></li>
        <li><NavLink className='same' to="/admin/privacy_policy">Privacy Policy</NavLink></li>
        <li><NavLink className='same' to="/admin/terms_conditions">Terms and Conditions</NavLink></li>
      </ul>

      <h3>Admin - CRUD Sections</h3>
      <ul>
        <li><NavLink className='same' to="/admin/products/crud">Products CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/blogs/crud">Blogs CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/our_team/crud">Our Team CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/our_vision_mission/crud">Our Vision/Mission CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/easy_step_to_buy_property/crud">Easy Step to Buy Property CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/why_choose_us/crud">Why Choose Us CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/services/crud">Our Services CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/featured_services/crud">Featured Services CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/real_estate_services/crud">Real Estate Services</NavLink></li>
        <li><NavLink className='same' to="/admin/our_providers/crud">Our Providers CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/about_us/crud">About Us CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/about_us_hero/crud">About Us Hero CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/our_agent/crud">Our Agent CRUD</NavLink></li>
        <li><NavLink className='same' to="/admin/gallery/crud">Our Gallery CRUD</NavLink></li>
      </ul>
    </div>
  );
}
