// JavaScript Document

//************************************************

//***** get requested JSON and return JS obj *****

//************************************************



//move to html/aspx/primaryJS

//var myObj = getObjFromJSON(getJSONObj("http://www.bootcamp.navy.mil/assets/json/primarymenu.json?nocache=123"));  




function getJSONObj(location){

	"use strict";

	var xhttp = "";

	if(window.XMLHttpRequest){

		xhttp = new XMLHttpRequest();

	}else{

		xhttp = new ActiveXObject('Microsoft.XMLHTTP');

	}



	xhttp.open("GET", location, true);

	xhttp.send();

	return xhttp;

}



function getObjFromJSON(xhttp, page){

	"use strict";

	try{

		xhttp.onreadystatechange = function() {

			if (this.readyState === 4 && this.status === 200) {

				//console.log(this.responseText);  //comment out for final

				if(JSON.parse(this.responseText)){

					var obj;

					obj = JSON.parse(this.responseText);

					//console.log(obj);  //comment out for final
						
					runCode(obj, page);
					
				}

			}

	  	};

	}catch(err){

		console.log(err);

	}

}


function runCode(obj, page){
	"use strict";
	switch (page){
		case "index.html":
			break;
		case "bb.html":
			bbList.setObj(obj);
			bbList.buildList();
			break;
		default:
	}
	
	
	
	
}