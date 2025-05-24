import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import FirstAboutPage from './FirstAboutSection';
import SecondAboutSection from './SecondAboutSection';
import ThirdAboutSection from './ThirdAboutSection';
import Footer from './Footer';

export default function AboutPage() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Helmet>
        <title>About Zoome Advertising | Creative Marketing Agency Based in Egypt</title>
        <meta 
          name="description" 
          content="Learn about Zoome Advertising, a bold creative agency helping brands grow through strategic marketing, impactful design, powerful digital content since 2024." 
        />
        <meta 
          name="keywords" 
          content="about advertising agency Egypt, creative marketing experts, digital solutions for business, startup advertising Egypt, Cairo marketing company" 
        />
      </Helmet>

      {showNavbar && <Navbar />}
      <FirstAboutPage />
      <SecondAboutSection />
      <ThirdAboutSection />
      <Footer />
    </div>
  );
}
