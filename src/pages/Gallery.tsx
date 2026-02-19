import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../utils/images';
import ImageModal from '../components/ImageModal';
import SEO from '../components/SEO';
import './Gallery.css';

const galleryImages: { src: string; alt: string; category?: string }[] = [
  { src: images.groupPic, alt: 'Guest group photo at Hill Icon Skardu', category: 'Guests' },
  { src: images.tripGroup, alt: 'Tour group enjoying trip from Hill Icon Skardu', category: 'Guests' },
  { src: images.guest, alt: 'Happy guest at Hill Icon Skardu', category: 'Guests' },
  { src: images.guestPic, alt: 'Guest relaxing at Hill Icon Skardu', category: 'Guests' },
  { src: images.boneFire, alt: 'Bonfire evening at Hill Icon Skardu', category: 'Events' },
  { src: images.front, alt: 'Hill Icon Skardu hotel front view', category: 'Property' },
  { src: images.roofView1, alt: 'Mountain panorama from Hill Icon rooftop', category: 'Views' },
  { src: images.roofView2, alt: 'Sunset view from Hill Icon Skardu rooftop', category: 'Views' },
  { src: images.viewFromRoungChumik, alt: 'Scenic view from Roung Chumik near Hill Icon', category: 'Views' },
  { src: images.receptionFront, alt: 'Hill Icon Skardu reception entrance', category: 'Property' },
  { src: images.receptionBack, alt: 'Hill Icon Skardu reception interior', category: 'Property' },
  { src: images.garden1, alt: 'Hill Icon Skardu garden and outdoor seating', category: 'Property' },
  { src: images.twinRoom1, alt: 'Twin Bed Room at Hill Icon Skardu', category: 'Rooms' },
  { src: images.deluxeRoom1, alt: 'Deluxe Room with mountain view at Hill Icon Skardu', category: 'Rooms' },
  { src: images.familyRoom1, alt: 'Family Room at Hill Icon Skardu', category: 'Rooms' },
  { src: images.suiteRoom1, alt: 'Suite Room with panoramic view at Hill Icon Skardu', category: 'Rooms' },
];

const Gallery: React.FC = () => {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category || 'Others')))];

  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => (img.category || 'Others') === filter);

  // Prepare images for lightbox
  const lightboxImages = filteredImages.map(img => ({ src: img.src, alt: img.alt }));
  const initialIndex = preview ? lightboxImages.findIndex(img => img.src === preview.src) : 0;

  return (
    <div className="gallery-page section">
      <SEO
        title="Gallery"
        description="View photos of Hill Icon Skardu, our guests, events, and the beautiful scenery of Skardu Valley."
      />
      <div className="container">
        <motion.div
          className="page-header text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-uppercase tracking-widest text-sm font-semibold">Our Moments</span>
          <h1 className="page-title mt-2">Gallery</h1>
          <p className="page-subtitle text-muted max-w-2xl mx-auto mt-4">
            A glimpse of our guests, property, and the breathtaking moments at Hill Icon.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="gallery-filters mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="gallery-grid"
          layout
        >
          {filteredImages.map((img, idx) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="gallery-item"
              onClick={() => setPreview(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <span className="view-text">View</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ImageModal
          open={!!preview}
          src={preview?.src || ''}
          alt={preview?.alt}
          images={lightboxImages}
          initialIndex={Math.max(0, initialIndex)}
          onClose={() => setPreview(null)}
        />
      </div>
    </div>
  );
};

export default Gallery;
