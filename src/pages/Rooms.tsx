import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from '@mui/icons-material';
import { roomsData } from '../data/servicesData';
import BookingForm from '../components/BookingForm';
import ImageModal from '../components/ImageModal';
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
    perNight?: number;
    currency: string;
    note: string;
  };
}

const Rooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
    setShowBookingForm(false);
    setActiveImage(room.image || null);
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
    setActiveImage(null);
  };

  // Ensure detail view starts from top when a room is selected
  useEffect(() => {
    if (selectedRoom) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [selectedRoom]);

  // Reset view when user clicks the same nav item again
  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ path: string }>;
      if (custom.detail?.path === '/rooms') {
        handleBackToList();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('navigate-same-route', handler as EventListener);
    return () => window.removeEventListener('navigate-same-route', handler as EventListener);
  }, []);

  // Detect mobile to adjust modal sizing for full-screen preview
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="rooms-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Our Rooms</h1>
        </div>

        {!selectedRoom ? (
          /* Room Listing */
          <div className="rooms-grid">
            {[...roomsData]
              .sort((a, b) => (a.name === 'Suite Room' ? -1 : b.name === 'Suite Room' ? 1 : 0))
              .map((room, idx) => (
              <motion.div 
                key={room.id}
                className="room-card"
                onClick={() => handleRoomSelect(room)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: Math.min(idx * 0.05, 0.4) }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="room-image">
                  {room.image ? (
                    <img
                      src={room.image}
                      alt={room.name}
                      className="room-card-image"
                    />
                  ) : (
                    <PlaceholderImage height={250} text={`${room.name} Image`} />
                  )}
                </div>
                <div className="room-content">
                  <h3 className="room-name">{room.name}</h3>
                  <p className="room-description">{room.description}</p>
                  <div className="room-price">
                    <span className="price-amount">{room.price.currency} {room.price.perNight?.toLocaleString() || '0'}</span>
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
              </motion.div>
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
                    {activeImage ? (
                      <img
                        src={activeImage}
                        alt={selectedRoom.name}
                        className="room-main-image"
                        onClick={() => {
                          if (!isMobile) setPreview({ src: activeImage, alt: selectedRoom.name });
                        }}
                      />
                    ) : (
                      <PlaceholderImage height={400} text={`${selectedRoom.name} Main Image`} />
                    )}
                  </div>
                  {selectedRoom.gallery && selectedRoom.gallery.length > 0 && (
                    <div className="gallery-thumbnails">
                      {[selectedRoom.image, ...selectedRoom.gallery].filter(Boolean).map((src, index) => (
                        <div key={index} className="thumbnail">
                          {src ? (
                            <img
                              src={src}
                              alt={`${selectedRoom.name} ${index + 1}`}
                              style={{ width: '100%', height: 80, objectFit: 'cover', borderRadius: 8, cursor: 'pointer', outline: src === activeImage ? '2px solid #2e7d32' : 'none' }}
                              onClick={() => setActiveImage(src)}
                            />
                          ) : (
                            <PlaceholderImage height={80} text={`Image ${index + 1}`} />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Image Preview Modal */}
                <ImageModal
                  open={!!preview}
                  src={preview?.src || ''}
                  alt={preview?.alt}
                  onClose={() => setPreview(null)}
                  maxWidth={isMobile ? '100vw' : '80vw'}
                  maxHeight={isMobile ? '100vh' : '80vh'}
                />

                {/* Room Information */}
                <div className="room-info">
                  <h2 className="room-detail-name">{selectedRoom.name}</h2>
                  <div className="room-detail-price">
                    <span className="price-amount">{selectedRoom.price.currency} {selectedRoom.price.perNight?.toLocaleString() || '0'}</span>
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
                          <CheckCircle fontSize="small" className="amenity-icon" />
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
              <AnimatePresence>
                {showBookingForm && (
                  <motion.div className="booking-form-container">
                    <motion.div 
                      className="booking-form-overlay" 
                      onClick={handleCloseBooking}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                    <motion.div 
                      className="booking-form-wrapper"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <BookingForm
                        serviceType="room"
                        serviceName={selectedRoom.name}
                        onClose={handleCloseBooking}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms;
