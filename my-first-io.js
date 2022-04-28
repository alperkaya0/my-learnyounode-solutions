const fs = require("fs");

let path = process.argv[2];
try {
    let text = fs.readFileSync(path, "utf-8");
    console.log(text.split("\n").length - 1);    
}catch (error) {
    console.log("Unfortunately an error occured: "+error);
}