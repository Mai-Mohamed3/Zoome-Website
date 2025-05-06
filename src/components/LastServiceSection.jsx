import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // استيراد framer-motion
import '../Style/LastServiceSection.css';
import websiteIcon from '/Images/Services/coding-1.png'; 
import printingIcon from '/Images/Services/paper-rolls-1.png';

export default function LastServiceSection() {
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

        {/* Websites Developments */}
        <div className="service-category">
          <motion.div 
            className="service-heading" 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, y: sectionVisible ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            <h1>Websites Developments</h1>
            <img src={websiteIcon} alt="Service Icon" className="Service Icon " />
          </motion.div>

          <div className="services-grid three-columns">
            <motion.div 
              className="servicecard" 
              initial={{ opacity: 0, x: 100 }} 
              animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
              transition={{ duration: 0.8, delay: 0.3 }} // delay for each card
            >
              <h3>Website Design and Development</h3>
              <p>Crafting visually stunning and highly functional websites that provide an excellent user experience across all devices.</p>
            </motion.div>
            <motion.div 
              className="servicecard" 
              initial={{ opacity: 0, x: 100 }} 
              animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
              transition={{ duration: 0.8, delay: 0.5 }} // delay for each card
            >
              <h3 className='userinterfacetitle'>User Interface (UI) and User Experience (UX) Design</h3>
              <p>Creating intuitive and aesthetically pleasing interfaces to enhance the user experience and meet the client’s goals.</p>
            </motion.div>
            <motion.div 
              className="servicecard" 
              initial={{ opacity: 0, x: 100 }} 
              animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
              transition={{ duration: 0.8, delay: 0.7 }} // delay for each card
            >
              <h3>Search Engine Optimization (SEO)</h3>
              <p>Improving website rankings with keyword research, content creation, link building, and more to drive organic traffic.</p>
            </motion.div>
          </div>
        </div>

        {/* Printing Services */}
        <div className="service-category">
          <motion.div 
            className="service-heading" 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, y: sectionVisible ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            <h1>Printing Services</h1>
            <img src={printingIcon} alt="Printing Icon" className="Service Icon printing" />
          </motion.div>

          <div className="services-grid three-columns">
            <motion.div 
              className="servicecard" 
              initial={{ opacity: 0, x: 100 }} 
              animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
              transition={{ duration: 0.8, delay: 0.3 }} // delay for each card
            >
              <h3>Packaging and Product Design</h3>
              <p>Innovative packaging designs that stand out and reflect the brand identity, combining functionality and visual appeal.</p>
            </motion.div>
            <motion.div 
              className="servicecard" 
              initial={{ opacity: 0, x: 100 }} 
              animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
              transition={{ duration: 0.8, delay: 0.5 }} // delay for each card
            >
              <h3>Printing Designs and Brochures</h3>
              <p>Designing eye-catching print materials from business cards to detailed brochures, delivering strong brand messaging.</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
