/*jslint node: true*/
"use strict";
var http = require('http');
var fullCharList = [];
var countdown = process.argv.length - 2;
var i;

function readoutstrings() {
	fullCharList.forEach(function (fullChar) {
		console.log(fullChar);
	});
}

function grabstrings(url, ii) {
	http.get(url, function (response) {
		var content = '';
		response.setEncoding('utf8');
		response.on('error', function (err) {
			console.log('Error: ', err);
		});
		response.on('data', function (data) {
			content += data;
		});
		response.on('end', function () {
      fullCharList[ii] = content;
			countdown -= 1;
      if (countdown === 0) {
        readoutstrings();
      }
		});
	});
}

for (i = 0; i <= process.argv.length - 3; i += 1) {
	grabstrings(process.argv[i + 2], i);
}
