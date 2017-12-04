import express from 'express';
import { matchRoutes } from 'react-router-config';

import Routes from './client/Routes';

import renderer from './helpers/renderer';
import configStore from './helpers/configStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const store = configStore();

  const branch = matchRoutes(Routes, req.path);

  const promises = branch
    .map(({ route }) => {
      if (!route.loadData) return null;
      return route.loadData(store);
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(results => {
    const context = {};
    const html = renderer(req, store, context);
    res.send(html);
  });
});

module.exports = app;
