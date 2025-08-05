import React, { useState } from 'react';
import { images } from '../utils/images';
import ImageModal from '../components/ImageModal';

const galleryImages: { src: string; alt: string }[] = [
  { src: images.groupPic, alt: 'Guests group photo' },
  { src: images.tripGroup, alt: 'Trip group at Hill Icon' },
  { src: images.guest, alt: 'Happy guest' },
  { src: images.guestPic, alt: 'Guest with computer' },
  { src: images.boneFire, alt: 'Bonfire night' },
  { src: images.front, alt: 'Hotel front view' },
  { src: images.roofView1, alt: 'Roof view 1' },
  { src: images.roofView2, alt: 'Roof view 2' },
  { src: images.viewFromRoungChumik, alt: 'View from Roung Chumik' },
  { src: images.receptionFront, alt: 'Reception front' },
  { src: images.receptionBack, alt: 'Reception back' },
  { src: images.garden1, alt: 'Garden' },
  { src: images.twinRoom1, alt: 'Twin Room' },
  { src: images.deluxeRoom1, alt: 'Deluxe Room' },
  { src: images.familyRoom1, alt: 'Family Room' },
  { src: images.suiteRoom1, alt: 'Suite Room' },
];

const Gallery: React.FC = () => {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  return (
    <section className="section">
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Guest Gallery</h1>
          <p style={{ color: '#666' }}>A glimpse of our guests and moments at Hill Icon.</p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '12px',
          }}
        >
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              style={{
                margin: 0,
                overflow: 'hidden',
                borderRadius: 0,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 360,
                  objectFit: 'cover',
                  cursor: 'zoom-in'
                }}
                onClick={() => setPreview(img)}
              />
            </div>
          ))}
        </div>

        <ImageModal
          open={!!preview}
          src={preview?.src || ''}
          alt={preview?.alt}
          onClose={() => setPreview(null)}
          maxWidth="80vw"
          maxHeight="80vh"
        />
      </div>
    </section>
  );
};

export default Gallery;
