const express = require('express');
const router = express.Router();
const carers = require('./carers');

router.post('/carers', carers.post)


module.exports = router;
