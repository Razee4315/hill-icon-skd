import React, { useState } from 'react';
import { roomsData } from '../data/servicesData';
import BookingForm from '../components/BookingForm';
import PlaceholderImage from '../components/PlaceholderImage';
import './Rooms.css';

interface Room {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  amenities: string[];
  image: string;
  gallery?: string[];
  price: {
    perNight: number;
    currency: string;
    note: string;
  };
}

const Rooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
    setShowBookingForm(false);
  };

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  const handleCloseBooking = () => {
    setShowBookingForm(false);
  };

  const handleBackToList = () => {
    setSelectedRoom(null);
    setShowBookingForm(false);
  };

  return (
    <div className="rooms-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Our Rooms</h1>
          <p className="page-subtitle">
            Experience comfort and luxury with breathtaking views of the Karakoram mountains. 
            Each room is thoughtfully designed to provide you with an unforgettable stay in Skardu.
          </p>
        </div>

        {!selectedRoom ? (
          /* Room Listing */
          <div className="rooms-grid">
            {roomsData.map((room) => (
              <div 
                key={room.id} 
                className="room-card"
                onClick={() => handleRoomSelect(room)}
              >
                <div className="room-image">
                  <PlaceholderImage 
                    height={250}
                    text={`${room.name} Image`}
                  />
                </div>
                <div className="room-content">
                  <h3 className="room-name">{room.name}</h3>
                  <p className="room-description">{room.description}</p>
                  <div className="room-price">
                    <span className="price-amount">{room.price.currency} {room.price.perNight.toLocaleString()}</span>
                    <span className="price-note">{room.price.note}</span>
                  </div>
                  <div className="room-amenities-preview">
                    {room.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="amenity-tag">
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="amenity-more">
                        +{room.amenities.length - 3} more
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
          /* Room Detail View */
          <div className="room-detail">
            <div className="room-detail-header">
              <button 
                className="back-button"
                onClick={handleBackToList}
              >
                ← Back to Rooms
              </button>
            </div>

            <div className="room-detail-content">
              <div className="room-detail-main">
                {/* Room Gallery */}
                <div className="room-gallery">
                  <div className="main-image">
                    <PlaceholderImage 
                      height={400}
                      text={`${selectedRoom.name} Main Image`}
                    />
                  </div>
                  {selectedRoom.gallery && selectedRoom.gallery.length > 0 && (
                    <div className="gallery-thumbnails">
                      {selectedRoom.gallery.map((image, index) => (
                        <div key={index} className="thumbnail">
                          <PlaceholderImage 
                            height={80}
                            text={`Image ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Room Information */}
                <div className="room-info">
                  <h2 className="room-detail-name">{selectedRoom.name}</h2>
                  <div className="room-detail-price">
                    <span className="price-amount">{selectedRoom.price.currency} {selectedRoom.price.perNight.toLocaleString()}</span>
                    <span className="price-note">{selectedRoom.price.note}</span>
                  </div>
                  <p className="room-detail-description">
                    {selectedRoom.detailedDescription}
                  </p>

                  {/* Amenities */}
                  <div className="amenities-section">
                    <h3 className="amenities-title">Amenities</h3>
                    <div className="amenities-grid">
                      {selectedRoom.amenities.map((amenity, index) => (
                        <div key={index} className="amenity-item">
                          <span className="amenity-icon">✓</span>
                          <span className="amenity-name">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <div className="room-actions">
                    <button 
                      className="book-now-btn"
                      onClick={handleBookNow}
                    >
                      Book This Room
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
                      serviceType="room"
                      serviceName={selectedRoom.name}
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

export default Rooms;
