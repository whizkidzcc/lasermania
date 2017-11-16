var Game;

document.addEventListener('DOMContentLoaded', function() {
	'use strict'
	
	function consoleMessage(type, message) {
		var prefix = "";
		if (type == "info") {
			prefix = "[GAME ENGINE] (MESSAGE) ";
		} else if (type == "alert") {
			prefix = "[GAME ENGINE] (!) ";
		} else {
			prefix = "[GAME ENGINE] ";
		}
		console.log(prefix + message);
	}
	Game = {
		//---Epic KeyC COdes----
		// Normal gaming keys
		KEY_LEFT: 37,
		KEY_UP: 38,
		KEY_RIGHT: 39,
		KEY_DOWN: 40,
		KEY_SPACE: 32,
		KEY_SHIFT: 16,
		KEY_CONTROL: 17,
		KEY_RETURN: 13,
		// Letters
		KEY_A: 65,
		KEY_B: 66,
		KEY_C: 67,
		KEY_D: 68,
		KEY_E: 69,
		KEY_F: 70,
		KEY_G: 71,
		KEY_H: 72,
		KEY_I: 73,
		KEY_J: 74,
		KEY_K: 75,
		KEY_L: 76,
		KEY_M: 77,
		KEY_N: 78,
		KEY_O: 79,
		KEY_P: 80,
		KEY_Q: 81,
		KEY_R: 82,
		KEY_S: 83,
		KEY_T: 84,
		KEY_U: 85,
		KEY_V: 86,
		KEY_W: 87,
		KEY_X: 88,
		KEY_Y: 89,
		KEY_Z: 90,
		// Numbers!
		KEY_0: 48,
		KEY_1: 49,
		KEY_2: 50,
		KEY_3: 51,
		KEY_4: 52,
		KEY_5: 53,
		KEY_6: 54,
		KEY_7: 55,
		KEY_8: 56,
		KEY_9: 57,
		// Weird keys
		KEY_WINDOWS: 91,
		KEY_LEFTCMD: 91,
		KEY_SEARCH: 91,
		KEY_MENU: 93,
		KEY_RIGHTCMD: 93,
		KEY_DELETE: 46,
		KEY_BACKSPACE: 8,
		KEY_GRAVE: 192,
		// Function keys
		KEY_F1: 112,
		KEY_F2: 113,
		KEY_F3: 114,
		KEY_F4: 115,
		KEY_F5: 116,
		KEY_F6: 117,
		KEY_F7: 118,
		KEY_F8: 119,
		KEY_F9: 120,
		KEY_F10: 121,
		KEY_F11: 122,
		KEY_F12: 123,
		keyStatus: [],
		sprites: [],
		
		init: function() {
			consoleMessage("BOb", "Game initialized.");
			document.addEventListener('keydown', Game.handleKeyDown);
			document.addEventListener('keyup', Game.handleKeyUp);
		},
		
		start: function() {
			consoleMessage("info", "Game started.");
			setInterval(Game.loop, 17)
			//consoleMessage("alert", "Game loop not working.");
		},
		
		handleKeyDown: function(event) {
			console.log("Key Down is " + event.keyCode);
			Game.keyStatus[event.keyCode] = true;
		},
		
		handleKeyUp: function(event) {
			console.log("Key Up is " + event.keyCode);
			Game.keyStatus[event.keyCode] = undefined;
		},
		
		addSprite: function(sprite) {
			Game.sprites.push(sprite);
		},
		
		getMouseLocationX: function() {
			return event.clientX;
		},
		
		getMouseLocationY: function() {
			return event.clientY;
		},
		
		loop: function() {
			consoleMessage("info", "Game loop working");
			for (var i = 0; i < Game.sprites.length; i++) {
				Game.sprites[i].update();
			}
		}
	};
});