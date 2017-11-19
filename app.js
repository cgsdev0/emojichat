'use strict';
const express = require('express');

// Controller declarations
let index = require('./controllers/index');
let hello = require('./controllers/hello');
let login = require('./controllers/login');
let chats = require('./controllers/chats');
let commandline = require('./helpers/commandline');

// Constants
let PORT = 8080;



// App
const app = express();
app.use('/', index);
app.use('/hello', hello);
app.use('/login', login);
app.use('/chat', chats);

// Process command-line arguments
let args = commandline.handleArgv(process.argv);
if (args.port !== null ) {
    PORT = args.port;
}

// Start app listening on specified port
app.listen(PORT, () => console.log('Example app listening on port ' + PORT + '!'));
console.log('running');

module.exports = app;