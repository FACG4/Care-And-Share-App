const express = require('express');
const router = express.Router();
const carers = require('./carers');
const login = require('./login');
const freindsrequest = require('./freindsRequest')
const notification = require('./notification')
const handleRejectFriendRequest = require('./handleRejectFriendRequest')
const handleAcceptFriendRequest = require('./handleAcceptFriendRequest')
const checkFriendRelation = require('./checkFriendRelation')
const cancelFriendRequest = require('./cancelFriendRequest')
const handleMessages = require('./handleMessages')

router.post('/login', login.post)
router.post('/carers', carers.post)
router.post('/api/freindsrequest', freindsrequest.post)
router.post('/api/notification', notification.post)
router.post('/api/friendrequestcancel', handleRejectFriendRequest.post)
router.post('/api/friendrequestaccept', handleAcceptFriendRequest.post)
router.post('/api/checkFriendRelation', checkFriendRelation.post)
router.post('/api/cancelfriendrequest', cancelFriendRequest.post)
router.post('/api/sendmessage', handleMessages.post)



module.exports = router;
