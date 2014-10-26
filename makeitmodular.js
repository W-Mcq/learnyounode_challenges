/*jslint node: true*/
"use strict";
var mimmodule = require('./mimmodule.js');
mimmodule(process.argv[2], process.argv[3], function (err, fileName) {
  var i;
	if (err) {
		return console.error('Error: ', err);
  }
	for (i = 0; i < fileName.length; i += 1) {
		console.log(fileName[i]);
  }
});
