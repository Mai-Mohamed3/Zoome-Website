import React, { useState } from 'react';
import '../Style/Contact.css';
import contexticon from '/Images/Home/Titles Logo.png';
import contacticon from '/Images/Contact/Second Section Logo.png';
import { motion } from 'framer-motion';

const SecondContactPage = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showMessageBox, setShowMessageBox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/info@zoome-adv.com", {
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
    <div className="contact-container">
      {/* Title Section */}
      <motion.div 
        className="title2"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className='messagetitle'>
          <img src={contexticon} alt="decor" className="decor2" /> Message Us
        </h1><br />
      </motion.div>

      <div className="contact-content">
        {/* Contact Info */}
        <motion.div 
          className="contact-info"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="redText">
            <p>Let’s start a conversation!</p>
            <p>If you’re ready to elevate your brand and make an impact, reach out to our team.</p>
          </div>
          <div className="contacticon">
            <img src={contacticon} alt="" />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          className="contact-form contactborder"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <motion.input 
                type="text" 
                id="name" 
                name="name" 
                required 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <motion.input 
                type="email" 
                id="email" 
                name="email" 
                required 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <motion.input 
                type="text" 
                id="subject" 
                name="subject" 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <motion.input 
                type="text" 
                id="phone" 
                name="phone" 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <motion.textarea 
              id="message" 
              name="message" 
              rows="5" 
              required 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              viewport={{ once: true }}
            ></motion.textarea>
          </div>

          <motion.button 
            type="submit" 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            viewport={{ once: true }}
          >
            Send
          </motion.button>
        </motion.form>

        {/* Message Box */}
        {showMessageBox && (
          <motion.div 
            className="message-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p>{messageSent ? "Your message has been sent. We'll get back to you as soon as possible." : errorMessage}</p>
            <button className="close-btn" onClick={handleCloseMessageBox}>OK</button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SecondContactPage;
