const { selectFriend, deleteFriend } = require('./../database/queries/friend');

exports.post = (req, res) => {

  if (req.body.id) {
    
    deleteFriend(req.body.id, (err, results) => {
      if (err) return res.send('error', err);
      return res.send(results);
    });
  } else {
    selectFriend((err, results) => {
      if (err) return res.send('error', err);
      return res.send(results);
    });
  }
};