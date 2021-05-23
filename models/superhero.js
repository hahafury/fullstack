'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    static associate(models) {}
  }
  Superhero.init(
    {
      nickname: {
        type: DataTypes.STRING,
        require: true,
        unique: true,
      },
      real_name: {
        type: DataTypes.STRING,
        require: true,
      },
      origin_description: DataTypes.STRING,
      superpowers: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      catch_phrase: DataTypes.STRING,
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
    },
    {
      sequelize,
      modelName: 'Superhero',
      underscored: true,
      tableName: 'Superheros',
    }
  );
  return Superhero;
};
