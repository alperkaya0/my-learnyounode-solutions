const net = require('net');
function fill(str) {
	if (str < 10) {
		str = str.toString();
		str = "0" + str;
	}
	return str;
}
const server = net.createServer((socket) => {
	//"YYYY-MM-DD hh:mm"
	let date = new Date();
	let year = date.getFullYear();
	let month= fill(date.getMonth()+1);
	let day  = fill(date.getDate());
	let hour = fill(date.getHours());
	let min  = fill(date.getMinutes());

	socket.end(`${year}-${month}-${day} ${hour}:${min}\n`);
});
server.listen(parseInt(process.argv[2]));
