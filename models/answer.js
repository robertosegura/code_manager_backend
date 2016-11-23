'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    answer: DataTypes.STRING,

    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Questions',
        key: 'id'
      }
    }

  }, {
    //set the timestamps to be underscored: (created_at, updated_at)
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Answer.belongsTo(models.Question);
      }
    }
  });

  return Answer;
};