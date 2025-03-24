'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Contacts', [
      {
        firstname: 'Kevin',
        lastname: 'Veramendi',
        phone: '903052820',
        email: 'kevin_veramendi18@hotmail.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
      {
        firstname: 'Valentina',
        lastname: 'Encarnacion',
        phone: '986074168',
        email: 'danivalentinaxd@gmail.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
