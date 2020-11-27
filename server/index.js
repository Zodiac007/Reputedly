const express = require('express');
const cors = require("cors");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GithubStrategy = require("passport-github").Strategy;

const keys = require('../config/keys');

let user = {};


// Serialized and Deserialized the User
passport.serializeUser((user, cb) => {
    cb(null, user);
});
passport.deserializeUser((user, cb) => {
    cb(null, user);
});


// Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackURL: "/auth/facebook/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(JSON.stringify(profile));
        user = { ...profile };
        return cb(null, profile)
    }
));

// Github Strategy
passport.use(new GithubStrategy({
    clientID: keys.GITHUB.clientID,
    clientSecret: keys.GITHUB.clientSecret,
    callbackURL: "/auth/github/callback"
},

    (accessToken, refreshToken, profile, cb) => {
        console.log(JSON.stringify(profile));
        user = { ...profile };
        return cb(null, profile)
    }
));

// setUp the express App
const app = express();
app.use(cors());
app.use(passport.initialize());

// Authenticate the User

// Facebook
app.get('/auth/facebook',
    passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });


// Github
app.get('/auth/github',
    passport.authenticate('github'));

app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });


// Setting Up for the user
app.get("/user", (req, res) => {
    console.log("getting user data");
    res.send(user);
})

app.get("/auth/logout", (req, res) => {
    console.log("logging out..");
    user = {};
    res.redirect("/")
})

const PORT = 5000;
app.listen(PORT);
