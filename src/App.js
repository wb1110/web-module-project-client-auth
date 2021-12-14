import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../src/components/Login';
import FriendsList from './components/FriendsList';

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
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
