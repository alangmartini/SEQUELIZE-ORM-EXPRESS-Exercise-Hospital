module.exports = (sequelize, DataTypes) => {
  const patientOptions = {
    tableName: 'Patients',
    underscored: true,
    timestamps: false,
  };

  const Patient = sequelize.define('Patient', {
    patientId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING,
    },
    plan_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,   
    }
  }, patientOptions);

  Patient.associate = (models) => {
    Patient.hasOne(models.Plan, { foreignKey: 'planId', as: 'Plans' });

  };

  return Patient;
};