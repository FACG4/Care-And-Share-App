import React, {Component} from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home';
import Carers from './components/Carers/Carers';
import handleAuthentication from './helpers/handleAuthentication';
import Signup from './components/singup/singup';
import Header from './components/Header';
import Chats from './components/Chats/Chats';
import Profile from './components/Profile';
import Diaries from './components/MyDiary/MyDiary';
import Discussion from './components/Discussions/Discussions';
import Connection from './components/Connections/Connections';
import MyBook from './components/MyCarePlan/MyCarePlan';
import Conversation from './components/Discussions/Discussion/Conversation/Conversation';
import NavElements from './components/Navbar/NavElement';
import Chat from "./components/Connections/chat/chat";
import Error from "./components/Error";

import './style/style.css';
import './AppRoutes.css';

    const token = sessionStorage.getItem('token');
    class AppRoutes extends Component {
        state = {
          response: [],
        }

        componentDidMount(){
        fetch('/api/notification', {
          method:'POST',
          body: JSON.stringify(handleAuthentication(token)),
          headers: {'Content-Type': 'application/json'}
        })
              .then(res => res.json())
              .then(response => {
                this.setState(
                  {
                    response: Object.assign([], response)
                  }
                )
              })
              .catch (error => console.log("error fetch notification", error))
              }

        handleNotificationResponse = (deletedNotiId) => {
          this.setState(
            {
              response: this.state.response.filter((noti) => noti.id !== deletedNotiId)
            }
          )
        }

        render(){
          const PrivateRoute = ({ component: Component }) => (
            <Route
              render={props => (
                handleAuthentication(token).status ? <Component id={handleAuthentication(token).id} {...props} />
                  : <Redirect to="/login" />
              )}
            />
          );
                return(
                  <div className="AppRoutes">

                    <BrowserRouter>
                    <div>
                        {(window.location.pathname !== '/login' && window.location.pathname !== '/signup') && <Header handleNotificationResponse={this.handleNotificationResponse} response={this.state.response} />}
                        <div className={(window.location.pathname !== '/login' && window.location.pathname !== '/signup')  && "main"}>
                      <Switch>
                      <Route path="/chat"  component={Chat} />
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
                        <Route path="/signUp" render={props => (handleAuthentication(token).status ?
                        <Redirect to="/" />
                          : <Signup {...props} handleAuthentication={handleAuthentication} />)} />

                            <PrivateRoute path="/chat2" component={Conversation} />
                            <PrivateRoute path="/profile" component={Profile} />
                            <PrivateRoute path="/diaries" component={Diaries} />
                            <PrivateRoute path="/discussion" component={Discussion} />
                            <PrivateRoute path="/connection" component={Connection} />
                            <PrivateRoute path="/mybook" component={MyBook} />
                            {/* <PrivateRoute path="/chats" component={Chats} /> */}
                            <PrivateRoute path="/home" component={Home} />
                            <PrivateRoute component={Error} />
                      </Switch>
                          </div>
                        {(window.location.pathname !== '/login' && window.location.pathname !== '/signup') && <NavElements />}
                      </div>
                    </BrowserRouter>

                  </div>
    )
  }
}

export default AppRoutes;
