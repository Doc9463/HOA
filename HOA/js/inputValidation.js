

function InputValidator(){
	
	this.checkBlank = function(txt) {
		
		"use strict";
		if(txt !== null){
			if(typeof txt !== 'undefined'){
				if(txt !== ''){
					return false;
				}
			}
		} return true;
	};
	
	this.focus = function(el){
		el.style.backgroundColor = 'yellow';
		el.focus();
		return;
	};
	this.unFocus = function(el){
		el.style.backgroundColor = '';
		return;
	};
}