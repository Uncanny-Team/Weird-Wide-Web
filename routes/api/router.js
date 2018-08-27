const router = require("express").Router();
const controller = require("./controller");

// Matched with "/api/items"
// ==========================
router.route("/")
.post(controller.create)
.get(controller.random);

// Matches with "/api/items/:id"
// ===============================
router.route("/:medium/:nsfw/:weirdness")
.get(controller.find);

// Matches with "/random"
// ========================
router.route("/api/random")
.get(controller.random);

    module.exports = router;