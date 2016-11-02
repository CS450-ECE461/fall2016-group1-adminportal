var mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

var schema = new mongodb.Schema({
  username: {type: String, required: true, trim: true},
});

const COLLECTION_NAME = 'user';
module.exports = exports = mongodb.model (COLLECTION_NAME, schema);
