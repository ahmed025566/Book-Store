import React from 'react';

const Button = ({ onclick, label, className }) => (
  <button type="button" className={className} onClick={onclick}>{label}</button>
);

export default Button;
