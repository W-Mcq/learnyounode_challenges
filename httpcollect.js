var http = require('http');
var fullChar = '';
http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	response.on('error', console.error);
	response.on("data", function(data){
		fullChar += data
		});
	response.on("end", function(){
		console.log(fullChar.length);
		console.log(fullChar);
		});
	});