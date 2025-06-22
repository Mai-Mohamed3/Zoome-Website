import { NavLink } from 'react-router-dom';
import '../Style/Sidebar.css';

export default function Sidebar() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Story', path: '/story' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="sidebar">
      <div className="vertical-line"></div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
