import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'

import HeaderTitle from './HeaderTitle/HeaderTitle';
import Notifications from './Notifications';

import './style.css';

class Header extends Component {
  static contextTypes = {
    router: () => true,
  }
  // the title should come from the selected nav

  render(){
    return(
      <header className="App-header">
        <Notifications response={this.props.response} />
        <HeaderTitle title={this.props.title} />
        
        <a className="menu">
          <FontAwesomeIcon name="bars" />
        </a>
        <a onClick={this.context.router.history.goBack} className="angle-left">
          <FontAwesomeIcon name="angle-left" />
        </a>
      </header>
    );
  }
}

export default Header;