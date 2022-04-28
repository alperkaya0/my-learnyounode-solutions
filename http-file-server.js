//https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-read-stream/

const http = require("http");
const fs = require("fs");
const server = http.createServer(function (req, res) {
    let rs = fs.createReadStream(process.argv[3]);

    rs.on("open", function() {
        rs.pipe(res);
    });
}).listen(parseInt(process.argv[2]));