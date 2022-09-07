const fs = require('fs');

const path = process.argv[2];
const ext  = process.argv[3];

fs.readdir(path, (err, files) => {
	files.forEach(file => {
		if (file.includes(".") && file.split(".")[file.split(".").length - 1] === ext) {
			console.log(file);
		}
	});
});
