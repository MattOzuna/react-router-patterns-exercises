import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <ul>
          <li>
            <NavLink to="/dogs">Dogs</NavLink>
          </li>
          <li>
            <NavLink to="/colors">Colors</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
