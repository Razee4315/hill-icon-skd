import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PlaceholderImage from '../components/PlaceholderImage';
import './Home.css';

const Home: React.FC = () => {
  const services = [
    {
      id: 'rooms',
      title: 'Premium Accommodation',
      description: 'Experience luxury and comfort in our carefully designed rooms with breathtaking mountain views.',
      image: '/images/room-deluxe.jpg',
      link: '/rooms',
      features: ['Mountain Views', 'Modern Amenities', 'Room Service']
    },
    {
      id: 'transport',
      title: 'Reliable Transport',
      description: 'Professional transport services for all terrains, from airport transfers to valley explorations.',
      image: '/images/side.jpg',
      link: '/transport',
      features: ['Professional Drivers', 'All Terrain Vehicles', 'Safe & Comfortable']
    },
    {
      id: 'tours',
      title: 'Guided Tours',
      description: 'Discover the natural beauty and cultural heritage of Skardu with our expertly guided tours.',
      image: '/images/view-from-hill.jpg',
      link: '/tours',
      features: ['Expert Guides', 'Cultural Experiences', 'Natural Wonders']
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview Section */}
      <section id="services-overview" className="services-overview section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Discover the perfect blend of luxury, adventure, and authentic experiences 
              in the heart of Skardu's magnificent landscape.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.add('show-placeholder');
                    }}
                  />
                  <PlaceholderImage
                    height={250}
                    text={`${service.title} Image`}
                    className="fallback-placeholder"
                  />
                  <div className="service-overlay">
                    <Link to={service.link} className="service-link">
                      Explore {service.title}
                    </Link>
                  </div>
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index} className="service-feature">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={service.link} className="service-cta">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-title">Why Choose Hill Icon?</h2>
              <p className="about-description">
                Located in the heart of Skardu, Hill Icon offers unparalleled access to the region's 
                most spectacular destinations. Our commitment to excellence ensures that every aspect 
                of your journey is carefully crafted to create unforgettable memories.
              </p>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <h4>Premium Quality</h4>
                  <p>Carefully selected accommodations and services that meet the highest standards.</p>
                </div>
                <div className="highlight-item">
                  <h4>Local Expertise</h4>
                  <p>Deep knowledge of the region's hidden gems and cultural treasures.</p>
                </div>
                <div className="highlight-item">
                  <h4>Personalized Service</h4>
                  <p>Tailored experiences that cater to your unique preferences and needs.</p>
                </div>
              </div>
              
              <Link to="/contact" className="about-cta">
                Get in Touch
              </Link>
            </div>
            
            <div className="about-image">
              <img
                src="/images/front.jpg"
                alt="Hill Icon Experience"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.add('show-placeholder');
                }}
              />
              <PlaceholderImage
                height={400}
                text="Hill Icon Experience"
                className="fallback-placeholder"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
