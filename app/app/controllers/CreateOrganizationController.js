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

//this is a test function to make sure that we are posting organzation information and validating 
CreateOrganizationController.prototype.echoOrganization = function(){

	return{


		//first we must validate the data that is coming in and send back a response if we have any errors
		validate: function(req, callback) {
				req.checkBody('organization', 'Enter an Organization Name').notEmpty();
				req.checkBody('location', 'Enter in a location').notEmpty();
				req.checkBody('email','Enter a Valid Email Address').isEmail();
				req.checkBody('verifyEmail', 'Enter a Valid Email Address').isEmail();
				return callback(req.validationErrors(true));
		},


		//Sanitize if we need too 

		//execute function after santizing and validating information
		execute: function(req, res, callback){
			var organization = {name: req.body.organization, location: req.body.location, email: req.body.email};
			res.status(200).render('CreateOrganization.pug', {organization});
			return callback(null);
		}
	};

}

module.exports = exports = CreateOrganizationController;

