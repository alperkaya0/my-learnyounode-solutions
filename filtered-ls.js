const fs = require("fs");
const pathmod = require("path");

let path = process.argv[2];
let ext = "." + process.argv[3];
fs.readdir(path, function (err, files) {
    if (err) {
        console.log("Error happened: "+ err);
        return -1;
    }
    files.forEach( function (file) {
        if (pathmod.extname(file) === ext) {
            console.log(file);
        }
    });
});