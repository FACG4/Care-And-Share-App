import React, { Component } from 'react';
import Fontawesome from 'react-fontawesome';
import Modal from 'react-modal';

import './style.css';
const customStyles = {
  content : {
    width: '200px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
class ProfileForm extends Component{
  state = {
    modalIsOPen:false,
    modalMsg: '',
    modalTitle: '',
    locations: ['London', 'Gaza', 'Bristol', 'Liverpool'],
    formData:{
      cared_for_situation: "",
      date_of_birth: "2018-08-04",
      location: "",
      looking_for: "",
      offer: "",
    },
  }

  componentDidMount() {
    console.log('userId', this.props.userId)
    const id = this.props.userId; // should get the id from the login token??
    fetch(`api/profile?id=${id}`, {
      credentials: 'same-origin',
      method: 'GET',
    }).then(res=>res.json())
      .then((res) => {
        const { sitution: cared_for_situation, age: date_of_birth, location, looking: looking_for, offer} = res[0];
        this.setState({
          formData: {
            cared_for_situation,
            date_of_birth,
            location,
            looking_for,
            offer,
          }
        })
      })
      .catch((err)=> {
        this.openModal('Error', 'Some error happened, please refresh the page');
      });
  }

  openModal = (title, msg) => {
    this.setState({
      modalIsOPen: true,
      modalMsg: msg,
      modalTitle: title,
    });
  }
  closeModal = () => {
    this.setState({modalIsOPen: false});
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState((prevState) => {
      const formData = JSON.parse(JSON.stringify(prevState.formData));
      formData[name] = value;
      return { formData };
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formData } = this.state;
    const id = this.props.userId; // should get the id from the login token??
    fetch(`api/profile?id=${id}`, {
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(formData),
    }).then(res=>res.json())
      .then((res) => {
        if (res.err) {
          this.openModal('Error', 'Some error happened, please try save the data again');
        }
        this.openModal('Success', 'Your profile has been updated');
      })
      .catch((err) => {
        this.openModal('Error', 'Some error happened, please try save the data again');
      });
  }

  handleFocus = (e) => {
    switch(e.target.tagName) {
      case 'INPUT':
      case 'SELECT':
      case 'TEXTAREA':
        e.target.classList.add('active');
        break;
    }
  }

  handleBlur = (e) => {
    switch(e.target.tagName) {
      case 'INPUT':
      case 'SELECT':
      case 'TEXTAREA':
        e.target.classList.remove('active');
        break;
    }
  }

  render(){
    const { locations }= this.state;
    const { location, date_of_birth, cared_for_situation, looking_for, offer } = this.state.formData;

    return (
      <React.Fragment>
        <Modal
          isOpen={this.state.modalIsOPen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div className="public-profile--modal">
            <h2>{this.state.modalTitle}</h2>
            <p>{this.state.modalMsg}</p>
            <button onClick={this.closeModal}>Ok</button>
          </div>
        </Modal>
        <form className="public-profile" onBlur={this.handleBlur} onFocus={this.handleFocus} onSubmit={this.handleSubmit} >
          <label htmlFor="location">Location:</label>
          <Fontawesome className="caret-down" name="caret-down" />
          <select name="location" id="location" value={location? location:"no-value"} onChange={this.handleChange} >
            <option disabled value="no-value">Select a location</option>
            {locations.map(location => {
              return <option key={location} value={location.toUpperCase()}>{location}</option>
            })}
          </select>

          <label htmlFor="dateOfBirth">Date Of Birth:</label>
          <input type="date" name="date_of_birth" id="dateOfBirth" value={date_of_birth} onChange={this.handleChange} />

          <label htmlFor="caredForSituation">Cared For Situtation</label>
          <input type="text" name="cared_for_situation" id="caredForSituation" value={cared_for_situation} onChange={this.handleChange}/>

          <label htmlFor="lookingFor">What are you looking for?</label>
          <textarea type="text" name="looking_for" id="lookingFor" value={looking_for} onChange={this.handleChange} />

          <label htmlFor="offer">What can you offer to other carers?</label>
          <textarea type="text" name="offer" id="offer" value={offer} onChange={this.handleChange} />

          <button className="button" type="submit">Save</button>
        </form>
      </React.Fragment>
    );
  }
}

export default ProfileForm;
