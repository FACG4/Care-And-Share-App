const { checkFriendRelation } = require('../database/queries/select');

exports.post = (req, res) => {
    checkFriendRelation(req.body.userId, (err, results) => {
        if (err) return res.send({ msg: 'error in database connections', status: false });
        
        return res.send(results)
    })
};

