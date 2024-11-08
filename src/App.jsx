import React, { useState } from "react";
import { Route, NavLink, Routes, useLocation } from "react-router-dom";
import Home from "./outline/home/Home";
import Listing from "./outline/listing/Listing";
import Services from "./outline/servics/Services";
import About from "./outline/about/About";
import Contact from "./outline/contact/Contact";
import Pages from "./outline/pages/Pages";
import Fotter from "./Fotter";
import ListingDetails from "./outline/listing/ListingDetails";
import Blog from "./outline/blogs/Blog";
import SingleBlog from "./outline/blogs/SingleBlog";
import Gallery from "./outline/pages/Gallery";
import HelpCenter from "./outline/pages/HelpCenter";
import NotFound from "./outline/pages/NotFound";
import Sidebar from "./Sidebar";
import Login from "./Admin/Login/Login";
import Admin from "./Admin/Admin";
import BlogForm from "./Admin/Blogs/BlogForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Check if the current path is the login or admin page
  const isLoginPage = location.pathname === "/";
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div>
      {/* Only render Routes for Login and Admin */}
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Admin marşrutları */}
        <Route path="/admin/*" element={<Admin />} /> {/* Admin komponentini istifadə edin */}
        
        {/* Digər marşrutlar */}
        {!isLoginPage && !isAdminPage && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/details/:id" element={<ListingDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/singleBlog/:id" element={<SingleBlog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/help-center" element={<HelpCenter />} />
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
            
          </>
        )}
      </Routes>

      {/* Only display Sidebar, Navbar, and Fotter if not on the login or admin page */}
      {!isLoginPage && !isAdminPage && (
        <>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <div className="desktopPages">
            <div className="headerImg">
              <img src="/imagesFile/Logo.png" alt="Logo" />
            </div>

            <div className="headers">
              <header>
                <NavLink style={{ color: "black" }} to="/home">Home</NavLink>
                <NavLink style={{ color: "black" }} to="/listing">Listing</NavLink>
                <NavLink style={{ color: "black" }} to="/services">Services</NavLink>
                <NavLink style={{ color: "black" }} to="/blog">Blog</NavLink>
                <NavLink style={{ color: "black" }} to="/about">About</NavLink>
                <NavLink style={{ color: "black" }} to="/contact">Contact Us</NavLink>

                <div className="custom-dropdown">
                  <button className="dropdown-toggle">Pages</button>
                  <ul className="dropdown-menu">
                    <li><NavLink to="/help-center">Help Center</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    <li><NavLink to="*">404 Page</NavLink></li>
                  </ul>
                </div>
              </header>
              <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
              <button>Get a Quote</button>
            </div>
          </div>

          {/* Only display Fotter if not on the login or admin page */}
          <Fotter />
        </>
      )}
    </div>
  );
}

export default App;
