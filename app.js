var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// requiring routes
var projects    = require('./routes/projects');
var categories  = require('./routes/categories');
var questions   = require('./routes/questions');

var app = express();

app.disable('etag');


// register middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// require a valid content type
app.use('/api/v1/', function(req, res, next) {
  var contentType = req.headers['content-type'];
  if (!contentType || contentType.indexOf('application/json') !== 0) {
    return res.send(400);
  }
  next();
});


// mapping routes
app.use('/api/v1', projects);
app.use('/api/v1', categories);
app.use('/api/v1', questions);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


module.exports = app;
