import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
    </Switch>
  );
};

export default App;
