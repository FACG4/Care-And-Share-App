
const {msgSelect, updatemsg}=require('./../database/queries/chat.js')


exports.post =(req,res) =>{

  const { senderId, reciverId}= req.body
  
  msgSelect( senderId,Number(reciverId),(err,result)=>{
    if (err)
  {
  
       return res.send({err});
    }
    else{
      updatemsg((err,resultUP)=>{
        if (err)
        {
     
             return res.send({err});
          }
          else{
    ;
        return res.json({res:result.rows});

          }
      })

    }

  })

}
