function DISCLAIMER(){
	"use strict";
	this.text = 'Thank you for visiting!';
	this.disclaimerContent = '';
	
	this.showPDF = function(pdf, myText){
							this.disclaimerContent.style.height = '80%';
							this.disclaimerContent.style.width = '90vw';
							this.disclaimerContent.style.top = '10px';
		
							var p1 = document.createElement('p');
							this.disclaimerContent.appendChild(p1);
							p1.id = 'disclaimerP1';
		
							var b2 = document.createElement('button');
							this.disclaimerContent.appendChild(b2);
							b2.id = 'disclaimerCancel';
							b2.setAttribute('onclick','disclaimer.disclaimerCancel();');
							b2.innerHTML = 'Close';
							b2.style.marginBottom = '5px';
		
							var pdfViewer = document.createElement('iframe');
							this.disclaimerContent.appendChild(pdfViewer);
							pdfViewer.src = pdf;
							pdfViewer.style.width = '90%';
							pdfViewer.style.height = '90%';
							pdfViewer.style.display = 'block';
							pdfViewer.style.margin = '0 auto';
		
							this.text = myText;
							var dm = document.getElementById('disclaimerModal');
							dm.style.paddingTop = '5%';
							var dmP1 = document.getElementById('disclaimerP1');
							window.location = '#';
							dmP1.innerHTML = this.text;
							dm.style.display = 'block';
	};
	
	this.showDISCLAIMER = function (url, myText, cancel){
							var p1 = document.createElement('p');
							this.disclaimerContent.appendChild(p1);
							p1.id = 'disclaimerP1';
							
							var b1 = document.createElement('button');
							this.disclaimerContent.appendChild(b1);
							b1.id = 'disclaimerContinue';
							b1.setAttribute('onclick','disclaimer.disclaimerContinue();');
							b1.innerHTML = 'Continue';
							
							var b2 = document.createElement('button');
							this.disclaimerContent.appendChild(b2);
							b2.id = 'disclaimerCancel';
							b2.setAttribute('onclick','disclaimer.disclaimerCancel();');
							b2.innerHTML = 'Cancel';
		
		
							this.text = myText;
							var dm = document.getElementById('disclaimerModal');
							var dmP1 = document.getElementById('disclaimerP1');
							var ok = document.getElementById('disclaimerContinue');
							window.location = '#';
							dmP1.innerHTML = this.text;
							ok.setAttribute('onClick','disclaimer.disclaimerContinue("' + url + '");');
							if(!cancel){
								document.getElementById('disclaimerCancel').style.display = 'none';
							}
							dm.style.display = 'block';
						};
	this.disclaimerContinue = function (url){
							this.disclaimerCancel();
							if(url !== '#'){window.open(url);}
						};
						
	this.disclaimerCancel = function () {
							var dm = document.getElementById('disclaimerModal');
							dm.style.display = 'none';
							this.disclaimerContent.innerHTML = '';
						};
	this.buildModal = function (){
							//insert modal
							var disclaimerDiv = document.createElement('div');
							document.body.appendChild(disclaimerDiv);
							disclaimerDiv.id = 'disclaimerModal';
							disclaimerDiv.classList.add('disclaimer');
							disclaimerDiv.style.display = 'none';
							
							this.disclaimerContent = document.createElement('div');
							disclaimerDiv.appendChild(this.disclaimerContent);
							this.disclaimerContent.id = 'disclaimerContent';
							this.disclaimerContent.classList.add('disclaimerContent');
							
							//var p1 = document.createElement('p');
//							disclaimerContent.appendChild(p1);
//							p1.id = 'disclaimerP1';
//							
//							var b1 = document.createElement('button');
//							disclaimerContent.appendChild(b1);
//							b1.id = 'disclaimerContinue';
//							b1.setAttribute('onclick','disclaimer.disclaimerContinue();');
//							b1.innerHTML = 'Continue';
//							
//							var b2 = document.createElement('button');
//							disclaimerContent.appendChild(b2);
//							b2.id = 'disclaimerCancel';
//							b2.setAttribute('onclick','disclaimer.disclaimerCancel();');
//							b2.innerHTML = 'Cancel';
						};
	this.buildModal();
	
}
