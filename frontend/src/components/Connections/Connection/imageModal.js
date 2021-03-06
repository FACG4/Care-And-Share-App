// /* eslint-disable */
import Modal from 'react-modal';
import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,Link
} from 'react-router-dom';

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
    const senderId = sessionCheckError(token).id;
    const url = '/api/MyFriends';
    const { userId } = this.props;
    console.log("ddd",userId);
    

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        receiverId: userId,
        senderId }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        if (response) {
          this.setState({ action: { type: 'del', id: userId }, msg: 'delete friend' });
        }
      });
  }
  getProfileData = (id) => {
    fetch(`/api/public-profile?id=${id}`, {
      credentials: 'same-origin',
      method: 'POST',
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
      this.openProfileModal();
        break;
      case 'chat':

              window.location = `chat/${e.target.id}`;
              break;
            
    }
  }

  render() {
    const {
      closeModel, selectedOption, userId,
    } = this.props;
    console.log("propsModal",this.props);
    

    return (
    <React.Fragment>
      <Modal
        isOpen={selectedOption}
        contentLabel="Slected Option"
        onRequestClose={closeModel}
        style={customStyles}
       
      >
        <span className="modal-close" onClick={() => closeModel(this.state.action,this.state.msg)}>
      close
        </span>

        <button
          className="btn--style"
          type="button"
          id={userId}
          name="chat"
          onClick={this.redirectPage}
        >
    
     
     massage
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
        data = {this.state.data}
        err = {this.state.err}
      />
    </React.Fragment>
    );
  }
}

Modal.setAppElement('#root');


export default OptionModal;
