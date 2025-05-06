import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // استيراد Helmet
import Navbar from './Navbar';
import HomeSection from './HomeSection'; 
import SecondHomeSection from './SecondHomeSection'; 
import ThirdHomeSection from './ThirdHomeSection';
import FourthHomeSection from './FourthHomeSection';
import Contact from './Contact';
import Footer from './Footer';

export default function HomePage() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
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
        <title>Zoome Advertising | Creative Marketing & Digital Solutions</title>
        <meta 
          name="description" 
          content="Discover Zoome Advertising, Egypt’s rising creative agency offering digital marketing, branding, graphic design, video production, and social media services tailored for ambitious brands." 
        />
        <meta 
          name="keywords" 
          content="advertising agency in Egypt, digital marketing Egypt, creative agency Cairo, branding and design services, social media agency Egypt, marketing company for startups, advertising services GCC" 
        />
      </Helmet>

      {showNavbar && <Navbar />}
      <HomeSection />
      <SecondHomeSection />
      <ThirdHomeSection />
      <FourthHomeSection />
      <Contact />
      <Footer />
    </div>
  );
}
