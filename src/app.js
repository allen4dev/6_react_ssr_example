import express from 'express';

import renderer from './helpers/renderer';
import configStore from './helpers/configStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const context = {};

  const store = configStore();
  const html = renderer(req, store, context);

  res.send(html);
});

module.exports = app;
