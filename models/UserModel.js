var mongoose = require('mongoose');

module.exports = mongoose.model(
    'users',
    new mongoose.Schema({
        username: { type: String},
        password: { type: String},
        email: { type: String }
    })
);
