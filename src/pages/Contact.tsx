import React, { useState } from 'react';
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

    // Create WhatsApp message with form data
    const whatsappMessage = `Hello Hill Icon,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message: ${formData.message}

I'd like to get in touch with you regarding your services.`;

    // Clean the phone number and encode the message
    const cleanPhoneNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with us for bookings and inquiries about our services in Skardu.
          </p>
        </div>

        {/* Contact Content - Form and Map */}
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message *"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="map-section">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52234.89542827736!2d75.63663!3d35.2971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e463cf9c8cd6b9%3A0x7e0c2c0b0b0b0b0b!2sSkardu%2C%20Gilgit-Baltistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Skardu Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
