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

function getUrlContent(url, callback) {
  http.get(url, function (response) {
    var content = '';
    response.setEncoding('utf8');
    response.on('error', function (err) {
      return callback(err);
    });
    response.on('data', function (data) {
      content += data;
    });
    response.on('end', function () {
      return callback(null,  content);
    });
  });
}

function grabstrings(url, index, array) {
  if (index > 1) {
    getUrlContent(url, function (err, content) {
      if (err) {
        return console.log(err);
      }
      fullCharList[index - 2] = content;
      countdown -= 1;
      if (countdown === 0) {
        readoutstrings();
      }
    });
  }
}

process.argv.forEach(grabstrings);
