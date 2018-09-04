import React, {Component} from 'react';
import AddMessage from './AddMessage';
import ChatArea from './ChatArea';

class Conversation extends Component{
   constructor(props){
       super(props);
       this.state = {
       messages: []
   }

   this.handleChangeInput = (e) => {
       
       this.setState({ [e.target.name]: e.target.value });
   }

   this.handleOnSubmitMessages = (e) => {
                     e.preventDefault();
                     this.setState({
                     message: "",
                     messages: [...this.state.messages, this.state.message]
                   })
    fetch('/api/sendmessage', {
        method: "POST",
        body: JSON.stringify({messages:this.state.message, senderId: 1, receiverId: 2}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(response => console.log("response", response)
        )                       
        .catch (err => console.log("error fetch conversation",err)
        )

}
   }

    render () {
             return (
                  <div className="messenger">
                     <ChatArea messages={this.state.messages} textContent="No Messages" />
                     <AddMessage messageValue={this.state.message} handleChangeInput={this.handleChangeInput} handleOnSubmitMessages={this.handleOnSubmitMessages} />    
                 </div>
                    )
                                   }
                                }

export default Conversation;                               