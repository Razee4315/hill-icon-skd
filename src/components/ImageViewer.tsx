import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './ImageViewer.css';

interface ImageViewerProps {
  children: React.ReactElement; // The trigger element (e.g., an <img> tag)
  src: string; // The full-size image source
  alt?: string;
}

/**
 * A wrapper component that makes any child element clickable to open a full-screen image viewer.
 * Uses 'react-photo-view' for touch gestures, zoom, and smooth animations.
 */
const ImageViewer: React.FC<ImageViewerProps> = ({ children, src, alt }) => {
  return (
    <PhotoProvider
      speed={() => 300}
      maskOpacity={0.9}
      bannerVisible={false} // Hide the default banner if preferred
    >
      <PhotoView src={src}>
        {/* We clone the child to ensure it can accept the onClick handler from PhotoView if needed, 
            though PhotoView handles this by wrapping children. 
            Actually, PhotoView expects a direct child that can receive events. */}
        <div className="image-viewer-trigger" style={{ cursor: 'zoom-in', height: '100%', width: '100%' }}>
          {children}
        </div>
      </PhotoView>
    </PhotoProvider>
  );
};

export default ImageViewer;

