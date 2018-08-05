import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'

import Notification from './Notification/Notification';

import './style.css';

class Notifications extends Component {
  state = {
    show: false,
    connectReq: [ //should be fetched from db
      { name: 'ahmed', id:1 },
      { name: 'mohammed', id:2 },
      { name: 'abdSamad', id:3 },
      { name: 'Frah', id:4 },
      { name: 'Ramy', id:5 },
      { name: 'Inass', id:6 },
      { name: 'Isaac', id:7 },
      { name: 'Marwa', id:8 },
    ]
  }

  toggleNotification = (e) => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render () {
    const { show, connectReq } = this.state;
    
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