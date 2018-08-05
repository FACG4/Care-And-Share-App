const express = require('express');
const router = express.Router();

const carers = require('./carers');
const login = require('./login');
const { postProfile, getProfile } = require('./profile');
const signUp = require('./signUp.js');
const myFriends = require('./myFriends')


router.get('/api/profile', getProfile)
router.put('/api/profile', postProfile)
router.post('/api/myFriends', myFriends.post)

router.post('/login', login.post);
router.post('/carers', carers.post);
router.post('/api/signUp', signUp.post);

module.exports = router;

