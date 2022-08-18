'use strict';
const {
  Model
} = require('DataTypes');
module.exports = (DataTypes, DataTypes) => {
  class Schedule extends Model {
    static associate({ Fin_data }) {
      Schedule.hasOne(Fin_data, { foreignKey: 'fin_data_id'})
    }
  }
  Schedule.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fin_data_id: {
      type: DataTypes.INTEGER,
      references: {model: 'Fin_data', key: 'id'}
    },
    m1: {
      type: DataTypes.INTEGER
    },
    m2: {
      type: DataTypes.INTEGER
    },
    m3: {
      type: DataTypes.INTEGER
    },
    m4: {
      type: DataTypes.INTEGER
    },
    m5: {
      type: DataTypes.INTEGER
    },
    m6: {
      type: DataTypes.INTEGER
    },
    m7: {
      type: DataTypes.INTEGER
    },
    m8: {
      type: DataTypes.INTEGER
    },
    m9: {
      type: DataTypes.INTEGER
    },
    m10: {
      type: DataTypes.INTEGER
    },
    m11: {
      type: DataTypes.INTEGER
    },
    m12: {
      type: DataTypes.INTEGER
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
    modelName: 'Schedule',
  });
  return Schedule;
};
