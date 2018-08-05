import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './style/style.css';
import './AppRoutes.css';

import Login from './components/Login/Login';
import signUp from './components/singup/singup';
import Header from './components/Header';
import Chats from './components/Chats/Chats';
import Carers from './components/Carers/Carers';
import Profile from './components/Profile';
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
          <Header connectReq={['adsfa','sdfg']}/>
            <Switch>
              <Route path="/" component={Carers} exact />
              <Route path="/login" component={Login} />
              <Route path="/carers" component={Carers} />
              <Route path="/profile" component={Profile} />
              <Route path="/diaries" component={Diaries} />
              <Route path="/discussion" component={Discussion} />
              <Route path="/connection" component={Connection} />
              <Route path="/mybook" component={MyBook} />
              <Route path="/chats" component={Chats} />
              <Route path="/signUp" component={signUp} />
              <Route path="/MyFriends" component={Connection} />
              <Route component={Error} />
            </Switch>
            <NavElements />
          </div>
        </BrowserRouter>
        </div>
);

export default AppRoutes;
