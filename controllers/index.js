const router = require("express").Router();
const apiRoute = require("./api");

const dashboardRoute = require("./login-logout-route");
const homeRoute = require("./home-route");
const logRoute = require("./login-logout-route");

router.use("/api", apiRoute);
router.use("/dashboard", dashboardRoute);
router.use("/home", homeRoute);
router.use("/login", logRoute);

module.exports = router;