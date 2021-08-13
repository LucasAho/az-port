const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.EssayModel
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByGenre: function (req,res) {
        db.EssayModel    
            .findOne({
                genre: req.params.topic
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findWhereGenre: function (req,res) {
        db.EssayModel    
            .find({
                genre: req.params.topic
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findGenres: function (req,res) {
        db.EssayModel
            .find({},
            'genre')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findDataExcept: function (req, res) {
        db.EssayModel
            .find( { _id: { $ne: req.params.id } }, 
            ["genre", "title", "dateWritten"])
            .then(dbModel => res.json(dbModel) )
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.EssayModel
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.EssayModel
            .findById(req.params.id)
            .sort({ created_at: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.EssayModel
            .findByIdAndDelete(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
