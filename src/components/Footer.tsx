import React from 'react';
import { Phone, Email, WhatsApp, LocationOn, Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { contactInfo } from '../data/servicesData';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">Hill Icon</h3>
            <p className="footer-description">
              {contactInfo.aboutUs}
            </p>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-label"><Phone fontSize="small" style={{ verticalAlign: 'middle' }} /> Phone:</span>
                <a href={`tel:${contactInfo.phone}`} className="contact-link">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label"><Email fontSize="small" style={{ verticalAlign: 'middle' }} /> Email:</span>
                <a href={`mailto:${contactInfo.email}`} className="contact-link">
                  {contactInfo.email}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label"><WhatsApp fontSize="small" style={{ verticalAlign: 'middle' }} /> WhatsApp:</span>
                <button 
                  onClick={handleWhatsAppClick}
                  className="contact-link whatsapp-btn"
                >
                  <WhatsApp fontSize="small" style={{ marginRight: 6 }} />
                  {contactInfo.whatsapp}
                </button>
              </div>
              <div className="contact-item">
                <span className="contact-label"><LocationOn fontSize="small" style={{ verticalAlign: 'middle' }} /> Address:</span>
                <span className="contact-text">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/rooms" className="footer-link">Rooms</Link>
              <Link to="/transport" className="footer-link">Transport</Link>
              <Link to="/tours" className="footer-link">Tours</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Follow Us</h4>
            <div className="social-links">
              {contactInfo.socialMedia.facebook && (
                <a 
                  href={contactInfo.socialMedia.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                >
                  <Facebook fontSize="small" style={{ marginRight: 6 }} /> Facebook
                </a>
              )}
              {contactInfo.socialMedia.instagram && (
                <a 
                  href={contactInfo.socialMedia.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <Instagram fontSize="small" style={{ marginRight: 6 }} /> Instagram
                </a>
              )}
              {contactInfo.socialMedia.twitter && (
                <a 
                  href={contactInfo.socialMedia.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter"
                >
                  <Twitter fontSize="small" style={{ marginRight: 6 }} /> Twitter
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Hill Icon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
