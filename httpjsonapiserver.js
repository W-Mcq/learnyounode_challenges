var http = require('http')
var url = require('url')
function parsetime(time) {
	return(JSON.stringify({hour:time.getHours(),
							minute:time.getMinutes(),
							second:time.getSeconds()}))
}
function unixtime(time) {
	return(JSON.stringify({unixtime:time.getTime()}))
}
var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true)
	var response
	if (parsedUrl.pathname === '/api/parsetime'){
		response = parsetime(new Date(parsedUrl.query.iso))
	}	else if (parsedUrl.pathname === '/api/unixtime'){
		response = unixtime(new Date(parsedUrl.query.iso))
	}	else {
		res.writeHead(404)
		res.end()
	}
	res.writeHead(200, {'Content-Type': 'application/json'})
	res.end(response)
})
server.listen(+process.argv[2])