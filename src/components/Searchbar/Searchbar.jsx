import React, { Component } from 'react';
import '../styles.css';

class Searchbar extends Component {
  state = {
    queryMessage: '',
  };
  handleChange = e => {
    this.setState({ queryMessage: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onOnSubmit(this.state.queryMessage);
    this.setState({ queryMessage: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className=""
            disabled={this.state.queryMessage === ''}
          >
            🔍
          </button>

          <input
            value={this.state.queryMessage}
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
