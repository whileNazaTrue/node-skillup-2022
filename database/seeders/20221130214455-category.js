module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [{
      name: 'Income',
      description: "Transactions from sending money to other users",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Outcome',
      description: "Transactions from receiving money from other users",
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
