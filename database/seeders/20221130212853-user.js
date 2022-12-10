'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      password: '$2b$10$92OrWsPeOtLJhZ.pYskLBeKKad/I3LejXP2jbj6TFSlZFDLGvihlG',
      avatarId: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@gmail.com',
      password: '$2b$10$92OrWsPeOtLJhZ.pYskLBeKKad/I3LejXP2jbj6TFSlZFDLGvihlG',
      avatarId: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      email: 'johnsmith@gmail.com',
      password: '$2b$10$92OrWsPeOtLJhZ.pYskLBeKKad/I3LejXP2jbj6TFSlZFDLGvihlG',
      avatarId: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'janesmith@gmail.com',
      password: '$2b$10$92OrWsPeOtLJhZ.pYskLBeKKad/I3LejXP2jbj6TFSlZFDLGvihlG',
      avatarId: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Mariano',
      lastName: 'Gonzalez',
      email: 'marianogonzalez@gmail.com',
      password: '$2b$10$92OrWsPeOtLJhZ.pYskLBeKKad/I3LejXP2jbj6TFSlZFDLGvihlG',
      avatarId: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Maria',
      lastName: 'Gonzalez',
      email: 'mariagonzalez@gmail.com',
      password: '$2b$10$92OrWsPeOtLJhZ.pYskLBeKKad/I3LejXP2jbj6TFSlZFDLGvihlG',
      avatarId: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Pedro',
      lastName: 'Ramirez',
      email: 'pedroramirez@gmail.com',
      password: '$2b$10$92OrWsPeOtLJhZ.pYskLBeKKad/I3LejXP2jbj6TFSlZFDLGvihlG',
      avatarId: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Pablo',
      lastName: 'Ramirez',
      email: 'pabloramirez@gmail.com',
      password: '$2b$10$92OrWsPeOtLJhZ.pYskLBeKKad/I3LejXP2jbj6TFSlZFDLGvihlG',
      avatarId: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Juan',
      lastName: 'Perez',
      email: 'juanperez@gmail.com',
      password: '$2b$10$92OrWsPeOtLJhZ.pYskLBeKKad/I3LejXP2jbj6TFSlZFDLGvihlG',
      avatarId: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jose',
      lastName: 'Perez',
      email: 'joseperez@gmail.com',
      password: '$2b$10$92OrWsPeOtLJhZ.pYskLBeKKad/I3LejXP2jbj6TFSlZFDLGvihlG',
      avatarId: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Carlos',
      lastName: 'Garcia',
      email: 'carlosgarcia@gmail.com',
      password: '$2b$10$C5CV2b3zrqCU.B5tkYssVegM97UO/FS9lWZaYNSrjmgcKkYJoJlFi',
      avatarId: null,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Carla',
      lastName: 'Garcia',
      email: 'carlagarcia@gmail.com',
      password: '$2b$10$C5CV2b3zrqCU.B5tkYssVegM97UO/FS9lWZaYNSrjmgcKkYJoJlFi',
      avatarId: null,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Luis',
      lastName: 'Gonzalez',
      email: 'luisgonzalez@gmail.com',
      password: '$2b$10$C5CV2b3zrqCU.B5tkYssVegM97UO/FS9lWZaYNSrjmgcKkYJoJlFi',
      avatarId: null,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Luisa',
      lastName: 'Gonzalez',
      email: 'luisagonzalez@gmail.com',
      password: '$2b$10$C5CV2b3zrqCU.B5tkYssVegM97UO/FS9lWZaYNSrjmgcKkYJoJlFi',
      avatarId: null,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Miguel',
      lastName: 'Gonzalez',
      email: 'miguelgonzalez@gmail.com',
      password: '$2b$10$C5CV2b3zrqCU.B5tkYssVegM97UO/FS9lWZaYNSrjmgcKkYJoJlFi',
      avatarId: null,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Miguelina',
      lastName: 'Gonzalez',
      email: 'miguelinagonzalez@gmail.com',
      password: '$2b$10$C5CV2b3zrqCU.B5tkYssVegM97UO/FS9lWZaYNSrjmgcKkYJoJlFi',
      avatarId: null,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Paulo',
      lastName: 'Rivero',
      email: 'paulorivero@gmail.com',
      password: '$2b$10$C5CV2b3zrqCU.B5tkYssVegM97UO/FS9lWZaYNSrjmgcKkYJoJlFi',
      avatarId: null,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Paula',
      lastName: 'Rivero',
      email: 'paularivero@gmail.com',
      password: '$2b$10$C5CV2b3zrqCU.B5tkYssVegM97UO/FS9lWZaYNSrjmgcKkYJoJlFi',
      avatarId: null,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Marta',
      lastName: 'Rivero',
      email: 'martarivero@gmail.com',
      password: '$2b$10$C5CV2b3zrqCU.B5tkYssVegM97UO/FS9lWZaYNSrjmgcKkYJoJlFi',
      avatarId: null,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Martin',
      lastName: 'Rivero',
      email: 'martinrivero@gmail.com',
      password: '$2b$10$C5CV2b3zrqCU.B5tkYssVegM97UO/FS9lWZaYNSrjmgcKkYJoJlFi',
      avatarId: null,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    } 
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
