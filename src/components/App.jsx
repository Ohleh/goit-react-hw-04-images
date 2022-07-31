// import { render } from '@testing-library/react';

import { useState, useEffect } from 'react';
import './styles.css';
import { Audio } from 'react-loader-spinner';
import imageAPI from '../Services/image-service.js';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [imgSrc, setImgSrc] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setStatus(s => !s);
    imageAPI
      .getImages(query, page)
      .then(data => {
        console.log(data);
        if (data.hits.length === 0) {
          alert('Sorry. There are no images');
        } else {
          setImages(s => [...s, ...data.hits]);
          setIsVisible(page < Math.ceil(data.total / data.hits.length));
          console.log(data.hits.length);
        }
      })
      .then(setStatus(s => !s));
  }, [page, query]);

  const onFormInput = data => {
    setQuery(data);
    setImages([]);
    setPage(1);
  };

  const HandleCklick = data => {
    setPage(s => s + data);
  };

  const toggleModal = () => {
    setShowModal(s => !s);
  };

  const onClickShowModal = data => {
    setImgSrc(data);
    setShowModal(true);
  };

  return (
    <div>
      <Searchbar onOnSubmit={onFormInput} />
      {status && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      <ImageGallery images={images} onClickShowModal={onClickShowModal} />
      {isVisible && <Button onChange={HandleCklick} />}
      {showModal && <Modal modalPhotos={imgSrc} onClose={toggleModal} />}
    </div>
  );
};

export default App;
