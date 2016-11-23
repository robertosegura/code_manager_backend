'use strict';
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    question: DataTypes.STRING
  }, {
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