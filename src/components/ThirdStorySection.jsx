import React, { useEffect, useRef, useState } from 'react';
import '../Style/ThirdStorySection.css';
import contexticon from '/Images/Story/storylogo.png';
import p1 from '/Images/Story/1.png';
import p2 from '/Images/Story/2.png';
import p3 from '/Images/Story/3.png';
import p4 from '/Images/Story/4.png';
import p5 from '/Images/Story/5.png';
import p6 from '/Images/Story/6.png';
import p7 from '/Images/Story/7.png';
import p8 from '/Images/Story/8.png';
import p9 from '/Images/Story/9.png';
import p10 from '/Images/Story/10.png';
import p11 from '/Images/Story/11.png';
import p12 from '/Images/Story/12.png';
import p13 from '/Images/Story/13.png';
import p14 from '/Images/Story/14.png';
import p15 from '/Images/Story/15.png';
import p16 from '/Images/Story/16.png';
import p17 from '/Images/Story/17.png';
import p18 from '/Images/Story/18.png';

const logos = [
  p1 ,p2 ,p3 ,p4 ,p5 ,p6 ,p7 ,p8 ,p9 ,p10 ,p11 ,p12 ,p13 ,p14 ,p15 ,p16 ,p17 ,p18
];

export default function ThirdStorySection() {
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

  return (
    <section className="ThirdStorySection" ref={sectionRef}>
      <img
        src={contexticon}
        alt="Zoome Icon"
        className={`story-zoome-icon ${isVisible ? 'animate-down' : ''}`}
      />

      <h2 className={`worked-title ${isVisible ? 'animate-right' : ''}`}>Companies I’ve Worked With</h2>
      <p className={`worked-description ${isVisible ? 'animate-right' : ''}`}>
        Before launching Zoome, I had the privilege of working with these respected
        brands as a freelance designer and consultant:
      </p>

      <div className="logos-grid">
        {logos.map((logo, index) => (
          <div
            className={`logo-item ${isVisible ? 'animate-up' : ''}`}
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={logo} alt={`Company ${index + 1}`} />
          </div>
        ))}
      </div>

    </section>
  );
}
