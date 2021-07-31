import React from 'react';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import App from './components/App';
import Food from './containers/Food';

const Routes = () => (
  <BrowserRouter>
    <Link to="/">Go to App</Link>
    <Link to="/food">Go to food</Link>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/food" component={Food} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
