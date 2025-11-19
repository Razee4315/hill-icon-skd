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
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader-content">
            <motion.div 
              className="preloader-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="text-reveal">Hill Icon</span>
              <span className="text-sub">Skardu</span>
            </motion.div>
            
            <motion.div 
              className="loading-bar-container"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="loading-bar"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
