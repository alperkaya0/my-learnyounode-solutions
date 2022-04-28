function func(path, ext, callback) {
    const fs = require("fs");
    const pathmod = require("path");
    
    fs.readdir(path, function (err, files) {
        if (err) {
            callback(err);
            return -1;
        }
        let res = [];
        files.forEach( function (file) {
            if (pathmod.extname(file) === "."+ext) {
                res.push(file);
            }
        });
        if (res.length === 0) {
            res.push("");
        }
        callback(null, res);
        return 1;
    });
}

module.exports = func;
