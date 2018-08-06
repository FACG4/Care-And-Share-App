const { selectFriend } = require('./../database/queries/friend');
const { cancelFriendRequest } = require('./../database/queries/delete');

exports.post = (req, res) => {
  if (req.body.senderId) {
    cancelFriendRequest(req.body, (err, results) => {
      if (err) return res.send('error', err);
      return res.send({isDeleted: true,});
    });
  } else {
    selectFriend((err, results) => {
      if (err) return res.send('error', err);
      return res.send(results);
    });
  }
};