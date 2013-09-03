var mongoose = require('mongoose');

var users = mongoose.model('users', new mongoose.Schema({
    username: { type: String},
    password: { type: String},
    email: { type: String }
}));

module.exports = users;
