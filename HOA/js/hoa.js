			function login(){
				"use strict";
				var lb = document.getElementById('loginBtn');
				if(lb.value == 'Login?'){
					showModal("Login!");   
					var loginBtn = document.getElementById('loginBtn');
					loginBtn.value = "LogOut?";
				}else if(lb.value == 'LogOut?'){
					newLogin.checkUser({"userName":"","password":"test"});
					var loginBtn = document.getElementById('loginBtn');
					loginBtn.value = "Login?";
					
				}
				
			}
			function checkLogin(){
				"use strict";
				span.click();
				var userName = document.getElementById('userNameInput').value;
				document.getElementById('userNameInput').value = null;
				var password = document.getElementById('userPassword').value;
				document.getElementById('userPassword').value = null;
				newLogin.checkUser({"userName":userName,"password":password});
			}
			function processLogin(it){
				//console.log(it.response);
				newLogin.user = JSON.parse(it.response);
				document.cookie = "USER=" + JSON.stringify(newLogin.user);
				
				var userDisplay = document.getElementById('userName');
				user = JSON.parse(tools.getCookie('USER'));
				//console.log(user);
				userDisplay.innerHTML = user.displayName;
				if(user.level == 1){
					document.body.style.backgroundColor = "yellow";
				}else{
					document.body.style.backgroundColor = 'white';
				}
				if(typeof bbList != 'undefined'){
					bbList.buildList();	
				}
				
			}
			function convertToJSON(obj){
				"use strict";
				if(typeof(obj) === 'object'){
					return JSON.stringify(obj);
				}
				return null;
			}
			