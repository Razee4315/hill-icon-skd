import React from 'react';
import { contactInfo } from '../data/servicesData';
import WhatsAppButton from '../components/WhatsAppButton';
import './Contact.css';

const Contact: React.FC = () => {
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

        {/* Simple Contact Information */}
        <div className="contact-content">
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
                  <WhatsAppButton
                    message="Hello Hill Icon, I'd like to inquire about your services."
                    className="contact-whatsapp-btn"
                  >
                    Chat on WhatsApp
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
