import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Close } from '@mui/icons-material';
import './ImageModal.css';

interface ImageModalProps {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
  maxWidth?: number | string;
  maxHeight?: number | string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt,
  open,
  onClose,
  maxWidth = '90vw',
  maxHeight = '90vh'
}) => {
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="image-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="image-modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth, maxHeight }}
          >
            <button className="modal-close-btn" onClick={onClose}>
              <Close />
            </button>
            <img src={src} alt={alt || 'Preview'} className="modal-image" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
