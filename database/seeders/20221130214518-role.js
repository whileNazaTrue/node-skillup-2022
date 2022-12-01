'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('roles', [{
      name: 'Admin',
      description: 'Special user with full access to the system',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'User',
      description: 'Regular user with no special permissions',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
