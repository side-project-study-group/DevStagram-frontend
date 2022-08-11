import React from 'react';

function Input({ placeholder, handleChange }) {
  return (
    <input type='text' placeholder={placeholder} onChange={handleChange} />
  );
}

export default Input;
