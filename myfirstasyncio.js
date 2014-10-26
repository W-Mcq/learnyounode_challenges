var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (err, file) {
	if (err) {
		return console.error('Error: ', err)
  }
	console.log(file.split('\n').length-1);
});
