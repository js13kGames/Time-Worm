(function () {
	'use strict';

	jw.sounds = {
		play: function play(type) {
			var audio = new Audio(type + '.mp3');
			audio.play();
		}
	}
}());