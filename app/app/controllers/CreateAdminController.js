var blueprint = require ('@onehilltech/blueprint')
   ,util	  = require('util')
   ,request = require('superagent')
  ;

function CreateAdminController () {
	blueprint.BaseController.call (this);
}

blueprint.controller (CreateAdminController);

CreateAdminController.prototype.signup = function () {
  return function (req, res) {
    // take user info from form
     var user = {
       "firstName" : req.body.fName,
       "middleName" : req.body.mInitial,
       "lastName" : req.body.lName,
       "emailAddress" :  req.body.email,
       "password" : req.body.password,
        "handle" : req.body.username,
    };
    request
        .post('http://prattle.bdfoster.com/api/v1/users')
        .send({ user: user})
        .end(function (err, resp){
          //check for potential errors from backend
          if(err){
            if(err.status == '422'){
              res.render('CreateAdmin.pug', {errorDisplay: 'Username and or email have been used already.'});
            }
            else if(err.status == '409') {
              res.render('CreateAdmin.pug', {errorDisplay: 'Email has already been used.'});
            }
            else{
              res.render('CreateAdmin.pug', {errorDisplay: 'Something went wrong, try again.'});
            }
          }else{
            return  res.redirect('/createOrganization');
          }
        });
  };

};

module.exports = exports = CreateAdminController;
