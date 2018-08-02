
const db = require('./../db_connection');

const deleteFriendRequest = (data, cb) => {
let  sql = {
  text: 'delete from connections where id = $1',
  values: [data]
};

	db.query(sql, (err, results) => {
		if (err) return cb(err);
		return cb(null,results.rows);
	});
};

module.exports = deleteFriendRequest;
