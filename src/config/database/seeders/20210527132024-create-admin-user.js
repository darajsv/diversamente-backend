'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', 
      [{
        name: 'Administrador',
        email: 'admin@diversamente.com',
        password: 
        '$2y$08$5PwwMWX9N8ZNFAFasm.0aeLXKbhT6NtnQbEmtxv7MBVr2VVMxl7AG',
        created_at: new Date(),
        updated_at: new Date(),
      }], 
    ); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});     
  }
};
