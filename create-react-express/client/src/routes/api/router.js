const router = require("express").Router();
const controller = require("./controller");

// Matched with "/api/items"
// ==========================
router.route("/")
.post(controller.create);

// Matches with "/api/items/:id"
// ===============================
router.route("/:tags/:medium/:nsfw/:weirdness")
.get(controller.find)

    module.exports = router;