var passport = require ('passport')
;

function userLoggedIn(req, res, next){
  if(req.isAuthenticated())
    return next (); 
  res.redirect('/login');
}


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
