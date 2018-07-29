import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'

import Notification from './Notification/Notification';

import './style.css';

class Notifications extends Component {
  state = {
    show: false,
  }

  toggleNotification = (e) => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render () {
    const { connectReq } = this.props;
    const { show } = this.state;
    
    const notifications = connectReq.length? connectReq.map(element => {
      return <Notification name={element.name} key={element.id} />
    }):<p>You have no notifications</p>;

    return(
      <React.Fragment>
        <a onClick={this.toggleNotification} className="notification">
          <div>
            {(connectReq.length && !show)?<span className="num">{connectReq.length}</span>:''}
            <FontAwesomeIcon name="bell-o" />
          </div>
        </a>
        <div className={`notifications ${show?'': "hidden"}`}>
          {notifications}
        </div>
      </React.Fragment>
    );
  }
}

export default Notifications;