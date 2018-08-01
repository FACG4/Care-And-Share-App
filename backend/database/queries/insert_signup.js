const connection = require('./../db_connection');

const signupInsert = (fullName, userName, email, password, cb) => {
  const sql = {
    text: 'INSERT INTO users(full_name, user_name, email, password) VALUES($1,$2,$3,$4) ',
    values: [fullName, userName, email, password],
  };
  connection.query(sql, (err, res) => {

    
    if (err) cb(err);
    else {   
      cb(null, res.rows);
    }
  });
};
//upload

module.exports = signupInsert;


