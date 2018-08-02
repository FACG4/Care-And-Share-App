const handleFriendsRequest = require('../database/queries/insert');

exports.post = (req, res) => {
  const {senderId, receiverId} = req.body;
  handleFriendsRequest(req.body, (err, results) => {
    console.log("error",err);
    if (err) return res.send({msg: 'Freind Request Failed',code:err.code, status: false});
    return res.send({msg: 'Freind Request Sent Successfully', status: true})
  })
}
