const http = require("http");
const fs = require("fs");
const server = http.createServer(function (req, res) {
    if (req.method == "POST") {
        req.on("data", function(data) {
            res.write(String(data).toUpperCase());
        })
    }
}).listen(parseInt(process.argv[2]));
