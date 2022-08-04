import { useState } from 'react';
import '../styles.css';

const Searchbar = ({ onOnSubmit }) => {
  const [queryMessage, setQueryMessage] = useState('');

  const handleChange = e => {
    setQueryMessage(e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onOnSubmit(queryMessage);
    setQueryMessage('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="" disabled={queryMessage === ''}>
          🔍
        </button>

        <input
          value={queryMessage}
          onChange={handleChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default Searchbar;
