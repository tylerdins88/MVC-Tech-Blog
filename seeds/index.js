const sequelize = require("../config/connection");
const { Blog, Comment, User } = require("../models");

const blogData = require("./blogData");
const commentData = require("./commentData")