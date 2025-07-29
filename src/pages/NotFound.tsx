import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-illustration">
            <h1 className="error-code">404</h1>
            <div className="mountain-illustration">🏔️</div>
          </div>
          
          <div className="not-found-text">
            <h2 className="error-title">Page Not Found</h2>
            <p className="error-description">
              Oops! It seems like you've wandered off the beaten path. 
              The page you're looking for doesn't exist, just like some of the hidden valleys in Skardu.
            </p>
            
            <div className="error-actions">
              <Link to="/" className="home-button">
                Return to Home
              </Link>
              <Link to="/contact" className="contact-button">
                Contact Us
              </Link>
            </div>
            
            <div className="helpful-links">
              <h3>Explore Our Services:</h3>
              <div className="service-links">
                <Link to="/rooms" className="service-link">Rooms</Link>
                <Link to="/transport" className="service-link">Transport</Link>
                <Link to="/tours" className="service-link">Tours</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
