import React from 'react';

// Import available images from "images and videos" folder
import boneFire from '../../images and videos/bone-fire.jpg';
import doubleBedQueen from '../../images and videos/double-bed-queen.jpg';
import doubleBed from '../../images and videos/double-bed.jpg';
import front from '../../images and videos/front.jpg';
import groupPic from '../../images and videos/group-pic.jpg';
import guestPc from '../../images and videos/guest-pc.jpeg';
import guest from '../../images and videos/guest.jpg';
import img20220511 from '../../images and videos/img-20220511-wa0015.jpg';
import mess from '../../images and videos/mess.jpg';
import reception from '../../images and videos/reciption.jpg';
import roofView from '../../images and videos/roof-view.jpg';
import roomDelux2 from '../../images and videos/room-delux-2.jpg';
import roomDeluxe from '../../images and videos/room-deluxe.jpg';
import side from '../../images and videos/side.jpg';
import tripGroup from '../../images and videos/trip-group.jpg';
import viewFromHill from '../../images and videos/view-from-hill.jpg';
import viewFromTop from '../../images and videos/view-from-top.jpg';

const images: { src: string; alt: string }[] = [
  { src: groupPic, alt: 'Guests group photo' },
  { src: tripGroup, alt: 'Trip group at Hill Icon' },
  { src: guest, alt: 'Happy guest' },
  { src: guestPc, alt: 'Guest at PC' },
  { src: boneFire, alt: 'Bonfire night' },
  { src: front, alt: 'Hotel front view' },
  { src: roofView, alt: 'Roof view' },
  { src: viewFromHill, alt: 'View from hill' },
  { src: viewFromTop, alt: 'View from top' },
  { src: roomDeluxe, alt: 'Deluxe room' },
  { src: roomDelux2, alt: 'Deluxe room 2' },
  { src: doubleBedQueen, alt: 'Queen double bed' },
  { src: doubleBed, alt: 'Double bed' },
  { src: side, alt: 'Side view' },
  { src: img20220511, alt: 'Memorable moment' },
  { src: reception, alt: 'Reception' },
  { src: mess, alt: 'Dining / Mess' },
];

const Gallery: React.FC = () => {
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
          {images.map((img, idx) => (
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
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
