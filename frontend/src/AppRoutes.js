import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './AppRoutes.css';
import './style/style.css';

import Login from './components/Login/Login';
import Carers from './components/Carers/Carers';
import Profile from './components/Profile/Profile';
import Diaries from './components/MyDiary/MyDiary';
import Discussion from './components/Discussions/Discussions';
import Connection from './components/Connections/Connections';
import MyBook from './components/MyCarePlan/MyCarePlan';

import Error from "./components/Error";

import NavElements from './components/Navbar/NavElement'


const AppRoutes = () => (
  <div className="AppRoutes">
  <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Carers} exact />
              <Route path="/login" component={Login} />
              <Route path="/carers" component={Carers} />
              <Route path="/profile" component={Profile} />
              <Route path="/diaries" component={Diaries} />
              <Route path="/discussion" component={Discussion} />
              <Route path="/connection" component={Connection} />
              <Route path="/mybook" component={MyBook} />
              <Route component={Error} />
            </Switch>
            <NavElements />
          </div>
        </BrowserRouter>
        </div>
);

export default AppRoutes;
