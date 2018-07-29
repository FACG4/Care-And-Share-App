exports.get = (req, res)=>{
	res.json([{a:1, n:"a"},{a:13, n:"e"},{a:12, n:"c"}]);
};

exports.post = (req, res)=>{
	res.send([{a:1, n:"a"},{a:13, n:"e"},{a:12, n:"c"}]);
};
