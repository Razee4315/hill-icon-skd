import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Preloader from '../components/Preloader';
import PlaceholderImage from '../components/PlaceholderImage';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { images } from '../utils/images';
import './Home.css';

import { CheckCircle, ArrowForward } from '@mui/icons-material';

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  const services = [
    {
      id: 'rooms',
      title: 'Premium Accommodation',
      description: 'Sanctuary of comfort with panoramic mountain views.',
      image: images.deluxeRoom1,
      link: '/rooms',
      features: ['Mountain Views', 'Modern Amenities', '24/7 Room Service'],
      price: 'From Rs 5,000'
    },
    {
      id: 'transport',
      title: 'Luxury Transport',
      description: 'Navigate the rugged terrain in absolute comfort and safety.',
      image: images.premioCar,
      link: '/transport',
      features: ['Professional Chauffeurs', '4x4 Fleet', 'Airport Transfers'],
      price: 'From Rs 6,000'
    },
    {
      id: 'tours',
      title: 'Curated Tours',
      description: 'Immersive journeys into the heart of the Karakoram.',
      image: images.viewFromRoungChumik,
      link: '/tours',
      features: ['Expert Local Guides', 'Custom Itineraries', 'Cultural Immersion'],
      price: 'From Rs 25,000'
    }
  ];

  const stats = [
    { value: 4, suffix: '+', label: 'Years of Excellence' },
    { value: 47, suffix: '+', label: 'Happy Guests' },
    { value: 4, suffix: '', label: 'Room Types' },
    { value: 3, suffix: '+', label: 'Tour Packages' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="home-page">
      <SEO
        title="Home"
        description="Hill Icon Skardu - Premium hotel accommodation, reliable transport, and guided tours in Skardu, Gilgit-Baltistan. Mountain views, free WiFi, 24/7 service."
        keywords="Hill Icon, Skardu hotel, luxury stay Skardu, Skardu transport, tours in Skardu, Gilgit-Baltistan hotel"
      />
      <Preloader visible={loading} />
      <Hero onVideoReady={() => setLoading(false)} />

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => {
              const { count, ref } = useCountUp(stat.value);
              return (
                <div key={idx} className="stat-item" ref={ref}>
                  <span className="stat-value">{count}{stat.suffix}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-overview" className="section services-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">What We Offer</span>
            <h2 className="section-title mt-4 mb-6">Elevate Your Experience</h2>
            <p className="section-subtitle max-w-2xl mx-auto text-muted">
              Discover the perfect blend of luxury, adventure, and authentic experiences
              in the heart of Skardu's magnificent landscape.
            </p>
          </motion.div>

          <motion.div
            className="services-grid mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service) => (
              <motion.div key={service.id} className="service-card" variants={itemVariants}>
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gray-800 flex items-center justify-center">
                    <PlaceholderImage height={300} text={service.title} />
                  </div>
                  <div className="service-overlay"></div>
                  <span className="service-price-badge">{service.price}</span>
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>

                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index} className="service-feature">
                        <CheckCircle sx={{ fontSize: 16, color: 'var(--color-accent)' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={service.link} className="service-link">
                    <span>Explore</span>
                    <ArrowForward sx={{ fontSize: 18 }} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label">About Us</span>
              <h2 className="about-title mt-4 mb-6">Why Choose Hill Icon?</h2>
              <p className="about-description text-lg mb-8">
                Located in the heart of Skardu, Hill Icon offers unparalleled access to the region's
                most spectacular destinations. Our commitment to excellence ensures that every aspect
                of your journey is carefully crafted to create unforgettable memories.
              </p>

              <div className="about-highlights">
                {[
                  { title: 'Premium Quality', desc: 'Accommodations that meet the highest global standards.' },
                  { title: 'Local Expertise', desc: 'Deep knowledge of hidden gems and cultural treasures.' },
                  { title: 'Personalized Service', desc: 'Tailored experiences for your unique preferences.' }
                ].map((item, idx) => (
                  <div key={idx} className="highlight-item">
                    <div className="highlight-dot"></div>
                    <div>
                      <h4 className="text-white text-lg font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn primary mt-8">
                Get in Touch
              </Link>
            </motion.div>

            <motion.div
              className="about-image-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-frame">
                <img
                  src={images.front}
                  alt="Hill Icon Skardu - Hotel front view"
                  className="about-image"
                />
              </div>
              <div className="experience-badge glass-panel">
                <span className="years">4+</span>
                <span className="label">Years of<br />Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Ready to Experience Skardu?</h2>
            <p className="cta-subtitle">Book your stay at Hill Icon and discover the breathtaking beauty of Northern Pakistan.</p>
            <div className="cta-actions">
              <Link to="/rooms" className="btn primary">View Rooms</Link>
              <a href="https://wa.me/923487997495" target="_blank" rel="noopener noreferrer" className="btn glass">
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-wrapper">
        <div className="container">
          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default Home;
