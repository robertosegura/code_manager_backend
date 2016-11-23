'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Projects', [{
          name: 'Project 1',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Project 2',
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});

  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('Projects', null, {});

  }
};
