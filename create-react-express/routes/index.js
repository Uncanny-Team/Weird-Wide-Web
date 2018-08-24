const router = require("express").Router();
const itemRoutes = require("./api/router");
const authRoutes = require("./auth-routes");
const profileRoutes = require("./profile-routes");


// Item routes
router.use("/items", itemRoutes);
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);

module.exports = router;