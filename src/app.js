import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './client/App';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const context = {};

  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <App />
    </StaticRouter>,
  );

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>React SSR example</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `;

  res.write(html);
  res.end();
});

module.exports = app;
