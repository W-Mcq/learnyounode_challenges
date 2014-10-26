var http = require('http');
http.get(process.argv[2], function (res) {
	res.setEncoding('utf8');
	res.on('error', function (err) {
		console.error('Error: ' + err);
	});
	res.on('data', function (data) {
		console.log(data);
	});
});
