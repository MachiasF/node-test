
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

// CONFIG
var AWS = require('aws-sdk');
var config = require('../config');


//Controllers
var ActorsCtrl = require('./controllers/ActorsCtrl');
var DirectorsCtrl = require('./controllers/DirectorsCtrl');
var MoviesCtrl= require('./controllers/MoviesCtrl');
var UsersCtrl = require('./controllers/UsersCtrl')

// Services
var passport = require('./services/passport');

// Policies
var isAuthed = function(req, res, next){
	if(!req.isAuthenticated()) return res.sendStatus(401);
	return next();
};

// Express
var app = express();

// Middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(__dirname + '/../public'));
app.use(session({
	secret: 'blah',
	saveUninitialized: true,
  	resave: false
}));
app.use(passport.initialize());
app.use(passport.session());


//-----login
app.post('/api/login', passport.authenticate('local'), function(req, res) {
	res.json(req.user);
});
app.get('/api/sessionUser', UsersCtrl.me)
app.get('/api/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

app.get('/user/auth', function(req, res) {
    if (req.user) {
        res.send(req.user)
    }
    res.end()
})
// Endpoints



//Connection
var mongoUri = config.MONGO_URI;
var port = config.PORT;

// mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
    console.log('connected to monogdb at: ' + mongoUri);
});

app.listen(port, function(){
    console.log('listening on port: ' + port);
})