const fs = require('fs');

let path = process.argv[2];
fs.readFile(path, "utf-8", (err, data) => {
	console.log(data.split("\n").length - 1);
});
