const handleAcceptFriendRequest = require('../database/queries/update');

    exports.post = (req, res) => {
      const {connectionsId} = req.body;
      handleAcceptFriendRequest(connectionsId, (err, results) => {
        if (err) return res.send({msg: 'Accept Freind Request Failed',code:err.code, status: false});
        return res.send({msg: 'Freind Request accepted Successfully', status: true, deleteId:connectionsId})
      })
    }
