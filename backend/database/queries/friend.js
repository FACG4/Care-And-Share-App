const connection = require('./../db_connection');

const selectFriend = (cb) => {
  const sql = 'SELECT id, full_name,image from users';

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


    // console.log('delete', res.rows);
    cb(null, res.rows);
  });
};


module.exports = { selectFriend, deleteFriend };