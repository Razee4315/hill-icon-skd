import React, { useState } from 'react';
import { Person, Phone, CalendarToday, Group, Close, Notes, WhatsApp } from '@mui/icons-material';
import { contactInfo } from '../data/servicesData';
import { motion } from 'framer-motion';
import './BookingForm.css';

interface BookingFormProps {
  serviceType: 'room' | 'transport' | 'tour';
  serviceName: string;
  onClose?: () => void;
}

interface FormData {
  fullName: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  requirements: string;
}

const BookingForm: React.FC<BookingFormProps> = ({
  serviceType,
  serviceName,
  onClose
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    requirements: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please fill in your name and phone number.');
      return;
    }

    let messageText = `*New Booking Inquiry*\n\n`;
    messageText += `*Service:* ${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} - ${serviceName}\n`;
    messageText += `*Name:* ${formData.fullName}\n`;
    messageText += `*Phone:* ${formData.phone}\n`;

    if (serviceType === 'room') {
      if (formData.checkIn) messageText += `*Check-in:* ${formData.checkIn}\n`;
      if (formData.checkOut) messageText += `*Check-out:* ${formData.checkOut}\n`;
      messageText += `*Guests:* ${formData.guests}\n`;
    } else if (serviceType === 'transport') {
      messageText += `*Guests:* ${formData.guests}\n`;
      if (formData.requirements) messageText += `*Requirements:* ${formData.requirements}\n`;
    } else if (serviceType === 'tour') {
      messageText += `*Guests:* ${formData.guests}\n`;
      if (formData.requirements) messageText += `*Special Req:* ${formData.requirements}\n`;
    }

    messageText += '\nPlease confirm availability and rates.';

    const cleanPhoneNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="booking-form glass-panel">
      <div className="booking-form-header">
        <div>
          <span className="form-subtitle">Booking Inquiry</span>
          <h3 className="form-title">{serviceName}</h3>
        </div>
        {onClose && (
          <button className="close-button" onClick={onClose} aria-label="Close">
            <Close fontSize="small" />
          </button>
        )}
      </div>

      <form className="booking-form-content" onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              <Person fontSize="small" className="label-icon" />
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="form-input"
              required
              placeholder="Your Name"
            />
          </div>

          {/* Phone Field */}
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              <Phone fontSize="small" className="label-icon" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-input"
              required
              placeholder="0300 1234567"
            />
          </div>
        </div>

        {/* Room-specific fields */}
        {serviceType === 'room' && (
          <>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="checkIn" className="form-label">
                  <CalendarToday fontSize="small" className="label-icon" />
                  Check-in
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="checkOut" className="form-label">
                  <CalendarToday fontSize="small" className="label-icon" />
                  Check-out
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="guests" className="form-label">
                <Group fontSize="small" className="label-icon" />
                Guests
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="form-input"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </>
        )}

        {/* Transport and Tour guests field */}
        {(serviceType === 'transport' || serviceType === 'tour') && (
          <div className="form-group">
            <label htmlFor="guests" className="form-label">
              <Group fontSize="small" className="label-icon" />
              Number of Guests
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              className="form-input"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        )}

        {/* Requirements field */}
        {(serviceType === 'transport' || serviceType === 'tour') && (
          <div className="form-group">
            <label htmlFor="requirements" className="form-label">
              <Notes fontSize="small" className="label-icon" />
              {serviceType === 'transport' ? 'Details' : 'Special Requests'}
            </label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              className="form-input form-textarea"
              placeholder={
                serviceType === 'transport'
                  ? 'Pickup location, time, destination...'
                  : 'Dietary restrictions, preferences...'
              }
              rows={3}
            />
          </div>
        )}

        <div className="form-actions">
          <motion.button
            type="submit"
            className="submit-whatsapp-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsApp className="btn-icon" />
            <span>Inquire via WhatsApp</span>
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
