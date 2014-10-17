var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var str = file.toString();
var subStr = str.split('\n');
console.log((subStr.length-1));

