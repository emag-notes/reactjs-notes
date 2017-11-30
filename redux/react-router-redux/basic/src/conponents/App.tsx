import * as React from 'react';
// import ConnectedSwitch from '../containers/ConnectedSwitch';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

const App = () => (
  <Switch>
    <Route
      exact={true}
      path="/"
      component={() => (
        <h1>Home <Link to="/about">About</Link></h1>
      )}
    />
    <Route
      path="/about"
      component={() => (
        <h1>About <Link to="/">Home</Link></h1>
      )}
    />
  </Switch>
);

export default App;
