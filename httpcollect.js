var http = require('http');
http.get(process.argv[2], function(response) {
	var content = '';
	response.setEncoding('utf8');
	response.on('error', function(err) {
		console.error('Error: ' + err.message);
	});
	response.on('data', function(data) {
		content += data;
	});
	response.on('end', function() {
		console.log(content.length);
		console.log(content);
	});
});
