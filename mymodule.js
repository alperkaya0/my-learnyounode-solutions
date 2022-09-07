const fs = require('fs');

const path = process.argv[2];
const ext  = process.argv[3];

function filteredLs(path, ext, callback) {
	let res = [];
	fs.readdir(path, (err, files) => {
		if (err) return callback(err, null);
        	files.forEach(file => {
                	if (file.includes(".") && file.split(".")[file.split(".").length - 1] === ext) {
                        	res.push(file);
                	}
        	});
		if (res.length === 0) res.push("");
		callback(null, res);
	});
}

module.exports = filteredLs;
