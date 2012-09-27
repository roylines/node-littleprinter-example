var express = require('express'),
    handler = require('./handler.js'),
    littleprinter = require('littleprinter');

var app = express();
var port = process.env.PORT || 5000;

app.set('view engine', 'ejs'); // in this example I am using ejs, feel free to use a different view engine if you wish

littleprinter.setup(app, handler);

app.listen(port);
console.log('Server started on: http://localhost:' + port);
