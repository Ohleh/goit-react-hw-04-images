import React from 'react';
import { nanoid } from 'nanoid';
import '../styles.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClickShowModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          images={image}
          onClickShowModal={onClickShowModal}
          key={nanoid()}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
