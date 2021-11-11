'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: `Users`,
          key: `id`
        },
        onUpdate: `CASCADE`,
        onDelete: `CASCADE`
      },
      VideoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: `Videos`,
          key: `id`
        },
        onUpdate: `CASCADE`,
        onDelete: `CASCADE`
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comments');
  }
};