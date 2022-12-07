'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avatar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Avatar.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'avatarId'
      });
    }
  };
  Avatar.init({
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Avatar',
    tableName: 'avatars',
    timestamps: true,
    paranoid: true
  });
  return Avatar;
};