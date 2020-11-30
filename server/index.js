const express = require('express');
const cors = require("cors");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const RedditStrategy = require("passport-reddit").Strategy;
const LinkedinStrategy = require("passport-linkedin").Strategy;
const keys = require('../config/keys');

let user = {};


// Serialized and Deserialized the User
passport.serializeUser((user, cb) => {
    cb(null, user);
});
passport.deserializeUser((user, cb) => {
    cb(null, user);
});


//1. Facebook Strategy
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

//2. Github Strategy
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

//3. Twitter Strategy
passport.use(new TwitterStrategy({
    consumerKey: keys.TWITTER.clientID,
    consumerSecret: keys.TWITTER.clientSecret,
    callbackURL: "/auth/twitter/callback"
},

    (accessToken, refreshToken, profile, cb) => {
        console.log(JSON.stringify(profile));
        user = { ...profile };
        return cb(null, profile)
    }
));

//4. Instagram Strategy
passport.use(new InstagramStrategy({
    clientID: keys.INSTAGRAM.clientID,
    clientSecret: keys.INSTAGRAM.clientSecret,
    callbackURL: "/auth/instagram/callback"
},

    (accessToken, refreshToken, profile, cb) => {
        console.log(JSON.stringify(profile));
        user = { ...profile };
        return cb(null, profile)
    }
));

//5. Linkedin Strategy
passport.use(new LinkedinStrategy({
    consumerKey: keys.LINKEDIN.clientID,
    consumerSecret: keys.LINKEDIN.clientSecret,
    callbackURL: "/auth/linkedin/callback"
},

    (accessToken, refreshToken, profile, cb) => {
        console.log(JSON.stringify(profile));
        user = { ...profile };
        return cb(null, profile)
    }
));

//6. Reddit Strategy
passport.use(new RedditStrategy({
    clientID: keys.REDDIT.clientID,
    clientSecret: keys.REDDIT.clientSecret,
    callbackURL: "/auth/reddit/callback"
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
        res.redirect('/profile');
    });


// Github
app.get('/auth/github',
    passport.authenticate('github'));

app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/profile');
    });


// Twitter
app.get('/auth/twitter',
    passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

// Instagram
app.get('/auth/instagram',
    passport.authenticate('instagram'));

app.get('/auth/instagram/callback',
    passport.authenticate('instagram', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

// Linkedin
app.get('/auth/linkedin',
    passport.authenticate('linkedin'));

app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

//6. Reddit
app.get('/auth/reddit',
    passport.authenticate('reddit'));

app.get('/auth/reddit/callback',
    passport.authenticate('reddit', { failureRedirect: '/login' }),
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
