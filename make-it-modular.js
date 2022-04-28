const mod = require("./mymodule");

mod(process.argv[2], process.argv[3], function (err, data) {
    if (err) {
        console.log(err);
    }else {
        data.forEach(element => {
            console.log(element);
        });
    }
});
