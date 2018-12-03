import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import ChatRoom from './pages/ChatRoom';

export default () => (
  <Router>
    <Route path="/login" Component={Login} />
    <Route path="/chatroom" Component={ChatRoom} />
  </Router>
)
