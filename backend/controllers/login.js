const { selectAllCarers } = require('../database/queries/select');

exports.post = (req, res)=>{
  selectAllCarers(req.body.userName, (err, results)=>{
    if (err)  return res.send({msg: 'error in database', status: 0});
    if (!results.length) return res.send({msg: 'Sorry .. User not found', status: 3});
    if (req.body.password == results[0].password) {
    return  res.send({msg: 'Login Success', status: 1})
    }
    return res.send({msg: 'Sorry .. Password is wrong', status: 2})
  })
};
