// /* eslint-disable */
import Modal from 'react-modal';
import React, { Component } from 'react';
import ProfileModal from './../Profile/ConnectProfile';
const customStyles = {
  content : {
    width: '290px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    background: 'rgba(255,255,255,0.9)',
    border: 'none',
    transform: 'translate(-50%, -50%)'
  }
};
class OptionModal extends Component {
  constructor() {
    super();
    this.state = {
      profileModal: false,
      profileId: '',
      response: [],
      action: {},
      msg: '',
    };
    this.sendDate = this.sendDate.bind(this);
    this.redirectPage = this.redirectPage.bind(this);
  }
  openProfileModal = () => {
    this.setState({profileModal: true});
  }
  closeProfileModal = () => {
    this.setState({profileModal: false});
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
      this.setState({
        profileId: e.target.id,
      });
      this.openProfileModal();
      // this.getProfileData();
        // window.location = `profile/${e.target.id}`;
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
    <React.Fragment>
      <Modal
        isOpen={selectedOption}
        contentLabel="Slected Option"
        onRequestClose={closeModel}
        style={customStyles}
       
      >
        <span className="modal-close" onClick={() => closeModel(this.state.action)}>
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
      <ProfileModal 
        openProfileModal={this.state.profileModal}
        closeProfileModal={this.closeProfileModal}
        id = {this.state.profileId}
      />
    </React.Fragment>
    );
  }
}

Modal.setAppElement('#root');


export default OptionModal;
