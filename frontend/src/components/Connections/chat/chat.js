import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FontAwesome from 'react-fontawesome';
import sessionCheckError from '../../../helpers/handleAuthentication';
import './style.css'

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      userId:'',
      msg: [],
      msgSend: '',

    };
   
  }


  componentDidMount() 
  {
    setInterval(()=>{
      
  
      const token = sessionStorage.getItem('token');
      const senderId = sessionCheckError(token).id;
      this.setState({userId:senderId})
  
      const url = '/api/SelectChat';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          senderId,
          reciverId: this.props.location.pathname.slice(6),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then((response) => {
      
          const newMsg = [];
            response.res.map(x=>{
              newMsg.push({id:x.sender_id,body:x.message_body})
    
            })
            this.setState({
              msg: newMsg,
            })

            // auto scroll
            var chatDiv = document.querySelector('.main');
            if (chatDiv) {
              chatDiv.scrollTop = chatDiv.scrollHeight;
            }
 
    })

  }, 3000);
   

  }

 

   sendMsg = (e)=> {
    e.preventDefault();
    const token = sessionStorage.getItem('token');
    const senderId = sessionCheckError(token).id;


    const url = '/api/chat';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        senderId,
        reciverId: this.props.location.pathname.slice(6),
        msg: this.state.msgSend,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())

      .then((response) => {

      })
      .catch(error => console.error('Error:', error));

    e.target.reset();
  }

 msg = (e)=> {
    this.setState(
      {
        msgSend: e.target.value,
      },
    );
  }

  render() {
    
    return (
      <div className="chatt" ref="chatbox">      
        {this.state.msg.map((m, i) => (       
            <p className={(m.id === this.state.userId)? "span-senderMsg is-success":"span-reciverMsg is-info"} key={i}>
              <span>{m.body}</span>
            </p>      
        ))}            
        <form className="messageFiled" onSubmit={this.sendMsg}>
          <input type="text" name="inputChat" onChange={this.msg} />
          <button className="button is-info" type="submit">
          <FontAwesome  name='send' /> Send
          </button>
        </form>
      </div>
    );
  }
}

export default Chat;
