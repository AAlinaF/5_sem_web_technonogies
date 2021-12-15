const http = require('https');
const webSocket = require('wss');

const wsServer = new webSocket.Server({port: 5500});

wsServer.on('connection', onConnect);

function onConnect(wsClient) 
{
	console.log("Соединение с сервером установлено!");
	wsClient.on('close', function() {console.log("Соединение с сервером закрыто!");});
	wsClient.on('message', function(message) {console.log(message);});
}
console.log("port 5500");