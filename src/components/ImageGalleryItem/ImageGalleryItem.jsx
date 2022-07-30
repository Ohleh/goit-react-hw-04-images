import React from 'react';
import '../styles.css';

const ImageGalleryItem = ({ images, onClickShowModal }) => {
  //
  const { id, webformatURL, tags } = images;
  return (
    <>
      <li className="ImageGalleryItem" key={id}>
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          onClick={() => onClickShowModal([webformatURL, tags])}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
