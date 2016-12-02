var passport = require ('passport')
;
module.exports = exports = {

  '/createOrganization' : {
  	get: {view: 'CreateOrganization.pug'},
  	post: {action:'CreateOrganizationController@echoOrganization'},
  },

  '/adminlogin' : {
    get  : { view   : 'AdminLogin.pug' },
    post : { 
              before: [passport.authenticate('local', {failureRedirect: '/adminlogin'})],
              action: 'AdminLoginController@echoName'},
  },

  '/createadmin' : {
    get  : { view   : 'CreateAdmin.pug' },
    post : { action : 'CreateAdminController@signup'},
  },

};
