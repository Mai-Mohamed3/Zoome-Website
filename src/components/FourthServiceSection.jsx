import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // استيراد framer-motion
import '../Style/SecondServiceSection.css'; 
import brandingicon from '/Images/Services/video-1.png';

export default function FourthServiceSection() {
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
          <h2>Video Services</h2>
          <img src={brandingicon} alt="Service Icon" className="service-icon" />
        </motion.div>

        {/* Services Grid */}
        <div className="service-grid">
          <motion.div 
            className="servicecard" 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
            transition={{ duration: 0.8, delay: 0.3 }} // delay for each card
          >
            <h3>Corporate Videos</h3>
            <p>A corporate video is more than just visuals — it’s a strategic tool to communicate your brand’s vision, mission, and values. We craft professional corporate videos that effectively introduce your company, highlight your achievements, and build credibility.</p>
          </motion.div>
          <motion.div 
            className="servicecard" 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
            transition={{ duration: 0.8, delay: 0.5 }} // delay for each card
          >
            <h3>Commercials & Advertisements</h3>
            <p>We produce high-impact commercials and ads designed to capture attention and drive customer action. Whether for TV, online platforms, or in-store displays, we create compelling video ads that leave a lasting impression.</p>
          </motion.div>
          <motion.div 
            className="servicecard" 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
            transition={{ duration: 0.8, delay: 0.7 }} // delay for each card
          >
            <h3>Social Media Videos</h3>
            <p>Social media thrives on video content, and we create short, engaging, and shareable videos tailored for platforms like Instagram, Facebook, LinkedIn, TikTok, and YouTube. Our videos are optimized to increase reach, engagement, and conversions.</p>
          </motion.div>
          <motion.div 
            className="servicecard" 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
            transition={{ duration: 0.8, delay: 0.9 }} // delay for each card
          >
            <h3>Motion Graphics & Animation</h3>
            <p>Animated videos are a great way to simplify complex ideas and grab attention. We create dynamic motion graphics, explainer videos, and 2D/3D animations to deliver your message in a visually appealing way.</p>
          </motion.div>
          <motion.div 
            className="servicecard" 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: sectionVisible ? 1 : 0, x: sectionVisible ? 0 : 100 }} 
            transition={{ duration: 0.8, delay: 1.1 }} // delay for each card
          >
            <h3>Event Coverage</h3>
            <p>Capture the highlights of your most important events with professional filming and editing. Whether it’s a corporate event, product launch, or conference, we ensure that every key moment is beautifully documented and presented.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
