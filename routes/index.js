const router = require("express").Router();
const itemRoutes = require("./api/router");
const authRoutes = require("./auth-routes");
const profileRoutes = require("./profile-routes");

// Item routes
router.use("/api/items", itemRoutes);
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/src/index"));
  });

module.exports = router;