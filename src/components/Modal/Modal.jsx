import React, { Component } from 'react';
import '../styles.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBgClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { modalPhotos } = this.props;

    return (
      <div className="Overlay" onClick={this.handleBgClick}>
        <div className="Modal">
          <img src={modalPhotos[0]} alt={modalPhotos[1]} />
        </div>
      </div>
    );
  }
}

export default Modal;

//  <div className="Overlay" onClick={this.handleBgClick}></div>

//
