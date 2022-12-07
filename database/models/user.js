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
    static associate(models) {
      User.belongsTo(models.Role, {
        as: 'role',
        foreignKey: 'roleId'
      });
      User.hasMany(models.Transaction, {
        as: 'transactions',
        foreignKey: 'userId'
      });
      User.belongsTo(models.Avatar, {
        as: 'avatar',
        foreignKey: 'avatarId'
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
    avatarId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: "User",
    tableName: 'users',
    timestamps: true,
    paranoid: true
  });

  User.prototype.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }

  User.prototype.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password) 
  }

  return User;
};