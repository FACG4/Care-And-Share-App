import React, { Component } from 'react';

class Notification extends Component {
  state = {
    response: []
  }

        componentWillReceiveProps() {
          this.setState({ response: Object.assign([], this.props.response) }, () => this.setState({ response: Object.assign([], this.props.response) })
          )
        }

        handleFriendRequestStatus(id, url) {
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({ connectionsId: id }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then(response => this.setState({
              response: Object.assign([], this.state.response.filter((noti) => (noti.id !== id)
              ))
            })
            )
            .catch(error => console.log("error fetch", error))
        }
        render() {
          return (
            <div>
              {!!this.state.response.length && this.state.response.map((notification) =>
                <div key={notification.id}>
                  <p>{notification.full_name}</p>
                  <button onClick={() => this.handleFriendRequestStatus(notification.id, '/api/friendrequestcancel')}>Cancel</button>
                  <button onClick={() => this.handleFriendRequestStatus(notification.id, '/api/friendrequestaccept')}> Accept </button>
                </div>)
              }

            </div>
          );
        }
}

export default Notification;

