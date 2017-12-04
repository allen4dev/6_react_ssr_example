import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = props => {
  return <div className="App">{renderRoutes(props.route.routes)}</div>;
};

export default {
  component: App,
};
