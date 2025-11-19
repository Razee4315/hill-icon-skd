import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { contactInfo } from '../data/servicesData';
import { WhatsApp } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollToTop.css';

const FloatingWhatsApp: React.FC = () => {
  const location = useLocation();

  // Scroll restoration logic
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      try {
        window.history.scrollRestoration = 'manual';
      } catch { }
    }
    return () => {
      if ('scrollRestoration' in window.history) {
        try {
          window.history.scrollRestoration = 'auto';
        } catch { }
      }
    };
  }, []);

  useLayoutEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch { }
  }, [location.pathname]);

  const handleWhatsAppClick = () => {
    const defaultMessage = `Hello Hill Icon!
    
I'm interested in your services in Skardu. Could you please provide me with more information about:

- Room bookings and availability
- Transport services
- Tour packages

Thank you!`;

    const cleanPhoneNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      className="floating-whatsapp"
      onClick={handleWhatsAppClick}
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <WhatsApp className="whatsapp-icon" />
      <span className="whatsapp-pulse"></span>
    </motion.button>
  );
};

export default FloatingWhatsApp;
