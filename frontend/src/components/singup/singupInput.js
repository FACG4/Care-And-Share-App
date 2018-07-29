import React from 'react';
import './style.css';
/* eslint-disable */

const Input = ({
  icon, type, placeholder, name,
}) => (
  <div className="row">
    <i className={icon} />
    <input type={type} placeholder={placeholder} name={name} />
  </div>
);


export default Input;
