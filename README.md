# GeoIP Middleware

> Basic middleware for Node.js applications, featuring the [native implementation of GeoIP](https://github.com/bluesmoon/node-geoip).

### Installation
```sh
$ npm install native-geoip-middleware --save
```

It will also install the GeoIP-Lite library, which may take a *long time*.

### Usage
The example uses [Express](http://expressjs.com) as the example.
```javascript
var express = require('express'),
	app = express(),
	geoIP = require('native-geoip-middleware');

app.use(geoIP);

app.get('/', function(req, res) {
	res.status(200).send('Hello, user from ' + req.geo.city);
	// "Hello, user from San Francisco"
});
```

### `req.geo`
Basically, it looks exactly [like this](https://github.com/bluesmoon/node-geoip#synopsis).