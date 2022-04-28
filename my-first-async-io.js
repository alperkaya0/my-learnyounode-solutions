const fs = require("fs");

let path = process.argv[2];
fs.readFile(path, "utf-8", (error, data) => {
    if (error) {
        console.error(error);
        return -1;
    }
    console.log(data.split("\n").length - 1);
});