import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';
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

  const [message, setMessage] = useState('');
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateMessage = () => {
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please fill in your name and phone number.');
      return;
    }

    let messageText = `Hello Hill Icon, I'd like to inquire about a ${serviceType} booking.\n\n`;
    
    if (serviceType === 'room') {
      messageText += `Room Type: ${serviceName}\n`;
      messageText += `Name: ${formData.fullName}\n`;
      messageText += `Phone: ${formData.phone}\n`;
      if (formData.checkIn) messageText += `Check-in: ${formData.checkIn}\n`;
      if (formData.checkOut) messageText += `Check-out: ${formData.checkOut}\n`;
      messageText += `Guests: ${formData.guests}\n`;
    } else if (serviceType === 'transport') {
      messageText += `Vehicle Type: ${serviceName}\n`;
      messageText += `Name: ${formData.fullName}\n`;
      messageText += `Phone: ${formData.phone}\n`;
      if (formData.requirements) messageText += `Requirements: ${formData.requirements}\n`;
    } else if (serviceType === 'tour') {
      messageText += `Tour Package: ${serviceName}\n`;
      messageText += `Name: ${formData.fullName}\n`;
      messageText += `Phone: ${formData.phone}\n`;
      messageText += `Guests: ${formData.guests}\n`;
      if (formData.requirements) messageText += `Special Requirements: ${formData.requirements}\n`;
    }

    messageText += '\nPlease confirm availability and pricing. Thank you.';
    
    setMessage(messageText);
    setShowWhatsApp(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '1',
      requirements: ''
    });
    setMessage('');
    setShowWhatsApp(false);
  };

  return (
    <div className="booking-form">
      <div className="booking-form-header">
        <h3>Book {serviceName}</h3>
        {onClose && (
          <button className="close-button" onClick={onClose} aria-label="Close">
            ×
          </button>
        )}
      </div>

      <form className="booking-form-content" onSubmit={(e) => e.preventDefault()}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="form-input"
            required
            placeholder="Enter your full name"
          />
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-input"
            required
            placeholder="e.g., 03001234567"
          />
        </div>

        {/* Room-specific fields */}
        {serviceType === 'room' && (
          <>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="checkIn" className="form-label">
                  Check-in Date
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
                  Check-out Date
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
                Number of Guests
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

        {/* Requirements field for transport and tours */}
        {(serviceType === 'transport' || serviceType === 'tour') && (
          <div className="form-group">
            <label htmlFor="requirements" className="form-label">
              {serviceType === 'transport' ? 'Service Requirements' : 'Special Requirements'}
            </label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              className="form-input form-textarea"
              placeholder={
                serviceType === 'transport' 
                  ? 'e.g., Airport pickup on [Date], Valley tour requirements...'
                  : 'Any special requirements or preferences...'
              }
              rows={3}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="form-actions">
          {!showWhatsApp ? (
            <button
              type="button"
              onClick={generateMessage}
              className="prepare-message-btn"
            >
              Prepare Message
            </button>
          ) : (
            <div className="whatsapp-section">
              <WhatsAppButton message={message} />
              <button
                type="button"
                onClick={resetForm}
                className="reset-btn"
              >
                Edit Details
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
