var blueprint = require ('@onehilltech/blueprint')
  ;

var User;

module.exports = exports = {
  protocols : {
    http : {
      port: 5002
    }
  },

  middleware : {
    validator  : { },
    bodyParser : {
      urlencoded : { extended: false },
      json : { }
    },

    morgan: {
      format: 'dev',
      immediate: true
    },

    passport: {
      session: {
        serializer: function (token, done) {
          return done (null, token);
        },

        deserializer: function (token, done) {
          return done (null, token);
        }
      }
    },
    session: {
         secret: 'ssshhhhh',
         resave: false,
         saveUninitialized: true,
         cookie: { secure: false }  // set to true for https://
    }
  }
};
