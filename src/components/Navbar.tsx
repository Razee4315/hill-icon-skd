import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
      // Use a double scroll to overcome any pending reflow/animations
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 0);
      window.dispatchEvent(new CustomEvent('navigate-same-route', { detail: { path } }));
    } else {
      closeMenu();
      // Schedule a scroll for route changes initiated via navbar
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }));
      }, 0);
    }
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={handleSameRouteClick('/')}
            aria-label="Hill Icon Home"
          >
            <h2>Hill Icon</h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={handleSameRouteClick('/')}
              title="Home"
              aria-label="Home"
            >
              <HomeIcon fontSize="small" style={{ marginRight: 6 }} /> <span className="label">Home</span>
            </Link>
            <Link 
              to="/rooms" 
              className={`navbar-link ${isActive('/rooms') ? 'active' : ''}`}
              onClick={handleSameRouteClick('/rooms')}
              title="Rooms"
              aria-label="Rooms"
            >
              <Hotel fontSize="small" style={{ marginRight: 6 }} /> <span className="label">Rooms</span>
            </Link>
            <Link 
              to="/transport" 
              className={`navbar-link ${isActive('/transport') ? 'active' : ''}`}
              onClick={handleSameRouteClick('/transport')}
              title="Transport"
              aria-label="Transport"
            >
              <DirectionsCar fontSize="small" style={{ marginRight: 6 }} /> <span className="label">Transport</span>
            </Link>
            <Link 
              to="/tours" 
              className={`navbar-link ${isActive('/tours') ? 'active' : ''}`}
              onClick={handleSameRouteClick('/tours')}
              title="Tours"
              aria-label="Tours"
            >
              <Terrain fontSize="small" style={{ marginRight: 6 }} /> <span className="label">Tours</span>
            </Link>
            <Link 
              to="/gallery" 
              className={`navbar-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={handleSameRouteClick('/gallery')}
              title="Gallery"
              aria-label="Gallery"
            >
              <PhotoAlbum fontSize="small" style={{ marginRight: 6 }} /> <span className="label">Gallery</span>
            </Link>
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={handleSameRouteClick('/contact')}
              title="Contact"
              aria-label="Contact"
            >
              <ContactMail fontSize="small" style={{ marginRight: 6 }} /> <span className="label">Contact</span>
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-nav"
              className={`navbar-mobile ${isMenuOpen ? 'open' : ''}`}
              style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Fade in the contents separately to avoid background delay */}
              <motion.ul className="navbar-mobile-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <li className="navbar-mobile-item">
                  <Link 
                    to="/" 
                    className={`navbar-mobile-link ${isActive('/') ? 'active' : ''}`}
                    onClick={handleSameRouteClick('/')}
                  >
                    <HomeIcon fontSize="small" style={{ marginRight: 6 }} /> <span className="label">Home</span>
                  </Link>
                </li>
                <li className="navbar-mobile-item">
                  <Link 
                    to="/rooms" 
                    className={`navbar-mobile-link ${isActive('/rooms') ? 'active' : ''}`}
                    onClick={handleSameRouteClick('/rooms')}
                  >
                    <Hotel fontSize="small" style={{ marginRight: 6 }} /> <span className="label">Rooms</span>
                  </Link>
                </li>
                <li className="navbar-mobile-item">
                  <Link 
                    to="/transport" 
                    className={`navbar-mobile-link ${isActive('/transport') ? 'active' : ''}`}
                    onClick={handleSameRouteClick('/transport')}
                  >
                    <DirectionsCar fontSize="small" style={{ marginRight: 6 }} /> <span className="label">Transport</span>
                  </Link>
                </li>
                <li className="navbar-mobile-item">
                  <Link 
                    to="/tours" 
                    className={`navbar-mobile-link ${isActive('/tours') ? 'active' : ''}`}
                    onClick={handleSameRouteClick('/tours')}
                  >
                    <Terrain fontSize="small" style={{ marginRight: 6 }} /> <span className="label">Tours</span>
                  </Link>
                </li>
                <li className="navbar-mobile-item">
                  <Link 
                    to="/gallery" 
                    className={`navbar-mobile-link ${isActive('/gallery') ? 'active' : ''}`}
                    onClick={handleSameRouteClick('/gallery')}
                  >
                    <PhotoAlbum fontSize="small" style={{ marginRight: 6 }} /> <span className="label">Gallery</span>
                  </Link>
                </li>
                <li className="navbar-mobile-item">
                  <Link 
                    to="/contact" 
                    className={`navbar-mobile-link ${isActive('/contact') ? 'active' : ''}`}
                    onClick={handleSameRouteClick('/contact')}
                  >
                    <ContactMail fontSize="small" style={{ marginRight: 6 }} /> <span className="label">Contact</span>
                  </Link>
                </li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
