const db = require('./../db_connection');

const handleFriendsRequest = (data, cb) => {
const {senderId, receiverId} = data;
const sql = {text : 'INSERT INTO connections(sender_user_id, receiver_user_id) VALUES($1, $2)',
values:[senderId, receiverId]};
db.query(sql, (err, results) => {
  if (err) return cb(err);
  return cb(null,results);
})

	};

  module.exports = handleFriendsRequest;
