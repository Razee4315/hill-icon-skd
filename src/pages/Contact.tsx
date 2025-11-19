import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/servicesData';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Hello Hill Icon,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message: ${formData.message}

I'd like to get in touch with you regarding your services.`;

    const cleanPhoneNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-page section">
      <div className="container">
        <motion.div
          className="page-header text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle text-muted max-w-2xl mx-auto">
            We're here to help you plan your perfect stay in Skardu. Reach out to us for bookings, inquiries, or just to say hello.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-form-wrapper glass-panel p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6">Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group mt-4">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group mt-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell us more about your plans..."
                />
              </div>

              <button type="submit" className="btn primary mt-6 w-full">
                Send Message via WhatsApp
              </button>
            </form>
          </motion.div>

          <motion.div
            className="map-wrapper glass-panel overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps?q=35.2782813,75.6519939&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hill Icon Resort and Restaurant Location"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
