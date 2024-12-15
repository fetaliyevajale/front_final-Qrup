import { NavLink } from "react-router-dom";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`} >
        <ul>
          <li>
            <NavLink to="/" style={{ color: "black" }} onClick={toggleSidebar}>Ev</NavLink>
          </li>
          <li>
            <NavLink to="/listing" style={{ color: "black" }} onClick={toggleSidebar}>Siyahı</NavLink>
          </li>
          <li>
            <NavLink to="/services" style={{ color: "black" }} onClick={toggleSidebar}>Siyahı</NavLink>
          </li>
          <li>
            <NavLink to="/blog" style={{ color: "black" }} onClick={toggleSidebar}>Bloq</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={{ color: "black" }} onClick={toggleSidebar}>Haqqında</NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={{ color: "black" }} onClick={toggleSidebar}>Bizimlə əlaqə saxlayın</NavLink>
          </li>
          <li>
            <NavLink to="/pages" style={{ color: "black" }} onClick={toggleSidebar}>Səhifələr</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
