const express = require('express');
const router = express.Router();
const login = require('./login');
const carers = require('./carers');

router
      .get('/carers', carers.get)
      .post('/carers', carers.post)


module.exports = router;
