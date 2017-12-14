// Player in the lasermania game
document.addEventListener('DOMContentLoaded', function() {
	
	Game.init();
	
	var player = new Sprite(['alien.png'], 'playing-area', 'player');
	Game.addSprite(player);
	
	player.addKeyBinding(Game.KEY_D, function() {player.changeX(5)});
	player.addKeyBinding(Game.KEY_A, function() {player.changeX(-5)});
	player.addKeyBinding(Game.KEY_W, function() {player.changeY(-5)});
	player.addKeyBinding(Game.KEY_S, function() {player.changeY(5)});
	player.setBoundary(0, 768, 0, 1366);
	Game.start();
});