import React, { useEffect, useRef, useState } from 'react';
import '../Style/SecondStorySection.css';

export default function SecondStorySection() {
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
    <section className="second-story-section" ref={sectionRef}>
      <h1 className={`storytitle ${isVisible ? 'animate-right' : ''}`}>
        From Freelance Roots to a Creative Studio
      </h1>
      <p className={`storydescription ${isVisible ? 'animate-right' : ''}`}>
        Zoome Advertising was born from years of hands-on experience...
      </p>

      <h2 className={`storysubtitle ${isVisible ? 'animate-down' : ''}`}>
        That experience helped shape Zoome’s approach today
      </h2>

      <div className="cards-container">
        <div className={`card ${isVisible ? 'animate-left delay-1' : ''}`}>
          <p>Creative thinking rooted in business goals</p>
        </div>
        <div className={`card ${isVisible ? 'animate-left delay-2' : ''}`}>
          <p>Designs that speak to real people</p>
        </div>
        <div className={`card ${isVisible ? 'animate-left delay-3' : ''}`}>
          <p>Fast, reliable, professional execution</p>
        </div>
      </div>

      <p className={`footer-text ${isVisible ? 'animate-up' : ''}`}>
        We’re not just an agency. We’re your creative growth partner.
      </p>
    </section>
  );
}
