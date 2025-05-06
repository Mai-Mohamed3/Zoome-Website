import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../Style/Footer.css';
import { NavLink } from 'react-router-dom';
import Zoome from '/Images/Home/Nav Bar Logo.png';
import Zoomebg from '/Images/Home/Nav Bar Logo 2.png';
import facebook from '/Images/Home/Home Page Elements-15.png';
import instagram from '/Images/Home/Home Page Elements-16.png';
import linkedin from '/Images/Home/Home Page Elements-17.png';

const Footer = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <footer className="footer" ref={ref}>
      <div className="footer-overlay">
        <div className="footer-content">

          {/* Left Side: Logo + Description */}
          <motion.div
            className="footer-left"
            variants={leftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
          >
            <div className="logo-wrapper">
              <img src={Zoomebg} alt="Logo Background" className="logo-bg" />
              <img src={Zoome} alt="Zoome Logo" className="footerlogo" />
            </div>
            <p className="description">
              Founded in 2024 and based in Egypt, Zoome Advertising is a fresh force in the world of marketing and media.
              We specialize in crafting high-performance campaigns with a strong focus on creativity, strategy, and results.
            </p>
          </motion.div>

          {/* Right Side: Company + Social Media */}
          <motion.div
            className="footer-right"
            variants={rightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
          >
            <div className="footer-section">
              <h4>Company</h4>
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
            <div className="footer-section">
              <h4>Social Media</h4>
              <ul>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61571282063751" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zoomeadvertising/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/zoome-advertising" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
