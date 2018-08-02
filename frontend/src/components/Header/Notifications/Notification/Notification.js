import React from 'react';

import './style.css';

const Notification = ({name}) => {
    return (
      <div className="notification-wrapper">
        <p>{name} wants to connect with you!</p>
        <div>
          <button>Accept</button>
          <button>Decline</button>
        </div>
      </div>
    );
}

export default Notification;