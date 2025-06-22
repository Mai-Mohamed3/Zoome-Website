import '../Style/FirstStoryPage.css';
import { NavLink } from 'react-router-dom';
import logo from '/Images/Home/Main Logo.png';
import logo2 from '/Images/Home/Second Section Logo.png';
import contexticon from '/Images/Home/Titles Logo.png';
import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import {FaHistory, FaInfoCircle, FaPhoneAlt, FaServicestack } from 'react-icons/fa';
import { motion } from 'framer-motion'; // ✅ مكتبة الأنيميشن
import ceoImage from '/Images/Story/ceoimg.png'

export default function FirstStorySection() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/', icon: <AiFillHome /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Our Story', path: '/story', icon: <FaHistory /> },
    { name: 'Services', path: '/services', icon: <FaServicestack /> },
    { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> },
  ];

  return (
    <div className="Story-container">
      <button className="hamburger" onClick={() => setShowMobileMenu(!showMobileMenu)}>☰</button>

      <div className="navbar-top">
        <a href="/" className="logo"><img src={logo} alt="logo" /></a>
      </div>

      <div className="content-wrapper5">
        {/* Sidebar */}
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

        {/* Right Section */}
        <motion.div
          className="story-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='ceoheader'>
            <h1 className="ceotitle">
              <img src={contexticon} alt="decor" className="decor10" />CEO Message
            </h1>
            <div className="ceo-info">
              <div className="ceo-text">
                <h2 className="ceo-name">Eslam Mohamed</h2>
                <p className="ceo-role">CEO, Zoome Advertising<br />Art Director</p>
              </div>
              <div className="ceo-image">
                <img src={ceoImage} alt="CEO" />
              </div>
            </div>
          </div>
          <div className="ceo-description">
            <p>
              My name is Eslam Abdel Khalek, and before founding Zoome Advertising, I spent over 7 years working
              as a freelance designer and creative partner with a wide range of clients across different industries —
              from construction and finance to tech and media.
            </p>
            <p>
              During that journey, I had the chance to work closely with some of the region’s most respected companies,
              delivering high-impact branding, corporate materials, and visual storytelling that helped businesses grow,
              pitch better, and stand out.
            </p>
            <p>
              I built Zoome to take that same level of creative excellence to the next level — with a full team, structured
              processes, and a clear mission:
            </p>
            <p className="highlight">
              To empower companies with creative tools that inspire action and deliver real business results.
            </p>
            <p>
              Whether it’s a pitch deck, a company profile, or a complete brand identity — we’re here to make your message
              unforgettable.
            </p>
          </div>
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
