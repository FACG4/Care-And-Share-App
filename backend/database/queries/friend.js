const connection = require('./../db_connection');

const selectFriend = (cb) => {
  const sql = 'select users.full_name,users.image,users.id from users INNER JOIN connections ON connections.receiver_user_id = users.id'

  ;

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