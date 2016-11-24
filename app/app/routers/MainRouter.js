var passport = require ('passport')
;
module.exports = exports = {

  '/createOrganization' : {
  	get: {action:'ROrganizationController@renderOrganization'},
  	post: {action:'CreateOrganizationController@echoOrganization'},
  },

  '/adminlogin' : {
    get  : { view   : 'AdminLogin.pug' },
    post : { action : 'AdminLoginController@echoName'},
  },

  '/createadmin' : {
    get  : { view   : 'CreateAdmin.pug' },
    post : { action : 'CreateAdminController@signup'},
  },

};
