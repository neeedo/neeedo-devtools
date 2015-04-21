var fs = require('fs')
    , filename = process.argv[2];

module.exports.readFile = function (filename, callback) {
    fs.readFile(filename, 'utf8', function (err, data) {
        //if (err) throw err;
        callback(data);
    })
};