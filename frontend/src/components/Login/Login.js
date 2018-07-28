import React, { Component } from 'react';
import fetch from '../../helpers/fetch';
import './style.css';
class Login extends Component {

state = {
    error: undefined,
    response: []
  }

 handelLogin = (e) => {
  e.preventDefault();
  const inputsValues = {
    userName:e.target.userName.value,
    password:e.target.password.value
  }

  if(inputsValues.userName.trim() && inputsValues.password.trim()){
    e.target.userName.value = "";
    e.target.password.value = "";
    const handleFetch = {
      method: 'POST',
      url: '/login',
      data: inputsValues,
    }


fetch(handleFetch, (response) => {
response = JSON.parse(response);
this.setState(() =>   (
  {response: Object.assign({}, response),
  error: undefined
              }
            )
          )
        }
    );

  }  else{
    this.setState(()=>(
      {error: "All fields are required"}
    ));
  }

}


render(){
  return(
    <div className="login-container">
    <form className="login-form" method="POST" onSubmit={this.handelLogin} >
    <div className="login-input-container">
    <div className="login-input-label">
<div className="ico">true</div><input className="login-input-field" name="userName" type="text" placeholder="Username" ></input>
    </div>
    <div className="login-input-label">
<div className="ico">true</div><input className="login-input-field" name="password" type="password" placeholder="Password" ></input>
    </div>
    </div>
    <div className="login-button-parent">
<button className="login-button">Sign In</button>
    </div>
    </form>
    <div className="error-msg">
    {this.state.error && <p>Error MSG: {this.state.error}</p>}
    </div>
</div>
  )
}
}

export default Login;
