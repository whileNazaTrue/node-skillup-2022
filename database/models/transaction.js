'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
      Transaction.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category'
      })
    }
  };
  Transaction.init({
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }, 
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: "Transaction",
    tableName: 'transactions',
    timestamps: true,
    paranoid: true
  });
  return Transaction;
};