const express = require('express');
const router = express.Router();

const carers = require('./carers');
const login = require('./login');
const { postProfile, getProfile } = require('./profile');
const signUp = require('./signUp.js');
const myFriends = require('./myFriends')
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
router.get('/api/profile', getProfile)
router.put('/api/profile', postProfile)
router.post('/api/myFriends', myFriends.post)
router.post('/api/signUp', signUp.post);


module.exports = router;

