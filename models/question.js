'use strict';
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    question: DataTypes.STRING,

    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id'
      }
    }

  }, {
    //set the timestamps to be underscored: (created_at, updated_at)
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Question.belongsTo(models.Category);

        Question.hasMany(models.Answer, {
          onDelete: 'cascade'
        });
      }
    }
  });
  return Question;
};