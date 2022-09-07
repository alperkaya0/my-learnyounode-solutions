const http = require('http');

let result = "";
let urls = [];

async function get(url) {
	return new Promise((resolve) => {
		http.get(url, (res) => {
                	res.setEncoding("utf-8")
			.on("data", (data) => {result += data})
                	.on("error", (error) => {console.log(error)})
        		.on("end", () => {resolve();});
		});
	});
}
async function main() {
	for (let i = 2; i < 5; ++i) {
        	urls.push(process.argv[i]);
	}
	for (let i = 0; i < urls.length; ++i) {
        	await get(urls[i]);
        	if (i < urls.length - 1) result += "\n";
	}
	console.log(result);
}
main();
