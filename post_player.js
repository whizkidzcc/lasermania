var ws;
var players = {};

function initWebSocket() {
	ws = new WebSocket("ws://127.0.0.1:5678");
ws.onmessage = function(event) {
		var data = JSON.parse(event.data);
		var name = Object.keys(data)[0];
		var p;
		if (!(name in players)) {
			p = new Sprite(['person.png'], 'playing area', 'player');
			Game.addSprite(p);
			players[name] = p;
		}
		
		p = players[name];
		p.setPosition(data[name]['x'], data[name]['y']);
	};
}

}

function postData(name, x, y) {
	var data = {};
	data[name] = {'x': x, 'y': y};
	ws.send(JSON.stringify(data));
}