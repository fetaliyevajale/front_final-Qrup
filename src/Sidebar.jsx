import { NavLink } from "react-router-dom";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`} >
        <ul>
          <li>
            <NavLink to="/" style={{ color: "black" }} onClick={toggleSidebar}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/listing" style={{ color: "black" }} onClick={toggleSidebar}>Listing</NavLink>
          </li>
          <li>
            <NavLink to="/services" style={{ color: "black" }} onClick={toggleSidebar}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/blog" style={{ color: "black" }} onClick={toggleSidebar}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={{ color: "black" }} onClick={toggleSidebar}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={{ color: "black" }} onClick={toggleSidebar}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/pages" style={{ color: "black" }} onClick={toggleSidebar}>Pages</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
