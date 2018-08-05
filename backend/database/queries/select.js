const db = require('./../db_connection');

const selectAllCarers = (data, cb) => {
  let sql = 'SELECT * from users';

	if (data) {
			sql = {
			text: 'select * from users where user_name = $1',
			values: [data]
		};

	}
	db.query(sql, (err, results) => {
		if (err) return cb(err);
		return cb(null,results.rows);
	});
};

const selectUserData = (id, cb) => {
  const sql = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [id],
  }
  db.query(sql, (err, result) => {
    if (err) return cb(err);
    cb(null, result.rows)
  })
}
module.exports = { selectAllCarers, selectUserData };
