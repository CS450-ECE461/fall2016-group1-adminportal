module.exports = exports = {
  '/helloworld' : {
    get  : { view   : 'helloworld.pug' },
    post : { action : 'HelloWorldController@echoName'},
  },
  '/createOrganization' : {
  	get : {view:'CreateOrganization.pug'}
  }
};
