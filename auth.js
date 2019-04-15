const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const constants = require('./constants');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: constants.clientId,
            clientSecret: constants.clientSecret,
            callbackURL: constants.googleCallbackURL
        },
        (token, refreshToken, profile, done) => {
            console.log("token: ", token);
            console.log("profile: ", profile);
            return done(null, {
                profile: profile,
                token: token
            });
    }));
};