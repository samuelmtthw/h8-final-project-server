'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Video.belongsTo(models.Course, { foreignKey: 'CourseId' })
    }
  };
  Video.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Name can't be empty` },
        notNull: { msg: `Name can't be empty` }
      }
    },

    videoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Video URL can't be empty` },
        notNull: { msg: `Video URL can't be empty` }
      }
    },

    CourseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Course can't be empty` },
        notNull: { msg: `Course can't be empty` }
      }
    }

  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};