import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowBack } from '@mui/icons-material';
import { roomsData } from '../data/servicesData';
import BookingForm from '../components/BookingForm';
import ImageModal from '../components/ImageModal';
import PlaceholderImage from '../components/PlaceholderImage';
import SEO from '../components/SEO';
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
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    if (showBookingForm) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [showBookingForm]);

  const handleRoomSelect = (room: Room) => {
    navigate(`/rooms/${room.id}`);
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 0);
  };

  const handleBackToList = () => {
    navigate('/rooms');
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 0);
  };

  useEffect(() => {
    if (!params.id) {
      setSelectedRoom(null);
      setActiveImage(null);
      setShowBookingForm(false);
      return;
    }
    const roomById = roomsData.find(r => String(r.id) === params.id);
    if (roomById) {
      setSelectedRoom(roomById);
      setActiveImage(roomById.image || null);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [params.id]);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Prepare images for the lightbox - use gallery if available, otherwise just the main image
  // Don't prepend main image as it's already included in the gallery array
  const roomImages = selectedRoom
    ? (selectedRoom.gallery && selectedRoom.gallery.length > 0
      ? selectedRoom.gallery
      : [selectedRoom.image]
    ).filter(Boolean).map(src => ({ src, alt: selectedRoom.name }))
    : [];

  const initialIndex = preview ? roomImages.findIndex(img => img.src === preview.src) : 0;

  const seoTitle = selectedRoom ? `${selectedRoom.name} - Luxury Accommodation` : 'Luxury Rooms & Suites';
  const seoDesc = selectedRoom
    ? `Book your stay at ${selectedRoom.name} in Skardu. ${selectedRoom.description} Amenities include ${selectedRoom.amenities.slice(0, 3).join(', ')}.`
    : 'Explore our range of luxury rooms and suites in Skardu, featuring mountain views and modern amenities.';

  // HotelRoom schema for room detail pages
  const roomSchema = selectedRoom ? {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "name": selectedRoom.name,
    "description": selectedRoom.detailedDescription,
    "image": selectedRoom.image,
    "bed": {
      "@type": "BedDetails",
      "numberOfBeds": selectedRoom.name.includes("Family") ? 3 : selectedRoom.name.includes("Twin") ? 2 : 1,
      "typeOfBed": selectedRoom.name.includes("Twin") ? "Twin" : "King"
    },
    "occupancy": {
      "@type": "QuantitativeValue",
      "value": selectedRoom.name.includes("Family") ? 6 : 2
    },
    "amenityFeature": selectedRoom.amenities.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true
    })),
    "offers": {
      "@type": "Offer",
      "priceCurrency": "PKR",
      "price": selectedRoom.price.perNight || 5000,
      "availability": "https://schema.org/InStock"
    },
    "containedInPlace": {
      "@type": "Hotel",
      "name": "Hill Icon Skardu",
      "url": "https://hilliconskardu.com"
    }
  } : null;

  return (
    <div className="rooms-page section">
      <SEO
        title={seoTitle}
        description={seoDesc}
        image={selectedRoom?.image}
        url={selectedRoom ? `/rooms/${selectedRoom.id}` : '/rooms'}
      />
      {roomSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(roomSchema)}
          </script>
        </Helmet>
      )}
      <div className="container">
        <AnimatePresence mode="wait">
          {!selectedRoom ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="page-header text-center mb-12">
                <span className="text-accent text-uppercase tracking-widest text-sm font-semibold">Accommodations</span>
                <h1 className="page-title mt-2">Sanctuary of Comfort</h1>
                <p className="page-subtitle text-muted max-w-2xl mx-auto mt-4">
                  Experience luxury and comfort in our carefully designed rooms with breathtaking mountain views.
                </p>
              </div>

              <div className="rooms-grid">
                {[...roomsData]
                  .sort((a, b) => (a.name === 'Suite Room' ? -1 : b.name === 'Suite Room' ? 1 : 0))
                  .map((room, idx) => (
                    <motion.div
                      key={room.id}
                      className="room-card glass-panel"
                      onClick={() => handleRoomSelect(room)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      whileHover={{ y: -10 }}
                    >
                      <div className="room-image-wrapper">
                        {room.image ? (
                          <img
                            src={room.image}
                            alt={room.name}
                            className="room-card-image"
                            loading="lazy"
                          />
                        ) : (
                          <PlaceholderImage height={300} text={room.name} />
                        )}
                        <div className="room-overlay">
                          <span className="view-btn">View Details</span>
                        </div>
                      </div>
                      <div className="room-content">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="room-name">{room.name}</h3>
                        </div>
                        <p className="room-description text-muted">{room.description}</p>
                        <div className="room-footer mt-4">
                          <div className="room-price">
                            <span className="currency">{room.price.currency}</span>
                            <span className="amount">{room.price.perNight?.toLocaleString()}</span>
                            <span className="period">/night</span>
                          </div>
                          <div className="amenities-preview">
                            {room.amenities.slice(0, 3).map((amenity, i) => (
                              <span key={i} className="amenity-pill">{amenity}</span>
                            ))}
                            {room.amenities.length > 3 && (
                              <span className="amenity-pill">+{room.amenities.length - 3}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="room-detail"
            >
              <button className="back-btn mb-8" onClick={handleBackToList}>
                <ArrowBack fontSize="small" /> Back to Rooms
              </button>

              <div className="room-detail-grid">
                <div className="room-gallery-section">
                  <div className="main-image-wrapper glass-panel">
                    {activeImage ? (
                      <img
                        src={activeImage}
                        alt={selectedRoom.name}
                        className="main-image"
                        onClick={() => setPreview({ src: activeImage, alt: selectedRoom.name })}
                      />
                    ) : (
                      <PlaceholderImage height={500} text={selectedRoom.name} />
                    )}
                  </div>
                  {selectedRoom.gallery && selectedRoom.gallery.length > 0 && (
                    <div className="gallery-thumbs mt-4">
                      {[selectedRoom.image, ...selectedRoom.gallery].filter(Boolean).map((src, idx) => (
                        <div
                          key={idx}
                          className={`thumb-item ${src === activeImage ? 'active' : ''}`}
                          onClick={() => setActiveImage(src)}
                        >
                          <img src={src} alt={`${selectedRoom.name} - Photo ${idx + 1}`} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="room-info-section glass-panel">
                  <h2 className="text-3xl font-serif mb-2">{selectedRoom.name}</h2>
                  <div className="price-tag mb-6">
                    <span className="text-2xl font-bold text-accent">
                      {selectedRoom.price.currency} {selectedRoom.price.perNight?.toLocaleString()}
                    </span>
                    <span className="text-muted ml-2">/ night</span>
                  </div>

                  <p className="text-muted mb-8 leading-relaxed">
                    {selectedRoom.detailedDescription}
                  </p>

                  <h3 className="text-lg font-medium mb-4">Amenities</h3>
                  <div className="amenities-grid mb-8">
                    {selectedRoom.amenities.map((amenity, idx) => (
                      <div key={idx} className="amenity-item">
                        <CheckCircle className="text-accent" fontSize="small" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="btn primary w-full"
                    onClick={() => setShowBookingForm(true)}
                  >
                    Book This Room
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showBookingForm && selectedRoom && (
            <div className="modal-overlay">
              <motion.div
                className="modal-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <BookingForm
                  serviceType="room"
                  serviceName={selectedRoom.name}
                  onClose={() => setShowBookingForm(false)}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <ImageModal
          open={!!preview}
          src={preview?.src || ''}
          alt={preview?.alt}
          images={roomImages}
          initialIndex={Math.max(0, initialIndex)}
          onClose={() => setPreview(null)}
        />
      </div>
    </div>
  );
};

export default Rooms;
