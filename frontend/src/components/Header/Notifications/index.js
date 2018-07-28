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
    const notifications = this.props.connectReq.length? this.props.connectReq.map(element => {
      return <Notification name={element.name} key={element.id} />
    }):<p>You have no notifications</p>;
    
    return(
      <React.Fragment>
        <a onClick={this.toggleNotification} className="notification">
          <FontAwesomeIcon name="bell-o" />
        </a>
        {this.state.toggle? 
          <div className="notifications">
            {notifications}
          </div>: ''
        }
      </React.Fragment>
    );
  }
}

export default Notifications;