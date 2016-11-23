'use strict';

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    name: DataTypes.STRING
  }, {
    //set the timestamps to be underscored: (created_at, updated_at)
    underscored: true,
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