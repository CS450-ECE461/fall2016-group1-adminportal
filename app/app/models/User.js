var mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

var schema = new mongodb.Schema({
  username: {type: String, required: true, trim: true},
  firtsName: {type: String, required: true, trim: true},
  middleName: {type: String, trim: true},
  lastName: {type: String, required: true, trim: true},
  emailAddress: {type: String, required: true, trim: true},
  password: {type: String, required: true, trim: true},
});
schema.methods.verifyPassword = function (password) {
  return this.password === password;
};

module.exports = exports = mongodb.model ('users', schema);
