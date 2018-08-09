        import React, { Component } from 'react';
        import Modal from 'react-modal';
        import PropTypes from 'prop-types';
        import FreindsRequestButton from './FriendsRequestButton/FriendsRequestButton';
        import handleAuthentication from '../../../helpers/handleAuthentication';
        import FontAwesome from 'react-fontawesome';

        import './style.css';

        class CarerCardBody extends Component{
        state = {
          msg: undefined,
          cardShow:false,
          friendsRelationResponse: []
        }

        componentDidMount(){
          
          const { id: userId } = handleAuthentication(sessionStorage.getItem('token'));  
          fetch('/api/checkFriendRelation', {
            method: 'POST',
            body: JSON.stringify({userId}),
            headers: {
              'Content-Type': 'application/json',
            },
            
          })
          .then(res => res.json())
          .then((res) => {
                this.setState({
                  friendsRelationResponse: Object.assign([], res)
                })
                
              })
              .catch(error => this.setState({ msg: "Error .. May be from connections" }));
          };


        FreindRequestAlertHide = () =>{
            this.setState({
              cardShow:false
            })
          }

        handleFriendsRequest = (senderId, receiverId, url) => {
          const data = {
            senderId,
            receiverId,
          };
          fetch(url, {
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
            
              return (response.title === 'addFriend') ? this.setState({ msg: response.msg, cardShow: true }, 
                this.setState((prevState) => prevState.friendsRelationResponse.unshift({
                  receiver_user_id: receiverId,
                  sender_user_id: senderId
                }))              
              )
              : 
                this.setState({ 
                  msg: response.msg, cardShow: true 
                }, 
                () => this.setState({
                  friendsRelationResponse: Object.assign([], 
                    this.state.friendsRelationResponse.filter((relation) => !((relation.receiver_user_id === receiverId && relation.sender_user_id === senderId) || (relation.receiver_user_id === senderId && relation.sender_user_id === receiverId))))})
                )
            })
            .catch(error => this.setState({msg: "Error .. May be from connections"}));
          };


          render(){
                    const {cardShow:show, msg} = this.state;
                    const {
                      isOpenValue, CarerCardBodyHide, id, response,
                    } = this.props;
                    let  carer = '';
                    let relation = '';
                    response && (carer = response.filter(card => card.id === id)[0]);
            this.state.friendsRelationResponse && (relation = this.state.friendsRelationResponse.filter(relation => (relation.receiver_user_id === id || relation.sender_user_id === id)))
            return (
                        <Modal
                          isOpen={isOpenValue}
                          onRequestClose={CarerCardBodyHide}
                          ariaHideApp={false}
                          closeTimeoutMS={200}
                          className="modal"
                        >
                        <FontAwesome name="times" className="modal-close-icon" onClick={CarerCardBodyHide}/>
                        <div className="modal-inside">

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
                          {(relation.length === 0) ?
                    <FreindsRequestButton icon="fas fa-user-plus add-ico" url="/api/freindsrequest" receiverId={id} handleFriendsRequest={this.handleFriendsRequest} />                   
                    :
                    <FreindsRequestButton icon="fa fa-minus add-ico" url="/api/cancelfriendrequest" receiverId={id} handleFriendsRequest={this.handleFriendsRequest} />                   

                          }
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
