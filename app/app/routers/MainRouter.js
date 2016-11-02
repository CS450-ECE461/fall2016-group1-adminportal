module.exports = exports = {
  // '/helloworld' : {
  //   get  : { view   : 'helloworld.pug' },
  //   post : { action : 'HelloWorldController@echoName'},
  // },
  
  '/createOrganization' : {
  	get : {view:'CreateOrganization.pug' },
  	post: {action:'CreateOrganizationController@echoOrganization'},
  },

  '/adminlogin' : {
    get  : { view   : 'AdminLogin.pug' },
    post : { action : 'AdminLoginController@echoName'},
  },
};
