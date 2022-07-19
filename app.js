var createError = require('http-errors');
var express = require('express');
var mongoose = require("mongoose");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const env = require("dotenv"); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const employeeRoute = require('./routes/employee')
const roleRoute = require('./routes/role')
const announcementRoute = require('./routes/announcement')
const authRoute = require("./routes/auth");
var app = express();
env.config();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', employeeRoute)
app.use('/api', roleRoute)
app.use('/api', announcementRoute)
app.use("/api",authRoute);
 
mongoose.connect('mongodb://localhost:27017/mydatabase');

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
