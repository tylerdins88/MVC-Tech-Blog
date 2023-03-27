const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt")
const sequelize = require("../config/connection");
// const { beforeCreate } = require("./blog");

class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = bcrypt.hash(newUserData.password, 8);
                return newUserData;
            } // ,
            // async beforeUpdate(updatedUserData) {
            //     updatedUserData.password = bcrypt.hash(updatedUserData.password, 8);
            //     return updatedUserData;
            // }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user"
    }
);

module.exports = User;