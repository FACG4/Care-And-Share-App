// /* eslint-disable */
import Modal from 'react-modal';
import React, { Component } from 'react';
import ProfileModal from './../Profile/ConnectProfile';
import sessionCheckError from './../../../helpers/handleAuthentication'
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
      data:{},
      err:'',
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
    const token = sessionStorage.getItem('token');
    // const senderId = sessionCheckError(token).id;
    const url = '/api/MyFriends';
    const { userId } = this.props;
    console.log(userId, this.props.id)
    fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({
        receiverId: userId,
        id: this.props.id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        if (response) {
          this.setState({ action: { type: 'del', id: userId }, msg: 'Friend deleted' });
        }
      });
  }
  getProfileData = (id) => {
    fetch(`/api/public-profile?id=${id}`, {
      credentials: 'same-origin',
      method: 'GET',
    }).then(res=>res.json())
      .then((res) => {
        if(res.err) {
          this.setState({err: 'Some error happened, please try again'})
          this.openProfileModal();
        } else {
          this.setState({data: res[0]})
          this.openProfileModal();
        }
      })
  }
  redirectPage(e) {
    switch (e.target.name) {
      case 'profile':
      this.setState({
        profileId: e.target.id,
      });
      this.getProfileData(e.target.id);
        break;
      case 'chat':
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
        <span className="modal-close" onClick={() =>{
          this.setState({msg: ''})
          closeModel(this.state.action)
          }}>
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
        <div className="error">
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
        data = {this.state.data}
        err = {this.state.err}
      />
    </React.Fragment>
    );
  }
}

Modal.setAppElement('#root');


export default OptionModal;
