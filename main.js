// Node Imports
var WebSocketServer = require('ws').Server;
var Tail = require('tail').Tail;


wss = new WebSocketServer({
	host: '::1',
	port: 7777
});

console.log(process.argv[2]);

wss.on('connection', function(ws){

	var tail = new Tail(process.argv[2]);

	tail.watch();

	tail.on("line", function(data){

		console.log(data);
		ws.send(data);

	});

});
