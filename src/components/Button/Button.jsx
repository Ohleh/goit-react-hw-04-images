import React from 'react';
import '../styles.css';

const Button = ({ onChange }) => {
  return (
    <>
      <button type="button" className="Button" onClick={() => onChange(+1)}>
        load more
      </button>
    </>
  );
};

export default Button;
