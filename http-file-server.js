const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	let path = process.argv[3];
	let src = fs.createReadStream(path);
	src.on("open", () => {
		src.pipe(res);
	});
}).listen(process.argv[2]);
