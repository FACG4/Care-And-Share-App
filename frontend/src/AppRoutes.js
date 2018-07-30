/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Carers from './components/Carers/Carers';
import './style/style.css';


const AppRoutes = () => (

  <BrowserRouter>

    <Switch>
      <Route path="/" component={Carers} exact />
      <Route path="/login" component={Login} />
      <Route path="/carers" component={Carers} />
    </Switch>

  </BrowserRouter>
);


export default AppRoutes;
