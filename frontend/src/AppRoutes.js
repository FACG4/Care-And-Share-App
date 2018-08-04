/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Carers from './components/Carers/Carers';
import signUp from './components/singup/singup';
import Connection from './components/Connections/Connections';
import './style/style.css';


const AppRoutes = () => (

  <BrowserRouter>

    <Switch>
      <Route path="/" component={Carers} exact />
      <Route path="/login" component={Login} />
      <Route path="/carers" component={Carers} />
      <Route path="/signUp" component={signUp} />
      <Route path="/MyFriends" component={Connection} />
    </Switch>

  </BrowserRouter>
);


export default AppRoutes;
