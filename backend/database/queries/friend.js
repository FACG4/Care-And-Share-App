const connection = require('./../db_connection');

const selectFriend = (id, cb) => {
  const sql = {
    text: 'select u.id as user_id, c.id, u.full_name, u.image from users as u, connections as c where (u.id =c.receiver_user_id and c.sender_user_id = $1 and c.relation_state = $2) or (u.id = c.sender_user_id and c.receiver_user_id = $1 and c.relation_state = $2)',
    values: [id, "approved"]
  }

  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    }
    else {
      cb(null, res.rows);
    }
  });
};


module.exports = { selectFriend };