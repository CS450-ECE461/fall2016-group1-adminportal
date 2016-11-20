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
        serializer: function (user, done) {
          return done (null, user.id);
        },

        deserializer: function (id, done) {
          User.findById (id, done);
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
