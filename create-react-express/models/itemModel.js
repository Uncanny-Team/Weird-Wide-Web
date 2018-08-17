var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    title: {
        type: String,
        required: "To make a new entry a title is required."
    },
    category: {
        type: Array,
        required: "Please select at least one category for the item."
    },
    medium: {
        type: String,
        required: "Select what medium the item is."
    },
    tags: {
        type: Array
    },
    url: {
        type: Array,
        validate: validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
        message: "Please enter a valid URL."
    },
    image: {
        type: Array
    },
    description: {
        type: String,
        required: "Please right a quick description for the item."
    },
    exposure: {
        type: Number,
        default: 0
    },
    weirdness: {
        type: Number,
        default: 0
    },
    comments: {
        type: Array
    },
    itemCreated: {
        type: Date,
        default: Date.now
    }
});

var Item = mongoose.model("Item", ItemSchema);

module.exports = Item;