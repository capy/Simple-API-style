/**
 * Loads db connection.
 * @param server
 */
module.exports = function (server) {
    var db = require('mongoose');
    db.connect("mongodb://localhost:27017/simpleapistyle", function (err) {
        if (err) console.log(err);
    });
};