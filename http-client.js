const http = require('http');

http.get(process.argv[2], (resp) => {
	resp.setEncoding("utf-8").on('data', (chunk) => {
		console.log(chunk);
	});
	resp.on("error", () => {console.log("Fuck errors")});
});
