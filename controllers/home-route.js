const router = require("express").Router();
const withAuth = require("../utils/helpers");
const { Blog, Comment, User } = require("../models");

router.get("/home", withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll(
            {
                include: [
                    {
                        model: User,
                        attributes: ["username"],
                    },
                    {
                        model: Comment,
                        attributes: ["content", "created_at"]
                    }
                ]
            });

        const blogs = blogData.map((post) => post.get({ plain: true }));

        res.render("home",
            {
                blogs,
                LoggedIn: req.session.LoggedIn
            })
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;