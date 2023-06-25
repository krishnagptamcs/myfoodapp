const User = require("../models/User");

const GoogleStrategy = require("passport-google-oauth20");

const passport = require("passport");

require("dotenv").config();

exports.connectPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          "362385809283-fd1mjvhkhna378ffsent226ndd8i1egq.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:4000/api/v1/login",
      },
      async function (acessToken, refreshToken, profile, done) {
        // database user me profile se save na check krna hai

        const user = await User.findOne({
          googleId: profile.id,
        });

        // console.log(googleId);
        if (!user) {
          const newUser = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            photo: profile.photos[0].value,
          });
          return done(null, newUser);
        } else {
          return(null, user);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
};
