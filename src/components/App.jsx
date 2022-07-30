// import { render } from '@testing-library/react';

import React, { Component } from 'react';
import './styles.css';
import { Audio } from 'react-loader-spinner';
import imageAPI from '../Services/image-service.js';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    imgSrc: [],
    showModal: false,
    status: false,
    isVisible: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page, images } = this.state;

    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState(prevState => ({ status: !prevState.status }));

      imageAPI
        .getImages(query, page)
        .then(data => {
          if (data.hits.length === 0) {
            alert('Sorry. There are no images');
          } else {
            this.setState(prevState => ({
              images: [...prevState.images, ...data.hits],
              isVisible: page <= Math.ceil(data.total / images.length),
            }));
          }
        })
        // .then(data => console.log(data))
        .then(this.setState(prevState => ({ status: !prevState.status })));
    }
  }

  onFormInput = data => {
    this.setState({ query: data, images: [], page: 1 });
  };

  HandleCklick = data => {
    this.setState(prevState => ({ page: prevState.page + data }));
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  onClickShowModal = data => {
    this.setState({ imgSrc: data, showModal: true });
  };

  render() {
    const { images, showModal, status, isVisible } = this.state;

    return (
      <div>
        <Searchbar onOnSubmit={this.onFormInput} />
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
        <ImageGallery
          images={images}
          onClickShowModal={this.onClickShowModal}
        />
        {isVisible && <Button onChange={this.HandleCklick} />}
        {showModal && (
          <Modal modalPhotos={this.state.imgSrc} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
