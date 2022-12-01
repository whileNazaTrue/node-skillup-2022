'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('transactions', [{
      description: 'Recieving money from someone',
      amount: 1000,
      categoryId: 2,
      userId: 1,
      date: 20201221121833,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Sending money on November',
      amount: 2000,
      categoryId: 1,
      userId: 2,
      date: 20201221121833,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Recieving money from someone else',
      amount: 500,
      categoryId: 2,
      userId: 2,
      date: 20201221121833,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Sending money to another person',
      amount: 200,
      categoryId: 1,
      userId: 2,
      date: 20201221121833,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Sending money once again',
      amount: 500,
      categoryId: 1,
      userId: 2,
      date: 20201221121833,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('transactions', null, {});
  }
};