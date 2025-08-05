import React, { useState } from 'react';
import { CheckCircle } from '@mui/icons-material';
import { transportData } from '../data/servicesData';
import BookingForm from '../components/BookingForm';
import ImageModal from '../components/ImageModal';
// Removed PlaceholderImage in favor of real images provided in data
import './Transport.css';

interface Vehicle {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  features: string[];
  image: string;
  idealFor: string;
  price: {
    daily: number;
    currency: string;
    note: string;
  };
  airportTransfer?: number;
}

const Transport: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  const vehicles = transportData.filter(v => v.name.toLowerCase() !== 'luxury van');

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setShowBookingForm(false);
  };

  const handleInquireNow = () => {
    setShowBookingForm(true);
  };

  const handleCloseBooking = () => {
    setShowBookingForm(false);
  };

  const handleBackToList = () => {
    setSelectedVehicle(null);
    setShowBookingForm(false);
  };

  return (
    <div className="transport-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Transport Services</h1>
          <p className="page-subtitle">
            Reliable transport in Skardu — airport transfers and full‑day rentals.
          </p>
        </div>

        {!selectedVehicle ? (
          /* Vehicle Listing */
          <>
            <div className="vehicles-grid">
            {vehicles.map((vehicle) => (
              <div 
                key={vehicle.id} 
                className="vehicle-card"
                onClick={() => handleVehicleSelect(vehicle)}
              >
                <div className="vehicle-image">
                  <img src={vehicle.image} alt={`${vehicle.name}`} style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 12 }} />
                </div>
                <div className="vehicle-content">
                  <h3 className="vehicle-name">{vehicle.name}</h3>
                  <p className="vehicle-description">{vehicle.description}</p>
                  <div className="room-price">
                    <span className="price-amount">{vehicle.price.currency} {vehicle.price.daily?.toLocaleString() || '0'}</span>
                  </div>
                  {vehicle.airportTransfer && (
                    <div className="price-note" aria-label="airport-transfer-rate">
                      Airport transfer: {vehicle.price.currency} {vehicle.airportTransfer.toLocaleString()}
                    </div>
                  )}
                  <div className="vehicle-features-preview">
                    {vehicle.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                    {vehicle.features.length > 3 && (
                      <span className="feature-more">
                        +{vehicle.features.length - 3} more
                      </span>
                    )}
                  </div>
                  <button className="view-details-btn">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
            </div>
          </>
        ) : (
          /* Vehicle Detail View */
          <div className="vehicle-detail">
            <div className="vehicle-detail-header">
              <button 
                className="back-button"
                onClick={handleBackToList}
              >
                ← Back to Transport
              </button>
            </div>

            <div className="vehicle-detail-content">
              <div className="vehicle-detail-main">
                {/* Vehicle Image */}
                <div className="vehicle-gallery">
                  <div className="main-image">
                    <img
                      src={selectedVehicle.image}
                      alt={selectedVehicle.name}
                      style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 12, cursor: 'zoom-in' }}
                      onClick={() => setPreview({ src: selectedVehicle.image, alt: selectedVehicle.name })}
                    />
                  </div>
                </div>

                {/* Vehicle Information */}
                <div className="vehicle-info">
                  <h2 className="vehicle-detail-name">{selectedVehicle.name}</h2>
                  <div className="room-detail-price">
                    <span className="price-amount">{selectedVehicle.price.currency} {selectedVehicle.price.daily.toLocaleString()}</span>
                    <span className="price-note">{selectedVehicle.price.note}</span>
                    {selectedVehicle.airportTransfer && (
                      <span className="price-note">Airport transfer: {selectedVehicle.price.currency} {selectedVehicle.airportTransfer.toLocaleString()}</span>
                    )}
                  </div>
                  <p className="vehicle-detail-description">
                    {selectedVehicle.detailedDescription}
                  </p>

                  {/* Removed Ideal For section as requested */}

                  {/* Features */}
                  <div className="features-section">
                    <h3 className="section-title">Features</h3>
                    <div className="features-grid">
                      {selectedVehicle.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <CheckCircle fontSize="small" className="feature-icon" />
                          <span className="feature-name">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inquire Now Button */}
                  <div className="vehicle-actions">
                    <button 
                      className="inquire-now-btn"
                      onClick={handleInquireNow}
                    >
                      Inquire About This Vehicle
                    </button>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              {showBookingForm && (
                <div className="booking-form-container">
                  <div className="booking-form-overlay" onClick={handleCloseBooking}></div>
                  <div className="booking-form-wrapper">
                    <BookingForm
                      serviceType="transport"
                      serviceName={selectedVehicle.name}
                      onClose={handleCloseBooking}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Image Preview Modal */}
      <ImageModal
        open={!!preview}
        src={preview?.src || ''}
        alt={preview?.alt}
        onClose={() => setPreview(null)}
        maxWidth="80vw"
        maxHeight="80vh"
      />
    </div>
  );
};

export default Transport;
