const express = require('express');
const router = express.Router();
const carers = require('./carers');
const login = require('./login');
const signUp = require('./signUp.js');
const myFriends = require('./mYFriends');


router.post('/api/signUp', signUp.post);


router.post('/login', login.post);
router.post('/carers', carers.post);
router.post('/api/myFriends', myFriends.post);


module.exports = router;
