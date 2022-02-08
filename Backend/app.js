var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const appointmentsRouter = require('./routes/appointments')
const doctorsRouter = require ('./routes/doctors')

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/appointments', appointmentsRouter)
app.use('/doctors', doctorsRouter)


module.exports = app;