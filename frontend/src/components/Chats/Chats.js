import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './styles.css';

class Chats extends React.PureComponent {

  state = {
    chat: ['hello', 'hi!', 'do you want to chat?']
  }

  saveMsg = (msg) => this.setState({
    chat: [
      ...this.state.chat,
      msg
    ]
  })

  render() {
    return (
    <section className="chat">
        <div>
          <header className="is-link is-bold">
            <h1> Chat Page </h1>
          </header>
        </div>
      <section className="chat section">
        <div className="chats-body">
          <Messages chat={this.state.chat} />
        </div>
      </section>
        <div>
          <footer className="is-small">
            <Chat saveMsg={this.saveMsg} />
          </footer>
        </div>
    </section>
    )
  }
}

const Chat = ({ saveMsg }) => (
  <form className="messageFiled" onSubmit={(e) => {
    e.preventDefault();
    saveMsg(e.target.elements.userInput.value);
    e.target.reset();
  }}>
    <div className="field has-addons">
      <div className="control is-expanded">
        <input className="input" name="userInput" type="text" placeholder="Type your message" />
      </div>
      <div className="control">
        <button className="button is-info">
          <FontAwesome  name='send' /> Send
        </button>
      </div>
    </div>
  </form>
);

const Messages = ({ chat }) => (
  <div style={{ heigth: '100%', width: '100%' }}>
    {chat.map((m, i) => {
      const msgClass = i === 0 || i % 2 === 0 // for demo purposes, format every other msg
      return (
        <p style={{ padding: '.25em', textAlign: msgClass ? 'left' : 'right', overflowWrap: 'normal' }}>
          <span key={i} className={`tag is-medium ${msgClass ? 'is-success' : 'is-info'}`}>{m}</span>
        </p>
      )}
    )}
  </div>
);

export default Chats;
