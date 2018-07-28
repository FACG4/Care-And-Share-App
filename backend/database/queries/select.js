const db = require('./../db_connection');

const selectAllCarers = (cb) => {
	const sql = 'SELECT * from users';
	db.query(sql, (err, results) => {
		if (err) return cb(err);
		return cb(null,results.rows);
	});
};

module.exports = {selectAllCarers};
