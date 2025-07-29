import React from 'react';
import './PlaceholderImage.css';

interface PlaceholderImageProps {
  width?: number | string;
  height?: number | string;
  text?: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = '100%',
  height = 200,
  text = 'Image Placeholder',
  className = ''
}) => {
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div className={`placeholder-image ${className}`} style={style}>
      <span className="placeholder-text">{text}</span>
    </div>
  );
};

export default PlaceholderImage;
