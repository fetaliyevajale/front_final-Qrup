import React, { useState } from "react";
import { Route, NavLink, Routes, useLocation, Navigate } from "react-router-dom";
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

// PrivateRoute komponenti
function PrivateRoute({ children, path }) {
  const isAuthenticated = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("role") === "admin";

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (path.startsWith("/admin") && !isAdmin) {
    // Admin səhifələrinə giriş imkanı yox
    return <Navigate to="/home" replace />;
  }

  return children;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  const isLoginPage = location.pathname === "/";
  const isAdminPage = location.pathname.includes("/admin");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute path="/admin/*">
              <Admin />
            </PrivateRoute>
          }
        />
        {/* Digər marşrutlar */}
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
        <Route path="*" element={<NotFound />} />
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
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>

          <Fotter />
        </>
      )}
    </div>
  );
}

export default App;
