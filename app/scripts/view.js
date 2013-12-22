'use strict';
var T9WORD = T9WORD || {}; // namespace component 

T9WORD.view = (function(){
	var button = document.getElementsByTagName('button')[0],
	inputField = document.getElementById('numbers'),
	outputField = document.getElementById('output');
	button.onclick = function(){outputField.value = T9WORD.controller(inputField.value);};
	inputField.focus();
	window.onkeypress = function(event) {
		if (event.which === 13) {
			event.preventDefault();
			outputField.value = T9WORD.controller(inputField.value);
		}
	};
})();