'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [{
      name: 'Various',
      description: "Transactions that don't fit in a special category",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rental',
      description: 'Rent, mortgage, and related payments',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Invoice',
      description: 'Payments for goods and services',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Salary',
      description: 'Payments to employees',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Insurance',
      description: 'Payments for insurance/healthcare',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Capital contribution',
      description: 'Payments for capital contributions for a business',
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
