import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Tracks from './pages/Tracks';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tracks" component={Tracks} />
    </Switch>
  );
};

export default App;
