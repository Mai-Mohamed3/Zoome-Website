import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // استيراد Helmet
import Navbar from './Navbar';
import FirstServicePage from './FirstServicePage';
import SecondServiceSection from './SecondServiceSection';
import ThirdServiceSection from './ThirdServiceSection';
import FourthServiceSection from './FourthServiceSection';
import FifthServiceSection from './FifthServiceSection';
import LastServiceSection from './LastServiceSection';
import Footer from './Footer';

export default function ServicesPage() {
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
        <title>Our Services | Digital Marketing, Design & Branding | Zoome</title>
        <meta 
          name="description" 
          content="Explore Zoome Advertising’s full-service offerings—digital marketing strategies, branding, graphic design, video production, and social media management tailored to your business needs." 
        />
        <meta 
          name="keywords" 
          content="digital marketing services Egypt, graphic design agency Cairo, video production Egypt, social media management Egypt, branding services for startups, creative marketing agency GCC" 
        />
      </Helmet>

      {showNavbar && <Navbar />}
      <FirstServicePage />
      <SecondServiceSection />
      <ThirdServiceSection />
      <FourthServiceSection />
      <FifthServiceSection />
      <LastServiceSection />
      <Footer />
    </div>
  );
}
