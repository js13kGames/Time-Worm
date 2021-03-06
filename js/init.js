(function () {
	'use strict';

	// namespacing
	window.jw = {
		// commonly-used globals
		gameWidth: 800,
		gameHeight: 480
	};

	window.addEventListener('load', function () {
		var canvasElements = document.querySelectorAll('canvas');

		for (var i = 0; i < canvasElements.length; i++) {
			canvasElements[i].width = jw.gameWidth;
			canvasElements[i].height = jw.gameHeight;
		}

		jw.game.resetPoints();
		jw.game.resetRewinds();
	});
}());