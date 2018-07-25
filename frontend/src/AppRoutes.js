import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './components/App';
import Login from './components/Login/Login';


const AppRoutes = () => (

  <BrowserRouter>
<Switch>
<Route path='/' component={App} exact={true} />
<Route path='/login' component={Login} />
</Switch>
  </BrowserRouter>
)


export default AppRoutes;
