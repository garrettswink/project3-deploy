const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserModel extends Model {}

UserModel.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "userData",
  }
);

module.exports = UserModel;
