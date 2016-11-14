module.exports = exports = {
  
  '/createOrganization' : {
  	get: {view: 'CreateOrganization.pug'},
  	post: {action:'CreateOrganizationController@echoOrganization'},
  },

  '/adminlogin' : {
    get  : { view   : 'AdminLogin.pug' },
    post : { action : 'AdminLoginController@echoName'},
  },

  '/createadmin' : {
    get  : { view   : 'CreateAdmin.pug' },
    post : { action : 'CreateAdminController@echoName'},
  },

  '/AdminHome' : {
    get : {view : 'AdminHome.pug' }
  }

};
