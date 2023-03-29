const Blog = require("./blog");
const Comment = require("./comment");
const User = require("./user");

Blog.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE" // deletes all comments when a blog is deleted
});

Blog.hasMany(Comment, {
    foreignKey: "blog_id"
})

Comment.belongsTo(Blog, {
    foreignKey: "blog_id"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

User.hasMany(Blog, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

module.exports = { Blog, User, Comment }