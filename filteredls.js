fs = require('fs');
path = require('path');
fs.readdir(process.argv[2], function (err, list) {
	if (err)
		return console.error('Error: ', err);
	for (i = 0; i < list.length; i++) {
		if (path.extname(list[i]) === '.' + process.argv[3]) {
			console.log(list[i]);
    }
	}
});
