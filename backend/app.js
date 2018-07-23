const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const compression = require('compression');


const app = express();
const path = require('path');



app.set('port', process.env.PORT || 4001);
app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;
