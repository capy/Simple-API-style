
module.exports = function (app) {

    var user = require('../models/UserModel.js');
    var models = [user];

    models.forEach(function (model) {

        //List
        app.get("/" + model.modelName, function (req, res) {
            return model.find({}, function (err, data) {
                return res.json(data);
            });
        });

        //Get user
        app.get("/" + model.modelName + "/:id", function (req, res) {
            return model.findById(req.params.id, function (err, data) {
                return res.json(data);
            });
        });

        //Create user
        app.post("/" + model.modelName, function (req, res) {
            return new model(req.body).save(function (err, data) {
                return res.json(data);
            });
        });

        //Delete user
        app.del("/" + model.modelName + "/:id", function (req, res) {
            return model.remove({_id: req.params.id}, function (err, count) {
                return res.json({count: count});
            });
        });

        //Update user
        app.put("/" + model.modelName + "/:id", function (req, res) {
            return model.update({_id: req.params.id}, req.body, {multi: false}, function (err, count) {
                return res.json({count: count});
            });
        });

    });

};