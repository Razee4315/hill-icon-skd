import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Preloader.css';

interface PreloaderProps {
  visible: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ visible }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          className="preloader-overlay" 
          role="status" 
          aria-live="polite" 
          aria-label="Loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="preloader-box">
            <div className="loader" aria-hidden="true"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
