const router = require("express").Router();
const { Blog, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    try {
        const blogData = await Blog.findAll(
            {
                include: [
                    {
                        model: User,
                        attributes: ["username"]
                    }
                ]
            })

        const blogs = blogData.map((post) => post.get({ plain: true }));
        res.render("landing",
            {
                blogs,
                LoggedIn: req.session.LoggedIn
            });
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;