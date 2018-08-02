const { notificationFriendRequest } = require('../database/queries/select');

exports.post = (req, res)=>{
  const {id} = req.body;
  notificationFriendRequest(id, (err, results)=>{
    if (err)  res.send({msg: 'error in database connections', status: false});
res.send(results)
  })
};
