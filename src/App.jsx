import { Route, Link, NavLink, Routes } from "react-router-dom";
import Home from "./outline/home/Home";
import Listing from "./outline/listing/Listing";
import Services from "./outline/servics/Services";
import About from "./outline/About";
import Contact from "./outline/Contact";
import Pages from "./outline/Pages";
import Fotter from "./Fotter";
import ListingDetails from "./outline/listing/ListingDetails";
import Blog from "./outline/blogs/Blog";
function App() {
  return (
    <div>
      <div className="desktopPages">
        <div className="headerImg">
          <img src="/imagesFile/Logo.png" alt="" />
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />} />
        {/* 404 s'hif' */}
        <Route path="*" element={<>404 NOT FOUND</>} />
      </Routes>

      <Fotter />
    </div>
  );
}

export default App;
