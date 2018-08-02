const deleteFriendRequest = require('../database/queries/delete');

exports.post = (req, res) => {
  const {connectionsId} = req.body;
  console.log(req.body);
  deleteFriendRequest(connectionsId, (err, results) => {
    console.log("error",err);
    if (err) return res.send({msg: 'Cancel Freind Request Failed',code:err.code, status: false});
    return res.send({msg: 'Freind Request Canceled Successfully', status: true, deleteId:connectionsId})
  })
}
