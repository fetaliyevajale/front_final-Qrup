import React, { useState } from "react";
import {
  Route,
  NavLink,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
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
import User from "./Admin/Login/User";
import Register from "./Admin/Login/Register";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/register";
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Digər marşrutlar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
        <Route path="*" element={<NotFound />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>

      {/* Sidebar və Fotter */}
      {!isLoginPage && !isAdminPage && (
        <>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <div className="desktopPages">
            <div className="headerImg">
              <img src="/imagesFile/Logo.png" alt="Logo" />
            </div>

            <div className="headers">
              <header>
                <NavLink style={{ color: "black" }} to="/home">
                  Ana səhifə
                </NavLink>
                <NavLink style={{ color: "black" }} to="/listing">
                  Siyahı
                </NavLink>
                <NavLink style={{ color: "black" }} to="/services">
                  Xidmətlər
                </NavLink>
                <NavLink style={{ color: "black" }} to="/blog">
                  Bloq
                </NavLink>
                <NavLink style={{ color: "black" }} to="/about">
                  Haqqında
                </NavLink>
                <NavLink style={{ color: "black" }} to="/contact">
                  Bizimlə əlaqə saxlayın
                </NavLink>

                <div className="custom-dropdown">
                  <button className="dropdown-toggle">Səhifələr</button>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/help-center">Yardım Mərkəzi</NavLink>
                    </li>
                    <li>
                      <NavLink to="/gallery">Qalereya</NavLink>
                    </li>
                    <li>
                      <NavLink to="*">404 Səhifə</NavLink>
                    </li>
                  </ul>
                </div>
              </header>
              <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>

              {/* user */}
              <User />
            </div>
          </div>

          <Fotter />
        </>
      )}
    </div>
  );
}

export default App;
