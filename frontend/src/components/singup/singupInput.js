import React from 'react';
import FontAwesomeIcon from 'react-fontawesome';
import './style.css';

const Input = ({
  icon, type, placeholder, name,
}) => (
  <div className="row">
    <FontAwesomeIcon className={icon} />
    <input type={type} placeholder={placeholder} name={name} />
  </div>
);


export default Input;
