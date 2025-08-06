import React, { useEffect, useState } from 'react';
import { Terrain, CheckCircle } from '@mui/icons-material';
import { toursData } from '../data/servicesData';
import BookingForm from '../components/BookingForm';
import './Tours.css';

interface Tour {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  inclusions: string[];
  duration: string;
  image: string;
  highlights: string[];
  price: {
    perPerson: number;
    currency: string;
    note: string;
  };
}

const Tours: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Hide floating WhatsApp button when booking form is open
  useEffect(() => {
    if (showBookingForm) {
      document.body.classList.add('hide-floating-whatsapp');
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('hide-floating-whatsapp');
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('hide-floating-whatsapp');
      document.body.classList.remove('modal-open');
    };
  }, [showBookingForm]);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setShowBookingForm(false);
  };

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  const handleCloseBooking = () => {
    setShowBookingForm(false);
  };

  const handleBackToList = () => {
    setSelectedTour(null);
    setShowBookingForm(false);
  };

  // Ensure detail view starts from top when a tour is selected
  useEffect(() => {
    if (selectedTour) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [selectedTour]);

  return (
    <div className="tours-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Guided Tours</h1>
        </div>

        {!selectedTour ? (
          /* Tours Listing */
          <div className="tours-grid">
            {toursData.map((tour) => (
              <div 
                key={tour.id} 
                className="tour-card"
                onClick={() => handleTourSelect(tour)}
              >
                <div className="tour-image">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
                  />
                  <div className="tour-duration">
                    <span>{tour.duration}</span>
                  </div>
                </div>
                <div className="tour-content">
                  <h3 className="tour-name">{tour.name}</h3>
                  <p className="tour-description">{tour.description}</p>
                  
                  <div className="tour-pricing">
                    {typeof tour.price.perPerson === 'number' ? (
                      <>
                        <span className="price-amount">{tour.price.currency} {tour.price.perPerson.toLocaleString()}</span>
                        <span className="price-label">per person</span>
                      </>
                    ) : null}
                    <span className="price-note">{tour.price.note}</span>
                  </div>
                  
                  {/* Highlights removed from card to only show inside the detail view */}
                  
                  <div className="tour-inclusions-preview">
                    <span className="inclusions-label">Includes:</span>
                    <span className="inclusions-text">
                      {tour.inclusions.join(', ')}
                    </span>
                  </div>
                  
                  <button className="view-details-btn">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Tour Detail View */
          <div className="tour-detail">
            <div className="tour-detail-header">
              <button 
                className="back-button"
                onClick={handleBackToList}
              >
                ← Back to Tours
              </button>
            </div>

            <div className="tour-detail-content">
              <div className="tour-detail-main">
                {/* Tour Image */}
                <div className="tour-gallery">
                  <div className="main-image">
                    <img
                      src={selectedTour.image}
                      alt={selectedTour.name}
                      style={{ width: '100%', height: 400, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                    />
                    <div className="tour-duration-detail">
                      <span>{selectedTour.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Tour Information */}
                <div className="tour-info">
                  <h2 className="tour-detail-name">{selectedTour.name}</h2>
                  <div className="tour-detail-pricing">
                    {typeof selectedTour.price.perPerson === 'number' ? (
                      <>
                        <span className="price-amount">{selectedTour.price.currency} {selectedTour.price.perPerson.toLocaleString()}</span>
                        <span className="price-label">per person</span>
                      </>
                    ) : null}
                    <span className="price-note">{selectedTour.price.note}</span>
                  </div>
                  <p className="tour-detail-description">
                    {selectedTour.detailedDescription}
                  </p>

                  {/* Highlights */}
                  <div className="highlights-section">
                    <h3 className="section-title">Tour Highlights</h3>
                    <div className="highlights-grid">
                      {selectedTour.highlights.map((highlight, index) => (
                        <div key={index} className="highlight-item">
                          <Terrain fontSize="small" className="highlight-icon" />
                          <span className="highlight-name">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="inclusions-section">
                    <h3 className="section-title">What's Included</h3>
                    <div className="inclusions-grid">
                      {selectedTour.inclusions.map((inclusion, index) => (
                        <div key={index} className="inclusion-item">
                          <CheckCircle fontSize="small" className="inclusion-icon" />
                          <span className="inclusion-name">{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <div className="tour-actions">
                    <button 
                      className="book-tour-btn"
                      onClick={handleBookNow}
                    >
                      Book This Tour
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
                      serviceType="tour"
                      serviceName={selectedTour.name}
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

export default Tours;
