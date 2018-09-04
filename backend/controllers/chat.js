
const {msgInsert} =require('./../database/queries/chat.js')
exports.post = (req, res) => {
 
  const {senderId, reciverId, msg} = req.body;

  msgInsert( msg ,senderId, reciverId,(err,result)=>{
    if (err) return res.send({err});
    return res.send({result});

  })
}