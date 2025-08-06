import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { contactInfo } from '../data/servicesData';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './ScrollToTop.css';

const FloatingWhatsApp: React.FC = () => {
  const location = useLocation();

  // Scroll to top when route changes (instantaneous)
  useEffect(() => {
    // Small timeout to ensure DOM is ready after route change
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Instant scroll for route changes
      });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  const handleWhatsAppClick = () => {
    const defaultMessage = `Hello Hill Icon!

I'm interested in your services in Skardu. Could you please provide me with more information about:

- Room bookings and availability
- Transport services
- Tour packages

Thank you!`;

    // Clean the phone number and encode the message
    const cleanPhoneNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      className="floating-whatsapp"
      onClick={handleWhatsAppClick}
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="whatsapp-icon" />
      <span className="whatsapp-pulse"></span>
    </button>
  );
};

export default FloatingWhatsApp;
