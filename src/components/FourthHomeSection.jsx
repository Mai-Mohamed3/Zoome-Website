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
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Zoome Advertising Company Profile.pdf';
    link.download = 'Zoome Advertising Company Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-cta-section" ref={sectionRef}>
      <div className="overlay">
        <h2 className={isVisible ? 'active' : ''}>Let’s build something great together!</h2>
        <div className='contact-cta-btns'>
          <button className={isVisible ? 'active' : ''} onClick={handleClick}>
            Contact Us
          </button>
          <button id='profile-btn' className={isVisible ? 'active' : ''} onClick={handleDownload}>
            Download Profile
          </button>
        </div>
      </div>
    </div>
  );
}
