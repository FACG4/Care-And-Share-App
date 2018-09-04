/* eslint-disable */
import React, { Component } from 'react';
import Image from './Connection/image';
import OptionModal from './Connection/imageModal';
import './style.css';


class Connection extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: undefined,
      response: [],
      userId: [],
      modalId: 0,
    };
    this.handelOpenModel = this.handelOpenModel.bind(this);
    this.handelCloseModel = this.handelCloseModel.bind(this);
  }

  componentDidMount() {
    console.log('id', this.props.id)
    const url = '/api/MyFriends';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({id: this.props.id}),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        this.setState(() => (
          {
            response,
          }
        ));
      });
  }

  handelOpenModel(id) {
    this.setState({
      selectedOption: true,
      modalId: id,

    });
    
  }

  handelCloseModel(action) {
    this.setState(() => ({
      selectedOption: false,
    }));

    if (action.type === 'del') { this.setState({ response: this.state.response.filter(friend => friend.id !== action.id) }); }
  }

handleResponse = (deletedConnectionId) =>{
  this.setState({
    response: this.state.response.filter((connection)=>{
      return connection.id !== deletedConnectionId
    })

  });
}
  render() {
    const {
      response, selectedOption, fullName, image, userId,
    } = this.state;
    return (
      <div className="flex-container">
        { this.state.response &&

  this.state.response.map((friend, id) => (
       
    
    <Image
      key={id}
      name={friend.full_name}
      src={friend.image}
            id={friend.user_id}
      openModel={this.handelOpenModel}
    />
     

  ))}
        <OptionModal handleResponse={this.handleResponse} selectedOption={selectedOption} closeModel={this.handelCloseModel} userId={this.state.modalId} id={this.props.id} alluser={this.state.userId} />

      </div>
    );
  }
}

export default Connection;
