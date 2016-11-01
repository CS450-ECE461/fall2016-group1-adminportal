var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util'),
  express = require('express'),
  expressValidator = require('express-validator')
  ;




function CreateOrganizationController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (CreateOrganizationController);

// CreateOrganizationController.prototype.echoOrganization = function () {
//   var self = this;

//   return function (req, res) {
  	
//   	var organization = {
//   		name: req.body.organization, 
//   		email:req.body.email
//   	};
    
//     return res.render ('CreateOrganization.pug', { organization });
//   };
// };


//this is a test function to make sure that we are posting organzation information and validating 
CreateOrganizationController.prototype.echoOrganization = function(){

	return{


		//first we must validate the data that is coming in and send back a response if we have any errors
		validate: function(req, callback) {
				//req.checkbody('organization','missing name parameter').notEmpty();
				req.checkBody('email','Enter a Valid Email Address').isEmail();
				//req.checkbody('password','missing password parameter').notEmpty();
				//req.checkbody('verifyPassword','missing password parameter').notEmpty();
				return callback(req.validationErrors(true));
				

		},


		//Sanitize if we need too 

		//execute function after santizing and validating information
		execute: function(req, res, callback){
			var organization = {name: req.body.organization, email: req.body.email};
			res.status(200).render('CreateOrganization.pug', {organization});
			return callback(null);
		}
	};

}

module.exports = exports = CreateOrganizationController;

