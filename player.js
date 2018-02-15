// Player in the lasermania game
document.addEventListener('DOMContentLoaded', function() {
	
	Game.init();
	
	var player = new Sprite(['person.png'], 'playing-area', 'player');
	Game.addSprite(player);
        
        var player2 = new Sprite(['person2.png'], 'playing-area', 'player2');
	Game.addSprite(player2);
	
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
		postPlayer('RandomGuy', player.x, player.y);
	}
	player.setBoundary(0, 768, 0, 1366);
	Game.start();
        
        player2.addKeyBinding(Game.KEY_L, function() {player2.changeX(5)});
	player2.addKeyBinding(Game.KEY_J, function() {player2.changeX(-5)});
	player2.addKeyBinding(Game.KEY_I, function() {player2.changeY(-5)});
	player2.addKeyBinding(Game.KEY_K, function() {player2.changeY(5)});
	player2.setBoundary(0, 768, 0, 1366);
	Game.start();
        
        
});