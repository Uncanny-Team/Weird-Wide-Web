const router = require("express").Router();
const itemRoutes = require("./router");

// Item routes
router.use("/items", itemRoutes);

module.exports = router;