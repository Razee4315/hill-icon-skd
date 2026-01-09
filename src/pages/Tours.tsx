import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Head } from 'vite-react-ssg';
import { Terrain, CheckCircle, ArrowBack, AccessTime } from '@mui/icons-material';
import { toursData } from '../data/servicesData';
import BookingForm from '../components/BookingForm';
import ImageModal from '../components/ImageModal';
import SEO from '../components/SEO';
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
    perPerson?: number;
    currency: string;
    note: string;
  };
  gallery?: string[];
}

const Tours: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
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

  const handleTourSelect = (tour: Tour) => {
    navigate(`/tours/${tour.id}`);
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 0);
  };

  const handleBackToList = () => {
    navigate('/tours');
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 0);
  };

  useEffect(() => {
    if (!params.id) {
      setSelectedTour(null);
      setActiveImage(null);
      setShowBookingForm(false);
      return;
    }
    const tourById = toursData.find(t => String(t.id) === params.id);
    if (tourById) {
      setSelectedTour(tourById);
      setActiveImage(tourById.image || null);
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

  // Prepare images for the lightbox
  const tourImages = selectedTour
    ? [selectedTour.image, ...(selectedTour.gallery || [])].filter(Boolean).map(src => ({ src, alt: selectedTour.name }))
    : [];

  const initialIndex = preview ? tourImages.findIndex(img => img.src === preview.src) : 0;

  const seoTitle = selectedTour ? `${selectedTour.name} - Guided Tour` : 'Guided Tours & Adventures';
  const seoDesc = selectedTour
    ? `Book the ${selectedTour.name} in Skardu. ${selectedTour.duration} tour covering ${selectedTour.highlights.slice(0, 3).join(', ')}.`
    : 'Explore the best of Skardu with our guided tours. Visit Deosai, Shigar, Shangrila and more with expert local guides.';

  // TouristTrip schema for tour detail pages
  const tourSchema = selectedTour ? {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": selectedTour.name,
    "description": selectedTour.detailedDescription,
    "image": selectedTour.image,
    "touristType": "Adventure Tourism",
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": selectedTour.highlights.map((highlight, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": highlight
      }))
    },
    "provider": {
      "@type": "TouristInformationCenter",
      "name": "Hill Icon Skardu",
      "telephone": "+923487997495",
      "url": "https://hilliconskardu.com"
    },
    "contentLocation": {
      "@type": "Place",
      "name": "Skardu, Gilgit-Baltistan",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Skardu",
        "addressRegion": "Gilgit-Baltistan",
        "addressCountry": "Pakistan"
      }
    }
  } : null;

  return (
    <div className="tours-page section">
      <SEO
        title={seoTitle}
        description={seoDesc}
        image={selectedTour?.image}
        url={selectedTour ? `/tours/${selectedTour.id}` : '/tours'}
      />
      {tourSchema && (
        <Head>
          <script type="application/ld+json">
            {JSON.stringify(tourSchema)}
          </script>
        </Head>
      )}
      <div className="container">
        <AnimatePresence mode="wait">
          {!selectedTour ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="page-header text-center mb-12">
                <span className="text-accent text-uppercase tracking-widest text-sm font-semibold">Guided Adventures</span>
                <h1 className="page-title mt-2">Explore the Extraordinary</h1>
                <p className="page-subtitle text-muted max-w-2xl mx-auto mt-4">
                  Discover the natural beauty and cultural heritage of Skardu with our expertly guided tours.
                </p>
              </div>

              <div className="tours-grid">
                {toursData.map((tour, idx) => (
                  <motion.div
                    key={tour.id}
                    className="tour-card glass-panel"
                    onClick={() => handleTourSelect(tour)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="tour-image-wrapper">
                      <img src={tour.image} alt={tour.name} className="tour-image" loading="lazy" />
                      <div className="tour-overlay">
                        <span className="view-btn">View Details</span>
                      </div>
                      <div className="duration-badge">
                        <AccessTime fontSize="small" style={{ fontSize: 14 }} />
                        <span>{tour.duration}</span>
                      </div>
                    </div>
                    <div className="tour-content">
                      <h3 className="tour-name">{tour.name}</h3>
                      <p className="tour-desc text-muted">{tour.description}</p>

                      <div className="tour-footer mt-4">
                        <div className="inclusions-preview">
                          <span className="text-xs text-accent uppercase tracking-wider mb-1 block">Includes</span>
                          <div className="flex flex-wrap gap-1">
                            {tour.inclusions.slice(0, 3).map((inc, i) => (
                              <span key={i} className="inclusion-pill">{inc}</span>
                            ))}
                          </div>
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
              className="tour-detail"
            >
              <button className="back-btn mb-8" onClick={handleBackToList}>
                <ArrowBack fontSize="small" /> Back to Tours
              </button>

              <div className="tour-detail-grid">
                <div className="tour-gallery-section">
                  <div className="main-image-wrapper glass-panel">
                    {activeImage ? (
                      <img
                        src={activeImage}
                        alt={selectedTour.name}
                        className="main-image"
                        onClick={() => setPreview({ src: activeImage, alt: selectedTour.name })}
                      />
                    ) : null}
                  </div>
                  {selectedTour.gallery && selectedTour.gallery.length > 1 && (
                    <div className="gallery-thumbs mt-4">
                      {selectedTour.gallery.map((src, idx) => (
                        <div
                          key={idx}
                          className={`thumb-item ${src === activeImage ? 'active' : ''}`}
                          onClick={() => setActiveImage(src)}
                        >
                          <img src={src} alt={`View ${idx + 1}`} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="tour-info-section glass-panel p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-serif">{selectedTour.name}</h2>
                    <div className="duration-tag">
                      <AccessTime fontSize="small" />
                      <span>{selectedTour.duration}</span>
                    </div>
                  </div>

                  <p className="text-muted mb-8 leading-relaxed">
                    {selectedTour.detailedDescription}
                  </p>

                  <div className="info-grid mb-8">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Highlights</h3>
                      <div className="highlights-list">
                        {selectedTour.highlights.map((highlight, idx) => (
                          <div key={idx} className="highlight-item">
                            <Terrain className="text-accent" fontSize="small" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-4">Included</h3>
                      <div className="inclusions-list">
                        {selectedTour.inclusions.map((inc, idx) => (
                          <div key={idx} className="inclusion-item">
                            <CheckCircle className="text-accent" fontSize="small" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pricing-note mb-6 p-4 bg-white/5 rounded-lg border border-white/10 text-sm text-muted">
                    {selectedTour.price.note}
                  </div>

                  <button
                    className="btn primary w-full"
                    onClick={() => setShowBookingForm(true)}
                  >
                    Book This Tour
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showBookingForm && selectedTour && (
            <div className="modal-overlay">
              <motion.div
                className="modal-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <BookingForm
                  serviceType="tour"
                  serviceName={selectedTour.name}
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
          images={tourImages}
          initialIndex={Math.max(0, initialIndex)}
          onClose={() => setPreview(null)}
        />
      </div>
    </div>
  );
};

export default Tours;
