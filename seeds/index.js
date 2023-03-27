const sequelize = require("../config/connection");
const { Blog, Comment, User } = require("../models");

const blogData = require("./blogData.json");
const commentData = require("./commentData.json");
const userData = require("./userData.json");

const seedDB = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    const Comment = await Comment.bulkCreate(commentData)

    const Blog = await Blog.bulkCreate(blogData);

    process.exit(0);
};

seedDB();