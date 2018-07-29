import React, { Component } from 'react';

import Input from './singupInput';
import './style.css';
/* eslint-disable */

class Singup extends Component {
  handleAddInfo(e) {
    e.preventDefault();
    const signUpValues = {
      fullName: e.target.fullName.value,
      userName: e.target.userName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      ConfirmPass: e.target.ConfirmPass.value,
    };

    if (signUpValues.fullName.trim()
        && signUpValues.userName.trim()
        && signUpValues.email.trim()
        && signUpValues.password.trim()
        && signUpValues.ConfirmPass.trim()) {
     
    // make fetch to send data
    }
  }

  render() {
    return (

      <div className="container">

        <h2>
SignUp
        </h2>

        <form onSubmit={this.handleAddInfo}>

          <Input type="text" placeholder="Full Name" icon="fas fa-user-circle color--icon" name="fullName" />
          <Input type="text" placeholder="User Name" icon="fas fa-user-circle color--icon" name="userName" />
          <Input type="email" placeholder="Email" icon="fas fa-key color--icon" name="email" />
          <Input type="password" placeholder="Password" icon="fas fa-key  color--icon" name="password" />
          <Input type="password" placeholder="Confirm Password" icon="fas fa-key color--icon" name="ConfirmPass" />
          <div className="row">
            <button className="btn-signUp">
Sign Up
            </button>
          </div>

        </form>

      </div>
    );
  }
}

export default Singup;
