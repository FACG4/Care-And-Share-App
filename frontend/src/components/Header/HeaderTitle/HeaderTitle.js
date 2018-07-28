import React, { Component } from 'react';
import logo from './careandshare.png';

import ('../style.css');

class Title extends Component {
  state = {

  }

  render(){
    return(
      <a href="#">
        <img className="App-header-title" src={logo} alt="logo"/>
      </a>
    )
  }
}

export default Title;