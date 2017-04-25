var broker = require('./config/mqtt-config')();

function setup () {
	console.log('MQTT Broker is up and running');
}

broker.on('ready', setup);

broker.on('clientConnected', function(client) {
  console.log('client connected:', client.id);
});

broker.on('published', function (packet, client) {
	if (packet.topic.indexOf('clients') < 0) {
		var payload = bufferToString(packet.payload)
		console.log('Published:', payload);
	}
});

broker.on('subscribed', function (topic, client) {
  console.log('Subscribed:', topic);
});

broker.on('unsubscribed', function (topic, client) {
  console.log('Unsubscribed:', topic);
});

broker.on('clientDisconnecting', function (client) {
  console.log('client disconnecting:', client.id);
});

function bufferToString(array){
	var result = "";
	for(var i = 0; i < array.length; ++i){
		result += (String.fromCharCode(array[i]));
	}
	return result;
}