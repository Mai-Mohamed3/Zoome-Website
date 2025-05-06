import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // استيراد Helmet
import Navbar from './Navbar';
import FirstContactSection from './FirstContactSection';
import SecondContactPage from './SecondContactPage';
import Footer from './Footer';

export default function ContactPage() {
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
        <title>Contact Zoome Advertising | Let’s Create Something Big Together</title>
        <meta 
          name="description" 
          content="Ready to start your next project? Contact Zoome Advertising for expert marketing, design, and creative services. Based in Egypt, serving clients across the GCC." 
        />
        <meta 
          name="keywords" 
          content="contact marketing agency Egypt, hire advertising company Cairo, creative services contact form, marketing consultant Egypt, advertising agency GCC" 
        />
      </Helmet>

      {showNavbar && <Navbar />}
      <FirstContactSection />
      <SecondContactPage />
      <Footer />
    </div>
  );
}
