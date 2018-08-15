const connection = require('./../db_connection');

const msgInsert = (message_body,sender_id ,receiver_id , cb) => {
  const sql = {
    text: 'INSERT INTO discussions(message_body,sender_id ,receiver_id ) VALUES($1,$2,$3) returning message_body ',
    values: [message_body,sender_id ,receiver_id ],
  };
  connection.query(sql, (err, res) => {

    
    if (err) cb(err);
    else { 
      cb(null, res.rows);
    }
  });
};

const msgSelect = (senderId,receiver_id ,cb) => {
  const sql = {
    text: "SELECT * FROM  discussions WHERE ((sender_id=$1 and receiver_id=$2) or  (sender_id=$2 and receiver_id=$1)) and user_seen='no' ORDER BY date_created",
    values: [senderId,receiver_id ],
  };
  connection.query(sql, (err, res) => {

     
    if (err) {
      
      cb(err);
    }
    else {   

      cb(null, res.rows);
    }
  });
};
const updatemsg = (cb) => {
  const sql = {
    text: "update discussions SET user_seen = 'no' WHERE user_seen = 'no' returning * ",

  };
  connection.query(sql, (err, res) => {

    if (err) {

      cb(err);
    }
    else {  
      
      cb(null, res);
    }
  });
};


module.exports ={msgInsert , msgSelect,updatemsg};