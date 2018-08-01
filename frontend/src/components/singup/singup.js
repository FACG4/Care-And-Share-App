import React, { Component } from 'react';
import Input from './singupInput';
import './style.css';
/* eslint-disable*/
class Singup extends Component {
  constructor() {
    super();
    this.state = {
      response1: '',
      error: '',
    };
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
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
      const url = './signUp';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(signUpValues),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then((response) => {
          if(response.ok){
          this.setState(() => ({
            response1: response.ok,
          }));
          if(this.state.response1 === 'Success'){
            window.location = 'login'
          }
        }else{
          this.setState(()=>({
            error: response.error.detail,
          }));
        }
        });
     
    }
  }
  render() {
    return (
      <div className="container">
        <h2>
SignUp
        </h2>
        <form onSubmit={this.handleAddOption}>
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
        {(this.state.error) && (
        <div>
          <p>
user name or email already exists..
              please try anothr
          </p>
        </div>
        )}
     
      </div>
    );
  }
}
export default Singup;
