import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // استيراد Helmet
import Navbar from './Navbar';
import FirstStorySection from './FirstStorySection';
import SecondStorySection from './SecondStorySection';
import ThirdStorySection from './ThirdStorySection';
import Footer from './Footer';

export default function StoryPage() {
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
        <title>Our Story | Zoome Advertising</title>
        <meta 
          name="description" 
          content="Learn how Zoome Advertising grew from a freelance career to a creative agency trusted by top brands. Meet our founder and explore our past work." 
        />
        <meta 
          name="keywords" 
          content="Zoome Advertising, Eslam Abdel Khalek, About Zoome Advertising, Freelance graphic designer Egypt, Top freelance branding projects, Founder story creative agency, Branding agency Egypt, Corporate design services, Graphic design for companies, Creative studio Cairo, Company profile designer Egypt, Presentation design expert, Trusted by top brands, From freelancer to agency"
        />
      </Helmet>

      {showNavbar && <Navbar />}
      <FirstStorySection/>
      <SecondStorySection/>
      <ThirdStorySection/>
      <Footer />
    </div>
  );
}
