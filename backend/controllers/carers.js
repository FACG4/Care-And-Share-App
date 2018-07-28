const { selectAllCarers } = require('../database/queries/select');

exports.post = (req, res)=>{
  selectAllCarers((err, results)=>{
    if (err)  console.log("error", err);
res.send(results)
  })
};
