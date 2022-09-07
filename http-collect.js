const http = require('http');

http.get(process.argv[2], (res) => {
	let sum = "";
	res.setEncoding("utf-8")
	.on("data", (data) => {sum += data;})
	.on("error",(error)=> {console.log(error);})
	.on("end", () => {console.log(sum.length);console.log(sum);});
});
