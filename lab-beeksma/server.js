'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const Router = require('.lib/router');
const router = new Router();

const server = http.createServer(router.route());

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
