
import React, {Component} from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Login from './components/Login/Login';
import Carers from './components/Carers/Carers';
import handleAuthentication from './helpers/handleAuthentication';
import Notification from './components/notification/Notification';
import signUp from './components/singup/singup';
import Connection from './components/Connections/Connections';
import './style/style.css';

const token = sessionStorage.getItem('token');
class AppRoutes extends Component {
state = {
  response: [],
  refresh: 1
}

componentDidMount(){
fetch('/api/notification', {
  method:'POST',
  body: JSON.stringify(handleAuthentication(token)),
  headers: {'Content-Type': 'application/json'}
})
.then(res => res.json())
.catch (error => console.log("error fetch notification", error))
.then(response => {
  this.setState(
    {
      response: Object.assign([], response)
    }
)
})
}


  render(){
    const PrivateRoute = ({ component: Component }) => (
      <Route
        render={props => (
          handleAuthentication(token).status ? <Component {...props} />
            : <Redirect to="/login" />
        )}
      />
    );
    return(
      <div>

        <Notification refresh={this.refresh} response={this.state.response} />
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              render={props => (handleAuthentication(token).status
                ? <Carers {...props} token={token} userId={handleAuthentication} />
                : <Redirect to="/login" />)

                  }
              exact
            />
            <Route
              path="/login"
              render={props => (handleAuthentication(token).status ? <Redirect to="/" />
                : <Login {...props} handleAuthentication={handleAuthentication} />)}
            />
            <Route path="/signUp" component={signUp} />
            <PrivateRoute path="/MyFriends" component={Connection} />

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


export default AppRoutes;
