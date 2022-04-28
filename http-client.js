const http = require("http");

http.get(process.argv[2], (res) => {
    res.setEncoding("utf-8").on("data", function (data) {
        console.log(data);
    });
    res.setEncoding("utf-8").on("error", function(err) {
        console.error(err);
    })
});