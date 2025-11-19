import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../utils/images';
import './Hero.css';

interface HeroProps {
  videoSrc?: string;
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  onVideoReady?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  videoSrc = images.heroVideo,
  title = "Experience the Extraordinary",
  subtitle = "Luxury accommodation, premium transport, and curated tours in the heart of Skardu.",
  showCTA = true,
  onVideoReady
}) => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-overview');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={images.front}
          onCanPlayThrough={() => onVideoReady && onVideoReady()}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <motion.div
              className="hero-text-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="hero-label"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Welcome to Hill Icon
              </motion.span>

              <h1 className="hero-title">
                {title.split(" ").map((word, i) => (
                  <span key={i} className="word-wrapper">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="word"
                    >
                      {word}&nbsp;
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                {subtitle}
              </motion.p>

              {showCTA && (
                <motion.div
                  className="hero-actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <button className="btn primary" onClick={scrollToServices}>
                    Explore Services
                  </button>
                  <button className="btn glass" onClick={() => window.location.href = '/contact'}>
                    Contact Us
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="mouse"></div>
        <span>Scroll to Explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
