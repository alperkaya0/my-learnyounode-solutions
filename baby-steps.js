let arr = process.argv;
if (arr.length > 2) {
	let sum = 0;
	for (let x = 2; x < arr.length; ++x) {
		sum += parseInt(arr[x]);
	}
	console.log(sum);
} else {
	console.log(0);
}
