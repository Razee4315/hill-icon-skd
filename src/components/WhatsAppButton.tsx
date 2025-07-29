import React from 'react';
import { contactInfo } from '../data/servicesData';
import './WhatsAppButton.css';

interface WhatsAppButtonProps {
  message: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  className = '',
  children = 'Book via WhatsApp',
  disabled = false
}) => {
  const handleWhatsAppClick = () => {
    if (disabled || !message.trim()) return;
    
    // Clean the phone number (remove any non-digit characters)
    const cleanPhoneNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      className={`whatsapp-button ${className} ${disabled ? 'disabled' : ''}`}
      onClick={handleWhatsAppClick}
      disabled={disabled}
      type="button"
    >
      <span className="whatsapp-icon">📱</span>
      <span className="whatsapp-text">{children}</span>
    </button>
  );
};

export default WhatsAppButton;
