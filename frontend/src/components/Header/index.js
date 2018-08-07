import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'

import HeaderTitle from './HeaderTitle/HeaderTitle';
import Notifications from './Notifications';
import {Redirect} from 'react-router-dom'
import './style.css';

class Header extends Component {
  static contextTypes = {
    router: () => true,
  }
  state = {
    show: false,
  }
  // the title should come from the selected nav

  render(){
    const { show } = this.state;
    return(
      <header className="App-header">
        <Notifications response={this.props.response} />
        <HeaderTitle title={this.props.title} />
        
        <a className="menu">
        <div className={`notifications ${show?'': "hidden2"}`}>
          <button className="signout-menu" onClick={()=> {
            sessionStorage.setItem("token", "");
            window.location ='/login';
            }}>Signout</button>
        </div>
          <FontAwesomeIcon onClick={()=> this.setState({
            show: !show,
          })} name="bars" />
        </a>
        <a onClick={this.context.router.history.goBack} className="angle-left">
          <FontAwesomeIcon name="angle-left" />
        </a>
      </header>
    );
  }
}

export default Header;