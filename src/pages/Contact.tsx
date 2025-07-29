import React, { useState } from 'react';
import { contactInfo, diningInfo } from '../data/servicesData';
import WhatsAppButton from '../components/WhatsAppButton';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (in a real app, this would send to a server)
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppContact = () => {
    const message = "Hello Hill Icon, I'd like to get in touch regarding your services. Please provide more information.";
    return message;
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with us for bookings, inquiries, or any questions about our services. 
            We're here to help make your Skardu experience unforgettable.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h2 className="section-title">Get in Touch</h2>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <a href={`tel:${contactInfo.phone}`} className="contact-link">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="contact-link">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h3>WhatsApp</h3>
                  <div className="whatsapp-contact">
                    <span className="whatsapp-number">{contactInfo.whatsapp}</span>
                    <WhatsAppButton 
                      message={handleWhatsAppContact()}
                      className="contact-whatsapp-btn"
                    >
                      Chat Now
                    </WhatsAppButton>
                  </div>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p className="address-text">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-media-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                {contactInfo.socialMedia.facebook && (
                  <a 
                    href={contactInfo.socialMedia.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link facebook"
                  >
                    Facebook
                  </a>
                )}
                {contactInfo.socialMedia.instagram && (
                  <a 
                    href={contactInfo.socialMedia.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link instagram"
                  >
                    Instagram
                  </a>
                )}
                {contactInfo.socialMedia.twitter && (
                  <a 
                    href={contactInfo.socialMedia.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link twitter"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title">Send us a Message</h2>
            
            {submitMessage && (
              <div className="submit-message success">
                {submitMessage}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="room-inquiry">Room Inquiry</option>
                  <option value="transport-inquiry">Transport Inquiry</option>
                  <option value="tour-inquiry">Tour Inquiry</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                  required
                  placeholder="Tell us how we can help you..."
                  rows={6}
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Dining Information */}
        <div className="dining-section">
          <h2 className="section-title">Dining at Hill Icon</h2>
          <div className="dining-content">
            <div className="dining-info">
              <p className="dining-description">{diningInfo.description}</p>
              
              <div className="dining-features">
                <h3>Our Specialties</h3>
                <ul className="features-list">
                  {diningInfo.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="dining-note">{diningInfo.note}</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2 className="section-title">Find Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <p>Interactive Google Map will be embedded here</p>
              <p className="map-note">
                Location: {contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
