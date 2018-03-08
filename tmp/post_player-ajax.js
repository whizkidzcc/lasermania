/*
 * post_player.js
 *
 * Let the server know your state.
 */

function postPlayer(name, x, y) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       if (this.readyState == XMLHttpRequest.DONE && this.status === 200) {

       document.querySelector('#message').innerHTML = this.responseText;
   }
    };

    xhttp.open('POST', 'post.py');
    xhttp.setRequestHeader('Content-Type', 'text/plain');

    data = [];
    data[name] = { 'x': x, 'y': y };
    xhttp.send(data);
}
