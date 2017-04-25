var mqtt = require('mqtt');

client = mqtt.connect('mqtt://localhost:1883');
client.publish('garagem122/test', '122');
client.end();
