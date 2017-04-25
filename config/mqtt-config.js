var mosca = require('mosca');

module.exports = setup;

function setup () {
	var settings = { port: 1883 };
	var server = new mosca.Server(settings);

	return server;
}