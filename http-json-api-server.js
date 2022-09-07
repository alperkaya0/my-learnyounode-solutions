const express = require('express');
const app = express();

app.get("/api/parsetime", (req, res) => {
	let date = new Date(req.query.iso);
	res.writeHead(200, {"Content-Type": "application/json"});
	res.end(JSON.stringify({
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}));
});

app.get("/api/unixtime", (req, res) => {
        let date = new Date(req.query.iso);
	res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({
                unixtime: date.valueOf()
        }));
});

app.listen(process.argv[2]);
