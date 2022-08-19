'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate({ Fin_data }) {
      Schedule.belongsTo(Fin_data, { foreignKey: 'fin_data_id' });
    }
  }
  Schedule.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fin_data_id: {
      type: DataTypes.INTEGER,
      references: { model: 'Fin_data', key: 'id' },
    },
    1: {
      type: DataTypes.INTEGER,
    },
    2: {
      type: DataTypes.INTEGER,
    },
    3: {
      type: DataTypes.INTEGER,
    },
    4: {
      type: DataTypes.INTEGER,
    },
    5: {
      type: DataTypes.INTEGER,
    },
    6: {
      type: DataTypes.INTEGER,
    },
    7: {
      type: DataTypes.INTEGER,
    },
    8: {
      type: DataTypes.INTEGER,
    },
    9: {
      type: DataTypes.INTEGER,
    },
    10: {
      type: DataTypes.INTEGER,
    },
    11: {
      type: DataTypes.INTEGER,
    },
    12: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};
