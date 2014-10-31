// middleware
var geoip = require('geoip-lite');

module.exports = function(req, res, next) {
	req.geo = geoip.lookup(req.ip);

	// throw error
	if (!req.geo)
		return next('Could not read GeoIP data for IP: ' + req.ip);

	next();
};