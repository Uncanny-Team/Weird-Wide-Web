const router = require("express").Router();
const controller = require("./controller");

// Matched with ".api.items"
// ==========================
router.route("/")
    .get(controller.findAll)
    .post(controller.create);

// Matches with "/api/items/:id"
// ===============================
router.route("/:id")


    module.exports = router;