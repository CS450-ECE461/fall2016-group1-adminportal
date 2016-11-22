var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util'),
  express = require('express'),
  expressValidator = require('express-validator'),
  HttpError = blueprint.errors.HttpError
  ;




function AdminLoginController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (AdminLoginController);
//Kyle's check body for empty function
function checkBody(body){
	
	var empty; 
	if(body){
		empty = false;
	}else	{
		empty = true;
	}
	return empty;

}

//function ErrorReturn(error, UsernameError){
//	if(error.status == '422'){
//		UsernameError = "Incorrect Username/Password";
//	}
//	else {
//		UsernameError = "Unknown Error";
//	}
//	return Username;
//}

AdminLoginController.prototype.echoName = function(){

	return{
		validate: function(req, callback) {
			var UsernameValidation; 
			var PasswordValidation;
			req.Error = 0; 

			//checks to see if either field is null
			UsernameValidation = checkBody(req.body.username);
			PasswordValidation = checkBody(req.body.password);
				

			if(UsernameValidation == true){
				req.UsernameError = "Please enter an username";
				req.Error = 1; 
			}
			
			if(UsernameValidation == false){
				req.UsernameError = "";
			}
			
			if(PasswordValidation == true){
				req.PasswordError = "Please enter in a password";
				req.Error = 1; 
			}
			if(PasswordValidation == false){
				req.PasswordError = "";
			}
			return callback(null);
		 },

		execute: function(req, res, callback){
			var error = req.Error; 
			var user = {username : req.body.username,
						password : req.body.password,
						};
			UsernameError = req.UsernameError; 
			PasswordError = req.PasswordError; 	
			//returns to page with error notes
			if(error == 1){
				res.status(200).render('AdminLogin.pug',{UsernameError, PasswordError});
			}else{
//				request
//					.post("")
//					.type("json")
//					.set("Accept", "application/json")
//					.send({username: user.username, password: user.password})
//					.expect(200)
//					.end(ErrorReturn(err, UsernameError))
//				if(err){
//					res.status(200).render('AdminLogin.pug',{UsernameError, PasswordError});					
//				}
//				else{
					res.status(200).render('AdminLogin.pug', {username: user.username,password: user.password,UsernameError, PasswordError});
//				}		
			return callback(null);
			}
		};

	}
}

module.exports = exports = AdminLoginController;
