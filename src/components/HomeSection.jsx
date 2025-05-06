import '../Style/HomeSection.css';
import { NavLink } from 'react-router-dom';
import FirstSlide from '/Images/Home/Photo 1.png';
import secondSlide from '/Images/Home/Photo 2.png';
import thirdSlide from '/Images/Home/Photo 3.png';
import logo from '/Images/Home/Main Logo.png';
import logo2 from '/Images/Home/Second Section Logo.png';
import { useState, useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaInfoCircle, FaPhoneAlt, FaServicestack } from 'react-icons/fa';

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const slides = [
    { backgroundImage: `url(${FirstSlide})` },
    { backgroundImage: `url(${secondSlide})` },
    { backgroundImage: `url(${thirdSlide})` },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const menuItems = [
    { name: 'Home', path: '/', icon: <AiFillHome /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Services', path: '/services', icon: <FaServicestack /> },
    { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> },
  ];

  return (
    <div className="hero-container">
      <button className="hamburger" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        ☰
      </button>

      <div className="navbar-top">
        <a href="/" className="logo"><img src={logo} alt="logo" /></a>
      </div>

      {/* Sidebar */}
      <div className="content-wrapper">
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

        {/* Slider */}
        <div className="slider-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === slideIndex ? 'active' : ''}`}
              style={{
                backgroundImage: slide.backgroundImage,
              }}
            />
          ))}
        </div>
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
