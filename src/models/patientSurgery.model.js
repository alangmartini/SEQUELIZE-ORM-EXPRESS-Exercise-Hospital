module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define('PatientSurgery', 
  {
  }, 
  {
    tableName: 'Patient_surgeries',
    underscored: true,
    timestamps: false,
  });

  PatientSurgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'Surgeries',
      through: PatientSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id'
    });

    models.Surgery.belongsToMany(models.Patient, {
      as: 'Patients',
      through: PatientSurgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id'
    })
  }

  return PatientSurgery;
};