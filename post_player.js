/*
 * post_player.js
 *
 * Let the server know your state.
 */

var ws;
var players = {};

function initWebSocket() {
    ws = new WebSocket("ws://127.0.0.1:5678");
    ws.onmessage = function(event) {
        var data = JSON.parse(event.data);
        var name = Object.keys(data)[0];
        var p;
        if (!(name in players)) {
            p = new Sprite([data[name]['image']], 'playing-area', 'player');
            Game.addSprite(p);
            players[name] = p;
        }

        p = players[name];
        console.log(name + "," + data[name]['x']);
        p.setPosition(data[name]['x'], data[name]['y']);
    };
}

function postData(name, x, y) {
    var data = {};
    data[name] = {'x': x, 'y': y, 'image': localStorage.getItem('image')};
    ws.send(JSON.stringify(data));
}
