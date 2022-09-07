const http = require('http');
http.createServer((req, res) => {
	let sum = "";
	if (req.method === "POST") {
		req.setEncoding("utf-8")
		.on("data", (data) => {
                	sum += data;
        	})
		.on("end", () => {
			res.writeHead(200, {"Content-Type" : "text/html"});
			res.end(sum.toUpperCase());
		});
	}
}).listen(process.argv[2]);
