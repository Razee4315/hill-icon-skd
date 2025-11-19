import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowBack, DirectionsCar } from '@mui/icons-material';
import { transportData } from '../data/servicesData';
import BookingForm from '../components/BookingForm';
import ImageModal from '../components/ImageModal';
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
    daily?: number;
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

  const handleVehicleSelect = (vehicle: Vehicle) => {
    navigate(`/transport/${vehicle.id}`);
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 0);
  };

  const handleBackToList = () => {
    navigate('/transport');
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 0);
  };

  useEffect(() => {
    if (!params.id) {
      setSelectedVehicle(null);
      setShowBookingForm(false);
      return;
    }
    const vehById = transportData.find(v => String(v.id) === params.id);
    if (vehById) {
      setSelectedVehicle(vehById);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [params.id]);

  return (
    <div className="transport-page section">
      <div className="container">
        <AnimatePresence mode="wait">
          {!selectedVehicle ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="page-header text-center mb-12">
                <span className="text-accent text-uppercase tracking-widest text-sm font-semibold">Transport Services</span>
                <h1 className="page-title mt-2">Journey in Comfort</h1>
                <p className="page-subtitle text-muted max-w-2xl mx-auto mt-4">
                  Reliable transport in Skardu — from airport transfers to full‑day rentals for your adventures.
                </p>
              </div>

              <div className="vehicles-grid">
                {vehicles.map((vehicle, idx) => (
                  <motion.div
                    key={vehicle.id}
                    className="vehicle-card glass-panel"
                    onClick={() => handleVehicleSelect(vehicle)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="vehicle-image-wrapper">
                      <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" loading="lazy" />
                      <div className="vehicle-overlay">
                        <span className="view-btn">View Details</span>
                      </div>
                    </div>
                    <div className="vehicle-content">
                      <h3 className="vehicle-name">{vehicle.name}</h3>
                      <p className="vehicle-desc text-muted">{vehicle.description}</p>

                      <div className="vehicle-footer mt-4">
                        <div className="price-info">
                          <span className="currency">{vehicle.price.currency}</span>
                          <span className="amount">{vehicle.price.daily?.toLocaleString()}</span>
                          <span className="period">/day</span>
                        </div>
                        <div className="features-preview">
                          {vehicle.features.slice(0, 2).map((feature, i) => (
                            <span key={i} className="feature-pill">{feature}</span>
                          ))}
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
              className="vehicle-detail"
            >
              <button className="back-btn mb-8" onClick={handleBackToList}>
                <ArrowBack fontSize="small" /> Back to Transport
              </button>

              <div className="vehicle-detail-grid">
                <div className="vehicle-image-section glass-panel p-4">
                  <img
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    className="detail-main-image"
                    onClick={() => setPreview({ src: selectedVehicle.image, alt: selectedVehicle.name })}
                  />
                </div>

                <div className="vehicle-info-section glass-panel p-8">
                  <h2 className="text-3xl font-serif mb-2">{selectedVehicle.name}</h2>
                  <div className="price-tag mb-6">
                    <span className="text-2xl font-bold text-accent">
                      {selectedVehicle.price.currency} {selectedVehicle.price.daily?.toLocaleString()}
                    </span>
                    <span className="text-muted ml-2">/ day</span>
                  </div>

                  {selectedVehicle.airportTransfer && (
                    <div className="airport-transfer-badge mb-6">
                      <DirectionsCar fontSize="small" />
                      <span>Airport Transfer: {selectedVehicle.price.currency} {selectedVehicle.airportTransfer.toLocaleString()}</span>
                    </div>
                  )}

                  <p className="text-muted mb-8 leading-relaxed">
                    {selectedVehicle.detailedDescription}
                  </p>

                  <h3 className="text-lg font-medium mb-4">Vehicle Features</h3>
                  <div className="features-grid mb-8">
                    {selectedVehicle.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <CheckCircle className="text-accent" fontSize="small" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="btn primary w-full"
                    onClick={() => setShowBookingForm(true)}
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showBookingForm && selectedVehicle && (
            <div className="modal-overlay">
              <motion.div
                className="modal-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <BookingForm
                  serviceType="transport"
                  serviceName={selectedVehicle.name}
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
          onClose={() => setPreview(null)}
          maxWidth="80vw"
          maxHeight="80vh"
        />
      </div>
    </div>
  );
};

export default Transport;
