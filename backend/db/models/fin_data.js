'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fin_data extends Model {
    static associate({ Project, Fin_types,  Schedules}) {
      Fin_data.belongsTo(Project, { foreignKey: 'project_id' }),
      Fin_data.belongsTo(Fin_types, { foreignKey: 'fin_types_id' }),
      Fin_data.hasOne(Schedules, { foreignKey: 'fin_data_id' }),
    }
  }
  Fin_data.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fin_types_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Fin_types', key: 'id'}
    },
    project_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Projects', key: 'id'}
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    sum: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.TEXT
    },
    regular: {
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Fin_data',
  });
  return Fin_data;
};
