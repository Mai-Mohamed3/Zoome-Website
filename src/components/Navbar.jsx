import '../Style/Navbar.css';
import { NavLink } from 'react-router-dom';
import secondlogo from "/Images/Home/Main Logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="/"><img src={secondlogo} alt="Logo" /></a>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
        <li id='story'>
          <NavLink to="/story" className={({ isActive }) => isActive ? 'active' : ''}>
            Our Story
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
