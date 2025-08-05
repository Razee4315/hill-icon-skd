import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Hotel, DirectionsCar, Terrain, ContactMail } from '@mui/icons-material';
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
            >
              <HomeIcon fontSize="small" style={{ marginRight: 6 }} /> Home
            </Link>
            <Link 
              to="/rooms" 
              className={`navbar-link ${isActive('/rooms') ? 'active' : ''}`}
            >
              <Hotel fontSize="small" style={{ marginRight: 6 }} /> Rooms
            </Link>
            <Link 
              to="/transport" 
              className={`navbar-link ${isActive('/transport') ? 'active' : ''}`}
            >
              <DirectionsCar fontSize="small" style={{ marginRight: 6 }} /> Transport
            </Link>
            <Link 
              to="/tours" 
              className={`navbar-link ${isActive('/tours') ? 'active' : ''}`}
            >
              <Terrain fontSize="small" style={{ marginRight: 6 }} /> Tours
            </Link>
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
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
            onClick={closeMenu}
          >
            <HomeIcon fontSize="small" style={{ marginRight: 6 }} /> Home
          </Link>
          <Link 
            to="/rooms" 
            className={`navbar-mobile-link ${isActive('/rooms') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <Hotel fontSize="small" style={{ marginRight: 6 }} /> Rooms
          </Link>
          <Link 
            to="/transport" 
            className={`navbar-mobile-link ${isActive('/transport') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <DirectionsCar fontSize="small" style={{ marginRight: 6 }} /> Transport
          </Link>
          <Link 
            to="/tours" 
            className={`navbar-mobile-link ${isActive('/tours') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <Terrain fontSize="small" style={{ marginRight: 6 }} /> Tours
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-mobile-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <ContactMail fontSize="small" style={{ marginRight: 6 }} /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
