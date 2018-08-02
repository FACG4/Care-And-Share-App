
const db = require('./../db_connection');

const acceptFriendRequest = (data, cb) => {
    console.log("datadata",data);
    
let  sql = {
  text: 'UPDATE connections SET relation_state = $1 WHERE id = $2',
  values: ['approved', data]
};

	db.query(sql, (err, results) => {
		if (err) return cb(err);
		return cb(null,results.rows);
	});
};

module.exports = acceptFriendRequest;

