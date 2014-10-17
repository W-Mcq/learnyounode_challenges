var net = require('net');

function zeroFill(value) {
	if (value < 10) {
		return ('0' + value);
	}	else {
		return (value);
	}
}

var server = net.createServer(function (socket) {
	var dateTime = new Date();
	var year = dateTime.getFullYear();
	var month = zeroFill(dateTime.getMonth()+1);
	var day = zeroFill(dateTime.getDate());
	var hour = zeroFill(dateTime.getHours());
	var minute = zeroFill(dateTime.getMinutes());
	socket.end(''+year+'-'+month+'-'+day+' '+hour+':'+minute+'\n');	
});
server.listen(process.argv[2]);
