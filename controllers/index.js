const router = require("express").Router();
const apiRoute = require("./api");

const dashboardRoute = require("./dashboard-route");
const homeRoute = require("./home-route");
// const landingRoute = require("./landing-route.js");
const logRoute = require("./login-logout-route");
// const signUpRoute = require("./signup-route");


router.use("/api", apiRoute);
router.use("/dashboard", dashboardRoute);
router.use("/home", homeRoute);
// router.use("/", landingRoute);
router.use("/login", logRoute);
// router.use("/signup", signUpRoute);

module.exports = router;