import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../Style/ThirdServiceSection.css';
import brandingicon from '/Images/Services/social-media.png';

export default function ThirdServiceSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const services = [
    {
      title: "Strategy and Consulting Services",
      description: "Offering tailored strategies and expert consulting to help clients achieve their marketing goals."
    },
    {
      title: "Managing Social Media Platforms",
      description: "Expertise in handling major social media platforms and ensuring a strong online presence."
    },
    {
      title: "Copywriting and Text Content Creation",
      description: "Crafting compelling copy for blog posts, websites, emails, and social media posts."
    },
    {
      title: "Media Buying Strategy and Ads",
      description: "Developing effective ad strategies and optimizing campaigns on multiple platforms."
    },
    {
      title: "Community Management",
      description: "Building online communities and engaging with followers to enhance brand loyalty."
    },
    {
      title: "Analytics, Optimization, and Monthly Reports",
      description: "Tracking key metrics, optimizing campaigns, and delivering comprehensive reports."
    },
  ];

  return (
    <section className="service-Third-section" ref={sectionRef}>
      <div className="service-content-wrapper">
        {isVisible && (
          <>
            {/* العنوان */}
            <motion.div
              className="service-heading"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1>Social Media Services</h1>
              <img src={brandingicon} alt="Service Icon" className="service-icon" />
            </motion.div>

            {/* الكروت */}
            <div className="service-grid">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="servicecard"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
