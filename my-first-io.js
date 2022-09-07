const fs = require('fs');

let path = process.argv[2];
let result = fs.readFileSync(path, "utf-8").split("\n").length - 1;
console.log(result);

