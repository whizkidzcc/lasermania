/**
* Creates a thing like yeah like dodeoeoajeipijpoeijpofijoi idk like a sprite. DUH!
*
* @param {Array} images Array of Images xD
* @param {String} parentObj The html object
* @param {String} type NAME OF SPRITE DUH
* @returns {undefined} Nununununnununoooooo
*/

function Sprite(images, parentObj, type) {
	this.parentObj = parentObj;
	this.type = type;
	this.images = [];
	this.addImages(images);
	this.x = 0;
	this.y = 0;
	this.activeImage = 0;
	this.degrees = 0;
	this.degreesY = 0;
	this.deltaX = 0;
	this.deltaY = 0;
	this.autoMoveX = 0;
	this.autoMoveY = 0;
	this.keyBindings = []; //Keys and lis tr of your FACE_?!?!
	this.boundary = {
		top: undefined,
		bottom: undefined,
		left: undefined,
		right: undefined
	};
	//this.speed = 1;
	
}

Sprite.prototype.addImages = function(imageNames) {
	for (var i = 0; i < imageNames.length; i++) {
		var img = new Image();
		img.src = imageNames[i];
		img.style.position = 'absolute';
		document.getElementById(this.parentObj).appendChild(img);
		this.images.push(img);
	}
};


Sprite.prototype.getActiveImage = function() {
	return this.images[this.activeImage];
};

Sprite.prototype.setPosition = function(x, y) {
	this.x = x;
	this.y = y;
	
	var img = this.getActiveImage();
	img.style.left = x + "px";
	img.style.top = y + "px";
};

Sprite.prototype.rotate = function(degrees) {
	this.degrees = degrees;
	
	var img = this.getActiveImage();
	img.style.transform = "rotate(" + degrees + "deg)";
};

Sprite.prototype.flip = function(degreesY) {
	this.degreesY = degreesY;
	var img = this.getActiveImage();
	img.style.transform = "rotateY(" + degreesY + "deg)";
}

Sprite.prototype.changeX = function(deltaX) {
	this.x += deltaX;
	if (this.x < this.boundary.left) {
		this.x = this.boundary.left;
	} else if (this.x > this.boundary.right) {
		this.x = this.boundary.right;
	}
	this.getActiveImage().style.left = this.x + "px";
};

Sprite.prototype.changeY = function(deltaY) {
	this.y += deltaY;
	if (this.y < this.boundary.top) {
		this.y = this.boundary.top;
	} else if (this.y > this.boundary.bottom) {
		this.y = this.boundary.bottom;
	}
	this.getActiveImage().style.top = this.y + "px";
};

Sprite.prototype.addKeyBinding = function(key, func) {
	this.keyBindings.push({
		key: key,
		cbFunction: func
	});
};

Sprite.prototype.autoMove = function(x, y) {
	this.autoMoveX = x;
	this.autoMoveY = y;
	//How to hack a comptuer how to hakc a hakc hakc a hack a day a ocmpuefdf
};
	
Sprite.prototype.setBoundary = function(top, bottom, left, right) {
	this.boundary.top = top;
	this.boundary.bottom = bottom - this.getActiveImage().height;
	this.boundary.left = left;
	this.boundary.right = right - this.getActiveImage().width;
};	

Sprite.prototype.update = function() {
	var kb;
	var keys = Game.keyStatus;
	
	for (var i = 0; i < this.keyBindings.length; i++) {
		kb = this.keyBindings[i];
		if (keys[kb.key]) {
			kb.cbFunction(this);
		}
	}
	if (this.autoMoveX !== 0 || this.autoMoveY !== 0) {
		this.changeX(this.autoMoveX);
		this.changeY(this.autoMoveY);
	}
};