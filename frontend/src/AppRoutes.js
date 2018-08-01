/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import signUp from './components/singup/singup';
import Carers from './components/Carers/Carers';
import './style/style.css';


const AppRoutes = () => (

  <BrowserRouter>


    <Switch>
      <Route path="/" component={Carers} exact />
      <Route path="/login" component={Login} />
      <Route path="/carers" component={Carers} />
      <Route path="/signUp" component={signUp} />
    </Switch>

  </BrowserRouter>
);


export default AppRoutes;
