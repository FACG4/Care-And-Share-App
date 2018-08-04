const handleFriendsRequest = require('../database/queries/insert');

exports.post = (req, res) => {
  const {senderId, receiverId} = req.body;
  handleFriendsRequest(req.body, (err, results) => {
    if (err) return res.send({msg: 'Freind Request Failed',code:err.code, status: false});
    return res.send({ title: "addFriend", msg: 'Freind Request Sent Successfully', status: true})
  })
}
