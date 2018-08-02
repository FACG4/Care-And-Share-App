const express = require('express');
const router = express.Router();
const carers = require('./carers');
const login = require('./login');
const freindsrequest = require('./freindsRequest')
const notification = require('./notification')
const handleDeleteFriendRequest = require('./handleDeleteFriendRequest')
const handleAcceptFriendRequest = require('./handleAcceptFriendRequest')


router.post('/login', login.post)
router.post('/carers', carers.post)
router.post('/freindsrequest', freindsrequest.post)
router.post('/api/notification', notification.post)
router.post('/api/friendrequestcancel', handleDeleteFriendRequest.post)
router.post('/api/friendrequestaccept', handleAcceptFriendRequest.post)



module.exports = router;
