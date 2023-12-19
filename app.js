var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 4000;

var indexRouter = require('./routes/index');
var albumRouter = require('./routes/album');
var cadastroRouter = require('./routes/cadastro');
var loginRouter = require('./routes/login');
var playerRouter = require('./routes/player');
var createRouter = require('./routes/create');
var autenticarRouter = require('./routes/autenticar');

var app = express();

//static
app.use(express.static('public'))
app.use('/static', express.static('public'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/album', albumRouter);
app.use('/cadastro', cadastroRouter);
app.use('/login', loginRouter);
app.use('/player', playerRouter);
app.use('/create', createRouter);
app.use('/autenticar', autenticarRouter);

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
app.listen(port, () => {
  console.log('rodando')
})
