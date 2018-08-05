
const db = require('./../db_connection');

const acceptFriendRequest = (data, cb) => {
let  sql = {
  text: 'UPDATE connections SET relation_state = $1 WHERE id = $2',
  values: ['approved', data]
};

	db.query(sql, (err, results) => {
		if (err) return cb(err);
		return cb(null,results.rows);
	});
};

const handleMessages = (data, cb) => {
const	messages = data.messages
let sql = {
	text: 'UPDATE discussions SET message_body = "{ ddsds }" where sender_id = $2 AND receiver_id = $3',
	values: [{messages}, 1, 2]
}
db.query(sql, (err, results) => {
	if (err) return cb(err);
	return cb(null, results.rows);
});	

}

module.exports = { acceptFriendRequest, handleMessages};

