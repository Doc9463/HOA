function Login(){
	this.user;
	this.phpFile = 'users.php';


	this.checkUser = function(obj){
						var jsonData = convertToJSON(obj);
						if(jsonData !== null){
							var request = new XMLHttpRequest();
							var URL2 = "php/" + this.phpFile;
							request.open("POST", URL2, true); //GET
							request.setRequestHeader("Content-type", "application/json");
							request.send(jsonData);

							request.onreadystatechange = function() {
								//console.log(this.status + " " + this.user);
								if (this.readyState === 4 && this.status === 200) {
									//console.log(this.responseText.trim());
									processLogin(this);
								}else if(this.readyState === 4 && this.status >= 400){
									alert("Failure! \n Error: " + this.status);
								}
							};
						}
					};
	this.loginUser = function(){
						var loginBtn = document.getElementById('loginBtn');
						loginBtn.value = "LogOut?";
						var userDisplay = document.getElementById('userName');
						userDisplay.innerHTML = this.user.displayName;
					};
}