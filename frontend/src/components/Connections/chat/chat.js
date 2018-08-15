import React, { Component } from 'react';
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
      <div>
      
        {this.state.msg.map((m, i) => (
       
            <p className={(m.id === this.state.userId)? "span-senderMsg":"span-reciverMsg"} key={i}>
              {m.body}
            </p>
      
        ))}
      
      

        <form className="messageFiled" onSubmit={this.sendMsg }>


          <input type="text" name="inputChat" onChange={this.msg} />
          <button type="submit">
send
          </button>


        </form>


      </div>
    );
  }
}

export default Chat;
