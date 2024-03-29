var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

/**
 *  Route Imports
 */
var signup = require('./routes/signup');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 *  Development Settings
 */
if (app.get('env') === 'development') {
    app.use(express.static(path.join(__dirname, '../client')));

    // Serves up the index page
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app')));

    // Error handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/**
 *  Production Settings
 */
if (app.get('env') === 'production') {
    // Changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    // Production error handler
    // No stacktraces leaked to users
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: { }
        });
    });
}

/**
 *  Routes
 */
app.use('/signup', signup);

module.exports = app;
