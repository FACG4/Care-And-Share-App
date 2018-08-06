
const db = require('./../db_connection');

const rejectFriendRequest = (data, cb) => {
let  sql = {
  text: 'delete from connections where id = $1 returning *',
  values: [data]
};

	db.query(sql, (err, results) => {
		if (err) return cb(err);
		return cb(null,results.rows);
	});
};


const cancelFriendRequest = (data, cb) => {
	let sql = {
		text: 'delete from connections where (sender_user_id = $1 AND receiver_user_id = $2) OR (sender_user_id = $2 AND receiver_user_id = $1)',
		values: [data.senderId, data.receiverId]
	};

	db.query(sql, (err, results) => {
		if (err) return cb(err);
		return cb(null, results.rows);
	});
};

module.exports = { rejectFriendRequest, cancelFriendRequest};
