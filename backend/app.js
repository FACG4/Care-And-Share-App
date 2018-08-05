const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controllers = require('./controllers');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 4001);
app.use(controllers);

module.exports = app;
