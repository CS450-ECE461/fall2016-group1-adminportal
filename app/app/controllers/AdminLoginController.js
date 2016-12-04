var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util'),
  express = require('express'),
  expressValidator = require('express-validator'),
  HttpError = blueprint.errors.HttpError, 
  request = require('superagent')
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
			//returns to page with error notes
			if(error == 1){
				UsernameError = req.UsernameError; 
				PasswordError = req.PasswordError; 
				res.status(200).render('AdminLogin.pug',{UsernameError, PasswordError});
			}else{
				UsernameError = req.UsernameError; 
				PasswordError = req.PasswordError; 			
				res.status(200).render('dashboard.pug', {username: req.body.username});
			}		
			return callback(null);
		}
	};

}

module.exports = exports = AdminLoginController;
