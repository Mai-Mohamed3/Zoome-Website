import '../Style/FirstAboutSection.css';
import { NavLink } from 'react-router-dom';
import logo from '/Images/Home/Main Logo.png';
import logo2 from '/Images/Home/Second Section Logo.png';
import contexticon from '/Images/Home/Titles Logo.png';
import video from '/Video/Zoome Intro Video.mp4';
import { useEffect, useRef, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaInfoCircle, FaPhoneAlt, FaServicestack } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

export default function FirstAboutPage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const videoRef = useRef(null);
  const aboutSectionRef = useRef();
  const isInView = useInView(aboutSectionRef, { once: true });

  // القائمة
  const menuItems = [
    { name: 'Home', path: '/', icon: <AiFillHome /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Services', path: '/services', icon: <FaServicestack /> },
    { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> },
  ];

  // تشغيل/إيقاف الفيديو حسب الرؤية
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
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
  

  const paragraphVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
      },
    }),
  };

  const videoVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="about-container" ref={aboutSectionRef}>
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

        <div className="Aboutright-section">
          <div className="text-column">
            <div className="aboutTitle">
              <h1>
                <img src={contexticon} alt="decor" className="decor3" /> About Us
              </h1><br />
            </div>

            {[
              "Welcome to Zoome Advertising your trusted partner in innovative advertising solutions!",
              "At Zoome Advertising, we believe in the power of creativity and data-driven strategies to help brands grow and thrive.",
              "We are a team of passionate advertising professionals dedicated to crafting campaigns that captivate, engage, and convert.",
              "Welcome to Zoome Advertising your trusted partner in innovative advertising solutions!"
            ].map((text, index) => (
              <motion.p
                key={index}
                custom={index}
                variants={paragraphVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {text}
              </motion.p>
            ))}

          </div>

          <motion.div
            className="video-column"
            variants={videoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <video
              ref={videoRef}
              width="100%"
              playsInline
              autoPlay
              loop
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </motion.div>

        </div>
      </div>

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
