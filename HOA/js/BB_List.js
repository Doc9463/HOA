function BB_List(){
	"use strict";
	this.bbList;
	this.phpFile = "saveJSON2.php";
	
	this.setObj = function(obj){
					this.bbList = obj;
					};
	
	this.buildList = function (){
						var i = 0;
						var bbMain = document.getElementById('bbMain');
						bbMain.innerHTML = "";//clears the list
						//this.bbList.sort();
						for( i; i < this.bbList.length; i++){

							if(this.bbList[i].item.approved || user.level == 1){

								var d = document.createElement('div');
								bbMain.appendChild(d);
								d.classList.add('itemBox');

								var itemDate = document.createElement('h1');
								d.appendChild(itemDate);

								var itemHeading = document.createElement('h2');
								d.appendChild(itemHeading);

								var itemSubHeading = document.createElement('h3');
								d.appendChild(itemSubHeading);

								var itemContent = document.createElement('p');
								d.appendChild(itemContent);

								var itemNotes = document.createElement('p');
								d.appendChild(itemNotes);

								var br = document.createElement('br');
								d.appendChild(br);
								
								if(!this.bbList[i].item.approved && typeof user !== 'undefined'){
							
									if(user.level === 1){
										var btn = document.createElement('input');
										btn.type = 'button';
										btn.value = 'approve';
										btn.setAttribute('onclick','bbList.approveEntry('+ this.bbList[i].itemNumber +')');
										d.appendChild(btn);
									}
									
								}
								if(typeof user !== 'undefined'){
									
									if(user.level === 1){
										var btn2 = document.createElement('input');
										btn2.type = 'button';
										btn2.value = 'remove';
										btn2.setAttribute('onclick', 'bbList.removeEntry('+ this.bbList[i].itemNumber + ')');
										d.appendChild(btn2);
										
										var btn3 = document.createElement('input');
										btn3.type = 'button';
										btn3.value = 'edit';
										btn3.setAttribute('onclick', 'bbList.editEntry('+ this.bbList[i].itemNumber + ')');
										d.appendChild(btn3);
									}
								}
								itemDate.innerHTML = "Posted: " + this.bbList[i].date;
								itemHeading.innerHTML = this.bbList[i].item.title;
								itemSubHeading.innerHTML = this.bbList[i].item.subTitle;
								itemContent.innerHTML = this.bbList[i].item.content;
								itemNotes.innerHTML = this.bbList[i].item.notes;	

							}
						}
					};
	this.editEntry = function (i){
							var addDiv = document.createElement('div');
							disclaimer.disclaimerContent.appendChild(addDiv);
							addDiv.style.textAlign = 'left';
							
							//Post Date
							var lblDate = document.createElement('label');
							lblDate.setAttribute('for','inputDate');
							lblDate.innerHTML = 'Post Date: ';
							
							var dte = document.createElement('input');
							lblDate.appendChild(dte);
							dte.type = 'date';
							dte.id = 'inputDate';
							dte.value = this.bbList[i].date;
		
							addDiv.appendChild(lblDate);
							
							//Title
							var lblTitle = document.createElement('label');
							lblTitle.setAttribute('for','inputTitle');
							lblTitle.innerHTML = 'Title: ';
							lblTitle.style.display = 'block';
		
							var title = document.createElement('input');
							lblTitle.appendChild(title);
							title.type = 'text';
							title.id = 'inputTitle';
							title.onkeypress = testFunction;
							title.style.width = '99%';
							title.value = this.bbList[i].item.title;
							
							addDiv.appendChild(lblTitle);
							
		
							//Sub-Title
							var lblSubTitle = document.createElement('label');
							lblSubTitle.setAttribute('for','inputSubTitle');
							lblSubTitle.innerHTML = 'Sub-Title: ';
							lblSubTitle.style.display = 'block';
							
							var subtitle = document.createElement('input');
							lblSubTitle.appendChild(subtitle);
							subtitle.type = 'text';
							subtitle.id = 'inputSubTitle';
							subtitle.onkeypress = testFunction;
							subtitle.style.width = '99%';
							subtitle.value = this.bbList[i].item.subTitle;
		
							addDiv.appendChild(lblSubTitle);
		
							//Content
							var lblContent = document.createElement('label');
							lblContent.setAttribute('for','inputContent');
							lblContent.innerHTML = 'Content: ';
							lblContent.style.display = 'block';
		
							var content = document.createElement('textarea');
							lblContent.appendChild(content);
							//content.type = 'text';
							content.id = 'inputContent';
							content.onkeypress = testFunction;
							content.style.width = '99%';
							content.rows = 4;
							content.value = this.bbList[i].item.content;
		
							addDiv.appendChild(lblContent);
		
							//Notes
							var lblNotes = document.createElement('label');
							lblNotes.setAttribute('for','inputNotes');
							lblNotes.innerHTML = 'Notes: ';
							lblNotes.style.display = 'block';
										
							var notes = document.createElement('textarea');
							lblNotes.appendChild(notes);
							//notes.type = 'text';
							notes.id = 'inputNotes';
							notes.onkeypress = testFunction;
							notes.style.width = '99%';
							notes.rows = 4;
							notes.value = this.bbList[i].item.notes;
							
							addDiv.appendChild(lblNotes);
									
							var b1 = document.createElement('button');
							addDiv.appendChild(b1);
							b1.id = 'disclaimerContinue';
							b1.setAttribute('onclick','bbList.updateItem(' + i + ');');
							b1.innerHTML = 'Submit';
							
							var b2 = document.createElement('button');
							addDiv.appendChild(b2);
							b2.id = 'disclaimerCancel';
							b2.setAttribute('onclick','disclaimer.disclaimerCancel();');
							b2.innerHTML = 'Cancel';
		
							//display Modal
							document.getElementById('disclaimerModal').style.display = 'block';
						};
	this.updateItem = function (i){
						var newItem = {};
						//needs validation
						var dte = document.getElementById('inputDate');
						var title = document.getElementById('inputTitle');
						if(validator.checkBlank(title.value)){validator.focus(title); return;}else{validator.unFocus(title);}
						var subTitle = document.getElementById('inputSubTitle');
						if(validator.checkBlank(subTitle.value)){validator.focus(subTitle); return;}else{validator.unFocus(subTitle);}
						var content = document.getElementById('inputContent');
						if(validator.checkBlank(content.value)){validator.focus(content); return;}else{validator.unFocus(content);}
						var notes = document.getElementById('inputNotes');
						if(validator.checkBlank(notes.value)){validator.focus(notes); return;}else{validator.unFocus(notes);}
						
						newItem.itemNumber = this.bbList[i].itemNumber;
						newItem.date = dte.value;
						newItem.item = {
										"title" 	: 	title.value,
										"subTitle"	:	subTitle.value,
										"content"	:	content.value,
										"notes"		:	notes.value,
										"approved"	:	true
										};
							
						this.bbList[i] = newItem;
						disclaimer.disclaimerCancel();
						this.buildList();
						this.saveList("Update Success!");
					};
	this.removeEntry = function(itemNumber){
			for(var i = 0; i < this.bbList.length; i++){
				if(this.bbList[i].itemNumber === itemNumber){
					//alert("itemNUmber " + (Number(itemNumber) + 1) + " removed!");
					this.bbList.pop();
					break;
				}
				
			}
			this.buildList();
		this.saveList('Updated!');
	};
	this.approveEntry = function (entry){
			//console.log(entry);
			if(!this.bbList[entry].item.approved){
				this.bbList[entry].item.approved = true;
			}
			this.buildList();
			this.saveList("Updated!");
	};
	this.addItem = function (){
						var newItem = {};
						//needs validation
						var dte = document.getElementById('inputDate');
						var title = document.getElementById('inputTitle');
						if(validator.checkBlank(title.value)){validator.focus(title); return;}else{validator.unFocus(title);}
						var subTitle = document.getElementById('inputSubTitle');
						if(validator.checkBlank(subTitle.value)){validator.focus(subTitle); return;}else{validator.unFocus(subTitle);}
						var content = document.getElementById('inputContent');
						if(validator.checkBlank(content.value)){validator.focus(content); return;}else{validator.unFocus(content);}
						var notes = document.getElementById('inputNotes');
						if(validator.checkBlank(notes.value)){validator.focus(notes); return;}else{validator.unFocus(notes);}
						
						newItem.itemNumber = this.bbList.length;
						newItem.date = dte.value;
						newItem.item = {
										"title" 	: 	title.value,
										"subTitle"	:	subTitle.value,
										"content"	:	content.value,
										"notes"		:	notes.value,
										"approved"	:	false
										};
							
						this.bbList.push(newItem);
						disclaimer.disclaimerCancel();
						this.buildList();
						this.saveList("Submission Success!  We will review your submission for content and post accordingly.");
					};
	this.getItem = function (){
							var addDiv = document.createElement('div');
							disclaimer.disclaimerContent.appendChild(addDiv);
							addDiv.style.textAlign = 'left';
							
							//Post Date
							var lblDate = document.createElement('label');
							lblDate.setAttribute('for','inputDate');
							lblDate.innerHTML = 'Post Date: ';
							
							var dte = document.createElement('input');
							lblDate.appendChild(dte);
							dte.type = 'date';
							dte.id = 'inputDate';
		
							addDiv.appendChild(lblDate);
		
							//Title
							var lblTitle = document.createElement('label');
							lblTitle.setAttribute('for','inputTitle');
							lblTitle.innerHTML = 'Title: ';
							lblTitle.style.display = 'block';
							
							var title = document.createElement('input');
							lblTitle.appendChild(title);
							title.type = 'text';
							title.id = 'inputTitle';
							title.onkeypress = testFunction;
							title.style.width = '99%';
		
							addDiv.appendChild(lblTitle);
							
		
							//Sub-Title
							var lblSubTitle = document.createElement('label');
							lblSubTitle.setAttribute('for','inputSubTitle');
							lblSubTitle.innerHTML = 'Sub-Title: ';
							lblSubTitle.style.display = 'block';
							
							var subtitle = document.createElement('input');
							lblSubTitle.appendChild(subtitle);
							subtitle.type = 'text';
							subtitle.id = 'inputSubTitle';
							subtitle.style.width = '99%';
							subtitle.onkeypress = testFunction;
		
							addDiv.appendChild(lblSubTitle);
		
							//Content
							var lblContent = document.createElement('label');
							lblContent.setAttribute('for','inputContent');
							lblContent.innerHTML = 'Content: ';
							lblContent.style.display = 'block';
							
							var content = document.createElement('textarea');
							lblContent.appendChild(content);
							content.rows = 4;
							content.id = 'inputContent';
							content.onkeypress = testFunction;
							content.style.width = '99%';
		
							addDiv.appendChild(lblContent);
		
							//Notes
							var lblNotes = document.createElement('label');
							lblNotes.setAttribute('for','inputNotes');
							lblNotes.innerHTML = 'Notes: ';
							lblNotes.style.display = 'block';
							
							var notes = document.createElement('textarea');
							lblNotes.appendChild(notes);
							notes.rows = 4;
							notes.id = 'inputNotes';
							notes.onkeypress = testFunction;
							notes.style.width = '99%';
		
							addDiv.appendChild(lblNotes);
									
							var b1 = document.createElement('button');
							addDiv.appendChild(b1);
							b1.id = 'disclaimerContinue';
							b1.setAttribute('onclick','bbList.addItem();');
							b1.innerHTML = 'Submit';
							
							var b2 = document.createElement('button');
							addDiv.appendChild(b2);
							b2.id = 'disclaimerCancel';
							b2.setAttribute('onclick','disclaimer.disclaimerCancel();');
							b2.innerHTML = 'Cancel';
		
							//display Modal
							document.getElementById('disclaimerModal').style.display = 'block';
						};
	this.saveList = function(disclaimerText){
							var jsonData = convertToJSON(this.bbList);
							if(jsonData !== null){
								var request = new XMLHttpRequest();
								var URL2 = "php/" + this.phpFile;
								request.open("POST", URL2, true); //GET
								request.setRequestHeader("Content-type", "application/json");
								request.send(jsonData);

								request.onreadystatechange = function() {
									console.log(this.status);
									if (this.readyState === 4 && this.status === 200) {
										disclaimer.showDISCLAIMER("#",disclaimerText, false);
									}else if(this.readyState === 4 && this.status >= 400){
										disclaimer.showDISCLAIMER("Failure! \n Error: " + this.status);
									}
								};
							}
						};
	
}
    

function convertToJSON(obj){
	"use strict";
	if(typeof(obj) === 'object'){
		return JSON.stringify(obj);
	}
	return null;
}
