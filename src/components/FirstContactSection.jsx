import { useState } from 'react';
import { motion } from 'framer-motion'; // استيراد framer-motion
import '../Style/FirstContactSection.css';
import locationIcon from '/Images/Contact/Group 81.png';
import phoneIcon from '/Images/Contact/Group 79.png';
import emailIcon from '/Images/Contact/Group 80.png';
import facebookIcon from '/Images/Contact/facebook.png';
import instagramIcon from '/Images/Contact/instagram.png';
import linkedinIcon from '/Images/Contact/linkedin.png';
import { NavLink } from 'react-router-dom';
import logo from '/Images/Home/Second Section Logo.png';
import logo2 from '/Images/Home/Second Section Logo.png';
import contexticon from '/Images/Home/Titles Logo.png';
import { AiFillHome } from 'react-icons/ai';
import { FaInfoCircle, FaPhoneAlt, FaServicestack } from 'react-icons/fa';

export default function FirstContactPage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/', icon: <AiFillHome /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Services', path: '/services', icon: <FaServicestack /> },
    { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> },
  ];

  return (
    <div className="contactcontainer">
      <button className="hamburger" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        ☰
      </button>
      <div className="navbar-top contact-navbar">
        <a href="/" className="logo contact-logo"><img src={logo} alt="logo" /></a>
      </div>

      <div className="content-wrapper3">
        {/* Sidebar */}
        <div className="sidebar contact-sidebar">
          <div className="vertical-line"></div>
          <ul>
            {menuItems.map((item, index) => (
              <li 
                key={item.name} 
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Content */}
        <motion.div 
          className="contact-right-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="contactTitle"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              <img src={contexticon} alt="decor" className="decor8" /> Get in Touch
            </h1><br />
          </motion.div>

          <motion.div 
            className="contactcontent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            >
            <motion.div 
              className="contact-item"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={locationIcon} alt="Location Icon" className="contact-icon" />
              <p>El Shorouk City, Cairo, Egypt.</p>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
              <p>+201055503218</p>
            </motion.div>

            <motion.div 
              className="contact-item"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src={emailIcon} alt="Email Icon" className="contact-icon" />
              <p>info@zoome-adv.com</p>
            </motion.div>
            <motion.div 
              className="social-icons"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              >
              <a href="https://www.facebook.com/profile.php?id=61571282063751" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/zoomeadvertising/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/zoome-advertising" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a> 
            </motion.div>

            </motion.div>
          </motion.div>
      </div>

      {/* Mobile Navigation */}
      {showMobileMenu && (
        <motion.div 
          className="mobile-nav"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul>
            <li>
              <a href="/" className="logo2"><img src={logo2} alt="logo2" /></a>
            </li>
            {menuItems.map((item) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
                  <span className="icon">{item.icon}</span>
                  {item.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
