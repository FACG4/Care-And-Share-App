import React, { Component } from 'react';

class Notification extends Component {
  state = {
response: [],
deletedId: 0
  }


handleFriendRequestStatus(id, url){
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({connectionsId: id}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .catch (error => console.log("error fetch", error))
}
  render() {
    return (
      <div>
          {!!this.props.response.length && this.props.response.map((notification) =>
<div key={notification.id}>
  <p>{notification.full_name}</p>
  <button onClick={()=>this.handleFriendRequestStatus(notification.id, '/api/friendrequestcancel')}>Cancel</button>
  <button onClick={()=>this.handleFriendRequestStatus(notification.id, '/api/friendrequestaccept')}> Accept </button>
  </div>)
        }

      </div>
    );
  }
}


export default Notification;
