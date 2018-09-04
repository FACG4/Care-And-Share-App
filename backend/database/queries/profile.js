const db = require('./../db_connection');

const insertProfileData = (data, cb) => {
  const { location, date_of_birth, cared_for_situation, looking_for, offer, id } = data;
  const sql = {
    text: 'UPDATE users SET (location, age, sitution, looking, offer) = ($1, $2, $3, $4, $5) where id = $6',
    values: [location, date_of_birth, cared_for_situation, looking_for, offer, id]
  }
  db.query(sql, (err, result) => {
    if (err){
      cb(err);
    } else {
      cb(null, result);
    }
  });
}

const getProfileData = (id, cb) => {
  const sql = {
    text: 'SELECT location, age, sitution, looking, offer FROM users WHERE id = $1',
    values: [id],
  }
  db.query(sql, (err, result) => {
    if (err){
      cb(err);
    } else {
      cb(null, result.rows);
    }
  });
}

module.exports = { insertProfileData, getProfileData };