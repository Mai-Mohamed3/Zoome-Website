import { useEffect, useRef, useState } from 'react';
import '../Style/ThirdHomeSection.css';
import contexticon from '/Images/Home/Titles Logo.png';
import brandingIcon from '/Images/Home/What We DO Section-01.png';
import webDevIcon from '/Images/Home/What We DO Section-02.png';
import socialMediaIcon from '/Images/Home/What We DO Section-03.png';
import printingIcon from '/Images/Home/What We DO Section-04.png';
import marketingIcon from '/Images/Home/What We DO Section-05.png';
import videoIcon from '/Images/Home/What We DO Section-06.png';

export default function ThirdHomeSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
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

  const services = [
    { icon: brandingIcon, label: "Branding" },
    { icon: socialMediaIcon, label: "Social Media", customClass: "socialicon" },
    { icon: videoIcon, label: "Video" },
    { icon: marketingIcon, label: "Marketing" , customClass: "marketingicon" },
    { icon: webDevIcon, label: "Websites Development", customClass: "webicon" },
    { icon: printingIcon, label: "Printing Designs", customClass: "printicon" },
  ];  

  return (
    <div className="third-section" ref={sectionRef}>
      <div className={`title ${isVisible ? 'active' : ''}`}>
        <h1>
          <img src={contexticon} alt="decor" className="decor" /> What We Do?
        </h1>
        <p>Providing Innovative & Creative Advertising Solutions.</p>
      </div>
      <div className="services">
        {services.map((service, index) => (
          <div
              className={`service-card ${isVisible ? 'active' : ''}`}
              key={index}
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
             >
              <img src={service.icon} alt={service.label} className={service.customClass || ''} />
              <p>{service.label}</p>
            </div>        
            ))}
          </div>
    </div>
  );
}
