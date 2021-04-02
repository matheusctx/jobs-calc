const express = require('express');
const server = express();
const routes = require('./routes');

server.set('view engine', 'ejs');

// enable statics files
server.use(express.static('public'));

// enable routes
server.use(routes);

server.listen(3333, () => console.log('Server started'));