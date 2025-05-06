import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../Style/ThirdAboutSection.css';
import visionImg from '/Images/About/Our Vision.png';
import missionImg from '/Images/About/Our Mission.png';
import contexticon from '/Images/Home/Titles Logo.png';

const ThirdAboutSection = () => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true });

  const titleVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const textFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  const imageFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  const textFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  const imageFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <section className="about-section3" ref={sectionRef}>
      
      {/* First Block */}
      <div className="about-block">
        <motion.div 
          className="about-text dark-bg"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textFromLeft}
        >
          <motion.div 
            className='thirdtitle text1'
            variants={titleVariant}
          >
            <h2><img src={contexticon} alt="decor" className="decor5" /> Our Vision</h2>
          </motion.div>
          <p>
            To be a leading force in the marketing and advertising industry, enabling businesses to thrive by crafting meaningful connections with their audiences. We aim to set new standards through innovative, creative, and data-driven solutions, inspiring sustainable growth and brand loyalty across industries.
          </p>
        </motion.div>

        <motion.div 
          className="about-image light-bg"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageFromRight}
        >
          <img src={visionImg} alt="Vision" />
        </motion.div>
      </div>

      {/* Second Block */}
      <div className="about-block reverse">
        <motion.div 
          className="about-text dark-bg missiontext"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textFromRight}
        >
          <motion.div 
            className='thirdtitle'
            variants={titleVariant}
          >
            <h2><img src={contexticon} alt="decor" className="decor6" /> Our Mission</h2>
          </motion.div>
          <p>
            Our mission is simple: to help brands succeed by creating meaningful connections between them and their audiences. Whether you're a small startup or an established enterprise, we're here to take your advertising to the next level.
          </p>
        </motion.div>

        <motion.div 
          className="about-image light-bg missionimage"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageFromLeft}
        >
          <img src={missionImg} alt="Mission" />
        </motion.div>
      </div>

    </section>
  );
};

export default ThirdAboutSection;
