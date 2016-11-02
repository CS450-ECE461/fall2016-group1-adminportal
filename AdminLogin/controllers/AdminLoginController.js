var blueprint = require ('@onehilltech/blueprint')
  , util	  = require('util')
  ;

function AdminLoginController () {
	blueprint.BaseController.call (this);
}

blueprint.controller (AdminLoginController);

AdminLoginController.prototype.echoName = function () {
	var self = this;
	
	return function (req, res) {
		return res.render ('AdminLogin.pug', {username: req.body.username});
	};
};

module.exports = exports = AdminLoginController;