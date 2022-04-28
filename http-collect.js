const http = require("http");

http.get(process.argv[2], (res) => {
    let result = "";
    res.setEncoding("utf-8").on("data", function (data) {
        result += data;
    });
    res.setEncoding("utf-8").on("end", () => {
        console.log(result.length);
        console.log(result);
    })
});