import React from 'react';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Users from './components/Users';
import Comments from './components/Comments';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/' exact component={Posts} />
          <Route path='/posts' exact component={Posts} />
          <Route path='/posts/:id/comments' component={Comments} />
          <Route path='/users' component={Users} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
