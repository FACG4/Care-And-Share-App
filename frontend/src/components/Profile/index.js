import React, { Component } from 'react';
import Fontawesome from 'react-fontawesome';

import './style.css';

class ProfileForm extends Component{
  state = {
    locations: ['London', 'Gaza', 'Bristol', 'Liverpool'],
    formData:{
      cared_for_situation: "Alzheimer",
      date_of_birth: "2018-08-04",
      location: "LONDON",
      looking_for: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      offer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    },
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
    const formData = this.state;
    console.log('formData', formData)
    // post fetch to the server
    // get response (success or failer)
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
      <form className="public-profile" onBlur={this.handleBlur} onFocus={this.handleFocus} onSubmit={this.handleSubmit} >
        <label htmlFor="location">Location:</label>
        <Fontawesome className="caret-down" name="caret-down" />
        <select name="location" id="location" defaultValue={location? location:"no-value"} onChange={this.handleChange} >
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
    );
  }
}

export default ProfileForm;