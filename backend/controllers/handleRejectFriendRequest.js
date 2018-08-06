const rejectFriendRequest = require('../database/queries/delete');

exports.post = (req, res) => {
  const {connectionsId} = req.body;
  
  rejectFriendRequest.rejectFriendRequest(connectionsId, (err, results) => {
    
    if (err) return res.send({msg: 'Cancel Freind Request Failed',code:err.code, status: false});
    return res.send({msg: 'Freind Request Canceled Successfully', status: true})
  })
}
