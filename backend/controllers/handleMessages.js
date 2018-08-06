const fetchMessages = require('../database/queries/select');
const handleMessages = require('../database/queries/update');


exports.post = (req, res) => {
    fetchMessages.fetchMessages(req.body, (err, results) => {
        if (err) return res.send({ msg: 'Request Failed 1', code: err.code, status: false });
        if (req.body.messages) {
            
            handleMessages.handleMessages(results, (err, allResults) =>{
                if (err) return res.send({ msg: 'Request Failed 2', code: err.code, status: false });
                return res.send({ results, msg: ' Successfully 2', allResults })
            } )
        }
    })

}