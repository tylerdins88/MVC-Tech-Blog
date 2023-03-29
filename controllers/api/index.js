const router = require("express").Router();

const userRoutes = require("./user-route");
const blogRoutes = require("./blog-route");
// const commentRoutes = require("./comment-route");

router.use("/user", userRoutes);
router.use("/blog", blogRoutes);
// router.use("/comment", commentRoutes);

module.exports = router;