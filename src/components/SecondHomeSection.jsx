import { useEffect, useRef, useState } from 'react';
import '../Style/SecondHomeSection.css';
import logo from '/Images/Home/Nav Bar Logo.png';

export default function SecondHomeSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // يعني أول ما يظهر 30% من العنصر
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
    <div className="section-with-bg" ref={sectionRef}>
      <div className={`overlay-content ${isVisible ? 'active' : ''}`}>
        <h2>
          Your Story, Our Strategy,
          <br />
          Shared with the World
        </h2>
        <p>
          We are not just an agency; we are your strategic partner in growth. 
          With a focus on professionalism and creativity, we blend modern marketing techniques with time-tested strategies. 
          Whether you need brand development, digital marketing campaigns, or creative design services, 
          we are here to turn your vision into reality.
        </p>
        
      </div>
      <div className='bottomlogo'>
          <img src={logo} alt="logo in bottom" />
        </div>
    </div>
  );
}
