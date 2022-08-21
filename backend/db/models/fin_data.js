const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line camelcase
  class Fin_data extends Model {
    static associate({ Project, Fin_types}) {
      Fin_data.belongsTo(Project, { foreignKey: 'project_id' }),
      Fin_data.belongsTo(Fin_types, { foreignKey: 'fin_types_id' });
    }
  }
  Fin_data.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fin_types_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Fin_types', key: 'id' },
    },
    project_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Projects', key: 'id' },
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    sum: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    1: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    2: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    3: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    4: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    5: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    6: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    7: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    8: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    9: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    10: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    11: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    12: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    start_date: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    end_date: {
      type: DataTypes.TEXT,
    },
    regular: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Fin_data',
  });
  return Fin_data;
};
