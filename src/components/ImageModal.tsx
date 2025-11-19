import React from 'react';
import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface ImageModalProps {
  src: string;
  alt?: string;
  // Optional: Support for multiple images if we want to pass a gallery later
  images?: { src: string; alt?: string }[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
  // Deprecated props kept for compatibility
  maxWidth?: number | string;
  maxHeight?: number | string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt,
  images,
  initialIndex = 0,
  open,
  onClose
}) => {
  // Prepare images for PhotoSlider
  const sliderImages = images 
    ? images.map(img => ({ src: img.src, key: img.src, intro: img.alt }))
    : [{ src, key: src, intro: alt }];

  return (
    <PhotoSlider
      images={sliderImages}
      visible={open}
      onClose={onClose}
      index={initialIndex}
      onIndexChange={() => {}}
      // Ensure z-index is higher than Navbar (1000)
      overlayRender={(props) => (
        <div 
          style={{ 
            position: 'absolute', 
            zIndex: 2000, 
            width: '100%', 
            height: '100%', 
            pointerEvents: 'none' 
          }} 
        />
      )}
    />
  );
};

export default ImageModal;
