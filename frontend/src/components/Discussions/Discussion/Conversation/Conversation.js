import React, {Component} from 'react';

class Conversation extends Component{
state = {
    messages: [],

}

handleMessages = (e) => {
e.preventDefault();
this.setState((prevState) => prevState.messages.unshift(this.state.message) )

}

handleMessage = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
    render ()
                {
                    
                    return (
<div>
                        <div className="chat-container">
                            {this.state.messages.map((message) => {
                                    {
                                        this.state.message
                                
                                        
                                }
                            })}
                        </div>
                        <form onSubmit={this.handleMessages} >
                <input name="message" className="message" type="text" onChange={this.handleMessage} />
            </form>
     </div>
        )
                }
                                   }

export default Conversation;                                   