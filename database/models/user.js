'use strict';
const {Model} = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static encryptPassword(password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    }
    static comparePassword(password){
        return bcrypt.compareSync(password, this.password) 
    }
    static associate(models) {
      User.belongsTo(models.Role, {
        as: 'role',
        foreignKey: 'roleId'
      });
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: "User",
    tableName: 'users',
    timestamps: true,
    paranoid: true
  });

  User.classMethod = async () => {

  }
  return User;
};