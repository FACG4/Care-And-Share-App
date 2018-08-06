import React from 'react';

import './style.css';

const Notification = ({ name, handleFriendRequestStatus, id}) => {
    return (
      <div className="notification-wrapper">
        <p>{name} wants to connect with you!</p>
        <div>
          <button onClick={() => handleFriendRequestStatus(id, '/api/friendrequestaccept')}>Accept</button>
          <button onClick={() => handleFriendRequestStatus(id, '/api/friendrequestcancel')}>Decline</button>
        </div>
      </div>
    );
}

export default Notification;