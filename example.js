var express = require('express'),
	app = express(),
	geo = require('./src/middleware'); // this would be require('native-geoip-middleware')

app.use(geo);

app.get('/', function(req, res) {
	res.status(200).send('Hello, user from ' + req.geo.city);
	// "Hello, user from San Francisco"
});

app.listen(8080);