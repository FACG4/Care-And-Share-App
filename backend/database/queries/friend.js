const connection = require('./../db_connection');

const selectFriend = (id, cb) => {
  const sql = {
    text: 'select users.id,users.full_name,users.image from users INNER JOIN connections ON connections.receiver_user_id = users.id where connections.sender_user_id= $1',
    values: [id]
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