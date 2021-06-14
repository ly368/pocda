var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var session = require('express-session');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var contactRouter = require('./routes/contact');
var aboutRouter = require('./routes/about');
var singleRouter = require('./routes/single');
var successRouter = require('./routes/success');
var adminRouter = require('./routes/admin');
var addRouter = require('./routes/add');
var uploadRouter = require('./routes/upload');
// var alterRouter = require('./routes/alter');

var app = express();
app.use('/www',express.static('public'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("123"));
app.use(session({
  secret:"123",
  cookie:{maxAge:80000},
  resave: false,
  saveUninitialized: true,
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/contact',contactRouter);
app.use('/about',aboutRouter);
app.use('/single',singleRouter);
app.use('/success',successRouter);
app.use('/admin',adminRouter);
app.use('/add',addRouter);
app.use('/upload',uploadRouter);
// app.use('/alter',alterRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

