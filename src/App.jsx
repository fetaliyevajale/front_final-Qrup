

import { Route, NavLink, Routes } from "react-router-dom";
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

function App() {
  return (
    <div>
      <div className="desktopPages">
        <div className="headerImg">
          <img src="/imagesFile/Logo.png" alt="Logo" />
        </div>

        <div className="headers">
          <header>
            <NavLink style={{ color: "black" }} to="/">
              Home
            </NavLink>
            <NavLink style={{ color: "black" }} to="/listing">
              Listing
            </NavLink>
            <NavLink style={{ color: "black" }} to="/services">
              Services
            </NavLink>
            <NavLink style={{ color: "black" }} to="/blog">
              Blog
            </NavLink>
            <NavLink style={{ color: "black" }} to="/about">
              About
            </NavLink>
            <NavLink style={{ color: "black" }} to="/contact">
              Contact Us
            </NavLink>

            {/* Dropdown for Pages */}
            <div className="dropdown">
              <NavLink
                className=""
                style={{ color: "black" }}
                to="/pages"
              
              >
                Pages
              </NavLink>
              <ul className="dropdown-menu" >
                <li>
                  <NavLink className="dropdown-item" to="/gallery">
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/help-center">
                    Help Center
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="*">
                    404 Page
                  </NavLink>
                </li>
              </ul>
            </div>
          </header>
          <i className="fa-solid fa-bars"></i>
          <button>Get a Quote</button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="*" element={<>404 NOT FOUND</>} />
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
