import { NavLink } from "react-router-dom";
import "../styles/layout.scss";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/html" className={({ isActive }) => isActive ? "active" : ""}>HTML</NavLink>
      <NavLink to="/css" className={({ isActive }) => isActive ? "active" : ""}>CSS</NavLink>
      <NavLink to="/javascript" className={({ isActive }) => isActive ? "active" : ""}>JavaScript</NavLink>
      <NavLink to="/react" className={({ isActive }) => isActive ? "active" : ""}>React</NavLink>
      <NavLink to="/sanity" className={({ isActive }) => isActive ? "active" : ""}>Sanity</NavLink>
    </nav>
  );
};

export default Nav;