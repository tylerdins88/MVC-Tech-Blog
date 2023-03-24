const { timeStamp } = require("console");
const { Model, DataTypes } = require("sequelize");
const sequielize = require("../config/connection");

class Blog extends Model { }

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: faslse,
            unique: true
        },
        author_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "author",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "blog"
    }
);

module.exports = Blog;