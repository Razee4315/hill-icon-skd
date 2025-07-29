import React, { useState } from 'react';
import { transportData } from '../data/servicesData';
import BookingForm from '../components/BookingForm';
import PlaceholderImage from '../components/PlaceholderImage';
import './Transport.css';

interface Vehicle {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  features: string[];
  image: string;
  idealFor: string;
}

const Transport: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

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
            Professional transport services for all your travel needs in Skardu. 
            From comfortable airport transfers to rugged mountain adventures, we have the right vehicle for every journey.
          </p>
        </div>

        {!selectedVehicle ? (
          /* Vehicle Listing */
          <div className="vehicles-grid">
            {transportData.map((vehicle) => (
              <div 
                key={vehicle.id} 
                className="vehicle-card"
                onClick={() => handleVehicleSelect(vehicle)}
              >
                <div className="vehicle-image">
                  <PlaceholderImage 
                    height={250}
                    text={`${vehicle.name} Image`}
                  />
                </div>
                <div className="vehicle-content">
                  <h3 className="vehicle-name">{vehicle.name}</h3>
                  <p className="vehicle-description">{vehicle.description}</p>
                  <div className="ideal-for">
                    <span className="ideal-for-label">Ideal for:</span>
                    <span className="ideal-for-text">{vehicle.idealFor}</span>
                  </div>
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
                    <PlaceholderImage 
                      height={400}
                      text={`${selectedVehicle.name} Image`}
                    />
                  </div>
                </div>

                {/* Vehicle Information */}
                <div className="vehicle-info">
                  <h2 className="vehicle-detail-name">{selectedVehicle.name}</h2>
                  <p className="vehicle-detail-description">
                    {selectedVehicle.detailedDescription}
                  </p>

                  {/* Ideal For */}
                  <div className="ideal-for-section">
                    <h3 className="section-title">Ideal For</h3>
                    <p className="ideal-for-detail">{selectedVehicle.idealFor}</p>
                  </div>

                  {/* Features */}
                  <div className="features-section">
                    <h3 className="section-title">Features</h3>
                    <div className="features-grid">
                      {selectedVehicle.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <span className="feature-icon">✓</span>
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
    </div>
  );
};

export default Transport;
