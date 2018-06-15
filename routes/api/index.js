const router = require("express").Router();
const articlesRoutes = require("./articles");
const searchRoutes = require("./search");

// Articles routes
router.use("/articles", articlesRoutes);

//NYTimes API route
router.use("/search", searchRoutes);

module.exports = router;
