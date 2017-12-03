const http = require('http');

const app = require('./src/app');

const server = http.createServer(app);

server.listen(3000, () => console.log('Server running in port 3000'));
