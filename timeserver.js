var net = require('net')

function zeroFill(value) {
	if (value < 10) {
		return ('0' + value)
	}	else {
		return (value)
	}
}
function timeFormat(time) {
	return(time.getFullYear()+'-'
			+zeroFill(time.getMonth()+1)+'-'
			+zeroFill(time.getDate())+' '
			+zeroFill(time.getHours())+':'
			+zeroFill(time.getMinutes()))			
}
var server = net.createServer(function (socket) {
	var time = new Date()
	var response = timeFormat(time) + '\n'
	socket.end(response)
})
server.listen(process.argv[2])
