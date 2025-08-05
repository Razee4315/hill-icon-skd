import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Hotel, DirectionsCar, Terrain, ContactMail, PhotoAlbum } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Helper to handle clicking the same route: scroll to top and notify pages to reset
  const handleSameRouteClick = (path: string) => (e: React.MouseEvent) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('navigate-same-route', { detail: { path } }));
    } else {
      closeMenu();
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <h2>Hill Icon</h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={handleSameRouteClick('/')}
            >
              <HomeIcon fontSize="small" style={{ marginRight: 6 }} /> Home
            </Link>
            <Link 
              to="/rooms" 
              className={`navbar-link ${isActive('/rooms') ? 'active' : ''}`}
              onClick={handleSameRouteClick('/rooms')}
            >
              <Hotel fontSize="small" style={{ marginRight: 6 }} /> Rooms
            </Link>
            <Link 
              to="/transport" 
              className={`navbar-link ${isActive('/transport') ? 'active' : ''}`}
              onClick={handleSameRouteClick('/transport')}
            >
              <DirectionsCar fontSize="small" style={{ marginRight: 6 }} /> Transport
            </Link>
            <Link 
              to="/tours" 
              className={`navbar-link ${isActive('/tours') ? 'active' : ''}`}
              onClick={handleSameRouteClick('/tours')}
            >
              <Terrain fontSize="small" style={{ marginRight: 6 }} /> Tours
            </Link>
            <Link 
              to="/gallery" 
              className={`navbar-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={handleSameRouteClick('/gallery')}
            >
              <PhotoAlbum fontSize="small" style={{ marginRight: 6 }} /> Gallery
            </Link>
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={handleSameRouteClick('/contact')}
            >
              <ContactMail fontSize="small" style={{ marginRight: 6 }} /> Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`navbar-mobile ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-mobile-link ${isActive('/') ? 'active' : ''}`}
            onClick={handleSameRouteClick('/')}
          >
            <HomeIcon fontSize="small" style={{ marginRight: 6 }} /> Home
          </Link>
          <Link 
            to="/rooms" 
            className={`navbar-mobile-link ${isActive('/rooms') ? 'active' : ''}`}
            onClick={handleSameRouteClick('/rooms')}
          >
            <Hotel fontSize="small" style={{ marginRight: 6 }} /> Rooms
          </Link>
          <Link 
            to="/transport" 
            className={`navbar-mobile-link ${isActive('/transport') ? 'active' : ''}`}
            onClick={handleSameRouteClick('/transport')}
          >
            <DirectionsCar fontSize="small" style={{ marginRight: 6 }} /> Transport
          </Link>
          <Link 
            to="/tours" 
            className={`navbar-mobile-link ${isActive('/tours') ? 'active' : ''}`}
            onClick={handleSameRouteClick('/tours')}
          >
            <Terrain fontSize="small" style={{ marginRight: 6 }} /> Tours
          </Link>
          <Link 
            to="/gallery" 
            className={`navbar-mobile-link ${isActive('/gallery') ? 'active' : ''}`}
            onClick={handleSameRouteClick('/gallery')}
          >
            <PhotoAlbum fontSize="small" style={{ marginRight: 6 }} /> Gallery
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-mobile-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={handleSameRouteClick('/contact')}
          >
            <ContactMail fontSize="small" style={{ marginRight: 6 }} /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
