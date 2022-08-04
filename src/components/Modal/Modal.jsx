import { useEffect } from 'react';
import '../styles.css';

const Modal = ({ onClose, modalPhotos }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        window.addEventListener('keydown', handleKeyDown);
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBgClick = e => {
    if (e.currentTarget === e.target) {
      return onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleBgClick}>
      <div className="Modal">
        <img src={modalPhotos[0]} alt={modalPhotos[1]} />
      </div>
    </div>
  );
};

export default Modal;
