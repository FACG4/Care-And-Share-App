const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 4001);
app.use(controllers);

module.exports = app;
