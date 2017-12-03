const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.sendFile(`${__dirname}/index.html`);
});

module.exports = app;
