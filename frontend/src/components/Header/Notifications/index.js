import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'

import Notification from './Notification/Notification';

import('./style.css');

class Notifications extends Component {
  state = {
    toggle: false,
  }

  toggleNotification = (e) => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  render () {
    const { connectReq } = this.props;

    const notifications = connectReq.length? connectReq.map(element => {
      return <Notification name={element.name} key={element.id} />
    }):<p>You have no notifications</p>;

    const bell = (connectReq.length && !this.state.toggle)?<div><span className="num">{connectReq.length}</span><FontAwesomeIcon name="bell-o" /></div>: <FontAwesomeIcon name="bell-o" />;
    
    return(
      <React.Fragment>
        <a onClick={this.toggleNotification} className="notification">
          {bell}
        </a>
        {this.state.toggle?
          <div className="notifications">
            {notifications}
          </div>: <div className="notifications hidden">
            {notifications}
          </div>
        }
      </React.Fragment>
    );
  }
}

export default Notifications;