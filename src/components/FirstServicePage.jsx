import '../Style/FirstServicePage.css';
import { NavLink } from 'react-router-dom';
import logo from '/Images/Home/Main Logo.png';
import logo2 from '/Images/Home/Second Section Logo.png';
import contexticon from '/Images/Home/Titles Logo.png';
import { useEffect, useRef, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import {FaHistory, FaInfoCircle, FaPhoneAlt, FaServicestack } from 'react-icons/fa';
import { motion } from 'framer-motion'; // 👉 import framer motion

export default function FirstServicePage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const videoRef = useRef(null);

  const menuItems = [
    { name: 'Home', path: '/', icon: <AiFillHome /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Our Story', path: '/story', icon: <FaHistory /> },
    { name: 'Services', path: '/services', icon: <FaServicestack /> },
    { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          videoRef.current.play();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="Service-container">
      <button className="hamburger" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        ☰
      </button>

      <div className="navbar-top">
        <a href="/" className="logo"><img src={logo} alt="logo" /></a>
      </div>

      {/* Sidebar for large screens */}
      <div className="content-wrapper2">
        <div className="sidebar">
          <div className="vertical-line"></div>
          <ul>
            {menuItems.map((item, index) => (
              <li key={item.name} style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Section */}
        <motion.div 
          className="Service-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="text-Service"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="ServiceTitle">
              <h1>
                <img src={contexticon} alt="decor" className="decor7" /> Our Services
              </h1>
              <br />
            </div>
            <p>We specialize in a range of advertising services.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="mobile-nav">
          <ul>
            <li>
              <a href="/" className="logo2"><img src={logo2} alt="logo2" /></a>
            </li>
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
                  <span className="icon">{item.icon}</span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
