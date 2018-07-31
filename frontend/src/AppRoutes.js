/* eslint-disable */

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './components/App';
import Login from './components/Login/Login';
import signUp from './components/singup/singup';
import Connection from './components/Connections/Connections'


const AppRoutes = () => (

  <BrowserRouter>
<Switch>
<Route path='/' component={App} exact={true} />
<Route path='/login' component={Login} />
<Route path='/signUp' component={signUp} />
<Route path='/MyFriends' component={Connection} />
</Switch>
  </BrowserRouter>
)


export default AppRoutes;
