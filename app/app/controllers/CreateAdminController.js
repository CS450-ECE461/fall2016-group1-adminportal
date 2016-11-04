var blueprint = require ('@onehilltech/blueprint')
  , util	  = require('util')
  ;

function CreateAdminController () {
	blueprint.BaseController.call (this);
}

blueprint.controller (CreateAdminController);

CreateAdminController.prototype.echoName = function () {
	var self = this;
//Takes in the input from username and password, then renders the org creation screen	
	return function (req, res) {
		return res.render ('CreateOrganization.pug', {username: req.body.username,password:req.body.password,email:req.body.email});
	};
};

module.exports = exports = CreateAdminController;