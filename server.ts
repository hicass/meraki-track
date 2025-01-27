const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

app.prepare().then(() => {
  // Express.js routes and middleware go here

  server.listen(8000, (err?: Error) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:8000');

  });
});
