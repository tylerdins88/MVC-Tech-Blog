const withAuth = require("../utils/auth");
const router = require("express").Router();
const { Blog } = require("../models");

router.get("/dashboard", withAuth, async (req, res) => {
    try {
        const userBlogData = await Blog.findAll({
            where: {
                user_id: req.session.id,
            }
        });
        const userBlogs = userBlogData.map((post) => post.get({ plain: true }));
        res.render("dashboard", {
            userBlogs,
            LoggedIn: req.session.LoggedIn
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

module.exports = router; 