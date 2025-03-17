import React, { useState } from 'react';
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Have any questions or want to get in touch? Send me a message!</p>
      </div>

      <div className="contact-form-container">
        <form  className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              className="contact-input"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              className="contact-input"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea
              name="message"
              className="contact-textarea"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Message</label>
          </div>

          <button 
            type="submit" 
            className="contact-button"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {isSubmitted && (
          <div className="contact-thank-you">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
