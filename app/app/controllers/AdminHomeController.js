var blueprint = require ('@onehilltech/blueprint')
  , util	  = require('util')
  ;

function AdminHomeController () {
	blueprint.BaseController.call (this);
}

blueprint.controller (AdminHomeController);

AdminHomeController.prototype.echoName = function () {
	var self = this;
//Takes in the input from username and password, then renders the org creation screen
	return function (req, res) {
		return res.render ('AdminHome.pug', {name: req.body.name});
	};
};

module.exports = exports = AdminHomeController;
