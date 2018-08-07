const { selectFriend } = require('./../database/queries/friend');
const { cancelFriendRequest } = require('./../database/queries/delete');

exports.post = (req, res) => {
 
    selectFriend(req.body.id ,(err, results) => {
      if (err) return res.send('error', err);
      return res.send(results);
    });
  }


exports.delete=(req,res)=>{
  cancelFriendRequest({senderId: req.body.id, receiverId: req.body.receiverId}, (err, results) => {
    if (err) return res.send('error', err);
    console.log('aaaa',results);
    return res.send({isDeleted: true,});
  });

}