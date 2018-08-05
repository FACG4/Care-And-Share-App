import React from 'react';

const ChatArea = ({ messages ,textContent}) => {

    return (
        <div className="chatArea">
            {!messages.length &&  textContent } 
            {!!messages.length && messages.map((message) => <h4 key={message}>{message}</h4>)}
            </div>
    )
}

export default ChatArea;