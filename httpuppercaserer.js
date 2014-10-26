var http = require('http');
var map = require('through2-map');
var server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		req.pipe(map({wantStrings: true}, function (chunk) {
			return chunk.toUpperCase();
		})).pipe(res);
	}	else {
		res.writeHead(404, 'Send a POST \n');
		res.end();
	}
});
server.listen(+process.argv[2]);
