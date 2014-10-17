var fs = require('fs');
var file;
fs.readFile(process.argv[2], 'utf8', function(err, file) {
	if (err) throw err;
	var fileArray = file.split('\n');
	console.log(fileArray.length-1);
	});