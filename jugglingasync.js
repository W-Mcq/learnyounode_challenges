var http = require('http');
var fullCharList = ['','',''];
var countdown = 3;

function readoutstrings() {
	fullCharList.forEach(function (fullChar) {
		console.log(fullChar);
	});
}

function grabstrings(url, ii) {
	http.get(url, function(response){
			var fullChar = '';
			response.setEncoding('utf8');
			response.on('error', console.error);
			response.on("data", function(data){
				fullCharList[(ii-2)] += data;
			});
			response.on("end", function(){
				countdown--;
				if (countdown === 0) {
					readoutstrings();
				};
			});
		});
	}

for (var i = 2; i <=4; i++) {
	grabstrings(process.argv[i], i);
}