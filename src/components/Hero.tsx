import React from 'react';
import { images } from '../utils/images';
import './Hero.css';

interface HeroProps {
  videoSrc?: string;
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  videoSrc = images.heroVideo,
  title = "Welcome to Hill Icon Skardu.",
  subtitle = "Experience Comfort, Feel at Home – Right Here in the Heart of Skardu",
  showCTA = true
}) => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-overview');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/src/assets/front.jpg"
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">{title}</h1>
            {subtitle && (
              <p className="hero-subtitle">{subtitle}</p>
            )}
            {showCTA && (
              <div className="hero-cta">
                <button 
                  className="hero-btn primary"
                  onClick={scrollToServices}
                >
                  Explore Our Services
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
