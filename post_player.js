var ws;

function initWebSocket() {
        ws = new Websocket ("ws://127.0.0.1:5678/");
        ws.onmessage = function(event) {
                console.log(event.data);
        };
}
function postplayer(name) {
var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
         	if (this.readyState == XMLHttpRequest.DONE && this.status === 200) {
        	alert(this.responseText);

        	document.querySelector('#message').innerHTML = this.responseText
        }
         };

         xhttp.open('POST', 'post.py');
         xhttp.setRequestHeader('Content-Type', 'text/plain');

         data = [];
         data [name] = { 'x': x, 'y': y }
         xhttp.send(JSON.stringify(data));
         consolelog(JSON.stringify(data));
}

function postData(ws, name, x, y) {
        var data = {};
        data[name] = {"x": x "y": y};
        ws.send(JSON.stringify(data));
}