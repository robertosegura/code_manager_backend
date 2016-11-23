'use strict';

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Project.hasMany(models.Category, {
          onDelete: 'cascade'
        });
      }
    }
  });
  return Project;
};