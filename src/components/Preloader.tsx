import React from 'react';
import './Preloader.css';

interface PreloaderProps {
  visible: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="preloader-overlay" role="status" aria-live="polite" aria-label="Loading">
      <div className="preloader-box">
        <div className="loader" aria-hidden="true"></div>
      </div>
    </div>
  );
};

export default Preloader;
