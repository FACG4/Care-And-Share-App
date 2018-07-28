import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'

import HeaderTitle from './HeaderTitle/HeaderTitle';
import Notifications from './Notifications';

import ('./style.css')

class Header extends Component {


  render(){
    return(
      <header className="App-header">
        <Notifications connectReq={this.props.connectReq}/>
        <HeaderTitle title={this.props.title} />
        
        <a href="#" className="menu">
          <FontAwesomeIcon name="bars" />
        </a>
        <a href="#" className="angle-left">
          <FontAwesomeIcon name="angle-left" />
        </a>
      </header>
    );
  }
}

export default Header;