

function Tools(tool1, tool2, tool3){
	"use strict";
	this.tool1 = tool1;
	this.tool2 = tool2;
	this.tool3 = tool3;
	
	this.toolA = function(toolString){
		
		setTimeout( function (){
	
			document.getElementById('dataReturned').innerHTML = toolString;
		
		},3000);
	
	};
	
	var promise = new Promise( function(resolve, reject){
		
				setTimeout( () => resolve("hello"),5000);
					
	});
	
	this.promiseMe = promise;
}

function testTools(toolVariable){
	"use strict";
	console.log(toolVariable.tool1);

	console.log(toolVariable.tool2);

	console.log("first run " + toolVariable.tool3);
	
}

var tool = new Tools("How are you?");
var p = tool.promiseMe;

p.then (
	function(data){
		tool.tool3 = data;
		console.log(tool.tool3);
	}
);
testTools(tool);
tool.toolA(tool.tool1);
