import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Feed from './components/pages/Feed/Feed';
import Profile from './components/pages/Profile/Profile';
import Message from './components/pages/Message/Message';
import Notifications from './components/pages/Notification/Notification';
import Login from './components/pages/Login/Login';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/feed">
          <Feed />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/notification">
          <Notifications />
        </Route>
        <Route exact path="/message">
          <Message />
        </Route>
        <Route exact path="/message">
          <Message />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
