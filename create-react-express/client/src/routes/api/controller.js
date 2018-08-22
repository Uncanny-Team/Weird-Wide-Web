const db = require("../../../../models");

module.exports = {
    findAll: function(req, res) {
        db.Item
        .find(req.query)
        .sort({exposure: -1})
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Item
        .create(req.body)
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },

}