var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util'),
  express = require('express'),
  expressValidator = require('express-validator'),
  HttpError = blueprint.errors.HttpError
  ;




function CreateOrganizationController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (CreateOrganizationController);

function checkBody(body){
	
	var empty; 
	if(body){
		empty = false;
	}else	{
		empty = true;
	}
	return empty;

}

function checkSame(string1, string2){
	
	if(string1 == string2){
		same = true;
	}else{
		same = false;
	}
	return same;
}

function validateEmail(email)   
{ 
	var isEmail;
 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){  
    	isEmail = true;
  	} else{
  		isEmail = false;
  	}
  	return isEmail;
}

//this is a test function to make sure that we are posting organzation information and validating 
CreateOrganizationController.prototype.echoOrganization = function(){

	return{
		//first we must validate the data that is coming in and send back a response if we have any errors
		validate: function(req, callback) {
	// // 		create boolean variables that will hold true or false depending on validation functions
			var organizationValidation; 
			var countryValidation;
			var emailBodyValidation;
			var vEmailValidation;
			var isEmailValidation;
			req.Error = 0; 

	// // 		//run validation functions
			organizationValidation = checkBody(req.body.organization);
			emailBodyValidation = checkBody(req.body.email);
			vEmailValidation = checkSame(req.body.email, req.body.verifyEmail);
			isEmailValidation = validateEmail(req.body.email);
				

	// 		//check to see what vaidator brought back
			if(organizationValidation == true){
				req.organizationError = "Please enter an organization";
				req.Error = 1; 
			}

			if(emailBodyValidation == true){
				req.emailError = "Please enter a Valid Email Address";
				req.Error = 1; 
			}

			if(vEmailValidation == false){
				req.vEmailError = "Verify Email must be same as Email";
				req.Error = 1; 
			}

			if(isEmailValidation == false){
				req.emailError = "Please Enter a Valid Email address";
				req.Error = 1; 
			}
			
			return callback(null);
		 },

		
		//Sanitize if we need too 

		//execute function after santizing and validating information
		execute: function(req, res, callback){
			var organization = {name: req.body.organization, 
								location: {
									country: req.body.country,
									state: req.body.state, 
									city: req.body.city
								},
								email: req.body.email, 
								verifyEmail:req.body.verifyEmail};
			var error = req.Error;
			console.log(organization);
			
			if(error == 1){
				organizationError = req.organizationError;  
				emailError = req.emailError;
				vEmailError = req.vEmailError;
				res.status(200).render('CreateOrganization.pug',{organization, organizationError, emailError, vEmailError});
			}else{
				res.status(200).render('CreateOrganization.pug', {organization});
			}



			

			
			return callback(null);
		}
	};

}

module.exports = exports = CreateOrganizationController;

