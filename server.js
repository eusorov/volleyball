'use strict'
var path = require('path');
// SetUp Express-Server
var express = require('express');
var HttpStatus = require('http-status-codes');
var compression = require('compression');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var mongoose = require('mongoose');

var passport = require('passport');

var secrets = require('./config/secrets');
var helmet = require('helmet'); // restrict http-headers! https://www.npmjs.com/package/helmet

/*
var webpack = require ('webpack');
var webpackDevMiddleware = require ('webpack-dev-middleware');
var webpackHotMiddleware = require ('webpack-hot-middleware');

var isDeveloping = process.env.NODE_ENV !== 'production';
var webpackdevConfig = require('./config/webpack.dev.hot')
*/
// MongoDb
mongoose.Promise = global.Promise;
mongoose.connect(secrets.db);
// =================================== express =======================
var app = express();
app.set('port', process.env.PORT);

require('./server/passport')(passport); // pass passport for configuration

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());

app.use(session({ secret: secrets.sessionSecret })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

var oneDay = 86400000;


//Additional middleware which will set headers that we need on each request.
app.use('/api',function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
  //  res.setHeader('Access-Control-Allow-Origin', '*');
    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    var useragent = "Mozilla/5.0 (Windows NT 6.1) Chrome/41.0.2228.0";
    res.setHeader('User-Agent', useragent);
    next();
  });

app.use(helmet())

require('./server/authorize_routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
var trainings = require('./server/training_routes.js'); // load our routes
app.use('/api/trainings', trainings);

var mailservice = require('./server/mail.service.js'); // load mail
app.use('/api/messages', mailservice);

var isDeveloping = false;

app.use(express.static(__dirname + '/dist'));
// alle urls die nicht getroffen wurden, werden an index.html weitergeleitet.
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//app.use(express.static(__dirname+'/dist'));



var server = app.listen(app.get('port'), function() {
 console.log('Server started: http://localhost:' + app.get('port') + '/');
});

exports.closeServer = function(){
	server.close();
};
