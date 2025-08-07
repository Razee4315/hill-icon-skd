import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { contactInfo } from '../data/servicesData';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './ScrollToTop.css';

const FloatingWhatsApp: React.FC = () => {
  const location = useLocation();

  // Ensure browser doesn't restore scroll position automatically
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      try {
        window.history.scrollRestoration = 'manual';
      } catch {}
    }
    return () => {
      if ('scrollRestoration' in window.history) {
        try {
          window.history.scrollRestoration = 'auto';
        } catch {}
      }
    };
  }, []);

  // Pre-paint scroll to top for immediate effect
  useLayoutEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch {}
  }, [location.pathname, location.search, location.hash]);

  // Post-paint passes to cover transitions/layout shifts
  useEffect(() => {
    const forceScrollTop = (smooth: boolean) => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: smooth ? 'smooth' : 'auto' });
        // Fallbacks for browsers that don't respect window.scrollTo here
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } catch {}
    };

    // Immediate attempts
    forceScrollTop(false);

    // Pump a few frames to override any pending layout/animation adjustments
    let rafCount = 0;
    const pump = () => {
      forceScrollTop(true);
      rafCount += 1;
      if (rafCount < 10) requestAnimationFrame(pump);
    };
    requestAnimationFrame(pump);

    // Timed follow-ups
    const schedules = [150, 350, 650, 1000];
    const timers = schedules.map((ms) => setTimeout(() => forceScrollTop(true), ms));

    return () => timers.forEach(clearTimeout);
  }, [location.pathname, location.search, location.hash]);

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
