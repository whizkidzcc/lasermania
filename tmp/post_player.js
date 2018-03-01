var ws;

function initWebSocket() {
    ws = new WebSocket("ws://127.0.0.1:5678/");
    ws.onmessage = function(event) {
        console.log(event.data);
    };
}

// deprecated (not used)
function postPlayer(name, x, y) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status === 200) {
                document.querySelector('#message').innerHTML = this.responseText;
        }
    };

    xhttp.open('POST', 'post.py');
    xhttp.setRequestHeader('Content-Type', 'text/plain');

    data = {};
    data[name] = {"x": x, "y": y};
    xhttp.send(JSON.stringify(data));
    console.log(JSON.stringify(data));
}

function postData(name, x, y) {
    var data = {};
    data[name] = {"x": x, "y": y};
    ws.send(JSON.stringify(data));
}
