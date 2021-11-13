const db = require("../models");

module.exports = {
    create: function (req, res) {
        var data = req.body;
        db.WordModel
            .create(data)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.WordModel
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllTukren: function (req, res) {
        db.WordModel
            .find({
                language: "Tukren"
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        db.WordModel
            .findOne({
                conlang: req.params.word
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    deleteAll: function(req, res) {
        db.WordModel
            .deleteMany({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
