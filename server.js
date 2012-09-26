var express = require('express'),
    handler = require('./handler.js'),
    littleprinter = require('littleprinter');

var app = express();
app.set('view engine', 'ejs'); // in this example I am using ejs, feel free to use a different view engine if you wish

littleprinter.setup(app, handler);

console.log('Server started on: http://localhost:3000');
app.listen(3000);