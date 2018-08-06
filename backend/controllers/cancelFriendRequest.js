const cancelFriendRequest = require('../database/queries/delete');

exports.post = (req, res) => {
    cancelFriendRequest.cancelFriendRequest(req.body, (err, results) => {
        if (err) return res.send({ msg: 'Cancel Freind Request Failed', code: err.code, status: false });
        return res.send({ msg: 'Freind Request Canceled Successfully', status: true })
    })
}
