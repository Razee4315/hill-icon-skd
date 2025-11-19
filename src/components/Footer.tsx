import React from 'react';
import { Phone, Email, WhatsApp, LocationOn, Facebook, Instagram } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { contactInfo } from '../data/servicesData';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`;
    window.open(whatsappUrl, '_blank');
  };

  const navigateAndTop = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === path) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">Hill Icon</h3>
            <p className="footer-desc">
              Experience the pinnacle of luxury and comfort in Skardu.
              Your gateway to the Karakoram's most breathtaking adventures.
            </p>
            <div className="social-links">
              {contactInfo.socialMedia.facebook && (
                <a
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <Facebook fontSize="small" />
                </a>
              )}
              {contactInfo.socialMedia.instagram && (
                <a
                  href={contactInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <Instagram fontSize="small" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Explore</h4>
            <div className="footer-nav">
              <Link to="/" className="footer-link" onClick={navigateAndTop('/')}>Home</Link>
              <Link to="/rooms" className="footer-link" onClick={navigateAndTop('/rooms')}>Rooms</Link>
              <Link to="/transport" className="footer-link" onClick={navigateAndTop('/transport')}>Transport</Link>
              <Link to="/tours" className="footer-link" onClick={navigateAndTop('/tours')}>Tours</Link>
              <Link to="/gallery" className="footer-link" onClick={navigateAndTop('/gallery')}>Gallery</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact-group">
            <h4 className="footer-heading">Contact</h4>
            <div className="contact-list">
              <a href={`tel:${contactInfo.phone}`} className="contact-row">
                <Phone fontSize="small" className="contact-icon" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="contact-row">
                <Email fontSize="small" className="contact-icon" />
                <span>{contactInfo.email}</span>
              </a>
              <button onClick={handleWhatsAppClick} className="contact-row whatsapp-btn">
                <WhatsApp fontSize="small" className="contact-icon" />
                <span>{contactInfo.whatsapp}</span>
              </button>
              <div className="contact-row">
                <LocationOn fontSize="small" className="contact-icon" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="footer-legal-group">
            <h4 className="footer-heading">Legal</h4>
            <div className="footer-nav">
              <Link to="/policy" className="footer-link" onClick={navigateAndTop('/policy')}>Hotel Policy</Link>
              <Link to="/contact" className="footer-link" onClick={navigateAndTop('/contact')}>Contact Support</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hill Icon Skardu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
