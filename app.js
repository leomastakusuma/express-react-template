import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import erc  from 'express-route-controller'

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const reactViews  = require('express-react-views');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


erc(app, {
    controllers: __dirname + '/controllers',
    routes: {
        '/login' : {action : 'Home#Login',method :'post'},
    }
});




module.exports = app


