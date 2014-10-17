var http = require('http')	
var url = require('url')
var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'pplication/json'})
	var parsedUrl = url.parse(req.url, true)
	if (parsedUrl.pathname === '/api/parsetime'){
		var iso = parsedUrl.query.iso
		var mlsec = Date.parse(iso)
		var dateRes = new Date()
		dateRes.setTime(mlsec)
		res.end(JSON.stringify({hour: dateRes.getHours(), minute: dateRes.getMinutes(), second: dateRes.getSeconds()}))
	}	else if (parsedUrl.pathname === '/api/unixtime'){
		var iso = parsedUrl.query.iso
		var mlsec = Date.parse(iso)
		var dateRes = new Date()
		dateRes.setTime(mlsec)
		res.end(JSON.stringify({unixtime: dateRes.getTime()}))
	}	else {
		res.end("I'm sorry, that is an invalid request")
	}
	
})
server.listen(process.argv[2])