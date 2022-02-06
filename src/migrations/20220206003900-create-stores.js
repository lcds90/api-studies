'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const StoresTable = await queryInterface.createTable("Stores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      description: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    return StoresTable;
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Stores');
  }
};
