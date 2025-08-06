import React, { useEffect } from 'react';

interface ImageModalProps {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
  maxWidth?: number | string; // e.g., '90vw' or 900
  maxHeight?: number | string; // e.g., '90vh' or 700
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, open, onClose, maxWidth = '90vw', maxHeight = '90vh' }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const isFullscreen = (maxWidth === '100vw' || maxHeight === '100vh');

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: isFullscreen ? 0 : 16,
        cursor: 'zoom-out'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'transparent',
          maxWidth,
          maxHeight,
          width: 'auto',
          height: 'auto',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          borderRadius: isFullscreen ? 0 : 12,
          overflow: 'hidden',
          cursor: 'default'
        }}
      >
        <img
          src={src}
          alt={alt || 'Preview'}
          style={{
            display: 'block',
            maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
            maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
            width: isFullscreen ? '100vw' : '100%',
            height: isFullscreen ? '100vh' : '100%',
            objectFit: 'contain',
            background: '#000'
          }}
        />
      </div>
    </div>
  );
};

export default ImageModal;
