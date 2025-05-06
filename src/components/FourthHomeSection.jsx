import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅
import '../Style/FourthHomeSection.css';

export default function FourthHomeSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // ✅

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

  const handleClick = () => {
    navigate('/contact'); // ✅
  };

  return (
    <div className="contact-cta-section" ref={sectionRef}>
      <div className="overlay">
        <h2 className={isVisible ? 'active' : ''}>Let’s build something great together!</h2>
        <button className={isVisible ? 'active' : ''} onClick={handleClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
}
