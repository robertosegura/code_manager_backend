'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,

    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Projects',
        key: 'id'
      }
    }

  }, {
    //set the timestamps to be underscored: (created_at, updated_at)
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Category.belongsTo(models.Project);

        Category.hasMany(models.Question, {
          onDelete: 'cascade'
        });
      }
    }
  });
  return Category;
};