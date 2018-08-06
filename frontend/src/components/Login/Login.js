import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome';

import './style.css';

class Login extends Component {
state = {
  error: undefined,
  response: [],
  username: '',
  password: '',
  tokenCheck: undefined
}


handleInputChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
}

 handelLogin = (e) => {
   e.preventDefault();
   const inputsValues = {
     username: this.state.username,
     password: this.state.password,
   };

   if (inputsValues.username.trim() && inputsValues.password.trim()) {
     this.setState({
       username: '',
       password: '',
     });

     fetch('/login', {
       method:'POST',
       body: JSON.stringify(inputsValues),
       headers: {
         'Content-Type': 'application/json'
       }
     }
   )
     .then(response => response.json())
     .then(response => {
      sessionStorage.setItem('token', response.token);
      this.setState(() => (
        {
          response: Object.assign({}, response),
          error: response.msg,
          tokenCheck: response.status
        }
      ))
      response.status && (window.location = '/')
     })
     .catch (error => console.log("error fetch", error))

   } else {
     this.setState(() => (
       { error: 'All fields are required' }
     ));
   }
 }



render(){
  return(
    <div className="container-login">
    <div className="login-header">
    {/* <h3 className="login-header--title"> Sign In </h3> */}
    <h3 className="login-header--title"> Login </h3>
    </div>
    <form className="login-form" method="POST" onSubmit={this.handelLogin} >
    <div className="login-input">
    <div>
            <FontAwesomeIcon className="fas fa-user-circle color--icon" /><input className="login-input-field" name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} />
    </div>
    <div>
            <FontAwesomeIcon className="fas fa-key  color--icon" /><input className="login-input-field" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
    </div>
    </div>
    <button className="big-button">Sign In</button>
    </form>
  {this.state.error &&  <div className="login-error-msg">
    { <h3>{this.state.error}</h3>}
    </div>}
    <button className="big-button"><a href="/signUp">Join Now</a></button>
</div>
  )
}
}

export default Login;
