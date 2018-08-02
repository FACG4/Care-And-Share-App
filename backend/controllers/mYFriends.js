const { selectFriend, deleteFriend } = require('./../database/queries/friend.js');

exports.post = (req, res) => {
  console.log('modaaal', req.body.id);


  if (req.body.id) {
    deleteFriend(req.body.id, (err, results) => {
      if (err) res.send('error', err);
      res.send(results);
    });
  } else {
    selectFriend((err, results) => {
      if (err) res.send('error', err);
      res.send(results);
    });
  }
};
