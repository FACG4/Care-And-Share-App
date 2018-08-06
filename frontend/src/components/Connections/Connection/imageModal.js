// /* eslint-disable */
import Modal from 'react-modal';
import React, { Component } from 'react';

class OptionModal extends Component {
  constructor() {
    super();
    this.state = {
      response: [],
      action: {},
      msg: '',
    };
    this.sendDate = this.sendDate.bind(this);
    this.redirectPage = this.redirectPage.bind(this);
  }


  sendDate() {
    const url = '/api/MyFriends';
    const { userId } = this.props;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ id: userId }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        if (response) {
          this.setState({ action: { type: 'del', id: userId }, msg: 'delete friend' });
          // window.location = 'MyFriends';
        }
      });
  }

  redirectPage(e) {
    switch (e.target.name) {
      case 'profile':

        window.location = `profile/${e.target.id}`;
        break;
      case 'chat':
        // window.location = `chat/${e.target.id}`;
              window.location = 'chats';
    }
  }

  render() {
    const {
      closeModel, selectedOption, userId,
    } = this.props;

    return (
      <Modal
        isOpen={selectedOption}
        contentLabel="Slected Option"
        onRequestClose={closeModel}
        className="modal--style"
      >
        <span onClick={() => closeModel(this.state.action)}>
      close
        </span>

        <button
          className="btn--style"
          type="button"
          id={userId}
          name="chat"
          onClick={this.redirectPage}
        >
      send Massage

        </button>
        <button
          className="btn--style"
          type="button"
          id={userId}
          name="profile"
          onClick={this.redirectPage}
        >
          profile
        </button>
        <button onClick={this.sendDate} className="btn--style" type="button">
      delete

        </button>
        <div>
          {' '}
          <span>
            {' '}
            {this.state.msg}
          </span>

        </div>


      </Modal>
    );
  }
}

Modal.setAppElement('#root');


export default OptionModal;
