'use strict';
var passport      = require ('passport')
  , LocalStrategy = require ('passport-local').Strategy,
  request = require('superagent')
  ;

module.exports = initPassport;

function initPassport (app) {
  var User = app.models.User;
  var opts = {session: true};

  passport.use (new LocalStrategy (opts, authorize));

  function authorize (username, password, done) {
    var newUser = {
      "username": username, 
      "password": password
    };

    request
      .post('localhost:5000/api/v1/auth/jwt')
      .type("json")
      .set("Accept", "application/json")
      .send(newUser)
      .end(function(error, resp){
        if(error){
          if(error.status == '422')
            console.log(error);
        }
        else{
          var token = resp.body.jwt; 
          return done(null, token);
        }
        return done(null, false);
      });
    }
  }
