import React from 'react';
import './App.css';
import Users from './components/users/Users';
import Navbar from './components/partials/Navbar';
import UserItem from './components/users/UserItem';
import Followers from './components/users/Followers';
import Following from './components/users/Following';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-2">
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route path="/users/:login" component={UserItem} />
            <Route exact path="/" component={Users} />
            <Route path="/followers/:login" component={Followers} />
            <Route path="/following" component={Following} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;