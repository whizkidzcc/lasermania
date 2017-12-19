// Player in the lasermania game
document.addEventListener('DOMContentLoaded', function() {
	
	Game.init();
	
	var player = new Sprite(['person.png'], 'playing-area', 'player');
	Game.addSprite(player);
        
        var player2 = new Sprite(['person.bmp'], 'playing-area', 'player2');
	Game.addSprite(player2);
	
	player.addKeyBinding(Game.KEY_D, function() {player.changeX(5)});
	player.addKeyBinding(Game.KEY_A, function() {player.changeX(-5)});
	player.addKeyBinding(Game.KEY_W, function() {player.changeY(-5)});
	player.addKeyBinding(Game.KEY_S, function() {player.changeY(5)});
	player.setBoundary(0, 768, 0, 1366);
	Game.start();
        
        player2.addKeyBinding(Game.KEY_L, function() {player2.changeX(5)});
	player2.addKeyBinding(Game.KEY_J, function() {player2.changeX(-5)});
	player2.addKeyBinding(Game.KEY_I, function() {player2.changeY(-5)});
	player2.addKeyBinding(Game.KEY_K, function() {player2.changeY(5)});
	player2.setBoundary(0, 768, 0, 1366);
	Game.start();
        
        
});