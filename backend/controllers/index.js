const express = require('express');
const router = express.Router();
const carers = require('./carers');
const login = require('./login');

router.post('/login', login.post)
router.post('/carers', carers.post)


module.exports = router;
