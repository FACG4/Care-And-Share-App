import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'

import HeaderTitle from './HeaderTitle/HeaderTitle';
import Notifications from './Notifications';
import './style.css';

class Header extends Component {
  static contextTypes = {
    router: () => true,
  }
  state = {
    show: false,
  }

  render(){
    const { show } = this.state;
    return(
      <header className="App-header">
        <Notifications handleNotificationResponse={this.props.handleNotificationResponse} response={this.props.response} />
        <HeaderTitle title={this.props.title} />
        
        <a className="menu">
        <div className={`notifications ${show?'': "hidden2"}`}>
          <button className="signout-menu" onClick={()=> {
            
            }}>Signout</button>
        </div>
          <FontAwesomeIcon className="signout-button" onClick={()=> {
            sessionStorage.setItem("token", "");
            window.location ='/login';
          }} name="sign-out" />
        </a>
        <a onClick={this.context.router.history.goBack} className="angle-left">
          <FontAwesomeIcon name="angle-left" />
        </a>
      </header>
    );
  }
}

export default Header;