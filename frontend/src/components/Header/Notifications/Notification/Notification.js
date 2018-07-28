import React , { Component } from 'react';

class Notification extends Component {
  
  render(){
    return (
      <div className="wrapper">
        <p>{this.props.name} wants to connect with you!</p>
        <div>
          <button>Accept</button>
          <button>Decline</button>
        </div>
      </div>
    );
  }
}

export default Notification;