import React, { Component } from 'react';
import logo from './careandshare.png';

import ('../style.css');

class Title extends Component {
  render(){
    const { title } = this.props;

    return(
      <a href="#">
        {title?<h1>{title}</h1>:<img className="App-header-title" src={logo} alt="logo"/>}
      </a>
    )
  }
}

export default Title;