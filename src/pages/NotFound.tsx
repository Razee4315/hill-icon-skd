import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowForward } from '@mui/icons-material';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-page section">
      <div className="container">
        <div className="not-found-content">
          <motion.div
            className="error-display"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="error-code">404</h1>
            <div className="error-glow"></div>
          </motion.div>

          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif mb-4">Off the Beaten Path</h2>
            <p className="text-muted mb-8 text-lg">
              It seems you've ventured into uncharted territory. The page you're looking for
              is as elusive as a snow leopard in the Karakoram.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/" className="btn primary">
                <Home fontSize="small" /> Return Home
              </Link>
              <Link to="/contact" className="btn glass">
                Contact Support <ArrowForward fontSize="small" />
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-muted mb-4 uppercase tracking-widest">Popular Destinations</p>
              <div className="flex justify-center gap-6 text-sm">
                <Link to="/rooms" className="hover:text-accent transition-colors">Rooms</Link>
                <Link to="/transport" className="hover:text-accent transition-colors">Transport</Link>
                <Link to="/tours" className="hover:text-accent transition-colors">Tours</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
