var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function () {
  client.publish('garagem122/test', '122');
  client.end();
});
