var mimmodule = require('./mimmodule.js');
mimmodule(process.argv[2], process.argv[3], function callback(err, fileName) {
	if (err) throw err;
	for(var i = 0; i < fileName.length; i++) {
	console.log(fileName[i]);
	}
	});
	