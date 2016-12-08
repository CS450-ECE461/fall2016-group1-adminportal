var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util'),
  express = require('express'),
  expressValidator = require('express-validator'),
  HttpError = blueprint.errors.HttpError,
  request = require('superagent')
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
			var organization = {
								handle: req.body.handle,
								name: req.body.organization,
								location: {
									country: req.body.country,
									region: req.body.region,
									locality: req.body.locality
								},
								emailAddress: req.body.email,
								};
			var error = req.Error;



			if(error == 1){
				organizationError = req.organizationError;
				emailError = req.emailError;
				vEmailError = req.vEmailError;
				res.status(200).render('CreateOrganization.pug',{organizationError, emailError, vEmailError});
			}else{
				request
					.post('http://prattle.bdfoster.com/api/v1/users')
					.send({org: organization})
					.end(function (err, resp){
						if(err){
							if(err.status == '422'){
								errorMessage = "email and or organization name has already been used";
								res.status(200).render('CreateOrganization.pug', {organization, errorMessage});
							}else if(err.status == '409'){
								errorMessage = "Email has already been used";
								res.status(200).render('CreateOrganization.pug', {organization, errorMessage});
							}else{
								errorMessage = "something went wrong";
								res.status(200).render('CreateOrganization.pug', {organization, errorMessage});
							}
						}else{
							errorMessage = "yay";
							res.status(200).render('CreateOrganization.pug', {organization, errorMessage});
						}

						 return callback(null);
					});


				}





		}
	};

}

module.exports = exports = CreateOrganizationController;
