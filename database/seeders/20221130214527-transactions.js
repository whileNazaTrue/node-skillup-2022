'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('transactions', [{
      description: 'Rent for the month of November',
      amount: 1000,
      categoryId: 2,
      userId: 1,
      date: 20201221121833,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Salary for the month of November',
      amount: 2000,
      categoryId: 4,
      userId: 2,
      date: 20201221121833,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Invoice for the month of November',
      amount: 500,
      categoryId: 3,
      userId: 2,
      date: 20201221121833,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Insurance for the month of November',
      amount: 200,
      categoryId: 5,
      userId: 2,
      date: 20201221121833,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Capital contribution for the month of November',
      amount: 500,
      categoryId: 6,
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
