'use strict';
const express = require('express');

// Constants
const PORT = 8080;

// Controller declarations
let hello = require('./controllers/hello');

// App
const app = express();
app.use('/', hello);

// Start app listening on specified port
app.listen(PORT, () => console.log('Example app listening on port ' + PORT + '!'));
console.log('running');

module.exports = app;