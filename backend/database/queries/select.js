const db = require('./../db_connection');

const selectAllCarers = (data, cb) => {
let  sql = {
  text: 'SELECT id, user_role, age, sitution, location, offer, looking from users where id != $1',
  values: [data]
};

	db.query(sql, (err, results) => {
		if (err) return cb(err);
		return cb(null,results.rows);
	});
};
const passwordCheck = (data, cb) => {

			let passwordsql = {
			text: 'select id, user_role, password from users where user_name = $1',
			values: [data]
		};

	db.query(passwordsql, (err, results) => {
		if (err) return cb(err);
		return cb(null,results.rows);
	});
};
const notificationFriendRequest = (data, cb) => {
			let sql = {
        text: 'select users.full_name,users.location, connections.id from users INNER JOIN connections ON connections.sender_user_id = users.id where connections.receiver_user_id = $1 AND relation_state = $2',
        values: [data, 'pending']
      };

	db.query(sql, (err, results) => {
		if (err) return cb(err);
		return cb(null,results.rows);
	});
};

const checkFriendRelation = (data, cb) => {
	let sql = {
		text: 'select * from connections where sender_user_id = $1 OR receiver_user_id = $1',
		values: [data]
	}
		db.query(sql, (err, results) =>{
			if(err) return cb(err);
			return cb(null, results.rows)
		} )
}

module.exports = { checkFriendRelation, selectAllCarers, passwordCheck, notificationFriendRequest};
