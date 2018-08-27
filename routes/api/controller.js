const db = require("../../models");

module.exports = {
    find: function(req, res) {
        console.log("req params")
        console.log(req.params.tags);
        db.Item
        .find({medium: req.params.medium, nsfw: req.params.nsfw, weirdness: req.params.weirdness})
        .sort({exposure: -1})
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("create working")
        db.Item
        .create(req.body)
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    random: function(req, res) {
        console.log("Calling randomizer");
        db.Item
        .aggregate(
            [ { $sample: {size:2 }} ]
        )
        .then(xyz => alert(xyz))
        .catch(err => res.status(422).json(err));
    }

}