const express = require('express');
const router = express.Router();
const carers = require('./carers');
const login = require('./login');
const signUp = require('./signUp.js')

router.post('/login', login.post)
router.post('/carers', carers.post)
router.post('/signUp', carers.post)


module.exports = router;
