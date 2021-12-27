import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Feed from './components/pages/Feed/Feed';
import Profile from './components/pages/Profile/Profile';
import Message from './components/pages/Message/Message';
import Notifications from './components/pages/Notification/Notification';
import Navbar from './components/context/Navbar/Navbar';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
        <Route exact path="/logout">
          <Navbar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
