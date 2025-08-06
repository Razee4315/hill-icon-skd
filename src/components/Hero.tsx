import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

interface HeroProps {
  videoSrc?: string;
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  onVideoReady?: () => void; // notify when video can play
}

const Hero: React.FC<HeroProps> = ({
  videoSrc,
  title = "Welcome to Hill Icon Skardu.",
  subtitle = "Experience Comfort, Feel at Home – Right Here in the Heart of Skardu",
  showCTA = true,
  onVideoReady
}) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  // Serve from public so path is stable under base (/hill-icon-skd/)
  const defaultPublicSrc = `${import.meta.env.BASE_URL}media/hero.mp4`;
  const [resolvedSrc, setResolvedSrc] = React.useState<string>(videoSrc || defaultPublicSrc);

  // Ensure autoplay works across browsers by attempting programmatic play
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch (_e) {
        // Some browsers block autoplay; ensure muted is set and retry
        v.muted = true;
        try {
          await v.play();
        } catch (_e2) {
          // If it still fails, we silently ignore to avoid UI disruption
        }
      }
    };
    // If metadata is ready, try immediately; otherwise wait for it
    if (v.readyState >= 2) {
      tryPlay();
    } else {
      const onLoaded = () => tryPlay();
      v.addEventListener('loadeddata', onLoaded, { once: true });
      return () => v.removeEventListener('loadeddata', onLoaded);
    }
  }, []);

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
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src={resolvedSrc}
          onLoadedData={() => {
            // helpful during debugging to see if the video loaded
            // eslint-disable-next-line no-console
            console.debug('Hero video loaded:', { src: resolvedSrc });
            onVideoReady && onVideoReady();
          }}
          onError={(e) => {
            // eslint-disable-next-line no-console
            console.error('Hero video failed to load/play', { src: resolvedSrc, error: e });
            // Always fall back to the known-good public asset path
            if (resolvedSrc !== defaultPublicSrc) {
              setResolvedSrc(defaultPublicSrc);
            }
          }}
        >
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="hero-title">{title}</h1>
            {subtitle && (
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
              >
                {subtitle}
              </motion.p>
            )}
            {showCTA && (
              <motion.div 
                className="hero-cta"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
              >
                <button 
                  className="hero-btn primary"
                  onClick={scrollToServices}
                >
                  Explore Our Services
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;