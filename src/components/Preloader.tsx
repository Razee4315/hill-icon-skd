import React from 'react';
import './Preloader.css';
import loaderGif from '../../images and videos/load-36.gif';

interface PreloaderProps {
  visible: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="preloader-overlay" role="status" aria-live="polite" aria-label="Loading">
      <div className="preloader-box">
        <img className="preloader-image" src={loaderGif} alt="Loading" />
      </div>
    </div>
  );
};

export default Preloader;
