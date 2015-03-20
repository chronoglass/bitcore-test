var express = require('express');
var app = express();
var main = require('./routes/main');

app.use('/', main);

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening at http://%s:%s', host, port);
});
