var fs = require('fs')
var path = require('path')
module.exports = function (dir, ext, callback){
	var filteredList = []
	fs.readdir(dir, function (err, list){
		if (err)
			return callback(err)
		for(var i = 0; i < list.length; i ++){
			if (path.extname(list[i]) === '.' + ext)
				filteredList.push(list[i])
		}
		callback(null, filteredList);
	})
}