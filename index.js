const constants = require('./constants');

const express = require('express'),
    app = express(),
    passport = require('passport'),
    auth = require('./auth');
auth(passport);
app.use(passport.initialize());
app.get('/', (req, res) => {
    res.json({
        status: 'session cookie not set'
    });
});
app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));
app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {
        res.send("logged in successfully");
    }
);
app.listen(constants.port, () => {
    console.log('Server is running on port 3000');
});