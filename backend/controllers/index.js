const express = require('express');
const router = express.Router();

const carers = require('./carers');
const login = require('./login');
const { postProfile, getProfile } = require('./profile');

router.post('/login', login.post)
router.post('/carers', carers.post)
router.get('/api/profile', getProfile)
router.put('/api/profile', postProfile)

module.exports = router;
