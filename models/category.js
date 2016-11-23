'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
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