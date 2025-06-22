import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../Style/SecondServiceSection.css';
import brandingicon from '/Images/Services/branding-2.png';

export default function SecondServiceSection() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="service-second-section" ref={sectionRef}>
      <div className="service-content-wrapper">
        
        {/* Heading with animation */}
        <motion.div 
          className="service-heading" 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: sectionVisible ? 1 : 0, y: sectionVisible ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          <h2>Branding and Digital Designs Services</h2>
          <img src={brandingicon} alt="Service Icon" className="service-icon" />
        </motion.div>

        {/* Services Grid */}
        <div className="service-grid">
          <motion.div 
            className={`servicecard ${sectionVisible ? 'animate' : ''}`} 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3>Logo Design</h3>
            <p className='sec1'>
              Crafting unique and memorable logos that represent your clients' brands. 
              Every logo is designed to be instantly recognizable and visually appealing, 
              ensuring it stands out in a crowded market.
            </p>
          </motion.div>
          <motion.div 
            className={`servicecard ${sectionVisible ? 'animate' : ''}`} 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3>Branding and Identity Design</h3>
            <p>
              Developing comprehensive brand identities that encompass logos, color schemes, typography, 
              and brand guidelines. This service helps clients establish a consistent and professional image 
              across all their marketing materials.
            </p>
          </motion.div>
          <motion.div 
            className={`servicecard ${sectionVisible ? 'animate' : ''}`} 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3>Social Media Posts Visual Designs</h3>
            <p>
              Designing visually engaging social media posts tailored to different platforms (Instagram, Facebook, X, etc.). 
              These designs help clients maintain an active and appealing social media presence.
            </p>
          </motion.div>
          <motion.div 
            className={`servicecard ${sectionVisible ? 'animate' : ''}`} 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h3>Interactive PDF Designs</h3>
            <p>
              Producing interactive PDFs that include clickable elements, animations, and multimedia. 
              These documents can be used for presentations, reports, manuals, and more, offering an engaging 
              way to convey information.
            </p>
          </motion.div>
          <motion.div 
            className={`servicecard ${sectionVisible ? 'animate' : ''}`} 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <h3>Infographics and Data Visualization</h3>
            <p>
              Transforming complex data into easy-to-understand infographics and visual representations. 
              These designs help clients present their ideas in a visually appealing and informative manner.
            </p>
          </motion.div>
          <motion.div 
            className={`servicecard ${sectionVisible ? 'animate' : ''}`} 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <h3>Company Profiles, Brochures and Presentations</h3>
            <p>
              Designing professional and persuasive company profiles, brochures, and presentations. 
              These materials are essential for business meetings, pitches, and marketing efforts, 
              helping clients showcase their products, services, and achievements effectively.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
