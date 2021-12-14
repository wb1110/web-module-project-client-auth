import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../src/components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className="App">
      <nav className="Nav">
        <h2>FRIENDS DATABASE</h2>
        <div>
          <button>LOGIN.</button>
          <button>FRIENDLIST.</button>
          <button>ADDFRIEND.</button>
          <button>LOGOUT</button>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/friendslist">
          <FriendsList />
        </Route>
        <Route exact path="/friendslist/AddFriend">
          <AddFriend />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
