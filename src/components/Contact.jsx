import React, { useState } from 'react';
import '../Style/Contact.css';
import contexticon from '/Images/Home/Titles Logo.png';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showMessageBox, setShowMessageBox] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/zoome.int@gmail.com", {
      method: "POST",
      headers: { 'Accept': 'application/json' },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setMessageSent(true);
          setErrorMessage('');
          setShowMessageBox(true);
          form.reset();
        } else {
          setErrorMessage("Something went wrong. Please try again later.");
          setShowMessageBox(true);
        }
      })
      .catch((error) => {
        console.error("Sending error:", error);
        setErrorMessage("There was an issue sending the message. Please try again.");
        setShowMessageBox(true);
      });
  };

  const handleCloseMessageBox = () => {
    setShowMessageBox(false);
  };

  return (
    <div className="contact-container" ref={ref}>
      
      {/* العنوان يتحرك من فوق */}
      <motion.div 
        className="title2"
        initial={{ y: -100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>
          <img src={contexticon} alt="decor" className="decor2" /> Ready to grow?
        </h1><br />
        <h2>Get in touch with us</h2>
      </motion.div>

      <div className="contact-content">
        
        {/* معلومات التواصل تتحرك من الشمال */}
        <motion.div 
          className="contact-info"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="info">
            <div>
              <div className="icon-text">
                <HiOutlineMail className="icon" />
                <p>Say hello</p>
              </div>
              <p>zoome.int@gmail.com</p>
            </div>
          </div>

          <div className="info">
            <div className="loc-section">
              <div className="icon-text">
                <HiOutlineLocationMarker className="icon" />
                <p>Location</p>
              </div>
              <p>El Shorouk City, Cairo, Egypt.</p>
            </div>
          </div>
        </motion.div>

        {/* الفورم يتحرك من اليمين والـ Inputs بتظهر واحدة واحدة */}
        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="form-row">
            <motion.div className="form-group" 
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="" required />
            </motion.div>

            <motion.div className="form-group" 
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="" required />
            </motion.div>
          </div>

          <div className="form-row">
            <motion.div className="form-group" 
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.7 }}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="" />
            </motion.div>

            <motion.div className="form-group" 
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8 }}>
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" placeholder="" />
            </motion.div>
          </div>

          <motion.div className="form-group full-width" 
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.9 }}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="" rows="5" required></textarea>
          </motion.div>

          <motion.button 
            type="submit"
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            Send
          </motion.button>

        </motion.form>

        {showMessageBox && (
          <div className="message-box">
            <p>{messageSent ? "Your message has been sent. We'll get back to you as soon as possible." : errorMessage}</p>
            <button className="close-btn" onClick={handleCloseMessageBox}>OK</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
