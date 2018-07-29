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

module.exports = {selectAllCarers};
