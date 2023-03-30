module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgeryId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    specialty: {
      type: DataTypes.STRING
    },
    doctor: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false,
    tableName: 'Surgeries',
    underscored: true
  });

  Surgery.associate = (models) => {
  };

  return Surgery;
};