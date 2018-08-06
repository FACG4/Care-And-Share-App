const connection = require('./../db_connection');

const selectFriend = (cb) => {
  const sql = 'select users.full_name,users.image from users INNER JOIN connections ON connections.receiver_user_id = users.id'

  ;

  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {
      cb(null, res.rows);
    }
  });
};

const deleteFriend = (id, cb) => {
  const sql = {
    text: 'DELETE FROM users WHERE id=$1 RETURNING id ',
    values: [id],
  };

  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    }


    
    cb(null, res.rows);
  });
};


module.exports = { selectFriend, deleteFriend };