// new Date().getTime() EQUALS Unix time in milliseconds
const http = require("http");
const url = require("url");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type" : "application/json"});
    if (typeof req.url.split("?")[1] !== "undefined") {
        if (req.url.includes("parsetime")) {
            let u = new URL(req.url, "http://127.0.0.1");
            let iso = new Date(u.searchParams.get("iso"));
            let result = {
                "hour" : iso.getHours(),
                "minute" : iso.getMinutes(),
                "second" : iso.getSeconds()
            };
            res.write(JSON.stringify(result));
        } else {
            let u = new URL(req.url, "http://127.0.0.1");
            let iso = new Date(u.searchParams.get("iso"));
            let result = {
                "unixtime" : iso.getTime()
            };
            res.write(JSON.stringify(result));
        }
    }
    res.end();
}).listen(process.argv[2]);
