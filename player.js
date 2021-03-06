// Player in the lasermania game
document.addEventListener('DOMContentLoaded', function() {
	
	Game.init();
	
	var player = new Sprite(['person.png'], 'playing-area', 'player');
	Game.addSprite(player);
	
	/*
	var superman = new Sprite(['person.png'], 'playing-area', 'superman');
	Game.addSprite(superman);
	*/

	
	player.addKeyBinding(Game.KEY_D, function() {moveyMovey(5, "x")});
	player.addKeyBinding(Game.KEY_A, function() {moveyMovey(-5, "x")});
	player.addKeyBinding(Game.KEY_W, function() {moveyMovey(-5, "y")});
	player.addKeyBinding(Game.KEY_S, function() {moveyMovey(5, "y")});
	
	function moveyMovey(changeBy, direction) {
		if (direction == "x") {
			player.changeX(changeBy);
		} else {
			player.changeY(changeBy);
		}
		postData(localStorage.getItem("username"), player.x, player.y);
	}
	player.setBoundary(0, 768, 0, 1366);
	initWebSocket();
	Game.start();
});