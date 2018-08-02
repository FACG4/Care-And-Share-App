import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import FreindsRequestButton from './FriendsRequestButton/FriendsRequestButton';
import FreindsRequestAlert from './FriendRequestAlert/FriendRequestAlert';
import './style.css';

class CarerCardBody extends Component{
state = {
  msg: undefined,
  cardShow:false,
}


FreindRequestAlertHide = () =>{
     this.setState({
       cardShow:false
     })
  }

handleFriendsRequest = (senderId, receiverId) => {
  const data = {
    senderId,
    receiverId,
  };
  fetch('/freindsrequest', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },

  })
    .then(res => res.json())
    .then((response) => {
      if (parseInt(response.code, 10) === 42703) {
        return this.setState({msg: "error in Database", cardShow:true})
      }
      if (parseInt(response.code, 10) === 23505) {
        return this.setState({msg: "You are already friends", cardShow:true})
      }
      return this.setState({msg: response.msg, cardShow:true})
    })
    .catch(error => this.setState({msg: "Error .. May be from connections"}));
  };


  render(){
    const {cardShow:show, msg} = this.state;
    const {
      isOpenValue, CarerCardBodyHide, id, response,
    } = this.props;
  let  carer = '';
    response && (carer = response.filter(card => card.id === id)[0]);
    return (
      <Modal
        isOpen={isOpenValue}
        onRequestClose={CarerCardBodyHide}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
      >

        <div className="modal">

          <h5>

    A Carer from
            {' '}
            {
          carer && carer.location
    }
          </h5>
          <h5>

    Age:
            {' '}
            {
          carer && carer.age
    }
          </h5>

          <h5>
    Cared for situation:
          </h5>
          {' '}
          {
          carer && (
          <p>
            {carer.sitution}
          </p>
          )
    }

          <h5>
    What I can offer to other carers ?
          </h5>
          {' '}
          {
          carer && (
          <p>
            {carer.offer}
          </p>
          )
    }
          <h5>
    What I looking for ?
          </h5>
          {' '}
          {
          carer && (
          <p>
            {carer.looking}
          </p>
          )
    }

          <button type="submit" onClick={CarerCardBodyHide}>
    Close
          </button>

          <FreindsRequestButton receiverId={id} handleFriendsRequest={this.handleFriendsRequest} />
          {this.state.cardShow && <FreindsRequestAlert msg={msg} FreindRequestAlertHide={this.FreindRequestAlertHide} isOpenValue={show} />}
        </div>
      </Modal>
    );
  }
};

CarerCardBody.propTypes = {
  isOpenValue: PropTypes.bool.isRequired,
  CarerCardBodyHide: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  response: PropTypes.any,
};

export default CarerCardBody;
