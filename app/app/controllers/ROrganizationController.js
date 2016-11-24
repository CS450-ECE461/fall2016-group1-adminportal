var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util')
;

function ROrganizationController (){
	blueprint.BaseController.call(this);
}

blueprint.controller(ROrganizationController);

ROrganizationController.prototype.renderOrganization = function (){
	return function renderOrganization(req, res){
		organization = {
			name: "",
			location: {
					country: "",
					state: "",
					city: ""
			},
			email: "",
			verifyEmail: ""
		};
		return res.render('CreateOrganization.pug',{organization});
	};
};

module.exports = exports = ROrganizationController;