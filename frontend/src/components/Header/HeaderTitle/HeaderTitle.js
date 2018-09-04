import React from 'react';
import logo from './carerssupportnetwork.png';

import ('../style.css');

const Title = ({ title }) => {
    return(
      <a href="/home">
        {title?<h1>{title}</h1>:<img className="App-header-title" src={logo} alt="logo"/>}
      </a>
    );
}

export default Title;
