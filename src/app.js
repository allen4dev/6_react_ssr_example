import express from 'express';
import { matchRoutes } from 'react-router-config';

import Routes from './client/Routes';

import renderer from './helpers/renderer';
import configStore from './helpers/configStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const context = {};
  const promises = matchRoutes(Routes, req.path);
  console.log(promises);

  const store = configStore();
  const html = renderer(req, store, context);

  res.send(html);
});

module.exports = app;
