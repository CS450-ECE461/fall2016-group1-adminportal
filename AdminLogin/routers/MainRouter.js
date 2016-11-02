module.exports = exports = {
  '/adminlogin' : {
    get  : { view   : 'AdminLogin.pug' },
    post : { action : 'AdminLoginController@echoName'},
  }
};
